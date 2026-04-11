'use client';

import { useState } from 'react';

// TODO: Replace with actual Google Form ID from your Google Form
const GOOGLE_FORM_ID = 'YOUR_GOOGLE_FORM_ID_HERE';
const GOOGLE_FORM_EMBED_URL = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/viewform?embedded=true`;

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-4 py-4 flex justify-between items-center flex-shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Request a Consultation
                </h3>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowSuccess(false);
                  }}
                  className="text-white hover:text-gray-200 p-1 -mr-1"
                  aria-label="Close"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="overflow-y-auto flex-1">
                {showSuccess ? (
                  // Success Message
                  <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-full">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                      <p className="text-gray-600 text-lg mb-2">
                        We've received your consultation request.
                      </p>
                      <p className="text-gray-500 text-base">
                        We'll contact you within <span className="font-semibold text-gray-900">24 hours</span> with more information.
                      </p>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setShowSuccess(false);
                        }}
                        className="mt-6 gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  // Google Form Embed
                  <div className="p-4 sm:p-6">
                    <iframe
                      src={GOOGLE_FORM_EMBED_URL}
                      width="100%"
                      height="800"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      onLoad={() => {
                        // Show success after form submission
                        const checkSubmission = setInterval(() => {
                          try {
                            const iframe = document.querySelector('iframe') as HTMLIFrameElement;
                            if (iframe && iframe.contentDocument) {
                              const content = iframe.contentDocument.body.innerText;
                              if (content.includes('submitted') || content.includes('Thank you')) {
                                setShowSuccess(true);
                                clearInterval(checkSubmission);
                              }
                            }
                          } catch (e) {
                            // Cross-origin restriction - form submission detection won't work
                            // User will need to see success message manually or through server
                          }
                        }, 500);
                      }}
                    >
                      Loading...
                    </iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
