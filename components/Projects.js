/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon, CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Front End",
    description1:
      "You can manage phone, email and chat conversations all from a single mailbox.",
    description2:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Back End",
    description1:
      "You can manage phone, email and chat conversations all from a single mailbox.",
    description2:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "User Authentication",
    description1:
      "You can manage phone, email and chat conversations all from a single mailbox.",
    description2:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "State and Data Management",
    description1:
      "You can manage phone, email and chat conversations all from a single mailbox.",
    description2:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
];

export default function Example() {
  return (
    <div
      id="projects"
      className="relative bg-white pt-16 pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center pb-10">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Some of my cool apps
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Here are a few projects that i recently built. Please feel free to
          check them out and see github for code.
        </p>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-4 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  A family chat web app
                </h2>
                <div className="mt-12 lg:mt-4 lg:col-span-2">
                  <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-4 lg:gap-x-8">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <CheckIcon
                            className="absolute h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-9 text-base text-gray-500">
                          {feature.description1}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://cholukov-family-chat.web.app/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-8"
                    >
                      Demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      target="_blank"
                      href="https://github.com/muradusa/USA-TM-Chat-react-firebase"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-8"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-1"></div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <a target="_blank" href="https://cholukov-family-chat.web.app/">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none cursor-pointer"
                  src="/chatapp.png"
                  alt="Inbox user interface"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-4 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Video sharing app from memorable hunts
                </h2>
                <div className="mt-12 lg:mt-4 lg:col-span-2">
                  <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-4 lg:gap-x-8">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <CheckIcon
                            className="absolute h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-9 text-base text-gray-500">
                          {feature.description2}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://stormy-shelf-52887.herokuapp.com/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-8"
                    >
                      Demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      target="_blank"
                      href="https://github.com/muradusa/ishoot"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-8"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-1"></div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <a
                target="_blank"
                href="https://stormy-shelf-52887.herokuapp.com/"
              >
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none cursor-pointer"
                  src="ishoot.png"
                  alt="Customer profile user interface"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
