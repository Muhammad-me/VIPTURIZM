import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Acc1() {
  const { t } = useTranslation("translation");

  return (
    <div className="bg">
      <div className="container mx-auto py-3 px-10 lg:px-28">
        <div>
          <Navbar open={open} />
          <div className="text-center mt-24 lg:mt-32">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
              {t("acc_1")}
            </h1>
            <span className="text-sm font-semibold">{t("type1")}</span>
          </div>
          <div className="text-center mt-16">
            <h1 className="font-bold text-4xl lg:text-6xl">{t("pr")}</h1>
          </div>
          <Accordion className="my-12">
            <Accordion.Item value="acc1">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr1_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr1_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="acc2">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr2_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr2_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="acc3">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr3_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr3_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            what
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
