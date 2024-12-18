import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface HeroProps {
  onClickToDemo: () => void;
  t: TFunction<"common", undefined>;
}

export function Hero({ onClickToDemo, t }: HeroProps) {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:pt-44 lg:pb-0 bg-primary-10 lg:bg-primary-100"
    >
      {/* Our Words */}
      <div
        id="our-words"
        className="flex flex-col text-center items-center justify-center lg:px-16 lg:max-w-[60rem]"
      >
        <h1 className="text-[36px] lg:text-[48px] font-bold">
          {t("home.heroHeadline")}
        </h1>
        <p className="mt-4 text-[20px]">{t("home.heroSubHeadline")}</p>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full justify-center">
          <Button
            title={t("home.tryDemo")}
            isPrimary
            className="w-full lg:w-auto"
            onClick={onClickToDemo}
          />
          <Button
            title={t("home.consultYourNeeds")}
            isPrimary={false}
            className="w-full lg:w-auto"
          />
        </div>
      </div>

      {/* Mockup */}
      <Image
        src="/assets/images/clinix.png"
        width={996}
        height={480}
        alt="clinix"
        className="lg:-mb-8"
      />
    </div>
  );
}
