import Image from "next/image";
import kribo from "@/public/images/kribo1.png";
import bajuOren from "@/public/images/baju-oren-1.png";
import bertiga from "@/public/images/tiga-orang.png";
import secondChance from "@/public/images/second-chance.png";
import email from "@/public/images/email.png";
import instagram from "@/public/images/instagram.png";
import linkedin from "@/public/images/linkedin.png";

export default function SignupPage(): JSX.Element {
  return (
    <div className="pt-[90px] bg-[#F6F6F6]">
      <div className="bg-[#F6F6F6] h-[886px] items-center flex flex-col rounded-b-[44px] relative overflow-hidden z-40">
        <h1 className="font-bold text-[40px] text-center mt-[131.5px] mb-[37px]">
          SignUp
        </h1>

        <div className="bg-[#FF734F] h-[320px] w-[23.17232vw] flex justify-center rounded-[15px]">
          <form className="mt-[42px] items-center">
            <label
              htmlFor="email"
              className="text-[16px] font-normal text-[#FFFFFF] ml-[0.93342vw]"
            >
              Email
            </label>
            <br></br>
            <input
              type="email"
              name="email"
              className="mt-[10.74px] border-[3px] rounded-[49px] w-[18vw] mb-[46.99px]"
              id="email"
            ></input>
            <br></br>
            <label
              htmlFor="password"
              className="text-[16px] font-normal text-[#FFFFFF] ml-[0.93342vw]"
            >
              Password
            </label>
            <br></br>
            <input
              type="password"
              name="password"
              className="mt-[10.74px] border-[3px] rounded-[49px] w-[18vw]"
              id="password"
            ></input>
          </form>
        </div>
        <div className="absolute mt-[585px] ml-[0px] left-[12.141vw]">
          <Image width="303.8" height="335.19" alt="" src={bajuOren} />
        </div>
        <div className="absolute mt-[495px] ml-[0px] left-0">
          <Image width="253" height="423.71" alt="" src={kribo} />
        </div>
      </div>

      <div className="pb-[20.94px] bg-[#292526] items-center flex flex-col mt-[-74px] -z-10">
        <h1 className="text-[38px] font-normal text-[#FFFFFF] mt-[214px]">
          Exicited To See You With Us!
        </h1>
        <div className="mt-[73px]">
          <Image width="601.06" height="437.48" alt="" src={bertiga} />
        </div>
      </div>

      <div className="bg-[#1D1D1D] flex flex-row pb-[170.5px]">
        <div className="mt-[29px] ml-[11.87989vw] flex flex-col">
          <Image width="472" height="222" alt="" src={secondChance} />
          <div className="flex flex-row">
            <div className="ml-[1.19125vw] mr-[1.13577vw]">
              <Image width="25" height="25" alt="" src={email} />
            </div>
            <h3 className="text-[14px] text-[#FFFFFF]">
              SecondChance@gmail.com
            </h3>
            <div className="ml-[1.896866841vw] mr-[0.52088vw] font-normal">
              <Image width="25" height="25" alt="" src={instagram} />
            </div>
            <h3 className="text-[14px] text-[#FFFFFF] font-normal">
              @SecondChance
            </h3>
            <div className="ml-[2.647519582vw] mr-[0.52088vw] font-normal">
              <Image width="25" height="25" alt="" src={linkedin} />
            </div>
            <h3 className="text-[14px] text-[#FFFFFF] font-normal">
              The Second Chance
            </h3>
          </div>
        </div>
        <div className="flex ml-[27.93342037vw] mt-[142.5px] flex-col">
          <h3 className="text-[15px] font-bold text-[#FFFFFF] mb-[21px]">
            HOW IT WORKS
          </h3>
          <h3 className="text-[15px] font-bold text-[#FFFFFF] mb-[21px] text-end">
            ABOUT
          </h3>
          <h3 className="text-[15px] font-bold text-[#FFFFFF] mb-[21px] text-end">
            OUR WORK
          </h3>
          <h3 className="text-[15px] font-bold text-[#FFFFFF] mb-[21px] text-end">
            BLOG
          </h3>
          <h3 className="text-[15px] font-bold text-[#FFFFFF] text-end">
            CONTACT US
          </h3>
        </div>
      </div>
    </div>
  );
}
