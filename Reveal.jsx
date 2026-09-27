import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, y = 32, className = "" }) {
  const ref = useReveal({ delay, y });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
