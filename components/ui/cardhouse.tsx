import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize } from "lucide-react";

interface dataproperty {
  dataImage: {
    image: string | StaticImageData;
    type: string;
    price: string;
    name: string;
    available: boolean;
    houseName: string;
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
        <Image
          src={dataImage.image}
          alt="Downtown Luxury Suite"
          layout="fill"
          objectFit="cover"
        />
        <Badge className="absolute top-3 left-3 bg-blue-600">
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
