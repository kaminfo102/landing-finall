import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = {
  "modern-architecture": {
    title: "هنر معماری مدرن",
    date: "۲۵ فروردین ۱۴۰۴",
    author: "سارا جانسون",
    content: `
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.

      و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.

      تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
    `,
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop&q=60"
    ]
  },
  "sustainable-living": {
    title: "زندگی پایدار در سال ۲۰۲۵",
    date: "۲۴ فروردین ۱۴۰۴",
    author: "محمد چن",
    content: `
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.

      و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.

      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
    `,
    images: [
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&auto=format&fit=crop&q=60"
    ]
  },
  "digital-innovation": {
    title: "روندهای نوآوری دیجیتال",
    date: "۲۳ فروردین ۱۴۰۴",
    author: "امیلی رودریگز",
    content: `
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.

      و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.

      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
    `,
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return <div>مقاله یافت نشد</div>;
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowRight className="ml-2 h-4 w-4" />
          بازگشت به مقالات
        </Link>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>

        <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={article.images[0]}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {article.images.slice(1).map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${article.title} - تصویر ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}