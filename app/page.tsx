import Image from "next/image";
import Navigation from "./components/Navigation";
import ContactForm from "./components/ContactForm";
import { getImagePath } from "./lib/utils";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section  id="hero" className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete Support for{" "}
              <span className="gradient-text">Property Accounting</span>,
              Real Estate Bookkeeping and Financial Analysis Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Expert Real estate bookkeeping, Property Accounting and Financial Analysis services 
              tailored for property management firms, real estate private equity firms, developers, 
              fund managers and brokerages.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">8+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="w-px bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-gray-300">Clients Served</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Fields Section */}
      <section id="fields" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Real Estate Fields We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across diverse real estate sectors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Commercial Real Estate",
                icon: "🏢",
                description: "Office buildings, retail centers, and commercial properties"
              },
              {
                title: "HOA",
                icon: "🏘️",
                description: "Homeowners associations and community management"
              },
              {
                title: "Residential",
                icon: "🏠",
                description: "Single-family homes, multifamily apartments, and other residential real estate"
              },
              {
                title: "Industrial",
                icon: "🏭",
                description: "Warehouses, manufacturing units, and other industrial properties"
              }
            ].map((field, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-center"
              >
                <div className="text-5xl mb-4">{field.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                  {field.title}
                </h3>
                <p className="text-gray-600">{field.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive property accounting, bookkeeping and Financial Analysis solutions for Real Estate Industry
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Bookkeeping",
                description: "Accurate and timely bookkeeping services to keep your property finances organized and up-to-date.",
                icon: "📚"
              },
              {
                title: "Property Accounting",
                description: "Full-service property accounting tailored to real estate management requirements.",
                icon: "🏠"
              },
              {
                title: "Bank Reconciliation",
                description: "Monthly bank reconciliation to ensure your accounts are accurate and identify discrepancies quickly.",
                icon: "🏦"
              },
              {
                title: "Invoice Processing",
                description: "Efficient invoice processing and management to streamline your accounts payable workflow.",
                icon: "📄"
              },
              {
                title: "Accounts Payable & Receivable",
                description: "Accounts payable management, tracking timely vendor payments, receipt posting and tracking tenant collection.",
                icon: "💳"
              },
              // {
              //   title: "Accounts Receivable",
              //   description: "Receipt posting and tracking tenant collection.",
              //   icon: "💰"
              // },
              {
                title: "Lease Administration & Abstraction",
                description: "Extract and organize critical lease data while managing lease lifecycles for informed decision-making.",
                icon: "📋"
              },
              {
                title: "CAM Reconciliation",
                description: "Common Area Maintenance reconciliation to ensure accurate tenant billing and expense allocation.",
                icon: "🏢"
              },
              {
                title: "Financial Reporting",
                description: "Comprehensive financial reports that give you clear insights into your property performance.",
                icon: "📊"
              },
              // {
              //   title: "Financial Services",
              //   description: "Financial analysis, modeling, and consulting to support real estate investment decisions and asset management.",
              //   icon: "💼"
              // },
              {
                title: "Yardi Implementation & Data Transition Support",
                description: "Configuration and data transition support for commertial real estate. ",
                icon: "⚙️"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Yardi Implementation & Data Transition Support - Featured */}
          {/* <div className="mt-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Yardi Implementation & Data Transition Support</h3>
                <p className="text-gray-300 text-lg">
                  Expert functional assistance with Yardi software setup, configuration, data migration, and ongoing support. 
                  We help you maximize your property management software investment with seamless transitions.
                </p>
              </div>
              <a
                href="#contact"
                className="gradient-bg px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div> */}

          {/* Financial Analysis - Featured */}
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Financial Analysis Services</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Comprehensive financial analysis to drive informed investment decisions and maximize property performance
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Model Creation",
                  description: "Build detailed financial models for property valuation and investment analysis",
                  icon: "📐"
                },
                {
                  title: "Deal Underwriting",
                  description: "Analysis and risk assessment for real estate transactions",
                  icon: "✅"
                },
                {
                  title: "Asset Management",
                  description: "Ongoing performance monitoring and optimization strategies",
                  icon: "📊"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Expertise Section */}
      <section id="software" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Software Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
             Our India-based team has deep expertise in leading property management and accounting platforms, enabling us to deliver efficient, reliable, and scalable solutions tailored to your business needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: "Yardi",
                logo: getImagePath("/images/yardi-logo.png")
              },
              {
                name: "AppFolio",
                logo: getImagePath("/images/appfolio-logo.png")
              },
              {
                name: "QuickBooks",
                logo: getImagePath("/images/quickbooks-logo.png")
              },
              {
                name: "Entrata",
                logo: getImagePath("/images/entrata-logo.png")
              },
              {
                name: "Buildium",
                logo: getImagePath("/images/buildium-logo.png")
              },
              {
                name: "Real Page",
                logo: getImagePath("/images/realpage-logo.png")
              }
            ].map((software, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-100 hover:border-[var(--accent)] transition-all bg-white"
              >
                <Image
                  src={software.logo}
                  alt={software.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain mb-2"
                />
                <p className="text-sm font-medium text-[var(--primary)] text-center">{software.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">
                About GrossView Consultants
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                GrossView Consultants is a real estate KPO and outsourcing firm specializing in property accounting, real estate bookkeeping, and financial analysis. With over 8 years of industry experience, we support property managers and real estate businesses globally.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our strength lies in a skilled team and structured workflows that ensure accuracy, consistency, and efficiency across real estate operations and investments. Backed by strong industry knowledge, we deliver reliable solutions tailored to the real estate sector.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                With expertise in platforms like Yardi, AppFolio, and QuickBooks, we help businesses streamline processes, reduce costs, and scale with confidence.
              </p>
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div> */}
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-6 sm:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert team with real estate industry experience",
                  "Dedicated support and personalized service",
                  "Cost-effective solutions (save up to 65% cost)",
                  "Secure and confidential data handling",
                  "Scalability (based on your requirements)",
                  "Focus on high value business growth opportunities"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Schedule a Real Estate Consultation Today
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg px-4">
              Let GrossView Consultants handle your offshore real estate needs so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <ContactForm />
              <a
                href="mailto:contact@grossviewconsultants.com"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              {/* <a
                href="tel:+1234567890"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-4 inline-block mb-4">
                <Image
                  src={getImagePath("/images/logo.jpeg")}
                  alt="GrossView Consultants"
                  width={180}
                  height={70}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 max-w-md">
                Real estate KPO and outsourcing firm specializing in property accounting, 
                real estate bookkeeping, and financial analysis services. 
                Your trusted global partner for all offshore real estate services needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Bookkeeping</li>
                <li>Property Accounting</li>
                <li>Bank Reconciliation</li>
                <li>Invoice Processing</li>
                <li>Accounts Payable/Receivable</li>
                <li>Lease Administration</li>
                <li>CAM Reconciliation</li>
                <li>Financial Reporting</li>
                <li>Financial Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Software</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Yardi</li>
                <li>AppFolio</li>
                <li>QuickBooks</li>
                <li>Entrata</li>
                <li>Buildium</li>
                <li>Real Page</li>
              </ul>
              <h4 className="font-semibold mb-4 mt-6 text-lg">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>contact@grossviewconsultants.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} GrossView Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
