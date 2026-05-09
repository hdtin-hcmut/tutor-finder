import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TutorCard from "@/components/tutors/TutorCard";

const tutors = [
  {
    id: 1,
    name: "Nguyen Van A",
    subject: "Math",
    price: 150,
  },
  {
    id: 2,
    name: "Tran Thi B",
    subject: "IELTS",
    price: 300,
  },
  {
    id: 3,
    name: "Le Van C",
    subject: "Programming",
    price: 500,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Popular Tutors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                name={tutor.name}
                subject={tutor.subject}
                price={tutor.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}