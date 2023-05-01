import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import UserList from "views/admin/ListUser"

// Auth Imports

import SignUp from "views/auth/signUp";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Create Teacher",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: SignUp,
  },{
    name: "Manage Teachers",
    layout: "/admin",
    path: "/list-users",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: UserList,
  },
];

export default routes;
