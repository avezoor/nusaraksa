import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { LanguageArchive } from "@/components/language-archive"
import { CultureCenter } from "@/components/culture-center"
import { InteractiveMap } from "@/components/interactive-map"
import { QRCodeSection } from "@/components/qr-code-section"
import { YouthCreativeSpace } from "@/components/youth-creative-space"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LanguageArchive />
      <CultureCenter />
      <InteractiveMap />
      <QRCodeSection />
      <YouthCreativeSpace />
      <Footer />
    </main>
  )
}
