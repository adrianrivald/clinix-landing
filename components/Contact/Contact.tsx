import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { ContactForm } from "./ContactForm";
interface ContactProps {
  t: TFunction<"common", undefined>;
}
export function Contact({ t }: ContactProps) {
  return (
    <div
      id="contact"
      className={twMerge(
        "bg-[url('/assets/images/contact-bg.png')] p-4 lg:p-16 mt-16 lg:mt-24 bg-no-repeat bg-left bg-auto",
        maxWidthContainer
      )}
    >
      <div className="flex flex-col lg:flex-row  gap-16 backdrop-blur-lg border border-2 rounded-xl shadow-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto">
        <Fade direction="left" triggerOnce className="lg:w-[50%]">
          <div className="mt-12">
            <h2 className="font-bold text-[24px] text-neutral-300">
              {t("home.contactHeading")}
            </h2>
            <h3 className="text-neutral-500 text-[32px] mt-4 font-bold">
              {t("home.contactSubHeading")}
            </h3>
            <p className="mt-4">{t("home.contactSubHeading2")}</p>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className="w-full lg:w-[50%]">
          <div className="">
            <ContactForm t={t} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
