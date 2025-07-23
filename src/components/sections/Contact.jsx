import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a2g1o9p",    // Replace with your EmailJS service ID
        "template_vkcv1it",   // Replace with your EmailJS template ID
        form.current,
        "rpxwqg1iA13ult2Qu"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        }
      );

    e.target.reset(); // Optional: clears form after submit
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me!</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Message me"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba[59,130,246,0.4]]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};