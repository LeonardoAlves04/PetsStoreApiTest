export type PetStatus = 'available' | 'pending' | 'sold';

export interface Pet {
  id: number;
  category?: { id: number; name: string };
  name: string;
  photoUrls: string[];
  tags?: Array<{ id: number; name: string }>;
  status?: PetStatus;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export interface Order {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: 'placed' | 'approved' | 'delivered';
  complete: boolean;
}
