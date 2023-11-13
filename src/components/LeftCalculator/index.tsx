import FinancialAndCountry from './FinancialAndCountry';
import PurchaseAndSales from './PurchaseAndSales';
import ExpensesAndTerm from './ExpensesAndTerm';
import IncomAndTaxRate from './IncomAndTaxRate';
import CapitalAndDiscount from './CapitalAndDiscount';
import Results from './Results';
import Faqs from '@/components/FAQs';
import { useResultContext } from '@/context/ResultContext';

const LeftCalculator = () => {

  const {result} = useResultContext();


    return (
      <div className='flex flex-col gap-[48px] bg-white rounded-[12px] md:gap-[20px] lg:bg-[#EFF2F5]'>
        <div className="sm-2:border border-[#DEE1E6] rounded-[12px] p-[17px] bg-white
                        md:border-none md:pt-[35px] md:pl-[79px] md:pr-[73px] md:pb-[58px]
                        lg:rounded-[16px] 
        ">
          <div className="lg:p-[8px]">
          <p className="text-center text-grey1 text-[24px] font-bold leading-[34px]
                        md:text-[30px] md:leading-[42px]
                        lg:text-[36px]
            ">
            Free Crypto Tax Calculator Australia
          </p>
          <FinancialAndCountry/>

          <hr className="mt-[25px] w-full md:mt-[28px]" />

          <div className="flex flex-col mt-[25px] gap-[20px] md:mt-[28px] md:gap-[28px]">
            <PurchaseAndSales/>
            <ExpensesAndTerm/>
            <IncomAndTaxRate/>
            {result.investmentType==="long" && <CapitalAndDiscount/>}
            <Results/>
          </div>

          </div>
        </div>

          <Faqs/>

      </div>
    );
}



export default LeftCalculator;