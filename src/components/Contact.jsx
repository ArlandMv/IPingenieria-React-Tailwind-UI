import React, { useState } from "react";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form data for formsubmit.co
    const { fullName, email, phone, message } = formData;
    const formDataForSubmitCo = new FormData();
    formDataForSubmitCo.append("fullName", fullName);
    formDataForSubmitCo.append("email", email);
    formDataForSubmitCo.append("phone", phone);
    formDataForSubmitCo.append("message", message);

    fetch("https://formsubmit.co/ajax/ip.ingenieria.0408@gmail.com", {
      method: "POST",
      body: formDataForSubmitCo,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted to formsubmit.co:", data);
        // logic after successful submission
      })
      .catch((error) => {
        console.error("Error submitting form to formsubmit.co:", error);
        // Handle errors
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="landing email" />
          <div
            className="p-6 border-4 border-blue-500 rounded-md shadow-md mb-6"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-black"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium input"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
