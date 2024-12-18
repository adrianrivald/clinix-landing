import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface BannerProps {
  onClickToDemo: () => void;
  t: TFunction<"common", undefined>;
}

export function Banner({ onClickToDemo, t }: BannerProps) {
  return (
    // <div className="w-full h-[350px] bg-gradient-to-r from-[#3080E2] to-[#195EB3] mt-24 relative">
    <div className={twMerge("mt-32 p-4 lg:p-16  ", maxWidthContainer)}>
      <div className="flex justify-center p-8 lg:p-24 rounded-xl bg-primary-500">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[24px] lg:text-[36px] text-center text-white mb-8 font-bold">
            {t("home.bannerHeading")}
          </h2>
          <Button
            title={t("home.tryDemo")}
            onClick={onClickToDemo}
            className="w-[220px]"
          />
        </div>
      </div>
    </div>
  );
}
