import Profile from "@/components/Profile";
import ProfileList from "@/data/ProfileList.js";

export default function TestPage(): JSX.Element {
  return (
    <div>
      {ProfileList.map((item, idx) => (
        <Profile key={idx} idx={idx} {...item} />
      ))}
    </div>
  );
}
