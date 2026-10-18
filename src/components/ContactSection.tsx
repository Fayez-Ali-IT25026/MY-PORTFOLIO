
"use client";

import { useState } from "react";
// import { useState, type FormEvent } from "react";










const ContactSection = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

   window.location.href =
  `mailto:fayezali210906@gmail.com?subject=${subject}&body=${body}`;
  }





    return (
        <div>
             <section
      id="contact"
      className="bg-[#050807] px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm tracking-[0.3em] text-[#48FF91]">
          05 / CONTACT
        </p>

        <h2 className="text-3xl font-bold sm:text-5xl">
          Let&apos;s <span className="text-[#48FF91]">Connect</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Have a project idea, collaboration opportunity, or just want
          to talk tech? Feel free to reach out.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <a
              href="https://github.com/Fayez-Ali-IT25026"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-[#48FF91]/20 bg-white/[0.03] p-5 transition hover:border-[#48FF91]/60"
            >
              <p className="font-mono text-sm text-[#48FF91]">
                GITHUB
              </p>
              <p className="mt-2 break-all text-gray-200">
                github.com/Fayez-Ali-IT25026
              </p>
            </a>

            {/* <div className="rounded-xl border border-[#48FF91]/20 bg-white/[0.03] p-5"> */}
           
<a
  href="mailto:fayezali210906@gmail.com"
  className="block rounded-xl border border-[#48FF91]/20 bg-white/[0.03] p-5 transition hover:border-[#48FF91]/60"
>
  <p className="font-mono text-sm text-[#48FF91]">
    EMAIL
  </p>
  <p className="mt-2 break-all text-gray-200">
    fayezali210906@gmail.com
  </p>
</a>

            {/* </div> */}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-[#48FF91]/20 bg-white/[0.03] p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                Your name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-[#050807] px-4 py-3 outline-none transition focus:border-[#48FF91]"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-[#050807] px-4 py-3 outline-none transition focus:border-[#48FF91]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full resize-y rounded-lg border border-white/10 bg-[#050807] px-4 py-3 outline-none transition focus:border-[#48FF91]"
                placeholder="Tell me what you have in mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#48FF91] px-5 py-3 font-bold text-[#050807] transition hover:bg-[#C6FF00]"
            >
              Send Message ↗
            </button>

            <p className="text-xs leading-5 text-gray-500">
              This form opens your default email app. It does not send
              messages directly from the website.
            </p>
          </form>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ContactSection;