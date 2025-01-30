import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import NewsCard from '../components/NewsCard';
import AdPlaceholder from '../components/AdPlaceholder';

const latestNews = [
  {
    id: 1,
    title: "Perkembangan Ekonomi Digital di Indonesia Tahun 2024",
    image: "https://picsum.photos/400/300?random=4",
    category: "Teknologi",
    excerpt: "Pertumbuhan ekonomi digital Indonesia mencapai angka signifikan di tahun 2024...",
    url: "/teknologi/1",
    date: "2024-02-20"
  },
  {
    id: 2,
    title: "Liga 1 Indonesia: Persib vs Persija",
    image: "https://picsum.photos/400/300?random=5",
    category: "Sport",
    excerpt: "Derby panas antara Persib Bandung melawan Persija Jakarta berakhir dengan...",
    url: "/sport/1",
    date: "2024-02-20"
  },
  {
    id: 3,
    title: "Film Indonesia Raih Penghargaan Internasional",
    image: "https://picsum.photos/400/300?random=6",
    category: "Entertainment",
    excerpt: "Film karya anak bangsa kembali mengharumkan nama Indonesia di kancah internasional...",
    url: "/entertainment/1",
    date: "2024-02-20"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <NewsSlider />
          
          {/* Ad Section 1 */}
          <div className="my-4 md:my-8">
            <AdPlaceholder 
              className="w-full h-[100px] md:h-[250px] bg-gray-100 rounded-lg" 
              adClient="your-client-id"
              adSlot="your-slot-id"
            />
          </div>

          {/* Latest News Section */}
          <section className="my-4 md:my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Berita Terkini</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {latestNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </section>

          {/* Ad Section 2 */}
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
                <li><a href="/news" className="text-sm md:text-base text-gray-300 hover:text-white">News</a></li>
                <li><a href="/sport" className="text-sm md:text-base text-gray-300 hover:text-white">Sport</a></li>
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