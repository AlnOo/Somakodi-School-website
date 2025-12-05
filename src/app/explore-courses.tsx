"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 5 Weeks • 2 classes",
    title: "Website Design",
    label: "Kes. 10,500",
    desc: "Unlock the Web Design and Development Foundation. Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Beginner • 8 Months • 4 Classes",
    title: "Software Engineering",
    label: "Kes. 75,000",
    desc: "Our Software Engineering course equips you with the skills to design and build scalable, high-performance applications that work seamlessly across different platforms and environments.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Medium • 8 Weeks • 2 Classes",
    title: "Master the Power of React",
    label: "Kes. 25,000",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build fast, interactive and dynamic web applications using the power of React.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 8 Weeks • 4 Classes",
    title: "Frontend Essentials Course",
    label: "Kes. 45,000",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 3 Weeks • 2 Classes",
    title: "Streamline Your CSS Workflow",
    label: "Kes. 7,500",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 8 Weeks • 2 Classes",
    title: "Master Backend Development",
    label: "Kes. 45,000",
    desc: "Dream of becoming a backend developer? Our intensive Python and Flask course is your fast track to achieving that goal.",
  },
    {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 6 Months • 1 Classes",
    title: "CyberSecurity",
    label: "Kes. 75,000",
    desc: "Take your cybersecurity skills to the next level with our hands-on Cybersecurity course. Learn how to detect threats, secure systems, and protect digital environments.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 6 Months • 1 Class",
    title: "Mobile App. Development",
    label: "Kes.135,000",
    desc: "Take your mobile app development skills to the next level with our Mobile App Development course. Learn how to build fast, interactive, and user-friendly applications for Android and iOS.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Beginner • 6 Months • 1 Class",
    title: "Data Science",
    label: "Kes. 75,000",
    desc: "Take your data skills to the next level with our Data Science course. Learn how to analyze data, build predictive models, and turn insights into real-world solutions.",
  },
      {
    img: "/image/blogs/blog5.svg",
    tag: "Beginner • 3 Months • 1 Classes",
    title: "JavaScript Mastery",
    label: "Kes. 50,000",
    desc: "Learn how to build interactive frontend interfaces and powerful backend applications using modern JavaScript. From dynamic UIs to server-side logic, we’ll equip you with the full-stack skills needed to create complete web apps.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Medium • 4 Weeks • 1 Class",
    title: "Workplace Readiness & Leadership Program",
    label: "Kes. 25,000",
    desc: "Level up your career with essential soft skills! Master communication, teamwork, and problem-solving to stand out, collaborate effectively, and succeed in any professional setting.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Medium • 6 Months • 1 Class",
    title: "Applied AI & Full-Stack Development",
    label: "Kes. 75,000",
    desc: "Unlock the power of AI and become a full-stack developer! Learn how to build intelligent web applications using Python and JavaScript, from dynamic user interfaces to smart backend systems.",
  },
];

export function ExploreCourses() {
  return (
    <section id="ourcourses" className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Explore Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through our courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
