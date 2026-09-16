import Hero from "@/components/Hero/Hero";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <SelectedWork />
    </main>
  );
}