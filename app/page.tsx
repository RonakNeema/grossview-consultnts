import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="GrossView Consultants"
                width={220}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Services</a>
              <a href="#software" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Software</a>
              <a href="#about" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">About</a>
              <a href="#contact" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Contact</a>
            </div>
            <a
              href="#contact"
              className="gradient-bg text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all font-medium shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete Support for{" "}
              <span className="gradient-text">Property Accounting</span>{" "}
              & Real Estate Bookkeeping
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Expert bookkeeping and financial services tailored for property management 
              companies and real estate professionals.
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive property accounting and bookkeeping solutions for real estate professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bookkeeping",
                description: "Accurate and timely bookkeeping services to keep your property finances organized and up-to-date.",
                icon: "📚"
              },
              {
                title: "Bank Reconciliation",
                description: "Monthly bank reconciliation to ensure your accounts are accurate and identify discrepancies quickly.",
                icon: "🏦"
              },
              {
                title: "Lease Abstraction",
                description: "Extract and organize critical lease data for easy access and informed decision-making.",
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
              {
                title: "Property Accounting",
                description: "Full-service property accounting tailored to real estate management requirements.",
                icon: "🏠"
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
          
          {/* Yardi Implementation Support - Featured */}
          <div className="mt-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Yardi Implementation Support</h3>
                <p className="text-gray-300 text-lg">
                  Expert assistance with Yardi software setup, configuration, and ongoing support. 
                  We help you maximize your property management software investment.
                </p>
              </div>
              <a
                href="#contact"
                className="gradient-bg px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Software Expertise Section */}
      <section id="software" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Software Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are certified experts in the leading property management and accounting platforms
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yardi",
                description: "Full implementation, training, and ongoing support for Yardi Voyager and other Yardi products.",
                color: "from-blue-500 to-blue-700"
              },
              {
                name: "AppFolio",
                description: "Complete AppFolio setup and bookkeeping services for property managers.",
                color: "from-green-500 to-green-700"
              },
              {
                name: "QuickBooks",
                description: "QuickBooks integration and management for real estate accounting needs.",
                color: "from-emerald-500 to-teal-700"
              }
            ].map((software, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border-2 border-gray-100 hover:border-[var(--accent)] transition-all"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${software.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-bold">{software.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                  {software.name}
                </h3>
                <p className="text-gray-600">{software.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">
                About GrossView Consultants
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At GrossView Consultants, we specialize in providing comprehensive property 
                accounting and real estate bookkeeping services. With over 8 years of experience, 
                we understand the unique financial challenges faced by property managers and 
                real estate professionals.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our team of experts is proficient in leading property management software 
                including Yardi, AppFolio, and QuickBooks, ensuring seamless integration 
                with your existing systems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert team with real estate industry experience",
                  "Proficient in Yardi, AppFolio & QuickBooks",
                  "Accurate and timely financial reporting",
                  "Dedicated support and personalized service",
                  "Cost-effective solutions for all property sizes",
                  "Secure and confidential data handling"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Property Accounting?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Let GrossView Consultants handle your bookkeeping needs so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:contact@grossviewconsultants.com"
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
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
                  src="/images/logo.jpeg"
                  alt="GrossView Consultants"
                  width={180}
                  height={70}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 max-w-md">
                Offering complete support for property accounting & real estate bookkeeping services. 
                Your trusted partner for all property financial needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Bookkeeping</li>
                <li>Bank Reconciliation</li>
                <li>Lease Abstraction</li>
                <li>CAM Reconciliation</li>
                <li>Financial Reporting</li>
                <li>Property Accounting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Software</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Yardi</li>
                <li>AppFolio</li>
                <li>QuickBooks</li>
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
