import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Head from "next/head";
import Image from "next/image";
import {
  Calendar,
  Search,
  CheckCircle,
  Clock,
  Heart,
  Bed,
  Bath,
  Maximize,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Header from "@/components/ui/header";

export default function ShotTerme() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>StayHub - Find Your Perfect Home in Canada</title>
        <meta name="description" content="Find your perfect home in Canada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text & Search */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Find Your Perfect Home in Canada
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re looking for a short-term stay or a long-term
              residence, we have the perfect accommodation for you across
              Canada.
            </p>

            <div className="flex space-x-3 mb-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Short Term
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                Long Term
              </Button>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative flex items-center">
                  <MapPin className="absolute left-3 text-gray-400 h-5 w-5" />
                  <Input className="pl-10" placeholder="Location" />
                </div>

                <div className="relative flex items-center">
                  <Calendar className="absolute left-3 text-gray-400 h-5 w-5" />
                  <Input className="pl-10" placeholder="mm/dd/yyyy" />
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/modern-building.jpg"
              alt="Modern apartment building"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Property 1 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/downtown-luxury.jpg"
                alt="Downtown Luxury Suite"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-blue-600">
                Popular
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-blue-600">$150/night</p>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Available
                </Badge>
              </div>
              <h3 className="font-bold">Downtown Luxury Suite</h3>
              <p className="text-gray-500 text-sm mb-3">Vancouver, Canada</p>

              <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>2 Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>2 Baths</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-4 w-4 mr-1" />
                  <span>980 sq.ft</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-gray-50">
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Property 2 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/harbor-view.jpg"
                alt="Harbor View Apartment"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-green-600">New</Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-blue-600">$2,200/month</p>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Available
                </Badge>
              </div>
              <h3 className="font-bold">Harbor View Apartment</h3>
              <p className="text-gray-500 text-sm mb-3">Toronto, Canada</p>

              <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>3 Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>2 Baths</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-4 w-4 mr-1" />
                  <span>1,200 sq.ft</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-gray-50">
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>

          {/* Property 3 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/urban-garden.jpg"
                alt="Urban Garden Plus"
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-3 left-3 bg-purple-600">
                Best Value
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-blue-600">$120/night</p>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Available
                </Badge>
              </div>
              <h3 className="font-bold">Urban Garden Plus</h3>
              <p className="text-gray-500 text-sm mb-3">Montreal, Canada</p>

              <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>1 Bed</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>1 Bath</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-4 w-4 mr-1" />
                  <span>650 sq.ft</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-gray-50">
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose StayHub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Verified Properties</h3>
            <p className="text-gray-600 text-sm">
              All our properties are thoroughly verified for your peace of mind
              and safety.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available around the clock to assist with any
              questions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">
              We offer competitive rates and regular promotions for the best
              deals.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular Cities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* City 1 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src="/toronto.jpg"
              alt="Toronto"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Toronto</h3>
              <p className="text-sm">124 Properties</p>
            </div>
          </div>

          {/* City 2 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src="/vancouver.jpg"
              alt="Vancouver"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Vancouver</h3>
              <p className="text-sm">98 Properties</p>
            </div>
          </div>

          {/* City 3 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src="/montreal.jpg"
              alt="Montreal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Montreal</h3>
              <p className="text-sm">87 Properties</p>
            </div>
          </div>

          {/* City 4 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src="/calgary.jpg"
              alt="Calgary"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Calgary</h3>
              <p className="text-sm">65 Properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/sarah-johnson.jpg" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">Toronto</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              &quot;I love my stay! The apartment was exactly as pictured,
              clean, and in a great location. The staff was super helpful
              too!&quot;
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/michael-chen.jpg" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-500 text-sm">Vancouver</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              &quot;Great selection of apartments. I was able to find the
              perfect long-term rental for my business stay in Vancouver.&quot;
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage
                  src="/jennifer-thompson.jpg"
                  alt="Jennifer Thompson"
                />
                <AvatarFallback>JT</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Jennifer Thompson</h4>
                <p className="text-gray-500 text-sm">Montreal</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              &quot;The entire process from booking to check-out was seamless.
              I&apos;ll definitely be using StayHub for future trips to
              Canada!&quot;
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="mb-8 max-w-lg mx-auto">
            Join thousands of satisfied customers who have found their ideal
            accommodation with StayHub.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Search Properties
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              Talk to an Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/stayhub-logo-white.png"
                  alt="StayHub Logo"
                  width={28}
                  height={28}
                  className="mr-2"
                />
                <h3 className="text-xl font-bold">StayHub</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Find your perfect temporary home in Canada with our curated
                selection of apartments and houses.
              </p>
            </div>

            <div className="grid grid-cols-2">
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
                      About Team
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
                      Short Term Rentals
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

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@stayhub.com</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Rental Ave, Toronto, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 StayHub Inc. All rights reserved.
            </p>

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
        </div>
      </footer>
    </div>
  );
}
