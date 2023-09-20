import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import unnamed from "../../public/unnamed.jpg";
import capture from "../../public/Capture2.png";
import capture2 from "../../public/Capture3.png";
import cap4 from "../../public/Cap5.png";
import reactSvg from "../../public/React-icon.svg.png";
import django from "../../public/Django.png";
import redux from "../../public/redux.jpg";
import azure from "../../public/azure.png";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <section
        className="min-h-screen px-10 bg-gradient-to-bl from-slate-800"
        style={{ backgroundColor: "#111827" }}
      >
        <nav className="py-10 flex justify-between">
          <div className="text-lg text-gray-300 flex inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Copenhagen
          </div>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer px-4 text-gray-900"></BsFillMoonStarsFill>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/12DebQqSgc_5RXM1wpFDjWEb3J3OxUJ97/view?usp=sharing"
                target="_blank"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 bg-cyan-900 border-none rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-gray-900 text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Benjamin Agic
          </h2>
          <h3 className="text-2xl py-2 text-gray-300">
            Web Developer and Data automation
          </h3>

          <p className="text-md py-5 leading-8 text-gray-300">
            Masters graduate in Mediology that has over 4 years of experiance
            with developing web applications, designing software and some data
            automation pipeline including data analysis. I mainly work in
            Javascript and Python but I also like working with new stuff as its
            always exciting to expand my horizonts.<br></br>
            In my free time I enjoy hanging out with friends, exploring,
            traveling, playing football and surfing..if conditions are good ;)
            If you would like to get in touch and talk about any of the stuff I
            mention above, feel free to reach out on one of those links below. I
            am always looking for something fun to work on!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
          <a href="https://github.com/FindingBen" target="_blank">
            <AiFillGithub className="hover:bg-gray-800 rounded-md cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-agic-1a055a10b/"
            target="_blank"
          >
            <AiFillLinkedin className="hover:bg-gray-800 rounded-md cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/benii14/" target="_blank">
            <AiFillInstagram className="hover:bg-gray-800 rounded-md cursor-pointer" />
          </a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 overflow-hidden mt-5">
          <Image src={unnamed} layout="fill" objectFit="cover" />
        </div>
        <div className="">
          <h3 className="text-3xl py-1 text-gray-400 flex justify-center mt-10">
            Projects I worked on
          </h3>
          <div className="flex flex-col md:flex-row sm:flex-row mt-10 justify-center">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-0 sm:ml-0 mb-10">
              <a href="#">
                <Image class="rounded-t-lg" src={cap4} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sendperplane - marketing platform
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  SaaS developed for micro messeging allowing users to create a
                  personalized content and use sms service to send it to their
                  customers allowing them to have a better response from
                  customers.
                </p>
                <div className="flex inline-flex">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    React
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Jscript
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Rest Api
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Django
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Stripe
                  </span>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:my-0 my-3 lg:mx-6 lg:mb-10 md:mx-6">
              <a href="https://app.getlouis.com/" target="_blank">
                <Image
                  class="rounded-t-lg"
                  src={capture}
                  alt=""
                  width={590}
                  height={180}
                  objectFit="cover"
                />
              </a>
              <div class="p-5">
                <a href="https://app.getlouis.com/" target="_blank">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GetLouis - influencer platform
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  SaaS platform which was developed during my internship. This
                  platform helps connect brands and influencers based on their
                  prefference.
                </p>

                <div className="flex inline-flex">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    Django
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    Python
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    Rest Api
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    Redis
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    React
                  </span>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
              <a href="#">
                <Image class="rounded-t-lg" src={capture2} alt="" width={390} />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Automatized data fetching and display on PowerBi
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  This project was done during my employement with Foss
                  Analytics. It integrates microsoft Azure platform with powerBi
                  making the updates to data which is being shown on charts.
                </p>
                <div className="flex inline-flex">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    .Net
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    C#
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2  rounded dark:bg-blue-900 dark:text-blue-300">
                    Azure
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    Azure storage
                  </span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">
                    PowerBi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-20">
          <h3 className="text-3xl py-1 text-gray-400 flex justify-center mt-10">
            Technology I work with
            <br></br>
          </h3>

          <ul className="text-gray-400 flex justify-between mb-10">
            <li>
              <Image src={reactSvg} width={150} />
            </li>
            <li>
              <Image src={django} width={150} />
            </li>
            <li>
              <Image src={redux} width={150} />
            </li>
            <li>
              <Image src={azure} width={150} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
