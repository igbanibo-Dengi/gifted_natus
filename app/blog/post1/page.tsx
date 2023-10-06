import Image from "next/image";
import React from "react";
import Img from "../../../public/com-img-10.jpg";

const page = () => {
  return (
    <main className="container max-w-[800px] pt-32">
      <section className=" pb-40">
        <div className="flex flex-col-reverse gap-10 mx-auto justify-center items-center  mb-20">
          <header className="basis-1/2 flex flex-col sm:flex-row w-full justify-between">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold uppercase">
              Opu-Nembe Crises
            </h1>
            <span className="text-primary">-01-02-2023</span>
          </header>
          <Image
            src={Img}
            alt="post img"
            width={800}
            height={500}
            className="basis-1/2 rounded-md"
          />
        </div>

        <div className="space-y-10 max-w-[800px] mx-auto md:text-[17px] font-[400]">
          <p>
            GIFTED NATUS FOUNDATION TAKES STEPS TO EVACUATE DISPLACED PERSONS
            FROM OPU-NEMBE TO YENAGOA
          </p>

          <p className="indent-10">
            In view of the lingering crisis rocking Opu-Nembe Kingdom, one of
            the major kingdoms in Nembe Local Government Area of Bayelsa state
            that has resulted in the loss of lives and properties, varying
            degrees of casualties and displacement of men, women and children,
            the CEO Gifted Natus Foundation, Comr. Hon. Gifted Natus has taken a
            bold step to support the evacuation of displaced persons who may
            want to come to yenagoa, the Bayelsa state capital to take refuge
            pending when the crisis will be resolved amicably.
          </p>

          <p>
            In a statement signed by the Director of Media and Publicity of the
            foundation, Mr Ogbomade Johnson said those who are from Opu-Nembe
            origin that want to come to Yenagoa should come to King Koko Square
            in Nembe City by 10AM. That sienna buses have been made available to
            convey them to Yenagoa.
          </p>

          <p>
            The statement directed that the flier be viewed for more details and
            that the phone numbers on the fliers can also be called for
            directions.{" "}
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
