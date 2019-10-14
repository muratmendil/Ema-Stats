import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  note: Number,
  task_id: Number,        
  task_name: String,
});
