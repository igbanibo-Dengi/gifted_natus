import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Posts = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center my-28">
      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/com-img-20.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            Special Announcement{" "}
          </h3>
          <p className="max-w-[500px]">
            Special Announcement The G-SKILL 2023 Powered by Gifted Natus
            Foundation has added additional training to the G-SKILL 2023.
            Training Added 1. Paint Production/ Soap Making Interested persons
            are to contact the committee members to pick up their forms from
            today.
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>

      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/post-img-1.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            50 QUALIFIED STUDENTS FOR ROUND 2
          </h3>
          <p className="max-w-[500px]">
            The steering committee of the Bayelsa Mathematics Quiz Competition
            has officially released the list of the 50 successful students going
            through to the next round after a CBT exam held on Saturday 1st
            July. The Director Media/Publicity of the committee, Mr. Ogbomade
            Johnson informs that the students were carefully selected based on
            their scores.
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>

      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/post-img-2.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            Scholarship Grant
          </h3>
          <p className="max-w-[500px]">
            The CEO of Gifted Natus Foundation, Hon Comr. Gifted Natus has
            awarded scholarship from Pre-Nursery to University to little Master
            Goodluck Kingsley and placed him on monthly allowance of ₦50,000
            through his foundation..
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>

      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/post-img-3.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            beneficaiaries of G-Skill batch B
          </h3>
          <p className="max-w-[500px]">
            In the early hours of today, the board, members of the foundation,
            training facilitators, G-Skill Batch B steering committee led by her
            chairman 𝐌𝐫. 𝐉𝐨𝐡𝐧𝐬𝐨𝐧 𝐎𝐠𝐛𝐨𝐦𝐚𝐝𝐞, beneficiaries and well wishers
            receives her benefactor, principal and Chief Executive Officer.
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>

      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/post-img-4.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            DISCLAIMER:
          </h3>
          <p className="max-w-[500px]">
            The attention of the Gifted Natus Foundation has been drawn to a
            publication made by one APA AVIATION LIMITED of partnering with our
            foundation to train youths and also collecting token from the
            beneficiaries .
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>

      <div className="post flex flex-col sm:flex-row gap-10 lg:gap-20">
        <div className="flex justify-center items-center">
          <Image
            src="/post-img-5.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-fit"
          />
        </div>
        <div className="flex flex-col justify-around gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold uppercase">
            G-skill aquisition update
          </h3>
          <p className="max-w-[500px]">
            This is to inform all beneficiaries of the 𝐆𝐢𝐟𝐭𝐞𝐝 𝐍𝐚𝐭𝐮𝐬 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧
            𝐒𝐤𝐢𝐥𝐥 𝐀𝐜𝐪𝐮𝐢𝐬𝐢𝐭𝐢𝐨𝐧 𝐓𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐞 Batch 2 to visit the Foundation
            Office to pick up their registration forms
          </p>
          <Button className="mb-5 w-fit">
            <Link href="/blog/post1">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Posts;
