
// "use client";

// import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
// import { usePathname } from "next/navigation";
// import {  HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

// export function AsideComponentDashboard() {

//     const pathName=usePathname();

//   return (
//     <Sidebar aria-label="Default sidebar example">
//       <SidebarItems>
//         <SidebarItemGroup>
//           <SidebarItem href="#" icon={HiChartPie}>
//             Dashboard
//           </SidebarItem>
      
//           <SidebarItem href="/dashboard/blogs" icon={HiUser} className={pathName === "/dashboard/blogs" ? "bg-blue-500 rounded" : ""}>
//             Blog
//           </SidebarItem>
//           <SidebarItem href="/dashboard/products" icon={HiShoppingBag}  className={pathName === "/dashboard/products" ? "bg-blue-500 rounded" : ""}>
//             Products
//           </SidebarItem>
//             <SidebarItem href="/dashboard/setting" icon={HiShoppingBag}  className={pathName === "/dashboard/setting" ? "bg-blue-500 rounded" : ""}>
//             Setting
//           </SidebarItem>
         
//         </SidebarItemGroup>
//       </SidebarItems>
//     </Sidebar>
//   );
// }




"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function AsideComponentDashboard() {
  const pathName = usePathname();
  return (
    <div className="w-full ">
      <Sidebar aria-label="Sidebar with content separator example ">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/dashboard" icon={HiChartPie}>
              Dashboard
            </SidebarItem>

            <SidebarItem
              className={
                pathName == "/dashboard/blogs" ? `bg-blue-100` : `bg-gray-100`
              }
              href="/dashboard/blogs"
              icon={HiUser}
            >
              Blog
            </SidebarItem>
            <SidebarItem href="/dashboard/products" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="/dashboard/setting" icon={HiShoppingBag}>
              Setting
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
