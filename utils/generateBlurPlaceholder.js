const cache = new Map();

export default async function getBase64ImageUrl(image) {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_webp,w_8,q_70,fl_strip_profile/${image.public_id}.${image.format}`
  );
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  url = `data:image/webp;base64,${base64}`;
  cache.set(image, url);
  return url;
}
