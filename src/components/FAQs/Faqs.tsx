import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { cn } from "@/lib/utils";
import { faqsData } from "@/utils/data/faqs";



const Faqs = () => {
    return (
      <div className="w-full flex flex-col bg-white lg:rounded-[16px] gap-[9px]
                    md:pl-[24px] lg:pt-[24px] md:pr-[27px] lg:pb[36px] 
        ">
        <p className="w-full h-[43px] flex items-start pl-[13px] pr-2 text-[20px] leading-normal  text-grey1 font-bold text-center
                     sm-2:leading-[21.6px] sm-2:text-[24px] 
                     md:text-[30px] md:leading-[72%] md:h-[51px] lg:pl-[0] md:items-center
        ">
          Frequently Asked Questions
        </p>
        <div className="px-[8px] py-5 sm-2:py-0 lg:px-0">

           {
             faqsData.map((item,index)=>(
                <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1"
                   className={cn({'border-none': index === faqsData.length - 1,})}
                >
                  <AccordionTrigger
                   className={cn("text-[16px] text-[#0B1426] leading-[26px] font-semibold text-left sm-2:text-[18px] sm-2:font-bold lg:text-[20px] lg:leadin-[21.6px]")}
                   >
                    <span><span className="hidden md:inline">{index+1}. </span>{item.question}</span>
                 </AccordionTrigger>
                  <AccordionContent
                   className={cn(" text-grey1 pt-[10px] pr-[11px] text-[14px] leading-normal text-left sm-2:text-[16px] sm-2:leading-[160%] lg:max-w-[830px] lg:text-[16px] lg:text-[#3E424A]",
                   )}
                   >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
             ))
           } 
         
        </div>

      </div>
    );
}

export default Faqs;