# 3D Scrolling Demo

## Tech:

- Next.js 13 (with app-router)
- TypeScript
- Tailwind CSS
- gsap
- three.js
- framer-motion
- @react-three/drei
- @react-three/fiber

Originally this is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Upgrade...

🛠️ Refactor the `ScrollTrigger` / `gsap.skewRevealText()` connected to all the `useRefs()` in `Page.tsx` - Should be a class application / regular timeline.. - See the folling:

- https://greensock.com/docs/v3/Plugins/ScrollTrigger/
- https://www.youtube.com/watch?v=l-Cw6PncvxE
- https://vimeo.com/422191943

## Warning:

⚠️⚠️TS🐛⚠️⚠️ There is an `any` in the interface for the ZeussModel's `scrollYProgress`

My thanks to the inspiration [and cleaned up 3d file!] from Maximilian V - max(at))mv-wip.de via @gitconnected.
