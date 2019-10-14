import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {INote, NoteDto} from '../models/note';

@Injectable()
export class NoteService {
 constructor(@InjectModel('Note') private readonly noteModel: Model<INote>) {}

  async create(createNoteDto: NoteDto): Promise<INote> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async findAll(): Promise<INote[]> {
    return await this.noteModel.find().exec();
  } 

  async findByTaskId(id : Number): Promise<INote[]> {
    return await this.noteModel.find({task_id : id}).exec();
  }
}
