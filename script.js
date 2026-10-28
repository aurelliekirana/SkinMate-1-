// SkinMate — basis pengetahuan sistem pakar skincare
const skincareDB = {
  Berminyak: {
    Jerawat: { analisis: "Produksi sebum yang tinggi dapat bercampur dengan sel kulit mati dan menyumbat pori. Rutinitas lembut dan konsisten dapat membantu merawat kulit yang rentan berjerawat.", kandungan: ["Salicylic Acid (BHA)", "Niacinamide", "Benzoyl Peroxide"], produk: ["COSRX Salicylic Acid Cleanser", "Somethinc Acne Shot", "Skintific Panthenol Gel"] },
    "Komedo & pori tersumbat": { analisis: "Komedo dapat muncul saat minyak dan sel kulit mati menumpuk di pori. Hindari memencet komedo dan perkenalkan bahan eksfoliasi secara bertahap sesuai toleransi kulit.", kandungan: ["Salicylic Acid (BHA)", "Niacinamide", "Adapalene (konsultasikan dahulu)"], produk: ["Paula's Choice 2% BHA Liquid", "The Ordinary Niacinamide", "Pembersih wajah lembut non-komedogenik"] },
    "Minyak berlebih": { analisis: "Kulit tampak mengilap ketika produksi sebum meningkat. Pelembap ringan dan sunscreen berlabel non-komedogenik dapat membantu menjaga rutinitas tetap nyaman; kulit tetap membutuhkan kelembapan.", kandungan: ["Niacinamide", "Glycerin", "Zinc PCA"], produk: ["Pelembap gel ringan", "Sunscreen oil-free", "Pembersih wajah lembut"] },
    Kusam: { analisis: "Kulit kusam dapat dipengaruhi penumpukan sel kulit mati, paparan matahari, dan faktor lingkungan. Prioritaskan sunscreen harian dan hindari eksfoliasi berlebihan.", kandungan: ["Vitamin C", "Niacinamide", "Alpha Arbutin"], produk: ["Garnier Vitamin C Serum", "Whitelab Niacinamide", "Azarine Sunscreen Gel"] },
    "Bekas jerawat": { analisis: "Bekas jerawat berupa noda warna dapat memudar secara bertahap, tetapi membutuhkan waktu. Sunscreen membantu mencegah noda semakin gelap; jangan menggabungkan banyak bahan aktif sekaligus.", kandungan: ["Azelaic Acid", "Niacinamide", "Sunscreen SPF 30+"], produk: ["Serum niacinamide", "Pelembap non-komedogenik", "Sunscreen spektrum luas"] }
  },
  Kering: {
    Dehidrasi: { analisis: "Kulit dapat terasa tertarik saat kekurangan air. Gunakan pembersih lembut dan pelembap yang membantu menarik serta mempertahankan kelembapan.", kandungan: ["Hyaluronic Acid", "Ceramide", "Glycerin"], produk: ["Hada Labo Gokujyun", "Skintific 5X Ceramide", "The Ordinary Hyaluronic Acid 2%"] },
    "Kulit bersisik": { analisis: "Sisik dan tekstur kasar bisa berkaitan dengan kulit sangat kering atau iritasi. Hindari scrub dan eksfoliasi saat kulit sedang mengelupas, lalu fokus pada pelembap sederhana.", kandungan: ["Ceramide", "Glycerin", "Petrolatum"], produk: ["Pelembap ceramide", "Krim pelembap tanpa pewangi", "Pembersih lembut"] },
    "Terasa tertarik": { analisis: "Rasa tertarik setelah mencuci wajah dapat menjadi tanda pembersih terlalu kuat atau kelembapan kulit kurang terjaga. Pilih pembersih lembut dan gunakan pelembap setelah mencuci wajah.", kandungan: ["Ceramide", "Squalane", "Panthenol"], produk: ["Pembersih low-pH", "Pelembap ceramide", "Krim dengan squalane"] },
    Kusam: { analisis: "Pada kulit kering, permukaan yang kurang lembap dapat membuat wajah terlihat kusam. Perbaiki hidrasi dan gunakan sunscreen secara rutin sebelum mencoba bahan pencerah.", kandungan: ["Glycerin", "Niacinamide", "Sunscreen SPF 30+"], produk: ["Hada Labo Gokujyun", "Pelembap dengan niacinamide", "Sunscreen pelembap"] },
    "Garis halus": { analisis: "Garis halus bisa tampak lebih jelas ketika kulit kurang lembap. Pelembap dan perlindungan matahari merupakan langkah dasar; hasil tiap orang dapat berbeda.", kandungan: ["Hyaluronic Acid", "Ceramide", "Sunscreen SPF 30+"], produk: ["Serum hyaluronic acid", "Krim ceramide", "Sunscreen spektrum luas"] },
    Jerawat: { analisis: "Jerawat tetap bisa muncul pada kulit kering, terutama bila kulit iritasi atau kelembapan kurang terjaga. Pilih bahan anti-jerawat yang lembut, mulai bertahap, dan jangan lewatkan pelembap agar skin barrier tidak semakin terganggu.", kandungan: ["Niacinamide", "Azelaic Acid", "Ceramide"], produk: ["Serum niacinamide", "Pelembap ceramide", "Pembersih lembut"] }
  },
  Kombinasi: {
    "Pori-pori besar (T-zone)": { analisis: "Area dahi, hidung, dan dagu dapat menghasilkan lebih banyak minyak dibanding pipi. Fokuskan bahan pengontrol minyak pada area tersebut dan tetap lembapkan bagian yang terasa kering.", kandungan: ["Niacinamide", "Salicylic Acid (BHA)", "Zinc PCA"], produk: ["Paula's Choice BHA Liquid", "Whitelab Niacinamide", "Pelembap gel ringan"] },
    "Komedo di hidung": { analisis: "Komedo di hidung umum terjadi karena pori terisi minyak dan sel kulit mati. Hindari strip atau memencet terlalu sering; bahan eksfoliasi dapat dicoba perlahan jika kulit toleran.", kandungan: ["Salicylic Acid (BHA)", "Niacinamide", "Glycerin"], produk: ["Pembersih lembut", "BHA dengan pemakaian bertahap", "Pelembap ringan"] },
    "Pipi terasa kering": { analisis: "Kulit kombinasi dapat memiliki area yang berminyak dan area yang lebih kering secara bersamaan. Gunakan pelembap berbeda tekstur atau aplikasikan lebih banyak pada pipi yang terasa kering.", kandungan: ["Ceramide", "Glycerin", "Panthenol"], produk: ["Pelembap ceramide", "Hydrating serum", "Pembersih lembut"] },
    Kusam: { analisis: "Kulit kombinasi bisa tampak kusam akibat dehidrasi atau paparan matahari. Pertahankan hidrasi dan gunakan sunscreen; pilih bahan aktif sesuai toleransi tiap area.", kandungan: ["Niacinamide", "Vitamin C", "Glycerin"], produk: ["Serum niacinamide", "Pelembap ringan", "Sunscreen spektrum luas"] },
    Jerawat: { analisis: "Jerawat dapat muncul terutama pada area yang lebih berminyak. Gunakan produk non-komedogenik dan mulai bahan aktif secara bertahap agar area pipi tidak semakin kering.", kandungan: ["Salicylic Acid (BHA)", "Niacinamide", "Panthenol"], produk: ["Pembersih lembut", "Perawatan jerawat terarah", "Pelembap gel"] }
  },
  Sensitif: {
    "Kemerahan & iritasi": { analisis: "Kemerahan dapat dipicu oleh produk, gesekan, cuaca, atau gangguan skin barrier. Sederhanakan rutinitas dan hentikan sementara produk baru yang menimbulkan reaksi.", kandungan: ["Panthenol", "Ceramide", "Centella Asiatica"], produk: ["Skin1004 Madagascar Centella", "La Roche-Posay Cicaplast", "Pelembap tanpa pewangi"] },
    "Perih saat memakai produk": { analisis: "Rasa perih berulang dapat menandakan iritasi atau skin barrier yang terganggu. Hentikan produk pemicu, hindari bahan aktif kuat untuk sementara, dan cari bantuan medis jika reaksi berat atau menetap.", kandungan: ["Ceramide", "Panthenol", "Glycerin"], produk: ["Pembersih tanpa pewangi", "Pelembap sederhana", "Sunscreen yang nyaman di kulit"] },
    "Kulit mudah gatal": { analisis: "Gatal bisa berkaitan dengan iritasi atau kondisi kulit lain yang perlu dinilai lebih lanjut. Hindari menggaruk dan hentikan produk yang dicurigai; konsultasikan ke tenaga kesehatan bila berlanjut.", kandungan: ["Ceramide", "Colloidal Oatmeal", "Panthenol"], produk: ["Pelembap tanpa pewangi", "Pembersih lembut", "Krim perawatan barrier"] },
    "Mudah bereaksi terhadap produk": { analisis: "Kulit yang mudah bereaksi sering lebih nyaman dengan rutinitas sederhana dan produk tanpa pewangi. Perkenalkan satu produk baru pada satu waktu dan lakukan patch test.", kandungan: ["Ceramide", "Glycerin", "Panthenol"], produk: ["Pembersih lembut tanpa pewangi", "Pelembap barrier", "Sunscreen untuk kulit sensitif"] },
    "Kering dan sensitif": { analisis: "Kekeringan dapat membuat kulit terasa lebih reaktif. Gunakan pelembap yang membantu menjaga skin barrier dan hindari eksfoliasi sampai kulit terasa nyaman kembali.", kandungan: ["Ceramide", "Squalane", "Glycerin"], produk: ["Krim pelembap ceramide", "Pembersih lembut", "Pelembap tanpa pewangi"] },
    Jerawat: { analisis: "Jerawat pada kulit sensitif perlu pendekatan yang lebih hati-hati: bahan aktif yang terlalu kuat dapat memicu kemerahan dan perih. Utamakan bahan yang lembut, sederhanakan rutinitas, dan kenalkan satu produk pada satu waktu.", kandungan: ["Azelaic Acid", "Niacinamide", "Panthenol"], produk: ["Serum azelaic acid", "Pelembap tanpa pewangi", "Pembersih lembut"] }
  }
};

