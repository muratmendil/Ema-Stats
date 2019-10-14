import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule} from '@nestjs/mongoose';
import * as dotenv from "dotenv";
dotenv.config();
import { NoteModule } from './note/note.module';
import { APP_PIPE } from '@nestjs/core';
import { CustomValidationPipe } from 'dist/src/note/pipe/custom.validation.pipe';


@Module({
 imports: [
 MongooseModule.forRoot('mongodb://ema-stats:MuratEmilin93@ds135427.mlab.com:35427/ema-stats'),
  NoteModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomValidationPipe,
    },
  ],
})
export class AppModule {}
