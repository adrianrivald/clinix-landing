import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";
import { Fade } from "react-awesome-reveal";
import { GreenDots, GreenDotsHero } from "../Icons";

interface HeroProps {
  t: TFunction<"common", undefined>;
}

export function Hero({ t }: HeroProps) {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:pt-44 lg:pb-0 bg-primary-10 lg:bg-primary-100 relative"
    >
      <GreenDotsHero className="absolute transform top-1/2 -translate-y-1/2 left-72" />
      <GreenDotsHero className="absolute transform bottom-12 right-[21.25rem]" />

      {/* Our Words */}
      <Fade direction="up" triggerOnce>
        <div
          id="our-words"
          className="flex flex-col text-center items-center justify-center lg:px-16 lg:max-w-[60rem]"
        >
          <h1 className="text-[36px] lg:text-[48px] font-bold">
            {t("home.heroHeadline")}
          </h1>
          <p className="mt-4 text-[20px]">{t("home.heroSubHeadline")}</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full justify-center">
            <Link href="/demo" className="w-full lg:w-auto">
              <Button
                title={t("home.login")}
                isPrimary
                className="w-full lg:w-auto px-6"
              />
            </Link>
            <a href="mailto:info@notes.co.id">
              <Button
                title={t("home.consultYourNeeds")}
                isPrimary={false}
                className="w-full lg:w-auto"
                bgColorSecondary="bg-none"
              />
            </a>
          </div>
        </div>
      </Fade>

      {/* Mockup */}
      <Fade direction="up" triggerOnce>
        <Image
          src="/assets/images/hero-clinix.png"
          width={996}
          height={480}
          alt="clinix"
        />
      </Fade>
    </div>
  );
}
