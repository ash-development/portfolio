import "../styles/fonts.css";
import "../styles/globals.css";

import React, { useEffect } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SheetProvider } from "@/components/Sheet";
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout";

import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }) => {

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <TooltipProvider>
        <SheetProvider>
          <Layout>
            <DefaultSeo
              title={undefined}
              titleTemplate="%s | ash schnoor"
              defaultTitle="ash schnoor | student concert photographer"
              description="based in montclair, new jersey"
              canonical="https://ashie.lol"
              twitter={{
                handle: "@underscoreashie",
                site: "@underscoreashie",
                cardType: "summary_large_image",
              }}
              openGraph={{
                type: "website",
                locale: "en_CA",
                url: "https://ashie.lol",
                title: "ash schnoor | student concert photographer",
                description:
                  "based in montclair, new jersey",
                images: [
                  {
                    url: "https://typicalmitul.com/images/og.png",
                    width: 1200,
                    height: 630,
                    alt: "ash schnoor | student concert photographer",
                    type: "image/png",
                  },
                ],
              }}
            />
            {page}
            <Analytics />
          </Layout>
        </SheetProvider>
      </TooltipProvider>
    ));
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
