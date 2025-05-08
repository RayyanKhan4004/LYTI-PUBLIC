import LandingLogo1 from "../../assets/LandingPageLogos/LandingPageLogo1.svg";
import LandingLogo2 from "../../assets/LandingPageLogos/LandingPageLogo2.svg";
import LandingLogo3 from "../../assets/LandingPageLogos/LandingPageLogo3.svg";
import LandingLogo4 from "../../assets/LandingPageLogos/LandingPageLogo4.svg";
import LandingLogo5 from "../../assets/LandingPageLogos/LandingPageLogo5.svg";
import LandingLogo6 from "../../assets/LandingPageLogos/LandingPageLogo6.svg";
import LandingLogo7 from "../../assets/LandingPageLogos/LandingPageLogo7.svg";
function PublicHeadings() {
  return (
      <div className="flex justify-between border-t-2 p-4 border-gray-200 border-b-2">
        <img src={LandingLogo1} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo2} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo3} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo4} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo5} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo6} alt="" className="w-[109px] h-[62px]" />
        <img src={LandingLogo7} alt="" className="w-[109px] h-[62px]" />
      </div> 
  );
}

export default PublicHeadings;