// Contoh brand untuk ditelusuri berdasarkan kandungan; bukan jaminan kecocokan atau endorsement.
const brandSuggestions = [
  { match: /Mineral Sunscreen/i, brands: "Bioderma, La Roche-Posay, Eucerin", note: "contoh sunscreen mineral; cari label zinc oxide / titanium dioxide" },
  { match: /Adapalene/i, brands: "Sesuai resep atau arahan dokter kulit", note: "adapalene umumnya diberikan dokter; jangan digabung retinol" },
  { match: /Retinol|Retinoid/i, brands: "The Ordinary, Somethinc, Avoskin", note: "contoh serum retinol; mulai konsentrasi rendah dan pakai malam hari" },
  { match: /Salicylic Acid|BHA/i, brands: "Paula’s Choice, COSRX, The Ordinary", note: "contoh produk BHA" },
  { match: /Niacinamide/i, brands: "The Ordinary, Somethinc, Whitelab", note: "contoh serum niacinamide" },
  { match: /Ceramide/i, brands: "CeraVe, Skintific, Illiyoon", note: "contoh pelembap ceramide" },
  { match: /Hyaluronic Acid|Glycerin/i, brands: "Hada Labo, The Ordinary, CeraVe", note: "contoh produk hidrasi" },
  { match: /Panthenol|Centella Asiatica/i, brands: "La Roche-Posay, SKIN1004, Somethinc", note: "contoh produk soothing/barrier" },
  { match: /Vitamin C/i, brands: "Garnier, Melano CC, Somethinc", note: "contoh produk vitamin C" },
  { match: /Azelaic Acid/i, brands: "The Ordinary, Paula’s Choice, Azarine", note: "contoh produk azelaic acid" },
  { match: /Sunscreen|SPF/i, brands: "Azarine, Skin Aqua, Biore UV", note: "contoh sunscreen" },
  { match: /Benzoyl Peroxide/i, brands: "Benzolac, PanOxyl", note: "contoh perawatan jerawat; cek aturan pakai" },
  { match: /Squalane/i, brands: "The Ordinary, Biossance, Hada Labo", note: "contoh produk dengan squalane" },
  { match: /Colloidal Oatmeal/i, brands: "Aveeno, Eucerin", note: "contoh produk dengan oatmeal koloid" },
  { match: /Alpha Arbutin/i, brands: "The Ordinary, Somethinc", note: "contoh produk alpha arbutin" },
  { match: /Zinc PCA/i, brands: "The Ordinary, Somethinc", note: "contoh produk pengontrol minyak" },
  { match: /Petrolatum/i, brands: "Vaseline, CeraVe", note: "contoh produk oklusif" }
];


