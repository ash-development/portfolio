import one from "../../public/images/me/one_Vish.jpg";
import two from "../../public/images/me/two_canbeV.jpg";
import three from "../../public/images/me/three.jpg";
import four from "../../public/images/me/four.jpg";
import five from "../../public/images/me/five_V.jpg";
import six from "../../public/images/me/six.jpg";
import seven from "../../public/images/me/seven.jpg";
import eight from "../../public/images/me/eight_V.jpg";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@radix-ui/react-dialog";
import NextImage from "next/image";
import NextFutureImage from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cx } from "class-variance-authority";
import Button from "@/components/Button";
import { ArrowRight } from "phosphor-react";

const images = [
  {
    key: 1,
    src: one,
    title: "",
    alt: "",
  },
  {
    key: 2,
    src: two,
    title: "",
    alt: "",
	vertical: true,
  },
  {
    key: 3,
    src: seven,
    title: "",
    alt: "",
  },
  {
    key: 4,
    src: four,
    title: "",
    alt: "",
  },
  {
    key: 5,
    src: five,
    title: "",
    alt: "",
	vertical: true,
  },
  {
    key: 6,
    src: six,
    title: "",
    alt: "",
  },
  {
    key: 7,
    src: three,
    title: "",
    alt: "",
	position: "right",
  },
  {
    key: 8,
    src: eight,
    title: "",
    alt: "",
    vertical: true,
  },
];

const Image2 = ({ src, alt, ...props }) => (
  <NextImage
    src={src}
    alt={alt}
    className={"transition duration-500 betterhover:hover:scale-[1.03]"}
    {...props}
    fill
    sizes="100vw"
    style={{
      objectFit: "cover"
    }} />
);

Image2.displayName = "Image2";

const PhotoGrid = () => {
  const [selected, setSelected] = React.useState();

  return (<>
    <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
      <Dialog>
        {images.map((image) => {
          return (
            <DialogTrigger
              key={image.key}
              className="relative w-full overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-stone photo-grid-item"
            >
              <Image2
                src={image.src}
                alt={image.alt}
                objectPosition={image.position}
                quality={25}
                priority
                placeholder="blur"
              />
            </DialogTrigger>
          );
        })}
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
          <DialogContent
            className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {images.map((i) => {
              if (i.key === selected) {
                return (
                  (<motion.div
                    key={i.key}
                    className={cx(
                      "relative w-auto sm:h-[800px]",
                      i.vertical ? "h-[500px]" : "h-[250px]"
                    )}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <NextFutureImage
                      src={i.src}
                      alt={i.alt}
                      className="w-auto h-full rounded shadow-md"
                      placeholder="blur"
                      priority
                      quality={25}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                  </motion.div>)
                );
              }
            })}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
    <div className="mt-yeat"></div>
    <Button fullWidth asAnchor href="/gallery">
      See More
      <ArrowRight weight="bold" />
    </Button>
  </>);
};

export default PhotoGrid;
