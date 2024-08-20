import { BiSolidHome } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdAnalytics } from "react-icons/md";
import { PiPottedPlantBold } from "react-icons/pi";
import { GiAnimalHide } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

export const links = [
  {
    id : 1,
    name: "Dashboard",
    icon : <BiSolidHome size={16}/>,
    link : "/"
  },
  {
    id : 2,
    name: "User Management",
    icon : <FaUser size={16}/>,
    link : '/user-management'
  },
  {
    id : 3,
    name: "Supply Management",
    icon : <TbTruckDelivery size={16}/>,
    link : '/supply-management'
  },
  {
    id : 4,
    name: "Livestock Inventory",
    icon : <GiAnimalHide size={16}/>,
    link : '/livestock-inventory'
  },
  {
    id : 5,
    name: "Crop Management",
    icon : <PiPottedPlantBold size={16}/>,
    link : '/crop-management'
  },
  {
    id : 6,
    name: "Reporting and Analytics",
    icon :  <MdAnalytics size={16}/>,
    link : "/report"
  },
  {
    id : 7,
    name: "Climate Gauge",
    icon : <TiWeatherCloudy size={16}/>,
    link : '/climate-guage'
  },
]

export const otherLinks = [
    {
    id : 8,
    name: "Support",
    icon : <BiSupport size={16}/>,
    link : "/support"
  },
  {
    id : 9,
    name: "Logout",
    icon : <IoIosLogOut size={16}/>,
    link : "/logout"
  },
]