/* =========================================================
   ATURAN SISTEM PAKAR (profil pengguna, sub-kondisi, gaya hidup)
   ========================================================= */
const TOTAL_STEPS = 5;
const MAX_INGREDIENTS = 7;

// Sub-tipe jerawat
const acneTypes = {
  komedonal: {
    label: "Jerawat pasir (komedonal)",
    analisis: "Jerawat pasir berupa komedo tertutup/terbuka tanpa peradangan berarti. Bahan yang membersihkan di dalam pori dan membantu pergantian sel kulit umumnya paling relevan; hasil baru terlihat setelah beberapa minggu pemakaian konsisten.",
    kandungan: ["Salicylic Acid (BHA)", "Niacinamide", "Adapalene (dengan arahan dokter)"]
  },
  papula: {
    label: "Papula / pustula (meradang)",
    analisis: "Papula dan pustula adalah jerawat meradang akibat bakteri dan penyumbatan pori. Bahan antibakteri dan anti-radang membantu, tetapi mulai bertahap agar kulit tidak kering atau iritasi. Hindari memencet agar tidak memicu bekas.",
    kandungan: ["Benzoyl Peroxide", "Azelaic Acid", "Niacinamide"]
  },
  kistik: {
    label: "Jerawat batu (kistik)",
    analisis: "Jerawat batu terbentuk jauh di dalam kulit, sering nyeri, dan berisiko meninggalkan bekas atau parut. Produk bebas yang dijual umum biasanya tidak cukup; penanganannya sebaiknya melalui dokter kulit yang dapat meresepkan terapi sesuai tingkat keparahan. Perawatan di rumah cukup bersifat menenangkan dan melindungi.",
    kandungan: ["Niacinamide", "Panthenol"],
    rujuk: true
  },
  belum: null
};

/* Aturan per bahan:
   hamil: 'safe' | 'caution' | 'avoid'  (hamil, menyusui, program hamil)
   kuat : bahan aktif yang berpotensi mengiritasi (perlu bertahap / ditunda pada kulit sangat sensitif)
   resep: sebaiknya hanya dengan arahan dokter untuk usia di bawah 18 tahun
   alt  : pengganti bila bahan disaring */
