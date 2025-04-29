import { useEffect, useState } from "react";
import ProductImage1 from "../../../../assets/ProductsLogos/ProductsImage1.svg";
import ProductImage2 from "../../../../assets/ProductsLogos/ProductsImage2.svg";
import ProductImage3 from "../../../../assets/ProductsLogos/ProductsImage3.svg";
import ProductImage4 from "../../../../assets/ProductsLogos/ProductsImage4.svg";
import ProductImage5 from "../../../../assets/ProductsLogos/ProductsImage5.svg";
import ProductImage6 from "../../../../assets/ProductsLogos/ProductsImage6.svg";
function ProductsImages() {
  const [animation , setAnimation] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(()=>{
  !isHovered && setAnimation(0)
   isHovered   && animation < 90 && setInterval(()=>{
    animation < 90 &&  setAnimation(pre => pre+=1)
    }, 50000)
    console.log(animation)
  },[isHovered])
  return (
    <div>
      <div className="grid max-lg:grid-cols-1 grid-cols-2 2xl:grid-cols-3 justify-items-center gap-4 pl-15 pr-15">
        <div className="relative  group w-fit overflow-hidden">
          <div className="w-fit bg-[url('../../../../assets/ProductsLogos/ProductsImage1.svg')]">
          <img src={ProductImage1} alt="" className="w-full" />

          <div 
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
          className={`absolute  transition-all duration-500 bg-black/45 bottom-6 left-5 w-[94%]  rounded-b-xl h-[${animation}px]  inset-x-0 text-white`}>
            <h2 className=" ">
              Your Heading Here
            </h2>
            <hr className="opacity-0 group-hover:opacity-70" />
            <p className="opacity-0 transform translate-y-8 mt-4 transistion-all dusration-500 group-hover:opacity-100 group-hover:translate-y-0">
              This is a paragraph that will be shown as part of the animation.
              It will slide in from the bottom as well.
            </p>
          </div>
          </div>

        </div>
        <img src={ProductImage2} alt="" className="w-fit" />
        <img src={ProductImage3} alt="" className="w-fit" />
        <img src={ProductImage4} alt="" className="w-fit" />
        <img src={ProductImage5} alt="" className="w-fit" />
        <img src={ProductImage6} alt="" className="w-fit" />
      </div>
    </div>
  );
}

export default ProductsImages;
