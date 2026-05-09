import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <div className="flex gap-3 max-w-2xl mx-auto">
      <Input placeholder="Search tutor, subject..." />

      <Button>
        Search
      </Button>
    </div>
  );
}