import React from 'react';
import { 
  Dumbbell, Gamepad2, Waves, Users, 
  Sun, Sunset, Compass, TreePine, Layout, Ban, Maximize, Building,
  GraduationCap, BookOpen, Building2, ShoppingBag, Stethoscope, Trophy, Train,
  Wind, Shield, MapPin
} from 'lucide-react';

/* --- AMENITIES DATA --- */
export const amenitiesCategories = [
  {
    id: 'fitness',
    label: 'Active & Fitness',
    icon: Dumbbell,
    image: 'https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/gym.webp',
    description: 'Energize your body. Spaces designed for movement, vitality, and strength.',
    items: [
      'Jogging Track',
      'Walking Trail',
      'Aerobics & Yoga Zone',
      'Fully Equipped Gym',
      'Football Turf',
      'Cricket Turf',
      'Half Basketball Court'
    ]
  },
  {
    id: 'leisure',
    label: 'Leisure & Social',
    icon: Gamepad2,
    image: 'https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/social.webp',
    description: 'Unwind and reconnect. Curated zones that bring people together.',
    items: [
      'Snooker & Table Tennis',
      'Indoor Games Lounge',
      'Children’s Play Area',
      'Landscaped Gardens',
      'Reading Nooks'
    ]
  },
  {
    id: 'wellness',
    label: 'Wellness',
    icon: Waves,
    image: 'https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Pool.webp',
    description: 'Rejuvenate your senses. Water, warmth, and silence to wash away stress.',
    items: [
      'Sauna & Steam Room',
      'Sundeck & Cabanas',
      'Swimming Pool',
      'Toddler Pool',
      'Senior Citizen Corner'
    ]
  },
  {
    id: 'community',
    label: 'Celebrations',
    icon: Users,
    image: 'https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/community.webp',
    description: 'Celebrate life. Grand settings for your most cherished gatherings.',
    items: [
      'Signature Clubhouse',
      'Grand Multipurpose Hall',
      'Resident Lounge Spaces',
      'Community Gathering Zones'
    ]
  }
];

/* --- PROMISE (BENTO GRID) DATA --- */
export const promiseData = [
  {
    id: 'light',
    title: "Light that awakens",
    description: "Every home is a corner unit, meticulously oriented to invite the morning sun.",
    icon: Sun,
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/light.webp",
    className: "col-span-2 md:col-span-4 md:row-span-2 min-h-[250px] md:min-h-[400px]"
  },
  {
    id: 'nature',
    title: "Green that grounds",
    description: "80% open space dedicated to indigenous landscapes.",
    icon: TreePine,
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/AIR.webp",
    className: "col-span-2 md:col-span-8 md:row-span-1 h-[200px] md:h-auto"
  },
  {
    id: 'air',
    title: "Air that frees",
    description: "Natural wind tunnels.",
    icon: Wind,
    image: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Balcony-Garden_Ver-03_01-10-2024.webp",
    className: "col-span-1 md:col-span-4 md:row-span-1 h-[250px] md:h-auto",
    compact: true
  },
  {
    id: 'privacy',
    title: "Privacy that shelters",
    description: "Zero common walls.",
    icon: Shield,
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/PRIVACY.webp",
    className: "col-span-1 md:col-span-4 md:row-span-1 h-[250px] md:h-auto",
    compact: true
  },
  {
    id: 'address',
    title: "Address that elevates",
    description: "Strategically connected to Whitefield yet secluded in nature.",
    icon: MapPin,
    image: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Ext-Dusk_Ver-02_01-10-2024.webp",
    className: "col-span-2 md:col-span-12 md:row-span-1 h-[200px] md:h-auto"
  }
];

/* --- FINANCIALS DATA --- */
export const pricingData = {
  'Dawn (1791)': { price: 16119000, size: 1791 },
  'Dusk (1803)': { price: 16227000, size: 1803 },
  'Prism (1793)': { price: 16137000, size: 1793 },
};

