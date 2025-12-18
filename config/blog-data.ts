import { images } from "./images"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readingTime: string
}

// Blog post metadata - content is loaded from markdown files
// To add a new blog post:
// 1. Create a new .md file in content/blog/ folder
// 2. Add the metadata below with matching slug
const blogPostsMetadata: Omit<BlogPost, "content">[] = [
  {
    id: "1",
    slug: "keindahan-pantai-kangean",
    title: "Keindahan Tersembunyi Pantai-Pantai Kangean",
    excerpt: "Menjelajahi pesona pantai berpasir putih dan air jernih yang masih alami di Kepulauan Kangean.",
    author: "Ahmad Rifai",
    authorImage: images.authors.ahmadRifai,
    category: "Wisata Alam",
    tags: ["pantai", "wisata", "alam", "kangean"],
    image: images.blog.pantaiKangean,
    publishedAt: "2024-12-15",
    readingTime: "5 menit",
  },
  {
    id: "2",
    slug: "tradisi-petik-laut",
    title: "Tradisi Petik Laut: Ungkapan Syukur Nelayan Kangean",
    excerpt: "Mengenal lebih dekat ritual tahunan masyarakat pesisir Kangean sebagai bentuk penghormatan kepada laut.",
    author: "Siti Nurhaliza",
    authorImage: images.authors.sitiNurhaliza,
    category: "Tradisi",
    tags: ["tradisi", "budaya", "nelayan", "ritual"],
    image: images.blog.petikLaut,
    publishedAt: "2024-12-10",
    readingTime: "6 menit",
  },
  {
    id: "3",
    slug: "kuliner-khas-kangean",
    title: "5 Kuliner Khas Kangean yang Wajib Dicoba",
    excerpt: "Petualangan rasa melalui hidangan laut segar dan masakan tradisional Kepulauan Kangean.",
    author: "Budi Santoso",
    authorImage: images.authors.budiSantoso,
    category: "Kuliner",
    tags: ["kuliner", "makanan", "seafood", "tradisional"],
    image: images.blog.kuliner,
    publishedAt: "2024-12-05",
    readingTime: "4 menit",
  },
  {
    id: "4",
    slug: "kerajinan-anyaman-kangean",
    title: "Kerajinan Anyaman Kangean: Warisan yang Hampir Punah",
    excerpt: "Upaya pelestarian kerajinan anyaman tradisional dari serat alam yang menjadi identitas Kangean.",
    author: "Dewi Lestari",
    authorImage: images.authors.dewiLestari,
    category: "Kerajinan",
    tags: ["kerajinan", "anyaman", "budaya", "UMKM"],
    image: images.blog.anyaman,
    publishedAt: "2024-11-28",
    readingTime: "7 menit",
  },
  {
    id: "5",
    slug: "diving-kangean",
    title: "Surga Diving di Perairan Kangean",
    excerpt: "Eksplorasi bawah laut Kangean dengan terumbu karang yang masih perawan dan biodiversitas tinggi.",
    author: "Rizki Pratama",
    authorImage: images.authors.rizkiPratama,
    category: "Wisata Alam",
    tags: ["diving", "snorkeling", "laut", "wisata"],
    image: images.blog.diving,
    publishedAt: "2024-11-20",
    readingTime: "5 menit",
  },
  {
    id: "6",
    slug: "bahasa-kangean-pemula",
    title: "Belajar Bahasa Kangean untuk Pemula",
    excerpt: "Panduan dasar berbahasa Kangean untuk wisatawan yang ingin berinteraksi dengan masyarakat lokal.",
    author: "Hj. Aminah",
    authorImage: images.authors.hjAminah,
    category: "Bahasa",
    tags: ["bahasa", "belajar", "kosakata", "wisata"],
    image: images.blog.bahasaKangean,
    publishedAt: "2024-11-15",
    readingTime: "4 menit",
  },
]

