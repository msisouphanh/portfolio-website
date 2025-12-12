function Bio() {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-row items-center md:items-start max-w-3xl px-4">
          <div className="mr-8 shrink-0">
            <img
              className="rounded-full w-35 h-35"
              src="1686172732256.jpg"
              alt="Image of User"
            ></img>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Hi, I am Marcus!</h2>
            <p>
              I am recent graduate at York University, currently learning how to
              improve in UX/UI design, and improving development front-end
              skills with React and Tailwind CSS
            </p>
            <p>Social Media Icons</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
