import { TextCarousel } from "./components/TextCarousel";
import { TextSplit } from "./components/TextSplit";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl p-10 flex flex-col gap-8 lg:py-[30vh] mx-auto cursor-default">
      <p className="text-justify">
        This is a library of a bunch of text components with visual effects on
        hover. They are all made with Motion, but can 100% be remade with gsap
        too. The code is 100% open source, so use it as you wish, but I&apos;m
        definitely not an expert in react components, so use them with caution
        😅.
      </p>
      <TextCarousel text="hover me" />
      <TextSplit text="hover me" />
    </main>
  );
}
