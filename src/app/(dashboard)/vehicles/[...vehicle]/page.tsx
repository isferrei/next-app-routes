import { Metadata } from "next";

interface IVehicleProps {
  params: {
    vehicle: string;
  };
}

export function generateMetadata({ params }: IVehicleProps): Metadata {
  return { title: `Veiculos da marca ${params.vehicle} | jscar` };
}

export default function Vehicle({ params }: IVehicleProps) {
  return (
    <div>
      <h1>Todos os veículos de {params.vehicle}</h1>
    </div>
  );
}
