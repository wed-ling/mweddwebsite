import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

type DrawerMenuType = {
  onClose?: () => void;
};

const DrawerMenu: NextPage<DrawerMenuType> = ({ onClose }) => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMenuItemClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItem1Click = useCallback(() => {
    router.push("/bio");
  }, [router]);

  const onMenuItem2Click = useCallback(() => {
    router.push("/socials");
  }, [router]);

  const onMenuItem3Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div
      className="rounded-3xs bg-white w-full h-[321px] flex flex-col items-start justify-center [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%] overflow-auto md:w-[300px] md:gap-[10px] md:rounded-3xs md:pt-[5px] md:pb-[5px] md:box-border sm:flex sm:w-auto sm:[align-self:unset] sm:h-auto sm:gap-[10px] sm:items-center sm:justify-center sm:rounded-lg sm:pt-[5px] sm:pb-[5px] sm:box-border sm:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-2.5 gap-[25px] md:gap-[10px] sm:flex sm:gap-[10px] sm:pt-2 sm:pb-2 sm:box-border">
        <button
          className="cursor-pointer py-4 px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-black hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:h-[52px] sm:pt-4 sm:box-border"
          onClick={onMenuItemClick}
        >
          <div className="relative text-base leading-[20px] font-semibold font-inter text-black text-left">
            Home
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-center hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:h-[52px] sm:box-border sm:border-[1px] sm:border-solid sm:border-black"
          onClick={onMenuItem1Click}
        >
          <div className="relative text-base leading-[20px] font-medium font-inter text-gray-300 text-left sm:font-semibold sm:font-inter sm:text-black">
            Bio
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-center justify-center hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:h-[52px] sm:box-border sm:border-[1px] sm:border-solid sm:border-black"
          onClick={onMenuItem2Click}
        >
          <div className="relative text-base leading-[20px] font-medium font-inter text-gray-300 text-center sm:font-semibold sm:font-inter sm:text-black">
            Social Media
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-black self-stretch rounded-lg h-10 flex flex-row items-center justify-center box-border hover:bg-lightgray-100 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:h-[52px]"
          onClick={onMenuItem3Click}
        >
          <div className="relative text-base leading-[20px] font-medium font-inter text-white text-center hover:text-black">
            Contact Details
          </div>
        </button>
      </div>
    </div>
  );
};

export default DrawerMenu;
