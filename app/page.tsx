import TutorCard from "@/components/TutorCard";

const tutors = [
  {
    id: 1,
    name: "Nguyen Van A",
    subject: "Math",
    price: 150000,
  },
  {
    id: 2,
    name: "Tran Thi B",
    subject: "English",
    price: 200000,
  },
];

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Tutor Finder
      </h1>

      <div className="grid gap-4">
        {tutors.map((tutor) => (
          <TutorCard
            key={tutor.id}
            name={tutor.name}
            subject={tutor.subject}
            price={tutor.price}
          />
        ))}
      </div>
    </main>
  );
}