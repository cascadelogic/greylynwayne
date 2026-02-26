export type CityData = {
  slug: string;
  name: string;
  state: string;
  stateShort: string;
  region: string;
  description: string;
  nearby: string[];
  highlights: string[];
};

export const cities: CityData[] = [
  // Portland Metro
  {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "As Portland's premier home staging and interior design firm, Greylyn Wayne has transformed hundreds of properties across the city since 2015. From modern condos in the Pearl District to Craftsman homes in Laurelhurst, we know how Portland buyers think — and we stage to sell.",
    nearby: ["Lake Oswego", "Beaverton", "Milwaukie", "Gresham", "Tigard"],
    highlights: [
      "Staging for Portland's unique mix of Craftsman, Mid-Century, and contemporary homes",
      "Deep knowledge of Portland's neighborhood-specific buyer demographics",
      "Warehouse and inventory located in SE Portland for fast turnarounds",
      "Trusted by Portland's top-producing real estate agents",
    ],
  },
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Lake Oswego's luxury market demands exceptional presentation. Greylyn Wayne specializes in staging high-end Lake Oswego properties — from lakefront estates to First Addition homes — with furnishings and design that match the area's discerning buyers.",
    nearby: ["West Linn", "Portland", "Tigard", "Tualatin", "Milwaukie"],
    highlights: [
      "Luxury staging tailored to Lake Oswego's upscale market",
      "Experience with lakefront, First Addition, and Country Club homes",
      "Premium furnishings that match the expectations of luxury buyers",
      "Consistent track record of faster sales and higher offers in LO",
    ],
  },
  {
    slug: "west-linn",
    name: "West Linn",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "West Linn's scenic hillside homes and family-friendly neighborhoods deserve staging that highlights their best features. Greylyn Wayne helps West Linn homeowners and agents showcase spacious layouts, territorial views, and the area's sought-after livability.",
    nearby: ["Lake Oswego", "Oregon City", "Wilsonville", "Tualatin"],
    highlights: [
      "Staging that highlights West Linn's views and outdoor living spaces",
      "Family-oriented staging appealing to the area's core buyer demographic",
      "Experience with West Linn's variety of custom and estate homes",
      "Quick staging turnarounds from our nearby Portland warehouse",
    ],
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Beaverton's competitive real estate market — fueled by major tech employers and top-rated schools — requires homes that stand out from day one. Greylyn Wayne stages Beaverton properties to attract tech-savvy buyers who expect move-in-ready perfection.",
    nearby: ["Hillsboro", "Tigard", "Portland", "Bethany", "Sherwood"],
    highlights: [
      "Modern staging that appeals to Beaverton's tech-industry buyers",
      "Experience staging in Cedar Hills, Somerset, and Murray Hill",
      "Clean, contemporary design that photographs beautifully online",
      "Staging for condos, townhomes, and single-family homes",
    ],
  },
  {
    slug: "tigard",
    name: "Tigard",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Tigard's convenient location and strong school district make it a top pick for families. Greylyn Wayne stages Tigard homes to emphasize livability, storage, and the functional spaces today's buyers are looking for.",
    nearby: ["Beaverton", "Tualatin", "Lake Oswego", "Portland", "Sherwood"],
    highlights: [
      "Staging that highlights family-friendly layouts and functional spaces",
      "Experience with Bull Mountain, Summerlake, and Cook Park area homes",
      "Competitive pricing for the Tigard market",
      "Staging designed to move properties quickly in a competitive market",
    ],
  },
  {
    slug: "tualatin",
    name: "Tualatin",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Tualatin's mix of established neighborhoods and new construction offers unique staging opportunities. Greylyn Wayne helps sellers in Tualatin present their homes with a polished, move-in-ready feel that buyers in this market expect.",
    nearby: ["Tigard", "Wilsonville", "Lake Oswego", "Sherwood", "West Linn"],
    highlights: [
      "Staging for both established homes and new construction in Tualatin",
      "Highlighting Tualatin's community amenities and outdoor access",
      "Clean, modern designs that appeal to young families and professionals",
      "Fast turnaround times from our nearby Portland inventory",
    ],
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Hillsboro's booming tech corridor — home to Intel and countless startups — drives steady demand for well-presented homes. Greylyn Wayne stages Hillsboro properties with modern, sophisticated design that resonates with the area's professional buyers.",
    nearby: ["Beaverton", "Bethany", "Forest Grove", "Cornelius"],
    highlights: [
      "Modern staging tailored to Hillsboro's tech-industry buyer pool",
      "Experience with Orenco Station, AmberGlen, and South Hillsboro",
      "Contemporary furnishings that match new construction aesthetics",
      "Staging for townhomes, condos, and single-family homes",
    ],
  },
  {
    slug: "sherwood",
    name: "Sherwood",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Sherwood's charming Old Town and newer developments attract families seeking small-town character with suburban convenience. Greylyn Wayne stages Sherwood homes to emphasize their warmth, curb appeal, and community lifestyle.",
    nearby: ["Tualatin", "Tigard", "Wilsonville", "Newberg"],
    highlights: [
      "Warm, inviting staging that matches Sherwood's community character",
      "Experience with Sherwood's newer developments and established neighborhoods",
      "Staging that highlights outdoor living spaces and family functionality",
      "Competitive rates for the Sherwood market",
    ],
  },
  {
    slug: "wilsonville",
    name: "Wilsonville",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Wilsonville's planned communities and excellent schools make it one of the most desirable suburbs south of Portland. Greylyn Wayne stages Wilsonville properties to showcase their modern layouts and family-friendly appeal.",
    nearby: ["Tualatin", "Sherwood", "Canby", "West Linn", "Oregon City"],
    highlights: [
      "Staging for Villebois, Charbonneau, and other Wilsonville communities",
      "Modern, clean design that appeals to relocating professionals",
      "Experience staging new construction and resale homes",
      "Highlighting Wilsonville's parks, trails, and community amenities",
    ],
  },
  {
    slug: "oregon-city",
    name: "Oregon City",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Oregon City's historic character and Clackamas River views create unique staging opportunities. Greylyn Wayne helps Oregon City sellers present their homes in a way that honors the area's heritage while appealing to modern buyers.",
    nearby: ["West Linn", "Milwaukie", "Happy Valley", "Canby", "Gladstone"],
    highlights: [
      "Staging that bridges Oregon City's historic charm and modern buyer expectations",
      "Experience with hillside homes, river views, and historic properties",
      "Affordable staging options for the Oregon City market",
      "Staging designed to compete in the Clackamas County market",
    ],
  },
  {
    slug: "happy-valley",
    name: "Happy Valley",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Happy Valley's newer developments and family-focused community attract buyers looking for move-in-ready homes. Greylyn Wayne stages Happy Valley properties with polished, contemporary design that meets the area's high expectations.",
    nearby: ["Milwaukie", "Clackamas", "Oregon City", "Damascus", "Portland"],
    highlights: [
      "Contemporary staging for Happy Valley's newer construction homes",
      "Experience with Pleasant Valley, Scouters Mountain, and East Happy Valley",
      "Staging that highlights open floor plans and modern finishes",
      "Premium furnishings that match the area's upscale new builds",
    ],
  },
  {
    slug: "milwaukie",
    name: "Milwaukie",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Milwaukie's revitalized downtown and proximity to Portland make it increasingly popular with buyers. Greylyn Wayne stages Milwaukie homes to highlight their character, accessibility, and the area's growing appeal.",
    nearby: ["Portland", "Happy Valley", "Oregon City", "Lake Oswego"],
    highlights: [
      "Staging that highlights Milwaukie's character homes and walkability",
      "Experience with both historic and updated Milwaukie properties",
      "Affordable staging options that deliver strong ROI for sellers",
      "Quick turnaround from our SE Portland warehouse location",
    ],
  },
  {
    slug: "canby",
    name: "Canby",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Canby's small-town charm and rural character attract buyers seeking space and community. Greylyn Wayne stages Canby properties with warm, welcoming designs that emphasize the area's lifestyle and livability.",
    nearby: ["Wilsonville", "Oregon City", "Molalla", "Woodburn"],
    highlights: [
      "Warm staging that reflects Canby's welcoming community character",
      "Experience with farmhouse, ranch, and newer construction styles",
      "Staging that highlights acreage, views, and outdoor living",
      "Serving Canby sellers with professional staging at competitive rates",
    ],
  },
  {
    slug: "newberg",
    name: "Newberg",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Newberg sits at the gateway to Oregon wine country, attracting buyers drawn to its small-town warmth and vineyard lifestyle. Greylyn Wayne stages Newberg properties to capture the area's relaxed sophistication and natural beauty.",
    nearby: ["Sherwood", "Dundee", "McMinnville", "Wilsonville"],
    highlights: [
      "Staging that captures wine country elegance and warmth",
      "Experience with Newberg's historic homes and newer developments",
      "Design that appeals to buyers relocating from Portland",
      "Highlighting outdoor living, views, and Newberg's lifestyle appeal",
    ],
  },
  {
    slug: "gresham",
    name: "Gresham",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Gresham offers affordability and access to Mt. Hood recreation, making it a strong market for well-staged homes. Greylyn Wayne helps Gresham sellers make the most of their investment with professional staging that drives faster sales.",
    nearby: ["Portland", "Troutdale", "Wood Village", "Happy Valley"],
    highlights: [
      "Professional staging at price points that work for the Gresham market",
      "Experience with a range of home styles and sizes",
      "Staging that helps Gresham listings stand out in online searches",
      "Fast setup from our Portland-based warehouse and team",
    ],
  },
  {
    slug: "bethany",
    name: "Bethany",
    state: "Oregon",
    stateShort: "OR",
    region: "Portland Metro",
    description:
      "Bethany's family-friendly planned communities and highly-rated schools make it one of the most competitive markets in the metro area. Greylyn Wayne stages Bethany homes with the modern, polished look that area buyers expect.",
    nearby: ["Beaverton", "Hillsboro", "Portland", "Cedar Mill"],
    highlights: [
      "Modern staging tailored to Bethany's upscale family market",
      "Experience with NW Bethany and nearby planned communities",
      "Clean, contemporary design that appeals to professional families",
      "Staging for new construction and resale homes in the Bethany area",
    ],
  },

  // Central & Eastern Oregon
  {
    slug: "bend",
    name: "Bend",
    state: "Oregon",
    stateShort: "OR",
    region: "Central Oregon",
    description:
      "Bend's booming real estate market attracts buyers from across the West Coast. Greylyn Wayne brings Portland-caliber staging and interior design to Central Oregon, helping Bend sellers and agents present properties that match the area's premium price points.",
    nearby: ["Sunriver", "Redmond", "Sisters", "La Pine"],
    highlights: [
      "Professional staging that matches Bend's premium market expectations",
      "Experience with mountain modern, lodge, and contemporary styles",
      "Interior design for primary residences and vacation homes",
      "Serving Bend's growing luxury and second-home market",
    ],
  },
  {
    slug: "sunriver",
    name: "Sunriver",
    state: "Oregon",
    stateShort: "OR",
    region: "Central Oregon",
    description:
      "Sunriver's resort community and vacation rental market require specialized design expertise. Greylyn Wayne designs Sunriver properties for both sale appeal and rental income — blending resort style with durability and comfort.",
    nearby: ["Bend", "La Pine", "Newberry Volcano"],
    highlights: [
      "Staging and design for Sunriver's resort and vacation home market",
      "Short-term rental design to maximize booking appeal and revenue",
      "Durable, lodge-inspired furnishings suited to rental properties",
      "Interior design for cabins, condos, and custom homes in Sunriver",
    ],
  },
  {
    slug: "hood-river",
    name: "Hood River",
    state: "Oregon",
    stateShort: "OR",
    region: "Columbia River Gorge",
    description:
      "Hood River's stunning Gorge setting and active lifestyle attract a specific type of buyer. Greylyn Wayne stages Hood River properties with designs that complement the area's natural beauty and adventurous spirit.",
    nearby: ["The Dalles", "Cascade Locks", "White Salmon", "Parkdale"],
    highlights: [
      "Staging that complements Hood River's views and natural surroundings",
      "Experience with Gorge-area homes, orchards, and vacation properties",
      "Designs that appeal to Hood River's active, outdoor-oriented buyers",
      "Short-term rental design for Hood River vacation properties",
    ],
  },

  // Willamette Valley
  {
    slug: "eugene",
    name: "Eugene",
    state: "Oregon",
    stateShort: "OR",
    region: "Willamette Valley",
    description:
      "Eugene's eclectic market — from University of Oregon neighborhoods to South Hills estates — benefits from professional staging that speaks to the area's diverse buyer pool. Greylyn Wayne brings Portland-level expertise to Lane County.",
    nearby: ["Springfield", "Cottage Grove", "Junction City", "Veneta"],
    highlights: [
      "Professional staging for Eugene's diverse housing market",
      "Experience with university-area, downtown, and South Hills properties",
      "Design that appeals to Eugene's mix of academic and professional buyers",
      "Serving Lane County with full staging and interior design services",
    ],
  },
  {
    slug: "salem",
    name: "Salem",
    state: "Oregon",
    stateShort: "OR",
    region: "Willamette Valley",
    description:
      "Salem's growing real estate market and increasing property values make professional staging a smart investment for sellers. Greylyn Wayne serves the state capital with the same quality staging and design we bring to Portland's luxury market.",
    nearby: ["Keizer", "Silverton", "Stayton", "Independence"],
    highlights: [
      "Professional staging bringing Portland quality to the Salem market",
      "Experience with South Salem, West Salem, and historic district homes",
      "Staging that helps Salem listings stand out and sell faster",
      "Full interior design services for Salem homeowners",
    ],
  },
  {
    slug: "corvallis",
    name: "Corvallis",
    state: "Oregon",
    stateShort: "OR",
    region: "Willamette Valley",
    description:
      "Corvallis's college-town charm and strong housing demand — driven by Oregon State University and a thriving tech sector — make professional staging a smart choice for sellers looking to maximize their return.",
    nearby: ["Albany", "Philomath", "Monroe", "Lebanon"],
    highlights: [
      "Staging tailored to Corvallis's academic and tech-professional buyers",
      "Experience with homes near OSU campus and surrounding neighborhoods",
      "Clean, modern design that appeals to relocating professionals",
      "Serving Benton County with full staging and design services",
    ],
  },
  {
    slug: "albany",
    name: "Albany",
    state: "Oregon",
    stateShort: "OR",
    region: "Willamette Valley",
    description:
      "Albany's historic homes and growing new construction market present distinct staging opportunities. Greylyn Wayne helps Albany sellers present their properties with professional design that drives interest and competitive offers.",
    nearby: ["Corvallis", "Lebanon", "Sweet Home", "Salem"],
    highlights: [
      "Staging for Albany's historic homes and newer developments",
      "Design that respects historic character while appealing to modern buyers",
      "Affordable staging options for the mid-Willamette Valley market",
      "Full staging and interior design services for Linn County",
    ],
  },

  // Oregon Coast
  {
    slug: "cannon-beach",
    name: "Cannon Beach",
    state: "Oregon",
    stateShort: "OR",
    region: "Oregon Coast",
    description:
      "Cannon Beach's premium coastal market demands staging that captures the area's natural beauty and relaxed luxury. Greylyn Wayne designs Cannon Beach properties with coastal-inspired interiors that appeal to vacation home buyers and rental investors alike.",
    nearby: ["Seaside", "Manzanita", "Astoria", "Gearhart"],
    highlights: [
      "Coastal luxury staging for Cannon Beach's premium market",
      "Short-term rental design to maximize vacation rental income",
      "Beach-inspired interiors that complement ocean views and natural light",
      "Experience with Cannon Beach condos, cottages, and custom homes",
    ],
  },
  {
    slug: "astoria",
    name: "Astoria",
    state: "Oregon",
    stateShort: "OR",
    region: "Oregon Coast",
    description:
      "Astoria's Victorian homes and revitalized downtown attract buyers drawn to its character and Columbia River setting. Greylyn Wayne stages Astoria properties with designs that honor the area's history while appealing to modern tastes.",
    nearby: ["Warrenton", "Seaside", "Cannon Beach", "Long Beach"],
    highlights: [
      "Staging that complements Astoria's Victorian and historic architecture",
      "Design balancing historic character with modern buyer expectations",
      "Experience with Astoria's hillside homes and river views",
      "Vacation rental design for the North Coast market",
    ],
  },
  {
    slug: "manzanita",
    name: "Manzanita",
    state: "Oregon",
    stateShort: "OR",
    region: "Oregon Coast",
    description:
      "Manzanita's quiet, upscale beach community is a favorite for vacation home buyers. Greylyn Wayne stages and designs Manzanita properties with relaxed coastal interiors that make buyers and guests feel instantly at home.",
    nearby: ["Cannon Beach", "Rockaway Beach", "Wheeler", "Nehalem"],
    highlights: [
      "Relaxed coastal staging for Manzanita's vacation home market",
      "Short-term rental design for beach houses and condos",
      "Interiors that maximize ocean views and natural light",
      "Experience with Manzanita's unique beach community aesthetic",
    ],
  },
  {
    slug: "seaside",
    name: "Seaside",
    state: "Oregon",
    stateShort: "OR",
    region: "Oregon Coast",
    description:
      "Seaside's active vacation rental market and family-friendly appeal make professional staging and design a valuable investment. Greylyn Wayne helps Seaside property owners present their homes for sale or optimize them for maximum rental income.",
    nearby: ["Cannon Beach", "Gearhart", "Astoria", "Manzanita"],
    highlights: [
      "Staging and design for Seaside's vacation rental market",
      "Durable, stylish interiors built for rental property performance",
      "Experience with Seaside condos, townhomes, and beach houses",
      "Design that maximizes rental bookings and guest satisfaction",
    ],
  },
  {
    slug: "lincoln-city",
    name: "Lincoln City",
    state: "Oregon",
    stateShort: "OR",
    region: "Oregon Coast",
    description:
      "Lincoln City's oceanfront properties and active vacation rental market benefit from professional design that drives bookings and buyer interest. Greylyn Wayne serves the Central Coast with staging and interior design tailored to the coastal lifestyle.",
    nearby: ["Depoe Bay", "Newport", "Pacific City", "Neskowin"],
    highlights: [
      "Coastal staging for Lincoln City's diverse property market",
      "Short-term rental design to boost vacation rental performance",
      "Experience with oceanfront condos, homes, and investment properties",
      "Interior design that captures the Central Coast lifestyle",
    ],
  },

  // Southwest Washington
  {
    slug: "vancouver",
    name: "Vancouver",
    state: "Washington",
    stateShort: "WA",
    region: "Southwest Washington",
    description:
      "Vancouver's booming real estate market — with no state income tax and easy Portland access — attracts buyers from across the region. Greylyn Wayne brings our full staging and interior design expertise across the river to Clark County.",
    nearby: ["Camas", "Ridgefield", "Battle Ground", "Washougal", "Portland"],
    highlights: [
      "Full staging and design services for Clark County's competitive market",
      "Experience with Vancouver's Waterfront, Felida, and Salmon Creek areas",
      "Modern staging that appeals to buyers relocating from Portland",
      "New construction staging for Vancouver's growing developments",
    ],
  },
  {
    slug: "camas",
    name: "Camas",
    state: "Washington",
    stateShort: "WA",
    region: "Southwest Washington",
    description:
      "Camas's top-rated schools, charming downtown, and upscale neighborhoods make it one of the most desirable communities in Southwest Washington. Greylyn Wayne stages Camas properties with the polished, premium look this market demands.",
    nearby: ["Washougal", "Vancouver", "Ridgefield", "Battle Ground"],
    highlights: [
      "Premium staging for Camas's upscale residential market",
      "Experience with homes in Prune Hill, Lacamas Shores, and North Shore",
      "Design that matches the expectations of Camas's discerning buyers",
      "Staging for new construction and custom homes in East Clark County",
    ],
  },
  {
    slug: "ridgefield",
    name: "Ridgefield",
    state: "Washington",
    stateShort: "WA",
    region: "Southwest Washington",
    description:
      "Ridgefield's rapid growth and new master-planned communities create strong demand for professional staging. Greylyn Wayne helps Ridgefield sellers and builders present properties that attract the families and professionals moving to this area.",
    nearby: ["Vancouver", "Battle Ground", "Woodland", "La Center"],
    highlights: [
      "Staging for Ridgefield's booming new construction market",
      "Experience with Discovery Ridge, Pioneer Canyon, and other communities",
      "Modern staging that appeals to families relocating to Ridgefield",
      "Builder partnerships for model home staging and design",
    ],
  },
  {
    slug: "washougal",
    name: "Washougal",
    state: "Washington",
    stateShort: "WA",
    region: "Southwest Washington",
    description:
      "Washougal's Gorge-adjacent setting and growing community offer unique appeal for buyers seeking natural beauty with suburban convenience. Greylyn Wayne stages Washougal properties to highlight views, outdoor access, and the area's lifestyle draw.",
    nearby: ["Camas", "Vancouver", "Hood River", "Stevenson"],
    highlights: [
      "Staging that highlights Washougal's Gorge views and natural setting",
      "Experience with both established and new construction properties",
      "Design appealing to buyers drawn to Washougal's outdoor lifestyle",
      "Serving East Clark County with full staging and design services",
    ],
  },
  {
    slug: "battle-ground",
    name: "Battle Ground",
    state: "Washington",
    stateShort: "WA",
    region: "Southwest Washington",
    description:
      "Battle Ground's family-friendly community and steady growth make professional staging a smart investment for sellers. Greylyn Wayne stages Battle Ground homes with warm, inviting designs that resonate with the area's core buyer demographic.",
    nearby: ["Vancouver", "Ridgefield", "Brush Prairie", "Yacolt"],
    highlights: [
      "Family-oriented staging for Battle Ground's growing market",
      "Experience with new developments and established neighborhoods",
      "Warm, inviting design that appeals to families and young professionals",
      "Competitive staging rates for the North Clark County market",
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
