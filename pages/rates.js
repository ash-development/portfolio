import React from "react";
import { NextSeo } from "next-seo";
import { Heading } from "../components";
import Footer from "@/components/sections/Footer";
import { SheetContext } from "@/components/Sheet";
import { cx } from "class-variance-authority";

const rates_data = [
  {
    title: "Portraits",
    price: "$100",
    unit: "per session",
    description:
      "A one-hour session at a location of your choice. Includes 20+ edited photos delivered digitally within a week.",
    includes: ["1 hour session", "20+ edited photos", "Digital delivery", "1 location"],
  },
  {
    title: "Concerts & Events",
    price: "$150",
    unit: "per event",
    description:
      "Full coverage of your show or event. Includes edited highlights delivered within a week, with full-resolution files available.",
    includes: ["Up to 3 hours of coverage", "40+ edited photos", "Digital delivery", "Social media crops"],
  },
  {
    title: "Custom",
    price: "Let's talk",
    unit: "",
    description:
      "Have something else in mind? Reach out and we can put together a package that fits your project and budget.",
    includes: ["Flexible scope", "Travel available", "Prints on request"],
  },
];

const RateCard = ({ title, price, unit, description, includes }) => {
  return (
    <div className="flex flex-col p-6 bg-white border rounded border-stone-light gap-y-4">
      <h3 className="text-2xl font-mtl-bold">{title}</h3>
      <div className="flex items-baseline gap-x-2">
        <span className="text-4xl font-mtl-bold">{price}</span>
        {unit && <span className="text-sm text-stone-blue">{unit}</span>}
      </div>
      <p className="text-md text-stone-blue">{description}</p>
      <ul className="flex flex-col mt-auto gap-y-1">
        {includes.map((item) => (
          <li key={item} className="text-sm before:content-['—'] before:mr-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Rates = () => {
  const { setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="Rates" canonical="https://ashie.pics/rates" />
      <main className="relative h-full pb-20">
        <div className="items-center justify-between md:flex">
          <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
            <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
            <h1 className="text-5xl uppercase">Rates</h1>
          </div>
          <div className="p-1 mx-6 text-xs border rounded md:mx-4 text-stone-blue border-stone-light md:max-w-prose">
            Rates are starting points — every shoot is a little different, so
            don&apos;t hesitate to reach out if you have questions.
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 px-6 md:grid-cols-3 md:px-4">
          <Heading className="col-span-full">Packages</Heading>
          {rates_data.map((rate) => (
            <RateCard key={rate.title} {...rate} />
          ))}
        </section>

        <section className="px-6 mt-12 md:px-4">
          <div
            className={cx(
              "flex flex-col items-start justify-between gap-4 p-6 border rounded md:items-center md:flex-row bg-yolk border-dark"
            )}
          >
            <p className="text-xl">Ready to book? Send me a message!</p>
            <button
              onClick={() => setOpen(true)}
              className="p-4 text-center transition bg-white border rounded border-dark betterhover:hover:bg-eggshell"
            >
              Get in touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Rates;
