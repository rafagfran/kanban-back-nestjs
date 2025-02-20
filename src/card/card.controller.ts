import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import type { TCard, TCardCreate } from 'src/types/types';
import type { CardService } from './card.service';

@Controller('cards')
export class CardController {
	constructor(private readonly cardService: CardService) {}

	//PIPES DTOS PARA VALIDAÇÃO
	@Post()
	async createCard(@Body() newCardInfos: TCardCreate) {
		return this.cardService.createCard(newCardInfos);
	}

	@Get(':id')
	async listCardsByColumn(@Param('id') id: string): Promise<TCard[]> {
		return this.cardService.cardsByColumn(+id);
	}
}
