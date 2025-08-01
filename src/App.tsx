import { NavbarWithDropdownMegaMenu } from "./NavbarWithDropdownMegaMenu";
import { NavbarWithMegaMenu } from "./NavbarWithMegaMenu";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <NavbarWithMegaMenu />
      <div className="p-10 text-white">
        Above there is an example with one MegaMenu and two
        MegaMenuDropdownToggles.
      </div>

      <NavbarWithDropdownMegaMenu />
      <div className="p-10 text-white">
        Above there is an example with one MegaMenu and two MegaMenuDropdowns
        with toggle field.
      </div>
    </main>
  );
}