const ingredientRules = [
  { match: /Adapalene|Retinol|Retinoid/i, hamil: "avoid", kuat: true, resep: true, alt: ["Azelaic Acid"],
    fungsi: "Mempercepat pergantian sel; membantu komedo dan tanda penuaan.",
    reasonHamil: "Retinoid topikal (retinol, adapalene, tretinoin) umumnya dihindari saat hamil, menyusui, atau program hamil.",
    tahap: "Pakai malam hari, mulai 1–2 kali seminggu, dan selalu diikuti sunscreen di pagi hari." },
  { match: /Alpha Arbutin/i, hamil: "avoid", kuat: false, alt: ["Niacinamide"],
    fungsi: "Membantu memudarkan noda gelap.",
    reasonHamil: "Data keamanan terbatas dan arbutin dapat berubah menjadi hydroquinone; banyak panduan menyarankan menghindarinya saat hamil." },
  { match: /Salicylic Acid|BHA/i, hamil: "caution", kuat: true,
    fungsi: "Membersihkan pori dari minyak dan sel kulit mati.",
    noteHamil: "Hanya dengan persetujuan dokter: konsentrasi rendah (≤2%), area kecil, tanpa peeling." },
  { match: /Benzoyl Peroxide/i, hamil: "caution", kuat: true,
    fungsi: "Mengurangi bakteri penyebab jerawat meradang.",
    noteHamil: "Penyerapan ke tubuh rendah, tetapi tetap konfirmasi ke dokter sebelum dipakai." },
  { match: /Azelaic Acid/i, hamil: "safe", kuat: false,
    fungsi: "Membantu jerawat, kemerahan, dan noda bekas jerawat." },
  { match: /Vitamin C/i, hamil: "safe", kuat: true,
    fungsi: "Antioksidan; membantu tampilan kulit lebih cerah." },
  { match: /Niacinamide/i, hamil: "safe", kuat: false,
    fungsi: "Membantu mengontrol minyak, menenangkan, dan meratakan tampilan warna kulit." },
  { match: /Zinc PCA/i, hamil: "safe", kuat: false, fungsi: "Membantu mengontrol minyak berlebih." },
  { match: /Hyaluronic Acid/i, hamil: "safe", kuat: false, fungsi: "Menarik dan menahan air di kulit." },
  { match: /Glycerin/i, hamil: "safe", kuat: false, fungsi: "Humektan yang melembapkan kulit." },
  { match: /Ceramide/i, hamil: "safe", kuat: false, fungsi: "Memperkuat skin barrier." },
  { match: /Squalane/i, hamil: "safe", kuat: false, fungsi: "Pelembap ringan yang melembutkan kulit." },
  { match: /Panthenol/i, hamil: "safe", kuat: false, fungsi: "Menenangkan dan membantu pemulihan skin barrier." },
  { match: /Centella/i, hamil: "caution", kuat: false,
    fungsi: "Menenangkan kulit yang kemerahan atau iritasi.",
    noteHamil: "Data keamanan pada kehamilan terbatas; konfirmasi ke dokter." },
  { match: /Colloidal Oatmeal/i, hamil: "safe", kuat: false, fungsi: "Membantu meredakan gatal dan kulit kering." },
  { match: /Petrolatum/i, hamil: "safe", kuat: false, fungsi: "Mengunci kelembapan (oklusif)." },
  { match: /Mineral Sunscreen/i, hamil: "safe", kuat: false, fungsi: "Melindungi dari sinar UV; filter mineral cenderung lebih lembut di kulit." },
  { match: /Sunscreen|SPF/i, hamil: "safe", kuat: false, fungsi: "Melindungi dari sinar UV, membantu mencegah noda dan penuaan dini." }
];
const defaultRule = { hamil: "safe", kuat: false, fungsi: "" };
const ingredientRule = name => ingredientRules.find(r => r.match.test(name)) || defaultRule;
const ingredientFamily = name => {
  if (/Adapalene|Retinol|Retinoid/i.test(name)) return "retinoid";
  if (/Sunscreen|SPF/i.test(name)) return "sunscreen";
  return name.toLowerCase();
};

// Profil usia
function ageProfile(usia) {
  if (usia < 18) return { label: "Remaja (di bawah 18 tahun)", extras: [],
    catatan: "Pada usia remaja, kebutuhan kulit umumnya berfokus pada minyak berlebih, komedo, dan jerawat akibat perubahan hormon. Pilih rutinitas sederhana: pembersih lembut, pelembap ringan, dan sunscreen. Hindari produk anti-penuaan; retinoid dan bahan aktif kuat sebaiknya hanya atas arahan dokter." };
  if (usia < 25) return { label: "Dewasa muda (18–24 tahun)", extras: [],
    catatan: "Pada usia ini keluhan yang paling sering adalah jerawat dan minyak berlebih. Prioritaskan pembersihan lembut, pengendalian jerawat secara bertahap, dan sunscreen harian. Produk anti-penuaan belum menjadi kebutuhan utama." };
  if (usia < 35) return { label: "Dewasa (25–34 tahun)", extras: ["Vitamin C"],
    catatan: "Produksi kolagen mulai menurun perlahan. Selain keluhan utama, antioksidan seperti Vitamin C dan sunscreen harian membantu pencegahan tanda penuaan dini." };
  if (usia < 45) return { label: "Dewasa matang (35–44 tahun)", extras: ["Retinol", "Hyaluronic Acid"],
    catatan: "Tanda penuaan seperti garis halus, kusam, dan kulit yang lebih kering mulai lebih terlihat. Hidrasi, sunscreen, dan retinol (bila kulit cocok dan tidak sedang hamil/menyusui) menjadi pertimbangan di samping keluhan utama." };
  return { label: "Usia 45 tahun ke atas", extras: ["Retinol", "Ceramide", "Hyaluronic Acid"],
    catatan: "Kulit cenderung lebih kering dan kekenyalannya menurun. Perkuat skin barrier dan hidrasi, gunakan sunscreen setiap hari, dan kenalkan retinol dengan hati-hati bila kulit toleran." };
}

// Tingkat sensitivitas
const SENS_LEVELS = ["Tidak sensitif", "Sensitif ringan", "Sensitif sedang", "Sensitif tinggi"];
function sensitivityLevel(gejala, jenisKulit) {
  let level = Math.min(gejala.filter(g => g !== "none").length, 3);
  if (jenisKulit === "Sensitif") level = Math.max(level, 2);
  return level;
}

