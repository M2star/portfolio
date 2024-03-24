import React from "react";
import { FaRegStar } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-gray-800  pb-24 pt-4 ">
      <div className="container flex justify-between items-center">
        <div>© Developer by tushar bawane</div>
        <div>
          <div>
            <a
              href="https://github.com/M2star/portfolio"
              className="flex items-center gap-3 text-lg"
            >
              <span>
                <FaRegStar />
              </span>
              <span>star</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
