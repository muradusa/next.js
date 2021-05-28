import { Icon, InlineIcon } from "@iconify/react";

import next from "../src/svg/next";
import aws from "../src/svg/aws";
import graphql from "../src/svg/graphql";
import react from "../src/svg/react";
import redux from "../src/svg/redux";
import tailwindcss from "../src/svg/tailwindcss";

const features = [
  {
    name: "Next JS",
    description:
      "Massive performance boost with Server Side Rendering (SSR), best SEO practices, image optimizations, typescript support, and much more... ",
    icon: next,
  },
  {
    name: "React JS",
    description:
      "React is the most loved web framework that allows building high-quality and rich user interfaces, useful developer tools, strong community support. ",
    icon: react,
  },
  {
    name: "Graphql",
    description:
      "Fetching data with a single API call in a predictable way, tailoring requests to your needs, validation and type checking out of the box.",
    icon: graphql,
  },
  {
    name: "TailwindCSS",
    description:
      "Build pixel-perfect, complex responsive layouts, fully customizable UI components. File size reduced considerably by using PurgeCSS, hence increasing overall performance.",
    icon: tailwindcss,
  },
  {
    name: "Redux",
    description:
      "Easy state transfer between the components, predictable states, ease in maintenance, server rendering, vast developer tools, great supportive community. ",
    icon: redux,
  },
  {
    name: "AWS",
    description:
      "I am using numerous AWS services like S3 buckets for image and video uploads, EC2 instances, Lambda functions, AWS Elemental for decoding videos and adapting bitrate media streaming.",
    icon: aws,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Cool Tech
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build apps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some cool technologies i have been learning and
            experimenting with to make my web apps more performant and pixel
            perfect.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <Icon
                      className="h-12 w-12"
                      aria-hidden="true"
                      icon={feature.icon}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
