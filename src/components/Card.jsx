import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Card({ img, text }) {
  const { t } = useTranslation("translation");

  return (
    <div className="flex justify-center">
      <div>
        <Image
          className="w-[350px] h-[400px] rounded mt-7 lg:mt-0"
          src={img}
          alt={"picture"}
        />
        <h1 className="text-xl lg:text-3xl font-bold mt-5">{t(text)}</h1>
      </div>
    </div>
  );
}
