import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import CardHouse from "@/components/ui/cardhouse";
import {
  Calendar,
  Search,
  CheckCircle,
  Clock,
  Heart,
  Bed,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react";
import photo15 from "@/public/image/photo15.png";
import photo3 from "@/public/image/photo3.png";
import photo10 from "@/public/image/photo10.png";
import photo13 from "@/public/image/photo13.png";
import toronto2 from "@/public/image/toronto2.jpg";
import vancouver1 from "@/public/image/vancouver1.jpg";
import montreal1 from "@/public/image/montreal1.jpg";
import calgary1 from "@/public/image/calgary1.jpg";

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

export default function Longterme() {
  return (
    <div>
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
              <Link href="/shortterme">
                <Button variant={"outline"}>Short Term</Button>
              </Link>
              <Link href="/longterme">
                <Button variant={"outline"} className="bg-blue-600 text-white">
                  Long Term
                </Button>
              </Link>
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
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={photo15}
              alt="Modern apartment interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
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
              src={toronto2}
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
              src={vancouver1}
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
              src={montreal1}
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
              src={calgary1}
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

      {/* Shortterme properties */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Nos propriétés court terme</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {houseInfo.map((house, index) => {
            return <CardHouse key={index} dataImage={house} />;
          })}
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
      <section className="bg-blue-600 py-12 text-white hidden">
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
    </div>
  );
}
