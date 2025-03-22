import ProductList from "@/components/shared/product/product-list";
import sampleData, { Product } from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <ProductList
        title="Newest Arrivals"
        data={sampleData.products as Product[]}
        limit={4}
      />
    </>
  );
};

export default HomePage;
