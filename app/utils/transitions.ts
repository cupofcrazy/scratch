import type { PageMeta } from "#app"
import { gsap } from 'gsap'

type PageTransition = PageMeta["pageTransition"]

export const indexPageTransition: PageTransition = {
  css: false,
  name: 'index',
  onEnter: (el, done) => {
    // console.log('enter')
    const tl = gsap.timeline({ onComplete: done })
    tl.from(el, { y: '100%', duration: 1, ease: 'expo' })
    // tl.from('.index-projects .project-item', { opacity: 0, y: '100%', duration: 1, ease: 'expo.out', stagger: 0.1 }, '<.3')
  },
  onLeave: (el, done) => {
    // console.log('leave')
    gsap.to(el, { scale: 0.9, y: '-20%', duration: 1, ease: 'expo', delay: 0, onComplete: done })
  },
}

export const projectsPageTransition: PageTransition = {
  css: false,
  name: 'projects',
  onEnter: (el, done) => {
    // console.log('enter')
    const tl = gsap.timeline({ onComplete: done })
    tl.from(el, { x: '100%', duration: 1, ease: 'expo' })
    tl.from('.project-item', { opacity: 0, y: '100%', duration: 1, ease: 'expo.out', stagger: 0.1 }, '<.3')
  },
  onLeave: (el, done) => {
    // console.log('leave')
    gsap.to(el, { scale: 0.9, x: '-20%', duration: 1, ease: 'expo', delay: 0, onComplete: done })
  },
}


export const archivePageTransition: PageTransition = {
  css: false,
  name: 'archive',
  onEnter: (el, done) => {
    // console.log('enter')
    const tl = gsap.timeline({ onComplete: done })
    tl.from(el, { y: '100%', duration: 1, ease: 'expo' })
  },
  onLeave: (el, done) => {
    // console.log('leave')
    gsap.to(el, { y: '100%', duration: 1, ease: 'expo', onComplete: done })
  },
}



export const projectPageTransition: PageTransition = {
  css: false,
  name: 'project-transition',
  onEnter: (el, done) => {
    // console.log('enter')
    const tl = gsap.timeline({ onComplete: done })
    tl.from(el, { y: '100%',  duration: 1, ease: 'expo.inOut' }, 'start')
    // tl.set('.project-container', { borderRadius: '2rem' }, 'start')
    // tl.from('.backdrop', { opacity: 1, ease: 'expo', duration: 1 }, 'start')
    // tl.from('.project-container', { y: '100%',  duration: 1, ease: 'expo' }, 'start')
    // tl.from('.project__cover', { y: '100%',  duration: 1, ease: 'expo' }, 'start')
    // tl.to('.project-container', { borderRadius: '0rem' }, '<.5')
    // gsap.from(el, { y: '100%',  duration: 1, ease: 'expo' })

  },
  onLeave: (el, done) => {
    // console.log('leave')
    const tl = gsap.timeline({ onComplete: done })
    tl.to(el, { y: '100%', duration: 1, ease: 'expo.inOut' })
    // tl.to('.project__cover', { y: '-100%',  duration: 1, ease: 'expo' }, '-=1')
    // tl.to('.project-container', { borderRadius: '0rem' }, )

  },
}

export const infoPageTransition: PageTransition = {
  css: false,
  name: 'info',
  onEnter: (el, done) => {
    const tl = gsap.timeline({ onComplete: done })
    tl.from('.backdrop', { autoAlpha: 0, duration: .5, ease: 'expo' })
    tl.from('.content', { x: '100%', duration: 1, ease: 'expo' }, '<.1')
  },
  onLeave: (el, done) => {
    const tl = gsap.timeline({ onComplete: done })
    tl.to('.content', { x: '100%', duration: 1, ease: 'expo' })
    tl.to('.backdrop', { autoAlpha: 0, duration: 1, ease: 'expo' }, '<.1')
    // tl.to(el, { autoAlpha: 0, duration: .3, ease: 'expo' })
  },
}

type Transition = {
  [key: string]: PageMeta["pageTransition"]
}

export const transitions: Transition = {
  slideLeft: {
    css: false,
    name: 'slide-left',
    onEnter: (el, done) => {
      const tl = gsap.timeline({ onComplete: done })
      tl.from(el, { x: '100%', duration: 1, ease: 'expo' })
    },
    onLeave: (el, done) => {
      gsap.to(el, { x: '-100%', duration: 1, ease: 'expo', onComplete: done })
    },
  },
  slideRight: {
    css: false,
    name: 'slide-right',
    onEnter: (el, done) => {
      const tl = gsap.timeline({ onComplete: done })
      tl.from(el, { x: '-100%', duration: 1, ease: 'expo' })
    },
    onLeave: (el, done) => {
      gsap.to(el, { x: '100%', duration: 1, ease: 'expo', onComplete: done })
    },
  },
  fade: {
    css: false,
    name: 'fade',
    onEnter: (el, done) => {
      gsap.from(el, { opacity: 0, duration: 1, ease: 'expo', onComplete: done })
    },
    onLeave: (el, done) => {
      gsap.to(el, { opacity: 0, duration: 1, ease: 'expo', onComplete: done })
    },
  },
  indexPageTransition,
  projectPageTransition,
  archivePageTransition,
  infoPageTransition,
}