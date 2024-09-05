import { categories } from "../data/data";

export default function Category() {
  return (
    <div className="max-w-[1460px] w-full m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <p className="font-bold sm-text-xl">{category.name}</p>
            <img className="w-20" src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
