import type { Localized } from "./projects";

export interface Certification {
  title: string;
  issuer: string;
  /** "YYYY-MM" */
  issued: string;
  expires?: string;
  credentialId?: string;
  summary: Localized;
  /**
   * "verify" only when the page confirms this credential for this person.
   * "course" when the link is the course or exam page and does not show the holder.
   */
  link: { href: string; kind: "verify" | "course" };
  image?: { src: string; width: number; height: number };
}

// Newest first. Details supplied by Yudhistira; each link was opened and checked before being labelled.
export const certifications: Certification[] = [
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    issued: "2026-09",
    summary: {
      en: "Data analytics, the role of data in AI and machine learning, and the paths into a data career.",
      id: "Analitik data, peran data dalam AI dan machine learning, serta jalur karier di bidang data.",
    },
    link: {
      href: "https://www.credly.com/badges/fc43fe44-9930-4051-9b97-2d03dd85e98d/linked_in_profile",
      kind: "verify",
    },
    image: {
      src: "/certificates/cisco-introduction-to-data-science.png",
      width: 484,
      height: 374,
    },
  },
  {
    title: "Certification: Blockchain Basics",
    issuer: "Cyfrin Updraft",
    issued: "2026-08",
    expires: "2027-08",
    credentialId: "BBCC-8URXYXIQLRBXV",
    summary: {
      en: "A proficiency exam on blockchain fundamentals.",
      id: "Ujian kecakapan tentang dasar-dasar blockchain.",
    },
    link: {
      href: "https://updraft.cyfrin.io/courses/blockchain-basics/final/proficiency-exam",
      kind: "course",
    },
  },
];
