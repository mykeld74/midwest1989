import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
// import { useDimensions } from './use-dimensions'
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"

const sidebar = {
  open: () => ({
    clipPath: `circle(1800px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const MotionNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  // const { height } = 1000
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      ref={containerRef}
      variants={sidebar}
    >
      <Navigation />

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
