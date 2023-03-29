import Link from "next/link";
import React from "react";

export default function TOC() {
  //throw new Error("Je to rozbité...");
  return (
    <>
      <h2>Obsah</h2>
      <ul>
        <li><Link href="/q1">React, NEXT.js a Server-side rendering</Link></li>
        <li><Link href="/q2">NEXT.js 13 - struktura projektu a FS routing</Link></li>
        <li><Link href="/q3">Data fetching</Link></li>
        <li><Link href="/q4">SSR strategie a klientské komponenty</Link></li>
      </ul>
    </>
  );
}
