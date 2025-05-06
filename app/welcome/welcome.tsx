import PublicRealtor from "../../src/pages/PublicDashboard/PublicRealtor";
import PublicTestimonial from "../../src/pages/PublicDashboard/PublicTestimonial";
import PublicWhyChoseus from "../../src/pages/PublicDashboard/PublicWhyChoseus";
import BoxesImg from "../../src/assets/PublicDashboardLogos/BgBoxes.svg"
import "./Styles/Public.css";
import PublicDashboardNavbar from "src/pages/PublicDashboard/PublicDashboardNavbar";
import PublicNavbar from "src/pages/PublicDashboard/PublicNavbar";
import PublicFooter from "src/pages/PublicDashboard/PublicFooter";

function PublicDashBoard() {
  const card1 = [
    { num: 15.5, text: "Total Gross Commission" },
    { num: 15.5, text: "Total Gross Commission" },
    { num: 15.5, text: "Total Gross Commission" },
  ];
  const card2 = [
    { num: 15.5, text: "Total Gross Commission" },
    { num: 15.5, text: "Total Gross Commission" },
    { num: 15.5, text: "Total Gross Commission" },
  ];
  return (
    <div>
      <PublicDashboardNavbar/>
      <PublicNavbar/>
      <PublicTestimonial onclick={true} />

      <div className="relative m-[20px]">
        <div className="flex flex-col-justify-center items-center m-[83px]">
          <img src={BoxesImg} alt="Background boxes pattern" className="max-xl:hidden absolute translate-y-1/2 -top-[15%] left-0 w-full h-[85%] z-0" />
          <div className="flex justify-center w-full items-center gap-[50px] relative z-10">
            <div className="2xl:w-[1200px] ">
              <h3 className="font-poppin font-semibold  md:text-[40px] text-[32px]  md:mb-[60px] mb-[30px] flex flex-row self-start text-nowrap">
                Why Choose Us
              </h3>
              <div className="w-full flex flex-col max-2xl:gap-[30px] gap-[50px] max-2xl:w-fit">
                <div className="flex md:justify-start md:items-start items-center gap-[20px] w-full max-md:flex-wrap">
                  {card2.map((item, ind) => (
                    <PublicWhyChoseus 
                    key={ind}
                      ind={ind}
                      number={item.num}
                      text={item.text}
                    />
                  ))}
                </div>
                <div className="flex md:justify-end gap-[20px] md:items-end items-center w-full  max-md:flex-wrap">
                  {card1.map((item, ind) => (
                    <PublicWhyChoseus
                    key={ind}
                      ind={ind}
                      number={item.num}
                      text={item.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublicRealtor />
      <PublicFooter/>
    </div>
  );
}

export default PublicDashBoard;
