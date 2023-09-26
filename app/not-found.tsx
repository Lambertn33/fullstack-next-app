import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>The Page you are looking for doesnt exist</p>
      <p>Go to <Link href="/" className="text-primary">Home Page</Link></p>
    </main>
  );
};

export default NotFound;
