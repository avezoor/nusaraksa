export interface MapLocation {
  id: number
  name: string
  category: string
  icon: string 
  position: { top: string; left: string }
  image: string
  description: string
  history: string
  etiquette: string
}

export interface MapCategory {
  id: string
  name: string
  color: string
}

export interface GoogleMapsEmbed {
  title: string
  embedUrl: string
}

export const mapCategories: MapCategory[] = [
  { id: "Pantai & Bahari", name: "Pantai & Bahari", color: "bg-chart-1" },
  { id: "Kampung Budaya", name: "Kampung Budaya", color: "bg-chart-2" },
  { id: "Spot Alam", name: "Spot Alam", color: "bg-chart-3" },
  { id: "Spot Sejarah", name: "Spot Sejarah", color: "bg-chart-4" },
]

export const mapLocations: MapLocation[] = [
  {
    id: 1,
    name: "Pantai Tanjung Kiras",
    category: "Pantai & Bahari",
    icon: "Waves",
    position: { top: "30%", left: "25%" },
    image: "/placeholder.svg?height=400&width=600",
    description: "Pantai dengan pasir putih dan air jernih kebiruan. Cocok untuk snorkeling dan menikmati sunset.",
    history:
      "Pantai ini dahulu merupakan tempat pendaratan nelayan dan hingga kini masih menjadi lokasi ritual laut tahunan.",
    etiquette: "Jaga kebersihan, hormati area ritual, dan hindari mengambil terumbu karang.",
  },
  {
    id: 2,
    name: "Kampung Adat Palasa",
    category: "Kampung Budaya",
    icon: "TreePine",
    position: { top: "45%", left: "55%" },
    image: "/placeholder.svg?height=400&width=600",
    description: "Kampung tradisional dengan rumah-rumah panggung khas Kangean dan tradisi yang masih terjaga.",
    history:
      "Kampung tertua di Kangean yang didirikan pada abad ke-16. Masyarakatnya masih menjalankan adat istiadat leluhur.",
    etiquette: "Mohon izin sebelum mengambil foto, berpakaian sopan, dan ikuti petunjuk pemandu lokal.",
  },
  {
    id: 3,
    name: "Bukit Cinta",
    category: "Spot Alam",
    icon: "Camera",
    position: { top: "20%", left: "70%" },
    image: "/placeholder.svg?height=400&width=600",
    description: "Puncak bukit dengan pemandangan spektakuler ke seluruh Kepulauan Kangean dan lautan lepas.",
    history: "Menurut legenda, bukit ini adalah tempat pertemuan sepasang kekasih yang terpisah oleh lautan.",
    etiquette: "Bawa perlengkapan mendaki yang memadai dan jangan membuang sampah sembarangan.",
  },
  {
    id: 4,
    name: "Pelabuhan Tradisional",
    category: "Spot Sejarah",
    icon: "Anchor",
    position: { top: "60%", left: "35%" },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Pelabuhan nelayan tradisional dengan perahu-perahu warna-warni dan suasana kehidupan pesisir autentik.",
    history: "Pelabuhan ini telah beroperasi sejak zaman kolonial dan menjadi jalur perdagangan penting di kawasan.",
    etiquette: "Hati-hati di area dermaga, hormati aktivitas nelayan, dan jangan menghalangi jalan perahu.",
  },
  {
    id: 5,
    name: "Goa Laut Kangean",
    category: "Spot Alam",
    icon: "Camera",
    position: { top: "75%", left: "60%" },
    image: "/placeholder.svg?height=400&width=600",
    description: "Goa alami di tebing laut dengan stalaktit dan stalagmit yang memukau serta air laut yang jernih.",
    history: "Goa ini dipercaya sebagai tempat pertapaan tokoh spiritual Kangean pada masa lampau.",
    etiquette: "Gunakan pemandu lokal, bawa alat penerangan, dan jangan menyentuh formasi batuan.",
  },
]

export const googleMapsEmbed: GoogleMapsEmbed = {
  title: "Lokasi Kepulauan Kangean",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99244.6453955652!2d115.38936594938586!3d-6.947654099862457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dda60cb7290745d%3A0xea896fc363a0da78!2sKepulauan%20Kangean!5e0!3m2!1sid!2sid!4v1766128155323!5m2!1sid!2sid",
}
