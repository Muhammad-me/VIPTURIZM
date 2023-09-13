import ArrowRight from "@/icon/ArrowRight";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import img9 from "../img/1.jpg";
import img2 from "../img/Grand-Bukhara-Hotel-Exterior.jpg";
import img1 from "../img/Image.png";
import img4 from "../img/Registon.jpg";
import img5 from "../img/buxara.jpg";
import img3 from "../img/izumrud.jpg";
import img7 from "../img/logo.jpg";
import img6 from "../img/xiva.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Main({ open }) {
  const { t } = useTranslation("translation");

  return (
    <div className="bg">
      <div className="container mx-auto py-3 px-10 lg:px-28">
        <Navbar open={open} />
        <div className="lg:flex justify-between items-center mt-10 lg:mt-32">
          <div className="lg:w-2/5">
            <h1 className="text-2xl lg:text-5xl font-bold">{t("sec_txt1")}</h1>
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p1")}
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image src={img1} alt="rasm" />
          </div>
        </div>
        <div className="lg:flex items-center justify-between mt-20 lg:mt-32">
          <div className="lg:w-1/2 lg:h-[500px]">
            <Image src={img2} alt="rasm" />
          </div>
          <div className="lg:w-2/5 mt-10 lg:mt-0" id="section1">
            <h2 className="text-2xl lg:text-5xl font-bold">{t("sec_txt2")}</h2>
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p2")}
            </p>
          </div>
        </div>
        <div className="lg:flex items-center justify-between mt-20 lg:mt-32">
          <div className="lg:w-2/5 mt-10 lg:mt-0">
            <h2 className="text-2xl lg:text-5xl font-bold">{t("sec_txt3")}</h2>
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p3")}
            </p>
          </div>
          <div className="lg:w-1/2 lg:h-[500px] mt-5 lg:mt-0">
            <Image src={img3} alt="rasm" />
          </div>
        </div>
        <div className="lg:flex items-center justify-between mt-20 lg:mt-32">
          <div className="lg:w-1/2 lg:h-[500px]">
            <Image src={img9} alt="rasm" />
          </div>
          <div className="lg:w-2/5 mt-10 lg:mt-0">
            <h2 className="text-2xl lg:text-5xl font-bold">{t("sec_txt4")}</h2>
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p4")}
            </p>
          </div>
        </div>
        <div className="text-center mt-10 lg:mt-32">
          <h1 className="text-2xl lg:text-5xl font-bold">{t("sec_txt5")}</h1>
          <div className="lg:w-2/5 mx-auto">
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p5")}
            </p>
          </div>
        </div>
        <div className="lg:flex flex-wrap justify-between mt-10">
          <Card img={img4} text={"card_name1"} />
          <Card img={img5} text={"card_name2"} />
          <Card img={img6} text={"card_name3"} />
        </div>
        <div className="mt-20 lg:mt-32" id="section2">
          <div className="flex justify-center">
            <h1 className="text-2xl lg:text-5xl font-bold">{t("sec_txt6")}</h1>
          </div>
          <div className="w-40 h-40 mx-auto my-10">
            <Image src={img7} alt="rasm" />
          </div>
          <div className="w-3/5 mx-auto">
            <p className="text-3xl lg:text-lg text-[#848fac] leading-5 lg:leading-6 mt-3 lg:mt-6">
              {t("sec_p6")}
            </p>
          </div>
          <div className="text-center my-10">
            <h1 className="text-2xl lg:text-5xl font-bold">{t("nav_logo")}</h1>
          </div>
        </div>
        <div className="my-20 lg:my-32 flex justify-center" id="section4">
          <div>
            <div className="flex justify-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                {t("sec_txt7")}
              </h1>
            </div>
            <Accordion variant="filled" defaultValue="acc1" mt={50}>
              <Accordion.Item value="acc1">
                <Accordion.Control className="font-black text-xl lg:text-2xl">
                  {t("acc_1")}
                </Accordion.Control>
                <Accordion.Panel>
                  <h1 className="font-bold text-xl py-3">
                    The type of tour: {t("type1")}
                  </h1>
                  <div className="w-full flex justify-between">
                    <p className="text-lg">{t("acc_p")}</p>
                    <Link
                      href="/acc1"
                      className="bg-orange-300 rounded-3xl h-12 px-10 flex gap-2 items-center justify-between">
                      <button className="font-semibold text-md">
                        {t("acc_btn")}
                      </button>
                      <ArrowRight />
                    </Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="acc2">
                <Accordion.Control className="font-black text-xl lg:text-2xl">
                  {t("acc_2")}
                </Accordion.Control>
                <Accordion.Panel>
                  <h1 className="font-bold text-xl py-3">
                    The type of tour: {t("type2")}
                  </h1>
                  <div className="w-full flex justify-between">
                    <p className="text-lg">{t("acc_p")}</p>
                    <Link
                      href="/acc1"
                      className="bg-orange-300 rounded-3xl h-12 px-10 flex gap-2 items-center justify-between">
                      <button className="font-semibold text-md">
                        {t("acc_btn")}
                      </button>
                      <ArrowRight />
                    </Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="acc3">
                <Accordion.Control className="font-black text-xl lg:text-2xl">
                  {t("acc_3")}
                </Accordion.Control>
                <Accordion.Panel>
                  <h1 className="font-bold text-xl py-3">
                    The type of tour: {t("type3")}
                  </h1>
                  <div className="w-full flex justify-between">
                    <p className="text-lg">{t("acc_p")}</p>
                    <Link
                      href="/acc1"
                      className="bg-orange-300 rounded-3xl h-12 px-10 flex gap-2 items-center justify-between">
                      <button className="font-semibold text-md">
                        {t("acc_btn")}
                      </button>
                      <ArrowRight />
                    </Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="acc4">
                <Accordion.Control className="font-black text-xl lg:text-2xl">
                  {t("acc_4")}
                </Accordion.Control>
                <Accordion.Panel>
                  <h1 className="font-bold text-xl py-3">
                    The type of tour: {t("type2")}
                  </h1>
                  <div className="w-full flex justify-between">
                    <p className="text-lg">{t("acc_p")}</p>
                    <Link
                      href="/acc1"
                      className="bg-orange-300 rounded-3xl h-12 px-10 flex gap-2 items-center justify-between">
                      <button className="font-semibold text-md">
                        {t("acc_btn")}
                      </button>
                      <ArrowRight />
                    </Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
