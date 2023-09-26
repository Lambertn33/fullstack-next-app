import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
