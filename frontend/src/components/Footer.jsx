import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Product Store</span>. All rights reserved.
          </p>

          <nav className="flex items-center space-x-6 text-sm">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200"
              aria-label="Terms and Conditions"
            >
              Terms
            </Link>
            <Link
              href="/Contact"
              className="hover:text-white transition-colors duration-200"
              aria-label="Contact Support"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
