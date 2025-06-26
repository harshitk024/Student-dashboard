import {
  MdDashboard,
  MdOutlinePayment,
  MdAppRegistration,
  MdClass,
  MdCancelPresentation,
  MdMessage,
} from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import DashboardLogo from "../svgs/DashboardLogo";

const options = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={"30px"} />,
  },
  {
    name: "Payment info",
    icon: <MdOutlinePayment size={"30px"} />,
  },
  {
    name: "Result",
    icon: <PiExam size={"30px"} />,
  },
  {
    name: "Schedule",
    icon: <AiOutlineSchedule size={"30px"} />,
  },
  {
    name: "Courses",
    icon: <MdClass size={"30px"} />,
  },
  {
    name: "Registration",
    icon: <MdAppRegistration size={"30px"} />,
  },
  {
    name: "Notice",
    icon: <MdMessage size={"30px"} />,
  },
  {
    name: "Drop Semester",
    icon: <MdCancelPresentation size={"30px"} />,
  },
];

const Sidebar = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div
          class={`flex flex-col bg-primary-500 justify items-center p-7 h-screen`}
        >
         <div className="flex items-center justify-center mb-10">
               <DashboardLogo />
          </div>

          <div id="items" class="">
            <div>
              {options.map((option, index) => (
                <div
                  key={index}
                  class="flex items-center justify-start gap-1.5 p-4 text-white hover:bg-secondary-500 rounded-lg cursor-pointer"
                >
                  <div class="text-gray-300">{option.icon}</div>
                  <span class="text-sm mt-1 font-bold text-gray-300">
                    {option.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
