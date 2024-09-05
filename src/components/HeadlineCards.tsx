export default function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out , BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
