import { useRouter } from "next/router";
import getResults from "@/utils/cachedImages";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import cloudinary from "@/utils/cloudinary";
import NextFutureImage from "next/image";
import Link from "next/link";

const Gallery = ({ selectedPhoto }) => {
  const currentPhotoURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${selectedPhoto.public_id}.${selectedPhoto.format}`;

  return (
      <main className="relative">
        <div className="px-4 py-4">
          <div className="relative">
            <Link
                href="/gallery"
                className="rounded px-2 py-2 inline-block absolute top-4 left-4 bg-yolk text-black text-sm border-black border leading-none transition betterhover:hover:bg-yolk/75"
            >
              Back to Gallery
            </Link>
            <NextFutureImage
                alt=""
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560,q_auto:good,f_auto/${selectedPhoto.public_id}`}
                unoptimized
                loading="eager"
                placeholder="blur"
                blurDataURL={selectedPhoto.blurDataUrl}
                fill // Ensure fill is set to true
                className="rounded shadow-md !relative"
                style={{
                  maxWidth: "100%"
                }} // Remove height property
            />
          </div>
        </div>
      </main>
  );
};

export const getStaticProps = async (context) => {
  const results = await getResults();

  let reducedResults = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      width: result.width,
      public_id: result.public_id,
      slug: result.public_id.split("/").pop(),
      format: result.format,
    });
    i++;
  }

  const { photoId } = context.params;
  let selectedPhoto = reducedResults.find((img) => img.slug === photoId);
  if (!selectedPhoto && /^\d+$/.test(photoId)) {
    // legacy index-based URLs from before slug routing
    const legacy = reducedResults[Number(photoId)];
    if (legacy) {
      return {
        redirect: {
          destination: `/gallery/${legacy.slug}`,
          permanent: true,
        },
      };
    }
  }
  if (!selectedPhoto) {
    return { notFound: true, revalidate: 60 };
  }
  selectedPhoto.blurDataUrl = await getBase64ImageUrl(selectedPhoto);

  return {
    props: {
      selectedPhoto: selectedPhoto,
    },
    revalidate: 3600,
  };
};

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
      .expression(`folder:ashie/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();

  let fullPaths = [];
  for (let result of results.resources) {
    fullPaths.push({ params: { photoId: result.public_id.split("/").pop() } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}

export default Gallery;