import Image from "next/image";
import { Menu } from 'lucide-react';
import Logo from "@/assets/KoinxLogo.svg"

const NavBar = () => {
    return (
        <div className="px-[24px] h-[64px] tracking-[-0.16px] flex justify-between items-center bg-white shadow-shadow-1 
          md:h-[79px] md:pl-[24px] md:pr-[24px] md:border md:border-t-0 md:border-x-0 md:border-[#DEDFE2] md:shadow-shadow-2
          lg:pl-[60px] lg:pr-[56px]
        ">
          <Image 
           src={Logo} 
           alt="KoinX logo"
           width={96}
           height={24}
           className="w-[81px] h-[20.25px]
                    md:w-[96px] md:h-[24px]"
           />
           <div className="md:hidden">
             <Menu width={27} height={27}/>
           </div>

           <div className="hidden md:flex gap-[30px] items-center text-[14px]
                           lg:gap-[68.85px] lg:text-[16px]">
             <div className="flex text-grey1 font-semibold gap-[25px] 
                             lg:gap-[32px]">
                 <div>Features</div>
                 <div>Exchanges</div>
                 <div>How it Works?</div>
                 <div>Blog</div>
                 <div>About us</div>
             </div>

             <button className=" border border-[#0052FE] text-[#0052FE] tracking-[-0.16px]
                                px-[32px] py-[8px] rounded-[4px] font-semibold">
                Sign In
             </button>
           </div>

        </div>
    );
}

export default NavBar;