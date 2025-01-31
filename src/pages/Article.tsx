import { useParams } from 'react-router-dom';
import Header from '../components/Header';

// Data artikel (dalam praktik nyata, ini akan diambil dari API/database)
const articles = {
  "pembangunan-infrastruktur": {
    title: "Pembangunan Infrastruktur di Indonesia Timur Dipercepat",
    date: "21 Feb 2024",
    category: "Nasional",
    content: `
      <p>Pemerintah Indonesia mengumumkan percepatan pembangunan infrastruktur di wilayah Indonesia Timur sebagai bagian dari program pemerataan pembangunan nasional. Program ini mencakup pembangunan jalan, pelabuhan, dan bandara di berbagai provinsi.</p>
      
      <p>"Kami fokus untuk memastikan pembangunan yang merata di seluruh wilayah Indonesia," ujar Menteri Pekerjaan Umum dalam konferensi pers di Jakarta, Rabu (21/2).</p>
      
      <h2>Beberapa proyek utama yang akan dipercepat termasuk:</h2>
      <ul>
        <li>Pembangunan jalan Trans Papua</li>
        <li>Pengembangan Pelabuhan Sorong</li>
        <li>Perluasan Bandara Sam Ratulangi di Manado</li>
      </ul>
      
      <p>Program ini diharapkan dapat meningkatkan konektivitas dan pertumbuhan ekonomi di wilayah Indonesia Timur.</p>
    `,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
    author: "Ahmad Sulaiman"
  },
  // ... artikel lainnya bisa ditambahkan di sini
};

const Article = () => {
  const { slug } = useParams();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="text-gray-600">Artikel tidak ditemukan.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>
            <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;