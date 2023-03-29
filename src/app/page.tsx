import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title from metadata!",
};

export default function Home() {
  return (
    <main>
      <div>NEXT.js 13.2</div>
    </main>
  );
}
