export interface VocabularyWord {
  id: string
  kangean: string
  indonesian: string
  example: string
}

export interface VocabularyCategory {
  id: string
  name: string
  icon: string
  words: VocabularyWord[]
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "salam",
    name: "Salam & Sapaan",
    icon: "👋",
    words: [
      { id: "s1", kangean: "Arapa kabar?", indonesian: "Apa kabar?", example: "Arapa kabar, Mak?" },
      { id: "s2", kangean: "Salamat agi", indonesian: "Selamat pagi", example: "Salamat agi, Pak Guru" },
      { id: "s3", kangean: "Salamat malem", indonesian: "Selamat malam", example: "Salamat malem, Ma'" },
      { id: "s4", kangean: "Tarema kasé", indonesian: "Terima kasih", example: "Tarema kasé la' bantoanah" },
      { id: "s5", kangean: "Dâ'dhâ'", indonesian: "Sampai jumpa", example: "Dâ'dhâ', Mon!" },
      { id: "s6", kangean: "Mangga", indonesian: "Silakan", example: "Mangga, masokan!" },
      { id: "s7", kangean: "Sapora", indonesian: "Maaf", example: "Sapora, kula telat" },
      { id: "s8", kangean: "Énjâ'", indonesian: "Iya", example: "Énjâ', bener" },
      { id: "s9", kangean: "Enja'", indonesian: "Tidak", example: "Enja', ta' bisa" },
      { id: "s10", kangean: "Saporana", indonesian: "Permisi", example: "Saporana, badha jalan" },
      { id: "s11", kangean: "Bade dimma?", indonesian: "Mau kemana?", example: "Bade dimma, Kak?" },
      { id: "s12", kangean: "Moleh", indonesian: "Pulang", example: "Kula moleh disit" },
    ],
  },
  {
    id: "keluarga",
    name: "Anggota Keluarga",
    icon: "👨‍👩‍👧‍👦",
    words: [
      { id: "k1", kangean: "Empa'", indonesian: "Ayah", example: "Empa' ngakan la' sawah" },
      { id: "k2", kangean: "Ebhu", indonesian: "Ibu", example: "Ebhu masak nase'" },
      { id: "k3", kangean: "Kaka'", indonesian: "Kakak", example: "Kaka' ngaji la' langgar" },
      { id: "k4", kangean: "Adhi'", indonesian: "Adik", example: "Adhi' maen la' dhâlem" },
      { id: "k5", kangean: "Mbah kakong", indonesian: "Kakek", example: "Mbah kakong moleh la' Kangéan" },
      { id: "k6", kangean: "Mbah putri", indonesian: "Nenek", example: "Mbah putri nganyam tikar" },
      { id: "k7", kangean: "Paman", indonesian: "Paman", example: "Paman nelayan" },
      { id: "k8", kangean: "Bibi", indonesian: "Bibi", example: "Bibi jualan la' pasar" },
      { id: "k9", kangean: "Sapopo", indonesian: "Sepupu", example: "Sapopo kula la' Surabaya" },
      { id: "k10", kangean: "Mantu", indonesian: "Menantu", example: "Mantu anyar" },
      { id: "k11", kangean: "Mertua", indonesian: "Mertua", example: "Mertua sayang" },
      { id: "k12", kangean: "Cucu", indonesian: "Cucu", example: "Cucu maen" },
    ],
  },
  {
    id: "aktivitas",
    name: "Aktivitas Sehari-hari",
    icon: "🏃",
    words: [
      { id: "a1", kangean: "Ngakan", indonesian: "Makan", example: "Bâri' ngakan dhisit" },
      { id: "a2", kangean: "Ngenum", indonesian: "Minum", example: "Ngenum aéng sager" },
      { id: "a3", kangean: "Tédhung", indonesian: "Tidur", example: "Waktona tédhung" },
      { id: "a4", kangean: "Nyapcap", indonesian: "Berbicara", example: "Ayo nyapcap la' sana" },
      { id: "a5", kangean: "Ajhâlân", indonesian: "Berjalan", example: "Ajhâlân ka pasar" },
      { id: "a6", kangean: "Alako", indonesian: "Bekerja", example: "Empa' alako la' tassé'" },
      { id: "a7", kangean: "Maen", indonesian: "Bermain", example: "Adhi' maen bal" },
      { id: "a8", kangean: "Ngaji", indonesian: "Mengaji", example: "Ngaji la' langgar" },
      { id: "a9", kangean: "Masak", indonesian: "Memasak", example: "Ebhu masak enak" },
      { id: "a10", kangean: "Nyabun", indonesian: "Mencuci", example: "Nyabun pakéan" },
      { id: "a11", kangean: "Nyapo", indonesian: "Menyapu", example: "Nyapo latar" },
      { id: "a12", kangean: "Belanjha", indonesian: "Belanja", example: "Belanjha la' toko" },
      { id: "a13", kangean: "Nolés", indonesian: "Menulis", example: "Nolés surat" },
      { id: "a14", kangean: "Maca", indonesian: "Membaca", example: "Maca buku" },
    ],
  },
  {
    id: "alam",
    name: "Alam & Laut",
    icon: "🌊",
    words: [
      { id: "l1", kangean: "Tassé'", indonesian: "Laut", example: "Tassé' tenggi ari néka" },
      { id: "l2", kangean: "Pèrao", indonesian: "Perahu", example: "Pèrao jhukong la' pelabuan" },
      { id: "l3", kangean: "Jhuko'", indonesian: "Ikan", example: "Nangkep jhuko' la' tassé'" },
      { id: "l4", kangean: "Pasér", indonesian: "Pasir", example: "Pasér poté la' pantai" },
      { id: "l5", kangean: "Omba'", indonesian: "Ombak", example: "Omba' rajâ ari néka" },
      { id: "l6", kangean: "Alas", indonesian: "Hutan", example: "Alas lebat" },
      { id: "l7", kangean: "Gunong", indonesian: "Gunung", example: "Gunong tenggi" },
      { id: "l8", kangean: "Songai", indonesian: "Sungai", example: "Songai jernih" },
      { id: "l9", kangean: "Bintang", indonesian: "Bintang", example: "Bintang terang" },
      { id: "l10", kangean: "Bulan", indonesian: "Bulan", example: "Bulan purnama" },
      { id: "l11", kangean: "Mata ari", indonesian: "Matahari", example: "Mata ari panas" },
      { id: "l12", kangean: "Ojan", indonesian: "Hujan", example: "Ojan deres" },
      { id: "l13", kangean: "Angin", indonesian: "Angin", example: "Angin kencang" },
      { id: "l14", kangean: "Karang", indonesian: "Karang", example: "Karang la' tassé'" },
    ],
  },
]

export function shuffleWords(words: VocabularyWord[]): VocabularyWord[] {
  const shuffled = [...words]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
