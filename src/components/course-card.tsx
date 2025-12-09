import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
  brochure?: string;
}

export function CourseCard({ img, tag, title, desc, label, brochure }: CourseCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>

      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>

        <Typography variant="h5" className="mb-2 normal-case">
          {title}
        </Typography>

        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>

        {/* --- PRICE + APPLY BUTTONS ROW --- */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outlined" className="w-full">
            {label}
          </Button>

<Link href={`/register?course=${encodeURIComponent(title)}`}>
  <Button color="blue" className="w-full">
    Apply
  </Button>
</Link>

        </div>


        {/* --- Optional Brochure Button --- */}
        {brochure && (
          <a
            href={brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
          >
            <Button color="blue" variant="outlined" className="w-full">
              Open Brochure
            </Button>
          </a>
        )}
      </CardBody>
    </Card>
  );
}

export default CourseCard;
