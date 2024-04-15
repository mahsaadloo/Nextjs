"use client";

import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";
import React, { useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (event: SelectChangeEvent<string>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <>
      <InputLabel id="demo-simple-select-label">change language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        onChange={onSelectChange}
        disabled={isPending}
        defaultValue={localActive}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fa">فارسی</MenuItem>
      </Select>
    </>
  );
};

export default LocalSwitcher;
