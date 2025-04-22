import PublicFooter from "./PublicFooter"
import PublicHeadings from "./PublicHeadings"
import PublicNavbar from "./PublicNavbar"
import PublicRealtor from "./PublicRealtor"
import PublicTestimonial from "./PublicTestimonial"
import PublicWhyChoseus from "./PublicWhyChoseus"
import bgimg from "../../assets/PublicDashboardLogos/BgBoxes.svg"
import "../../../app/welcome/Styles/Public.css";
function PublicDashBoard() {
  const card1 = [   
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
  ]
  const card2 = [
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
  ]
  return (
    <div>
     <PublicNavbar/>
     <PublicHeadings />
      <PublicTestimonial onclick={false}/>

      <div className="relative m-[20px]">
        <div className="flex justify-center items-center">
        
     
      </div>
      <div className="flex flex-col-justify-center items-center m-[83px]">
      <img src={bgimg} alt="" className="absolute top-0 left-0 w-full h-full -z-10" />

     <div className="flex justify-center w-full items-center gap-[50px] ">
      <div className="w-[1200px] ">      <h3 className="font-poppin font-semibold  text-[40px] mb-[20px] flex flex-row self-start">Why Choose Us</h3>
        <div className="w-full flex flex-col gap-[50px]">
          <div className="flex justify-start items-start  w-full" >        {
        card2.map((item , ind)=>(
          <PublicWhyChoseus  ind={ind} number={item.num} text={item.text}/>
        ))
      }
</div>
          <div className="flex justify-end items-end w-full" >     {
        card1.map((item , ind)=>(
          <PublicWhyChoseus  ind={ind} number={item.num} text={item.text}/>
        ))
      }
</div>
        </div>
      </div>
     </div>
      </div>
    </div>
 
      <PublicRealtor/>
      
      <PublicFooter/>
    </div>
  )
}

export default PublicDashBoard
