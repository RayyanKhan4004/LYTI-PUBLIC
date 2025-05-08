import { useNavigate } from "react-router";
import DotsGrid from "./DotsGrid"
import ProfileCard from "./ProfileCard";

interface PublicTestimonialProps{
  onclick: any;
}

function PublicTestimonial({ onclick }: PublicTestimonialProps) {
    const navigate = useNavigate();

    const handleClick = () => {
      if (onclick != false) {
        navigate("/company");
      }
    };
  return (
    <div className="w-full flex items-center justify-center mt-[80px]">
      <div className="md:w-fit justify-between flex max-2xl:flex-col max-2xl:justify-center items-center gap-8 xl:gap-12">
        <div className="max-w-[50%] flex flex-col gap-[20px] font-poppin relative md:self-start ">
          <div className="absolute -left-10 -top-13">
           <DotsGrid/>
          </div>
          <div className="w-fit z-[11]">
           <h1 onClick={handleClick} className="hover:cursor-pointer font-bold relative text-3xl">Testimonials </h1> 
           </div>
          <p className="font-normal text-base md:w-[41ch] text-[#000000] z-[11]">
            Hear from real clients about the success they're having streamlining
            and automating their business with Sisu accountability, business
            analytics and transaction management software.
          </p>
          <div className="mt-[5px] z-[11]">
            <button className="bg-[#333333] font-poppin text-white font-semibold pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[10px]">
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="relative flex flex-col font-poppin md:ml-[30px] md:mr-[30px] md:min-h-[450px] max-md:w-auto">
          <div className="relative  mr-[10%] ">
            <ProfileCard
              stars={4}
              date="April 1, 2023"
              name="Steve Herron"
              description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"
              extraComponent={
                <>
                  <div className="w-[336px] h-[206px] max-2xl:hidden bg-[#33333331] absolute -top-[14%] -right-[25%] p-8  flex flex-col gap-[13px] rounded-[8px]">
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                  </div>
                  <div className="w-[336px] h-[206px] bg-[#33333331] max-2xl:hidden absolute bottom-0 -right-[30%] p-8  flex flex-col justify-end gap-[13px] rounded-[8px]">
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] w-[60%] bg-[#E5E5E5] h-3"></div>
                    <div className=" rounded-[8px] bg-[#E5E5E5] h-3"></div>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicTestimonial;
