import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <UserProfile
      appearance={{
        elements: {
          rootBox: "flex w-screen h-screen items-center justify-center",
          cardBox: "w-[50vw] h-[90vh]",
        },
      }}
    />
  );
}
