import ProfileList from "@/data/ProfileList.js";
import StarBlack from "../../../public/images/star-black.png";
import StarWhite from "../../../public/images/star-white.png";
import Image from "next/image";

interface PageProps {
  params: {
    id: number;
  };
}

export default function ProfileInfoPage({
  params: { id },
}: PageProps): JSX.Element {
  const data = ProfileList[id];

  return (
    <main>
      <div className="flex flex-col items-center bg-[#F86642] rounded-b-[40px] pt-[146px] pb-[33px]">
        <div className="bg-[#D9D9D9] rounded-full overflow-hidden">
          <Image
            alt="profile image"
            width={250}
            height={250}
            src={data.image}
          />{" "}
        </div>
        <h1 className="mt-2 text-[#1D1D1B] capitalize font-bold text-[44px]">
          {data.name}
        </h1>
        <p className="text-white uppercase font-bold">Age, {data.age}</p>
        <p className="font-bold text-white uppercase mt-1">{data.gender}</p>
        <div className="flex items-center gap-1 mt-6">
          {new Array(data.rating).fill(0).map((_, idx) => (
            <div key={idx} className="flex-none">
              <Image alt="rating" width={35} height={35} src={StarWhite} />
            </div>
          ))}
          {new Array(5 - data.rating).fill(0).map((_, idx) => (
            <div key={idx} className="flex-none">
              <Image alt="rating" width={35} height={35} src={StarBlack} />
            </div>
          ))}
        </div>
        <button className="mt-6 bg-white hover:bg-slate-100 rounded-lg text-[#F24E1E] text-center py-2.5 px-7">
          Let&apos;s Chat!
        </button>
      </div>

      <div className="mx-[200px] mb-[165px]">
        <p className="font-bold uppercase mt-[90px]">
          Skill set, {data.skillSet}
        </p>
        <p className="font-bold uppercase mt-2.5">
          {"["}Education, {data.education}
          {"]"}
        </p>
        <p className="uppercase">
          Case, {data.case.number} {data.case.title}
        </p>
        <div className="flex justify-between gap-[70px] mt-[70px]">
          <p className="leading-[24px]">
            <span className="text-[#F24E1E] uppercase font-bold">
              About Me,
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className="leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
