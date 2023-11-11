import { useState } from "react";
import Image from "next/image";
import RadioTick from "@/assets/radioTick.svg"


const ExpensesAndTerm = () => {

    const[term,setTerm] = useState("");


    return (
        <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[40px]">

{/* Expenses Input */}
        <div className="flex flex-col gap-[6px] flex-1 lg:max-w-[335px] ">
          <p className="text-grey1 text-[15px] leading-[24px]">
            Enter you Expenses
          </p>
          <div className="relative">
            <span className="absolute left-[16px] top-[50%] translate-y-[-50%]">
              $
            </span>
            <input
              type="number"
              placeholder="Expenses"
              className="text-grey1 leading-[19px] w-full px-[16px] py-[14.5px] pl-[30px] rounded-[8px] bg-[#EFF2F5]
                   outline-none outline-offset-0 focus:outline-[#0052FE] focus:bg-white focus:outline-[1px]
                   "
            />
          </div>
        </div>

{/*Investment Type*/}
        <div className="flex flex-col gap-[6px] flex-1 lg:max-w-[335px]">
          <p className="text-grey1 text-[14px] leading-[24px]">
            Investment Type
          </p>
          <div className="flex gap-[10px] ">
            <div className="w-[169px] lg:w-[162px]">
              <div
                className={`h-[48px] flex items-center cursor-pointer px-[8px] py-[14.5px] pr-[6px] text-gray1 rounded-[8px] border border-[#3E424A]
                            sm-2:px-[12px]
                  ${ term === "short" && `outline outline-2 border-transparent text-[#0141CF] bg-[#0052FE0F] outline-[#0052FE]`}  `}
                  onClick={() => setTerm("short")}
              >
                <p className="flex items-center justify-between w-full">
                  Short Term
                  {term === "short" && (<Image src={RadioTick} alt="" width={32} height={32} className="w-[20px] h-[20px] sm-2:w-[32px] sm-2:h-[32px] md:w-[24px] md:h-[24px]"/>)}
                </p>
              </div>
              <p className="text-[13px] leading-[24px] text-[#3E424A] font-medium mt-[4px]">{`<12 Months`}</p>
            </div>

            <div className="w-[169px] lg:w-[162px]">
              <div
                className={`h-[48px] flex items-center cursor-pointer px-[8px] pr-[6px] py-[14.5px] text-gray1 rounded-[8px] border border-[#3E424A]
                           sm-2:px-[12px] 
                ${term === "long" && `outline outline-2 border-transparent text-[#0141CF] bg-[#0052FE0F] outline-[#0052FE]`}`}
                 onClick={() => setTerm("long")}
               >
                <p className="flex items-center justify-between w-full">
                  LongTerm
                  {term === "long" && ( <Image src={RadioTick}alt=""width={32}height={32} className="w-[20px] h-[20px] sm-2:w-[32px] sm-2:h-[32px] md:w-[24px] md:h-[24px]"/>)}
                </p>
              </div>
              <p className="text-[13px] leading-[24px] text-[#3E424A] font-medium mt-[4px]">{`> 12 Months`}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ExpensesAndTerm;