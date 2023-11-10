
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

const IncomAndTaxRate = () => {



    return (
      <div className="flex flex-col gap-[8px]">
        
{/* Annual Income Input */}
        <div className="flex flex-col gap-[6px]">
          <p className="text-grey1 text-[14px] leading-[24px]">
            Select Your Annual Income
          </p>
          <div className="">
            <Select>
              <SelectTrigger
                className={cn(
                  "outline-none border-none w-full px-[16px] text-grey1 appearance-none py-[14.5px] rounded-[8px] outline-none bg-[#EFF2F5]"
                )}
              >
                <SelectValue placeholder="$0 - $18,200" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="0-18200">$0 - $18,200</SelectItem>
                <SelectItem value="18201-45000">$18,201 - $45,000</SelectItem>
                <SelectItem value="45001-120000">$45,001 - $120,000</SelectItem>
                <SelectItem value="120001-180000">$120,001 - $180,000</SelectItem>
                <SelectItem value="180001+">$180,001+</SelectItem>
              </SelectContent>
            </Select>
          </div>
         </div>

{/* Tax Rate div */}
        <div className="flex items-center gap-[7px] sm-2:gap-[12px]">
          <span className="leading-[12px] text-[10px] text-grey2 sm-2:text-[12px] sm-2:leading-[24px]">Tax Rate:</span>
          <p className="text-grey2 text-[10px] font-medium
                       sm-2:text-[12px]
               ">
             $ 5,902 + 32.5% of excess over $45,001 
          </p>
        </div>

      </div>
    );
}

export default IncomAndTaxRate;