
import Bgimg from "../../assets/PublicDashboardLogos/AboutUsBgimg.svg";
import PublicDashboardNavbar from "./PublicDashboardNavbar";
import Footerimg from "../../assets/PublicDashboardLogos/ConmpanyFooterimg.svg";
import PublicFooter from "./PublicFooter";
function CompanyAboutUs() {
  return (
    <>
      <PublicDashboardNavbar />
    <div className=" h-full relative 2xl:h-[100vh]">
      <div className="flex justify-between  grow p-[80px] pt-4">
        {/* Left Side: Image and Heading */}
        <div className=" w-[40%]">
          <div className=" text-nowrap">
            <div className="z-10">
              <h1 className="text-[#000000] font-poppin font-semibold  text-6xl">
                About Us
              </h1>
            </div>
            <div className="absolute left-0 top-0 ">
              <img src={Bgimg} alt="" className=" h-[349px]" />
            </div>
          </div>
        </div>

        {/* Right Side: Paragraph */}
   
          <p className="font-poppin font-normal text-justify text-[16px] w-[831px]">
            Sisu is a Finnish concept that means bravery, determination, grit,
            courage, and resilience, and was founded to elevate the real estate
            industry.Years ago when the founder of Sisu entered the real estate
            industry as a new agent, he noticed the leaders in the field; the
            ones who seemed to magically have constant success when others did
            not, were the 10% who achieved 90% of the results. Motivated by
            their success, he decided to find out what made them successful.He
            found that the majority used coaches to help them stay accountable,
            so he chose to do the same. Every Tuesday for 30 minutes he reported
            his numbers to an experienced coach who helped him analyze his
            activities, progress, and goals. This process held him accountable
            and spurred a ma ssive growth in his sales. This idea of goal
            setting and accountability planted a seed which eventually grew into
            the Sisu platform.Sisu was developed as a tool to simplify the
            tracking of sales metrics, provide critical analysis of those
            numbers, and gamify the entire real estate sales experience. We have
            evolved to provide a central hub of real estate transactions -
            consolidating disparate systems into one common view, a full
            transaction and back office management solution from open to close,
            providing a powerful collaboration tool for realtors their mortgage
            and title partners and importantly a client portal for
            consumers.While we love motivating and managing by data, our passion
            lies in motivating sales teams by encouraging healthy competition
            and accountability. We want all of our customers to reach their
            goals by understanding exactly what is needed in order to do so.
            Every sales environment could use more grit, determination,
            perseverance, and courage.
          </p>
    
      </div>
      <img src={Footerimg} alt="" className="absolute bottom-0 w-full" />
    </div>
    <PublicFooter hideImage={true}/>
    </>
  );
}

export default CompanyAboutUs;

