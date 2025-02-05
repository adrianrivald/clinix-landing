import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { GreenDots, USPIcon1, USPIcon2, USPIcon3, USPIcon4 } from "../Icons";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Fade } from "react-awesome-reveal";
import { Button } from "../Ui";

interface SubscribeProps {
  t: TFunction<"common", undefined>;
}

export function Subscribe({ t }: SubscribeProps) {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div
      id="subscribe"
      className={twMerge(
        "bg-[url('/assets/images/contact-bg.png')] p-4 lg:p-16 mt-16 lg:mt-24 bg-no-repeat bg-left bg-auto",
        maxWidthContainer
      )}
    >
      <div className="flex justify-center flex-col gap-2">
        <h2 className="text-center text-[32px] font-bold">
          Hanya{" "}
          <span className="text-primary-500 italic underline">99K/Bulan</span>,
          Akses Eksklusif Jadi Milikmu!
        </h2>
        <p className="text-center">
          Nikmati kemudahan mengelola klinik dengan fitur terbaik. Masukkan
          email untuk membuat atau memulai lagi keanggotaanmu.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-16 backdrop-blur-xl rounded-xl shadows-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto space-between items-center">
        <Fade direction="left" triggerOnce className="lg:w-[50%]">
          <div className="mt-12">
            <div className="bg-primary-500 p-8 rounded-[16px] text-white">
              <h2 className="text-[24px] font-bold">Clinix Lite</h2>
              <h2 className="text-[32px] font-bold">99k / User / Month</h2>
              <p className="mt-2">
                Nikmati fitur eksklusif seperti integrasi dengan <br />{" "}
                <strong>Satu Sehat</strong> Platform dan pengelolaan
                administrasi yang praktis!
              </p>
            </div>
            <Button
              title={t("subscribe.registerNow")}
              isPrimary={false}
              className="w-full mt-4"
            />
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className="w-full lg:w-[50%]">
          <Image
            src="/assets/images/subscribe-pic.png"
            width={612}
            height={408}
            alt="subscribe-pic"
            className="w-full"
          />
        </Fade>
      </div>
    </div>
  );
}
