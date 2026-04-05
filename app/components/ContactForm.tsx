'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessDetails: '',
    services: [] as string[],
    contactNumber: '',
    bestTimeToCall: '',
    timezone: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Bookkeeping',
    'Property Accounting',
    'Bank Reconciliation',
    'Invoice Processing',
    'Accounts Payable',
    'Accounts Receivable',
    'Lease Administration',
    'Financial Reporting',
    'Tax Preparation Support',
    'Yardi Implementation & Data Transition',
    'Financial Services',
    'Other'
  ];

  const timezones = [
    'Eastern Time (ET)',
    'Central Time (CT)',
    'Mountain Time (MT)',
    'Pacific Time (PT)',
    'Alaska Time (AKT)',
    'Hawaii Time (HT)',
    'GMT/UTC',
    'Other'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.services.length === 0) {
      alert('Please select at least one service');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const subject = `New Consultation Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Business Name: ${formData.businessName}
Business Details: ${formData.businessDetails}

Services Requested: ${formData.services.join(', ')}

Contact Number: ${formData.contactNumber}
Best Time to Call: ${formData.bestTimeToCall}
Timezone: ${formData.timezone}

Additional Comments:
${formData.comments}
    `.trim();

    const mailtoLink = `mailto:contact@grossviewconsultants.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        businessName: '',
        businessDetails: '',
        services: [],
        contactNumber: '',
        bestTimeToCall: '',
        timezone: '',
        comments: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 2000);
    }, 500);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg inline-flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Request Consultation
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center rounded-t-xl">
              <div className="flex-1 min-w-0 pr-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                  Request a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1 hidden sm:block">
                  We'll respond within 24 hours
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-2 flex-shrink-0"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Business <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    placeholder="Company Name"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Timezone */}
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Timezone <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    required
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  >
                    <option value="">Select...</option>
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services Needed - Multi-select Dropdown */}
              <div className="relative mt-4" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Services <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all text-left flex justify-between items-center min-h-[42px]"
                >
                  <span className={`${formData.services.length === 0 ? 'text-gray-400' : 'text-gray-900'} truncate pr-2`}>
                    {formData.services.length === 0 
                      ? 'Select services...' 
                      : formData.services.join(', ')
                    }
                  </span>
                  <svg className={`w-5 h-5 transition-transform flex-shrink-0 ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {servicesDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-52 overflow-y-auto">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-2 focus:ring-[var(--accent)]"
                        />
                        <span className="text-gray-900 text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Business Details & Comments in one row on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="businessDetails" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Business Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="businessDetails"
                    name="businessDetails"
                    required
                    value={formData.businessDetails}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                    placeholder="Property types, units..."
                  />
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                    placeholder="Additional info..."
                  />
                </div>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium text-sm">✓ Request sent!</p>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="mt-5 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: '',
                      businessName: '',
                      businessDetails: '',
                      services: [],
                      contactNumber: '',
                      bestTimeToCall: '',
                      timezone: '',
                      comments: ''
                    });
                    setIsOpen(false);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gradient-bg text-white px-6 py-2.5 text-base rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
