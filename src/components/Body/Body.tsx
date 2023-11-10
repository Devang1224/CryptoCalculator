import LeftCalculator from "../LeftCalculator/LeftCalculator";
import RightAdv from "../Rightadv/RightAdv";

const Body = () => {
    return (
        <div>
         <div className="pt-[19.25px] px-[0px]  md:bg-[#EFF2F5] 
               sm-2:pl-[15px] sm-2:pr-[14px]">
           <LeftCalculator/>
         </div>
        <RightAdv/>

        </div>
    );
}

export default Body;