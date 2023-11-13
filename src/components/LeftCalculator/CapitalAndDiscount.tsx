import { useResultContext } from "@/context/ResultContext";

const CapitalAndDiscount = () => {
  
  const {result} = useResultContext();

  
  return (
    <div className="flex flex-col gap-[20px] md:gap-[40px] md:flex-row">

 {/* Capital Gain input  */}
      <div className="flex flex-col gap-[6px] flex-1 lg-2:max-w-[335px]">
        <p className="text-grey1 text-[15px] leading-[24px]">
          Capital gains amount
        </p>
          <div className="text-grey1 w-full px-[16px] py-[14.5px] font-medium rounded-[8px] bg-[#EFF2F5]
                      md:text-[18px] md:leading-normal">
            $ {result.capitalGain}
          </div>
      </div>

 {/* Discount input  */}
      <div className="flex flex-col gap-[6px] flex-1 lg-2:max-w-[335px]">
        <p className="text-grey1 text-[15px] leading-[24px]">
        Discount for long term gains
        </p>
        <div  className="text-grey1 w-full px-[16px] overflow-x-auto py-[14.5px] font-medium rounded-[8px] bg-[#EFF2F5]
                      md:text-[18px] md:leading-normal">
            $ {result.longTermGain}
          </div>
      </div>
    </div>
  );
};

export default CapitalAndDiscount;
