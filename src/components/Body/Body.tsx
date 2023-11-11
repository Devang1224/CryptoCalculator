import LeftCalculator from "../LeftCalculator/LeftCalculator";
import RightAdv from "../Rightadv/RightAdv";

const Body = () => {
    return (
        <div className="flex flex-col md:bg-[#EFF2F5] lg:flex-row lg:gap-[20px] lg:pr-[57px]">
         <div className="pt-[19.25px] px-[0px]  md:bg-[#EFF2F5] 
                         sm-2:pl-[15px] sm-2:pr-[14px]
                         md:px-[56px] md:pt-[28px]
                         lg:pr-0
          ">
           <LeftCalculator/>
         </div>
        <RightAdv/>

        </div>
    );
}

export default Body;