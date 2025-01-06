import { Metadata } from "next";
import Link from "next/link";

async function getVehicles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return ["audi", "bmw", "ford", "honda", "toyota"];
}

export const metadata: Metadata = {
  title: "Todos os veiculos | jscar",
};

export default async function Vehicles() {
  const vehicles = await getVehicles();
  return (
    <div>
      <h1>Vehicles</h1>
      <div className="flex py-4 gap-5">
        {vehicles.map((vehicle) => (
          <Link href={`/vehicles/${vehicle}`} key={vehicle}>
            <div className="flex items-center justify-items-center px-10 py-2 h-20 bg-zinc-900 border border-zinc-700 rounded-lg">
              {vehicle}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
