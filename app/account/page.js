import Link from "next/link";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")?.[0] || "Guest";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent-400">
          Welcome, {firstName}!
        </h2>
        <p className="text-lg text-muted-foreground">
          This is your personalized guest area. You can manage your bookings,
          view recommendations, and explore more features made just for you.
        </p>
        <div className="flex justify-center">
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </div>
    </section>
  );
}
