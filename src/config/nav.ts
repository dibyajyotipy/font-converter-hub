export interface NavLink {
  label: string;
  href: string;
  isAccent?: boolean;
}

export interface NavDivider {
  divider: true;
}

export interface NavHeader {
  header: string;
}

export type DropdownItem = NavLink | NavDivider | NavHeader;

export interface NavDropdown {
  label: string;
  links: DropdownItem[];
}

export type NavItem = NavLink | NavDropdown;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "KrutiDev Tools",
    links: [
      { label: "KrutiDev to Unicode", href: "/krutidev-to-unicode" },
      { label: "Unicode to KrutiDev", href: "/unicode-to-krutidev" },
      { divider: true },
      { label: "KrutiDev to Mangal", href: "/krutidev-to-mangal-converter" },
      { label: "Mangal to KrutiDev", href: "/mangal-to-krutidev-converter" },
      { divider: true },
      { label: "KrutiDev to Chanakya", href: "/krutidev-to-chanakya-converter" },
      { label: "Chanakya to KrutiDev", href: "/chanakya-to-krutidev-converter" },
      { divider: true },
      { label: "KrutiDev Font Download", href: "/krutidev-font-download", isAccent: true },
      { label: "KrutiDev Keyboard Layout", href: "/krutidev-keyboard-layout", isAccent: true }
    ]
  }
];
