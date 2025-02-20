import { Module } from '@nestjs/common';

import { CardController } from './card/card.controller';
import { CardModule } from './card/card.module';
import { CardService } from './card/card.service';

@Module({
	imports: [CardModule],
	controllers: [CardController],
	providers: [CardService],
})
export class AppModule {}
