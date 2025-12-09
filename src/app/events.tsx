"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Future of Web Development: Trends and Innovations",
    desc: "Discover the latest trends, innovations and technologies shaping the future of Software Development.",
    buttonLabel: "Mar 26",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
    desc: "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
    buttonLabel: "May 26",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Ask the Experts: Frontend Web Development",
    desc: "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
    buttonLabel: "Feb 26",
  },
  {
    img: "/image/blogs/avatar6.jpg",
    title: "Graduation Day",
    desc: "Join us on March 2026 as we honor the hard work, growth, and perseverance that have shaped our graduates into the next generation of tech innovators.",
    buttonLabel: "Mar 26",
  },
];

export function Events() {
  return (
    <section id="events" className="py-10 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Upcoming Events
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Join our Software Development events designed to share insights, trends,
          and real-world experiences.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Events;
