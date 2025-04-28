import { useNavigate } from "react-router";
import ScreenLogo from "../../assets/PublicDashboardLogos/ScreenLogo.svg";

function PublicNavbar() {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center p-[60px] pt-0 ">
        <div className="w-[100%] border-white border-3">
          <div className="flex-col w-full">
            <div className="flex items-center justify-center">
              <div className="flex max-xl:flex-col-reverse items-center max-w-[800px] justify-center gap-30">
                <img
                  src={ScreenLogo}
                  alt=""
                  className="w-[537px] h-[537px]"
                />
                <div className="flex flex-col gap-[30px] font-poppin ">
                  <h1 className="font-bold text-[28px]">
                    Analytics Platform and Transaction Management Built-In
                  </h1>
                  <p className="font-normal text-[16px] text-[#000000]">
                    With lyTI, teams and brokers unlock game-changing business
                    intelligence, streamline transaction management, and provide
                    title and escrow professionals. fully branded client
                    portal—effortlessly. Just lyti and your CRM are all you need
                    to run your business smoothly and stay ahead of the
                    competition.
                  </p>
                  <div className="mt-[10px] ">
                    <div className="flex gap-[16px]">
                      <button
                        className=" bg-[#333333] text-[20px] font-semibold font-poppin text-white w-[246px] h-[54px] rounded-[10px]"
                        onClick={() => Navigate("/pricing")}
                      >
                        Pricing and Free Trial
                      </button>
                      <button className="bg-[#F3F3F3] w-[91px] h-[54px] text-[20px] font-semibold text-[#007FC4] font-poppin rounded-[10px]">
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicNavbar;
