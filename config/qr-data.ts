export interface QRFeature {
  icon: string
  title: string
  description: string
}

export interface QRLocation {
  name: string
  type: string
}

export interface QRCode {
  id: number
  location: string
  image: string
  url?: string
}

export const qrFeatures: QRFeature[] = [
  {
    icon: "Book",
    title: "Sejarah & Budaya",
    description: "Penjelasan lengkap tentang sejarah dan makna budaya lokasi",
  },
  {
    icon: "MapPin",
    title: "Cerita Lokal",
    description: "Cerita rakyat dan legenda yang berkaitan dengan tempat tersebut",
  },
  {
    icon: "Camera",
    title: "Dokumentasi Visual",
    description: "Foto dan video dokumentasi singkat dari lokasi",
  },
]

export const qrLocations: QRLocation[] = [
  { name: "Pantai Tanjung Kiras", type: "Wisata Bahari" },
  { name: "Kampung Adat Palasa", type: "Kampung Budaya" },
  { name: "Pelabuhan Tradisional", type: "Spot Sejarah" },
  { name: "Bukit Cinta", type: "Spot Alam" },
]

export const qrCodes: QRCode[] = [
  {
    id: 1,
    location: "Kepulauan Kangean",
    image: "/placeholder.svg?height=200&width=200",
  },
]
