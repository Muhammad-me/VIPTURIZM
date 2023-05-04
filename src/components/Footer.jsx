import Image from "next/image";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import img8 from "../img/map1.jpg";

export default function Footer() {
  const { t } = useTranslation("translation");

  return (
    <div className="bg-[#0b265a]" id="section3">
      <div className="container mx-auto py-20 lg:py-40 px-10 lg:px-28 text-white">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/3">
            <h4 className="text-xl lg:text-3xl font-bold">{t("ft_txt1")}</h4>
            <p className="text-lg lg:text-xl mt-5">{t("ft_li1")}</p>
            <p className="text-lg lg:text-xl mt-2">{t("ft_li2")}</p>
            <p className="text-lg lg:text-xl mt-2">{t("ft_li3")}</p>
            <p className="text-lg lg:text-xl mt-2">{t("ft_li4")}</p>
          </div>
          <div className="w-1/3">
            <h4 className="text-xl lg:text-3xl font-bold">{t("ft_txt2")}</h4>
            <p className="text-lg lg:text-xl mt-5">{t("ft_li5")}</p>
            <p className="text-lg lg:text-xl mt-2">{t("ft_li6")}</p>
            <p className="text-lg lg:text-xl mt-2">{t("ft_li7")}</p>
          </div>
          <div className="w-[350px] h-[200px] mt-10 lg:mt-0 mx-auto">
            <a href="https://www.google.com/maps/place/Tashkent,+O%60zbekiston/@41.2982104,69.2211368,13z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk">
              <Image className="rounded-[35px]" src={img8} alt="alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
