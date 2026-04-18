'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'TndYiSPPJ6cQiGDAe';
const EMAILJS_SERVICE_ID = 'service_9ufrsw8';
const EMAILJS_TEMPLATE_ID = 'template_399ou3j';

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

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
    timezone: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  
  const services = [
    'Bookkeeping',
    'Property Accounting',
    'Bank Reconciliation',
    'Invoice Processing',
    'Accounts Payable & Receivable',
    'Lease Administration & Abstraction',
    'CAM Reconciliation',
    'Financial Reporting',
    'Financial Analysis',
    'Yardi Implementation & Data Transition Support'
  ];

  const timezones = [
    'Eastern Time (ET)',
    'Central Time (CT)',
    'Mountain Time (MT)',
    'Pacific Time (PT)',
    'Alaska Time (AKT)',
    'Hawaii Time (HT)',
    'GMT/UTC',
    'IST (India)',
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
      setErrorMessage('Please select at least one service');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('idle');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        businessName: formData.businessName,
        contactNumber: formData.contactNumber,
        timezone: formData.timezone,
        servicesText: formData.services.join(', '),
        businessDetails: formData.businessDetails,
        comments: formData.comments || 'No comments'
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Show success message
      setSubmitStatus('success');
      setFormData({
        name: '',
        businessName: '',
        businessDetails: '',
        services: [],
        contactNumber: '',
        timezone: '',
        comments: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Failed to send request. Please try again.');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
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
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-4 flex justify-between items-center rounded-t-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Request a Consultation
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 p-1 -mr-1"
                  aria-label="Close"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                    Business <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Timezone */}
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    required
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
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
              <div className="relative mt-3 sm:mt-4" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Services <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent text-left flex justify-between items-center"
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
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
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

              {/* Business Details & Comments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div>
                  <label htmlFor="businessDetails" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="businessDetails"
                    name="businessDetails"
                    required
                    value={formData.businessDetails}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none"
                    placeholder="Property types, units..."
                  />
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none"
                    placeholder="Additional info..."
                  />
                </div>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-green-800">Request Submitted!</h3>
                      <p className="text-sm text-green-700 mt-1">Thank you! We will contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Submission Failed</h3>
                      <p className="text-sm text-red-700 mt-1">{errorMessage || 'Something went wrong. Please try again.'}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="mt-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: '',
                      businessName: '',
                      businessDetails: '',
                      services: [],
                      contactNumber: '',
                      timezone: '',
                      comments: ''
                    });
                    setIsOpen(false);
                  }}
                  className="w-full sm:w-auto px-4 py-2 text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gradient-bg text-white px-5 py-2 text-base rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
