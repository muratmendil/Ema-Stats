import { IsNumber, IsString } from "class-validator";

export class NoteDto {

    @IsNumber()
    note : Number;

    @IsNumber()
    task_id : Number;

    @IsString()
    task_name: String;


    save(){

    }
}
