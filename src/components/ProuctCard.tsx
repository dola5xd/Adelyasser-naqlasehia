import { Product } from "@/features/productsSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ProductCard({ product }: { product: Product }) {
  const { image, title, price, description, category } = product;
  const shortDescription =
    description.length > 80 ? description.slice(0, 80) + "…" : description;

  // Assign colors based on category
  const categoryColors: Record<string, string> = {
    electronics:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    jewelery:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "men's clothing":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "women's clothing":
      "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  };

  return (
    <Card
      className="flex flex-col md:flex-row items-center gap-4 rounded-xl shadow transition-transform hover:scale-105 duration-300 lg:max-h-[250px] overflow-hidden"
      role="region"
      aria-label={title}
    >
      <div className="flex items-center justify-center flex-shrink-0 w-full p-4 md:w-1/3">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={200}
          height={200}
          className="object-contain w-full h-40 rounded-md"
        />
      </div>

      <CardContent className="w-full space-y-2 md:w-2/3">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-bold line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>

        <p
          className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2"
          aria-label={description}
        >
          {shortDescription}
        </p>

        <span
          className={`px-2 py-1 text-xs rounded-full font-semibold capitalize inline-block ${
            categoryColors[category] ||
            "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          }`}
          aria-label={`Category: ${category}`}
        >
          {category}
        </span>

        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-semibold text-indigo-600 dark:text-violet-400">
            ${price}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
