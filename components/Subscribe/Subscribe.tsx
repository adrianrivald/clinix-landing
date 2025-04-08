import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { GreenDots, USPIcon1, USPIcon2, USPIcon3, USPIcon4 } from "../Icons";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Fade } from "react-awesome-reveal";
import { Button } from "../Ui";
import { useRouter } from "next/router";

interface SubscribeProps {
  t: TFunction<"common", undefined>;
}

export function Subscribe({ t }: SubscribeProps) {
  const router = useRouter();
  const alignCenter = { display: "flex", alignItems: "center" };

  const onClickToClinix = () => {
    router.push("https://memos-fe-dashboard.vercel.app?product=clinix");
  };
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
      <div className="mt-12 flex flex-col lg:flex-row  gap-16 backdrop-blur-xl rounded-xl shadows-xl p-4 lg:p-16 relative min-h-[400px] w-[100%] mx-auto space-between items-center">
        <Fade direction="left" triggerOnce className="lg:w-[50%]">
          <div className="bg-white p-8 rounded-[16px] text-neutral-500 border shadow-md">
            <div className="">
              <Image
                src="/assets/images/clinix-lite.png"
                width={380}
                height={64}
                alt="clinix-lite"
              />
              <ol className="mt-8 flex flex-col gap-5">
                <li className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/check-list.svg"
                    width={20}
                    height={20}
                    alt="check-list"
                  />{" "}
                  Integrasi Satu Sehat Platform
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/check-list.svg"
                    width={20}
                    height={20}
                    alt="check-list"
                  />{" "}
                  Mudah Digunakan
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/assets/icons/check-list.svg"
                    width={20}
                    height={20}
                    alt="check-list"
                  />{" "}
                  Terpercaya
                </li>
              </ol>
            </div>
            <Button
              onClick={onClickToClinix}
              title={t("subscribe.registerNow")}
              isPrimary={true}
              className="w-full mt-8"
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
