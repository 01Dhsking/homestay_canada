import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* En-tête du profil */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="Photo de profil" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-gray-500">Membre depuis Janvier 2024</p>
          </div>
        </div>

        {/* Onglets du profil */}
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
            {/* <TabsTrigger value="preferences">Préférences</TabsTrigger> */}
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          {/* Contenu: Informations personnelles */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Gérez vos informations personnelles et vos coordonnées.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john.doe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" defaultValue="+1 234 567 890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Ville</Label>
                    <Input id="location" defaultValue="Vancouver" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Sauvegarder les modifications</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Contenu: Préférences */}
          <TabsContent value="preferences" className='hidden'>
            <Card>
              <CardHeader>
                <CardTitle>Préférences de logement</CardTitle>
                <CardDescription>
                  Définissez vos préférences pour une meilleure expérience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget mensuel maximum</Label>
                    <Input id="budget" defaultValue="2000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type de logement préféré</Label>
                    <Input id="type" defaultValue="Appartement" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Mettre à jour les préférences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Contenu: Historique */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historique des séjours</CardTitle>
                <CardDescription>
                  Vos réservations passées et à venir.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Exemple de réservation */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Downtown Luxury Suite</h3>
                        <p className="text-sm text-gray-500">Vancouver, Canada</p>
                        <p className="text-sm text-gray-500">12 Jan 2024 - 19 Jan 2024</p>
                      </div>
                      <Button variant="outline" size="sm">Voir les détails</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}