import {
  Button,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  MegaMenu,
  MegaMenuDropdown,
} from "flowbite-react";

export function NavbarWithDropdownMegaMenu() {
  return (
    <MegaMenu
      theme={{
        root: {
          base: "bg-gray-900 bg-transparent text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
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

        <li>
          <MegaMenuDropdown
            theme={{
              base: "fixed! left-1/2! w-full max-w-5xl -translate-x-1/2!", // it's not centered
            }}
            toggle="Company"
          >
            <div className="mx-auto border-t px-0 py-4 text-gray-900 lg:px-4 xl:px-20 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              There is a content for company mega menu
            </div>
          </MegaMenuDropdown>
        </li>

        <li>
          <MegaMenuDropdown
            theme={{
              base: "w-full max-w-5xl", // it's not centered
            }}
            toggle="Marketing"
            style={{ left: "50%", transform: "translateX(-50%)" }} // doesnt work
          >
            <div className="mx-auto border-t px-0 py-4 text-gray-900 lg:px-4 xl:px-20 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              There is a content for marketing mega menu
            </div>
          </MegaMenuDropdown>
        </li>
      </NavbarCollapse>
    </MegaMenu>
  );
}
