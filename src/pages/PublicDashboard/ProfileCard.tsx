import React from "react";
import Starsicon from "../../assets/PublicDashboardLogos/Starsicon.svg";
import Googleicon from "../../assets/PublicDashboardLogos/GoogleLogo.svg";

interface ProfileCardProps {
  date?: string;
  name?: string;
  description?: string;
  image?: any;
  stars: number;
  isShadow?: boolean;
  w?: string;
  h?: string;
  extraComponent ?: React.ReactNode;
}
function ProfileCard({
  date,
  name,
  description,
  image,
  stars,
  isShadow,
  w,
  extraComponent,
  h
}: ProfileCardProps) {
  return (
    <div className="relative">
{extraComponent && extraComponent}
   
      <div
        className={` backdrop-blur-[42px] overflow-hidden z-10  flex flex-col justify-center md:items-center gap-[20px] rounded-[16px] relative border border-gray-300 ${
          w ? w : " w-[536px] max-md:max-w-[350px] max-md:p-[20px]"
        }
         ${
          h ? h : "h-[343px] max-md:h-[252px]"
        }
        `}
      >
      
        <div className="-skew-y-[20deg] h-[90px] max-md:h-[65px] w-[100px] max-md:w-[70px] bg-gradient-to-b form-[#33333399] to-[#2D3F5033] rounded-lg p-4 absolute -top-2  left-0 -z-10"></div>
        <span className=" absolute top-4  text-[20px] max-md:text-lg left-8">{date}</span>
        <div className="flex pt-[55px]">
          <div className="w-full flex justify-center items-center flex-col gap-6">
            <div className="w-full flex justify-center items-center flex-col gap-3">
              <span className="text-[24px] max-md:text-xl">{name}</span>
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full max-md:w-[60px] max-md:h-[60px]"
                />
              ) : (
                <div className="w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px] flex rounded-full bg-gray-300 text-5xl max-md:text-3xl justify-center items-center text-center font-bold">
                  <span>{name?.slice(0, 1)}</span>
                </div>
              )}
              <div className="w-[460px] max-md:w-[350px] text-[16px] max-md:text-sm max-md:px-[20px]">{description}</div>
            </div>
            <div className="flex justify-between items-center w-full ">
              <div className="flex gap-2.5">
                {Array(Math.floor(stars))
                  .fill(0)
                  .map((curr, i) => (
                    <img src={Starsicon} alt="" className="max-md:w-[24px]"/>
                  ))}
              </div>
              <div className="text-[16px] flex items-center gap-1 max-md:text-[12px]">
                Posted on
                <img src={Googleicon} alt="" className="max-md:w-[24px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

// // <ProfileCard stars={4} date="April 1, 2023" name="Steve Herron" description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"/>
