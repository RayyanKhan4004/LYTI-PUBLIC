import PublicFooter from "src/pages/PublicDashboard/PublicFooter";
import HomeImage from "../../../../assets/PublicDashboardLogos/HomeImage.svg";
import PublicTestimonial from "src/pages/PublicDashboard/PublicTestimonial";
function ProductsFooter() {
  return (
    <div>
      <div className="w-full flex justify-center pl-[60px] pr-[60px] ">
        <div className="mt-[60px]">
      <PublicTestimonial onclick={true} />
      </div>
      </div>
      <div className="flex flex-col gap-[5px] items-center justify-center mb-[100px] mt-[20px] px-[80px]">
        <h1 className="font-poppin font-semibold text-4xl sm:text-[18px] max-xl:text-[18px] max-xl:text-nowrap max-xl:mb-[10px] text-[#000000]">
          Talk to a professional
        </h1>
        <p className="font-poppin px-[100px] sm:text-[10px] max-xl:text-[10px] text-justify font-normal text-[20px] text-[#000000]">
          You’re busy. The best way to get a feel for Sisu is to hop on a demo
          with one of our experienced account executives. They’ve worked with
          hundreds of teams to help them evaluate Sisu. You’ll walk away with a
          customized set of information that helps you evaluate exactly what to
          do next. It might be using our platform, it might be a free trial to
          test it out, or it might be moving in a different direction. Either
          way, you’ll get to that decision as quickly as possible so that you
          can keep moving.
        </p>
        <button className="pt-3 max-xl:text-[10px] mt-[20px] pb-3 pl-4 pr-4 bg-[#333333] rounded-[10px] text-xl font-poppin font-semibold text-[#F3F3F3]">
          Schedule Demo
        </button>
      </div>
      <div className="flex items-center justify-center">
          <img src={HomeImage} alt="" className="2xl:w-[1318px] 2xl:h-[670px] h-[450px]" />
        </div>
       <PublicFooter hideImage={true}/>
    </div>
  );
}

export default ProductsFooter;
