import { Brain, Heart, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center pt-16">
        <div className="container px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-text-gradient mb-6 animate-fadeIn">
            Different Thinking, Unique Value
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fadeIn">
            Empowering neurodivergent individuals to thrive in IT careers while helping companies build truly inclusive workplaces.
          </p>
          <Button size="lg" className="animate-slideUp">
            Join Our Mission
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-secondary">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Embrace Neurodiversity</h3>
              <p className="text-muted-foreground">
                Celebrating unique perspectives and cognitive styles in the workplace.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Foster Inclusion</h3>
              <p className="text-muted-foreground">
                Creating environments where everyone can contribute their best work.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Build Community</h3>
              <p className="text-muted-foreground">
                Connecting individuals and organizations to create lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              After over 20 years as a software engineer, our founder received an autism diagnosis in late 2023. This revelation sparked a profound journey of self-discovery and purpose, leading to the creation of ASD.org.
            </p>
            <p className="text-lg text-muted-foreground">
              This experience inspired a mission to bridge the gap between neurodivergent talent and the IT industry, fostering understanding, acceptance, and growth for both individuals and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;