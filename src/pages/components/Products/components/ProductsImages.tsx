import ProductImage1 from "../../../../assets/ProductsLogos/ProductsImage1.svg";
import ProductImage2 from "../../../../assets/ProductsLogos/ProductsImage2.svg";
import ProductImage3 from "../../../../assets/ProductsLogos/ProductsImage3.svg";
import ProductImage4 from "../../../../assets/ProductsLogos/ProductsImage4.svg";
import ProductImage5 from "../../../../assets/ProductsLogos/ProductsImage5.svg";
import ProductImage6 from "../../../../assets/ProductsLogos/ProductsImage6.svg";
function ProductsImages() {
  interface dataProps {
    img: string;
    h1: string;
    p: string;
  }
  const data: dataProps[] = [
    {
      img: ProductImage1,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
    {
      img: ProductImage2,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
    {
      img: ProductImage3,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
    {
      img: ProductImage4,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
    {
      img: ProductImage5,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
    {
      img: ProductImage6,
      h1: "Real Time Data Analytics From CRM Lead Data to Agent Commission",
      p: "In lacinia, erat vitae lobortis lacinia, lacus magna facilisis nisi, a pharetra turpis felis commodo nisi. Quisque sem magna, dapibus ac nisi at, tempor rutrum lectus. Nullam varius nulla arcu, posuere fringilla nulla semper vitae. Nunc pharetra iaculis ullamcorper. ",
    },
  ];

  return (
    <div className="flex justify-center w-full  items-center mt-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-6 ">
        {data.map((items, index) => (
          <div key={index} className="flex relative overflow-hidden w-[648px] max-xl:w-[254px] sm:w-[290px] lg:w-[324px] max-xl:h-[180px] sm:h-[200px] h-[421px] lg:h-[210px] rounded-2xl shadow  group">
            <img
              className="w-full h-full absolute inset-0 scale-150 lg:scale-120 sm:scale-120 max-xl:scale-120"
              src={items.img}       
              alt={items.h1}
            />
            <div className="p-10 flex h-[100%] flex-col bg-black/70 gap-[30px] absolute sm:translate-y-40 sm:gap-[10px] lg:translate-y-40 translate-y-95 duration-700 transition-all group-hover:translate-y-0">
              <h4 className="text-white text-[24px] md:text-[12px] max-xl:text-[12px] sm:text-[12px] font-semibold  mb-1">
                {items.h1}
              </h4>
              <hr className="text-[#808080] opacity-0 group-hover:opacity-100 duration-700 transition-all"/>
              <p className="text-[#FFFFFF] text-justify font-normal sm:font-extralight max-xl:font-extralight lg:font-extralight font-poppins text-[20px] sm:text-[10px] max-xl:text-[10px] lg:text-[10px] opacity-0 group-hover:opacity-100 duration-700 transition-all">{items.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsImages;
