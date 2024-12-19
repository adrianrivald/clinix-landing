import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import {
  FacebookRoundedIcon,
  InstagramRoundedIcon,
  LinkedInRoundedIcon,
  MailIcon,
  PhoneIcon,
  PinMapIcon,
  TwitterRoundedIcon,
} from "../Icons";

export function Footer() {
  return (
    <footer className="mb-4 border-t mt-24">
      <div
        id="footer"
        className={twMerge(
          "p-8 lg:px-16 lg:pt-24 flex flex-col lg:flex-row justify-between gap-16",
          maxWidthContainer
        )}
      >
        {/* Logo */}
        <div className="flex flex-col gap-4 lg:w-[20%]">
          <Image
            src="/assets/logo/logo-clinix.png"
            width={108}
            height={28}
            alt="logo-clinix-footer"
          />
          <span className="text-neutral-300">
            Keunggulan Medis Dimulai dari Sistem yang Memahami Anda
          </span>
          <div className="font-bold text-neutral-500">
            Sosial Media Kami
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookRoundedIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramRoundedIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInRoundedIcon />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterRoundedIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Perusahaan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Perusahaan</div>
          <Link href="/about">Tentang Kami</Link>
          <Link href="/">Value Kami</Link>
          <Link href="/">Karir</Link>
        </div>

        {/* Produk */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Produk</div>
          <Link href="/">Notes</Link>
          <Link href="/">Memos</Link>
          <Link href="/">Bitme</Link>
          <Link href="/">Timeflow</Link>
        </div>

        {/* Pengetahuan */}
        <div className="flex flex-col gap-4 flex-none ">
          <div className="font-bold">Pengetahuan</div>
          <Link href="/">Artikel</Link>
          <Link href="/">Pertanyaan Populer</Link>
          <Link href="/">Pernyataan Privasi</Link>
          <Link href="/">Ketentuan Layanan</Link>
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <div className="font-bold">Kontak</div>
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-4 flex-none mt-1" />
            <span>+62 851-7315-0717</span>
          </div>
          <div className="flex items-start gap-4">
            <PinMapIcon className="w-4 flex-none mt-1" />
            <span>
              Jl. Seturan Raya, Kledokan, Caturtunggal, Kec. Depok, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta
            </span>
          </div>
          <div className="flex items-start gap-4">
            <MailIcon className="w-4 flex-none mt-1" />
            <span>info@notes.co.id</span>
          </div>
        </div>
      </div>
      <div
        id="copyright"
        className={twMerge(
          "flex justify-center w-full p-8 ",
          maxWidthContainer
        )}
      >
        <span className="text-neutral-400">
          © 2024 PT. Cipta Integrasi Nusantara | Terdaftar di Direktorat
          Jenderal Kekayaan Intelektual Republik Indonesia.
        </span>
      </div>
    </footer>
  );
}