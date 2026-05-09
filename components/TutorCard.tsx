type Props = {
  name: string;
  subject: string;
  price: number;
};

export default function TutorCard({
  name,
  subject,
  price,
}: Props) {
  return (
    <div className="border rounded-xl p-4">
      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p>{subject}</p>

      <p>{price} VND/hour</p>
    </div>
  );
}