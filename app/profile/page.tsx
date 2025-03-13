import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserData } from "@/lib/serverAction/User/FetchData";
import { auth } from "@/lib/auth";
import { updateProfile } from "@/lib/serverAction/User/UpdateProfile";



export default async function Profile() {
  const session = await auth();
  const userData = session?.user?.email
    ? await getUserData(session.user.email)
    : null;

  if (!userData) {
    return <div>Please log in to view your profile</div>;
  }

  const memberSince = new Date(userData.createdAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });

  function handleUpdateinfo() {

  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* En-tête du profil */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src={userData.image || ""} alt="Photo de profil" />
            <AvatarFallback>
              {userData.name?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p className="text-gray-500">Membre depuis {memberSince}</p>
          </div>
        </div>

        {/* Onglets du profil */}
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">
              Informations personnelles
            </TabsTrigger>
            {/* <TabsTrigger value="preferences">Préférences</TabsTrigger> */}
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          {/* Contenu: Informations personnelles */}
          <TabsContent value="personal">
            <Card>
              <form action={async (formData: FormData) => {
                await updateProfile({
                    name: formData.get('name') as string,
                    email: formData.get('email') as string,
                    phone: formData.get('phone') as string,
                    city: formData.get('location') as string,
                });
              }}>
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
                      <Input name="name" id="name" defaultValue={userData.name || ""} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        defaultValue={userData.email || ""}
                        type="email"
                        required
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input name="phone" id="phone" defaultValue={userData.phone || ""} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ville</Label>
                      <Input name="location" id="location" defaultValue={userData.city || ""} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Sauvegarder les modifications</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Contenu: Préférences */}
          <TabsContent value="preferences" className="hidden">
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
                <Button onClick={handleUpdateinfo}>Mettre à jour les préférences</Button>
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
                  <p>Encore aucune réservation faite pour le moment ...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
