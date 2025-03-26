import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Palette, 
  Mail, 
  Code, 
  PenTool, 
  Layout, 
  ArrowRight, 
  Star, 
  Users, 
  Coffee, 
  Award, 
  MapPin,
  Quote
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Toaster } from '@/components/ui/toaster';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const services = [
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Brand Identity",
      description: "Strategic brand identity design that captures your essence and connects with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: <Layout className="w-12 h-12 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance engagement and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Design",
      description: "Modern, responsive websites that deliver exceptional user experiences across all devices.",
      features: ["Responsive Design", "Interactive Elements", "Performance Optimization", "SEO Best Practices"]
    },
  ];

  const projects = [
    {
      title: "Luxury Fashion Brand",
      description: "Complete brand identity and e-commerce design for a high-end fashion label.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
      category: "Branding",
    },
    {
      title: "Health & Wellness App",
      description: "Intuitive mobile app design promoting healthy lifestyle and wellness tracking.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2000",
      category: "UI/UX",
    },
    {
      title: "Creative Agency Website",
      description: "Dynamic website design showcasing creative work and services.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000",
      category: "Web Design",
    },
  ];

  const stats = [
    { icon: <Star className="w-8 h-8" />, value: "10+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, value: "200+", label: "Happy Clients" },
    { icon: <Coffee className="w-8 h-8" />, value: "500+", label: "Projects Done" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Design Awards" },
  ];

  const testimonials = [
    {
      content: "The team's innovative approach to design and attention to detail transformed our brand identity. Their work exceeded our expectations and helped us stand out in a competitive market.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250"
    },
    {
      content: "Working with this design agency was a game-changer for our digital presence. Their understanding of UX/UI principles and creative solutions delivered remarkable results.",
      author: "Michael Chen",
      position: "Product Director",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250"
    },
    {
      content: "The level of professionalism and creativity they brought to our project was outstanding. They didn't just meet our requirements; they elevated our entire brand vision.",
      author: "Emily Rodriguez",
      position: "Marketing Head",
      company: "Global Brands",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250"
    },
    {
      content: "Their strategic approach to design and branding helped us achieve a 200% increase in user engagement. A truly exceptional team that delivers results.",
      author: "David Park",
      position: "Founder",
      company: "NextGen Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Toaster />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Palette className="w-20 h-20 text-primary mx-auto lg:mx-0" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Creative Design Solutions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Transforming ideas into exceptional digital experiences through innovative design and strategic thinking.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Let's Talk
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2000"
                  alt="Design Process"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and digital presence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of our best work and creative solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className=" border-white hover:bg-white/20">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary mb-2 inline-block">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses through our design solutions.
            </p>
          </motion.div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6">
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary/20" />
                    </div>
                    <p className="text-lg mb-6 text-muted-foreground">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideIn}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Let's Create Something Amazing Together</h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your ideas into reality? Get in touch and let's discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>contact@designer.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-muted p-8 rounded-2xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;