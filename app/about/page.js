import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="space-y-32 text-lg">
      <section className="grid grid-cols-1 md:grid-cols-5 gap-x-24 gap-y-12 items-center">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Welcome to The Wild Oasis
          </h1>
          <div className="space-y-8">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden in the heart of the Italian Dolomites, this is
              your paradise away from home. But it&apos;s not just about the
              luxury cabins—it&apos;s about the experience of reconnecting with
              nature.
            </p>
            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom and peace you&apos;ll find in the surrounding
              mountains. Wander through lush forests, breathe fresh alpine air,
              and watch the stars twinkle above from a campfire or your hot tub.
            </p>
            <p>
              This is where memories are made—surrounded by nature&apos;s
              splendor. It&apos;s a place to slow down, relax, and enjoy time
              together.
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={image1}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            quality={80}
            className="rounded-2xl"
            priority
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-x-24 gap-y-12 items-center">
        <div className="relative aspect-square col-span-2 rounded-2xl overflow-hidden">
          <Image
            src={image2}
            alt="Family that manages The Wild Oasis"
            fill
            className="object-cover"
          />
        </div>

        <div className="col-span-3 space-y-8">
          <h1 className="text-4xl mb-6 text-accent-400 font-medium">
            Managed by our family since 1962
          </h1>
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passed down through generations.
          </p>
          <p>
            We preserve the spirit of the mountains with a personal touch only a
            family can offer. Here, you&apos;re not just a guest—you&apos;re
            part of our extended family.
          </p>
          <a
            href="/cabins"
            className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore our luxury cabins
          </a>
        </div>
      </section>

      <footer className="mt-24 bg-primary-800 text-white p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-md">
          <div>
            <h4 className="font-bold mb-2">The Wild Oasis</h4>
            <p>📍 Manali, Himachal Pradesh, India</p>
            <p>📞 +39 0123 456789</p>
            <p>✉️ info@thewildoasis.com</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cabins" className="hover:underline">
                  Cabins
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Opening Times</h4>
            <p>🕒 Open 24/7</p>
            <br /> <p>🕒office hour-8:am-10:pm</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <p>
              <Link href="/cabins" className="underline">
                Instagram
              </Link>
            </p>
            <p>
              <Link href="/cabins" className="underline">
                Facebook
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
