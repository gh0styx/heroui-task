"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
} from "@heroui/navbar";
import Link from "next/link";
import React from "react";

import { ThemeSwitch } from "./theme-switch";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeroUINavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Meme?</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/cards">
            Cards
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link color="purple" href="/table">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="blue" href="/cards">
            Cards
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
