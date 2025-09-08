
import React from 'react'
import FooterBottom from './FooterBottom';

const FooterUpper = () => {
  return (
    <div>
      <div className="font-[font2] flex flex-col sm:flex-row justify-between items-start bg-black h-auto sm:h-[60vh] px-4 py-6">
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="lg:border-6 border-2 hover:border-[#D3FD50] lg:h-44 flex items-center mt-3 ml-3 lg:px-14 border-white rounded-full uppercase">
      <div className="text-[6vw] text-white hover:text-[#D3FD50] lg:mt-6">FB</div>
    </div>
    <div className="lg:border-6 border-2 hover:border-[#D3FD50] lg:h-44 flex items-center mt-3 ml-3 lg:px-14 border-white rounded-full uppercase">
      <div className="text-[6vw] text-white hover:text-[#D3FD50] lg:mt-6">IG</div>
    </div>
    <div className="lg:border-6 border-2 hover:border-[#D3FD50] lg:h-44 flex items-center mt-3 ml-3 lg:px-14 border-white rounded-full uppercase">
      <div className="text-[6vw] text-white hover:text-[#D3FD50] lg:mt-6">IN</div>
    </div>
    <div className="lg:border-6 border-2 hover:border-[#D3FD50] lg:h-44 flex items-center mt-3 ml-3 lg:px-14 border-white rounded-full uppercase">
      <div className="text-[6vw] text-white hover:text-[#D3FD50] lg:mt-6">BE</div>
    </div>
  </div>

  <div className="lg:border-6 border-2 hover:border-[#D3FD50] lg:h-44 flex items-center mt-3 ml-3 lg:px-14 border-white rounded-full uppercase">
    <div className="text-[6vw] text-white hover:text-[#D3FD50] lg:mt-6">CONTACT</div>
  </div>
</div>
    <FooterBottom/>
  </div>
  )
}

export default FooterUpper
