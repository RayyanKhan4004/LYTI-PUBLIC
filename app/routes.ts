import { type RouteConfig, index, route } from "@react-router/dev/routes";
// import Company from "src/pages/company/Company";
export default [index("routes/home.tsx"), route("pricing","routes/pricingpage.tsx"), route("products","routes/productspage.tsx"), route("about","routes/companyaboutus.tsx"), route("company","routes/company.tsx"), route("News","routes/news.tsx")] satisfies RouteConfig;
