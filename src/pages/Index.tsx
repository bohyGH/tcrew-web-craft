
import { ArrowRight, CheckCircle, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      title: "Automatizace testování",
      description: "Optimalizace testovacích procesů pomocí moderních automatizačních nástrojů",
      icon: <Zap className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Audity testování software",
      description: "Komplexní hodnocení kvality a efektivity testovacích procesů",
      icon: <Shield className="h-8 w-8 text-green-600" />
    },
    {
      title: "Optimalizace pomocí AI",
      description: "Využití umělé inteligence pro zlepšení způsobu testování",
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />
    }
  ];

  const whyTcrew = [
    "Více než 25 let zkušeností",
    "Specializace na bankovnictví a telekomunikace",
    "Individuální přístup ke každému klientovi",
    "Inovativní řešení s využitím AI"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TCREW</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Naše služby</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">O nás</a>
              <a href="#why-tcrew" className="text-gray-600 hover:text-blue-600 transition-colors">Proč TCREW?</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
            <Button asChild>
              <a href="#contact">Kontaktujte nás</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Založeno 2014</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Profesionální testování software pro{" "}
              <span className="text-blue-600">bankovnictví a telekomunikace</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Více než 25 let zkušeností v oblasti testování software. Specializujeme se na komplexní služby 
              pro bankovnictví, telekomunikace, energetiku a strojírenství.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#services">
                  Naše služby
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Kontaktujte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše služby</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Poskytujeme komplexní služby v oblasti testování software s důrazem na kvalitu a inovaci
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kompletní portfolio služeb</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Testování reportingu do celoevropského registru investičního bankovnictví</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Testování reportingů nástrojů finančního trhu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Testování implementace pohledávkového systému</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Integrace na třetí strany</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Návrh a optimalizace procesů testování</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Konzultace a poradenství v oblasti QA</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O nás</h2>
              <p className="text-xl text-gray-600">
                Tým zkušených profesionálů v oblasti testování software
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Ing. Martin Boháč</CardTitle>
                    <CardDescription className="text-base">Zakladatel a vedoucí TCREW</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Více než 25 let zkušeností se systémy v oblastech telekomunikací, 
                      bankovnictví a dalších. Zakladatel společnosti TCREW v roce 2014 
                      s vizí vytvořit tým profesionálů v oblasti testování software.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Naše mise</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Společnost TCREW byla založena s jasnou vizí - vytvořit tým profesionálů 
                  v oblasti testování software a dodávat služby založené na více než 25 let 
                  zkušeností se systémy v oblastech telekomunikací, bankovnictví a dalších.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Po více než deseti letech úspěšného působení na trhu se naše portfolio 
                  služeb rozšířilo o klíčové oblasti včetně automatizace testování, 
                  auditů a optimalizace pomocí AI.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Proč TCREW?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Naše konkurenční výhody a hodnoty, které nás odlišují na trhu
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyTcrew.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individuální přístup</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Každý projekt je pro nás jedinečný. Věnujeme pozornost detailům a poskytujeme 
                řešení šité na míru vašim specifickým potřebám. Naše zkušenosti z různých 
                odvětví nám umožňují nabídnout komplexní a inovativní přístup k testování software.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-xl text-gray-600">
                Máte otázky nebo chcete diskutovat o vašem projektu? Kontaktujte nás!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktní údaje</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">info@tcrew.cz</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">+420 777 557 197</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sídlo</h4>
                    <p className="text-gray-600">
                      U zeměpisného ústavu 683/2<br />
                      Bubeneč, 160 00 Praha 6
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">IČO</h4>
                    <p className="text-gray-600">02857537</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Napište nám</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Společnost
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Popište prosím váš projekt nebo požadavky..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Odeslat zprávu
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <span className="text-xl font-bold">TCREW</span>
              </div>
              <p className="text-gray-400 mb-4">
                Profesionální testování software pro bankovnictví, telekomunikace, 
                energetiku a strojírenství.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@tcrew.cz</p>
                <p>+420 777 557 197</p>
                <p>U zeměpisného ústavu 683/2</p>
                <p>Bubeneč, 160 00 Praha 6</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Služby</h4>
              <div className="space-y-2 text-gray-400">
                <p>Automatizace testování</p>
                <p>Audity testování software</p>
                <p>Optimalizace pomocí AI</p>
                <p>Testování bankovních systémů</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TCREW. Všechna práva vyhrazena. | IČO: 02857537</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
