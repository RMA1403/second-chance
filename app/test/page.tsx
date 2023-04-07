import Profile from "@/components/Profile";
import ProfileList from "@/data/ProfileList.js";

export default function TestPage(): JSX.Element {
  return (
    <main className="relative">
      <div className="bg-[#292526] h-[170px] rounded-b-[40px]"></div>
      <div className="bg-[#FF734F] w-[40.79vw] mt-12 mb-20 mx-auto py-2 px-7 rounded-full border-[#29252670] border-[3px]">
        <p className="text-white upper font-bold text-base">
          What can we help you with?
        </p>
      </div>
      <ul>
        {ProfileList.map((item, idx) => (
          <Profile key={idx} idx={idx} {...item} />
        ))}
      </ul>
      <div className="bg-[#7C655F] h-10 absolute bottom-0 w-full"></div>
    </main>
  );
}