/* --- RESIDENCES DATA --- */
export const residenceVariants = {
  'Dawn': {
    title: 'The Dawn Series',
    subtitle: '3 Bed | East Facing | 1791 Sqft',
    desc: 'Greet the sunrise. This layout is meticulously designed to capture the first light of day, filling your living spaces with energy and warmth.',
    specs: ['1,791 Sq. Ft. (SBU)', 'East Facing Entry', 'Morning Sunlight Focus'],
    image: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Living_V2_01-10-2024.webp',
    icon: <Sun size={20} className="text-gold-400" />
  },
  'Dusk': {
    title: 'The Dusk Series',
    subtitle: '3 Bed | West Facing | 1803 Sqft',
    desc: 'Embrace the golden hour. A slightly larger footprint designed for those who appreciate the calm of the evening and the warmth of the setting sun.',
    specs: ['1,803 Sq. Ft. (SBU)', 'West Facing Entry', 'Sunset Views'],
    image: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Bedroom_V1_01-10-2024.webp',
    icon: <Sunset size={20} className="text-gold-400" />
  },
  'Prism': {
    title: 'The Prism Series',
    subtitle: '3 Bed | East Corner | 1793 Sqft',
    desc: 'The premium corner expression. Offering a dual-aspect view that maximizes cross-ventilation and privacy, creating a true sanctuary in the sky.',
    specs: ['1,793 Sq. Ft. (SBU)', 'East Facing Corner', 'Dual Aspect Views'],
    image: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_AMOGAYA-ADORIT-2686-Si_Bedroom_V1_01.10.2024.webp',
    icon: <Compass size={20} className="text-gold-400" />
  },
};

export const residenceHighlights = [
    { icon: TreePine, title: "80% Open Space" },
    { icon: Compass, title: "100% Vastu Compliant" },
    { icon: Layout, title: "4 Sided Open" },
    { icon: Ban, title: "0 Common Walls" },
    { icon: Maximize, title: "4 Corner Units" },
    { icon: Building, title: "2 Towers, G+14" }
];

/* --- TIMELINE DATA --- */
export const timelineStages = [
  {
    id: 1,
    title: "The Origin",
    date: "Q1 2024",
    status: "completed",
    subtitle: "Land Acquisition",
    description: "Legal diligence and clear title verification complete.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%201.webp"
  },
  {
    id: 2,
    title: "The Foundation",
    date: "Q3 2024",
    status: "completed",
    subtitle: "Excavation & Footing",
    description: "Soil stabilization and deep earthworks finalized.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%202.webp"
  },
  {
    id: 3,
    title: "The Rise",
    date: "Current Phase",
    status: "active",
    subtitle: "Plinth & Podium",
    description: "Casting of the podium slab is currently in progress.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%203.webp"
  },
  {
    id: 4,
    title: "The Spine",
    date: "Q2 2025",
    status: "upcoming",
    subtitle: "Superstructure",
    description: "Structural rise up to the 14th floor skyline.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%204.webp"
  },
  {
    id: 5,
    title: "The Skin",
    date: "Q1 2026",
    status: "upcoming",
    subtitle: "Facade & Glazing",
    description: "Installation of weather-proof texture and glass.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%205.webp"
  },
  {
    id: 6,
    title: "Homecoming",
    date: "Q4 2026",
    status: "upcoming",
    subtitle: "Handover",
    description: "Final finishing touches and key handover.",
    image: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Slice%206.webp"
  }
];

