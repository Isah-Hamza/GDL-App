import person1 from "../assets/images/person1.png";


const AuthPagesLayout = ({ children }) => {
  const counter = [1, 2, 3];

  return (
    <div className="flex w-full h-screen p-2">
      <section className="left flex flex-col py-10 px-5 text-white bg-primary rounded-md w-[350px]">
        <div>
          <p className="text-sm font-semibold">GDL RIDER</p>
          <div className="mt-16">
            <h2 className="text-4xl font-semibold">
              Start Your <br /> Journey With Us.
            </h2>
            <p className="mt-5">
              Discover the world’s best community of freelancers and business
              owners around <br /> the globe.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <div className="w-full rounded-md bg-secondary p-3">
            <p className="text-sm">
              Simply unbelievable! I am really satisfied with my projects and
              business. This is Absolutely wonderful!
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img className="w-12" src={person1} alt="person1" />
              <div className="flex flex-col">
                <p className="font-bold">Timson Ka</p>
                <p className="text-sm">Professional</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            {counter.map((_, idx) => (
              <div
                key={idx}
                className="rounded-full bg-white w-1.5 h-1.5 flex items-center justify-center"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-primary ${
                    idx === 1 && "bg-white"
                  }`}
                >
                  {" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-4xl right flex-1 pt-16 px-20">
        {children}
      </section>
    </div>
  );
};

export default AuthPagesLayout;
