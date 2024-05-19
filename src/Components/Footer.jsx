import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-[#213343] py-10 px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Quick Links</h4>
        <ul className="space-y-5">
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Our Story</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Newsroom</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Careers</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Blog</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Courses</h4>
        <ul className="space-y-5">
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">BCA</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">BBA</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">BTECH</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">B PHARMA</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Platforms</h4>
        <ul className="space-y-5">
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Hubspot</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketo Integration Services</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketing Glossary</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">UIPath</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Contact</h4>
        <ul className="space-y-5">
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Privacy Policy</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contact</Link>
          </li>
          <li>
            <Link to="javascript:void(0)" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Learn more</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
      <p className="text-gray-300 text-[15px]">
        Copyright © 2023
        <Link to="/" target="_blank" className="hover:underline mx-1">SIS</Link>
        {Date.now} All Rights Reserved.
      </p>
    </div>
  </footer>
  );
}

export default Footer;
