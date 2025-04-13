import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import CountUp from "react-countup";

const homePage = () => {
  return (
    <div>
      <div class="bg-[url(/src/download.jpeg)] bg-cover bg-no-repeat h-[60vh] flex flex-col">
        <nav class="flex justify-between items-center p-4">
          <img class="w-40" src="/src/logo.webp" />
          <div class="flex flex-row justify-between gap-4">
            <CiSearch size={32} color="white" />
            <RxHamburgerMenu size={32} color="white" />
          </div>
        </nav>
        <div class="text-center mt-10 flex flex-col items-center">
          <h1 class="text-center font-extrabold text-white text-3xl ">
            Turning Creative Ideas into Success
          </h1>
          <p class="text-white text-center mt-2 p-4">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc.
          </p>
          <button class="bg-blue-300 font-extrabold text-white w-48 py-2 px-4 rounded-full mt-4">
            Discover Now
          </button>
        </div>

        <section class="bg-[AABBCC]">
          <div class="flex flex-row justify-center items-center ">
            <img class="w-52 relative z-0" src="/src/h3l.webp" />
            <img
              class="w-52 mt-60 relative z-10 -ml-[20%]"
              src="/src/h3r.webp"
            />
          </div>
          <div class="mt-7 p-5">
            <h4 class="text-sm font-bold">CREATIVE AGENCY</h4>
            <h2 class="text-2xl font-bold">We help your business grow</h2>
            <p class="">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>
          <div class="p-5">
            <div class="flex flex-row">
              <MdOutlineDesignServices size={40} />
              <div class="flex flex-col ml-7">
                {" "}
                <span class="text-xl font-bold">Creative design</span>
                <p>Natus error sit voluptatem accus antium doloremque.</p>
              </div>
            </div>
            <div class="flex flex-row">
              <FaCloudDownloadAlt size={40} />
              <div class="flex flex-col ml-6">
                {" "}
                <span class="text-xl font-bold">Endless possibilities</span>
                <p>Sit voluptatem accus antium doloremque laudan.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="flex flex-col mt-20 gap-10">
          <div>
            <p class="z-10 text-xl font-bold text-center relative -mb-[17%]">
              Projects
            </p>
            <h1 class="text-center text-blue-100 relative z-0 font-bold text-8xl">
              <CountUp start={0} end={93} duration={2.75} />
            </h1>
          </div>
          <div>
            <p class="z-10 text-xl font-bold text-center relative -mb-[17%]">
              People
            </p>
            <h1 class="text-center text-blue-100 relative z-0 font-bold text-8xl">
              <CountUp start={0} end={65} duration={2.75} />
            </h1>
          </div>
          <div>
            <p class="z-10 text-xl font-bold text-center relative -mb-[17%]">
              Years
            </p>
            <h1 class="text-center text-blue-100 relative z-0 font-bold text-8xl">
              <CountUp start={0} end={10} duration={2.75} />
            </h1>
          </div>
          <div>
            <p class="z-10 text-xl font-bold text-center relative -mb-[17%]">
              Offices
            </p>
            <h1 class="text-center text-blue-100 relative z-0 font-bold text-8xl">
              <CountUp start={0} end={15} duration={2.75} />
            </h1>
          </div>
        </section>

        <section>
          <div class="mt-7 p-5">
            <h4 class="text-sm font-bold">CREATIVE SOLUTIONS</h4>
            <h2 class="text-2xl font-bold">
              We make unique & memorable brands
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate velit iusto odio dignissimos duci esse.
              <br></br>
              <br></br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
            <br></br>
            <span className="relative inline-block pb-1 group">
              <span className="font-bold">Read more</span>
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-current w-full 
                  transition-all duration-300 ease-out 
                  group-hover:w-0"
              ></span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default homePage;
