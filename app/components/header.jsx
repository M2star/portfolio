import Link from "next/link";
const Header = () => {
  return (
    <nav className="bg-transparent">
      <div className="py-4 flex w-full justify-between items-center container">
        <div className="font-bold text-3xl">Portfolio</div>
        <div>
          <ul className="md:flex justify-start items-center gap-8 hidden">
            <li className="text-base hover:font-semibold font-medium hover:text-purple">
              <Link href="#about"> About</Link>
            </li>
            <li className="text-base hover:font-semibold font-medium hover:text-purple">
              <Link href="#experience"> Experience</Link>
            </li>
            <li className="text-base hover:font-semibold font-medium hover:text-purple">
              <Link href="#skill">Skill</Link>
            </li>
            {/* <li className="text-base hover:font-semibold font-medium hover:text-purple">
              <Link href="#about">Education </Link>
            </li> */}
            <li className="text-base hover:font-semibold font-medium hover:text-purple">
              <Link href="#projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
