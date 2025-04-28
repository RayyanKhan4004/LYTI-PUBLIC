import PublicHeadings from "../../src/pages/PublicDashboard/PublicHeadings";
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
      <PublicHeadings />
      <PublicTestimonial onclick={true} />

      <div className="relative m-[20px]">
        <div className="flex flex-col-justify-center items-center m-[83px]">
          <img src={BoxesImg} alt="Background boxes pattern" className="absolute translate-y-1/2 -top-[15%] left-0 w-full h-[85%] z-0" />
          <div className="flex justify-center w-full items-center gap-[50px] relative z-10">
            <div className="w-[1200px] ">
              <h3 className="font-poppin font-semibold  text-[40px] mb-[60px] flex flex-row self-start">
                Why Choose Us
              </h3>
              <div className="w-full flex flex-col gap-[50px]">
                <div className="flex justify-start items-start gap-[20px] w-full">
                  {card2.map((item, ind) => (
                    <PublicWhyChoseus
                      ind={ind}
                      number={item.num}
                      text={item.text}
                    />
                  ))}
                </div>
                <div className="flex justify-end gap-[20px] items-end w-full">
                  {card1.map((item, ind) => (
                    <PublicWhyChoseus
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
