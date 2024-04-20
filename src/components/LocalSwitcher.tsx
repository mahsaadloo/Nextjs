"use client";

import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { startTransition } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { usePathname, useRouter } from "next/navigation";

const LocalSwitcher = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onSelectChange = (language: string) => {
    startTransition(() => {
      router.replace(`/${language}`);
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            onSelectChange("en");
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            onSelectChange("fa");
          }}
        >
          فارسی
        </MenuItem>
      </Menu>
    </>
  );
};

export default LocalSwitcher;
