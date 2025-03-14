import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  Map,
} from "lucide-react";
import Footer from "@/components/ui/footer";

import photo12 from "@/public/image/photo12.png";
import photo9 from "@/public/image/photo9.png";
import photo10 from "@/public/image/photo10.png";
import photo11 from "@/public/image/photo11.png";

export default function House() {
  return (
    <div>

      {/* Hero Banner */}
      <section className="relative h-72 md:h-96">
        <Image
          src={photo12}
          alt="Luxury apartments with mountain view"
          layout="fill"
          objectFit="cover"
          priority
        />
      </section>

      {/* Stay Type Section */}
      <section className="container mx-auto px-4 py-12 ">
        <h2 className="text-2xl font-bold mb-8 text-center">
        Choisissez votre type de séjour
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Short Term Stay Card */}
          <Card className="overflow-hidden">
            <div className="relative lg:h-[300px] h-[200px]">
              <Image
                src={photo9}
                alt="Luxury apartment interior"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="px-6">
              <h3 className="font-bold text-lg mb-2">Séjour de courte durée</h3>
              <p className="text-gray-600 text-sm mb-4">
              Idéal pour les voyageurs à la recherche d&apos;un hébergement confortable et bien situé
              pour quelques jours à quelques semaines.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Options de paiement flexibles</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Ménage quotidien</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Tous les services publics inclus</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6">
              <Link href={"/type/shortterme"}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Voir les options à court terme
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Long Term Stay Card */}
          <Card className="overflow-hidden">
            <div className="relative lg:h-[300px] h-[200px]">
              <Image
                src={photo10}
                alt="Modern apartment interior"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="px-6">
              <h3 className="font-bold text-lg mb-2">Séjour longue durée</h3>
              <p className="text-gray-600 text-sm mb-4">
              Idéal pour les séjours prolongés, les déménagements ou le travail à distance.
              Vivez une expérience comme à la maison.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Tarifs mensuels réduits</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Conditions de location flexibles (3 mois et plus)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Assistance sur site dédiée</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6">
              <Link href={"/type/longterme"}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Voir les options à long terme
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-12 hidden">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Property 1 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={photo11}
                alt="Luxury Downtown Vancouver"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-blue-600">
                Popular
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold mb-1">Luxury Downtown Vancouver</h3>
              <p className="text-gray-500 text-xs mb-3">
                VANCOUVER, BC • 2 BEDS • 1 BATH • 950 SQ.FT
              </p>
              <p className="font-bold text-blue-600 text-lg">$250/night</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t">
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Property 2 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={photo11}
                alt="Toronto Sky Residence"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-green-600">New</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold mb-1">Toronto Sky Residence</h3>
              <p className="text-gray-500 text-xs mb-3">
                TORONTO, ON • 3 BEDS • 2 BATH • 1,200 SQ.FT
              </p>
              <p className="font-bold text-blue-600 text-lg">$2,800/month</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t">
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Property 3 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={photo10}
                alt="Montreal City Suite"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-purple-600">
                Best Value
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold mb-1">Montreal City Suite</h3>
              <p className="text-gray-500 text-xs mb-3">
                MONTREAL, QC • 1 BED • 1 BATH • 650 SQ.FT
              </p>
              <p className="font-bold text-blue-600 text-lg">$180/night</p>
            </CardContent>
            <CardFooter className="px-4 py-3 border-t">
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12 hidden">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose StayCanada
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-1">Verified Properties</h3>
            <p className="text-gray-500 text-xs">
              All properties are personally verified
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-1">24/7 Support</h3>
            <p className="text-gray-500 text-xs">
              Our team is always available to help
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-1">Flexible Terms</h3>
            <p className="text-gray-500 text-xs">
              Customized stays that fit your needs
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Map className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-1">Best Price</h3>
            <p className="text-gray-500 text-xs">
              Competitive rates in premium locations
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="mb-8 max-w-lg mx-auto">
            Join the thousands of satisfied travelers who have found their ideal
            home away from home with us
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Browse Properties
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}
