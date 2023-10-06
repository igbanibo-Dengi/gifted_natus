import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Community = () => {
  return (
    <section className="">
      <main className="container py-32">
        <h2 className="text-2xl md:text-3xl mb-8 font-semibold text-center uppercase mx-auto">
          Community Outreach
        </h2>
        <p className="text-center max-w-[800px] mx-auto mb-6">
          In addition to education, the OWCF has always supported grassroots
          organizations in their efforts to lift the most vulnerable in their
          communities. In 2020, with millions of people struggling to buy food,
          pay rent and find health care, the foundation has pivoted during the
          pandemic to commit more resources to local groups. In particular,
          we&apos;ve launched initiatives in partnership with local
          organizations in my “Hometowns” of Chicago, Nashville, Milwaukee and
          Kosciusko, Mississippi.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          <div className="flex flex-col justify-between items-center gap-5 dark:bg-zinc-900 bg-slate-100 p-5">
            <div>
              <Image
                src="/com-img-10.jpg"
                alt="image"
                width={500}
                height={500}
                className="object-fit"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Opu-Nembe Crises
            </h3>
            <p className="max-w-[500px] capitalize">
              In view of the lingering crisis rocking Opu-Nembe Kingdom, one of
              the major kingdoms in Nembe Local Government Area of Bayelsa state
              that has resulted in the loss of lives and properties, , the CEO
              Gifted Natus Foundation, Comr. Hon. Gifted Natus has taken a bold
              step to support the evacuation of displaced person
            </p>
            <Button className="mb-5">
              <Link href="/blog/post1">Learn More</Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between items-center gap-5 dark:bg-zinc-900 bg-slate-100 p-5">
            <div>
              <Image
                src="/com-img-20.jpg"
                alt="image"
                width={500}
                height={500}
                className="object-fit"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Special Announcement
            </h3>
            <p className="max-w-[500px] capitalize">
              Special Announcement The G-SKILL 2023 Powered by Gifted Natus
              Foundation has added additional training to the G-SKILL 2023.
              Training Added 1. Paint Production/ Soap Making Interested persons
              are to contact the committee members to pick up their forms from
              today.
            </p>
            <Button className="mb-5">
              <Link href="/blog/post1">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="mt-20 w-fit mx-auto">
          <Link href="/blog">
            <Button size={"lg"}>Visit Our Blog</Button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Community;
