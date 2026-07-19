import p1_1 from "@/assets/portfolio/project-1/1.jpg.jpeg?url";
import p1_2 from "@/assets/portfolio/project-1/2.jpg.jpeg?url";
import p1_3 from "@/assets/portfolio/project-1/3.jpg.jpeg?url";
import p2_5 from "@/assets/portfolio/project-2/5.jpg.jpeg?url";
import p2_7 from "@/assets/portfolio/project-2/7.png?url";
import p2_8 from "@/assets/portfolio/project-2/8.jpg.jpeg?url";
import p4_1 from "@/assets/portfolio/project-4/bedroom-1.jpg?url";
import p4_2 from "@/assets/portfolio/project-4/bedroom-2.jpg?url";
import p5_1 from "@/assets/portfolio/project-5/office-1.jpg?url";
import p5_2 from "@/assets/portfolio/project-5/office-2.jpg?url";
import p6_1 from "@/assets/portfolio/project-6/kitchen-1.jpg?url";
import p6_2 from "@/assets/portfolio/project-6/kitchen-2.jpg?url";
import p6_3 from "@/assets/portfolio/project-6/kitchen-3.jpg?url";
import p6_4 from "@/assets/portfolio/project-6/kitchen-4.jpg?url";
import p6_5 from "@/assets/portfolio/project-6/kitchen-5.jpg?url";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tools: string[];
  images: string[];
};

/** Images are bundled via Vite `?url` so they resolve in dev, production, and any `base` path. */
export const projects: Project[] = [
  {
    slug: "open-concept-living-kitchen",
    title: "Open-Concept Living & Kitchen",
    shortDescription:
      "Luxury interior renders of a connected lounge and kitchen bar—layered ceiling light, a stone accent wall, and a custom geometric wall feature with teal LED accents.",
    longDescription: `These views show one continuous open plan: a living area with a white sectional and glass coffee tables, and a kitchen / breakfast bar with white cabinetry, open shelving, and bar seating. A dark textured feature wall carries a geometric installation of black frames with integrated teal lighting, echoed by perimeter LED in the stepped ceiling.

Lighting is a main character: cove and recessed sources mix cool and warm tones, and a cluster of black cone pendants hangs over the social zone. Sheer curtains soften daylight at the windows; flooring uses large dark tiles that balance the pale upholstery and wood bar tones.

The set is meant to read as high-end residential presentation imagery—material contrast, ceiling depth, and focal lighting are all tuned for clear client review.`,
    tools: ["3ds Max"],
    images: [p1_1, p1_2, p1_3],
  },
  {
    slug: "warm-minimalist-bedroom",
    title: "Warm Minimalist Bedroom",
    shortDescription:
      "Contemporary bedroom suite with wood wall treatments, a media lounge, sculptural pendant lighting, and wardrobe with integrated storage lighting.",
    longDescription: `Multiple angles of the same suite: a platform bed on a plush rug, layered neutral bedding, and a feature wall in light wood planks with darker vertical slats. A large decorative skeleton-key clock anchors the wood wall; layered champagne and chocolate drapery dress the tall window.

A lounge / media view opens to dark wood paneling, a marble TV wall with a floating console, and a built-in desk nook. Storage is handled by a tall minimalist wardrobe—white panels with a wood band and lit niches—while another view opens a vanity nook with mirror lighting, floating shelves, and a geometric wood pendant with trailing greenery.

The renders emphasize warm wood grain, soft spot and LED accents, and a calm, hotel-like mood suitable for a master bedroom or high-end apartment marketing.`,
    tools: ["3ds Max"],
    images: [p2_7, p2_8, p2_5],
  },
  {
    slug: "starlit-bedroom-suite",
    title: "Starlit Bedroom Suite",
    shortDescription:
      "Atmospheric bedroom visualization with a starry ceiling, warm peach tones, a platform bed, and soft cove lighting for a dreamlike luxury feel.",
    longDescription: `This suite is built around atmosphere: a ceiling field of tiny lights, a soft organic central fixture, and warm cove LEDs that trace platforms and edges. The palette stays in peach, beige, and muted rose, with darker accents in seating and textiles.

One view opens to floor-to-ceiling drapery and rounded lounge chairs; another focuses on the bed, circular textured wall art, and a long handle-less wardrobe wall. Soft floor glow and a sculptural ottoman keep the room feeling intentional from every camera.

The images are presentation stills for a high-concept residential bedroom—mood, material, and lighting hierarchy first.`,
    tools: ["3ds Max"],
    images: [p4_1, p4_2],
  },
  {
    slug: "executive-home-office",
    title: "Executive Home Office",
    shortDescription:
      "Minimalist office visualization with a dark desk, cream cabinetry, sculptural pendants, and bold red accents against a bright urban backdrop.",
    longDescription: `A clean executive workspace centered on a large dark desk and black ergonomic chair, set against floor-to-ceiling cream cabinetry with recessed wood shelving. Horizontal blinds and a city-facing window keep the room bright while the furniture stays grounded.

Statement lighting—elongated crystalline pendants and a desk lamp—pairs with sculptural accents: a tall red figure with a glowing orb, a glossy red sphere, and a textured petal-like stool. Soft neutrals carry most of the palette so the red details read clearly.

The set communicates a refined home office or study for client presentations: calm layout, strong material contrast, and a few memorable design moments.`,
    tools: ["3ds Max"],
    images: [p5_1, p5_2],
  },
  {
    slug: "marble-wood-kitchen",
    title: "Marble & Wood Kitchen",
    shortDescription:
      "Luxury kitchen set with veined marble island and backsplash, dark wood cabinetry, a black cylindrical hood, and detailed appliance and sink close-ups.",
    longDescription: `Wide shots establish a moody luxury kitchen: a thick marble island with waterfall edges, dark fluted and wood-grain cabinetry, a matte black cylindrical range hood, and warm recessed lighting. Matching marble runs across the back counter and backsplash with soft under-cabinet glow.

Detail frames zoom into the sink zone—dramatic marble veining, a tall black faucet, and wood upper slats—and into stacked built-in ovens set in vertical-grain wood. Lit glass cabinetry and dark wood flooring keep the material story consistent across the set.

Together the images sell a single kitchen concept from overview to finish and appliance detail—ideal for design review and marketing stills.`,
    tools: ["3ds Max"],
    images: [p6_1, p6_2, p6_3, p6_4, p6_5],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
