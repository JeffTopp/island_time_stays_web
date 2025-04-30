"use client";

import { useState } from "react";
import CustomMap from "../components/CustomMap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <section
        className="px-0 sm:px-7 relative h-full lg:h-svh mb-20 mt-70 flex justify-start items-center"
        id="contact"
        data-aos="fade-up"
      >
        <div className="flex justify-center w-full gap-4 p-2 flex-col md:flex-row">
          <div
            className="bg-white p-6 rounded-lg min-w-44"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
            }}
          >
            <p className="text-xl tracking-widest text-primary mb-3 font-semibold">
              CONTACT US
            </p>
            <p className="font-normal text-slate-400 text-md mb-3">
              Reach out to us anytime for concerns.
            </p>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded-lg">
                  <label className="primary-black text-sm font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent border-slate-200 outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                  />
                </div>
                <div className="bg-white rounded-lg">
                  <label className="primary-black text-sm font-normal">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent border-slate-200 outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg mb-3">
                <label className="primary-black text-sm font-normal">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject here..."
                  required
                  className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent border-slate-200 outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                />
              </div>
              <div className="bg-white rounded-lg">
                <label className="primary-black text-sm font-normal">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us a message..."
                  required
                  cols="50"
                  rows="10"
                  className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent border-slate-200 outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                />
              </div>
              <button
                type="submit"
                className="btn-primary font-medium py-3 px-11 rounded-full mt-3 w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Contact Us"}
              </button>
            </form>
            {responseMessage && (
              <p className="text-center text-sm mt-2 text-gray-600">
                {responseMessage}
              </p>
            )}
          </div>
          <div
            className="relative w-full overflow-hidden rounded-lg md:max-w-[500px]"
            style={{ aspectRatio: "4 / 3" }}
          >
            <CustomMap className="w-full md:max-w-[500px] max-w-full h-full max-h-[700px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
