import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface dataproperty {
  dataImage: {
    images: (string | StaticImageData)[];  // Changed to array of images
    type: string;
    price: string;
    name: string;
    available: boolean;
    location: string;
    bed: number;
    bath: number;
    size?: string;
    commentary?: string;
  };
  className?: string;
}

function CardHouse({dataImage, className} : dataproperty) {
  return (
    <Card className={`${className} overflow-hidden`}>
      <div className="relative lg:h-[300px] h-[200px]">
        {dataImage.images.length === 1 ? (
          <Image
            src={dataImage.images[0]}
            alt="Property Image"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {dataImage.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-full lg:h-[300px] h-[200px]">
                    <Image
                      src={image}
                      alt={`Property Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 z-10" />
            <CarouselNext className="absolute right-2 z-10" />
          </Carousel>
        )}
        <Badge className="absolute top-3 left-3 bg-blue-600 z-20">
          {dataImage.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-blue-600">{dataImage.price}</p>
          <Badge variant="outline" className="text-green-600 border-green-600">
            {dataImage.available ? "disponible" : "plus disponible"}
          </Badge>
        </div>
        <h3 className="font-bold">{dataImage.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{dataImage.location}</p>

        <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{dataImage.bed} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{dataImage.bath} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span>{dataImage.size}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 bg-gray-50">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardHouse;
