import Link from "next/link";
import React from "react";

export default function about() {
  const name = "John";

  return (
    <div>
      <h1>About page</h1>
      <p>File-based routing</p>
      <p>JSX</p>
      <p>Hello {name}</p>

      <Link href="https://www.mongodb.com/">
        <div>
          <img src="images/mongo.jpg"></img>
        </div>
      </Link>
      <Link href="https://tailwindcss.com/">
        <div>
          <img src="images/tawilwind.jpg"></img>
        </div>
      </Link>
      <Link href="https://nextjs.org/">
        <div>
          <img src="images/nextreact.jpg"></img>
        </div>
      </Link>
    </div>
  );
}
