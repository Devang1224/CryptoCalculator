import { useResultContext } from "@/context/ResultContext";
import { debounce } from 'lodash';

const PurchaseAndSales = () => {

  const {setResult} = useResultContext();


const handlePurchasePriceChange = debounce((e)=>{
        const purchasePrice = e.target.value;
        setResult((prev)=>({ ...prev, purchasePrice}))
 }, 500);

 
 const handleSalePriceChange = debounce((e)=>{
      const salePrice = e.target.value;
      setResult((prev)=>( { ...prev, salePrice}))
}, 500);

    return (
        <div className="flex flex-col gap-[20px] md:flex-row md:gap-[40px] ">

{/* Purchase Price Crypto Input */}
         <div className=" flex flex-col gap-[6px] flex-1 lg-2:max-w-[335px]"> 
          <p className="text-grey1 text-[15px] leading-[24px] ">
            Enter purchase price of Crypto
          </p>
          <div className="relative">
            <span className="absolute left-[16px] top-[50%] translate-y-[-50%]">
              $
            </span>
            <input
              type="number"
              placeholder="Purchase Price"
              className="text-grey1 leading-[19px] w-full px-[16px] py-[14.5px] pl-[30px] rounded-[8px] bg-[#EFF2F5]
                   outline-none outline-offset-0 focus:outline-[#0052FE] focus:bg-white focus:outline-[1px]
                   "
              onChange={handlePurchasePriceChange}
            />
          </div>
        </div>

{/* Sale Price Crypto Input */}
        <div className="flex flex-col gap-[6px] flex-1 lg-2:max-w-[335px]">
          <p className="text-grey1 text-[15px] leading-[24px]">
            Enter sale price of Crypto
          </p>
          <div className="relative">
            <span className="absolute left-[16px] top-[50%] translate-y-[-50%]">
              $
            </span>
            <input
              type="number"
              placeholder="Sale Price"
              className="text-grey1 leading-[19px] w-full px-[16px] py-[14.5px] pl-[30px] rounded-[8px] bg-[#EFF2F5]
                   outline-none outline-offset-0 focus:outline-[#0052FE] focus:bg-white focus:outline-[1px]
                   "
              onChange = {handleSalePriceChange}
            />
          </div>
        </div>
      </div>
    );
}

export default PurchaseAndSales;