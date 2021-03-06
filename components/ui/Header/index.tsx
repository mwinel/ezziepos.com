import { Fragment, ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
  ClockIcon,
  CogIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  InboxInIcon,
  TagIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import NavLink from "@components/ui/NavLink";
import Logo from "@components/ui/Logo";
import DropdownLink from "@components/ui/DropdownLink";
import classNames from "@common/classnames";

import en from "@locales/en";
import fr from "@locales/fr";

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl: "photo-1550525811-e5869dd03032",
};

interface HeaderProps {
  children?: ReactNode | any;
}

const myLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};

const Header = ({ children }: HeaderProps) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    /* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm lg:static lg:overflow-y-visible"
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                <div className="flex-shrink-0 flex items-center">
                  <Logo href="/" />
                </div>
              </div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                        placeholder="Search..."
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                <div>
                  <select
                    id="location"
                    name="location"
                    className="flex-shrink-0 mt-1 block w-full pl-3 pr-8 py-2 text-base border-gray-100 bg-gray-100 focus:outline-none sm:text-sm rounded-md"
                    defaultValue={locale}
                    onChange={handleLanguageChange}
                  >
                    <option value="en">En</option>
                    <option value="fr">Fr</option>
                  </select>
                </div>
                <a
                  href="#"
                  className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="flex-shrink-0 relative ml-5">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            loader={myLoader}
                            src={user.imageUrl}
                            alt={`${user.name} profile image`}
                            height={40}
                            width={40}
                            className="rounded-full object-cover"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                        >
                          <DropdownLink active="active">
                            {t.ProfileLink}
                          </DropdownLink>
                          <DropdownLink active="active" href="/settings">
                            {t.SettingsLink}
                          </DropdownLink>
                          <DropdownLink active="active" href="/auth/login">
                            {t.LogoutLink}
                          </DropdownLink>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
              <NavLink name={t.NavLinkHome} icon={<HomeIcon />} href="/" />
              <NavLink
                name={t.NavLinkOrders}
                icon={<InboxInIcon />}
                href="/orders"
              />
              <NavLink
                name={t.NavLinkProducts}
                icon={<TagIcon />}
                href="/products"
              />
              <NavLink
                name={t.NavLinkHistory}
                icon={<ClockIcon />}
                href="/history"
              />
              <NavLink
                name={t.NavLinkTeam}
                icon={<UserGroupIcon />}
                href="/team"
              />
              <NavLink
                name={t.NavLinkReports}
                icon={<DocumentReportIcon />}
                href="/reports"
              />
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                <div className="flex-shrink-0">
                  <Image
                    loader={myLoader}
                    src={user.imageUrl}
                    alt={`${user.name} profile image`}
                    height={36}
                    width={36}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                <NavLink
                  name={t.NavLinkSettings}
                  icon={<CogIcon />}
                  href="/settings"
                />
                <NavLink
                  name={t.NavLinkHelp}
                  icon={<QuestionMarkCircleIcon />}
                  href="/help"
                />
                <NavLink
                  name={t.NavLinkPrivacy}
                  icon={<ShieldCheckIcon />}
                  href="/privacy"
                />
                <NavLink
                  name={t.LogoutLink}
                  icon={<LogoutIcon />}
                  href="/auth/login"
                />
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default Header;
