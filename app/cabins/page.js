import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // CHANGE
  console.log("cabins page");
  const cabins = await getCabins();
  console.log(cabins);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Nestled amidst the serene hills of the Indian Western Ghats, these cozy
        yet luxurious cottages offer the perfect blend of tradition and
        tranquility. Wake up to misty sunrises, chirping birds, and breathtaking
        valley views. Spend your day wandering through lush spice plantations,
        or unwind in your private open-air jacuzzi under a starry sky.
        Experience rustic charm with modern comforts – a true escape from city
        life. &apos;Welcome to your peaceful haven in nature’s lap – where every
        moment is a breath of fresh mountain air
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
