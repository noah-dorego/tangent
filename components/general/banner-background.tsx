"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { fetchBanner } from "@/lib/actions/profile-actions";

export function BannerBackground() {
  const { user } = useUser();
  const [banner, setBanner] = useState<Blob | null>(null);

  useEffect(() => {
    // Create <Banner /> client side component
    const updateBanner = async () => {
      const result = await fetchBanner(user?.id);

      setBanner(result);
    };
    updateBanner();
  }, []);

  return (
    <div className="w-[150px] h-[150px] bg-gray-600 mt-16 rounded-full ml-4">
      {banner?.text()}
    </div>
  );
}
