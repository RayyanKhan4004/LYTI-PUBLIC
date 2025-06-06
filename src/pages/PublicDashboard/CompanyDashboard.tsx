// components/TestimonialSlider.jsx
import React, { useRef } from "react";
import ProfileCard from "./ProfileCard";
import PublicFooter from "./PublicFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PublicDashboardNavbar from "./PublicDashboardNavbar";
import ProfileIcon from "../../assets/PublicDashboardLogos/TestimonialProfileimage.svg"

const testimonials = [
  {
    name: "Steve Herron",
    date: "April 1, 2023",
    content:
      "I am super visual and having a clear dashboard with all the team metrics visible...",
    image: ProfileIcon, 
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: ProfileIcon,
  },
];
const TestimonialSlider = () => {
  
  const scrollRef = useRef<HTMLDivElement>(null);

 function scroll (direction: string) {
    if (scrollRef.current) {
      scrollRef.current?.scrollBy({
        left: direction === "left" ? - 300 : 300,
        behavior: "smooth",

      });
    }
  };

  return (
    <>
      <PublicDashboardNavbar />
      <div className="flex flex-col justify-center items-center gap-5 font-poppin text-center mb-[30px] mt-[50px]">
            <h2 className="text-[32px] max-md:text-[16px] text-[#333333] font-medium ">Testimonials</h2>
            <h3 className="text-[36px] max-md:text-[18px] text-[#2D3F50] font-semibold">Don’t just take our word for it</h3>
            <h4 className="text-[24px] max-md:text-[16px] text-[#15120F] font-normal ">The results speak for themselves. See how Sisu has helped real clients take their businesses to the next level.</h4>
      </div>
      <div className="relative w-full z-0">
        {/* Slider Controls */}
        <button
          onClick={() => scroll("left")}
          className="absolute flex items-center justify-center left-2 top-1/2 -translate-y-1/2 z-[100] bg-[#E5E5E5] shadow p-2 w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] rounded-[10px]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 flex items-center justify-center top-1/2 -translate-y-1/2 z-[100] bg-[#000000] shadow p-2 w-[40px] max-md:w-[40px] h-[60px] max-md:h-[40px] rounded-[10px]"
        >
          <ChevronRight color="#FFFFFF" />
        </button>

        {/* Scrollable Cards Container */}
        <div className="w-full flex justify-center items-center ">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8 w-[90vw] scroll-container "
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-auto  flex justify-center items-center"
              >
                <ProfileCard
                key={Math.trunc(Math.random() * 1000) }
                  stars={5}
                  date={t.date}
                  description={t.content}
                  image={t.image}
                  name={t.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-[50px] ">
        {/* {" button"} */}
        <button className="bg-[#333333] flex  justify-center items-center rounded-[10px] max-md:w-[187px] w-[294px] max-md:h-[41px] h-[82px] font-poppin text-[#F3F3F3] text-[28px] max-md:text-[14px] font-semibold">
          Schedule Demo
        </button>
      </div>
      <div className="max-md:mt-[200px]">
      <PublicFooter hideImage={true} />
      </div>
    </>
  );
};

export default TestimonialSlider;
