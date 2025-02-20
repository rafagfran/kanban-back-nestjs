import { Injectable } from '@nestjs/common';
import type { PrismaService } from 'src/prisma.service';
import type { TCardCreate } from 'src/types/types';

@Injectable()
export class CardService {
	constructor(private prisma: PrismaService) {}

	async createCard(cardInfos: TCardCreate) {
		await this.prisma.columns
			.findUnique({
				where: {
					id: cardInfos.columnId,
				},
			})
			.catch((err) => console.log(err));

		return this.prisma.cards.create({
			data: cardInfos,
		});
	}

	async cardsByColumn(columnId: number) {
		const response = await this.prisma.cards.findMany({
			where: {
				columnId: {
					equals: columnId,
				},
			},
		});

		return response;
	}
}
