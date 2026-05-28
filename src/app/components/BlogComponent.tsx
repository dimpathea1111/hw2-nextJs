import Link from "next/link";

interface BlogType {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponent({ id, title, body }: BlogType) {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <Link href={`/blog/${id}`}>z
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
      </Link>

      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          {body}
        </p>
      </div>
    </div>
  );
}


