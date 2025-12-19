export type MediaType = "photo" | "video"

export interface GalleryItem {
  id: number
  type: MediaType
  title: string
  author: string
  media: string 
  likes: number
  comments: number
  excerpt?: string
}

export interface Activity {
  id: number
  title: string
  date: string
  image: string
  description: string
}

export interface UMKMProduct {
  id: number
  name: string
  price: string
  seller: string
  image: string
  description: string
  contact: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "photo",
    title: "Sunset di Pantai Kangean",
    author: "Ahmad Fauzi",
    media: "/placeholder.svg?height=400&width=600",
    likes: 234,
    comments: 18,
  },
  {
    id: 2,
    type: "photo",
    title: "Kehidupan Nelayan",
    author: "Siti Aisyah",
    media: "/placeholder.svg?height=400&width=600",
    likes: 189,
    comments: 12,
  },
  {
    id: 3,
    type: "video",
    title: "Tarian Tradisional Kangean",
    author: "Muh. Rizki",
    media: "/placeholder.svg?height=400&width=600",
    likes: 412,
    comments: 45,
  },
  {
    id: 4,
    type: "photo",
    title: "Pasar Pagi Kangean",
    author: "Dewi Lestari",
    media: "/placeholder.svg?height=400&width=600",
    likes: 156,
    comments: 8,
  },
  {
    id: 5,
    type: "video",
    title: "Dokumentasi Ritual Petik Laut",
    author: "Fadila Nur",
    media: "/placeholder.svg?height=400&width=600",
    likes: 298,
    comments: 32,
  },
  {
    id: 6,
    type: "photo",
    title: "Anak-anak Pesisir",
    author: "Hasan Abdullah",
    media: "/placeholder.svg?height=400&width=600",
    likes: 367,
    comments: 28,
  },
]

export const activities: Activity[] = [
  {
    id: 1,
    title: "Festival Budaya Kangean 2024",
    date: "15 Agustus 2024",
    image: "/placeholder.svg?height=400&width=600",
    description: "Festival tahunan yang menampilkan seni dan budaya Kangean dengan berbagai pertunjukan tradisional.",
  },
  {
    id: 2,
    title: "Aksi Bersih Pantai",
    date: "22 April 2024",
    image: "/placeholder.svg?height=400&width=600",
    description: "Kegiatan gotong royong membersihkan pantai yang diikuti oleh ratusan pemuda Kangean.",
  },
  {
    id: 3,
    title: "Workshop Anyaman Tradisional",
    date: "10 Juni 2024",
    image: "/placeholder.svg?height=400&width=600",
    description: "Pelatihan kerajinan anyaman tradisional untuk melestarikan keterampilan lokal.",
  },
]

export const umkmProducts: UMKMProduct[] = [
  {
    id: 1,
    name: "Kerupuk Ikan Kangean",
    price: "Rp 25.000",
    seller: "Bu Aminah",
    image: "/placeholder.svg?height=400&width=600",
    description: "Kerupuk ikan khas Kangean, dibuat dari ikan segar hasil tangkapan nelayan lokal.",
    contact: "+62 812-3456-7890",
  },
  {
    id: 2,
    name: "Anyaman Tas Pandan",
    price: "Rp 150.000",
    seller: "Ibu Sari Craft",
    image: "/placeholder.svg?height=400&width=600",
    description: "Tas anyaman dari daun pandan, dibuat dengan teknik tradisional turun-temurun.",
    contact: "+62 813-4567-8901",
  },
  {
    id: 3,
    name: "Terasi Kangean",
    price: "Rp 35.000",
    seller: "Pak Mahmud",
    image: "/placeholder.svg?height=400&width=600",
    description: "Terasi premium khas Kangean dengan cita rasa autentik dari udang segar.",
    contact: "+62 815-6789-0123",
  },
  {
    id: 4,
    name: "Kerajinan Kerang",
    price: "Rp 75.000",
    seller: "Pak Hasan",
    image: "/placeholder.svg?height=400&width=600",
    description: "Hiasan dan souvenir dari kerang asli yang dibuat dengan detail sempurna.",
    contact: "+62 816-7890-1234",
  },
]
