import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("4ce16a4b-b41c-4176-844b-55f07560eff8");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts}/>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
