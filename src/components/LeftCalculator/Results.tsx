import { useResultContext } from "@/context/ResultContext";

const Results = () => {

 const {result} = useResultContext();

    return (
        <div className="mt-[15px] flex flex-col gap-[20px] items-center justify-center
                      sm:flex-row md:gap-[40px]"
          >
            <div className="bg-[#EBF9F4] px-[35.5px] py-[20.5px] rounded-[8px] font-medium text-grey1 flex text-center flex-col gap-[8px] items-center
                     sm:px-[25.5px] flex-1 min-w-[292px] lg:max-w-[335px]
            ">
               <p className="">Net Capital gains tax amount</p>
               <p className="font-bold text-[24px] leading-[29px] text-green1">{result.netCapitalGain}</p>
            </div>
            <div className="bg-[#EBF2FF] px-[35.5px] py-[20.5px] rounded-[8px] font-medium text-grey1 flex text-center flex-col gap-[8px] items-center
            flex-1 sm:px-[25.5px] min-w-[292px] lg:max-w-[335px]
            ">
               <p className="">The tax you need to pay*</p>
               <p className="font-bold text-[24px] leading-[29px] text-[#0141CF]">{result.taxToBePaid}</p>
            </div>
        </div>
    );
}

export default Results;