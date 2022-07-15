import Link from "next/link";
const Header = () => {
  return (
    <div className="shadow-2xl ">
      <div className="container mx-auto px-12 flex justify-between items-center py-4">
        <div>
          <Link href="/">
            <a className=" font-semibold text-base">Amazon</a>
          </Link>
        </div>
        <nav>
          <Link href={"/cart"}>
            <a className="mr-6 font-semibold text-base">Cart</a>
          </Link>
          <Link href={"/login"}>
            <a className=" font-semibold text-base">Login</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
