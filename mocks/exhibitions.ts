import Work from '@/models/Work';

const exhibitions: Work[] = [
  {
    name: 'Lorem Ipsum Dolor Sit Amet',
    id: 1,
    images: [
      "#FF0000", // Pure Red
      "#DC143C", // Crimson
      "#B22222", // Firebrick
      "#8B0000", // Dark Red
      "#FF4500", // Orange-Red
    ],
  },
  {
    name: 'Consectetur Adipiscing Elit',
    id: 2,
    images: [
      "#0000FF", // Pure Blue
      "#1E90FF", // Dodger Blue
      "#00008B", // Dark Blue
      "#4169E1", // Royal Blue
      "#00BFFF", // Deep Sky Blue
      "#4682B4"  // Steel Blue
    ],
  },
  {
    name: 'Sed Do Eiusmod',
    id: 3,
    images: [
      "#800080", // Purple
      "#9370DB", // Medium Purple
      "#8A2BE2", // Blue Violet
      "#4B0082", // Indigo
      "#DA70D6", // Orchid
      "#9400D3"  // Dark Violet
    ],
  },
  { name: 'Tempor Incididunt', id: 4, images: [] },
  { name: 'Ut Labore', id: 5, images: [] },
];

export default exhibitions;
