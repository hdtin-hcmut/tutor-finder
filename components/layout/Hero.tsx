import { Button } from "@/components/ui/button";
import SearchBar from "../tutors/SearchBar";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Find The Perfect Tutor
        </h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with qualified tutors for
          Math, English, Programming,
          IELTS and more.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            Find Tutor
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Become Tutor
          </Button>
        </div>

        <div className="mt-8">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}