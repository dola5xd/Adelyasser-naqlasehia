import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
  Product,
} from "../features/productsSlice";
import { Button } from "@/components/ui/button";
const ProductCard = lazy(() => import("@/components/ProuctCard"));
import { selectSearch } from "@/features/searchSlice";
import { useTranslation } from "react-i18next";
import Spinner from "./Spinner";
import { Skeleton } from "@/components/ui/skeleton";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const products = useAppSelector(selectProducts) as Product[];
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);
  const query = useAppSelector(selectSearch);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  const minHeight = "min-h-[calc(100vh-155px)]";

  // Loading state
  if (status === "loading") {
    return (
      <div
        className={`${minHeight} flex flex-col gap-2 justify-center items-center bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100`}
        role="status"
        aria-live="polite"
      >
        <Spinner />
        <span className="sr-only">{t("loading")}</span>
        <p>{t("loading")}</p>
      </div>
    );
  }

  // Error state
  if (status === "failed") {
    return (
      <div
        className={`flex flex-col justify-center items-center text-center gap-4 ${minHeight}`}
        role="alert"
      >
        <p className="font-medium text-red-600 dark:text-red-400">
          {t("errorProducts")} {error}
        </p>
        <Button
          variant="outline"
          onClick={() => dispatch(fetchProducts())}
          className="text-indigo-500 border-indigo-500 hover:bg-indigo-50 dark:border-violet-500 dark:text-violet-400 dark:hover:bg-zinc-800"
          aria-label={t("retry")}
        >
          {t("retry")}
        </Button>
      </div>
    );
  }

  // Empty state
  if (status === "succeeded" && filteredProducts.length === 0) {
    return (
      <div
        className={`w-full flex flex-col text-center px-6 md:px-20 gap-6 py-10 ${minHeight} bg-gray-50 dark:bg-zinc-900 transition-colors duration-300`}
        role="status"
        aria-live="polite"
      >
        <p className="font-medium text-gray-500 dark:text-gray-400">
          {t("noProducts")}
        </p>
      </div>
    );
  }

  // Success state
  return (
    <div
      className={`w-full flex flex-col px-6 lg:px-20 gap-6 py-10 ${minHeight} bg-gray-50 dark:bg-zinc-900 transition-colors duration-300`}
    >
      <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
        {t("ourProducts")}
      </h1>
      <div className="grid grid-cols-1 gap-6 md:gap-2 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <Suspense
            key={product.id}
            fallback={<Skeleton className="h-[250px] rounded" />}
          >
            <ProductCard product={product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
