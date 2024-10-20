import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

import loginBackground from "@/public/backgrounds/tangent-login-background.png";

export default function Page() {
  return (
    <div className="flex items-center justify-center align-middle h-screen">
      <Image
        src={loginBackground}
        alt="Tangent background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <SignIn />
    </div>
  );
}
