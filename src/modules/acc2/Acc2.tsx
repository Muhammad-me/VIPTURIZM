import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Acc2({ open }: { open: any }) {
  const { t } = useTranslation("translation");

  return (
    <div className="bg">
      <div className="container mx-auto py-3 px-10 lg:px-28">
        <div>
          <Navbar open={open} />
          <div className="text-center mt-24 lg:mt-32">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
              {t("acc_2")}
            </h1>
            <span className="text-sm font-semibold">{t("type2")}</span>
          </div>
          <div className="text-center mt-16">
            <h1 className="font-bold text-4xl lg:text-6xl">{t("pr")}</h1>
          </div>
          <Accordion className="my-12">
            <Accordion.Item value="acc1">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr4_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr4_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="acc2">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr5_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr5_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="acc3">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr6_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr6_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="acc4">
              <Accordion.Control className="font-black text-xl lg:text-2xl">
                <h1 className="font-bold text-2xl"> {t("tr7_h1")}</h1>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="font-semibold text-lg">{t("tr7_p")}</p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
