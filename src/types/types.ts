import type { Cards, Prisma } from '@prisma/client';

export type TCardCreate = Pick<
	Prisma.CardsCreateManyInput,
	'columnId' | 'title' | 'postion'
>;
export type TCard = Cards;
