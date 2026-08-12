export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'small-plates' | 'from-the-fire' | 'rwanda-inspired' | 'sides' | 'desserts' | 'drinks';
  tags?: string[];
  featured?: boolean;
}

export interface FireStage {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ElementItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'tall';
}

export interface GuestNote {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const RESTAURANT_INFO = {
  name: "Ember & Oak",
  tagline: "Live-Fire & Seasonal Kitchen",
  subhead: "A hearth kitchen in Kigali, Rwanda, where hardwood embers and local ingredients bring out the true depth of wood-fired dining.",
  address: "Kigali Heights, KG 7 Ave, Kigali, Rwanda (Demo Location)",
  phone: "+250 788 123 456",
  whatsapp: "+250 788 123 456",
  email: "reservations@emberandoak.rw",
  hours: "Mon – Thu: 11:30 – 22:00 | Fri – Sat: 11:30 – 23:00 | Sun: 12:00 – 21:00",
  kitchenHours: "Hearth stokes live embers until 21:30 daily",
  location: "Kigali Heights · Kigali · Rwanda",
};

export const FIRE_STAGES: FireStage[] = [
  {
    number: "01",
    title: "Wood & Charcoal",
    description: "Sustainably harvested hardwood and organic charcoal timber from Rwanda's high forests, aged to burn clean and white-hot.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop",
    alt: "Hardwood fuel and embers for live-fire dishes"
  },
  {
    number: "02",
    title: "Open Flame",
    description: "Open hearth cooking over roaring coals reaching 700°C. Raw elemental heat searing local beef brochettes and fresh lake fish.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    alt: "Live charcoal flames at Ember & Oak hearth"
  },
  {
    number: "03",
    title: "Aromatic Smoke",
    description: "Infusion of mountain rosemary, dried wild chili wood, and acacia staves that layer subtle earthy aroma into every dish.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    alt: "Hardwood smoke rising over charcoal grill"
  },
  {
    number: "04",
    title: "The Plate",
    description: "Modern Rwandan dining where live-fire char meets fresh mountain produce, sweet plantains, and local chili butter.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    alt: "Char-grilled beef brochette dish"
  }
];

export const FOUR_ELEMENTS: ElementItem[] = [
  {
    number: "01",
    title: "Wood",
    subtitle: "The Fuel",
    description: "Seasoned hardwood and eucalyptus charcoal sourced from sustainable timber groves around Rwanda."
  },
  {
    number: "02",
    title: "Fire",
    subtitle: "The Heat",
    description: "Direct coal heat harnessed through heavy iron grates, clay beds, and open steel brochette grills."
  },
  {
    number: "03",
    title: "Smoke",
    subtitle: "The Aroma",
    description: "Perfumed air from burning acacia and dried chili wood coating ingredients with rich depth."
  },
  {
    number: "04",
    title: "Time",
    subtitle: "The Technique",
    description: "Flash sears over 700°C coals or slow hearth roasting lingering gently through the Kigali evening."
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'small-plates', label: 'Small Plates' },
  { id: 'from-the-fire', label: 'From the Fire' },
  { id: 'rwanda-inspired', label: 'Rwanda Inspired' },
  { id: 'sides', label: 'Sides' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' }
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Small Plates (5,000 - 10,000 RWF)
  {
    id: "sp-1",
    name: "Coal-Roasted Plantain Croquettes",
    description: "Crispy sweet plantain croquettes, smoked goat cheese center, wild chili drizzle",
    price: "6,500 RWF",
    category: "small-plates",
    tags: ["Vegetarian"],
    featured: false
  },
  {
    id: "sp-2",
    name: "Charred Cassava Chips",
    description: "Hand-cut cassava root flashed over live coals, smoked garlic aioli & Akabanga chili salt",
    price: "5,500 RWF",
    category: "small-plates",
    tags: ["Vegan", "Gluten Free"]
  },
  {
    id: "sp-3",
    name: "Flame-Kissed Goat Cheese Dip",
    description: "Warmed goat cheese, garlic oil, roasted mountain herbs, served with wood-fired flatbread",
    price: "8,000 RWF",
    category: "small-plates",
    tags: ["Vegetarian"]
  },
  {
    id: "sp-4",
    name: "Spiced Avocado & Tomato Tartare",
    description: "Fresh Musanze avocado, ember-roasted cherry tomatoes, lime juice, toasted coriander oil",
    price: "7,000 RWF",
    category: "small-plates",
    tags: ["Vegan", "Gluten Free"]
  },
  {
    id: "sp-5",
    name: "Fire-Roasted Market Vegetables",
    description: "Seasonal market zucchini, baby carrots & sweet peppers charred over charcoal",
    price: "6,000 RWF",
    category: "small-plates",
    tags: ["Vegan"]
  },

  // From the Fire (18,000 - 35,000 RWF)
  {
    id: "ftf-1",
    name: "Ember Beef Brochettes",
    description: "Char-grilled tenderloin skewers, house spice rub, charred peppers, onions & roasted plantain",
    price: "22,000 RWF",
    category: "from-the-fire",
    tags: ["Signature", "Gluten Free"],
    featured: true
  },
  {
    id: "ftf-2",
    name: "Kigali Ember Chicken",
    description: "Charred half-chicken marinated in garlic and herb oil, smoky Akabanga butter, grilled Mizuzu",
    price: "20,000 RWF",
    category: "from-the-fire",
    tags: ["Signature"],
    featured: true
  },
  {
    id: "ftf-3",
    name: "Fire-Roasted Lake Kivu Tilapia",
    description: "Whole fresh tilapia, mountain herbs, charred lemon, wild greens & local tomato-chili salsa",
    price: "25,000 RWF",
    category: "from-the-fire",
    tags: ["Signature", "Local Catch"],
    featured: true
  },
  {
    id: "ftf-4",
    name: "300g Prime Ribeye Steak",
    description: "Charcoal-grilled Gicumbi beef steak, chimichurri sauce, roasted garlic bone marrow butter",
    price: "32,000 RWF",
    category: "from-the-fire",
    tags: ["Prime Cut", "Gluten Free"]
  },
  {
    id: "ftf-5",
    name: "Char-Grilled Chicken Brochettes",
    description: "Marinated chicken thigh skewers, flame sear, peanut-chili glaze & fresh lime",
    price: "18,000 RWF",
    category: "from-the-fire"
  },

  // Rwanda Inspired (12,000 - 24,000 RWF)
  {
    id: "ri-1",
    name: "Slow-Braised Beef Short Ribs",
    description: "Beef short ribs slow-simmered over wood embers, aromatic reduction, smooth cassava puree",
    price: "24,000 RWF",
    category: "rwanda-inspired",
    tags: ["Gluten Free"]
  },
  {
    id: "ri-2",
    name: "Fire-Baked Pumpkin & Isombe Stew",
    description: "Cassava leaf stew baked in clay hearth, roasted pumpkin seeds, cold-pressed sunflower oil",
    price: "14,000 RWF",
    category: "rwanda-inspired",
    tags: ["Vegan", "Gluten Free"]
  },
  {
    id: "ri-3",
    name: "Smoked Isambaza & Tomato Ragout",
    description: "Lake Kivu dried minnows, wood-fired tomato sugo, garlic, herbs & cassava bread",
    price: "18,000 RWF",
    category: "rwanda-inspired"
  },
  {
    id: "ri-4",
    name: "Honey-Ginger Pork Ribs",
    description: "Charcoal-roasted pork ribs, local wild honey glaze, ginger, roasted corn on the cob",
    price: "22,000 RWF",
    category: "rwanda-inspired"
  },

  // Sides (3,000 - 6,000 RWF)
  {
    id: "sd-1",
    name: "Roasted Garlic Potatoes (Ibirayi)",
    description: "Crispy hearth-roasted Musanze potatoes tossed with garlic butter and rosemary",
    price: "4,500 RWF",
    category: "sides",
    tags: ["Gluten Free"]
  },
  {
    id: "sd-2",
    name: "Grilled Sweet Plantains (Mizuzu)",
    description: "Sweet ripe plantain slices caramelized over glowing wood embers",
    price: "4,000 RWF",
    category: "sides",
    tags: ["Vegan", "Gluten Free"]
  },
  {
    id: "sd-3",
    name: "Creamy Red Beans with Herb Butter",
    description: "Local red beans slow-cooked with thyme, smoked paprika & farm butter",
    price: "3,500 RWF",
    category: "sides",
    tags: ["Vegetarian"]
  },
  {
    id: "sd-4",
    name: "Wood-Fired Cassava & Chili Salt",
    description: "Steamed and charcoal-toasted cassava root slices with Akabanga salt",
    price: "3,500 RWF",
    category: "sides",
    tags: ["Vegan"]
  },
  {
    id: "sd-5",
    name: "Fresh Organic Garden Salad",
    description: "Crisp local greens, cucumber, cherry tomatoes, passion fruit vinaigrette",
    price: "4,500 RWF",
    category: "sides",
    tags: ["Vegan"]
  },

  // Desserts (4,000 - 8,000 RWF)
  {
    id: "d-1",
    name: "Smoked Passion Fruit Tart",
    description: "Tangy Rwandan passion fruit curd, smoked caramel, toasted meringue",
    price: "6,500 RWF",
    category: "desserts",
    tags: ["House Favorite"]
  },
  {
    id: "d-2",
    name: "Charred Pineapple & Vanilla Gelato",
    description: "Pineapple slice caramelised over live coals, local honey, house vanilla gelato",
    price: "5,500 RWF",
    category: "desserts"
  },
  {
    id: "d-3",
    name: "Dark Chocolate & Rwandan Coffee Mousse",
    description: "Rich dark cocoa mousse infused with single-origin Huye Mountain espresso",
    price: "7,500 RWF",
    category: "desserts"
  },

  // Drinks (2,500 - 8,000 RWF)
  {
    id: "dr-1",
    name: "Fresh Passion Fruit & Mint Juice",
    description: "Pressed local passion fruit, fresh mint leaves, cane sugar over crushed ice",
    price: "3,500 RWF",
    category: "drinks",
    tags: ["Fresh Juice"]
  },
  {
    id: "dr-2",
    name: "House Ginger & Pineapple Infusion",
    description: "Freshly squeezed pineapple, fiery local ginger root, soda water & lime slice",
    price: "3,500 RWF",
    category: "drinks",
    tags: ["Non-Alcoholic"]
  },
  {
    id: "dr-3",
    name: "Rwandan Single-Origin Bourbon Coffee",
    description: "Freshly brewed pour-over or espresso from Huye Mountain specialty beans",
    price: "3,000 RWF",
    category: "drinks",
    tags: ["Specialty Coffee"]
  },
  {
    id: "dr-4",
    name: "Spiced Rwandan Black Tea",
    description: "Inyange high-altitude tea brewed with crushed cardamom, cinnamon & ginger",
    price: "2,500 RWF",
    category: "drinks"
  },
  {
    id: "dr-5",
    name: "Smoky Akagera Old Fashioned",
    description: "Bourbon, local wildflower honey syrup, aromatic bitters, charred orange peel",
    price: "7,500 RWF",
    category: "drinks",
    tags: ["Signature Cocktail"]
  },
  {
    id: "dr-6",
    name: "Kivu Sunset Cocktail",
    description: "White rum, fresh passion fruit juice, lime, local ginger beer & mint",
    price: "7,000 RWF",
    category: "drinks",
    tags: ["Cocktail"]
  }
];

export const VISITING_EXPERIENCE: TimelineStep[] = [
  {
    number: "01",
    title: "Welcome",
    description: "Arrive at Kigali Heights as the sun dips over the hills. Step into the warm scent of burning hardwood and friendly greetings.",
    detail: "Receive a cold towel and fresh passion fruit welcome beverage upon seating."
  },
  {
    number: "02",
    title: "Choose Your Table",
    description: "Select an intimate seat directly by the open hearth counter or on the terrace overlooking Kigali city lights.",
    detail: "Watch cooks prep fresh beef brochettes and whole tilapia right in front of you."
  },
  {
    number: "03",
    title: "Watch the Fire",
    description: "Experience live hearth cooking firsthand. High-heat charcoal searing locks in flavor while keeping cuts tender.",
    detail: "Feel the gentle heat and enjoy the rhythmic crackle of live coals."
  },
  {
    number: "04",
    title: "Share the Meal",
    description: "Enjoy shared brochette platters, fire-roasted plantains, and local sauces served family-style with cold drinks.",
    detail: "Unwind, converse, and savor the warm hospitality of a Kigali evening."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Live Fire Hearth & Brochettes",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  },
  {
    id: "g2",
    title: "Friends Dining at Ember & Oak",
    category: "Guests & Atmosphere",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "g3",
    title: "Warm Hearth Dining Interior",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "tall"
  },
  {
    id: "g4",
    title: "Chef Daniel at the Charcoal Grill",
    category: "Chef at Work",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "square"
  },
  {
    id: "g5",
    title: "Char-Grilled Beef Brochette",
    category: "Plated Dish",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "g6",
    title: "Evening View over Kigali Heights",
    category: "Location",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape"
  }
];

export const GUEST_NOTES: GuestNote[] = [
  {
    id: "gn-1",
    quote: "Great atmosphere, good food and the fire cooking made the evening in Kigali special. The beef brochettes were tender and full of flavor.",
    author: "Jean-Paul K.",
    location: "Kigali Resident · Sample Demo Note"
  },
  {
    id: "gn-2",
    quote: "Sitting by the open hearth counter and watching the chef grill the Lake Kivu tilapia was fantastic. Warm service and very welcoming.",
    author: "Marie-Claire M.",
    location: "Guest Visitor · Sample Demo Note"
  },
  {
    id: "gn-3",
    quote: "The plantain croquettes and passion fruit drinks are unmatched. Ember & Oak brings a fresh live-fire concept to Kigali Heights.",
    author: "David R.",
    location: "Kigali Heights Guest · Sample Demo Note"
  }
];
