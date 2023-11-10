import Select from 'react-select';
import Image from "next/image";
import EmojiFLagAus from "@/assets/emojiFlag.svg"
import ArrowVector from "@/assets/ArrowVector.svg"




const FinancialAndCountry = () => {


  const countryOptions = [
    {
      value: 'option1',
      label: <div className="flex gap-[6px]">
        <Image src={EmojiFLagAus} alt="flag" width={20} height={20}/>
          <p className="font-medium text-[18px] leading-[19px] ">Australia</p>  
        </div>,
    },
  ];

  const yearOptions = [
    {
      value: 'option1',
      label: <p className="text-grey1">FY 2022-23</p>
    },
  ];

  const customStyles = {
    control: (provided:any) => ({
      ...provided,
      borderRadius: '8px',
      background: '#EFF2F5',
      display:"flex",
      justifyContent:"space-between"
    }),
  };
  
  const DropdownIndicator= (props:any) => {
    return (
      <Image src={ArrowVector} alt="arrow" width={9} height={5.8}/>
    );
  };

  const customComponents = {
    DropdownIndicator,
  };


    return (
        <div className="mt-[30px] flex gap-[20px]">

{/* Financial Year Input */}
        <div className="flex flex-col">
          <label
            htmlFor="Finyear"
            className="text-grey1 text-[14px] leading-[24px]"
          >
            Financial Year
          </label>
          <Select
            styles={customStyles}
            classNames={{ control: () => "px-[16px] py-[9px] w-[164px]" }}
            options={yearOptions}
            defaultValue={yearOptions[0]}
            unstyled
            components={customComponents}
            inputId="Finyear"
          />
        </div>

 {/* Country Input */}
        <div className="flex flex-col">
          <label
            htmlFor="country"
            className="text-grey1 text-[14px] leading-[24px]"
          >
            Country
          </label>
          <Select
            styles={customStyles}
            classNames={{ control: () => "px-[16px] py-[9px] w-[164px]" }}
            options={countryOptions}
            defaultValue={countryOptions[0]}
            unstyled
            components={customComponents}
            inputId="country"
          />
        </div>
      </div>

    );
}

export default FinancialAndCountry;