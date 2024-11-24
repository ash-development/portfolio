import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Button, Image, Heading } from "@components";
import { ArrowUpRight } from "phosphor-react";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";

const clients = [
  "",
];

const notables = [
  {
    title: "WMSC Radio",
    href: "https://wmscradio.com/",
  },
];

const AboutText = () => (
  <div className="flex rounded">
    <div className="flex flex-col gap-4 max-w-prose">
      <div>
        <h2 className="text-2xl sm:text-4xl font-mtl-bold">
          a student photographer ... and much more
        </h2>
        <p className="text-2xl sm:text-4xl">
          {``}
        </p>
      </div>

      <p className="text-lg sm:text-xl">
        i am a freshman film and television major at montclair state university. my aim is to become a live television producer, although i do have a big passion for camera work
      </p>
      <p className="text-lg sm:text-xl">
      </p>
      <p className="text-lg sm:text-xl">
        thank you for taking the time to visit my portfolio :) if you'd like to work together in the future,{" "}
        <a
          href="mailto:me@ashie.lol"
          className="relative better-underline betterhover:hover:px-1"
        >
          send me an email
        </a>{" "}
        .
      </p>
    </div>
  </div>
);

const ClientHistory = ({ setOpen }) => (
  <div className="mt-6">
    <Heading>Client History</Heading>
    <ul
      className="grid gap-4 pt-2 md:text-3xl whitespace-nowrap"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
      }}
    >
      {clients.map((client, index) => (
        <li
          key={index}
          className="px-1.5 py-2.5 text-center border rounded border-stone"
        >
          {client}
        </li>
      ))}
      <li>
        <Button
          fullWidth
          className="text-lg normal-case h-max !bg-transparent !border-stone"
          onClick={() => setOpen(true)}
        >
          + you next?
        </Button>
      </li>
    </ul>
  </div>
);

export default function About() {
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="About" canonical="https://ashie.lol/about" />
      <ContactDialog open={open} onOpenChange={setOpen} />
      <main className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
          <h1 className="text-5xl uppercase">About</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image
            src="/images/ashie/billy.jpeg"
            alt="Photo of my cat, Billy!"
            priority
          />
          <section className="flex flex-col gap-y-4">
            <AboutText />
            <hr className="-mb-1" />
            <div className="md:col-start-2">
              <Heading>Notable</Heading>
              <div
                className="grid gap-2 pt-2 whitespace-nowrap"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                }}
              >
                {notables.map((notable, index) => (
                  <Button
                    key={index}
                    href={notable.href}
                    asAnchor
                    target="_blank"
                    rel="noreferrer noopener"
                    className="!bg-transparent normal-case !border-stone px-2 text-base py-1.5 "
                  >
                    {notable.title}
                    <ArrowUpRight />
                  </Button>
                ))}
              </div>
              <ClientHistory setOpen={setOpen} />
            </div>{" "}
          </section>
        </div>
      </main>
    </>
  );
}
