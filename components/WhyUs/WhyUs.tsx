import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { USPIcon1, USPIcon2, USPIcon3, USPIcon4 } from "../Icons";

export function WhyUs() {
  return (
    <div
      id="why-us"
      className={twMerge("p-4 lg:p-16 mt-8 lg:mt-32", maxWidthContainer)}
    >
      <div className="mt-12">
        <h2 className="m-0 text-[30px] lg:text-[36px] text-center font-bold w-full">
          Title USP Here
        </h2>
        <div className="flex flex-col lg:flex-row space-between gap-8 lg:gap-12 mt-20">
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="rounded-full p-4 bg-primary-100 w-[100px] h-[100px] flex justify-center items-center">
              <USPIcon1 />
            </div>
            <h3 className="m-0 font-bold text-[20px]">
              Memiliki fungsi pelayanan dan akurasi sistem data terdepan
            </h3>
            <p className="m-0 text-[20px]">
              Memastikan kelancaran operasional serta data yang terpercaya
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="rounded-full p-4 bg-primary-100 w-[100px] h-[100px] flex justify-center items-center">
              <USPIcon2 />
            </div>
            <h3 className="m-0 font-bold text-[20px]">
              Mengurangi biaya operasinal yang efesien
            </h3>
            <p className="m-0 text-[20px]">
              Dengan efesiensi sistem yang mengotomatisasi dan mengoptimalkan
              penggunaan sumber daya Turn on screen reader support
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="rounded-full p-4 bg-primary-100 w-[100px] h-[100px] flex justify-center items-center">
              <USPIcon3 />
            </div>
            <h3 className="m-0 font-bold text-[20px]">
              Mendorong transformasi kesehatan unggul dengan metode profesional
            </h3>
            <p className="m-0 text-[20px]">
              Melalui pendekatan profesional yang berfokus pada kualitas dan
              peningkatan berkelanjutan dalam setiap aspek pelayanan
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="rounded-full p-4 bg-primary-100 w-[100px] h-[100px] flex justify-center items-center">
              <USPIcon4 />
            </div>
            <h3 className="m-0 font-bold text-[20px]">
              Memberikan pengalaman pelayanan terbaik untuk pasien dan klinik
              masa depan secara maksimal
            </h3>
            <p className="m-0 text-[20px]">
              Memastikan pasien memerima perawatan berkualitas dengan pengalaman
              yang optimal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mt-48 flex flex-col lg:flex-row justify-between items-center">
<div className="flex flex-col gap-2 items-start lg:w-1/2">
  <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
    Menghubungkan sistem kesehatan yang efisien dan terstandarisasi
  </h2>
  <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
    Memastikan integrasi yang lebih baik antar layanan, serta
    meningkatkan kualitas dan kecepatan perawatan pasien.
  </p>
</div>
<div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-end">
  <Image
    src="/assets/images/notes-3.png"
    width={560}
    height={464}
    alt="notes-1"
    className="lg:w-3/4"
  />
</div>
</div> */
}
