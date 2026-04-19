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
    email: '',
    businessName: '',
    businessDetails: '',
    services: [] as string[],
    contactNumber: '',
    timezone: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field as user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateField = (fieldName: string, value: string): string | null => {
    switch (fieldName) {
      case 'name':
        return !value.trim() ? 'Name is required' : null;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return null;
      case 'businessName':
        return !value.trim() ? 'Business name is required' : null;
      case 'contactNumber':
        if (!value.trim()) return 'Phone number is required';
        if (!validatePhone(value)) return 'Please enter a valid phone number.';
        return null;
      case 'timezone':
        return !value ? 'Timezone is required' : null;
      case 'businessDetails':
        return !value.trim() ? 'Business details are required' : null;
      default:
        return null;
    }
  };

  const validateServices = (): string | null => {
    return formData.services.length === 0 ? 'Please select at least one service' : null;
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setFieldErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      
      // Clear services error if at least one is selected
      if (newServices.length > 0 && fieldErrors.services) {
        setFieldErrors(prev => {
          const updated = { ...prev };
          delete updated.services;
          return updated;
        });
      }
      
      return {
        ...prev,
        services: newServices
      };
    });
  };

  // Validation helpers
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Just check for at least 10 digits (allows many formats)
    const digitCount = (phone.match(/\d/g) || []).length;
    return digitCount >= 10;
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return 'Name is required';
    }
    if (!formData.email.trim()) {
      return 'Email is required';
    }
    if (!validateEmail(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.businessName.trim()) {
      return 'Business name is required';
    }
    if (!formData.contactNumber.trim()) {
      return 'Phone number is required';
    }
    if (!validatePhone(formData.contactNumber)) {
      return 'Please enter a valid phone number.';
    }
    if (!formData.timezone) {
      return 'Timezone is required';
    }
    if (formData.services.length === 0) {
      return 'Please select at least one service';
    }
    if (!formData.businessDetails.trim()) {
      return 'Business details are required';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted, validating...');
    
    const validationError = validateForm();
    console.log('Validation error:', validationError);
    console.log('Form data:', formData);
    
    if (validationError) {
      console.log('Validation failed:', validationError);
      return;
    }
    
    console.log('Validation passed, sending email...');
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        contactNumber: formData.contactNumber,
        timezone: formData.timezone,
        servicesText: formData.services.join(', '),
        businessDetails: formData.businessDetails,
        comments: formData.comments || 'No comments'
      };

      console.log('Sending email with params:', templateParams);

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully');
      // Show success popup and close form
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        businessName: '',
        businessDetails: '',
        services: [],
        contactNumber: '',
        timezone: '',
        comments: ''
      });
      setFieldErrors({});
      
      // Close form immediately
      setIsOpen(false);
      
      // Show success popup
      setShowSuccessPopup(true);
      
      // Auto-hide popup after 4 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
        setSubmitStatus('idle');
      }, 4000);
    } catch (error) {
      console.error('Form submission error:', error);
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
        type="button"
        onClick={() => setIsOpen(true)}
        className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
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
                    onBlur={handleFieldBlur}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${
                      fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
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
                    onBlur={handleFieldBlur}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${
                      fieldErrors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Company Name"
                  />
                  {fieldErrors.businessName && <p className="text-red-500 text-xs mt-1">{fieldErrors.businessName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleFieldBlur}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${
                      fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@company.com"
                  />
                  {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
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
                    onBlur={handleFieldBlur}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${
                      fieldErrors.contactNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {fieldErrors.contactNumber && <p className="text-red-500 text-xs mt-1">{fieldErrors.contactNumber}</p>}
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
                    onBlur={handleFieldBlur}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent ${
                      fieldErrors.timezone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select...</option>
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.timezone && <p className="text-red-500 text-xs mt-1">{fieldErrors.timezone}</p>}
                </div>
              </div>

              {/* Services Needed - Multi-select Dropdown */}
              <div className="relative mt-3 sm:mt-4 col-span-1 sm:col-span-2" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Services <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    // Check services validation when opening dropdown
                    if (!servicesDropdownOpen && formData.services.length === 0) {
                      setFieldErrors(prev => ({
                        ...prev,
                        services: 'Please select at least one service'
                      }));
                    }
                  }}
                  className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent text-left flex justify-between items-center ${
                    fieldErrors.services ? 'border-red-500' : 'border-gray-300'
                  }`}
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
                {fieldErrors.services && <p className="text-red-500 text-xs mt-1">{fieldErrors.services}</p>}
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
                    onBlur={handleFieldBlur}
                    rows={2}
                    className={`w-full px-3 py-2 text-base text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none ${
                      fieldErrors.businessDetails ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Property types, units..."
                  />
                  {fieldErrors.businessDetails && <p className="text-red-500 text-xs mt-1">{fieldErrors.businessDetails}</p>}
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
                      <p className="text-sm text-red-700 mt-1">Failed to send request. Please try again.</p>
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
                      email: '',
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

      {/* Success Popup - Outside Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="flex-shrink-0 mb-4">
                <svg className="h-12 w-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
              <p className="text-gray-600 mb-6">Thank you for reaching out. We will contact you within 24 hours.</p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
