
import { ArrowRight, CheckCircle, Users, Zap, Shield, TrendingUp, Globe, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const IndexEn = () => {
  const services = [
    {
      title: "Test Automation",
      description: "Optimization of testing processes using modern automation tools",
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    {
      title: "Software Testing Audits",
      description: "Comprehensive evaluation of quality and efficiency of testing processes",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "AI-powered Optimization",
      description: "Utilizing artificial intelligence to improve testing methods",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      title: "Testing Strategies for Integration Projects",
      description: "Setting up testing strategies for medium and large integration projects and managing them during implementation",
      icon: <Users className="h-8 w-8 text-primary" />
    }
  ];

  const whyTcrew = [
    "More than 25 years of experience",
    "Specialization in banking and telecommunications",
    "Individual approach to each client",
    "Innovative solutions using AI"
  ];

  const scrollingTexts = [
    "AI-powered Testing",
    "Banking Solutions",
    "Telecom Innovation", 
    "Quality Assurance",
    "Test Automation"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-white/95 via-white/98 to-primary/5 backdrop-blur-md z-50 border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/af19479d-d08b-4611-a40e-b2b600f1830c.png" 
                alt="TCREW Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
                Our Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#why-tcrew" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
                Why TCREW?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
                <Link to="/">
                  <Globe className="mr-2 h-4 w-4" />
                  CZ
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary via-blue-600 to-teal-500 hover:from-primary/90 hover:via-blue-600/90 hover:to-teal-500/90 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrolling Text Animation */}
      <div className="fixed top-20 left-0 w-full overflow-hidden bg-gradient-to-r from-primary/10 to-transparent z-40 py-2">
        <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {scrollingTexts.map((text, index) => (
            <span key={index} className="inline-block mx-8 text-primary font-semibold text-sm">
              {text}
            </span>
          ))}
          {scrollingTexts.map((text, index) => (
            <span key={`repeat-${index}`} className="inline-block mx-8 text-primary font-semibold text-sm">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-primary/10 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-lg text-primary font-medium mb-4 italic">Your partner for testing</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional software testing for{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">banking and telecommunications</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                More than 25 years of experience in software testing. We specialize in comprehensive services 
                for banking, telecommunications, energy, and engineering sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                  <a href="#services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop&crop=center" 
                alt="Advanced AI Testing Technology"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-primary/20 hover:shadow-3xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive software testing services with emphasis on quality and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 group hover:scale-105">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Service Portfolio</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Testing reporting to European investment banking registry</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Testing financial market tool reporting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Testing debt system implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Third-party integrations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Testing process design and optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>QA consulting and advisory services</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop&crop=center" 
                alt="Software Testing Code"
                className="w-full max-w-md h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Long-term Partnership</h3>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We love to establish long-term partnerships, which from our experience lead to client satisfaction. 
              Our continuous involvement in your projects allows us to better understand your needs 
              and provide increasingly higher quality services tailored to your specific environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xl text-gray-600">
                Team of experienced professionals in software testing
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Martin Boháč</CardTitle>
                    <CardDescription className="text-base">Founder of TCREW</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      More than 25 years of experience with systems in telecommunications, 
                      banking and other sectors. Founded TCREW 
                      with a vision to create a team of software testing professionals.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  TCREW was founded with a clear vision - to create a team of professionals 
                  in software testing and deliver services based on more than 25 years 
                  of experience with systems in telecommunications, banking and other sectors.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  After more than ten years of successful market presence, our service portfolio 
                  has expanded to include key areas such as test automation, 
                  audits and AI-powered optimization.
                </p>
                <div className="flex justify-center lg:justify-start mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center" 
                    alt="AI Banking Software"
                    className="w-80 h-60 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TCREW Section */}
      <section id="why-tcrew" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why TCREW?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Discover why our services are the right choice for your success in digital transformation
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {whyTcrew.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop&crop=center" 
                  alt="AI Software Testing Code"
                  className="w-full max-w-md h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Your success is our goal</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We view every project as an opportunity to demonstrate our expertise and create 
                long-term partnerships based on trust and results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our rich experience from various industries allows us to quickly orient ourselves 
                in your specific environment and offer solutions that actually work. 
                <span className="font-semibold text-primary"> We invest in the latest technologies</span> 
                to provide you with competitive advantage in the rapidly changing world of IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-xl text-gray-600">
                Have questions or want to discuss your project? Contact us!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:info@tcrew.cz" className="text-primary hover:text-primary/80 transition-colors">info@tcrew.cz</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+420777557197" className="text-primary hover:text-primary/80 transition-colors">+420 777 557 197</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      U zeměpisného ústavu 683/2<br />
                      Bubeneč, 160 00 Prague 6
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Company ID</h4>
                    <p className="text-gray-600">02857537</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Write to Us</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please describe your project or requirements..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/af19479d-d08b-4611-a40e-b2b600f1830c.png" 
                  alt="TCREW Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Professional software testing for banking, telecommunications, 
                energy and engineering sectors.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/tcrew/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p><a href="mailto:info@tcrew.cz" className="hover:text-white transition-colors">info@tcrew.cz</a></p>
                <p><a href="tel:+420777557197" className="hover:text-white transition-colors">+420 777 557 197</a></p>
                <p>U zeměpisného ústavu 683/2</p>
                <p>Bubeneč, 160 00 Prague 6</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p><a href="#services" className="hover:text-white transition-colors">Test Automation</a></p>
                <p><a href="#services" className="hover:text-white transition-colors">Software Testing Audits</a></p>
                <p><a href="#services" className="hover:text-white transition-colors">AI-powered Optimization</a></p>
                <p><a href="#services" className="hover:text-white transition-colors">Banking System Testing</a></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TCREW. All rights reserved. | Company ID: 02857537</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default IndexEn;
