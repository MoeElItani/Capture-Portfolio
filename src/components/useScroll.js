import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = () => {
   const [element, view] = useInView({ threshold: 0.3 })
   const controls = useAnimation()
   view ? controls.start('show') : controls.start('hidden')
   return [element, controls]
}
