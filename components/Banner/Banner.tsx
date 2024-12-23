import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface BannerProps {
  t: TFunction<"common", undefined>;
}

export function Banner({ t }: BannerProps) {
  return (
    // <div className="w-full h-[350px] bg-gradient-to-r from-[#3080E2] to-[#195EB3] mt-24 relative">
    <div className={twMerge("mt-32 p-4 lg:p-16  ", maxWidthContainer)}>
      <div className="flex justify-center p-8 lg:p-24 rounded-xl bg-primary-500 relative min-h-[400px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[24px] lg:text-[36px] text-center text-white mb-8 font-bold">
            {t("home.bannerHeading")}
          </h2>
          <Link href="https://memos-landing.vercel.app/demo" target="_blank">
            <Button title={t("home.tryDemo")} className="w-[220px]" />
          </Link>
        </div>
        <img
          src="/assets/images/demo/1.png"
          className="hidden lg:block absolute left-2 top-2"
        />
        <img
          src="/assets/images/demo/2.png"
          className="hidden lg:block absolute right-2 top-2"
        />
        <img
          src="/assets/images/demo/3.png"
          className="hidden lg:block absolute left-20 top-44"
        />
        <img
          src="/assets/images/demo/4.png"
          className="hidden lg:block absolute left-36 top-48"
        />
        <img
          src="/assets/images/demo/5.png"
          className="hidden lg:block absolute left-10 top-56"
        />
        <img
          src="/assets/images/demo/6.png"
          className="hidden lg:block absolute right-10 top-56"
        />
      </div>
    </div>
  );
}
