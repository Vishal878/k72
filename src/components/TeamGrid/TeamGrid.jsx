import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/**
 * TeamGrid
 * - responsive grid
 * - scroll reveal animation using GSAP + ScrollTrigger
 * - hover scale on images (CSS) and small overlay text
 *
 * Usage: <TeamGrid /> anywhere in page
 */

const teamMembers = [
  { name: "Carl", role: "Business Lead", img: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" },
  { name: "Olivier", role: "Principal Strategic Planner", img: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg" },
  { name: "Lawrence", role: "Account Manager", img: "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg" },
  { name: "Hugo", role: "Associate Creative Director", img: "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg" },
  { name: "Chantal", role: "Creative Director", img: "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg" },
  { name: "Mylene", role: "Art Director", img: "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg" },
  { name: "Sophie", role: "Account Executive", img: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg" },
  { name: "Claire", role: "Account Manager", img: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg" },
  { name: "Michele", role: "Director of Strategy", img: "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg" },
  { name: "Mel", role: "Art Director", img: "https://k72.ca/uploads/teamMembers/MEL_640X960-640x960.jpg" },
  { name: "Camille", role: "Copywriter", img: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg" },
  { name: "Maxime", role: "Designer", img: "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg" },
  { name: "Meggie", role: "Account Director", img: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg" },
  { name: "Joël", role: "Associate Creative Director", img: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg" },
];

export default function TeamGrid() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const cards = gsap.utils.toArray(".team-card");

    // initial state
    gsap.set(cards, { autoAlpha: 0, y: 30 });

    // reveal each card on scroll with a stagger
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        end: "top 50%",
        onEnter: () => {
          gsap.to(card, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" });
        },
        onEnterBack: () => {
          gsap.to(card, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" });
        },
        // optional onLeave to hide again:
        // onLeaveBack: () => gsap.to(card, { autoAlpha: 0, y: 30, duration: 0.3 })
      });
    });

    // cleanup
    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="bg-black text-white font-[font2] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl lg:text-5xl uppercase mb-10">Our Team</h3>

        {/* grid: mobile 2 columns, sm 3, md 4, lg 5 */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {teamMembers.map((m, i) => (
            <div
              key={m.name + i}
              className="team-card group relative overflow-hidden rounded-2xl bg-gray-900"
              aria-label={`${m.name} — ${m.role}`}
            >
              {/* Image container */}
              <div className="w-full h-[26vw] sm:h-[22vw] md:h-[20vw] lg:h-[18vw] xl:h-[16vw] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="p-4 lg:p-6">
                <div className="text-lg lg:text-xl font-semibold uppercase">{m.name}</div>
                <div className="text-sm lg:text-base text-gray-300 mt-1">{m.role}</div>
              </div>

              {/* subtle overlay line reveal on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#D3FD50] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
