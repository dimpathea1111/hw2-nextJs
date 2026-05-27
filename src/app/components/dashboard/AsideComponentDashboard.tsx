
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { usePathname } from "next/navigation";
import {  HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function AsideComponentDashboard() {

    const pathName=usePathname();

  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
      
          <SidebarItem href="/dashboard/blogs" icon={HiUser} className={pathName === "/dashboard/blogs" ? "bg-blue-500 rounded" : ""}>
            Blog
          </SidebarItem>
          <SidebarItem href="/dashboard/products" icon={HiShoppingBag}  className={pathName === "/dashboard/products" ? "bg-blue-500 rounded" : ""}>
            Products
          </SidebarItem>
            <SidebarItem href="/dashboard/setting" icon={HiShoppingBag}  className={pathName === "/dashboard/setting" ? "bg-blue-500 rounded" : ""}>
            Setting
          </SidebarItem>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
