'use client'

import { useState } from 'react';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-indigo-600 select-none">PlanSnap</h1>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#great-for" className="hover:text-indigo-600 transition">Great For</a>
            <a href="#why-people-love" className="hover:text-indigo-600 transition">Why People Love It</a>
            <a href="#user-love" className="hover:text-indigo-600 transition">User Love</a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
            <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
              <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">How It Works</a>
              <a href="#great-for" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">Great For</a>
              <a href="#why-people-love" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">Why People Love It</a>
              <a href="#user-love" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">User Love</a>
            </div>
          </nav>
        )}
      </header>

      <main className="bg-gray-50 min-h-screen">
        {/* Above the Fold */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Plan the Perfect Meetup — Without the Group Chat Headache.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Just drop a link. We’ll handle everyone’s schedules, preferences, and votes — in minutes.
            </p>
            <button
              className="mt-8 px-7 py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-md shadow-md transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Create My First Event"
            >
              Create My First Event
            </button>
          </div>

          <div className="flex-1 max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
            {/* Chat interface mockup */}
            <div className="flex flex-col space-y-4">
              <div className="text-gray-400 text-sm font-semibold select-none">Chat • PlanSnap AI</div>
              <div className="bg-indigo-50 rounded-xl p-4 text-gray-900 font-medium text-base leading-snug shadow-inner">
                <p><span className="font-semibold">PlanSnap AI:</span> Example: <span className="italic">“Game Night 🕹️ — Saturday, 7 PM, Pizza Planet 🍕”</span> (auto-suggested)</p>
              </div>
              <div className="mt-4">
                <textarea
                  disabled
                  rows={3}
                  aria-label="Event input preview"
                  className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Drop a link or type your event details here..."
                  value="https://example.com/event-link"
                />
              </div>
              <button
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-md py-3 shadow-md transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
                aria-label="Try Demo Planning"
              >
                Try Demo Planning
              </button>
            </div>
          </div>
        </section>

        {/* Below the Fold */}
        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-20 md:py-28 bg-white rounded-t-3xl shadow-inner"
        >
          <h3 className="text-3xl font-extrabold text-indigo-700 text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Start a Plan</h4>
              <p className="text-gray-600 max-w-xs">Choose a purpose (hangout, party, trip, etc.)</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-4h-1" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-6a2 2 0 01-2-2v-4a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Share Link</h4>
              <p className="text-gray-600 max-w-xs">
                Friends vote on time/place options or sync their calendars
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">AI Finalizes</h4>
              <p className="text-gray-600 max-w-xs">
                Suggests best plan and sends calendar invites
              </p>
            </div>
          </div>
        </section>

        <section
          id="great-for"
          className="max-w-7xl mx-auto px-6 py-20 md:py-28"
        >
          <h3 className="text-3xl font-extrabold text-indigo-700 text-center mb-12">Great For</h3>
          <ul className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center text-gray-700 text-lg font-semibold select-none">
            <li className="flex flex-col items-center space-y-2">
              <span className="text-4xl" aria-label="College friends emoji">🧑‍🎓</span>
              <span>College friends</span>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <span className="text-4xl" aria-label="Family events emoji">👨‍👩‍👧‍👦</span>
              <span>Family events</span>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <span className="text-4xl" aria-label="Gaming squads emoji">🕹️</span>
              <span>Gaming squads</span>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <span className="text-4xl" aria-label="Study groups or clubs emoji">🧠</span>
              <span>Study groups or clubs</span>
            </li>
          </ul>
        </section>

        <section
          id="why-people-love"
          className="max-w-7xl mx-auto px-6 py-20 md:py-28 bg-white rounded-b-3xl shadow-inner"
        >
          <h3 className="text-3xl font-extrabold text-indigo-700 text-center mb-12">Why People Love It</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-gray-700 font-semibold text-lg select-none">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 shadow-md text-4xl select-none" aria-hidden="true">📆</div>
              <p className="text-center">Auto-syncs availability</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 shadow-md text-4xl select-none" aria-hidden="true">🔄</div>
              <p className="text-center">Suggests venues + activities based on location</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 shadow-md text-4xl select-none" aria-hidden="true">📬</div>
              <p className="text-center">Sends reminders and confirmations automatically</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 shadow-md text-4xl select-none" aria-hidden="true">🧠</div>
              <p className="text-center">Learns preferences over time</p>
            </div>
          </div>
        </section>

        <section
          id="user-love"
          className="max-w-3xl mx-auto px-6 py-20 md:py-28"
        >
          <blockquote className="relative bg-indigo-50 border-l-8 border-indigo-600 pl-8 py-6 text-gray-900 text-xl md:text-2xl font-semibold italic rounded-md shadow-md select-none">
            “It’s like Doodle meets ChatGPT. I don’t plan without it now.”
            <footer className="mt-4 text-base font-normal not-italic text-indigo-700">— Tasha, Group Chat Admin</footer>
          </blockquote>
        </section>
      </main>

      <footer className="bg-indigo-600 text-indigo-100 text-center py-8 select-none">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} PlanSnap. All rights reserved.</p>
      </footer>
    </>
  );
}