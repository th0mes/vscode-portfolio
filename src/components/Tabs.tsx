import { useTabStore } from "@/hooks";
import Link from "next/link";
import { FaReact, FaTimes } from "react-icons/fa";

export const Tabs = () => {
  const { tabs, remove } = useTabStore();

  return (
    <section className="flex bg-base-300">
      {tabs.map(({ path, title }) => (
        <button key={path} className="relative">
          <Link
            href={path}
            className="flex items-center space-x-4 px-4 py-2 pr-8 hover:bg-base-200"
          >
            <div className="flex items-center space-x-2">
              <FaReact />
              <span>{title}</span>
            </div>
          </Link>
          <div className="absolute right-1 top-1/2 z-10 -translate-y-1/2 p-1">
            <FaTimes onClick={() => remove(path)} />
          </div>
        </button>
      ))}
    </section>
  );
};
