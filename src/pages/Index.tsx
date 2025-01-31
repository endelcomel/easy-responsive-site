import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import NewsCard from '../components/NewsCard';
import AdPlaceholder from '../components/AdPlaceholder';

// Data artikel terbaru dari semua kategori
const latestNews = [
  {
    id: 1,
    title: "Persib Bandung Puncaki Klasemen Liga 1",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    category: "Sport",
    excerpt: "Persib Bandung berhasil mengambil alih puncak klasemen Liga 1 setelah meraih kemenangan penting...",
    url: "/sport/sepakbola/persib-klasemen",
    date: "21 Feb 2024"
  },
  {
    id: 2,
    title: "Pembangunan Infrastruktur di Indonesia Timur Dipercepat",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
    category: "Nasional",
    excerpt: "Pemerintah mengumumkan percepatan pembangunan infrastruktur di wilayah Indonesia Timur untuk pemerataan pembangunan...",
    url: "/news/nasional/pembangunan-infrastruktur",
    date: "21 Feb 2024"
  },
  {
    id: 3,
    title: "Perkembangan AI di Indonesia Semakin Pesat",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
    category: "Teknologi",
    excerpt: "Startup teknologi Indonesia mulai mengembangkan solusi AI untuk berbagai sektor industri...",
    url: "/teknologi/ai-indonesia",
    date: "21 Feb 2024"
  },
  {
    id: 4,
    title: "Film Indonesia Raih Penghargaan di Festival Film Internasional",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
    category: "Entertainment",
    excerpt: "Film karya anak bangsa kembali mengharumkan nama Indonesia di kancah internasional...",
    url: "/entertainment/film-indonesia-penghargaan",
    date: "21 Feb 2024"
  },
  {
    id: 5,
    title: "Update Ekonomi Digital Indonesia 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    category: "Ekonomi",
    excerpt: "Perkembangan ekonomi digital Indonesia menunjukkan tren positif di awal tahun 2024...",
    url: "/news/ekonomi/update-ekonomi-digital",
    date: "21 Feb 2024"
  },
  {
    id: 6,
    title: "Prestasi Atlet Muda Indonesia di Kejuaraan Asia",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
    category: "Sport",
    excerpt: "Atlet muda Indonesia berhasil meraih berbagai medali di Kejuaraan Asia 2024...",
    url: "/sport/umum/prestasi-atlet-muda",
    date: "21 Feb 2024"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <NewsSlider />
          
          <div className="my-4 md:my-8">
            <AdPlaceholder 
              className="w-full h-[100px] md:h-[250px] bg-gray-100 rounded-lg" 
              adClient="your-client-id"
              adSlot="your-slot-id"
            />
          </div>

          <section className="my-4 md:my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Berita Terkini</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {latestNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </section>

          <div className="my-4 md:my-8">
            <AdPlaceholder 
              className="w-full h-[100px] md:h-[250px] bg-gray-100 rounded-lg"
              adClient="your-client-id"
              adSlot="your-slot-id"
            />
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-white py-6 md:py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Tentang Kami</h3>
              <p className="text-sm md:text-base text-gray-300">
                Portal berita terpercaya yang menyajikan informasi terkini dari berbagai kategori.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Kategori</h3>
              <ul className="space-y-2">
                <li><a href="/news/nasional" className="text-sm md:text-base text-gray-300 hover:text-white">News</a></li>
                <li><a href="/sport/sepakbola" className="text-sm md:text-base text-gray-300 hover:text-white">Sport</a></li>
                <li><a href="/teknologi" className="text-sm md:text-base text-gray-300 hover:text-white">Teknologi</a></li>
                <li><a href="/entertainment" className="text-sm md:text-base text-gray-300 hover:text-white">Entertainment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Kontak</h3>
              <p className="text-sm md:text-base text-gray-300">
                Email: info@newsportal.com<br />
                Telepon: (021) 1234567
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center text-sm md:text-base text-gray-300">
            <p>&copy; 2024 NewsPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;