import PhoneLogo from "../../assets/PhoneLogo/PhoneLogo.svg";
import PricingLytiLogo from "../../assets/PricingPageLogos/PricingLytiLogo.svg";
import ArrowDown from "../../assets/PublicDashboardLogos/ArrowDown.svg";
import { Link, useNavigate } from "react-router";
import { useEffect, useState, type ReactEventHandler } from "react";
import { CloudCog, Menu, X } from "lucide-react";

function PublicDashboardNavbar() {
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [DropDownType, setDropDownType] = useState("");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.screen.availWidth);

    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.screen.availWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function CloseDropDown(e: any) {
      isOpen || (e.key === "Escape" && setIsOpen(false));
      isOpen && setIsOpen(false);
    }
    function handleEscClick() {
      document.querySelector("body")?.addEventListener("click", CloseDropDown);
      document
        .querySelector("body")
        ?.addEventListener("keydown", CloseDropDown);
      return removeEventListener("click", CloseDropDown);
    }
    handleEscClick();
  }, [DropDownType]);

  // useEffect(() => {
  //   if (sidebarOpen) {
  //     document.body.style.overflow = 'hidden'; // Stop scrolling
  //   } else {
  //     document.body.style.overflow = 'auto'; // Allow scrolling again
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [sidebarOpen]);

  return (
    <div className="flex items-center hover:cursor-pointer flex-row-reverse xl:flex-row justify-between bg-white w-full p-4.5 font-poppin">
      <img
        src={PricingLytiLogo}
        alt="LytiLogo"
        className="w-[100px] h-[100px] font-medium text-base"
        onClick={() => Navigate("/")}
      />
      <button
        className="xl:hidden"
        onClick={() => setSidebarOpen((pre) => !pre)}
      >
        <Menu/>
      </button>
      {/* {sidebarOpen && ( <div
      
      className="bg-black/15  backdrop-blur-sm h-[200vh] w-[200vw] xl:hidden z-[49] fixed inset-0"></div>)} */}
      {sidebarOpen && (

        <div className="max-xl:fixed top-0 left-0 relative  max-xl:bg-white  z-50 max-xl:p-6  max-xl:w-[100vw] max-xl:h-[160vh]">
         
          <button className="top-6 right-6 absolute xl:hidden "
           onClick={() => setSidebarOpen((pre) => !pre)}
          ><X/></button>
          <div className=" max-xl:flex-col flex  max-xl:mt-12 items-center gap-10">
            {/* todo : implimet responsiveness using react clint */}
            <div className="relative flex items-center gap-1">
              <h3
                className="text-[14px] font-medium text-[#333333] hover:cursor-pointer font-poppin"
                onClick={() => Navigate("/pricing")}
              >
                Pricing and Free Trial
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <div className="relative">
                <h3
                  className="text-[14px] font-medium font-poppin text-[#333333] flex justify-center items-center gap-2"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setDropDownType("product");
                  }}
                >
                  Product
                  <img src={ArrowDown} alt="" className="w-5 h-5" />
                </h3>
                {isOpen && DropDownType === "product" && (
                  <div className="absolute w-fit text-nowrap h-[303px]  top-6 -left-[50%] bg-[#FFFFFF] shadow-lg rounded-lg p-4 z-10 flex flex-col gap-2">
                    <div className="flex flex-col gap-5 font-poppin font-medium text-[20px] py-[24px] text-[#333333]">
                      <h2>Agent Coaching & Data Analytics</h2>
                      <h2>Transaction Management & E-Signature</h2>
                      <h2>Back Office & Commission Management</h2>
                      <h2>Recruiting & Onboarding</h2>
                      <h2>Integrations</h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="relative flex items-center gap-1">
                <div
                  className="text-[14px] text-[#333333] font-medium font-poppin flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setDropDownType("company");
                  }}
                >
                  Company
                  <img src={ArrowDown} alt="" className="w-5 h-5" />
                </div>
                {isOpen && DropDownType === "company" && (
                  <div className="absolute top-6 left-0 bg-[#FFFFFF] w-fit text-nowrap h-[348px] font-poppin font-medium text-[20px] text-[#333333] gap-[15px] py-[24px] pl-[24px] shadow-lg rounded-lg p-4 z-10 flex flex-col">
                    <Link to="/company">Testimonials</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/news">News</Link>
                    <Link to="">Our Board of Directors</Link>
                    <Link to="">Upcoming Events</Link>
                    <Link to="">Careers</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h3
                className="text-[14px] text-[#333333] font-medium font-poppin"
                onClick={() => Navigate("/products")}
              >
                Resources
              </h3>
              <img src={ArrowDown} alt="" className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] text-[#333333] font-medium font-poppin">
              Demo
            </h3>
            <button className="w-[140px] h-[53px] text-[16px] font-poppin font-bold rounded-xl flex items-center gap-1 justify-center text-white bg-[#333333]">
              <img src={PhoneLogo} alt="" className="w-[24px] h-[24px]" />
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicDashboardNavbar;
