import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // CHANGE

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

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
