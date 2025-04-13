import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import m1_p1 from "@/public/image/house/m1_p1.jpg";
import m1_p2 from "@/public/image/house/m1_p2.jpg";
import m1_p3 from "@/public/image/house/m1_p3.jpg";
import m1_p4 from "@/public/image/house/m1_p4.jpg";
import m2_p1 from "@/public/image/house/m2_p1.jpg";
import m2_p2 from "@/public/image/house/m2_p2.jpg";
import m2_p3 from "@/public/image/house/m2_p3.jpg";
import m2_p4 from "@/public/image/house/m2_p4.jpg";
import m2_p5 from "@/public/image/house/m2_p5.jpg";
import m2_p6 from "@/public/image/house/m2_p6.jpg";
import m3_p1 from "@/public/image/house/m3_p1.jpg";
import m3_p2 from "@/public/image/house/m3_p2.jpg";
import m3_p3 from "@/public/image/house/m3_p3.jpg";
import m3_p4 from "@/public/image/house/m3_p4.jpg";
import m3_p5 from "@/public/image/house/m3_p5.jpg";
import m3_p6 from "@/public/image/house/m3_p6.jpg";
import m3_p7 from "@/public/image/house/m3_p7.jpg";
import m3_p8 from "@/public/image/house/m3_p8.jpg";
import m4_p1 from "@/public/image/house/m4_p1.jpg";
import m4_p2 from "@/public/image/house/m4_p2.jpg";
import m4_p3 from "@/public/image/house/m4_p3.jpg";
import m4_p4 from "@/public/image/house/m4_p4.jpg";
import m4_p5 from "@/public/image/house/m4_p5.jpg";
import m5_p1 from "@/public/image/house/m5_p1.jpg";
import m5_p2 from "@/public/image/house/m5_p2.jpg";
import m5_p3 from "@/public/image/house/m5_p3.jpg";
import m5_p4 from "@/public/image/house/m5_p4.jpg";
import m5_p5 from "@/public/image/house/m5_p5.jpg";
import m5_p6 from "@/public/image/house/m5_p6.jpg";
import m6_p1 from "@/public/image/house/m6_p1.jpg";
import m6_p2 from "@/public/image/house/m6_p2.jpg";
import m6_p3 from "@/public/image/house/m6_p3.jpg";
import m7_p1 from "@/public/image/house/m7_p1.jpg";
import m7_p2 from "@/public/image/house/m7_p2.jpg";
import m7_p3 from "@/public/image/house/m7_p3.jpg";
import m7_p4 from "@/public/image/house/m7_p4.jpg";
import m8_p1 from "@/public/image/house/m8_p1.jpg";
import m8_p2 from "@/public/image/house/m8_p2.jpg";
import m8_p3 from "@/public/image/house/m8_p3.jpg";
import m8_p4 from "@/public/image/house/m8_p4.jpg";
import m8_p5 from "@/public/image/house/m8_p5.jpg";
import m9_p1 from "@/public/image/house/m9_p1.jpg";
import m9_p2 from "@/public/image/house/m9_p2.jpg";
import m9_p3 from "@/public/image/house/m9_p3.jpg";
import m9_p4 from "@/public/image/house/m9_p4.jpg";
import m9_p5 from "@/public/image/house/m9_p5.jpg";
import m9_p6 from "@/public/image/house/m9_p6.jpg";
import m9_p7 from "@/public/image/house/m9_p7.jpg";
import m9_p8 from "@/public/image/house/m9_p8.jpg";
import m10_p1 from "@/public/image/house/m10_p1.jpg";
import m10_p2 from "@/public/image/house/m10_p2.jpg";
import m10_p3 from "@/public/image/house/m10_p3.jpg";
import m10_p4 from "@/public/image/house/m10_p4.jpg";
import m11_p1 from "@/public/image/house/m11_p1.jpg";
import m11_p2 from "@/public/image/house/m11_p2.jpg";
import m11_p3 from "@/public/image/house/m11_p3.jpg";
import m11_p4 from "@/public/image/house/m11_p4.jpg";
import m11_p5 from "@/public/image/house/m11_p5.jpg";
import m11_p6 from "@/public/image/house/m11_p6.jpg";
import m12_p1 from "@/public/image/house/m12_p1.jpg";
import m12_p2 from "@/public/image/house/m12_p2.jpg";
import m12_p3 from "@/public/image/house/m12_p3.jpg";
import m12_p4 from "@/public/image/house/m12_p4.jpg";
import m12_p5 from "@/public/image/house/m12_p5.jpg";
import m12_p6 from "@/public/image/house/m12_p6.jpg";
import m12_p7 from "@/public/image/house/m12_p7.jpg";
import m12_p8 from "@/public/image/house/m12_p8.jpg";
import m12_p9 from "@/public/image/house/m12_p9.jpg";
import m12_p10 from "@/public/image/house/m12_p10.jpg";
import m13_p1 from "@/public/image/house/m13_p1.jpg";
import m13_p2 from "@/public/image/house/m13_p2.jpg";
import m13_p3 from "@/public/image/house/m13_p3.jpg";
import m13_p4 from "@/public/image/house/m13_p4.jpg";
import m13_p5 from "@/public/image/house/m13_p5.jpg";

