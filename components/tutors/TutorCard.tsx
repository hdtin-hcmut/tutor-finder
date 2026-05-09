import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

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
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              {name}
            </h2>

            <p className="text-muted-foreground">
              {subject}
            </p>
          </div>

          <Badge>
            {price}k/h
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}