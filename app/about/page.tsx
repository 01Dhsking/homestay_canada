import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">À propos de StayHub</h1>
          <p className="text-xl max-w-2xl">
            Notre mission est de rendre la recherche de votre logement
            temporaire idéal au Canada facile, fiable et agréable.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 mb-4">
                  Fondée en 2018, StayHub a commencé avec un objectif simple :
                  résoudre les défis auxquels nous étions confrontés lorsque
                  nous recherchions un hébergement de qualité au Canada.
                </p>
                <p className="text-gray-700 mb-4">
                  Nous avons compris que trouver l’endroit idéal où séjourner,
                  que ce soit pour une semaine ou plusieurs mois, devrait être
                  simple et sans stress.
                </p>
                <p className="text-gray-700">
                  Aujourd&apos;hui, nous mettons en relation des milliers de
                  voyageurs avec des propriétés vérifiées dans les principales
                  villes canadiennes, garantissant ainsi que chacun trouve son
                  logement temporaire idéal.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                {/* <Image
                  width={50}
                  height={50}
                  src="/api/placeholder/400/320"
                  alt="Our founding team"
                  className="rounded-lg shadow-md"
                /> */}
                <h1 className="text-lg sm:text-xl font-bold text-blue-600">
                  HomeStay CA
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Confiance et sécurité
                </h3>
                <p className="text-gray-600">
                  Nous vérifions chaque propriété et chaque hôte sur notre
                  plateforme pour garantir que votre séjour soit sûr et réponde
                  à nos normes élevées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Service client</h3>
                <p className="text-gray-600">
                  Notre équipe dédiée est disponible 24h/24 et 7j/7 pour vous
                  aider à répondre à toutes vos questions ou problèmes lors de
                  votre réservation ou de votre séjour.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise locale</h3>
                <p className="text-gray-600">
                  Nous fournissons des informations privilégiées sur les
                  quartiers et les communautés pour vous aider à trouver
                  l&apos;emplacement idéal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Rencontrez notre équipe
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">
                  Membre de l&apos;équipe {member}
                </h3>
                <p className="text-gray-600">
                  Co-fondateur &{" "}
                  {member === 1
                    ? "CEO"
                    : member === 2
                    ? "COO"
                    : member === 3
                    ? "CTO"
                    : "CMO"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ce que disent nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "J'ai trouvé mon appartement idéal à long terme à Vancouver grâce à StayHub. Le processus s'est déroulé sans problème et l'équipe d'assistance a été incroyable.",
              },
              {
                name: "Michael Chen",
                text: "StayHub m'a aidé à trouver le logement temporaire idéal pendant mon déménagement à Toronto. Je ne peux que les recommander !",
              },
              {
                name: "Jessica Thompson",
                text: "En tant que voyageur fréquent au Canada pour le travail, je compte sur StayHub pour tous mes besoins d'hébergement. Ils ne déçoivent jamais.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                  <div className="flex text-yellow-400 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12 hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à trouver votre séjour idéal ?
          </h2>
          <p className="mb-6">
            Rejoignez les milliers de clients satisfaits qui ont trouvé chez
            nous leur logement temporaire idéal.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              Parcourir les propriétés
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              size="lg"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
