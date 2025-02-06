import React from 'react'

export default function Trusted() {
  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-900 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">WHERE WE’RE TRUSTED</h2>
            <div className="flex items-center space-x-4">
              <img src="https://jtech.digital/content/pub/blog/google-verified-reviews.jpg" alt="Google Reviews" className="h-8" />
              <img src="/trustpilot.png" alt="Trustpilot" className="h-8" />
              <img src="/reviews-io.png" alt="Reviews.io" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">TrustScore 4.9 299 reviews</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">OUR LOGISTICS PARTNERS</h2>
            <div className="flex items-center space-x-4">
              <img src="/usps.png" alt="USPS" className="h-8" />
              <img src="/dhl.png" alt="DHL" className="h-8" />
              <img src="/fedex.png" alt="FedEx" className="h-8" />
            </div>
          </div>
        </div>
      </section>
  )
}
