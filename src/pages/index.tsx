import Head from "next/head";

export default function LandingPage() {
  return (
    <div className="main">
      <Head>
        <title>Get Instant Answers to Your PDF Questions with PDFChat</title>
      </Head>
      <div className="main-second">
        <div
          className="relative flex w-full flex-col items-center space-y-12 overflow-hidden pt-12 text-center md:py-32"
        >
          <div className="flex max-w-3xl flex-col space-y-4">
            <h1 className="text-4xl font-semibold leading-snug tracking-tight md:text-5xl">
              Get Accurate Answers About Any PDF with OpenAI's and Anthropic's AI
            </h1>
            <p className="text-gray-600">
              Instantly analyze any PDF file and get the answers you need in seconds. Try our platform now!
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <button
              className="w-full rounded-md bg-black mb-24 px-3 py-1.5 text-base font-medium text-white hover:bg-gray-800 md:w-auto"
              onClick={() => {
                window.location.href = "/chat";
              }}
            >
              Try It Now
            </button>
            <img
              src="/chat.png"
              className="relative z-50 rounded-xl md:w-auto md:inline-block hidden"
            />
            <div>
              <div
                className="absolute top-[30rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[37.5rem]"
              >
                <svg
                  width="277"
                  height="393"
                  viewBox="0 0 277 393"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0V115.588C0 189.162 29.1838 259.723 81.1314 311.748C133.079 363.773 203.535 393 277 393V277.412C277 203.838 247.816 133.277 195.869 81.252C143.921 29.2272 73.465 0 0 0Z"
                    fill="url(#paint0_linear_2_172)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_172"
                      x1="-106.596"
                      y1="-61.57"
                      x2="184.581"
                      y2="468.854"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0490857" stopColor="#E5E5E5" stopOpacity="0" />
                      <stop offset="0.906624" stopColor="#E5E5E5" stopOpacity="0.42" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="absolute top-[18rem] left-1/2 z-0 -ml-[40rem] w-[163.125rem] max-w-none sm:ml-[17.5rem]"
              >
                <svg
                  width="369"
                  height="600"
                  viewBox="0 0 369 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 369.231V600C97.8649 600 191.721 561.099 260.922 491.855C330.123 422.611 369 328.695 369 230.769V0C271.135 0 177.279 38.901 108.078 108.145C38.8767 177.389 0 271.305 0 369.231Z"
                    fill="url(#paint0_linear_2_171)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_171"
                      x1="-142"
                      y1="-94"
                      x2="333"
                      y2="661"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0490857" stopColor="#E5E5E5" stopOpacity="0" />
                      <stop offset="0.906624" stopColor="#E5E5E5" stopOpacity="0.42" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto w-full rounded-xl bg-neutral-800 p-6" id="faqs">
        <div className="flex w-full flex-col items-center space-y-12 py-12 text-center md:space-y-24 md:py-32">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold leading-snug text-white md:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="text-neutral-400">
              If you have any other question, email us at hey@zaid6.co
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:space-y-20">
            <div className="flex max-w-6xl">
              <div className="flex w-full flex-col justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-semibold text-white mb-5">Can I upload multiple PDF files at once?</p>
                    <p className="font-normal text-neutral-300">
                      Yes, you can upload multiple PDF files to our platform at once, making it easy to analyze large amounts of data quickly.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-semibold text-white mb-5">What types of questions can I ask about my PDF files?</p>
                    <p className="font-normal text-neutral-300">
                      You can ask any question related to the content of your PDF file. Our advanced machine learning algorithms can analyze even the most complex data to provide you with accurate answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-6xl">
              <div className="flex w-full flex-col justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-semibold text-white mb-5">How long does it take to receive an answer?</p>
                    <p className="font-normal text-neutral-300">
                      Our platform can provide you with an answer in just seconds, so you can get the information you need quickly and easily.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-semibold text-white mb-5">Is there a free trial available?</p>
                    <p className="font-normal text-neutral-300">
                      Yes, we offer a free trial of our platform so you can see for yourself how easy and accurate it is. Sign up today to get started!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto w-full rounded-xl bg-neutral-100 p-6" id="benefits">
        <div className="flex w-full flex-col items-center space-y-12 py-12 text-center md:space-y-20 md:py-32">
          <div className="flex max-w-xl flex-col space-y-2">
            <h1 className="text-3xl font-semibold leading-snug text-neutral-900 md:text-4xl">
              Why Choose Our AI-Powered Platform?
            </h1>
            <p className="text-neutral-600">
              Discover the key benefits of using PDFChat for analyzing your PDF files and getting answers fast!
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:space-y-20">
            <div className="flex max-w-6xl">
              <div className="flex w-full flex-col justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-medium">Accurate Answers</p>
                    <p className="font-normal text-neutral-600">
                      Our advanced machine learning algorithms can quickly and accurately analyze any PDF file to provide you with the answers you need.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-medium">Save Time</p>
                    <p className="font-normal text-neutral-600">
                      Get answers to your questions in seconds, allowing you to save time and be more productive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-6xl">
              <div className="flex w-full flex-col justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-12">
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-medium">User-Friendly</p>
                    <p className="font-normal text-neutral-600">
                      Our platform is easy to use, making it simple for anyone to upload PDFs and get instant answers to their questions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-left">
                  <div className="max-w-sm">
                    <p className="font-medium">Affordable</p>
                    <p className="font-normal text-neutral-600">
                      Get started with our free trial, and choose from affordable pricing plans that suit your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
