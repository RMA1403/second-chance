import Image, { StaticImageData } from "next/image";
import StarYellow from "../public/images/star-yellow.png";
import StarWhite from "../public/images/star-white.png";
import clsx from "clsx";

interface ComponentProps {
  idx: number;
  name: string;
  age: number;
  gender: string;
  skillSet: string;
  education: string;
  case: {
    number: number;
    title: string;
  };
  description: string;
  rating: number;
  image: StaticImageData;
}

export default function Profile({
  idx,
  name,
  age,
  gender,
  skillSet,
  education,
  case: { number, title },
  description,
  rating,
  image,
}: ComponentProps): JSX.Element {
  const backgroundColor = [
    "bg-[#FF734F]",
    "bg-[#EB8B72]",
    "bg-[#CB8370]",
    "bg-[#967066]",
    "bg-[#7C655F]",
  ];

  return (
    <div
      className={clsx(
        backgroundColor[idx],
        "w-full rounded-[40px] -mt-[126px] first:mt-0 mb-10 flex pt-[77px] px-[72px] pb-[196px]"
      )}
    >
      <div className="bg-[#D9D9D9] rounded-full overflow-hidden mr-[55px] self-start flex-none">
        <Image alt="profile image" width={305} height={305} src={image} />
      </div>
      <div>
        <div className="flex">
          <h3 className="text-[#1D1D1B] capitalize font-bold text-[44px]">
            {name}
          </h3>
          <div className="ml-[52px] flex items-center gap-1">
            {new Array(rating).fill(0).map((_, idx) => (
              <div key={idx} className="flex-none">
                <Image alt="rating" width={35} height={35} src={StarYellow} />
              </div>
            ))}
            {new Array(5 - rating).fill(0).map((_, idx) => (
              <div key={idx} className="flex-none">
                <Image alt="rating" width={35} height={35} src={StarWhite} />
              </div>
            ))}
          </div>
        </div>

        <p className="font-bold uppercase text-white text-base">Age, {age}</p>
        <p className="font-bold uppercase text-white text-base mt-1">
          {gender}
        </p>
        <p className="font-bold uppercase text-white text-base mt-1">
          Skill set, {skillSet}
        </p>
        <p className="font-bold uppercase text-white text-base -mt-1.5">
          {"["}Education, {education}
          {"]"}
        </p>
        <p className="mt-4 text-base font-normal text-white uppercase">
          Case, {number} {title}
        </p>
        <p className="mt-1 text-base font-normal text-white uppercase">
          {description}
        </p>
      </div>
    </div>
  );
}
