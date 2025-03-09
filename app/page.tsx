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
import { Badge } from "@/components/ui/badge";
import Head from "next/head";
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
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Header from "@/components/ui/header";
import photo15 from "@/public/image/photo15.png";
import photo3 from "@/public/image/photo3.png";
import photo10 from "@/public/image/photo10.png";
import photo13 from "@/public/image/photo13.png";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>HomeStay CA - Trouvez votre maison parfaite au Canada</title>
        <meta name="description" content="Location de propriétés au Canada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Home in Canada
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re looking for a short-term stay or a long-term
              residence, we have the perfect accommodation for you across
              Canada.
            </p>

            <div className="flex space-x-3 mb-8">
              <Button className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Short Term Stays</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <HomeIcon className="h-4 w-4" />
                <span>Long Term Rentals</span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <ShieldCheck className="h-4 w-4 mr-1" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>24/7 Support</span>
              </div>
            </div>

            <Card className="mt-8">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center border rounded-md px-3 py-2">
                    <Search className="text-gray-400 mr-2 h-5 w-5" />
                    <Input
                      className="border-0 focus-visible:ring-0 p-0 text-sm"
                      placeholder="Location"
                    />
                  </div>

                  <div className="flex items-center border rounded-md px-3 py-2">
                    <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                    <Input
                      className="border-0 focus-visible:ring-0 p-0 text-sm w-28"
                      placeholder="mm/dd/yyyy"
                    />
                  </div>

                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Search Properties
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden h-72 md:h-96">
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
                <span className="text-gray-500">(User Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Featured Properties
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Discover our hand-picked selection of premium properties
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Property Card 1 */}
            <Card>
              <div className="relative h-48">
                <Image
                  src={photo3}
                  alt="Luxury Downtown Suite"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-blue-600">
                  Popular
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Luxury Downtown Suite</h3>
                <p className="text-gray-500 text-sm mb-2">Toronto, Ontario</p>

                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>2 Beds</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>2 Bath</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>1,050 sq.ft</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-blue-600">
                      $175/night
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 2 */}
            <Card>
              <div className="relative h-48">
                <Image
                  src={photo13}
                  alt="Mountain View Residence"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-green-600">
                  New
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Mountain View Residence</h3>
                <p className="text-gray-500 text-sm mb-2">Vancouver, BC</p>

                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>3 Beds</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>2 Bath</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>1,200 sq.ft</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-blue-600">
                      $2,400/month
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 3 */}
            <Card>
              <div className="relative h-48">
                <Image
                  src={photo10}
                  alt="Urban Studio Plus"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-purple-600">
                  Best Value
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">Urban Studio Plus</h3>
                <p className="text-gray-500 text-sm mb-2">Montreal, QC</p>

                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>1 Bed</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>1 Bath</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    <span>600 sq.ft</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-blue-600">
                      $140/night
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Why Choose HomeStayCA
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We make finding your next home simple and secure
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Verified Properties</h3>
              <p className="text-gray-600 text-sm">
                All our listings are thoroughly verified to ensure quality and
                accuracy
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Our responsive support team is available around the clock
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Your transactions are protected with industry-leading security
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Prime Locations</h3>
              <p className="text-gray-600 text-sm">
                Access to the best properties in premium locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HomeStayCA</h3>
              <p className="text-gray-400 text-sm mb-4">
                Find trusted homestays and perfect homes in Canada.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Long Term Rentals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Short Term Stays
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Popular Cities</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Toronto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Vancouver
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Montreal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Calgary
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold mb-2">Connect With Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-gray-400 text-sm">
                  © 2025 HomeStayCA. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
