import { companyData } from '../data/siteData'

export const whatsappUrl = (message = companyData.whatsappMessage) =>
  `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(message)}`
