import tastybiteImg from '../assets/tastybitefastfood.png'
import cleverschoolImg from '../assets/cleverschools.png'
import shopcartImg from '../assets/shopcart.png'
import payhausImg from '../assets/payhaus.png'
import cakeGalleryImg from '../assets/bakery.png'
import stylehub from '../assets/stylehub.png'
import hybridsec from '../assets/hybridsec.png'
import abadev from '../assets/abadev.png'
import brightpath from '../assets/brigthpath.png'
import essykilishi from '../assets/essykilishi.png'
import schmanage from "../assets/schmanage.png"

export const projects = [
  {
    title: 'Style Hub',
    category: 'Fashion E-commerce',
    description:
      "Fashion e-commerce platform with product listing, shopping cart, and checkout functionality, order code tracking, and admin dashboard for managing products and orders.",
    tags: ['React', 'Supabase', 'Tailwind'],
    image: stylehub,
    link: 'http://stylehub101.netlify.app/',
    github: 'https://github.com/mac-101/StyleHub',
    isFeatured: true,
  },
  {
    title: 'Clever School',
    category: 'Education',
    description: 'A modern, high-performance informational website. It showcases academic programs, campus culture, and admissions to parents and prospective students through a highly accessible, easy-to-navigate interface',
    tags: ['HTML', 'REST API', 'CSS', 'JavaScript'],
    image: cleverschoolImg,
    link: 'http://cleverkidsschoolsinternational.com.ng/',
    github: 'http://github.com/mac-101',
    isFeatured: true,
  },
  {
    title: 'hybrid security consult',
    category: 'Cybersecurity',
    description:
      '(Collaborated) Cybersecurity consulting platform with service offerings, training programs enrollment, client testimonials, contact form for inquiries and admin panel.',
    tags: ['React', 'Node.js', 'Tailwind'],
    image: hybridsec,
    link: 'https://www.hybridsecconsult.com/',
    github: 'https://github.com/mac-101',
    isFeatured: true,
  },
  {
    title: 'Essy Kilishi',
    category: 'Brand Site',
    description:
      'A beef jerky business site, product showcase, placing order, and gaining trust',
    tags: ['React', 'Tailwind'],
    image: essykilishi,
    link: 'https://essy-kilishi.vercel.app/',
    github: 'https://github.com/mac-101/essy-kilishi',
  },
  {
    title: 'Smart School OS',
    category: 'School Management',
    description:
      '(In production) School manaement system, staff listing, student listing, timetable scheduling, school curriculum, fees tracking.',
    tags: ['Django', 'Python','React', 'DRF', 'Postgresql', 'Tailwind'],
    image: schmanage,
    link: '#',
    github: 'https://github.com/mac-101/school-management-system',
    isFeatured: true
  },
  {
    title: 'Glory Bakery & Gallery',
    category: 'Bakery',
    description:
      'Online showcase and gallery of cakes with custom orders, team booking slots, and baking academy enrollment.',
    tags: ['React', 'Tailwind'],
    image: cakeGalleryImg,
    link: 'https://glory-bakery.netlify.app/',
    github: 'https://github.com/mac-101/glory-bakery',
    isFeatured: true,
  },

  {
    title: 'PayHaus',
    category: 'Property Management',
    description:
      'Rent payment tracking platform helping landlords and tenants manage payments, due dates, and property records.',
    tags: ['React', 'Zustand', 'Firebase', 'Tailwind'],
    image: payhausImg,
    link: 'https://payhaus.netlify.app',
    github: 'https://github.com/mac-101/Payhaus',
  },

  {
    title: 'BrightPath Academy',
    category: 'Education',
    description: 'A modern, high-performance informational website. It showcases academic programs, campus culture, and admissions to parents and prospective students through a highly accessible, easy-to-navigate interface',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: brightpath,
    link: 'https://bright-pathacademy.netlify.app',
    github: 'https://github.com/mac-101/BrightPath-Academy',
  },
  {
    title: 'TastyBite Fast Food',
    category: 'Fast Food',
    description: 'Modern fast food delivery platform with menu management and order tracking.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    image: tastybiteImg,
    link: 'http://tastybitefastfood.netlify.app',
    github: 'https://github.com/mac-101/Tasty-Bite-Restaurant',
  },
  {
    title: 'Aba Dev Submit',
    category: 'Event Management',
    description: 'Dev conference event management platform with speaker list, schedule, and registration functionality.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    image: abadev,
    link: 'https://aba-dev-summit.vercel.app/',
    github: 'https://github.com/mac-101/Aba-Dev-Summit-2026-landing-page',
    isFeatured : true
  },
]