/* Mesin rekomendasi: menggabungkan basis pengetahuan dasar dengan seluruh profil pengguna */
function buildRecommendation(p) {
  const special = p.kondisi && p.kondisi !== "Tidak ada";
  const level = sensitivityLevel(p.gejala, p.jenisKulit);
  const age = ageProfile(p.usia);
  const base = skincareDB[p.jenisKulit][p.masalah];
  const acne = p.masalah === "Jerawat" ? acneTypes[p.tipeJerawat] : null;
  const alerts = [];
  const tips = [];

  let analisis = base.analisis;
  let names = base.kandungan.filter(n => !/Sunscreen|SPF/i.test(n));
  if (acne) {
    analisis += " " + acne.analisis;
    names = [...acne.kandungan];
    if (acne.rujuk) alerts.push({ tone: "warn", title: "Jerawat batu sebaiknya diperiksa dokter kulit", text: "Jerawat kistik jarang membaik hanya dengan produk bebas dan dapat meninggalkan parut permanen. Buat janji dengan dokter kulit; sambil menunggu, jangan dipencet dan gunakan perawatan yang lembut saja." });
  }

  const kept = [];
  const removed = [];
  const seen = new Set();

  function consider(name, extraNote) {
    const family = ingredientFamily(name);
    if (seen.has(family)) return;
    seen.add(family);
    const rule = ingredientRule(name);
    let reason = "";
    if (special && rule.hamil === "avoid") reason = rule.reasonHamil || "Sebaiknya dihindari selama hamil, menyusui, atau program hamil.";
    else if (p.usia < 18 && rule.resep) reason = "Untuk usia di bawah 18 tahun, bahan ini sebaiknya hanya dipakai dengan arahan dokter.";
    else if (level >= 3 && rule.kuat) reason = "Bahan aktif cukup kuat. Tunda sampai kulit lebih tenang dan skin barrier pulih.";
    if (reason) { removed.push({ nama: name, alasan: reason, alt: rule.alt || [] }); return; }

    const badges = [];
    const notes = [];
    if (rule.fungsi) notes.push(rule.fungsi);
    if (special) {
      if (rule.hamil === "safe") badges.push({ tone: "ok", text: "Umumnya aman saat hamil/menyusui" });
      if (rule.hamil === "caution") { badges.push({ tone: "warn", text: "Konsultasi dokter dulu" }); if (rule.noteHamil) notes.push(rule.noteHamil); }
    }
    if (rule.kuat) {
      badges.push({ tone: "info", text: "Mulai bertahap" });
      notes.push(rule.tahap || (level >= 1
        ? "Kulitmu cukup reaktif: patch test dulu, lalu mulai 1–2 kali seminggu."
        : "Mulai 2–3 kali seminggu, naikkan perlahan sesuai toleransi."));
    }
    if (extraNote) notes.push(extraNote);
    kept.push({ nama: name, badges, fungsi: notes.shift(), notes });
  }

  // 1) bahan dari basis pengetahuan (keluhan + tipe jerawat)
  names.forEach(n => consider(n));

  // 2) pengganti untuk bahan yang disaring
  removed.slice().forEach(r => r.alt.forEach(a => consider(a)));

  // 3) penenang untuk kulit sensitif
  if (level >= 2) consider("Ceramide");
  if (level >= 3) consider("Panthenol");
  if (p.gejala.includes("gatal")) consider("Colloidal Oatmeal");

  // 4) sunscreen sesuai profil
  const outdoor = p.aktivitas === "Luar ruangan";
  const mineral = special || level >= 2 || p.gejala.includes("panas");
  const sunName = mineral ? "Mineral Sunscreen (Zinc Oxide / Titanium Dioxide)" : (outdoor ? "Sunscreen SPF 50+ PA++++" : "Sunscreen SPF 30+");
  const sunNotes = [];
  if (outdoor) sunNotes.push("Pilih SPF 50+ dan ulangi tiap 2–3 jam saat berada di luar ruangan.");
  else sunNotes.push("Pakai setiap pagi, termasuk saat di dalam ruangan.");
  if (special) sunNotes.push("Filter mineral umumnya lebih disukai saat hamil/menyusui.");
  else if (mineral) sunNotes.push("Filter mineral cenderung lebih lembut untuk kulit reaktif atau mudah perih saat panas.");
  consider(sunName, sunNotes.join(" "));

  // 5) polusi
  if (p.polusi !== "Rendah") consider("Vitamin C", "Antioksidan untuk membantu melawan paparan polusi; pakai pagi hari sebelum sunscreen.");

  // 6) tambahan sesuai usia (tidak untuk jerawat batu)
  if (!(acne && acne.rujuk)) age.extras.forEach(e => consider(e));

  // cadangan agar daftar tidak terlalu pendek
  if (kept.length < 3) { consider("Ceramide"); consider("Glycerin"); }
  const finalList = kept.slice(0, MAX_INGREDIENTS);

  // Pengganti yang benar-benar tampil
  removed.forEach(r => { r.alt = r.alt.filter(a => finalList.some(k => ingredientFamily(k.nama) === ingredientFamily(a))); });

  /* ---------- Catatan penyesuaian ---------- */
  tips.push({ judul: "Usia: " + age.label, teks: age.catatan });

  if (special) {
    const kondisiTeks = { Hamil: "kehamilan", Menyusui: "masa menyusui", "Program hamil": "program hamil" }[p.kondisi];
    tips.push({ judul: "Kondisi khusus: " + p.kondisi, teks: `Daftar kandungan sudah disaring untuk ${kondisiTeks}. Retinoid dan arbutin dihindari; salicylic acid dan benzoyl peroxide hanya dengan persetujuan dokter. Periksa komposisi setiap produk baru dan konfirmasikan rutinitasmu kepada dokter kandungan atau dokter kulit.` });
    alerts.push({ tone: "info", title: "Rekomendasi disesuaikan untuk " + kondisiTeks, text: "Sistem hanya memberi informasi umum. Pastikan dokter yang menangani kehamilan atau menyusuimu mengetahui produk yang kamu pakai." });
  }

  if (level >= 1) {
    const ringkas = [
      "",
      "Perkenalkan bahan aktif satu per satu dan lakukan patch test sebelum memakai di seluruh wajah.",
      "Kulitmu cukup reaktif. Pakai bahan aktif 2–3 kali seminggu, hindari scrub dan pewangi, dan jaga rutinitas tetap sederhana.",
      "Prioritaskan memulihkan skin barrier terlebih dahulu. Bahan aktif yang kuat ditunda dan rutinitas dibuat sesederhana mungkin: pembersih lembut, pelembap, dan sunscreen."
    ][level];
    tips.push({ judul: "Tingkat sensitivitas: " + SENS_LEVELS[level], teks: ringkas });
  }
  if (p.gejala.includes("merah")) tips.push({ judul: "Mudah memerah", teks: "Hindari scrub kasar, gesekan saat mengeringkan wajah (tepuk, jangan gosok), dan pembersih berbusa keras." });
  if (p.gejala.includes("panas")) tips.push({ judul: "Perih saat terkena panas", teks: "Cuci wajah dengan air suam-suam kuku, hindari paparan panas langsung, dan lindungi wajah dengan sunscreen serta topi." });
  if (p.gejala.includes("gatal")) tips.push({ judul: "Gatal saat mencoba produk baru", teks: "Lakukan patch test 24–48 jam di lipatan siku atau belakang telinga, coba satu produk baru setiap 1–2 minggu, dan pilih produk tanpa pewangi." });
  if (p.gejala.includes("perih")) tips.push({ judul: "Perih saat memakai skincare", teks: "Hentikan produk yang memicu rasa perih, sederhanakan rutinitas, lalu perkenalkan kembali produk satu per satu." });

  if (p.aktivitas === "Luar ruangan") tips.push({ judul: "Lebih banyak di luar ruangan", teks: "Oleskan sunscreen 15–20 menit sebelum keluar dan ulangi tiap 2–3 jam bila terpapar langsung. Topi atau payung membantu mengurangi paparan." });
  else if (p.aktivitas === "Campuran") tips.push({ judul: "Aktivitas campuran", teks: "Gunakan sunscreen pagi hari dan ulangi bila kamu berada di luar ruangan cukup lama." });
  else tips.push({ judul: "Lebih banyak di dalam ruangan", teks: "Sunscreen tetap perlu dipakai setiap pagi karena sinar UVA dapat menembus kaca jendela." });

  if (p.makeup === "Setiap hari") tips.push({ judul: "Makeup harian", teks: "Bersihkan dengan double cleansing di malam hari (micellar water atau cleansing balm, lalu pembersih wajah lembut). Pilih makeup berlabel non-komedogenik dan cuci kuas serta spons secara rutin." });
  else if (p.makeup === "Kadang") tips.push({ judul: "Makeup sesekali", teks: "Selalu bersihkan makeup sebelum tidur, walaupun hanya dipakai tipis." });

  if (p.polusi === "Tinggi") tips.push({ judul: "Paparan polusi tinggi", teks: "Cuci wajah sepulang beraktivitas dan lakukan double cleansing di malam hari. Antioksidan seperti Vitamin C dan niacinamide dapat membantu; hindari menyentuh wajah dengan tangan kotor." });
  else if (p.polusi === "Sedang") tips.push({ judul: "Paparan polusi sedang", teks: "Cuci wajah dua kali sehari dan bersihkan wajah sebelum tidur agar debu dan sisa sunscreen tidak menumpuk di pori." });

  if (p.masalah === "Jerawat") {
    tips.push({ judul: "Perilaku sehari-hari", teks: "Jangan memencet jerawat, ganti sarung bantal secara rutin, dan bersihkan layar ponsel yang sering menempel di wajah." });
    if (p.tipeJerawat === "belum") tips.push({ judul: "Tipe jerawat belum pasti", teks: "Bila muncul benjolan besar, keras, dan nyeri, atau jerawat tidak membaik dalam 6–8 minggu, sebaiknya periksa ke dokter kulit untuk memastikan tipenya." });
  }
  if (p.gender === "Laki-laki" && (p.masalah === "Jerawat" || level >= 1 || p.jenisKulit === "Sensitif")) {
    tips.push({ judul: "Bila bercukur", teks: "Gunakan alat cukur yang bersih dan tajam, cukur searah pertumbuhan rambut, lalu oleskan pelembap tanpa pewangi untuk mengurangi iritasi dan peradangan folikel." });
  }

  if (level >= 3) alerts.push({ tone: "warn", title: "Kulitmu sedang sangat reaktif", text: "Bila muncul bengkak, ruam yang menyebar, atau sesak napas setelah memakai produk, hentikan pemakaian dan segera cari bantuan medis." });

  return { analisis, tips, alerts, kandungan: finalList, ditunda: removed, level, acne };
}

