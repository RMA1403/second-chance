import Image from "next/image";
import img from "../../public/images/ceklis.png";
import orang from "../../public/images/orang-orang.png";
import beneficial from "../../public/images/beneficial.png";
import cooperate from "../../public/images/cooperate.png";
import depete from "../../public/images/depete.png";
import kribo from "../../public/images/kribo.png";
import bajuOren from "../../public/images/baju-oren.png";
import kerudung from "../../public/images/kerudung.png";

export default function ProfilesPage(): JSX.Element {
  return (
    <div>
      <div className="bg-[#E0EAF3] h-[813px] items-center flex flex-col ">
        <h1 className="text-[96px] font-bold text-[#1D1D1B]">Second Chance</h1>
        <div className="items-center mt-[62px] flex flex-row">
          <Image width="27" alt="" height="26" src={img} />
          <h2 className="text-[17px] font-bold w-[14.9269vw] ml-[0.52vw]">
            Quality Service
          </h2>
          <Image width="27" alt="" height="26" src={img} />
          <h2 className="text-[17px] font-bold w-[18vw] ml-[0.52vw]">
            Weekly turnaround times
          </h2>
          <Image width="27" alt="" height="26" src={img} />
          <h2 className="text-[17px] font-bold w-[190px] ml-[0.52vw]">
            One flat monthly rate
          </h2>
        </div>
        <div className="bg-gradient-to-r from-[#F86642] to-[#F86642] h-[46px] items-center flex justify-center w-[18vw] rounded-[15px] mt-[25px] z-10">
          <h2 className="text-[#FFFFFF] font-bold text-[17px]">
            START YOUR RISK FREE TRIAL
          </h2>
        </div>
        <div className="mt-[-10px] -z-5">
          <Image width="770" alt="" height="433.49" src={orang} />
        </div>
      </div>

      <div className="bg-[#292526] h-[354px] rounded-t-[40px] mt-[-34px]"></div>

      <div className="bg-[#F6F6F6] pb-[43px] rounded-t-[40px] mt-[-39px] items-center flex flex-col">
        <h2 className="mt-[225px] font-bold text-[40px] w-[56vw] text-center">
          A Diverse Team Of <span className="text-[#FF734F]">Passionate</span>{" "}
          Workers Who Are Here To Help You{" "}
          <span className="text-[#FF734F]">With Your Needs</span>
        </h2>
        <h3 className="text-[16px] font-medium text-center mt-[23px] w-[49vw] mb-[23px]">
          From projects to individual workers, Second Chance provides you with
          ease of access to quality and affordable workers on one single
          platform.
        </h3>

        <div className="mb-[199px]">
          <div className="items-center flex flex-row">
            <div className="items-center flex flex-col mr-[1.3vw]">
              <Image width="130" alt="" height="130" src={beneficial} />
              <h3 className="mt-[23px] font-bold text-[19px] text-center mb-[35px]">
                Beneficial
              </h3>
              <p className="text-[16px] font-normal">
                A more affordable source of Human Resources
              </p>
            </div>

            <div className="items-center flex flex-col mt-[15px] mr-[1.1vw]">
              <Image width="130" alt="" height="130" src={cooperate} />
              <h3 className="mt-[23px] font-bold text-[19px] text-center mb-[24px]">
                Cooperate with Compassion
              </h3>
              <p className="text-[16px] font-normal w-[25vw] text-center">
                Trained for a better future with compassion developed
              </p>
            </div>

            <div className="items-center flex flex-col mt-[-12px]">
              <Image width="130" alt="" height="130" src={depete} />
              <h3 className="mt-[23px] font-bold text-[19px] text-center mb-[24px]">
                Depete Crime
              </h3>
              <p className="text-[16px] font-normal text-center">
                Have a hand in future of human resources
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-[38px] text-center mb-[23px]">
          How <span className="text-[#FF734F]">Signing Up</span> With The Second
          Chance <span className="text-[#FF734F]">Works</span>!?
        </h2>

        <p className="text-[15px] font-normal text-center w-[57vw]">
          Take a minute to imagine how you’d feel watching your user count grow,
          and retention rates stay consistently high. When you prioritize
          effective UX, better retention and growth are natural consequences.
          Backed by countless hours of research and testing, TDP blends UX, UI,
          and Product design into a deliciously smooth process that fuels
          productivity and success.
        </p>

        <div className="mt-[69px]">
          <div className="items-center flex flex-row">
            <div className="items-center flex flex-col mr-[6.855vw]">
              <div className="w-[59px] h-[59px] bg-gradient-to-b from-[#FF734F] to-[#E83C11] rounded-[100%] flex items-center justify-center mb-[37px]">
                <h2 className="font-bold text-[34px] text-[#F6F6F6]">01</h2>
              </div>
              <h2 className="text-[#F86642] text-[20px] font-semibold text-center w-[12vw] mb-[16px]">
                Sign Up For One Of Our Services
              </h2>
              <Image width="96.79" alt="" height="162.11" src={kribo} />
              <p className="text-[14px] font-normal mt-[10px] text-center w-[17vw]">
                Sign up for one of our programs which offer a variety of options
                to fit your unique needs.
              </p>
            </div>

            <div className="items-center flex flex-col mr-[5.68vw]">
              <div className="w-[59px] h-[59px] bg-gradient-to-b from-[#FF734F] to-[#E83C11] rounded-[100%] flex items-center justify-center mb-[37px] mt-[23px]">
                <h2 className="font-bold text-[34px] text-[#F6F6F6]">02</h2>
              </div>
              <h2 className="text-[#F86642] text-[20px] font-semibold text-center w-[12vw] mb-[23px]">
                Make Your Perfect Match
              </h2>
              <Image width="138.37" alt="" height="152.62" src={bajuOren} />
              <p className="text-[14px] font-normal mt-[7px] text-center w-[17vw]">
                We match you with the best team or worker best suit your needs.
                take your time, you might come accross your partner.
              </p>
            </div>

            <div className="items-center flex flex-col">
              <div className="w-[59px] h-[59px] bg-gradient-to-b from-[#FF734F] to-[#E83C11] rounded-[100%] flex items-center justify-center mb-[37px] mt-[5px]">
                <h2 className="font-bold text-[34px] text-[#F6F6F6]">03</h2>
              </div>
              <h2 className="text-[#F86642] text-[20px] font-semibold text-center w-[14vw] mb-[23px]">
                The first sprint begins (hold on tight)
              </h2>
              <Image width="108.94" alt="" height="156" src={kerudung} />
              <p className="text-[14px] font-normal mt-[38px] text-center w-[17vw]">
                you now can start working together and create progress that we
                still supervise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
