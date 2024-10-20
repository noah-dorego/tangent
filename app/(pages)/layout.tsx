import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { currentUser } from "@clerk/nextjs/server";

import { NavMenu } from "@/components/general/nav-menu";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { UserMenu } from "@/components/general/user-menu";

import { primaryFont } from "@/lib/fonts";

import "../globals.css";

export const metadata: Metadata = {
  title: "tangent",
  description: "A community of doers",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={primaryFont.className + " overscroll-none"}>
          <NavMenu />
          <SignedOut>
            <div className="fixed top-3 right-3">
              <SignInButton>
                <button>Sign In</button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="fixed top-5 right-5 flex items-center gap-3">
              <a href="/profile">{user?.username}</a>
              <UserMenu />
            </div>
          </SignedIn>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
