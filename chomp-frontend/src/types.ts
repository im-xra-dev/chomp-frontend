// src/types.ts

export type User = {
    id: number;
    name: string;
    username: string;
    profilePicture: string;
    bio?: string;
};

export type Community = {
    id: number;
    name: string;
    description?: string;
    profilePicture: string;
    memberCount?: number;
};

export type Post = {
    id: string;
    content: string;
};