interface NewsCardProps {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  url: string;
  date: string;
}

const NewsCard = ({ title, image, category, excerpt, url, date }: NewsCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <a href={url} className="block">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4">
        <span className="text-primary text-sm font-semibold">{category}</span>
        <h3 className="mt-2 text-xl font-bold">
          <a href={url} className="hover:text-primary transition-colors">
            {title}
          </a>
        </h3>
        <p className="mt-2 text-gray-600 text-sm">{excerpt}</p>
        <time className="mt-4 text-gray-500 text-sm block">{date}</time>
      </div>
    </article>
  );
};

export default NewsCard;