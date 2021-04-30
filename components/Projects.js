function Projects() {
  return (
    <section className="p-4 lg:p-8 bg-coolGray-100 text-coolGray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="flex items-center justify-center flex-1 bg-purple-600">
            <img src="" alt="Image 1" className="p-8 h-60" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">
            <span className="text-xs uppercase text-coolGray-600">
              Join, it's free
            </span>
            <h2 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h2>
            <p className="my-6 text-coolGray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button className="self-start">Action</button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <div className="flex items-center justify-center flex-1 bg-purple-600">
            <img src="" alt="Image 1" className="p-8 h-60" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">
            <span className="text-xs uppercase text-coolGray-600">
              Join, it's free
            </span>
            <h2 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h2>
            <p className="my-6 text-coolGray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button className="self-start">Action</button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="flex items-center justify-center flex-1 bg-purple-600">
            <img src="" alt="Image 1" className="p-8 h-60" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">
            <span className="text-xs uppercase text-coolGray-600">
              Join, it's free
            </span>
            <h2 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h2>
            <p className="my-6 text-coolGray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button className="self-start">Action</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