/* =========================================================
   ANTARMUKA WIZARD
   ========================================================= */
const form = document.getElementById('skinForm');
const pages = [...document.querySelectorAll('.wizard-page')];
const stepLabels = [...document.querySelectorAll('[data-step-label]')];
const stepCount = document.getElementById('stepCount');
const progressBar = document.getElementById('progressBar');
const namaInput = document.getElementById('nama');
const usiaInput = document.getElementById('usia');
const jenisKulitInput = document.getElementById('jenisKulit');
const masalahSelect = document.getElementById('masalah');
const kondisiGroup = document.getElementById('kondisiGroup');
const jerawatGroup = document.getElementById('jerawatGroup');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const analisisBtn = document.getElementById('analisisBtn');
const errorMessage = document.getElementById('errorMessage');
const hasilSection = document.getElementById('hasil');
let currentStep = 0;

const getVal = name => (form.querySelector(`input[name="${name}"]:checked`) || {}).value || '';
const getAll = name => [...form.querySelectorAll(`input[name="${name}"]:checked`)].map(i => i.value);
function h(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function showStep(step) {
  currentStep = step;
  pages.forEach((page, index) => {
    const active = index === step;
    page.classList.toggle('active', active);
    page.hidden = !active;
  });
  stepLabels.forEach((label, index) => {
    label.classList.toggle('active', index === step);
    label.classList.toggle('complete', index < step);
  });
  stepCount.textContent = `${String(step + 1).padStart(2, '0')} / ${String(TOTAL_STEPS).padStart(2, '0')}`;
  progressBar.style.width = `${((step + 1) / TOTAL_STEPS) * 100}%`;
  backBtn.hidden = step === 0;
  nextBtn.hidden = step === TOTAL_STEPS - 1;
  analisisBtn.hidden = step !== TOTAL_STEPS - 1;
  clearError();
}
function showError(message) { errorMessage.textContent = message; errorMessage.hidden = false; }
function clearError() { errorMessage.textContent = ''; errorMessage.hidden = true; }

// Validasi per langkah: mengembalikan pesan kesalahan atau string kosong
function validateStep(step) {
  if (step === 0) {
    if (!namaInput.value.trim()) { namaInput.focus(); return 'Masukkan nama panggilan untuk melanjutkan.'; }
    const usia = Number(usiaInput.value);
    if (!usiaInput.value.trim() || !Number.isInteger(usia) || usia < 10 || usia > 99) { usiaInput.focus(); return 'Masukkan usia yang valid (10–99 tahun).'; }
    if (!getVal('gender')) return 'Pilih jenis kelamin terlebih dahulu.';
    if (!kondisiGroup.hidden && !getVal('kondisi')) return 'Pilih kondisi khusus. Jika tidak ada, pilih "Tidak ada".';
  }
  if (step === 1 && !jenisKulitInput.value) return 'Pilih salah satu jenis kulit terlebih dahulu.';
  if (step === 2) {
    if (!masalahSelect.value) return 'Pilih keluhan utama untuk melanjutkan.';
    if (!jerawatGroup.hidden && !getVal('tipeJerawat')) return 'Pilih tipe jerawat. Jika belum yakin, pilih "Belum yakin".';
  }
  if (step === 3 && getAll('gejala').length === 0) return 'Pilih gejala yang kamu alami, atau "Tidak ada gejala di atas".';
  if (step === 4) {
    if (!getVal('aktivitas')) return 'Pilih aktivitas harian terlebih dahulu.';
    if (!getVal('makeup')) return 'Pilih seberapa sering kamu memakai makeup.';
    if (!getVal('polusi')) return 'Pilih tingkat paparan polusi di sekitarmu.';
  }
  return '';
}

nextBtn.addEventListener('click', () => {
  clearError();
  const error = validateStep(currentStep);
  if (error) return showError(error);
  showStep(Math.min(currentStep + 1, TOTAL_STEPS - 1));
});
backBtn.addEventListener('click', () => showStep(Math.max(currentStep - 1, 0)));

// Kartu tipe kulit
document.querySelectorAll('.skin-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.skin-option').forEach(card => {
      card.classList.remove('selected');
      card.setAttribute('aria-pressed', 'false');
    });
    option.classList.add('selected');
    option.setAttribute('aria-pressed', 'true');
    jenisKulitInput.value = option.dataset.skin;
    populateConcerns(option.dataset.skin);
    updateConditionalGroups();
    clearError();
  });
});

