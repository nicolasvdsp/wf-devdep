import smoothscrolling from './scroll';

function customAnimations() {
  if (import.meta.env.DEV) {
    import('./gsapanimations').then((module) => {
      const allGsapAnimations = module.default;
      allGsapAnimations();
    });
  }

  smoothscrolling();
}

export default customAnimations;