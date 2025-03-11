import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About StayHub</h1>
          <p className="text-xl max-w-2xl">
            We&apos;re on a mission to make finding your perfect temporary home
            in Canada easy, reliable, and enjoyable.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 mb-4">
                  Founded in 2018, StayHub began with a simple goal: to solve
                  the challenges we faced when looking for quality
                  accommodations in Canada.
                </p>
                <p className="text-gray-700 mb-4">
                  We understood that finding the perfect place to stay, whether
                  for a week or several months, should be straightforward and
                  stress-free.
                </p>
                <p className="text-gray-700">
                  Today, we connect thousands of travelers with verified
                  properties across major Canadian cities, ensuring that
                  everyone finds their ideal temporary home.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src="/api/placeholder/400/320"
                  alt="Our founding team"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
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
                <h3 className="text-xl font-semibold mb-2">Trust & Safety</h3>
                <p className="text-gray-600">
                  We verify every property and host on our platform to ensure
                  your stay is safe and meets our high standards.
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
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available 24/7 to assist you with any
                  questions or issues during your booking or stay.
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
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  We provide insider knowledge about neighborhoods and
                  communities to help you find the perfect location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Team Member {member}</h3>
                <p className="text-gray-600">
                  Co-Founder &{" "}
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
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Found my perfect long-term apartment in Vancouver through StayHub. The process was smooth and the support team was incredible.",
              },
              {
                name: "Michael Chen",
                text: "StayHub helped me find the perfect temporary home while I relocated to Toronto. I can't recommend them enough!",
              },
              {
                name: "Jessica Thompson",
                text: "As a frequent traveler to Canada for work, I rely on StayHub for all my accommodation needs. They never disappoint.",
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

export default About;
