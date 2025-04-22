import { type RouteConfig, index, route } from "@react-router/dev/routes";
// import Company from "src/pages/company/Company";
export default [index("routes/home.tsx"), route("company", "routes/company.tsx"), route("pricing","routes/pricingpage.tsx"), route("products","routes/productspage.tsx"), route("about","routes/companyaboutus.tsx")] satisfies RouteConfig;
