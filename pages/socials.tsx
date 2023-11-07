import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrawerMenu from "../components/drawer-menu";
import PortalDrawer from "../components/portal-drawer";
import { useRouter } from "next/router";

const Socials: NextPage = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const router = useRouter();

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  const onLogoNormalClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onMenuItemClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItem1Click = useCallback(() => {
    router.push("/bio");
  }, [router]);

  const onMenuItem3Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full overflow-y-auto flex flex-col items-center justify-start py-0 pr-[137px] pl-[138px] box-border gap-[289px] text-center text-81xl text-black font-inter sm:gap-[100px]">
        <header className="self-stretch flex flex-col items-start justify-center md:flex-row md:gap-[0px] md:items-center md:justify-start sm:self-stretch sm:w-auto sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center">
          <div className="self-stretch [backdrop-filter:blur(4px)] flex flex-row items-center justify-between pt-0.5 px-0 pb-0 md:items-center md:justify-start sm:flex sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-start">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[325px] h-[52px] hidden md:flex md:rounded-lg md:hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:rounded-lg sm:hover:rounded-lg sm:hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              onClick={openDrawerMenu}
            >
              <div className="absolute top-[16px] left-[57px] text-base leading-[20px] font-extrabold font-inter text-gray-200 text-left">
                Matthew Wedd
              </div>
              <div className="absolute top-[7px] left-[8px] rounded-[50%] bg-gray-200 w-[39px] h-[39px]" />
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-lg w-[325px] h-[52px] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] md:hidden sm:hidden sm:rounded-lg sm:hover:rounded-lg sm:hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] sm:active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              onClick={onLogoNormalClick}
            >
              <div className="absolute top-[16px] left-[57px] text-base leading-[20px] font-extrabold font-inter text-gray-200 text-left">
                Matthew Wedd
              </div>
              <div className="absolute top-[7px] left-[8px] rounded-[50%] bg-gray-200 w-[39px] h-[39px]" />
            </button>
            <div className="w-[542px] flex flex-row items-start justify-start md:hidden sm:hidden">
              <div className="flex-1 flex flex-row items-center justify-center py-0 px-2.5 gap-[25px]">
                <button
                  className="cursor-pointer [border:none] py-4 px-5 bg-[transparent] flex-1 rounded-lg h-[52px] flex flex-row items-center justify-center box-border hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                  onClick={onMenuItemClick}
                >
                  <div className="relative text-base leading-[20px] font-semibold font-inter text-gray-300 text-left">
                    Home
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-4 px-5 bg-[transparent] flex-1 rounded-lg h-[52px] flex flex-row items-center justify-center box-border hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                  onClick={onMenuItem1Click}
                >
                  <div className="relative text-base leading-[20px] font-medium font-inter text-gray-300 text-left">
                    Bio
                  </div>
                </button>
                <button className="cursor-pointer py-4 px-5 bg-[transparent] flex-1 rounded-lg box-border h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:rounded-lg hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                  <div className="relative text-base leading-[20px] font-medium font-inter text-black text-center">
                    Social Media
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-4 px-5 bg-black flex-1 rounded-lg h-[52px] flex flex-row items-center justify-center box-border hover:bg-lightgray-100 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                  onClick={onMenuItem3Click}
                >
                  <div className="relative text-base leading-[20px] font-medium font-inter text-white text-center hover:text-black">
                    Contact Details
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="relative leading-[20px] font-extrabold sm:text-31xl">
          SOCIALS
        </div>
        <section className="self-stretch flex flex-row items-center justify-center gap-[50px] text-center text-81xl text-black font-inter sm:w-auto sm:[align-self:unset] sm:flex-col">
          <div className="h-full flex-1 flex flex-col items-center justify-center gap-[20px] max-h-[520px] sm:flex-[unset] sm:self-stretch">
            <h1 className="m-0 self-stretch relative text-inherit leading-[100px] font-extrabold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-h-[400px] sm:text-31xl sm:leading-[60px]">
              Hi! My name is Matthew Wedd
            </h1>
            <h1 className="m-0 self-stretch relative text-29xl leading-[50px] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-h-[100px] sm:text-5xl sm:leading-[30px]">
              This webpage is in development
            </h1>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center sm:flex-[unset] sm:self-stretch">
            <img
              className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[474px] object-cover sm:self-stretch sm:h-auto"
              alt=""
              src="/img-5978-1@2x.png"
            />
          </div>
        </section>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Socials;
