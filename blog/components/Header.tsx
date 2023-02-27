import Link from "next/link";
import { Burger} from "./Burger";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <p className="">tmcoco0228si</p>
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
