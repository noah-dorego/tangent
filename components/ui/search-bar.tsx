import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoSearch } from "react-icons/go";

export function SearchBar({}) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="type" placeholder="Search" />
      <Button type="submit" className="bg-gray-500">
        <GoSearch size={20} />
      </Button>
    </div>
  );
}
