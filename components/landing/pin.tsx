// Pin oficial de EasyWay, recortado de /images/logo.png (96×127)
export const PIN_SRC = "/images/pin.png"
export const PIN_W = 96
export const PIN_H = 127

export function Pin({ className, title }: { className?: string; title?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={PIN_SRC}
      width={PIN_W}
      height={PIN_H}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      className={className}
      loading="lazy"
    />
  )
}
