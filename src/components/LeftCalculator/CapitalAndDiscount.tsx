const CapitalAndDiscount = () => {
  return (
    <div className="flex flex-col gap-[20px]">

 {/* Capital Gain input  */}
      <div className="flex flex-col gap-[6px]">
        <p className="text-grey1 text-[15px] leading-[24px]">
          Capital gains amount
        </p>
        <div className="relative">
          <span className="absolute left-[16px] top-[50%] translate-y-[-50%]">
            $
          </span>
          <input
            type="number"
            className="text-grey1 leading-[19px] w-full px-[16px] py-[14.5px] pl-[30px] rounded-[8px] bg-[#EFF2F5]
                   outline-none outline-offset-0 focus:outline-[#0052FE] focus:bg-white focus:outline-[1px]
                   "
          />
        </div>
      </div>

 {/* Discount input  */}
      <div className="flex flex-col gap-[6px]">
        <p className="text-grey1 text-[15px] leading-[24px]">
        Discount for long term gains
        </p>
        <div className="relative">
          <span className="absolute left-[16px] top-[50%] translate-y-[-50%]">
            $
          </span>
          <input
            type="number"
            className="text-grey1 leading-[19px] w-full px-[16px] py-[14.5px] pl-[30px] rounded-[8px] bg-[#EFF2F5]
                   outline-none outline-offset-0 focus:outline-[#0052FE] focus:bg-white focus:outline-[1px]
                   "
          />
        </div>
      </div>
    </div>
  );
};

export default CapitalAndDiscount;
