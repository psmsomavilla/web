import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedProperties />
        <WhyChooseUs />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
