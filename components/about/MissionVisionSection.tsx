"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <div className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
          <Check size={12} />
        </div>
        <span className="text-gray-700 font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

export const MissionVisionSection = () => {
  const router = useRouter();
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Mission]"
              title="Empowering Pokhara With Effective Pest Control"
              italicWord="Effective"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our mission is to deliver reliable, innovative pest control
              solutions that safeguard homes, hotels, restaurants, and
              businesses across Pokhara. We understand the unique needs of
              Pokhara&apos;s thriving tourism industry, residential communities,
              and commercial sectors. Our goal is to optimize operations,
              protect Pokhara&apos;s reputation as a premier destination, and
              ensure long-term growth for our local community.
            </p>
            <FeatureList
              items={[
                "Provide precise, real-time pest control monitoring tailored to Pokhara&apos;s climate and environment",
                "Support Pokhara&apos;s hospitality sector with discreet, effective pest management solutions",
                "Build lasting partnerships with Pokhara&apos;s homeowners and business owners based on trust and proven results",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Pokhara Pest Control Mission - Team Collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
              alt="Pokhara Pest Control Vision - Local Excellence"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Vision]"
              title="Becoming Pokhara's Leading Pest Control Partner"
              italicWord="Pokhara's Leading"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              We aim to be the go-to partner for homes and businesses throughout
              Pokhara seeking advanced, efficient, and sustainable pest control
              solutions. From Lakeside&apos;s bustling tourism district to
              residential neighborhoods and commercial hubs, we protect assets
              and create long-term value for Pokhara&apos;s community. Our
              vision is to maintain Pokhara&apos;s reputation as a clean, safe,
              and welcoming destination while ensuring every resident and
              business owner enjoys a pest-free environment.
            </p>
            <FeatureList
              items={[
                "Lead the adoption of innovative pest control technologies specifically adapted for Pokhara&apos;s unique environment",
                "Expand our services across all areas of Pokhara—from Lakeside to the city center—providing tailored, client-focused solutions",
                "Ensure every home, hotel, restaurant, and business in Pokhara benefits from smart, effective pest management",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
