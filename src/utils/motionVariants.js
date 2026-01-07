
export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible : (custom)=> ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },

    })
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom * 0.06, ease: 'easeOut' },
  }),
}
