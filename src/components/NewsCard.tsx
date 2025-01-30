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
      <a href={url} className="block aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
        />
      </a>
      <div className="p-3 md:p-4">
        <span className="text-primary text-xs md:text-sm font-semibold">{category}</span>
        <h3 className="mt-1 md:mt-2 text-base md:text-xl font-bold line-clamp-2">
          <a href={url} className="hover:text-primary transition-colors">
            {title}
          </a>
        </h3>
        <p className="mt-1 md:mt-2 text-gray-600 text-sm line-clamp-2">{excerpt}</p>
        <time className="mt-2 md:mt-4 text-gray-500 text-xs md:text-sm block">
          {date}
        </time>
      </div>
    </article>
  );
};

export default NewsCard;