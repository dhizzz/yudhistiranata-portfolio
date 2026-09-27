// Contact details live here so they can be filled in one place.
// An empty `value` renders as "being added" instead of a link, never as fake data.

export type ContactKey = "email" | "whatsapp" | "linkedin" | "github";

export interface ContactChannel {
  key: ContactKey;
  /** What the visitor sees, e.g. "name@domain.com" or "+62 812 0000 0000". */
  value: string;
  /** Full destination: mailto:, https://wa.me/62..., https://linkedin.com/in/... */
  href: string;
}

export const contactChannels: ContactChannel[] = [
  { key: "email", value: "anggarata24@gmail.com", href: "mailto:anggarata24@gmail.com" },
  { key: "whatsapp", value: "+62 895 3221 30379", href: "https://wa.me/62895322130379" },
  {
    key: "linkedin",
    value: "linkedin.com/in/yudhistira-rangga-nata",
    href: "https://www.linkedin.com/in/yudhistira-rangga-nata/",
  },
  { key: "github", value: "github.com/dhizzz", href: "https://github.com/dhizzz" },
];

export function isChannelReady(channel: ContactChannel) {
  return channel.value.trim() !== "" && channel.href.trim() !== "";
}

export const stackGroups = [
  {
    title: { en: "Interface", id: "Antarmuka" },
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: { en: "Motion & 3D", id: "Motion & 3D" },
    tools: ["Framer Motion", "Three.js", "React Three Fiber", "Lenis"],
  },
  {
    title: { en: "Delivery", id: "Pengiriman" },
    tools: ["Node.js", "Git", "Vercel", "Figma"],
  },
];
