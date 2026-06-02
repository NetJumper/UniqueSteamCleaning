import { cache } from 'react'
import { client } from './client'
import { business as defaultBusiness, services as defaultServices, reviews as defaultReviews } from '@/data/content'

const defaultFaqs = [
  { q: 'How long does carpet take to dry?', a: 'Most carpets dry within 2–4 hours depending on airflow and humidity. We recommend opening windows and running fans to speed up the process.' },
  { q: 'Do I need to move furniture before you arrive?', a: 'We ask that you move small items and breakables beforehand. Our team can help move larger furniture like sofas and chairs at no extra charge.' },
  { q: 'Are your cleaning products safe for kids and pets?', a: 'Absolutely. We use eco-friendly, non-toxic cleaning solutions that are safe for the whole family — including pets.' },
  { q: 'How often should I get my carpets cleaned?', a: 'We recommend every 6–12 months for most households. Homes with pets, kids, or allergy sufferers benefit from every 3–6 months.' },
  { q: 'Do you offer free estimates?', a: 'Yes! Just give us a call or fill out the contact form and Daniel will get back to you with a free, no-obligation estimate.' },
  { q: 'What areas do you serve?', a: 'We serve Windsor, Fort Collins, Loveland, Greeley, Timnath, Severance, and the surrounding Northern Colorado area.' },
  { q: 'What if I\'m not happy with the results?', a: 'We back every job with a 100% satisfaction guarantee. If you\'re not happy, we\'ll come back and re-clean for free — or refund your money.' },
]

const defaultStats = [
  { value: '500+', label: 'Homes Cleaned' },
  { value: '5+', label: 'Years Experience' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

const defaultContent = {
  business: defaultBusiness,
  services: defaultServices,
  reviews: defaultReviews,
  faqs: defaultFaqs,
  hero: null,
  about: null,
  siteStats: null,
  seo: null,
}

export const fetchAllContent = cache(async () => {
  try {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Sanity timeout')), 5000)
    )
    const result = await Promise.race([client.fetch(`{
      "business": *[_type == "businessInfo"][0],
      "services": *[_type == "service"] | order(order asc, _createdAt asc) {
        title, description, icon, "special": isSpecial
      },
      "reviews": *[_type == "review"] | order(_createdAt asc) { name, text, rating },
      "faqs": *[_type == "faqItem"] | order(order asc, _createdAt asc) {
        "q": question, "a": answer
      },
      "hero": *[_type == "heroContent"][0],
      "about": *[_type == "aboutContent"][0],
      "siteStats": *[_type == "siteStats"][0],
      "seo": *[_type == "seoSettings"][0],
    }`), timeout]) as any

    return {
      business: result.business ?? defaultBusiness,
      services: result.services?.length ? result.services : defaultServices,
      reviews: result.reviews?.length ? result.reviews : defaultReviews,
      faqs: result.faqs?.length ? result.faqs : defaultFaqs,
      hero: result.hero ?? null,
      about: result.about ?? null,
      siteStats: result.siteStats ?? null,
      seo: result.seo ?? null,
    }
  } catch {
    return defaultContent
  }
})
