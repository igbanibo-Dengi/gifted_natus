import Posts from "@/components/posts";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="container pt-20 md:pt-36">
      <h1 className="leading-none text-[28px] md:text-[35px] font-bold capitalize text-center mb-10">
        Our Stories
      </h1>
      <Posts />
      <section className="max-w-[800px] mx-auto mb-20 flex justify-between">
        <div className="cursor-not-allowed">
          <Button disabled className="cursor-not-allowed">
            PREV
          </Button>
        </div>
        <Button>NEXT</Button>
      </section>
    </main>
  );
};

export default page;
