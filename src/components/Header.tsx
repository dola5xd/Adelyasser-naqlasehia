import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ToggleMode from "./ToggleMode";
import { Search } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setSearchQuery } from "@/features/searchSlice";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-screen border-b border-gray-100 shadow-sm bg-gray-50 dark:bg-zinc-900 dark:border-gray-800">
      <nav className="flex items-center justify-between h-20 px-4 mx-auto max-w-7xl md:px-8 lg:px-20">
        {/* Logo */}
        <h1 className="flex-shrink-0 text-xl font-bold md:text-2xl text-primary dark:text-indigo-400">
          Store
        </h1>

        {/* Desktop Search */}
        <div className="items-center hidden w-2/4 gap-2 md:flex">
          <Input
            type="text"
            placeholder={t("searchProducts")}
            className="w-full h-10 transition-colors duration-300 md:h-12 bg-gray-50 dark:bg-zinc-900 dark:text-gray-50 text-zinc-900"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            aria-label={t("searchProducts")}
          />
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center h-10 md:h-12"
            aria-label={t("searchProducts")}
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <ToggleMode />
          {/* Mobile Search Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            aria-label="Toggle search"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Search Input */}
      {mobileSearchOpen && (
        <div className="px-4 pb-2 transition-all duration-300 md:hidden">
          <Input
            type="text"
            placeholder={t("searchProducts")}
            className="w-full h-10 transition-colors duration-300 md:h-12 bg-gray-50 dark:bg-zinc-900 dark:text-gray-50 text-zinc-900"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            aria-label={t("searchProducts")}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
