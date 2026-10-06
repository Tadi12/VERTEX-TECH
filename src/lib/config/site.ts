export const siteConfig = {
  name: "Vertex Tech",
  description: "Building digital solutions for the businesses of tomorrow.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vertextech.com",
  contact: {
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "hello@vertextech.com",
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 000-0000",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1 (555) 000-0000",
    location: "Global",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/vertextech",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/vertextech",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/vertextech",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/vertextech",
  },
};
