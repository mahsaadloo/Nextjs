import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import LocalSwitcher from "./LocalSwitcher";

const Navbar = () => {
  const t = useTranslations("Navigation");
  return (
    <>
      <Link href="/">{t("home")}</Link>
      <LocalSwitcher />
    </>
  );
};

export default Navbar;
