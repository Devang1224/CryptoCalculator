import LeftCalculator from '@/components/LeftCalculator/LeftCalculator';
import RightAdv from '../Rightadv';


const Body = () => {
    return (
        <div className="flex flex-col md:bg-[#EFF2F5] lg-2:flex-row lg-2:pr-[57px] lg:gap-[20px] lg:pr-[0px]">
         <div className="pt-[19.25px] px-[0px]  md:bg-[#EFF2F5] sm-2:pl-[15px] sm-2:pr-[14px] md:px-[56px] md:pt-[28px]
                         lg-2:pr-0 lg:pr-[57px]
          ">
           <LeftCalculator/>
         </div>
        <RightAdv/>

        </div>
    );
}

export default Body;