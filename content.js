export const navLinks = [
  { href: "showcase", label: "Showcase" },
  { href: "features", label: "Capabilities" },
  { href: "specs", label: "Specs" },
  { href: "contact", label: "Contact" },
];

export const features = [
  {
    id: "physics",
    title: "Real contact dynamics",
    description:
      "Joints, friction, and collisions computed at simulation speed, not faked with keyframes — what you see behaves the way the real machine would.",
  },
  {
    id: "web",
    title: "Runs in the browser",
    description:
      "No installs, no plugins. The same interactive model your engineers review in the lab, shareable with a link.",
  },
  {
    id: "digital-twin",
    title: "Built for digital twins",
    description:
      "Swap in your own rigged asset and drive it from live sensor data or a control script instead of a demo loop.",
  },
];

export const specs = [
  { id: "joints", label: "Articulated joints", value: "6" },
  { id: "fps", label: "Target frame rate", value: "60fps" },
  { id: "latency", label: "Input-to-render latency", value: "<40ms" },
  { id: "footprint", label: "Asset footprint", value: "<2MB" },
];

export const contactCopy = {
  eyebrow: "Contact",
  heading: "Bring your own asset",
  body:
    "Swap the stand-in model in this template for the one you download from Algoryx Community (or any glTF/GLB asset) and this experience is yours.",
};
