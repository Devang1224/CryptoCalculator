import FinancialAndCountry from './FinancialAndCountry';
import PurchaseAndSales from './PurchaseAndSales';
import ExpensesAndTerm from './ExpensesAndTerm';
import IncomAndTaxRate from './IncomAndTaxRate';
import CapitalAndDiscount from './CapitalAndDiscount';
import Results from './Results';
import Faqs from '../FAQs/Faqs';

const LeftCalculator = () => {


    return (
      <div className='flex flex-col gap-[48px]'>
        <div className="sm-2:border border-[#DEE1E6] rounded-[12px] p-[17px]">
          <p className="text-center text-grey1 text-[24px] font-bold leading-[34px]">
            Free Crypto Tax Calculator Australia
          </p>
          <FinancialAndCountry/>

          <hr className="mt-[25px] w-full" />

          <div className="flex flex-col mt-[25px] gap-[20px]">
            <PurchaseAndSales/>
            <ExpensesAndTerm/>
            <IncomAndTaxRate/>
            <CapitalAndDiscount/>
            <Results/>
          </div>
        </div>

          <Faqs/>

      </div>
    );
}



export default LeftCalculator;