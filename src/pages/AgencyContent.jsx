import React from "react";

const AgencyContent = () => (
  <section className="bg-black text-white font-[font2] py-16 px-6">
    <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
      
      {/* Left Column: Expertise List */}
      <div className="flex-shrink-0 lg:w-1/3">
        <h3 className="text-4xl lg:text-5xl uppercase mb-8">Expertise</h3>
        <ul className="space-y-4 text-2xl lg:text-3xl uppercase">
          <li>Strategy</li>
          <li>Advertising</li>
          <li>Branding</li>
          <li>Design</li>
          <li>Content</li>
        </ul>
      </div>

      {/* Right Column: Descriptive Blurbs */}
      <div className="flex-1 space-y-6 text-lg lg:text-xl leading-relaxed">
        <p>
          <span className="font-semibold">Our Work_</span> Born in curiosity, raised by dedication and fed with a steady diet of creativity.
        </p>
        <p>
          <span className="font-semibold">Our Creative_</span> Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
        </p>
        <p>
          <span className="font-semibold">Our Culture_</span> We’re open to each other. Period. The team works together to create a space that makes us proud.
        </p>
      </div>
    </div>
  </section>
);

export default AgencyContent;
