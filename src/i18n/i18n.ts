import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          products: "Products",
          about: "About",
          contact: "Contact",
          ourProducts: "Our Products",
          loading: "Loading products...",
          errorProducts: "Failed to load products:",
          noProducts: "No products found.",
          searchProducts: "Search for products...",
          retry: "Retry",
          allRightsReserved: "All Rights Reserved",
        },
      },
      ar: {
        translation: {
          home: "الرئيسية",
          products: "المنتجات",
          about: "من نحن",
          contact: "تواصل معنا",
          ourProducts: "منتجاتنا",
          loading: "جاري تحميل المنتجات...",
          errorProducts: "حدث خطأ أثناء التحميل",
          noProducts: "لا توجد منتجات.",
          retry: "أعد المحاولة",
          searchProducts: "ابحث عن منتجات...",
          allRightsReserved: "كل الحقوق محفوظة",
        },
      },
    },
    lng: "ar",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const setDirection = (lng: string) => {
  if (lng === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
};

// 🔹 Force direction immediately
setDirection(i18n.language);

// 🔹 Keep in sync after init and language changes
i18n.on("initialized", () => setDirection(i18n.language));
i18n.on("languageChanged", (lng) => setDirection(lng));

export default i18n;
