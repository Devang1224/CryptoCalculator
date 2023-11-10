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
      <div className="w-full flex flex-col ]">
        <p className="w-full h-[43px] flex items-start pl-[13px] text-[24px] leading-[21.6px] text-grey1 font-bold text-center">
          Frequently Asked Questions
        </p>
        <div className="px-[8px]">

           {
             faqsData.map((item,index)=>(
                <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1"
                   className={cn({'border-none': index === faqsData.length - 1,})}
                >
                  <AccordionTrigger
                   className={cn("text-[18px] text-[#0B1426] leading-[26px] font-bold text-left")}
                   >
                    {item.question}
                 </AccordionTrigger>
                  <AccordionContent
                   className={cn(" text-grey1 pt-[10px] pr-[11px] text-[16px] leading-[160%] text-left",
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