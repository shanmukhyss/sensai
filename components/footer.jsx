import { Sparkles } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-700 mt-auto bg-black text-gray-400">
      <div className="absolute inset-x-0 -top-px h-px bg-gray-700" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-3 text-gray-300">
            <Sparkles className="size-6 text-gray-500 transition-transform duration-300 hover:rotate-[-10deg]" />
            <span className="text-sm md:text-base font-medium">
              Built for developers, by developers.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {["Support", "Contact", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm md:text-base font-medium hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} <span className="text-white font-medium">Sensai</span>. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Made with <span className="text-red-500">♥</span> by{" "}
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
            >
              Shanmukh
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