function populateConcerns(skinType) {
  masalahSelect.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Pilih keluhan utama';
  masalahSelect.appendChild(placeholder);
  Object.keys(skincareDB[skinType] || {}).forEach(concern => {
    const option = document.createElement('option');
    option.value = concern;
    option.textContent = concern;
    masalahSelect.appendChild(option);
  });
  masalahSelect.disabled = false;
  masalahSelect.value = '';
}

// Pilihan pilihan (radio / checkbox bergaya kartu)
function syncChoices(name) {
  form.querySelectorAll(`input[name="${name}"]`).forEach(input => input.closest('.choice').classList.toggle('selected', input.checked));
}
function clearChoices(name) {
  form.querySelectorAll(`input[name="${name}"]`).forEach(input => { input.checked = false; });
  syncChoices(name);
}
// Grup yang muncul hanya bila relevan
function updateConditionalGroups() {
  const showKondisi = getVal('gender') !== '' && getVal('gender') !== 'Laki-laki';
  if (!showKondisi) clearChoices('kondisi');
  kondisiGroup.hidden = !showKondisi;
  const showJerawat = masalahSelect.value === 'Jerawat';
  if (!showJerawat) clearChoices('tipeJerawat');
  jerawatGroup.hidden = !showJerawat;
}
form.addEventListener('change', event => {
  const target = event.target;
  if (target.matches('.choice input')) {
    if (target.name === 'gejala') {
      // "Tidak ada" bersifat eksklusif terhadap gejala lain
      if (target.value === 'none' && target.checked) form.querySelectorAll('input[name="gejala"]').forEach(i => { if (i !== target) i.checked = false; });
      if (target.value !== 'none' && target.checked) form.querySelector('input[name="gejala"][value="none"]').checked = false;
    }
    syncChoices(target.name);
    if (target.name === 'gender') updateConditionalGroups();
    clearError();
  }
  if (target === masalahSelect) { updateConditionalGroups(); clearError(); }
});

// Enter tidak langsung mengirim formulir
form.addEventListener('keydown', event => {
  if (event.key === 'Enter' && event.target.tagName === 'INPUT') {
    event.preventDefault();
    if (event.target.type === 'text' || event.target.type === 'number') {
      if (currentStep < TOTAL_STEPS - 1) nextBtn.click();
    }
  }
});

/* =========================================================
   HASIL
   ========================================================= */
const MAKEUP_LABEL = { Jarang: 'makeup jarang', Kadang: 'makeup sesekali', 'Setiap hari': 'makeup harian' };

