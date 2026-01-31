export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tatvixtech.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tatvix Technologies",
    "url": siteUrl,
    "logo": `${siteUrl}/Logo2.png`,
    "description": "Expert embedded systems design and IoT product development services. End-to-end solutions for smart devices, industrial automation, and connected products.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-87587-29042",
      "contactType": "Customer Service",
      "email": "info@tatvixtech.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/tatvix"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tatvix Technologies",
    "url": siteUrl,
    "description": "Expert embedded systems design and IoT product development services",
    "publisher": {
      "@type": "Organization",
      "name": "Tatvix Technologies"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Embedded Systems Design & IoT Development",
    "provider": {
      "@type": "Organization",
      "name": "Tatvix Technologies",
      "url": siteUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Embedded Systems & IoT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embedded Systems Design",
            "description": "Custom embedded hardware and software solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IoT Product Development",
            "description": "End-to-end IoT solutions for connected devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PCB Design",
            "description": "Professional PCB design and manufacturing support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Firmware Development",
            "description": "Custom firmware for microcontrollers and embedded systems"
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tatvix Technologies",
    "image": `${siteUrl}/Logo2.png`,
    "url": siteUrl,
    "telephone": "+91-87587-29042",
    "email": "info@tatvixtech.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
