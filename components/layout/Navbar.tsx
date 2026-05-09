import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          TutorFinder
        </Link>

        <div className="flex gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Become Tutor
          </Button>
        </div>
      </div>
    </nav>
  );
}