const houseInfo = [
  {
    id: "id_1",
    images: [m1_p1, m1_p2, m1_p3, m1_p4],
    type: "Populaire",
    price: "$1300/mois",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 4ème étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_2",
    images: [m2_p2, m2_p3, m2_p4, m2_p1, m2_p5, m2_p6],
    type: "Populaire",
    price: "$1400/mois",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 1er étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_3",
    images: [m3_p1, m3_p2, m3_p3, m3_p4, m3_p5, m3_p6, m3_p7, m3_p8],
    type: "Populaire",
    price: "$1850/mois",
    name: "rez-de-chaussée de deux chambres",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "970 sq.ft",
    commentary: "eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_4",
    images: [m4_p1, m4_p2, m4_p3, m4_p4, m4_p5],
    type: "Populaire",
    price: "$1900/mois",
    name: "suite a deux chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "650 sq.ft",
    commentary: "situé au 5eme étage",
  },
  {
    id: "id_5",
    images: [m5_p1, m5_p2, m5_p3, m5_p4, m5_p5, m5_p6],
    type: "Populaire",
    price: "$1500/mois",
    name: "suite a deux chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 1,
    size: " sq.ft",
    commentary:
      "Condo avec salon de bonne taille, Grand salon avec rangement dans l'unité. Nouvelle peinture en 2025. Loyer comprenant place de parking, chauffage et eau.",
  },
  {
    id: "id_6",
    images: [m6_p1, m6_p2, m6_p3],
    type: "Populaire",
    price: "$1100/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau. situé au 2eme étage",
  },
  {
    id: "id_7",
    images: [m7_p1, m7_p2, m7_p3, m7_p4],
    type: "Populaire",
    price: "$1140/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_8",
    images: [m8_p1, m8_p2, m8_p3, m8_p4, m8_p5],
    type: "Populaire",
    price: "$1140/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_9",
    images: [m9_p1, m9_p2, m9_p3, m9_p4, m9_p5, m9_p6, m9_p7, m9_p8],
    type: "Populaire",
    price: "$990$/mois",
    name: "suite rénovée",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "",
    commentary:
      "Proche de la station jean talon ( 8 minutes de marches ) Épicerie et commerce à côté Hydro , chauffage compris . Possible d'ajouter le wifi",
  },
  {
    id: "id_10",
    images: [m10_p1, m10_p2, m10_p3, m10_p4],
    type: "Populaire",
    price: "$900/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "suite rénovée studio proche de la station jean talon, située au 1er étage",
  },
  {
    id: "id_11",
    images: [m11_p1, m11_p2, m11_p3, m11_p4, m11_p5, m11_p6],
    type: "Populaire",
    price: "$1070/mois",
    name: "suite rénovée",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary: "Loyer comprenant chauffage et eau, située au 2e étage",
  },
  {
    id: "id_12",
    images: [
      m12_p1,
      m12_p2,
      m12_p3,
      m12_p4,
      m12_p5,
      m12_p6,
      m12_p7,
      m12_p8,
      m12_p9,
      m12_p10,
    ],
    type: "Populaire",
    price: "$1100/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_13",
    images: [m13_p1, m13_p2, m13_p3, m13_p4, m13_p5],
    type: "Populaire",
    price: "$1030/mois",
    name: "Studio non meublé",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Proche de la station Cadillac (6 minutes de marches), Épicerie et commerce à côté, Loyer comprenant chauffage et eau, Possible d’ajouter le wifi",
  },
];

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = houseInfo.find((house) => house.id === id);

  if (!property) {
    return <div>Propriété non trouvée</div>;
  }

  // Le reste de votre code reste le même
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bouton de retour */}
      <div className="mb-6">
        <Link href="/type/longterme">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux propriétés
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section de gauche - Informations */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{property.location}</span>
            </div>
            <Badge className="mb-4 bg-blue-600">{property.type}</Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y">
            <div>
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>{property.bed} Chambres</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                <span>{property.bath} Salles de bain</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Maximize className="w-5 h-5 mr-2" />
                <span>{property.size}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Prix</h2>
            <p className="text-3xl text-blue-600 font-bold">{property.price}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="text-gray-600">{property.commentary}</p>
          </div>

          {property.available && (
            <Link
              href={`/contact?property=${encodeURIComponent(property.name)}`}
            >
              <Button className="w-full">Contacter pour cette propriété</Button>
            </Link>
          )}
        </div>

        {/* Section de droite - Images */}
        <div className="h-[600px] relative">
          {property.images.length === 1 ? (
            <div className="relative w-full h-full">
              <Image
                src={property.images[0]}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ) : (
            <Carousel className="w-full h-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[600px]">
                      <Image
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}
