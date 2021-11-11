import React from "react";

function About() {
  return (
    <div className="">
      <section className="bg-gradient-to-r from-green-200 to-blue-300">
        <p className="uppercase tracking-loose mb-4 text-xl md:text-4xl">
          About
        </p>
        <p className="uppercase tracking-loose font-semibold mb-4 text-xl md:text-5xl">
          Jg Agency
        </p>
      </section>

      <section className=" mb-4 container mx-auto bg-gray-100 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-10 md:my-10">
          <div className="w-full lg:w-1/2 lg:py-6 text-center">
            <img
              src="https://i.postimg.cc/rm02KfLG/lumensoft-technologies-Wa-GMKm-J2-F0-Y-unsplash.jpg"
              alt=""
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-4 pb-4 px-6">
            <p className="uppercase tracking-loose font-bold mb-4 text-xl md:text-4xl">
              Overview
            </p>

            <p className="leading-normal mb-4">
              Jg Agency is a leading Customer Relations company providing
              telemarketing and customer service solutions. We design, develop,
              operate and maintain values which will help you build customer
              loyalty.
            </p>
            <p className="leading-normal mb-4">
              Matching the customer demands of our clients’ industries, we
              provide fast and effective resolutions for your customers which
              helps improve your customer satisfaction. We aim to give our
              client’s the confidence to leverage our customer relations
              expertise to meet their customer needs.
            </p>
            <p className="leading-normal mb-4">
              Guided by our vision “To be earth's most customer-centric company
              where we serve the needs of our customers wherever they are and
              make them happy”, we offer services that support seamless
              interaction between people, systems, and the environment,
              utilizing technology for current and future needs.
            </p>
          </div>
        </div>
      </section>
      <section className=" mb-4 container mx-auto w-full ">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-10 md:my-10 divide-x divide-white">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-4 pb-4 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white border">
            <h1 className="font-semibold">Mission</h1>
            <p>
              To build a strong and profitable service that makes a difference
              on how customers are treated
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-4 pb-4 px-6 bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <h1 className="font-semibold">Vision</h1>

            <p>
              To be earths most customer-centric company where we serve the
              needs of our customers wherever they are and make them happy."
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h1 className="text-center text-4xl mb-6 md:text-6xl">
          Our Core Values
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex  overflow-hidden h-20 w-20">
              <img
                src="https://i.postimg.cc/NffW1LQS/adaptation.png"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Adaptability</h2>
            <p className="text-xs text-gray-500 text-center mt-3">
              We are flexible, resilient and adaptable to respond effectively to
              changing trends and innovation
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex overflow-hidden h-20 w-20">
              <img
                src="https://i.postimg.cc/zXt4p5BB/daily-tasks.png"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Accountability</h2>

            <p className="text-xs text-gray-500 text-center mt-3">
              We are willing to show our customers that we really do care about
              them, and carry with this an unspoken pledge to respond to a
              customer's request for information or help
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex overflow-hidden h-20 w-20">
              <img
                src="https://i.postimg.cc/g21QFD3b/diversity.png"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Diversity</h2>

            <p className="text-xs text-gray-500 text-center mt-3">
              We promote acceptance, respect and teamwork from people with
              different backgrounds, skills and experiences
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex  overflow-hidden h-20 w-20">
              <img
                src="https://i.postimg.cc/P5C9RcpM/woman.png"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Customer Obsession</h2>

            <p className="text-xs text-gray-500 text-center mt-3">
              We consistently listen to customers to enhance and improve their
              experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
