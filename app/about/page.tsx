import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="container pt-32">
      <section>
        <h1 className="leading-none text-[28px] md:text-[35px] font-bold capitalize text-center mb-10">
          about us
        </h1>

        <div className="flex flex-col gap-5 max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold capitalize">
            History
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            laborum dolorem error est doloremque harum facere, qui, odio,
            corrupti natus vel laboriosam voluptatem. Ex nihil doloribus eum vel
            fugit assumenda beatae commodi corrupti ab saepe accusantium, in
            ipsam tempora labore, iusto cum consectetur odio magni nulla,
            suscipit excepturi doloremque necessitatibus?
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold capitalize">
            Mission
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab
            numquam voluptas odit? Omnis eos in molestias delectus iste,
            ducimus, voluptatum corporis dolorum, cum odit mollitia ipsam
            asperiores esse officiis vel sint officia dicta nulla accusamus enim
            deleniti! Illum a voluptatum sint eaque maxime dignissimos
            laboriosam, suscipit aspernatur quisquam similique.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold capitalize">
            Vision
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
            maiores odit aspernatur a, perferendis aliquid beatae ipsum, harum
            quae deserunt exercitationem. Molestiae temporibus nesciunt,
            accusantium, dolorem voluptatibus reiciendis quisquam delectus
            quaerat unde qui recusandae consequuntur voluptatum culpa officiis
            tempora vel esse atque fuga iste. Inventore vel omnis veniam hic.
          </p>
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto mt-20 pb-20">
        <div className="md:float-left flex justify-center items-center">
          <Image
            src="/ceo-img.jpg"
            alt="Natus"
            width={500}
            height={500}
            className="mr-4 mb-4"
          />
        </div>

        <div className="space-y-5 mt-10">
          <h2 className="text-2xl font-semibold text-primary">
            Hon. Gifted Natus
          </h2>
          <h3 className="text-lg font-semibold">
            CEO, Gifted Natus Foundation
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            atque velit quidem ipsum dolor facere odio quam consectetur
            blanditiis! Commodi, quo? Nihil ea molestiae doloribus ratione
            possimus qui dignissimos hic beatae nobis placeat, asperiores sed
            autem commodi itaque, vitae, debitis obcaecati illo nulla saepe aut
            quo! Quisquam aperiam esse aliquam voluptas ratione eligendi animi
            ad corrupti. Debitis commodi, pariatur omnis sed voluptas earum
            nulla dicta veritatis quae cum. Ab dolor animi consequatur earum eum
            officiis, amet iste ipsam in illo doloribus alias recusandae quidem
            molestias aperiam debitis consectetur velit sed vero ducimus rerum
            esse.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quae
            quas deserunt magni pariatur quo? Sint mollitia eius aperiam fuga
            aspernatur quasi incidunt, distinctio, vero officia alias ullam
            architecto modi illum ipsam possimus commodi deserunt. Fuga commodi
            iste delectus molestias quis? Veritatis labore porro itaque rem.
            Explicabo voluptas repellat ad adipisci vel tenetur sunt sint
            asperiores laboriosam doloribus, nemo voluptatum modi, ipsam
            praesentium possimus non fugiat aliquam quibusdam nisi natus! Modi,
            dolore. Tenetur, dicta possimus quas molestiae maxime accusamus in
            ab perferendis beatae, amet, sit dolorem recusandae labore voluptas
            animi quo accusantium cumque sint mollitia ipsam maiores sapiente
            nostrum consectetur?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            possimus consequuntur laborum consequatur dolorem voluptates ullam
            perferendis exercitationem, minus magnam quis laboriosam, sequi
            eligendi numquam nesciunt temporibus nam quo accusantium error.
            Animi placeat incidunt consectetur deserunt! Repellat, error
            laudantium cum libero vitae, ipsum voluptate eveniet sint voluptatem
            numquam perferendis. Accusamus, temporibus cum totam corrupti quasi
            architecto nemo amet provident eveniet?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eum
            vero cumque, delectus amet recusandae voluptatem velit laudantium
            excepturi hic deserunt veritatis maiores placeat earum quo nobis
            vitae rerum libero? Aspernatur omnis odio voluptatum minima quas
            dicta ab aperiam, eveniet dolorem impedit magni cum inventore quos
            quibusdam! Labore enim nulla cum id optio quia necessitatibus
            tenetur eveniet voluptatibus minima? Eaque nihil doloribus eum
            quidem maiores, repellat consequuntur adipisci suscipit iure fugit
            mollitia aliquid sint tenetur, necessitatibus voluptates. Laborum,
            fuga optio?
          </p>
        </div>
      </section>
      <section className=" dark:bg-zinc-950  bg-slate-300  md:p-10 mb-20">
        <h2 className="leading-none text-[28px] md:text-[35px] font-bold uppercase text-center mb-10">
          board of directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 md:p-10 gap-5">
          <div>
            <Image
              src="/d-1.jpg"
              alt="director"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-center mt-3">John Doe</p>
            <p className="text-center text-primary font-semibold">President</p>
          </div>

          <div>
            <Image
              src="/d-2.png"
              alt="director"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-center mt-3">Lois Lane</p>
            <p className="text-center text-primary font-semibold">Secretary</p>
          </div>

          <div>
            <Image
              src="/d-3.png"
              alt="director"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-center mt-3">Robert Kane</p>
            <p className="text-center text-primary font-semibold">Treasure</p>
          </div>

          <div>
            <Image
              src="/d-4.jpg"
              alt="director"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-center mt-3">Samantha Brown</p>
            <p className="text-center text-primary font-semibold">
              Administrator
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
