import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  Search,
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
import photo3 from "@/public/image/photo3.png";
import photo10 from "@/public/image/photo10.png";
import photo13 from "@/public/image/photo13.png";

const houseInfo = [
  {
    image: photo3,
    type: "Populaire",
    price: "$150/night",
    name: "Downtown Luxury Suite",
    available: true,
    houseName: "Downtown Luxury Suite",
    location: "Vancouver, Canada",
    bed: 2,
    bath: 2,
    size: "980 sq.ft",
    commentary: "",
  },
  {
    image: photo10,
    type: "Populaire",
    price: "$2,200/month",
    name: "Harbor View Apartment",
    available: true,
    houseName: "Downtown Luxury Suite",
    location: "Toronto, Canada",
    bed: 2,
    bath: 2,
    size: "1,200 sq.ft",
    commentary: "",
  },
  {
    image: photo13,
    type: "Populaire",
    price: "$200/night",
    name: "Urban Garden Plus",
    available: true,
    houseName: "Downtown Luxury Suite",
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "650 sq.ft",
    commentary: "",
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
              long terme, nous avons l'hébergement idéal pour vous partout au
              Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3 mb-6 sm:mb-8">
              <Button className="flex items-center justify-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
                <Calendar className="h-4 w-4" />
                <span>Séjours de courte durée</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Locations longue durée</span>
              </Button>
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

            <Card className="mt-6 sm:mt-8">
              <CardContent className="p-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <Search className="text-gray-400 mr-2 h-5 w-5" />
                        <Input
                          className="border-0 focus-visible:ring-0 p-0 text-sm w-full"
                          placeholder="Location"
                        />
                      </div>
                    </div>

                    <div className="flex-1 sm:flex-initial">
                      <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                        <Input
                          className="border-0 focus-visible:ring-0 p-0 text-sm w-full"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select>
                      <SelectTrigger className="w-full sm:w-32">
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Appartement</SelectItem>
                        <SelectItem value="house">Maison</SelectItem>
                        <SelectItem value="condo">Copropriété</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button className="flex items-center justify-center w-full sm:w-auto">
                      <Search className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">
                        Rechercher des propriétés
                      </span>
                      <span className="sm:hidden">Rechercher</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              return <CardHouse key={index} dataImage={house} className="border-none" />;
            })}
          </div>
          <Link href={"/type"} className="w-full flex justify-center">
            <Button className="mt-[50px] w-[100px] lg:w-[500px] md:w-[300px]"size={"lg"} variant={"secondary"}>
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
                Notre équipe d'assistance réactive est disponible 24 heures sur
                24
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


    </div>
  );
}
