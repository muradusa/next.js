// /* This example requires Tailwind CSS v2.0+ */
// import {
//   AnnotationIcon,
//   GlobeAltIcon,
//   LightningBoltIcon,
//   ScaleIcon,
// } from "@heroicons/react/outline";

import { Icon, InlineIcon } from "@iconify/react";
// import nextjsIcon from "@iconify-icons/logos/nextjs";
// import reactIcon from "@iconify-icons/logos/react";
// import graphqlIcon from "@iconify-icons/logos/graphql";
// import tailwindcssIcon from "@iconify-icons/logos/tailwindcss-icon";
// import mongodbIcon from "@iconify-icons/logos/mongodb";
// import awsIcon from "@iconify-icons/logos/aws";
// import reduxIcon from "@iconify-icons/logos/redux";
// import firebaseIcon from "@iconify-icons/logos/firebase";
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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: next,
  },
  {
    name: "React JS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: react,
  },
  {
    name: "Graphql",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: graphql,
  },
  {
    name: "TailwindCSS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: tailwindcss,
  },
  {
    name: "Redux",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: redux,
  },
  {
    name: "AWS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: aws,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Transactions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
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
