export default function Title({ children, className = '' }) {
  return (
      <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.1em] text-white font-[public/fonts/ari/ari-w9500-condensed-bold.ttf] ${className}`}>
          {children}
      </h1>
  );
}
