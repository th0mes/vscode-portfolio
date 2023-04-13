import { VscRemote, VscGitMerge, VscBellDot } from "react-icons/vsc";
import { TbWorld, TbBrandGithubCopilot, TbCheck } from "react-icons/tb";

export function Footer() {
  return (
    <div className="flex w-full items-center justify-between bg-neutral">
      <div className="flex items-center space-x-2">
        <button className="bg-secondary/80 px-2 py-1 hover:bg-secondary">
          <VscRemote className="text-secondary-content" />
        </button>
        <button className="flex items-center space-x-2 p-1 hover:bg-slate-300/20">
          <VscGitMerge />
          <span className="text-xs">main</span>
        </button>
        <button className="flex items-center space-x-2 p-1 hover:bg-slate-300/20">
          <TbWorld />
          <span className="text-xs">Connected to discord</span>
        </button>
      </div>
      <div className="flex items-center space-x-2 px-2">
        <button className="flex p-1 text-xs hover:bg-slate-300/20">
          Spaces: 2
        </button>
        <button className="flex p-1 text-xs hover:bg-slate-300/20">
          UTF-8
        </button>
        <button className="flex p-1 text-xs hover:bg-slate-300/20">LF</button>
        <button className="flex p-1 text-xs hover:bg-slate-300/20">
          Typescript JSX
        </button>
        <button className="p-1 hover:bg-slate-300/20">
          <TbBrandGithubCopilot />
        </button>
        <button className="flex items-center space-x-2 p-1 hover:bg-slate-300/20">
          <TbCheck />
          <span className="text-xs">Prettier</span>
        </button>
        <button className="p-1 hover:bg-slate-300/20">
          <VscBellDot />
        </button>
      </div>
    </div>
  );
}
