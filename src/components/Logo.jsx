import { media } from '../data/media'

// Image wordmark. variant 'navy' for light backgrounds, 'white' for dark.
export default function Logo({ variant = 'navy', className = '' }) {
  return (
    <img
      src={media(variant === 'white' ? 'logo_white.png' : 'logo_navy.png')}
      alt="EAVANT Handels GmbH"
      className={`h-9 w-auto sm:h-10 ${className}`}
      draggable="false"
    />
  )
}
