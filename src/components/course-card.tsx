import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
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

export function CourseCard({
  img,
  tag,
  title,
  desc,
  label,
  brochure,
}: CourseCardProps) {
  return (
    <Card className="border hover:shadow-lg transition-shadow duration-300">
      {/* IMAGE SECTION */}
      <CardHeader
        floated={false}
        shadow={false}
        className="h-64 overflow-hidden rounded-t-xl border-4 border-pink-300 group"
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-110
          "
        />
      </CardHeader>

      <CardBody>
        <Typography
          variant="small"
          className="mb-2 font-normal text-gray-500"
        >
          {tag}
        </Typography>

        <Typography variant="h5" className="mb-2 normal-case">
          {title}
        </Typography>

        <Typography className="mb-6 font-normal text-gray-500">
          {desc}
        </Typography>

        {/* PRICE + APPLY */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outlined" className="w-full">
            {label}
          </Button>

          <Link
            href={`/register?course=${encodeURIComponent(title)}`}
          >
            <Button color="blue" className="w-full">
              Apply
            </Button>
          </Link>
        </div>

        {/* BROCHURE */}
        {brochure && (
          <a
            href={brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
          >
            <Button
              color="blue"
              variant="outlined"
              className="w-full"
            >
              Open Brochure
            </Button>
          </a>
        )}
      </CardBody>
    </Card>
  );
}

export default CourseCard;
