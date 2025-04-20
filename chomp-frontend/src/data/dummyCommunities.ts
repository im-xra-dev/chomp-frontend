// src/data/dummyCommunities.ts
import { Community } from '../types';
import johnImage from '../assets/images/john.png';
import janeImage from '../assets/images/jane.png';
import aliceImage from '../assets/images/alice.jpg';
import bobImage from '../assets/images/bob.jpg';

export const dummyCommunities: Community[] = [
  {
    id: 1,
    name: 'TapasConsumers',
    description: 'A group for people who can’t stop eating small plates.',
    profilePicture: johnImage,
    memberCount: 120,
  },
  {
    id: 2,
    name: 'Easy Breakfast',
    description: 'Mornings are hard. This community makes them easier.',
    profilePicture: janeImage,
    memberCount: 340,
  },
  {
    id: 3,
    name: 'Weekly Planning',
    description: 'Prep your meals, organize your fridge, master your week.',
    profilePicture: aliceImage,
    memberCount: 280,
  },
  {
    id: 4,
    name: 'Vegan Prepping',
    description: 'Plant-based, prep-based. What more do you need?',
    profilePicture: bobImage,
    memberCount: 410,
  },
];
