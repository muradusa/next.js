import Image from "next/image";
import Link from "next/link";

import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

function Navbar() {
  const dropdown = function MyDropdown() {
    return (
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    );
  };

  return (
    <div>
      <nav>
        <div className="bg-gray-200 w-full flex">
          <div className=" h-20 w-2/3">
            <Image
              className="object-contain bg-blue-500 justify-items-start"
              src="/logo.png"
              alt="logo"
              height={80}
              width={200}
              layout="fixed"
            />
          </div>
          <div className="flex w-1/3 md:w-1/2 bg-gray-200 justify-end text-lg">
            <ul className="hidden md:visible md:flex space-x-5 mr-10 capitalize items-center ">
              <Link href="/">
                <li className="">home</li>
              </Link>
              <Link href="/about">
                <li className="">about</li>
              </Link>
              <Link href="/">
                <li className="">contact</li>
              </Link>
              <Link href="/">
                <li className="">projects</li>
              </Link>
              <Link href="/">
                <li className="">career</li>
              </Link>
            </ul>

            <MenuIcon className="visible md:invisible w-10 mr-5 " />
            {dropdown()}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
