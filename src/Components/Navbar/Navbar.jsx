import React, { useRef } from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/pdf/Raman_Resume.pdf";

const Navbar = () => {
  const linkRef = useRef(null);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "RAMAN-RESUME.pdf"; // customize the downloaded file name
    linkRef.current = link;

    link.click();

    // Remove the temporary link after download
    setTimeout(() => {
      if (linkRef.current) {
        document.body.removeChild(linkRef.current);
        linkRef.current = null;
      }
    }, 100);
  };

  return (
    <section className="w-full bg-navgray">
      <nav className="common-side-padding flex items-center h-20">
        <div className="logoname">
          <Link to="/">R.</Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <Link to="/">
            <button className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray">
              Work
            </button>
          </Link>
          <Link to="/learning">
            <button className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray">
              Learnings
            </button>
          </Link>
          <button
            onClick={() => {
              downloadResume();
            }}
            className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray"
          >
            Resume
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
