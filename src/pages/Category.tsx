import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';

// Data artikel (dalam praktik nyata, ini akan diambil dari API/database)
const articles = {
  "sepakbola": [
    {
      title: "Persib Bandung Puncaki Klasemen Liga 1",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      category: "Sport",
      excerpt: "Persib Bandung berhasil mengambil alih puncak klasemen Liga 1 setelah meraih kemenangan penting",
      url: "/sport/sepakbola/persib-klasemen",
      date: "21 Feb 2024"
    },
    // Artikel sepakbola lainnya bisa ditambahkan di sini
  ],
  "nasional": [
    {
      title: "Pembangunan Infrastruktur di Indonesia Timur Dipercepat",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
      category: "Nasional",
      excerpt: "Pemerintah mengumumkan percepatan pembangunan infrastruktur di wilayah Indonesia Timur untuk pemerataan pembangunan",
      url: "/news/nasional/pembangunan-infrastruktur",
      date: "21 Feb 2024"
    },
  ],
  "teknologi": [
    {
      title: "Perkembangan AI di Indonesia Semakin Pesat",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
      category: "Teknologi",
      excerpt: "Startup teknologi Indonesia mulai mengembangkan solusi AI untuk berbagai sektor industri",
      url: "/teknologi/ai-indonesia",
      date: "21 Feb 2024"
    },
  ]
};

const Category = () => {
  const { category } = useParams();
  const categoryArticles = category ? articles[category as keyof typeof articles] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 capitalize">
            {category?.replace('-', ' ')}
          </h1>
          
          {categoryArticles && categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Tidak ada artikel dalam kategori ini.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Category;