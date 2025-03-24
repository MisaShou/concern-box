"use client";

import { useState } from "react";

const translations = {
  en: {
    title: "Concern Box – ICU Relatives",
    topicLabel: "Select Topic",
    topics: ["Communication", "Environment", "Emotional Stress", "Appreciation", "Other"],
    messagePlaceholder: "Write your message here...",
    anonymousLabel: "Stay Anonymous",
    namePlaceholder: "Your Name (optional)",
    contactPlaceholder: "Email or Phone (if callback requested)",
    submit: "Submit Message",
    language: "Select Language",
  },
  de: {
    title: "Kummerkasten – Angehörige auf der Intensivstation",
    topicLabel: "Thema auswählen",
    topics: ["Kommunikation", "Umgebung", "Emotionale Belastung", "Wertschätzung", "Anderes"],
    messagePlaceholder: "Schreiben Sie hier Ihre Nachricht...",
    anonymousLabel: "Anonym bleiben",
    namePlaceholder: "Ihr Name (optional)",
    contactPlaceholder: "E-Mail oder Telefon (wenn Rückmeldung gewünscht)",
    submit: "Nachricht absenden",
    language: "Sprache wählen",
  },
};

export default function ConcernBoxForm() {
  const [language, setLanguage] = useState<"en" | "de">("en");
  const [anonymous, setAnonymous] = useState(true);
  const t = translations[language];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-4">{t.title}</h2>

      <form
        action="https://formspree.io/f/mvgkrogo"
        method="POST"
        className="space-y-4"
      >
        {/* Language Selection */}
        <label className="block text-sm font-medium text-gray-800">{t.language}</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "de")}
          className="w-full p-2 border rounded bg-white text-black placeholder-gray-600"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>

        {/* Topic Selection */}
        <label className="block text-sm font-medium text-gray-800">{t.topicLabel}</label>
        <select name="topic" className="w-full p-2 border rounded bg-white text-black placeholder-gray-600">
          {t.topics.map((topic, index) => (
            <option key={index} value={topic.toLowerCase()}>
              {topic}
            </option>
          ))}
        </select>

        {/* Message */}
        <label className="block text-sm font-medium text-gray-800">Message</label>
        <textarea
          name="message"
          placeholder={t.messagePlaceholder}
          className="w-full p-2 border rounded min-h-[100px] bg-white text-black placeholder-gray-600"
          required
        />

        {/* Anonymous Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-800">{t.anonymousLabel}</span>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="w-5 h-5"
          />
        </div>

        {/* Optional Contact Info */}
        {!anonymous && (
          <>
            <input
              name="name"
              type="text"
              placeholder={t.namePlaceholder}
              className="w-full p-2 border rounded bg-white text-black placeholder-gray-600"
            />
            <input
              name="contact"
              type="text"
              placeholder={t.contactPlaceholder}
              className="w-full p-2 border rounded bg-white text-black placeholder-gray-600"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          {t.submit}
        </button>
      </form>
    </div>
  );
}
