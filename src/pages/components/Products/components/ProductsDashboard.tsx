import videoimage from "../../../../assets/ProductsLogos/videoimage.svg";

function ProductsDashboard() {
  return (
    <>
    <div className="flex items-center justify-center w-full ">
      <div className="flex max-xl:flex-col md:pl-[60px] md:pr-[60px] gap-33.5 pt-[40px]">
        <div className="flex flex-col w-[600px] max-xl:w-[300px]">
          <h1 className="font-poppin font-semibold max-xl:text-[16px] text-[32px]">Sales Team</h1>
          <p  className="font-poppin text-justify font-normal max-xl:text-[10px] text-[20px] text-[#2D3F50]">
            n lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi,
            a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac
            nisi
            <br />
          </p>
          <p className="font-poppin font-normal text-justify text-[20px] max-xl:text-[10px] text-[#2D3F50] mt-[40px]">
            In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi,
            a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac
            nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere
            fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper.
            Suspendisse vel est facilisis, tincidunt diam vitae, ultrices leo.
            Aenean rhoncus quam at diam blandit, sit amet consequat augue
            varius.
          </p>
          <div className="pt-[24px] flex gap-4">
            <button className="bg-[#333333] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#F3F3F3] font-semibold font-poppin text-[20px] max-xl:text-[10px] rounded-2xl">
              Pricing and Free Trail
            </button>
            <button className="bg-[#E5E5E5] pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#333333] font-semibold font-poppin text-[20px] max-xl:text-[10px] rounded-2xl">
              Schedule DEMO
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={videoimage} alt="" className="max-xl:w-[200px]" />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col gap-5 pt-[80px]">
        <h1 className="font-poppin font-semibold text-4xl max-xl:text-[18px]">
          Browse our big set of features
        </h1>
        <p className="flex text-justify items-center justify-center pl-[80px] pr-[80px] font-poppin font-normal text-[20px] max-xl:text-[10px] text-[#2D3F50]">
          
            Real estate analytics software combined with leaderboards, real-time
            agent coaching reports, and a flexible sales contest system ensures
            that team leaders, coaches and brokers always make data driven
            decisions and agents pace towards commission goals.
          
        </p>
      </div>
    </>
  );
}

export default ProductsDashboard;
