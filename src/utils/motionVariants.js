export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -18 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 18 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}
