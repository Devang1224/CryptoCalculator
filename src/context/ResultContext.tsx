import {createContext,ReactNode, useContext, useState,Dispatch, SetStateAction, useEffect, useCallback } from "react";

interface Result {
    purchasePrice:number,
    salePrice:number,
    expenses:number,
    investmentType:string,
    income: string,
    taxRate: string,
    capitalGain:number,
    longTermGain:number,
    netCapitalGain:number,
    taxToBePaid:number,
  }
  
  interface ResultContextType {
    result: Result;
    setResult: Dispatch<SetStateAction<Result>>;
  }
  
  export const resultContext = createContext<ResultContextType | undefined>(undefined);


const ResultContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {

const[result,setResult] = useState<Result>({
    purchasePrice:0,
    salePrice:0,
    expenses:0,
    investmentType:"short",
    income: "",
    taxRate: "0%",
    capitalGain:0,
    longTermGain:0,
    netCapitalGain:0,
    taxToBePaid:0,
})


const calculateCapitalGain = useCallback(() => {

  const rawCapitalGain = result.salePrice - result.purchasePrice - result.expenses;
  const capitalGain = parseFloat(rawCapitalGain.toFixed(2));
  let discountOnLongTerm = 0;

  if (result.investmentType === "long" && capitalGain >= 0) {
    discountOnLongTerm = parseFloat((0.5 * capitalGain).toFixed(2));
  }

  const netCapitalGain = result.investmentType === "long"
  ? parseFloat((capitalGain - discountOnLongTerm).toFixed(2))
  : capitalGain;

  setResult((prev) => ({ ...prev, 
                       capitalGain,
                       longTermGain:discountOnLongTerm,
                       netCapitalGain
                      }));

}, [result.salePrice, result.purchasePrice, result.expenses,result.investmentType]);

useEffect(() => {
  calculateCapitalGain();
}, [calculateCapitalGain]);


const changeTaxRate = useCallback(() => {
    const IncomeToTaxRate = {
      "0-18200": "0%",
      "18201-45000": "Nil + 19% of the excess over $18,200",
      "45001-120000": "$5,092 + 32.5% of the excess over $45,000",
      "120001-180000": "$29,467 + 37% of the excess over $120,000",
      "180001+": "$51,667 + 45% of the excess over $180,000"
    };

    const IncomeToTax = {
      "0-18200": 0,
      "18201-45000": 19,
      "45001-120000": 32.5,
      "120001-180000": 37,
      "180001+": 45,
    }

  const taxToBePaid = IncomeToTax[result.income as keyof typeof IncomeToTax]/100 * result.netCapitalGain;
 const taxRate = IncomeToTaxRate[result.income as keyof typeof IncomeToTaxRate];

taxRate && setResult((prev)=>({ ...prev, taxRate,taxToBePaid}))

  }, [result.income]);
  

  useEffect(() => {
    changeTaxRate();
  }, [changeTaxRate]);

console.log(result);



    return (
        <resultContext.Provider value={{result,setResult}}>
            {children}
        </resultContext.Provider>
    );
}

export const useResultContext = ()=>{
    return useContext(resultContext)!;
}

export default ResultContextProvider;