import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
const ProductList = lazy(() => import("@/components/ProductList"));

function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <Suspense
        fallback={
          <div
            className={`min-h-[calc(100vh-155px)] flex flex-col gap-2 justify-center items-center bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100`}
            role="status"
            aria-live="polite"
          >
            <Spinner />
          </div>
        }
      >
        <ProductList />
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
