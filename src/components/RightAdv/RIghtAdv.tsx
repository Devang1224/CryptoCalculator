import Image from "next/image";
import Frame from "@/assets/Frame.svg"
import ArrowRight from "@/assets/Arrow - Right.svg"

const RightAdv = () => {
    return (
           <div className=" pt-[68px] pb-[62px] px-[16px] bg-[#EDF2FF]">
              <div className="rounded-[16px] bg-[#0052FE] px-[10px] pb-[33px] pt-[24px] flex flex-col items-center">
                  <Image
                   src={Frame}
                   alt="Vector Image"
                   width={149}
                   height={139}
                  />
                  <p className="text-white text-[24px] font-bold leading-[48px]">
                    Track your portfolio & taxes
                  </p>
                  <p className="text-[#F2F2F2] px-[17px] text-center text-[14px] mt-[12px] font-medium no-ligatures">
                     With our range of features that you can equip for free,
                     KoinX allows you to be more educated and aware of your tax reports.
                  </p>

                  <button className="p-[8px] rounded-[8px] bg-white mt-[21px]">
                    <div className="flex items-center gap-[6px] px-[15px]">
                        <p className="text-grey1 text-[14px] font-semibold leading-[28px]">
                          Sign up at KoinX for free
                        </p>
                        <Image
                          src={ArrowRight}
                          alt="right arrow"
                          width={12}
                          height={12}
                        />
                    </div>
                  </button>
              </div>
           </div>
    );
}

export default RightAdv;