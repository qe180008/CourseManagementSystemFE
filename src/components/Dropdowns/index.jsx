import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

function Dropdowns() {
  const dropdowns = [
    {
      parent: "Dashboard",
      children: {
        link: "/dashboars",
        item: "Account setting",
      }
    },
    {
      parent: "My Courses",
      children: {
        link: "/courses",
        item: "Courses",
      }
    }
  ]
  return (
    <>
      {dropdowns.map((element, index) => (
        <Menu as="div" className="relative inline-block text-left mr-[1rem]" key={index}>
          <div>
            <MenuButton className="inline-flex font-bold w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm  hover:bg-gray-50">
              {element.parent}
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to={element.children.link}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 "
                >
                  {element.children.item}
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      ))}
    </>
  )
}
export default Dropdowns;