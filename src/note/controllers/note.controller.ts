import { Controller, Get, Body, Post, UsePipes, Param } from '@nestjs/common';
import { NoteDto } from '../models';
import { NoteService } from '../services/note.service';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}
    
    @Post()
    async create(@Body() noteDto: NoteDto) {
      return this.noteService.create(noteDto);
    }

    @Get()
    async findAll(){
        return this.noteService.findAll();
    } 

    @Get(':id')
    async findByTastId(@Param() id : Number){
        return this.noteService.findByTaskId(id);
    } 
}