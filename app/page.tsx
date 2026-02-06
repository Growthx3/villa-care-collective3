import Header from '@/components/Header';
import HeroModule from '@/components/HeroModule';
import StatementModule from '@/components/StatementModule';
import PillarScroll from '@/components/PillarScroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background selection:bg-accent/20">
      <Header />
      <HeroModule />
      <StatementModule />
      <PillarScroll />
      <Footer />
    </main>
  );
}
