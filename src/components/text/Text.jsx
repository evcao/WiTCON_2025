export default function Text({ children, className = "" }) {
  return <p className={`text-base text-white font-[Pixelify_Sans] ${className}`}>{children}</p>;
}
