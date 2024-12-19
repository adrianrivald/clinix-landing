import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { USPIcon1, USPIcon2, USPIcon3, USPIcon4 } from "../Icons";

interface PointsProps {
  t: TFunction<"common", undefined>;
}

export function Points({ t }: PointsProps) {
  return (
    <div id="points" className="mt-8 lg:mt-32">
      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="flex p-4 lg:p-16 lg:ml-36 ml-0 flex-col gap-2 items-start w-full lg:w-[40%]">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
            {t("home.pointsHeading1")}
          </h2>
          <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
            {t("home.pointsSubHeading1")}
          </p>
        </div>
        <div className="p-24 rounded-l-full bg-primary-50">
          <Image
            src="/assets/images/clinix-point.png"
            width={612}
            height={408}
            alt="clinix"
            className="w-full lg:-ml-32"
          />
        </div>
      </div>
    </div>
  );
}
