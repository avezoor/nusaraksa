export interface CultureContent {
  id: number
  category: string
  icon: string 
  title: string
  description: string
  image: string
  fullContent: string
}

export interface CultureCategory {
  id: string
  name: string
  icon: string 
}

export const cultureCategories: CultureCategory[] = [
  { id: "all", name: "Semua", icon: "BookOpen" },
  { id: "Cerita Rakyat", name: "Cerita Rakyat", icon: "Pencil" },
  { id: "Sejarah Lokal", name: "Sejarah Lokal", icon: "History" },
  { id: "Tradisi Laut", name: "Tradisi Laut", icon: "Anchor" },
]

export const culturalContent: CultureContent[] = [
  {
    id: 1,
    category: "Cerita Rakyat",
    icon: "BookOpen",
    title: "Legenda Putri Kangean",
    description: "Kisah seorang putri yang menjaga keseimbangan laut dan daratan di Kepulauan Kangean.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Dikisahkan pada zaman dahulu, terdapat seorang putri bernama Dewi Kangean yang hidup di sebuah kerajaan kecil di tengah lautan. Ia memiliki kemampuan untuk berkomunikasi dengan makhluk laut dan menjaga keseimbangan alam. Setiap tahun, ia melakukan ritual untuk memastikan hasil tangkapan nelayan melimpah dan cuaca mendukung pelayaran. Hingga kini, masyarakat Kangean masih mempercayai keberadaan roh putri yang menjaga pulau mereka.",
  },
  {
    id: 2,
    category: "Cerita Rakyat",
    icon: "BookOpen",
    title: "Asal Usul Pulau Sepanjang",
    description: "Legenda terbentuknya Pulau Sepanjang dari seekor naga laut yang tertidur.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Konon, Pulau Sepanjang terbentuk dari seekor naga laut raksasa yang tertidur lelap setelah menjaga lautan dari badai besar. Tubuhnya yang membentang menjadi daratan panjang yang kini disebut Pulau Sepanjang. Para nelayan percaya bahwa naga tersebut masih hidup dan melindungi mereka dari bahaya laut. Ritual persembahan dilakukan setiap tahun sebagai bentuk penghormatan.",
  },
  {
    id: 3,
    category: "Sejarah Lokal",
    icon: "History",
    title: "Kampung Nelayan Arjasa",
    description: "Sejarah kampung nelayan tertua di Kangean yang menjadi pusat perdagangan hasil laut.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Kampung Arjasa merupakan salah satu pemukiman tertua di Kepulauan Kangean. Didirikan pada abad ke-17, kampung ini menjadi pusat perdagangan ikan dan hasil laut. Rumah-rumah panggung tradisional masih dapat ditemukan di sepanjang pesisir. Masyarakat Arjasa terkenal dengan teknik penangkapan ikan turun-temurun dan kerajinan anyaman jaring dari serat alami.",
  },
  {
    id: 4,
    category: "Sejarah Lokal",
    icon: "History",
    title: "Pelabuhan Kuno Kalianget",
    description: "Jejak pelabuhan kuno yang menjadi jalur perdagangan maritim Nusantara.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Pelabuhan Kalianget pernah menjadi salah satu pelabuhan penting dalam jalur perdagangan maritim Nusantara. Pada masa kejayaannya, pelabuhan ini ramai dikunjungi pedagang dari berbagai daerah. Berbagai komoditas seperti garam, ikan kering, dan rempah-rempah diperdagangkan di sini. Sisa-sisa bangunan kolonial dan gudang tua masih dapat ditemukan di sekitar area pelabuhan.",
  },
  {
    id: 5,
    category: "Tradisi Laut",
    icon: "Anchor",
    title: "Petik Laut Kangean",
    description: "Ritual tahunan nelayan sebagai ungkapan syukur atas hasil laut yang melimpah.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Petik Laut adalah ritual tahunan yang dilakukan masyarakat Kangean sebagai bentuk syukur kepada Tuhan dan penghormatan kepada laut. Dalam ritual ini, sesaji berupa hasil bumi dan laut dihanyutkan ke tengah laut menggunakan perahu yang dihias indah. Acara ini biasanya diiringi dengan pertunjukan seni tradisional, doa bersama, dan makan bersama seluruh warga kampung.",
  },
  {
    id: 6,
    category: "Tradisi Laut",
    icon: "Anchor",
    title: "Teknik Jaring Tradisional",
    description: "Kearifan lokal dalam membuat dan menggunakan jaring ikan secara berkelanjutan.",
    image: "/placeholder.svg?height=400&width=600",
    fullContent:
      "Nelayan Kangean memiliki teknik pembuatan jaring yang diwariskan turun-temurun. Jaring dibuat dari serat alami yang dianyam dengan pola khusus untuk menangkap jenis ikan tertentu. Teknik ini tidak hanya efektif tetapi juga ramah lingkungan karena menggunakan lubang jaring yang memungkinkan ikan kecil lolos. Pengetahuan ini menjadi bagian penting dari pariwisata berkelanjutan Kangean.",
  },
]
