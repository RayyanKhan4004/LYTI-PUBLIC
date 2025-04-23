import ProductsDashboard from "../components/Products/components/ProductsDashboard";
import ProductsImages from "../components/Products/components/ProductsImages";
import ProductsFooter from "../components/Products/components/ProductsFooter";
import PublicDashboardNavbar from "../PublicDashboard/PublicDashboardNavbar";


function Products() {
  return (
    <>
    
    <PublicDashboardNavbar/>
    
    <div className="flex items-center justify-center w-full pt-[80px] font-semibold text-4xl font-poppin">
            <h1>Build, Coach and Scale a Profitable Real Estate</h1>
        </div>
        <ProductsDashboard/>
        <ProductsImages/>
        <ProductsFooter/>
    </>
  );
}

export default Products;
