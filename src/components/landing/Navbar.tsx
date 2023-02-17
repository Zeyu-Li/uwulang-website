import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // animate opacity on load
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // animate border bottom on load from left to right
    <header className="border-anim fixed top-0 z-50 w-full bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm">
      <div className="m-auto flex max-w-[88em] flex-1 items-center justify-between px-16 -sm:px-4">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="UwULang logo"
              title="UwULang"
              className="my-4 h-12 w-12 hover:animate-pulse"
            />
          </Link>
        </div>
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } flex items-center transition-opacity duration-700 `}
        >
          {/* <MobileNav /> */}
          {/* list of nav elements */}
          <ul className="flex items-center text-2xl text-dark -sm:hidden">
            <li className="mx-4">
              <nav>
                <Link href="/#tryit" title="Try it">
                  Try it
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link href="/docs" title="Docs">
                  Docs
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link href="/transpiler" title="Transpiler">
                  Transpiler
                </Link>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
