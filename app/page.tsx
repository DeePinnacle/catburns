"use client";
import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaFacebook,
  FaSpotify,
  FaApple,
  FaAmazon,
  FaEnvelope,
  FaDeezer,
  FaPlay,
  // FaPause,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { sliderItems, topNavLink, YTvideos } from "@/data/data";

import { useState, useEffect } from "react";

// embla imports
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaArrowButton";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const SONGS_OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
  };
  const [songsRef] = useEmblaCarousel(SONGS_OPTIONS);

  const VIDEOS_OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
    dragFree: true,
  };
  const [videoRef, emblaApi] = useEmblaCarousel(VIDEOS_OPTIONS);

  const LINK_OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
    dragFree: true,
  };

  const [linkRef] = useEmblaCarousel(LINK_OPTIONS);

  // state to track when dragging starts/stops
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", () => setIsDragging(true));
    emblaApi.on("pointerUp", () => setIsDragging(false));
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="catburn-container">
      <div className="catburn-contents">
        {/* hero section starts here */}
        <div className="hero-section">
          {/* image container */}
          <div className="img-container">
            <Image
              src="/catburn.jpg"
              alt="catburn-image"
              fill
              priority
              objectFit="cover"
              objectPosition="center"
              className="lg:rounded-tl-2xl lg:rounded-tr-2xl"
            />
          </div>
          <div className="overlay">
            <div className="logo">
              <Image
                src="/catburn-write-up.png"
                alt="catburn-log"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="media-icons">
            <Link href="">
              <FaInstagram />
            </Link>{" "}
            <Link href="">
              <FaTiktok />
            </Link>{" "}
            <Link href="">
              <FaYoutube />
            </Link>{" "}
            <Link href="">
              <FaXTwitter />
            </Link>{" "}
            <Link href="">
              <FaDiscord />
            </Link>{" "}
            <Link href="">
              <FaFacebook />
            </Link>
          </div>
          <div className="link__carousel">
            <div className="link__carousel__viewport" ref={linkRef}>
              <ul className="link__carousel__track">
                {topNavLink.map((link, idx) => (
                  <li className="link__slide item" key={idx}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* end here */}

        {/* about section  */}
        <section className="px-3 py-4 mt-8">
          <div className="w-full bg-black/40 px-3 pb-6 rounded-xl flex flex-col items-center justify-center">
            <div className="relative -top-6 w-full h-96 overflow-hidden rounded-2xl">
              <Image
                src="/catburn-2.jpg"
                alt="catburn-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <h2 className="font-caprasimo font-semibold text-2xl">
              New single!
            </h2>
            <p className="text-xl font-workSans text-center my-3 leading-snug">
              Pre-save my next single <br />
              to get it added to directly
              <br /> to your library on release.
            </p>
            <div className="w-full bg-primary px-4 py-4 rounded-full flex flex-row items-center justify-between gap-4">
              <span className="flex flex-row items-center gap-2">
                <FaSpotify className="text-2xl" />
                <p className="font-light font-workSans">Pre-save</p>
              </span>
              <span className="flex flex-row items-center gap-2">
                <FaApple className="text-2xl" />
                <p className="font-light font-workSans">Pre-add</p>
              </span>
              <span className="flex flex-row items-center gap-2">
                <FaAmazon className="text-2xl" />
                <p className="font-light font-workSans">Pre-save</p>
              </span>
            </div>
          </div>
        </section>
        {/* about section ends here */}

        {/* latest release section */}
        <section className="w-full px-2 py-3">
          <div className="border-y border-solid border-[gray]">
            <h2 className="text-2xl font-caprasimo my-3">latest releases</h2>
            <div className="w-full my-4 px-4 bg-black/40 rounded-tr-xl rounded-tl-xl flex flex-row items-center gap-2">
              <div className="relative w-40 h-40 overflow-hidden rounded-2xl">
                <Image
                  src="/catburn-cover-img.webp"
                  alt="release-image"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex flex-col items-center p-2">
                <h3 className="text-xl font-caprasimo">teenage dirtbag</h3>
                <p className="mt-2 font-extralight">my take on the classic</p>
              </div>
            </div>
            <div className="w-full my-6 pb-2 px-4 bg-black/40 rounded-tr-xl rounded-tl-xl">
              <div className="w-full flex flex-row items-center gap-2">
                <div className="relative w-40 h-40 overflow-hidden rounded-2xl">
                  <Image
                    src="/catburns-earlytwenties.jpg"
                    alt="release-image"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="flex flex-col items-center p-2">
                  <h3 className="text-xl font-caprasimo">early twenties</h3>
                  <p className="font-light mt-2">my debut album 🤍</p>
                </div>
              </div>
              <div className="w-full bg-primary py-3 rounded-full my-5 flex flex-row items-center justify-around gap-4">
                <span className="flex flex-row items-center gap-2">
                  <FaApple className="text-2xl" />
                  <p>Music</p>
                </span>
                <span>|</span>
                <p>More</p>
              </div>
            </div>
          </div>
        </section>
        {/* ends here */}
        {/* songs section starts */}
        <div className="w-full px-2 py-3">
          <div className="border-b border-solid border-[gray] py-4">
            <h2 className="text-2xl font-caprasimo my-3">songs</h2>
            <div className="playlist__carousel">
              <div className="carousel__viewport" ref={songsRef}>
                <div className="carousel__track">
                  {sliderItems.map((item, idx) => (
                    <div key={idx} className="carousel__slide">
                      {item.content.map((playlist, idx) => (
                        <div
                          key={idx}
                          className="w-full my-4 bg-black/40 rounded-tr-xl rounded-tl-xl flex flex-row items-center gap-2"
                        >
                          <div className="relative w-36 h-36 overflow-hidden rounded-2xl">
                            <Image
                              src={playlist.image}
                              alt="release-image"
                              fill
                              priority
                              objectFit="cover"
                              objectPosition="center"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex flex-col items-center justify-center">
                              <FaPlay className="text-black" />
                            </div>
                          </div>
                          <div className="flex flex-col items-center p-2">
                            <h3 className="text-xl font-caprasimo ml-6">
                              {playlist.title}
                            </h3>
                            <p className="mt-2 font-extralight">
                              {playlist.artist}
                            </p>
                            <Button className="rounded-full bg-transparent px-5 py-1 mt-2 border border-solid border-[gray] hover:bg-transparent">
                              play
                            </Button>
                            <audio controls className="hidden">
                              <source src={playlist.audio} type="audio/mpeg" />
                            </audio>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* songs section ends here */}

        {/* video section starts here */}
        <div className="w-full px-2 py-3">
          <div className="border-b border-solid border-[gray] py-4">
            <h2 className="text-2xl font-caprasimo my-3">videos</h2>
            <div className="playlist__carousel">
              <div className="carousel__viewport" ref={videoRef}>
                <div className="carousel__track">
                  {YTvideos.map((video, idx) => (
                    <div className="carousel__slide relative h-64" key={idx}>
                      <iframe
                        src={video.link}
                        title={video.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className={`${
                          isDragging ? "pointer-events-none" : ""
                        } h-full border border-none rounded-lg w-full`}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="embla__controls">
              <div className="embla__buttons">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
            <Link
              href=""
              className="w-full py-8 mt-5 bg-black/40 flex flex-col items-center justify-center border border-solid border-[gray] rounded-lg"
            >
              <p className="font-caprasimo font-semibold text-xl">
                my vlog channel
              </p>
              <p>click here to check it out xXx</p>
            </Link>
          </div>
        </div>
        {/* video section ends here */}

        {/* official store section starts */}
        <section className="w-full px-2 py-3">
          <div className="border-b border-solid border-[gray]">
            <h2 className="text-2xl font-caprasimo my-3">official store</h2>
            <div className="w-full my-4 bg-black/40 rounded-tr-xl rounded-tl-xl flex flex-row items-center gap-2">
              <div className="relative w-40 h-40 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                <Image
                  src="/tour.webp"
                  alt="release-image"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex flex-col p-2">
                <h3 className="text-xl font-caprasimo">shop</h3>
                <p className="mt-2 font-extralight">
                  merch and signed bundles 🤍
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*official store section ends here */}

        {/* official tour section starts */}
        <section className="w-full px-2 py-3">
          <div className="border-b border-solid border-[gray]">
            <h2 className="text-2xl font-caprasimo my-3">tour dates</h2>
            <div className="w-full my-4 p-4 bg-black/40 rounded-tr-xl rounded-tl-xl flex flex-row items-center gap-2">
              <div className="w-32 h- p-4 flex flex-col items-center justify-center border border-solid border-[gray] rounded-md">
                <p className="uppercase font-caprasimo font-semibold text-lg my-2">
                  Feb
                </p>
                <p className="font-caprasimo font-semibold text-3xl">17</p>
                <p className="text-base font-workSans my-2">2025</p>
              </div>
              <div className="flex flex-col p-2">
                <h3 className="text-xl font-caprasimo">shop</h3>
                <p className="mt-2 font-extralight">
                  merch and signed bundles 🤍
                </p>
                <p className="w-1/2 p-2 mt-2 rounded-full border border-solid border-[gray] text-center">
                  Sold out
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*official tour section ends here */}

        {/* newsletter section starts here */}
        <section className="w-full px-2 py-3">
          <div className="border-b border-solid border-[gray]">
            <h2 className="text-2xl font-caprasimo my-3">Newsletter</h2>
            <div className="w-full my-4 p-4 bg-black/40 rounded-tr-xl rounded-tl-xl flex flex-col items-center justify-center gap-2">
              <h2 className="my-4 font-caprasimo font-semibold text-2xl">
                Connect with Cat Burns
              </h2>
              <div className="w-full flex flex-row items-center justify-center gap-4">
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaEnvelope />
                  Email
                </Link>
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaSpotify />
                  <p>Follow</p>
                </Link>
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaApple />
                  <p>Follow</p>
                </Link>
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-4">
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaAmazon />
                  <p>Follow</p>
                </Link>
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaYoutube />
                  <p>Youtube</p>
                </Link>
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-4">
                <Link
                  href=""
                  className="flex flex-row items-center gap-4 px-4 py-2 border border-solid border-[gray] rounded-full"
                >
                  <FaDeezer />
                  <p>Follow</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ends here */}

        {/* footer section goest here */}
        <footer className="w-full py-8 px-4 flex flex-row flex-wrap items-center justify-center gap-6">
          <Link href="">© 2025 Sony Music Entertainment UK Ltd</Link>
          <Link href="">Privacy & Cookie Policy</Link>
          <Link href="">Terms & Conditions</Link>
          <Link href="">AI Usage</Link>
        </footer>
        {/* footer ends here */}
      </div>
    </div>
  );
}
