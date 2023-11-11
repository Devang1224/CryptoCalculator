import Image from "next/image";
import Frame from "@/assets/Frame.svg"
import ArrowRight from "@/assets/Arrow - Right.svg"

const RightAdv = () => {
    return (
           <div className=" pt-[40px] pb-[40px] px-[16px] bg-[#EDF2FF]
                           sm-2:pt-[68px] sm-2:pb-[62px]
                           lg:p-[0] lg:pt-[28px]
              ">
              <div className="rounded-[16px] bg-[#0052FE] px-[10px] pb-[33px] pt-[24px] flex flex-col items-center lg:hidden">
                  <Image
                   src={Frame}
                   alt="Vector Image"
                   width={149}
                   height={139}
                   className="w-[100px] sm-2:w-[149px]"
                  />
                  <p className="text-white text-[18px] font-bold leading-normal text-center
                      sm-2:text-[24px] sm-2:font-bold sm-2:leading-[48px]
                  ">
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

              <div className="hidden py-[55px] px-[16px] rounded-[8px] bg-[#0052FE] lg:flex">

                <div className="flex flex-col gap-[35px]">
                  <div className="w-full flex flex-col gap-[14px]">
                      <p className="px-[63px] text-[24px] font-bold text-white text-center leading-[40px]">Get Started with KoinX for FREE</p>
                      <p className="px-[33.5px] text-center text-[14px] font-medium text-[#F2F2F2] leading-[24px]">
                         With our range of features that you can equip for free,
                         KoinX allows you to be more educated and aware of your tax reports.
                      </p>
                  </div>

                  <div className="w-full flex justify-center">
                  <Image
                   src={Frame}
                   alt="Vector Image"
                   width={178.6}
                   height={166}
                   className="w-[100px] sm-2:w-[149px]"
                  />
                  </div>

                  <div className="w-full flex justify-center">
                   <button className="py-[8px] px-[24px] rounded-[8px] bg-white mt-[21px]">
                    <div className="flex items-center gap-[9px]">
                        <p className="text-grey1 text-[16px] font-semibold leading-[28px]">
                        Get Started for FREE

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

              </div>
           </div>
    );
}

export default RightAdv;