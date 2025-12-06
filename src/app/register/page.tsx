"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const params = useSearchParams();
  const course = params.get("course") || "Somakodi Program";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Application Received 🎉
        </h1>
        <p className="mt-2 text-gray-700 max-w-md">
          Thank you for applying to the <strong>{course}</strong> program at Somakodi School.
          Our Admissions Team will contact you shortly.
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Somakodi Student Application Form
        </h1>
        <p className="text-center mt-2 text-gray-600">
          Apply today and start your journey in tech.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* COURSE NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course Applying For
            </label>
            <input
              type="text"
              value={course}
              readOnly
              className="w-full rounded-xl border-gray-300 bg-gray-100 px-4 py-3"
            />
          </div>

          {/* FULL NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              required
              placeholder="07XX XXX XXX"
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              required
              placeholder="City or town"
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          {/* SCHEDULE */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Schedule</label>
            <select className="w-full rounded-xl border-gray-300 px-4 py-3" required>
              <option value="">Select schedule</option>
              <option>Weekday Classes</option>
              <option>Evening Classes</option>
              <option>Weekend Classes</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