const blogContents: Record<string, string> = {
  "keindahan-pantai-kangean": `
# Keindahan Tersembunyi Pantai-Pantai Kangean

Kepulauan Kangean menyimpan **keindahan pantai yang luar biasa** yang masih belum banyak terjamah wisatawan. Berbeda dengan pantai-pantai populer di Bali atau Lombok, pantai di Kangean menawarkan pengalaman yang lebih autentik dan tenang.

## Pantai Tanjung Kiaok

Pantai Tanjung Kiaok merupakan salah satu destinasi favorit warga lokal. Dengan pasir putih yang lembut dan air laut yang jernih kebiruan, pantai ini sempurna untuk:

- Berenang dan snorkeling
- Menikmati sunset yang memukau
- Piknik bersama keluarga

## Pantai Siring Kembar

Pantai ini terkenal dengan formasi batu karangnya yang unik. Pengunjung dapat melihat:

1. Gua-gua kecil di tebing karang
2. Kolam alami saat air surut
3. Pemandangan matahari terbit yang spektakuler

> "Keindahan alam Kangean adalah hadiah yang harus kita jaga bersama." - Pak Hasan, nelayan lokal

## Tips Berkunjung

Waktu terbaik untuk mengunjungi pantai-pantai Kangean adalah pada **bulan April hingga Oktober** saat cuaca cerah dan ombak tenang. Pastikan membawa:

- Tabir surya
- Air minum yang cukup
- Kamera untuk mengabadikan momen

Selamat menjelajah keindahan Kangean!
  `,
  "tradisi-petik-laut": `
# Tradisi Petik Laut: Ungkapan Syukur Nelayan Kangean

**Petik Laut** atau yang dalam bahasa Kangean disebut *Rokat Tasse'* adalah tradisi tahunan yang telah dilakukan masyarakat Kepulauan Kangean sejak ratusan tahun lalu.

## Makna Tradisi

Tradisi ini memiliki makna mendalam bagi masyarakat nelayan:

- **Syukur** atas hasil tangkapan laut selama setahun
- **Permohonan** keselamatan untuk tahun mendatang
- **Penghormatan** kepada laut sebagai sumber kehidupan

## Rangkaian Acara

### Persiapan (3 hari sebelum)

Masyarakat bergotong-royong menyiapkan:

1. Perahu sesaji yang dihias indah
2. Berbagai sesaji dari hasil bumi dan laut
3. Panggung untuk pertunjukan seni

### Hari Pelaksanaan

Acara dimulai sejak pagi dengan:

- Doa bersama dipimpin tokoh adat
- Prosesi arak-arakan perahu
- Pelarung sesaji ke tengah laut
- Pertunjukan musik dan tari tradisional

> "Laut telah memberi kami segalanya. Petik Laut adalah cara kami berterima kasih." - Mbah Suto, Tetua Kampung

## Kapan Dilaksanakan?

Tradisi ini biasanya dilaksanakan pada **bulan Syawal** atau sekitar 1-2 minggu setelah Idul Fitri, bertepatan dengan musim ikan melimpah.

Bagi wisatawan yang ingin menyaksikan tradisi ini, disarankan untuk:

- Menghubungi pemandu lokal
- Menghormati prosesi adat
- Berpakaian sopan
  `,
  "kuliner-khas-kangean": `
# 5 Kuliner Khas Kangean yang Wajib Dicoba

Berkunjung ke Kangean tidak lengkap tanpa mencicipi **kuliner khasnya** yang kaya akan cita rasa laut dan rempah tradisional.

## 1. Sate Ikan Tuna

Sate ikan tuna Kangean berbeda dari yang lain. Daging tuna segar dipotong besar, dibumbui dengan:

- Kecap manis
- Cabai rawit
- Air asam jawa
- Bawang merah

Dibakar dengan arang kelapa hingga harum!

## 2. Nasi Jagung Campur

Makanan pokok tradisional yang terbuat dari:

1. Jagung setengah giling
2. Dicampur dengan nasi putih
3. Disajikan dengan lauk ikan goreng dan sambal terasi

## 3. Rujak Sotong

Rujak segar dengan potongan sotong (cumi-cumi) yang dimasak setengah matang, dicampur dengan:

- Mangga muda
- Nanas
- Bumbu rujak pedas manis

> "Rasanya segar dan unik, perpaduan manis, asam, pedas dalam satu gigitan!" - Pengunjung dari Surabaya

## 4. Pepes Ikan Kerapu

Ikan kerapu segar dibumbui lengkap lalu dibungkus daun pisang dan dikukus. Aromanya yang harum membuat nafsu makan bertambah.

## 5. Es Kelapa Muda Gula Aren

Minuman penyegar khas Kangean dengan:

- Air kelapa muda segar
- Daging kelapa lembut
- Gula aren cair
- Es batu

## Dimana Mencicipinya?

Kuliner-kuliner ini dapat ditemukan di:

- **Pasar Tradisional Arjasa** (pagi hari)
- **Warung Makan Pesisir** sepanjang pantai
- **Festival Kuliner Kangean** (diadakan setahun sekali)

Selamat menikmati!
  `,
  "kerajinan-anyaman-kangean": `
# Kerajinan Anyaman Kangean: Warisan yang Hampir Punah

Di tengah modernisasi, **kerajinan anyaman tradisional** Kangean berjuang untuk tetap lestari. Artikel ini mengulas sejarah, proses, dan upaya pelestariannya.

## Sejarah Singkat

Kerajinan anyaman Kangean telah ada sejak **abad ke-15**, dibawa oleh pedagang dari Sulawesi. Awalnya, anyaman dibuat untuk:

- Keranjang ikan nelayan
- Tikar duduk
- Topi pelindung matahari

## Bahan Baku

Pengrajin menggunakan bahan alami seperti:

1. **Daun pandan** - untuk tikar dan tas
2. **Serat gebang** - untuk tali dan jaring
3. **Bambu** - untuk keranjang besar

## Proses Pembuatan

### Persiapan Bahan (2-3 hari)

- Daun dijemur hingga kering
- Direndam untuk melunakkan
- Dipotong sesuai ukuran

### Penganyaman (3-7 hari)

Teknik anyaman khas Kangean memiliki pola:

- **Anyam Susun** - pola dasar
- **Anyam Kepang** - pola diagonal
- **Anyam Bunga** - pola dekoratif

> "Setiap anyaman menyimpan cerita. Pola tertentu hanya boleh dibuat untuk acara khusus." - Ibu Fatimah, pengrajin senior

## Tantangan Saat Ini

Kerajinan ini menghadapi beberapa tantangan:

- Generasi muda kurang berminat
- Kalah saing dengan produk pabrik
- Bahan baku semakin sulit didapat

## Upaya Pelestarian

Beberapa inisiatif telah dilakukan:

1. **Workshop** untuk anak muda
2. **Koperasi pengrajin** untuk pemasaran
3. **Festival anyaman** tahunan
4. **Kerjasama dengan UMKM** lokal

Mari dukung pelestarian warisan budaya ini!
  `,
  "diving-kangean": `
# Surga Diving di Perairan Kangean

Perairan Kangean menyimpan **kekayaan bawah laut** yang luar biasa. Dengan visibilitas hingga 30 meter dan terumbu karang yang sehat, ini adalah surga bagi penyelam.

## Spot Diving Terbaik

### 1. Karang Mamburit

Kedalaman: 10-25 meter

Highlight:
- Terumbu karang keras yang masih utuh
- School of barracuda
- Penyu hijau

### 2. Tanjung Saor

Kedalaman: 15-35 meter

Highlight:
- Wall diving spektakuler
- Soft coral berwarna-warni
- Manta ray (musiman)

### 3. Pulau Sapudi

Kedalaman: 5-20 meter

Highlight:
- Cocok untuk pemula
- Nemo (ikan badut) berlimpah
- Karang brain coral raksasa

## Waktu Terbaik

| Bulan | Kondisi | Highlight |
|-------|---------|-----------|
| Apr-Jun | Sangat Baik | Manta ray |
| Jul-Sep | Baik | Whale shark |
| Okt-Nov | Cukup | Spawning coral |

> "Ini seperti diving di Raja Ampat, tapi tanpa keramaian!" - Diving instructor internasional

## Informasi Praktis

### Dive Center

Saat ini terdapat 2 dive center di Kangean:

1. **Kangean Dive** - Arjasa
2. **Blue Ocean Diving** - Tanjung Kiaok

### Harga

- Fun dive: Rp 500.000/dive
- Open water course: Rp 5.000.000

### Yang Harus Diperhatikan

- Bawa sertifikat diving
- Jangan menyentuh terumbu karang
- Gunakan sunscreen ramah laut

Selamat menyelam!
  `,
  "bahasa-kangean-pemula": `
# Belajar Bahasa Kangean untuk Pemula

Mempelajari **sedikit bahasa lokal** akan membuat perjalanan Anda lebih bermakna dan dihargai oleh masyarakat setempat.

## Tentang Bahasa Kangean

Bahasa Kangean (*Bĕsa Kangéan*) adalah:

- Bagian dari rumpun bahasa Austronesia
- Berkerabat dengan bahasa Madura
- Memiliki kosakata unik dari interaksi maritim

## Sapaan Dasar

| Kangean | Indonesia |
|---------|-----------|
| Arapa kabar? | Apa kabar? |
| Salamat agi | Selamat pagi |
| Tarema kasé | Terima kasih |
| Dâ'dhâ' | Sampai jumpa |

## Kalimat Berguna

### Di Pasar

- **"Saporapa argéna?"** - Berapa harganya?
- **"Ghâbây sè néka"** - Saya mau yang ini
- **"Bisa korang?"** - Bisa kurang?

### Di Restoran

- **"Bhuko'a aéng"** - Minta air
- **"Peddhes sè néka?"** - Ini pedas?
- **"Enak sè néka!"** - Ini enak!

### Bertanya Arah

- **"Dimma jalanna ka...?"** - Dimana jalan ke...?
- **"Jâu ta'?"** - Jauh tidak?
- **"Saporapa laon?"** - Berapa lama?

## Tips Pengucapan

1. **â** dibaca seperti "a" dalam "sama"
2. **é** dibaca seperti "e" dalam "enak"
3. **dh** dibaca dengan lidah di gigi

> "Wisatawan yang mencoba berbahasa Kangean selalu disambut dengan senyum lebar!" - Pemandu lokal

## Latihan

Coba ucapkan:

1. "Salamat agi, arapa kabar?"
2. "Tarema kasé, dâ'dhâ'!"
3. "Saporapa argéna jhuko' néka?"

Selamat belajar!
  `,
}

// Combine metadata with content
export const blogPosts: BlogPost[] = blogPostsMetadata.map((post) => ({
  ...post,
  content: blogContents[post.slug] || "",
}))

export const blogCategories = ["Semua", "Wisata Alam", "Tradisi", "Kuliner", "Kerajinan", "Bahasa"]

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
