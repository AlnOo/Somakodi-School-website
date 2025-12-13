"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Footer from "@/components/Footer";

const scholarships = [
  {
    title: "Financial Aid",
    desc: "Our financial aid program supports learners who may not be able to afford the full course fees. Eligible students can receive up to 50% tuition fees aid, along with flexible installment payment options designed to make Somakodi tech courses accessible to everyone. Financial aid is awarded based on the applicant’s financial background and personal circumstances. Aid is available across selected Somakodi School courses, subject to availability.",
    percent: "Up to 50%",
    img: "/image/blogs/faid.jpg",
    button: "Apply",
  },
  {
    title: "PWD Scholarship",
    desc: "Eligible learners to receive up to 100% scholarship on their tuition fees, priority admission assistance, and flexible learning arrangements to ensure equal access to our programs. By supporting PWD learners, we aim to build a more inclusive tech community where everyone can thrive and contribute meaningfully. Our courses accommodate diverse needs, such as adjusted schedules, additional learning resources, and personalized assistance.",
    percent: "100%",
    img: "/image/blogs/pwd.jpg",
    button: "Apply",
  },
  {
    title: "InnovateHer",
    desc: "We are dedicated to empowering women to grow and excel in the Tech space, eligible female learners can receive up to 70% scholarship, mentorship opportunities, and a supportive learning environment. You can apply for special tuition discounts and flexible installment plans to make tech education more accessible and access to experienced female mentors, career guidance, and community support to build confidence and accelerate growth.",
    percent: "Up to 70%",
    img: "/image/blogs/Devgirl.jpg",
    button: "Apply",
  },
];

export default function ScholarshipPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    scholarship: "",
    description: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.scholarship.trim())
      newErrors.scholarship = "Select a scholarship";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    const sheetdbEndpoint = "https://sheetdb.io/api/v1/izg5vtcz0sh91";

    try {
      const response = await fetch(sheetdbEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: form.name,
            email: form.email,
            scholarship: form.scholarship,
            description: form.description,
          },
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          scholarship: "",
          description: "",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Left Image */}
          <div className="relative w-full min-h-[320px] md:min-h-full rounded-xl overflow-hidden border-4 border-pink-600">
            <Image
              src="/logos/fhero.jpg"
              alt="Somakodi Scholarships"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="md:col-span-2 flex flex-col justify-center text-center md:text-left">
            <Typography variant="h2" className="font-bold mb-4">
              Making Education Accessible for All
            </Typography>

            <Typography className="text-lg text-justify">
              At Somakodi School, our mission is rooted in expanding access to
              life-changing digital skills for underserved communities. We believe
              that talent exists everywhere, but opportunity does not and that’s why
              our scholarship program is designed to remove financial barriers and
              open doors for passionate learners.
              <br /><br />
              Through this initiative, Somakodi School strives to removes financial barriers, empowering young people and individuals from communities with limited opportunities with digital skills, mentorship, and career support to thrive in today’s tech-driven world.Financial aid and scholarships are granted based on eligibility and availability.
            </Typography>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-full"></div>
      </div>
      {/* ================================================= */}

      {/* Scholarships Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {scholarships.map((sch, idx) => (
          <Card key={idx} className="shadow-xl hover:shadow-2xl transition">
            <CardHeader className="relative h-48">
              <Image
                src={sch.img}
                alt={sch.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg font-bold">
                {sch.percent}
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 font-semibold">
                {sch.title}
              </Typography>
              <Typography className="text-gray-600 mb-6 text-justify">
                {sch.desc}
              </Typography>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500"
                onClick={() =>
                  document
                    .getElementById("apply-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Apply
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Form Section */}
      <div
        id="apply-form"
        className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-lg"
      >
        <Typography variant="h4" className="text-center mb-6 font-semibold">
          Apply for a Scholarship
        </Typography>

        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-6 text-center">
            🎉 Your application has been submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            <select
              name="scholarship"
              value={form.scholarship}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select Scholarship</option>
              <option value="Financial Aid">Financial Aid</option>
              <option value="PWD Scholarship">PWD Scholarship</option>
              <option value="InnovateHer">InnovateHer</option>
            </select>
          </div>

          <textarea
            name="description"
            rows={4}
            placeholder="Describe why you need this scholarship..."
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Send Application
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
