import React, { useEffect, useState } from "react";

const FooterBottom = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white font-[font2] px-6 py-6 flex flex-col md:flex-row items-center justify-between text-base md:text-lg lg:text-xl">
      
      {/* Left */}
      <div className="uppercase tracking-wide">© 2025 SEVEN7Y TWO</div>

      {/* Center */}
      <div className="flex gap-6 text-gray-300 flex-wrap justify-center mt-3 md:mt-0">
        <span className="hover:text-[#D3FD50] cursor-pointer">Privacy Policy</span>
        <span>|</span>
        <span className="hover:text-[#D3FD50] cursor-pointer">Privacy Notice</span>
        <span>|</span>
        <span className="hover:text-[#D3FD50] cursor-pointer">Ethics Report</span>
        <span>|</span>
        <span className="hover:text-[#D3FD50] cursor-pointer">Consent Choices</span>
      </div>

      {/* Right (Clock) */}
      <div className="uppercase tracking-wide mt-3 md:mt-0">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
      </div>
    </div>
  );
};

export default FooterBottom;
