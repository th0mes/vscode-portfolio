import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronDown, HiEllipsisHorizontal } from "react-icons/hi2";

export const Explorer = () => {
  return (
    <section className="flex h-full w-80 flex-col border-r-2 border-base-300 bg-base-300">
      <div className="flex items-center justify-between p-2">
        <h4 className="text-sm">Explorer</h4>
        <HiEllipsisHorizontal />
      </div>
      <div className="flex h-full flex-col space-y-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center space-x-4 bg-base-100 px-2">
                <HiChevronDown
                  className={`${open ? "-rotate-90 transform" : ""} h-5 w-5`}
                />
                <span className="text-xs font-bold uppercase">
                  Open editors
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center space-x-4 bg-base-100 px-2">
                <HiChevronDown
                  className={`${open ? "-rotate-90 transform" : ""} h-5 w-5`}
                />
                <span className="text-xs font-bold uppercase">Thomes</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="h-full"
              >
                <Disclosure.Panel className="flex shrink grow px-4 pb-2 pt-4 text-sm text-gray-500 transition-all">
                  No.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center space-x-4 bg-base-100 px-2">
                <HiChevronDown
                  className={`${open ? "-rotate-90 transform" : ""} h-5 w-5`}
                />
                <span className="text-xs font-bold uppercase">Outline</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center space-x-4 bg-base-100 px-2">
                <HiChevronDown
                  className={`${open ? "-rotate-90 transform" : ""} h-5 w-5`}
                />
                <span className="text-xs font-bold uppercase">Timeline</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
};
