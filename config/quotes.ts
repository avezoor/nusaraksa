export const quotes = [
  {
    text: "Budaya adalah cerminan jiwa bangsa yang menghubungkan masa lalu dengan masa depan.",
    author: "NusaRaksa",
  },
  {
    text: "Setiap tradisi menyimpan kebijaksanaan nenek moyang yang patut kita jaga dan lestarikan.",
    author: "NusaRaksa",
  },
  {
    text: "Pariwisata berkelanjutan adalah kunci untuk menjaga kekayaan alam dan budaya kita.",
    author: "NusaRaksa",
  },
  {
    text: "Generasi muda adalah harapan dalam melestarikan warisan budaya Nusantara.",
    author: "NusaRaksa",
  },
  {
    text: "Kepulauan Kangean menyimpan cerita, budaya, dan keindahan yang menginspirasi.",
    author: "NusaRaksa",
  },
  {
    text: "Dalam setiap bahasa lokal terkandung pengetahuan dan nilai-nilai universal.",
    author: "NusaRaksa",
  },
  {
    text: "Melestarikan budaya adalah melestarikan identitas dan kebanggaan kita.",
    author: "NusaRaksa",
  },
  {
    text: "Wisata yang berkelanjutan adalah investasi untuk generasi mendatang.",
    author: "NusaRaksa",
  },
  {
    text: "Setiap kerajinan lokal adalah karya seni yang mencerminkan dedikasi dan kreativitas.",
    author: "NusaRaksa",
  },
  {
    text: "Masyarakat adat adalah penjaga pengetahuan tradisional yang tak ternilai harganya.",
    author: "NusaRaksa",
  },
]

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
