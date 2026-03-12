import Link from "next/link";
import { TextCarousel } from "./components/TextCarousel";
import { TextSplit } from "./components/TextSplit";
import { TextSquish } from "./components/TextSquish";
import { TextBold } from "./components/TextBold";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl p-10 flex flex-col gap-8 lg:py-[30vh] mx-auto font-sans">
      <ul className="font-mono text-lg">
        <li>
          <Link href={"https://github.com/Chipcord/hover-me-text"}>
            <TextCarousel text="source-code -&gt;" />
          </Link>
        </li>
        <li>Made with: Next.js, TypeScript, TailwindCSS, and Motion</li>
      </ul>
      <p className="text-justify text-lg">
        This is a small library of text components with visual effects on hover.
        They are all made with Motion, but can 100% be remade with gsap too. The
        code is 100% open source, so use it as you wish, but I&apos;m definitely
        not an expert in react components, so use them with caution 😅.
      </p>

      <TextCarousel text="hover me" />
      <TextSplit text="hover me" />
      <TextSquish text="hover me" />
      <TextBold text="hover me" />
    </main>
  );
}
