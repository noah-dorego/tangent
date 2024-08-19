import Image from "next/image";

export function UserBanner() {
  return (
    <div className="flex items-center justify-center p-4 mb-8">
      <div className="w-[60vw] h-[150px] bg-gray-400 rounded-lg">
        <div className="w-[150px] h-[150px] bg-gray-600 mt-16 rounded-full ml-4"></div>
        <div className="relative font-bold text-2xl bottom-14 left-[170px]">
          Username
        </div>
        <div className="relative truncate text-sm bottom-20 text-end">
          Description of the profile... Description of the profile...
          Description of the profile...
        </div>
      </div>
    </div>
  );
}
