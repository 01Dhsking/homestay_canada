"use client";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";

function Contact() {
  const searchParams = useSearchParams();
  const form = useForm({
    defaultValues: {
      homeName: searchParams.get('property') || '',
      nom: '',
      email: '',
      téléphone: '',
      inquiry: '',
      category: '',
      message: ''
    }
  });
  const [sending, setSending] = React.useState(false);
  const [isLoggedIn, setisLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setisLoggedIn(isLoggedIn);
  }, []);

  const onSubmit = async (data: FieldValues) => {
    setSending(true);
    if (isLoggedIn) {
      try {
        const response1 = await fetch("/api/send", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response1.ok) {
          form.reset();
          await fetch("/api/PostPushOverNotification", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          toast.success("Message envoyé avec succès!");
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
      } catch (error) {
        toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
        console.error(error);
      } finally {
        setSending(false);
      }
    } else {
      toast.error("Vous avez pas un compte actif, veuillez vous connecter");
      redirect("/register");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Nous sommes là pour répondre à toutes vos questions concernant la
            recherche de votre séjour idéal au Canada.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Entrer en contact</h2>
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adresse email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Votre email"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="téléphone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de téléphone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre numéro de téléphone"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="homeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>le nom de la maison(optionel)</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="le nom de la maison"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inquiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de demande</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un type de demande" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="réservation">
                                  Questions de réservation
                                </SelectItem>
                                <SelectItem value="propriété">
                                  Informations sur la propriété
                                </SelectItem>
                                <SelectItem value="soutien">
                                  Service client
                                </SelectItem>
                                <SelectItem value="partenariat">
                                  Opportunités de partenariat
                                </SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Type maison , long terme ou court terme (optionel)
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un type de demande" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="réservation">
                                  Long terme
                                </SelectItem>
                                <SelectItem value="propriété">
                                  Court terme
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Comment pouvons-nous vous aider?"
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={sending}
                      >
                        {sending ? "Envoi en cours..." : "Envoyer un message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info and Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Phone</h3>
                          <p className="text-gray-600">
                            Customer Support: +1 (555) 123-4567
                          </p>
                          <p className="text-gray-600">
                            Property Inquiries: +1 (555) 987-6543
                          </p>
                        </div>
                      </div> */}

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <p className="text-gray-600">
                            Support: CAHomeStay@protonmail.com
                          </p>
                        </div>
                      </div>

                      {/* <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            Emplacement du bureau
                          </h3>
                          <p className="text-gray-600">123 Business Avenue</p>
                          <p className="text-gray-600">Suite 400</p>
                          <p className="text-gray-600">Toronto, ON M5V 2A1</p>
                        </div>
                      </div> */}

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            Heures de bureau
                          </h3>
                          <p className="text-gray-600">
                            Lundi - Vendredi : 9h00 - 16h00
                          </p>
                          <p className="text-gray-600">
                            Samedi : 10h00 - 16h00
                          </p>
                          <p className="text-gray-600">Dimanche : Fermé</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Questions fréquemment posées
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Comment réserver un bien ?",
                answer:
                  "Parcourez nos annonces, sélectionnez vos dates et suivez le processus de réservation. Vous recevrez une confirmation par e-mail une fois votre réservation confirmée.",
              },
              {
                question: "Quelle est votre politique d'annulation ?",
                answer:
                  "Les conditions d'annulation varient selon les établissements. Vous trouverez les détails sur chaque page d'annonce avant de finaliser votre réservation.",
              },
              {
                question: "Proposez-vous des locations longue durée ?",
                answer:
                  "Oui, nous proposons des options de location à court et à long terme pour répondre à différents besoins.",
              },
              {
                question: "Les services publics sont-ils inclus dans le prix ?",
                answer:
                  "Cela varie selon la propriété. Toutes les commodités et services publics inclus sont clairement répertoriés sur la page des détails de la propriété.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="py-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section
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
      </div> */}

      <Footer />
    </div>
  );
}

export default Contact;
