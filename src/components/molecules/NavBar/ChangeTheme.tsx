import { useEffect, useState } from "react";

import maripn from "../../../assets/images/buttons/maripn.png";
import marip from "../../../assets/images/buttons/marip.png";


function ChangeTheme() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
          <div>
            <p className="font-tommyregular text-dark dark:text-snow text-center text-[0.65rem] tracking-wider antialiased">
              {document.documentElement.classList.contains("dark") ? "light mode" : "dark mode"}
            </p>
          </div>
    </>
  );
}

export default ChangeTheme;
