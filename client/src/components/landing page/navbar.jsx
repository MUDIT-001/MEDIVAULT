import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = ({ onAuthClick }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);

  const signinRef = useRef(null);
  const signupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        signinRef.current?.contains(e.target) ||
        signupRef.current?.contains(e.target)
      ) return;

      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "features", "contact"];
    const handleScroll = () => {
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuth = (mode) => {
    setOpenDropdown(null);
    const [type, role] =
      mode === "PatientSignIn"
        ? ["login", "patient"]
        : mode === "NGOSignIn"
        ? ["login", "ngo"]
        : mode === "PatientSignUp"
        ? ["sign_up", "patient"]
        : ["sign_up", "ngo"];

    onAuthClick(type, role);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm font-poppins px-[120px] py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
       <div className="flex items-center gap-2">
  <div className="h-[48px] flex items-center">
    <img src="/logo1.png" alt="logo" className="h-full w-auto" />
  </div>
</div>
      </div>

      <div className="flex items-center gap-8">
        {["home", "about", "features", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="relative cursor-pointer capitalize text-[16px] text-gray-800 font-medium group"
          >
            {section}
            <span
              className={`absolute left-0 -bottom-[2px] h-[2px] w-full transition-transform origin-left duration-300 bg-blue-600 ${
                activeSection === section
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        ))}

        {/* Sign In */}
        <div className="relative" ref={signinRef}>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "signin" ? null : "signin")
            }
            className="text-sm font-medium px-4 py-2 text-blue-600 hover:underline transition"
          >
            Sign In
          </button>

          {openDropdown === "signin" && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-50 py-2">
              <div className="px-4 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Sign In Options
              </div>
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                onClick={() => handleAuth("PatientSignIn")}
              >
                As Patient
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                onClick={() => handleAuth("NGOSignIn")}
              >
                As NGO / Hospital
              </button>
            </div>
          )}
        </div>

        {/* Sign Up */}
        <div className="relative" ref={signupRef}>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "signup" ? null : "signup")
            }
            className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          {openDropdown === "signup" && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-50 py-2">
              <div className="px-4 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Sign Up Options
              </div>
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                onClick={() => handleAuth("PatientSignUp")}
              >
                As Patient
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                onClick={() => handleAuth("NGOSignUp")}
              >
                As NGO / Hospital
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
