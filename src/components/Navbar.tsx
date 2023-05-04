import Burger from "@/icon/Burger";
import { Menu } from "@mantine/core";
import i18next from "i18next";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const languageMap = {
  "uz-UZ": { label: "UZ", dir: "ltr", active: true },
  "ru-RU": { label: "RU", dir: "ltr", active: false },
  "en-EN": { label: "EN", dir: "ltr", active: false },
};
const data = [{ label: "UZ" }, { label: "RU" }, { label: "En" }];

export default function Navbar({ open }: { open: any }) {
  const { t } = useTranslation("translation");

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <div className="text-[#f30303]">
          <Link href="/">
            <h2 className="text-2xl font-bold vip">{t("nav_logo")}</h2>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-20">
          <li className="text-lg font-medium">
            <a href="#section1">{t("nav_li1")}</a>
          </li>
          <li className="text-lg font-medium">
            <a href="#section2">{t("nav_li2")}</a>
          </li>
          <li className="text-lg font-medium">
            <a href="#section3">{t("nav_li3")}</a>
          </li>
          <li className="text-lg font-medium">
            <a href="#section4">{t("nav_li4")}</a>
          </li>
        </ul>
        <div className="flex lg:hidden">
          <Menu shadow={"lg"}>
            <Menu.Target>
              <button>
                <Burger />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a">
                <li className="text-lg font-medium list-none my-2">
                  <a href="#section1">{t("nav_li1")}</a>
                </li>
                <li className="text-lg font-medium list-none my-2">
                  <a href="#section2">{t("nav_li2")}</a>
                </li>
                <li className="text-lg font-medium list-none my-2">
                  <a href="#section3">{t("nav_li3")}</a>
                </li>
                <li className="text-lg font-medium list-none my-2">
                  <a href="#section4">{t("nav_li4")}</a>
                </li>
              </Menu.Item>
              <Menu.Item component="a">
                <button
                  onClick={open}
                  className="text-base lg:text-lg font-semibold 
            py-2 lg:py-3 px-3 lg:px-5 border-none rounded-md bg-[#0e1734] text-white"
                >
                  {t("nav_btn")}
                </button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="flex gap-4">
          <button
            onClick={open}
            className="text-base lg:text-lg font-semibold 
            py-2 lg:py-3 px-3 lg:px-5 border-none rounded-md bg-[#0e1734] text-white hidden lg:flex"
          >
            {t("nav_btn")}
          </button>
          <div className={"bg-white text-xl p-3"}>
            <Menu>
              <Menu.Target>
                <button>{t("chance")}</button>
              </Menu.Target>
              <Menu.Dropdown>
                {Object.keys(languageMap)?.map((item) => {
                  return (
                    <>
                      <Menu.Item
                        component="button"
                        className="dropdown-item text-xl cursor-pointer"
                        key={item}
                        onClick={() => i18next.changeLanguage(item)}
                      >
                        {data.map((el) => {
                          return (
                            <>
                              <h1>{el.label}</h1>
                            </>
                          );
                        })}
                      </Menu.Item>
                    </>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
