
import { ArrowRight, CheckCircle, Users, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const IndexEn = () => {
  const services = [
    {
      title: "Test Automation",
      description: "Optimization of testing processes using modern automation tools",
      icon: <Zap className="h-8 w-8 text-cyan-500" />
    },
    {
      title: "Software Testing Audits",
      description: "Comprehensive evaluation of quality and efficiency of testing processes",
      icon: <Shield className="h-8 w-8 text-cyan-500" />
    },
    {
      title: "AI-powered Optimization",
      description: "Utilizing artificial intelligence to improve testing methods",
      icon: <TrendingUp className="h-8 w-8 text-cyan-500" />
    }
  ];

  const whyTcrew = [
    "More than 25 years of experience",
    "Specialization in banking and telecommunications",
    "Individual approach to each client",
    "Innovative solutions using AI"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/af19479d-d08b-4611-a40e-b2b600f1830c.png" 
                alt="TCREW Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-cyan-500 transition-colors">Our Services</a>
              <a href="#about" className="text-gray-600 hover:text-cyan-500 transition-colors">About Us</a>
              <a href="#why-tcrew" className="text-gray-600 hover:text-cyan-500 transition-colors">Why TCREW?</a>
              <a href="#contact" className="text-gray-600 hover:text-cyan-500 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <Globe className="mr-2 h-4 w-4" />
                  CZ
                </Link>
              </Button>
              <Button asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-cyan-500 text-cyan-700">Founded 2014</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional software testing for{" "}
              <span className="text-cyan-500">banking and telecommunications</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              More than 25 years of experience in software testing. We specialize in comprehensive services 
              for banking, telecommunications, energy, and engineering sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-cyan-500 hover:bg-cyan-600">
                <a href="#services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive software testing services with emphasis on quality and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-cyan-100 hover:border-cyan-200">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-cyan-50 rounded-lg p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Service Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Testing reporting to European investment banking registry</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Testing financial market tool reporting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Testing debt system implementation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Third-party integrations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Testing process design and optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>QA consulting and advisory services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
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
                <Card className="border-cyan-100">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-cyan-500" />
                    </div>
                    <CardTitle className="text-2xl">Ing. Martin Boháč</CardTitle>
                    <CardDescription className="text-base">Founder and Leader of TCREW</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      More than 25 years of experience with systems in telecommunications, 
                      banking and other sectors. Founded TCREW in 2014 
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TCREW Section */}
      <section id="why-tcrew" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why TCREW?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our competitive advantages and values that set us apart in the market
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyTcrew.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border border-cyan-100">
                  <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-cyan-50 rounded-lg border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Approach</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project is unique for us. We pay attention to details and provide 
                solutions tailored to your specific needs. Our experience from various 
                industries allows us to offer comprehensive and innovative approach to software testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
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
                    <p className="text-gray-600">info@tcrew.cz</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+420 777 557 197</p>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Please describe your project or requirements..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
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
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@tcrew.cz</p>
                <p>+420 777 557 197</p>
                <p>U zeměpisného ústavu 683/2</p>
                <p>Bubeneč, 160 00 Prague 6</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Test Automation</p>
                <p>Software Testing Audits</p>
                <p>AI-powered Optimization</p>
                <p>Banking System Testing</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TCREW. All rights reserved. | Company ID: 02857537</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexEn;
