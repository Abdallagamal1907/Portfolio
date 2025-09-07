export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut'
    }
  }
});

export const zoomIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

export const blurIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
    }
  }
});

export const scaleIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: 'easeOut'
    }
  }
});

export const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const textChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};