import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle,
  Home as HomeIcon,
  CreditCard,
  MapPin,
} from "lucide-react";
import CardHouse from "@/components/ui/cardhouse";
import photo15 from "@/public/image/photo15.png";
import Footer from "@/components/ui/footer";

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

const houseInfo = [
  {
    id: "id_1",
    images: [m1_p1, m1_p2, m1_p3, m1_p4],
    type: "Populaire",
    price: "$1300/night",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Vancouver, Canada",
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
    price: "$1400/night",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Vancouver, Canada",
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
    price: "$1850/night",
    name: "rez-de-chaussée de deux chambres",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "970 sq.ft",
    commentary: "eau, chauffage inclus dans le loyer",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Trouvez votre maison idéale au Canada
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6">
              Que vous recherchiez un séjour de courte durée ou une résidence à
              long terme, nous avons l&apos;hébergement idéal pour vous partout
              au Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3 mb-6 sm:mb-8">
              <Link href={"/type/shortterme"}>
                <Button className="flex items-center justify-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
                  <Calendar className="h-4 w-4" />
                  <span>Séjours de courte durée</span>
                </Button>
              </Link>
              <Link href={"/type/longterme"}>
                <Button className="flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <HomeIcon className="h-4 w-4" />
                  <span>Locations longue durée</span>
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Propriétés vérifiées</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <ShieldCheck className="h-4 w-4 mr-1" />
                <span>Réservation sécurisée</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>Assistance 24h/24 et 7j/7</span>
              </div>
            </div>
            <Link href={"/type"}>
              <Button size={"lg"} className="bg-blue-600 space-x-2">
                <p>Découvrez votre prochaine maison </p>
                {/* <Image
                  width={35}
                  height={35}
                  alt="iconemoji_eyeshealt"
                  src={iconemoji_eyeshealt}
                /> */}
              </Button>
            </Link>
          </div>

          <div className="relative mt-6 sm:mt-0">
            <div className="relative rounded-lg overflow-hidden h-48 sm:h-64 md:h-96">
              <Image
                src={photo15}
                alt="Modern apartment interior"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-2 text-xs flex items-center">
                <span className="font-bold mr-1">4.9/5</span>
                <span className="text-gray-500">(Avis des utilisateurs)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-8 sm:py-12 bg-[#bc9273] rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[50px] mb-2 text-center ">
            Propriétés vedette
          </h2>
          <p className="text-center text-white mb-8 text-[15px]">
            Découvrez notre sélection de propriétés premium triées sur le volet
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {houseInfo.map((house, index) => {
              return (
                <CardHouse
                  key={index}
                  dataImage={house}
                  time={"longterme"}
                  className="border-none"
                />
              );
            })}
          </div>
          <Link href={"/type"} className="w-full flex justify-center">
            <Button
              className="mt-[50px] w-[100px] lg:w-[500px] md:w-[300px]"
              size={"lg"}
              variant={"secondary"}
            >
              En voir plus
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Pourquoi choisir HomeStayCA
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Nous rendons la recherche de votre prochaine maison simple et
            sécurisée
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Propriétés vérifiées</h3>
              <p className="text-gray-600 text-sm">
                Toutes nos annonces sont soigneusement vérifiées pour garantir
                leur qualité et leur exactitude.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Notre équipe d&apos;assistance réactive est disponible 24 heures
                sur 24
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Paiements sécurisés</h3>
              <p className="text-gray-600 text-sm">
                Vos transactions sont protégées par une sécurité de pointe
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Emplacements privilégiés</h3>
              <p className="text-gray-600 text-sm">
                Accès aux meilleures propriétés dans des emplacements premium
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
