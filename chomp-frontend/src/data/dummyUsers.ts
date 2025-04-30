// src/data/dummyUsers.ts
import { User } from '../types';
import johnImage from '../assets/images/john.png';
import janeImage from '../assets/images/jane.png';
import aliceImage from '../assets/images/alice.jpg';
import bobImage from '../assets/images/bob.jpg';

export const dummyUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    profilePicture: johnImage,
    bio: 'Food blogger & breakfast enthusiast',
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith',
    profilePicture: janeImage,
    bio: 'Coffee lover and brunch reviewer',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    username: 'alicej',
    profilePicture: aliceImage,
    bio: 'Meal prep wizard 🌱',
  },
  {
    id: 4,
    name: 'Bob Brown',
    username: 'bobbrown',
    profilePicture: bobImage,
    bio: 'Your friendly neighborhood baker 🍞',
  },
];
