import { useRouter } from "next/router";

import { BsFiles } from "react-icons/bs";
import { HiOutlineCog6Tooth, HiOutlineUser } from "react-icons/hi2";

import Link from "next/link";
import { type IconType } from "react-icons";

interface SidebarProps {
  Icon: IconType;
  label: string;
  path: string;
}

const SidebarData: SidebarProps[][] = [
  [
    { Icon: BsFiles, label: "Hi", path: "/" },
    { Icon: BsFiles, label: "Hi", path: "/2" },
  ],
  [
    { Icon: HiOutlineUser, label: "Accounts", path: "/login" },
    { Icon: HiOutlineCog6Tooth, label: "Manage", path: "/specs" },
  ],
];

export const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <section className="flex h-full w-12 flex-col items-center justify-between bg-base-200">
      {SidebarData.map((itemGroup, groupId) => (
        <div key={groupId}>
          {itemGroup.map(({ Icon, label, path }, id) => (
            <Link
              href={path}
              key={id}
              className={`tooltip tooltip-right p-4 ${
                pathname === path ? "border-l-2 border-secondary" : ""
              }`}
              data-tip={label}
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
};
