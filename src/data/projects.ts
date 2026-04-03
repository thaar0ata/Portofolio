import p1_1 from "@/assets/portfolio/project-1/1.jpg.jpeg?url";
import p1_2 from "@/assets/portfolio/project-1/2.jpg.jpeg?url";
import p1_3 from "@/assets/portfolio/project-1/3.jpg.jpeg?url";
import p2_5 from "@/assets/portfolio/project-2/5.jpg.jpeg?url";
import p2_7 from "@/assets/portfolio/project-2/7.png?url";
import p2_8 from "@/assets/portfolio/project-2/8.jpg.jpeg?url";
import p3_6 from "@/assets/portfolio/project-3/6.png?url";
import p3_9 from "@/assets/portfolio/project-3/9.jpg.jpeg?url";
import p3_detail from "@/assets/portfolio/project-3/file_00000000875072438c7f83f42f9447aa.png?url";

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
      "Contemporary bedroom visualization with vertical wood wall treatments, a sculptural wood chandelier with greenery, and floor-to-ceiling wardrobe with integrated lighting.",
    longDescription: `Two complementary angles of the same suite: a platform bed on a plush rug, layered neutral bedding, and a feature wall in light wood planks with a section of darker vertical slats. A large decorative skeleton-key clock anchors the wood wall; layered champagne and chocolate drapery dress the tall window.

Storage is handled by a tall minimalist wardrobe—white panels with a wood band and lit niches—while a second view opens up a vanity nook with mirror lighting, floating shelves, and a geometric wood pendant where vines trail through the frame for a soft biophilic note.

The renders emphasize warm wood grain, soft spot and LED accents, and a calm, hotel-like mood suitable for a master bedroom or high-end apartment marketing.`,
    tools: ["3ds Max"],
    images: [p2_5, p2_7, p2_8],
  },
  {
    slug: "contemporary-minimalist-kitchen",
    title: "Contemporary Minimalist Kitchen",
    shortDescription:
      "Sleek kitchen studies: high-gloss white cabinetry, dark stone worktops, a geometric line backsplash, wood breakfast bar, and sculptural pendants over the dining zone.",
    longDescription: `All three frames explore the same design language—minimalist kitchens with crisp white cabinets, metallic handles, and a white tile backsplash patterned with fine black geometry. Countertops shift between dark veined stone and rich wood on the bar; under-cabinet LEDs and integrated strips under the bar edge keep work surfaces readable.

Appliances and hardware stay quiet: black range hood, built-in cooktop, and in some views a dark-framed window behind the sink. Statement lighting includes branch-style or multi-arm pendants; ceilings combine recessed squares, a bright central panel, and subtle ceiling detail so the space feels bright but controlled.

Together they document a single concept from different camera positions—useful for explaining layout, finishes, and lighting intent to clients or collaborators.`,
    tools: ["3ds Max"],
    images: [p3_6, p3_9, p3_detail],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
