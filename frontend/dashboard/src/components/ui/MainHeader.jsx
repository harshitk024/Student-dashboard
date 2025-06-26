import {FaUserCircle} from "react-icons/fa"

const Header = ({className}) => {


    return (
        <>
        <header class= {className}>

            <div className="">
            <div class = "flex justify-between items-center p-5 pr-20">
               <div class = "w-50 md:w-100 ">
                  <input class="bg-white drop-shadow-xl p-3 rounded-3xl w-full text-right pr-10" placeholder="Search" />
               </div>
               <div class = "flex gap-2">
                   <div>
                      <FaUserCircle size={"50px"} fill="#925FE2"/>
                   </div>
                    <div class = "hidden md:flex flex-col gap-5">
                        <div class="h-1">John</div>
                        <div class="h-3 font-light">3rd year</div>
                   </div>
               </div>
            </div>
            </div>
        </header>
        </>
    )
}

export default Header;