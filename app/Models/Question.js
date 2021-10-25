
export class Question {
  constructor(data) {
    this.type = data.type
    this.question = data.question
    this.difficulty = data.difficulty
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
  }

  get Template() {
    return `<h3 class="mt-5 text-center">${this.question}</h3>`
  }
}