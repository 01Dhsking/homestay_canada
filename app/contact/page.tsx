"use client";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Contact() {
  const form = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            We&apos;re here to help with any questions you have about finding
            your perfect stay in Canada.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Your email"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
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
                            <FormLabel>Inquiry Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="booking">
                                  Booking Questions
                                </SelectItem>
                                <SelectItem value="property">
                                  Property Information
                                </SelectItem>
                                <SelectItem value="support">
                                  Customer Support
                                </SelectItem>
                                <SelectItem value="partnership">
                                  Partnership Opportunities
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
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
                                placeholder="How can we help you?"
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        Send Message
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
                      </div>

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
                            General Inquiries: info@stayhub.ca
                          </p>
                          <p className="text-gray-600">
                            Support: support@stayhub.ca
                          </p>
                        </div>
                      </div>

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
                            Office Location
                          </h3>
                          <p className="text-gray-600">123 Business Avenue</p>
                          <p className="text-gray-600">Suite 400</p>
                          <p className="text-gray-600">Toronto, ON M5V 2A1</p>
                        </div>
                      </div>

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
                            Office Hours
                          </h3>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-gray-600">
                            Saturday: 10:00 AM - 4:00 PM
                          </p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Card */}
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <Image
                        width={50}
                        height={50}
                        src="/api/placeholder/800/320"
                        alt="Map location"
                        className="w-full h-full object-cover"
                      />
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
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I book a property?",
                answer:
                  "Browse our listings, select your dates, and follow the booking process. You'll receive confirmation via email once your booking is confirmed.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "Cancellation policies vary by property. Details can be found on each listing page before you complete your booking.",
              },
              {
                question: "Do you offer long-term rentals?",
                answer:
                  "Yes, we offer both short-term and long-term rental options to accommodate different needs.",
              },
              {
                question: "Are utilities included in the price?",
                answer:
                  "This varies by property. All included amenities and utilities are clearly listed on the property details page.",
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
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Still have questions? Contact our support team for assistance.
            </p>
            <Button>View All FAQs</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="mb-6">
            Join the thousands of satisfied customers who have found their ideal
            temporary home with us.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              Browse Properties
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
