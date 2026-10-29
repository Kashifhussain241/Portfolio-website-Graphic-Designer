const work = '/images/work'

const base = {
  tools: ['Photoshop', 'Illustrator'],
}

export const projects = [
  {
    slug: 'goddess-haircare-listing-set',
    title: 'Goddess Haircare Listing Set',
    category: 'amazon-listing-images',
    cover: `${work}/listing-01-thumb.webp`,
    images: [`${work}/listing-01.webp`, `${work}/listing-03.webp`],
    ratio: 'aspect-[4/5]',
    featured: true,
    deliverables: ['Hero listing image', 'Ingredient feature graphic'],
    description:
      'A pink-led Amazon listing set for a restorative shampoo. Benefit callouts, ingredient science and product photography work together to make the treatment claim feel immediate.',
  },
  {
    slug: 'tates-cookie-launch-set',
    title: "Tate's Cookie Launch Set",
    category: 'amazon-listing-images',
    cover: `${work}/listing-02-thumb.webp`,
    images: [`${work}/listing-02.webp`, `${work}/listing-04.webp`, `${work}/listing-05.webp`],
    ratio: 'aspect-[4/5]',
    featured: true,
    deliverables: ['Flavour launch graphics', 'Review proof creative', 'Feature callouts'],
    description:
      'Warm, appetite-driven listing creatives for a new cookie flavour launch. Product-first layouts, review proof and short benefit lines keep the range easy to compare.',
  },
  {
    slug: 'youthful-roots-gummies',
    title: 'Youthful Roots Gummies',
    category: 'amazon-listing-images',
    cover: `${work}/listing-09-thumb.webp`,
    images: [`${work}/listing-06.webp`, `${work}/listing-09.webp`, `${work}/listing-10.webp`],
    ratio: 'aspect-[4/5]',
    deliverables: ['Supplement listing images', 'Vitamin benefit graphics'],
    description:
      'Supplement listing visuals that make ingredient and vitamin benefits quick to scan, with clear iconography and a consistent deep-blue product world.',
  },
  {
    slug: 'nutramax-pet-supplement',
    title: 'Nutramax Pet Supplement',
    category: 'amazon-listing-images',
    cover: `${work}/listing-07-thumb.webp`,
    images: [`${work}/listing-07.webp`, `${work}/listing-08.webp`],
    ratio: 'aspect-[4/5]',
    deliverables: ['Pet listing images', 'Benefit and proof graphics'],
    description:
      'Vet-focused listing images for a pet digestive supplement, pairing friendly pet photography with clear benefit blocks and visible-results messaging.',
  },
  {
    slug: 'lumo-shampoo-listing',
    title: 'Lumo Shampoo Listing',
    category: 'amazon-listing-images',
    cover: `${work}/listing-11-thumb.webp`,
    images: [`${work}/listing-11.webp`, `${work}/listing-12.webp`, `${work}/cover-01.webp`],
    ratio: 'aspect-[4/5]',
    deliverables: ['Listing images', 'Hero banner', 'Ingredient science graphic'],
    description:
      'Premium haircare listing set with marine collagen science and a ritual-led lifestyle story. Soft product styling keeps the range feeling calm and premium.',
  },
  {
    slug: 'nuvella-whey-a-plus-content',
    title: 'NuVella Whey A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-01-thumb.webp`,
    images: [`${work}/aplus-01.webp`],
    ratio: 'aspect-[4/3]',
    featured: true,
    deliverables: ['Full A+ page', 'Nutrition facts module', 'Recipe module'],
    description:
      'A complete A+ page for a lean whey isolate, spanning brand story, clean-ingredient claims, protein guidance, nutrition facts and a smoothie recipe.',
  },
  {
    slug: 'lumo-shampoo-a-plus-content',
    title: 'Lumo Shampoo A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-03-thumb.webp`,
    images: [`${work}/aplus-03.webp`],
    ratio: 'aspect-[4/3]',
    deliverables: ['Full A+ page', 'Ingredient modules'],
    description:
      'A pink-toned A+ page that walks shoppers through product claims, key ingredients and a complete haircare routine, ending with a founder note.',
  },
  {
    slug: 'bronson-one-a-plus-content',
    title: 'Bronson One A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-04-thumb.webp`,
    images: [`${work}/aplus-04.webp`, `${work}/aplus-05.webp`],
    ratio: 'aspect-[4/3]',
    deliverables: ['Full A+ page', 'Lifestyle modules'],
    description:
      "A+ content for a women's 50+ supplement, balancing clinical trust with lifestyle photography and a clear comparison of the product range.",
  },
  {
    slug: 'kids-multivitamin-a-plus-content',
    title: 'Kids Multivitamin A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-06-thumb.webp`,
    images: [`${work}/aplus-06.webp`],
    ratio: 'aspect-[4/3]',
    deliverables: ['Full A+ page', 'Parent-focused benefit modules'],
    description:
      "Playful A+ page for a children's multivitamin, built around clear benefits, friendly characters and the proof parents look for.",
  },
  {
    slug: 'pet-supplement-a-plus-content',
    title: 'Pet Supplement A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-07-thumb.webp`,
    images: [`${work}/aplus-07.webp`],
    ratio: 'aspect-[4/3]',
    deliverables: ['Full A+ page', 'Pet lifestyle modules'],
    description:
      'Warm, pet-led A+ layout for a vet-recommended digestive supplement, with happy-pet photography and simple benefit sections.',
  },
  {
    slug: 'organic-protein-a-plus-content',
    title: 'Organic Protein A+ Content',
    category: 'amazon-a-plus-content',
    cover: `${work}/aplus-02-thumb.webp`,
    images: [`${work}/aplus-02.webp`],
    ratio: 'aspect-[4/3]',
    deliverables: ['Full A+ page', 'Ingredient storytelling'],
    description:
      'Clean, red-accented A+ content for an organic protein powder, covering benefits, ingredient sourcing and customer reviews in one scroll.',
  },
  {
    slug: 'product-feature-infographics',
    title: 'Product Feature Infographics',
    category: 'commercial-infographics',
    cover: `${work}/listing-04-thumb.webp`,
    images: [`${work}/listing-04.webp`, `${work}/listing-09.webp`, `${work}/listing-12.webp`, `${work}/cover-04.webp`],
    ratio: 'aspect-[4/5]',
    featured: true,
    deliverables: ['Feature infographics', 'Ingredient callouts', 'Benefit charts'],
    description:
      'Ingredient and benefit infographics that turn complex formulations into scannable visuals, designed to sit inside listing image stacks and marketing assets.',
  },
  {
    slug: 'amazon-hero-covers',
    title: 'Amazon Hero Covers',
    category: 'amazon-listing-images',
    cover: `${work}/cover-02-thumb.webp`,
    images: [`${work}/cover-02.webp`, `${work}/cover-03.webp`, `${work}/cover-05.webp`, `${work}/cover-06.webp`],
    ratio: 'aspect-[16/10]',
    deliverables: ['Main-image banners', 'Hero cover graphics'],
    description:
      'Main-image banners and hero covers built to stop the scroll in Amazon search results. Each layout leads with the product, then adds the one claim that matters.',
  },
  {
    slug: 'quote-carousel-template',
    title: 'Quote Carousel Template',
    category: 'canva-templates',
    cover: `${work}/social-01-thumb.webp`,
    images: [`${work}/social-01.webp`, `${work}/social-02.webp`, `${work}/social-04.webp`, `${work}/social-07.webp`],
    ratio: 'aspect-[4/5]',
    featured: true,
    deliverables: ['Editable carousel template', 'Quote layouts', 'CTA slides'],
    description:
      'A reusable editorial carousel template for thought-leadership posts. Locked structure and flexible text styles let a team publish on-brand slides without a designer.',
  },
  {
    slug: 'crumble-social-campaign',
    title: 'Crumble Social Campaign',
    category: 'social-media-design',
    cover: `${work}/social-03-thumb.webp`,
    images: [`${work}/social-03.webp`, `${work}/social-05.webp`, `${work}/social-06.webp`, `${work}/social-08.webp`],
    ratio: 'aspect-[4/5]',
    featured: true,
    deliverables: ['Launch posts', 'Offer graphics', 'Story assets'],
    description:
      'Dessert-led social campaign mixing product photography with punchy offer layouts for a local dessert brand launch.',
  },
].map((p) => ({ ...base, ...p }))

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
