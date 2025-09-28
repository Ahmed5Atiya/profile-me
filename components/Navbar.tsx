import React, { memo } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export const Navbar = memo(() => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Ahmed5Atiya?tab=followers",
    },
  ];
  return (
    <div className="flex z-[1000]  fixed md:items-start items-end  -right-3  md:left-[50%] top-[70px] translate-x-[-50%] md:h-fit h-[250px]   w-fit">
      <FloatingDock
        mobileClassName="translate-y-[50%] right-[-47%] translate-x-[-50%]" // only for demo, remove for production
        items={links}
      />
    </div>
  );
});

Navbar.displayName = 'Navbar';
