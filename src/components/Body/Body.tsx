import LeftCalculator from "../LeftCalculator/LeftCalculator";
import RIghtAdv from "../RightAdv/RightAdv";

const Body = () => {
    return (
        <div>
         <div className="pt-[19.25px] pl-[15px] pr-[14px] md:bg-[#EFF2F5]">
           <LeftCalculator/>
         </div>
        <RIghtAdv/>

        </div>
    );
}

export default Body;