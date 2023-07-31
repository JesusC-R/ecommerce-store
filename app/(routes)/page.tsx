import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidation = 0;

const HomePage = async () => {
  const featuredProducts = await getProducts({ isFeatured:true });
  const billboard = await getBillboard("c3ad251a-0e56-48a6-842e-7945f75be8db");

  return (
    <div className="space-y-10 pb-10">
      <Container>
        <Billboard data={billboard}/>
      </Container>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={featuredProducts}/>
      </div>
    </div>
  );
}

export default HomePage;
