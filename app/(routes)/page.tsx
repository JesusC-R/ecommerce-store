import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidation = 0;

const HomePage = async () => {
  const billboard = await getBillboard("c3ad251a-0e56-48a6-842e-7945f75be8db");

  return (
    <div className="space-y-10 pb-10">
      <Container>
        <Billboard data={billboard}/>
      </Container>
    </div>
  );
}

export default HomePage;