function renderSummary(p, rec) {
  const grid = document.getElementById('summaryGrid');
  grid.replaceChildren();
  const items = [['PROFIL', `${p.usia} tahun · ${p.gender === 'Tidak disebutkan' ? 'Jenis kelamin tidak disebutkan' : p.gender}`]];
  if (p.kondisi && p.kondisi !== 'Tidak ada') items.push(['KONDISI KHUSUS', p.kondisi === 'Hamil' ? 'Sedang hamil' : p.kondisi === 'Menyusui' ? 'Sedang menyusui' : 'Program hamil']);
  items.push(['JENIS KULIT', p.jenisKulit], ['KELUHAN UTAMA', p.masalah]);
  if (rec.acne) items.push(['TIPE JERAWAT', rec.acne.label]);
  else if (p.masalah === 'Jerawat') items.push(['TIPE JERAWAT', 'Belum yakin']);
  items.push(['SENSITIVITAS', SENS_LEVELS[rec.level]], ['GAYA HIDUP', `${p.aktivitas} · ${MAKEUP_LABEL[p.makeup]} · polusi ${p.polusi.toLowerCase()}`]);
  items.forEach(([label, value]) => {
    const item = h('div', 'summary-item');
    item.append(h('span', 'summary-label', label), h('strong', null, value));
    grid.appendChild(item);
  });
}

function renderAlerts(alerts) {
  const list = document.getElementById('alertList');
  list.replaceChildren();
  alerts.forEach(a => {
    const box = h('div', `alert ${a.tone}`);
    box.setAttribute('role', 'note');
    box.append(h('strong', null, a.title), h('p', null, a.text));
    list.appendChild(box);
  });
}

function renderTips(tips) {
  const list = document.getElementById('tipList');
  list.replaceChildren();
  tips.forEach(t => {
    const item = h('div', 'tip');
    item.append(h('strong', null, t.judul), h('p', null, t.teks));
    list.appendChild(item);
  });
}

function renderIngredients(items) {
  const grid = document.getElementById('kandunganList');
  grid.replaceChildren();
  items.forEach((it, index) => {
    const card = h('div', 'ingredient');
    const body = h('div', 'ingredient-body');
    body.appendChild(h('strong', null, it.nama));
    if (it.badges.length) {
      const row = h('div', 'badge-row');
      it.badges.forEach(b => row.appendChild(h('span', `badge ${b.tone}`, b.text)));
      body.appendChild(row);
    }
    if (it.fungsi) body.appendChild(h('small', 'ingredient-func', it.fungsi));
    it.notes.forEach(n => body.appendChild(h('small', 'ingredient-note', n)));
    card.append(h('span', 'ingredient-number', String(index + 1).padStart(2, '0')), body);
    grid.appendChild(card);
  });
}

function renderRemoved(removed) {
  const card = document.getElementById('ditundaCard');
  const list = document.getElementById('ditundaList');
  list.replaceChildren();
  card.hidden = removed.length === 0;
  removed.forEach(r => {
    const item = h('div', 'avoid-item');
    item.appendChild(h('strong', null, r.nama));
    item.appendChild(h('p', null, r.alasan));
    if (r.alt.length) item.appendChild(h('span', 'avoid-alt', `Alternatif yang ditampilkan: ${r.alt.join(', ')}`));
    list.appendChild(item);
  });
  document.getElementById('produkIndex').textContent = removed.length ? '05' : '04';
}

function renderProducts(items) {
  const produkList = document.getElementById('produkList');
  produkList.replaceChildren();
  const used = new Set();
  items.forEach((it, index) => {
    const suggestion = brandSuggestions.find(s => s.match.test(it.nama) && !used.has(s.note));
    const item = h('div', 'product-item');
    const content = h('div', 'brand-suggestion');
    const details = h('span');
    if (suggestion) {
      used.add(suggestion.note);
      details.textContent = `${suggestion.brands} — ${suggestion.note}`;
    } else {
      details.textContent = `Cari produk dengan kandungan ${it.nama}; periksa daftar komposisi pada kemasan.`;
    }
    content.append(h('strong', null, it.nama), details);
    item.append(h('span', 'product-number', String(index + 1).padStart(2, '0')), content);
    produkList.appendChild(item);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  clearError();
  for (let step = 0; step < TOTAL_STEPS; step++) {
    const error = validateStep(step);
    if (error) { showStep(step); return showError(error); }
  }

  const profile = {
    nama: namaInput.value.trim(),
    usia: Number(usiaInput.value),
    gender: getVal('gender'),
    kondisi: getVal('kondisi'),
    jenisKulit: jenisKulitInput.value,
    masalah: masalahSelect.value,
    tipeJerawat: getVal('tipeJerawat'),
    gejala: getAll('gejala'),
    aktivitas: getVal('aktivitas'),
    makeup: getVal('makeup'),
    polusi: getVal('polusi')
  };
  const rec = buildRecommendation(profile);

  document.getElementById('hasilNama').textContent = profile.nama;
  document.getElementById('hasilAnalisis').textContent = rec.analisis;
  renderAlerts(rec.alerts);
  renderSummary(profile, rec);
  renderTips(rec.tips);
  renderIngredients(rec.kandungan);
  renderRemoved(rec.ditunda);
  renderProducts(rec.kandungan);
  document.getElementById('hamilDisclaimer').hidden = !(profile.kondisi && profile.kondisi !== 'Tidak ada');

  hasilSection.classList.remove('hidden');
  hasilSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('ulangBtn').addEventListener('click', () => {
  form.reset();
  jenisKulitInput.value = '';
  masalahSelect.disabled = true;
  masalahSelect.innerHTML = '<option value="">Pilih jenis kulit terlebih dahulu</option>';
  document.querySelectorAll('.skin-option').forEach(card => {
    card.classList.remove('selected');
    card.setAttribute('aria-pressed', 'false');
  });
  form.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
  updateConditionalGroups();
  hasilSection.classList.add('hidden');
  showStep(0);
  document.getElementById('top').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

showStep(0);
