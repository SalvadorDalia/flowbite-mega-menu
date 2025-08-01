import {
  Button,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
} from "flowbite-react";

export function NavbarWithMegaMenu() {
  return (
    <MegaMenu
      theme={{
        root: {
          base: "bg-gray-900 bg-transparent dark:border-gray-600 dark:bg-gray-800",
          inner: { base: "mx-auto max-w-5xl" },
        },
      }}
    >
      <NavbarBrand href={"/"}>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </NavbarBrand>

      <div className="flex gap-2 md:order-2">
        <Button color="alternative">Log in</Button>
        <Button color="default">Sign up</Button>
        <NavbarToggle />
      </div>

      <NavbarCollapse
        theme={{
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-base [&_a]:font-medium",
        }}
      >
        <NavbarLink>Home</NavbarLink>

        <MegaMenuDropdownToggle data-collapse-toggle="mega-menu-company">
          Company
          <svg
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </MegaMenuDropdownToggle>
        <MegaMenuDropdown
          theme={{
            base: "hidden max-h-full w-full max-w-5xl md:fixed md:top-15 md:left-1/2 md:-translate-x-1/2 md:shadow-md",
          }}
          id="mega-menu-company"
        >
          <div className="mx-auto border-t px-0 py-4 text-gray-900 lg:px-4 xl:px-20 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            There is a content for company mega menu
          </div>
        </MegaMenuDropdown>

        <MegaMenuDropdownToggle data-collapse-toggle="mega-menu-marketing">
          Marketing
          <svg
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </MegaMenuDropdownToggle>
        <MegaMenuDropdown
          theme={{
            base: "hidden max-h-full w-full max-w-5xl md:fixed md:top-15 md:left-1/2 md:-translate-x-1/2 md:shadow-md",
          }}
          id="mega-menu-marketing"
        >
          <div className="mx-auto border-t px-0 py-4 text-gray-900 lg:px-4 xl:px-20 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            There is a content for marketing mega menu
          </div>
        </MegaMenuDropdown>
      </NavbarCollapse>
    </MegaMenu>
  );
}
