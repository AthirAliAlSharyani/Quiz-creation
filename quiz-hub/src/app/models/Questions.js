import React from 'react'
const {Schema, default: mongoose, model} =require("mongoose");

const questions_Schema = new mongoose.Schema({
    text: { type: String, required: true },
  answers: [{ option: String, text: String }],
  correctAnswer: { type: String, required: true },
  difficulty: String,
  category: String
})

const Questions = model?.Users || model("questions_lists",questions_Schema)
export default Questions;