import { Hero } from "./_Components/hero";
import { Header } from "./_Components/header";
import { Barber } from "./_Components/barber";
import { Shop } from "./_Components/shop";

export default function Home() {

  return (
    <main>
      <Hero />
      <Header />
      <Barber />
      <Shop />
    </main>
    
  )
}