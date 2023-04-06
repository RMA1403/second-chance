import { StaticImageData } from "next/image";

interface ComponentProps {
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
  image: string;
}

export default function Profile({
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
  return <h1>PROFILE</h1>;
}
