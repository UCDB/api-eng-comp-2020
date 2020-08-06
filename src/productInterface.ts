export interface Product {
  id: number | null;
  name: string;
  code: string;
  description?: string;
  rating?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Netgear Cable Modem',
    code: 'CM700',
    description: 'Netgear Cable Modem compatible with all cables',
    rating: 4.0,
  },
  {
    id: 2,
    name: 'Linksys Cable Modem',
    code: 'LK700',
    description: 'Linksys Cable Modem compatible with all cables',
    rating: 4.1,
  },
  {
    id: 3,
    name: 'TP Link Cable Modem',
    code: 'TPL700',
    description: 'TP Link Cable Modem compatible with all cables',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Netgear Cable Modem',
    code: 'CM700',
    description: 'Netgear Cable Modem compatible with all cables',
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Linksys Cable Modem',
    code: 'LK700',
    description: 'Linksys Cable Modem compatible with all cables',
    rating: 4.1,
  },
  {
    id: 6,
    name: 'TP Link Cable Modem',
    code: 'TPL700',
    description: 'TP Link Cable Modem compatible with all cables',
    rating: 4.2,
  }, {
    id: 7,
    name: 'Netgear Cable Modem',
    code: 'CM700',
    description: 'Netgear Cable Modem compatible with all cables',
    rating: 4.0,
  },
  {
    id: 8,
    name: 'Linksys Cable Modem',
    code: 'LK700',
    description: 'Linksys Cable Modem compatible with all cables',
    rating: 4.1,
  },
  {
    id: 9,
    name: 'TP Link Cable Modem',
    code: 'TPL700',
    description: 'TP Link Cable Modem compatible with all cables',
    rating: 4.2,
  },
];
