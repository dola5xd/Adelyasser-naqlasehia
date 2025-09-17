import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-100 shadow-sm dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
      <div className="flex flex-col items-center justify-between gap-6 px-4 py-8 mx-auto max-w-7xl md:flex-row">
        <h2
          className="flex-shrink-0 text-lg font-bold text-indigo-600 md:text-xl dark:text-violet-400"
          aria-label={"Store"}
        >
          Store
        </h2>

        <nav
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-800 md:text-base dark:text-gray-200"
          aria-label={t("footerNavigation")}
        >
          {["home", "products", "about", "contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors rounded hover:text-indigo-600 dark:hover:text-violet-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-violet-300"
            >
              {t(link)}
            </a>
          ))}
        </nav>

        <p className="flex-shrink-0 text-xs text-center text-gray-700 md:text-sm dark:text-gray-400 md:text-right">
          © {new Date().getFullYear()} Store. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
