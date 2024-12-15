import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { USPIcon1, USPIcon2, USPIcon3, USPIcon4 } from "../Icons";

export function Points() {
  return (
    <div id="why-us" className="mt-8 lg:mt-32">
      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="flex p-4 lg:p-16 lg:ml-36 ml-0 flex-col gap-2 items-start w-full lg:w-[40%]">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
            Accelerating healthcare services with integrated patient data access
          </h2>
          <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
            Akses data pasien secara real-time untuk memberikan pelayanan
            kesehatan yang lebih terkoordinasi dan efisien.
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
