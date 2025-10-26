export default function Text({ children, className = "" }) {
  return <p className={`text-base text-white font-[public/fonts/ari/ari-w9500-bold.ttf] ${className}`}>{children}</p>;
}
