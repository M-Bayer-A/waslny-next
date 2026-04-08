/* eslint-disable jsx-a11y/alt-text */

import { CustomIcons, getIcon } from "@/helpers/iconsHelper";

/* eslint-disable @next/next/no-img-element */
export default function AppBar() {
  return (
    <div className="flex flex-row justify-between items-center p-1 border border-zinc-200 text-[24px] font-[Cairo] font-semibold">
      <div className="flex flex-row  items-center justify-center gap-2">
        {/* <MobileSidebarTrigger /> */}
        <img src={getIcon(CustomIcons.waslny)} />
        <p className="text-zinc-200">/</p>
        <p>
          {/* {mainPageSections.map((s) => {
              return s.url == path ? s.title : "";
            })} */}
          Home
        </p>
      </div>
      <img src={getIcon(CustomIcons.avatar) || "/placeholder.svg"} />
    </div>
  );
}
