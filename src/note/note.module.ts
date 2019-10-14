import { Module } from '@nestjs/common';
import {MongooseModule } from '@nestjs/mongoose';
import { NoteService } from './services/note.service';
import {NoteSchema} from './models';
import { NoteController } from './controllers/note.controller';


@Module({
 imports: [
  MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])
  ],
  controllers: [NoteController],
  providers: [ 
    NoteService
  ],
  exports : [NoteService]
})
export class NoteModule {}