/* --- GALLERY DATA --- */
export const galleryImages = [
    { src: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Ext-Dusk_Ver-02_01-10-2024.webp", alt: "Signature Facade at Dusk" },
    { src: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Living_V2_01-10-2024.webp", alt: "Dawn Series Living Room" },
    { src: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Bedroom_V1_01-10-2024.webp", alt: "Dusk Series Bedroom" },
    { src: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_AMOGAYA-ADORIT-2686-Si_Bedroom_V1_01.10.2024.webp", alt: "Prism Series Master Suite" },
    { src: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/Pool.webp", alt: "Infinity Lap Pool" },
    { src: "https://elementsoflife.co.in/wp-content/uploads/2025/11/Utkarsh_Amogaya-Adorit_2686_V_Balcony-Garden_Ver-03_01-10-2024.webp", alt: "Private Deck & Sky Garden" },
    { src: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/community.webp", alt: "Clubhouse & Community Spaces" },
    { src: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/light.webp", alt: "Sun-Drenched Interiors" },
    { src: "https://7jvtnfacmoer00mh.public.blob.vercel-storage.com/UNITERN/social.webp", alt: "Social Lounge" }
];

/* --- LOCATION DATA --- */
export const locationData: Record<string, { icon: React.ReactNode, items: { label: string; time: string; detail?: string }[] }> = {
    'Schools': {
      icon: <GraduationCap size={16} />,
      items: [
        { label: 'VIBGYOR High School', time: '5 Mins', detail: 'Kadugodi' },
        { label: 'One World International', time: '5 Mins', detail: 'Belathur' },
        { label: 'National Public School', time: '5 Mins', detail: 'ITPL' },
        { label: 'Jain Heritage School', time: '10 Mins', detail: 'Whitefield' },
        { label: 'Chrysalis High School', time: '15 Mins', detail: 'Varthur' },
      ]
    },
    'Colleges': {
      icon: <BookOpen size={16} />,
      items: [
        { label: 'Advitya PU & Degree', time: '10 Mins', detail: 'Seegehalli' },
        { label: 'East Point College', time: '15 Mins', detail: 'Higher Education' },
        { label: 'MVJ College of Engg.', time: '25 Mins', detail: 'Whitefield' },
        { label: 'S.E.A College', time: '25 Mins', detail: 'Engg. & Tech' },
      ]
    },
    'Tech Parks': {
      icon: <Building2 size={16} />,
      items: [
        { label: 'Bearys Global Research', time: '5 Mins', detail: 'Triangle' },
        { label: 'Sumadhura Capitol', time: '15 Mins', detail: 'Whitefield' },
        { label: 'ITPL', time: '20 Mins', detail: 'Tech Park' },
        { label: 'Mind Comp Tech Park', time: '25 Mins', detail: 'Whitefield' },
        { label: 'DivyaSree Technopark', time: '35 Mins', detail: 'EPIP Zone' },
        { label: 'Bagmane Tech Park', time: '40 Mins', detail: 'CV Raman Nagar' },
      ]
    },
    'Malls': {
      icon: <ShoppingBag size={16} />,
      items: [
        { label: 'Orion Uptown Mall', time: '2 Mins', detail: 'Old Madras Rd' },
        { label: 'Park Square Mall', time: '20 Mins', detail: 'ITPL' },
        { label: 'Nexus Shantiniketan', time: '20 Mins', detail: 'Whitefield' },
        { label: 'Nexus Whitefield', time: '25 Mins', detail: 'Whitefield' },
        { label: 'Phoenix Marketcity', time: '30 Mins', detail: 'Mahadevapura' },
        { label: 'VR Bangalore', time: '30 Mins', detail: 'Mahadevapura' },
      ]
    },
    'Hospitals': {
      icon: <Stethoscope size={16} />,
      items: [
        { label: 'Srinivasa Hospital', time: '5 Mins', detail: 'Seegehalli' },
        { label: 'Svastha Hospital', time: '15 Mins', detail: 'Whitefield' },
        { label: 'Manipal Hospital', time: '20 Mins', detail: 'Whitefield' },
        { label: 'Manipal Hospital', time: '25 Mins', detail: 'Varthur Rd' },
      ]
    },
    'Sports': {
      icon: <Trophy size={16} />,
      items: [
        { label: 'Game Theory', time: '8 Mins', detail: 'Sports Arena' },
        { label: 'Rally Sports', time: '10 Mins', detail: 'Badminton & More' },
        { label: '1BFC Turf Arena', time: '15 Mins', detail: 'Football' },
        { label: 'Sportonix Arena', time: '25 Mins', detail: 'Multi-sport' },
      ]
    },
    'Connectivity': {
      icon: <Train size={16} />,
      items: [
        { label: 'Kadugodi Metro', time: '20 Mins', detail: 'Purple Line' },
        { label: 'Pattandur Agrahara', time: '25 Mins', detail: 'Metro Station' },
        { label: 'Hoodi Metro', time: '30 Mins', detail: 'Purple Line' },
        { label: 'Kempegowda Intl Airport', time: '55 Mins', detail: 'Via KIADB' },
      ]
    }
};