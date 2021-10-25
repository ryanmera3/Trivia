import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"

function _draw() {
  let question = ProxyState.question
  let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('app').innerHTML = template
  _drawButtons()

}

function _drawButtons() {

  document.getElementById('buttons').innerHTML = `
  <button class="btn btn-primary" onclick="app.questionsController.correctAnswer('True')">True</button>
  <div class="px-2"></div>
  <button class="btn btn-primary " onclick="app.questionsController.correctAnswer('False')">False</button>
  `
}
export class QuestionsController {
  constructor() {

    ProxyState.on('question', _draw)
    this.getQuestion()
  }

  async getQuestion(results) {
    try {
      await questionsService.getQuestion(results)
    } catch (error) {
      console.error('There is no question', error)
    }

  }
  async correctAnswer(answer) {
    try {
      await questionsService.correctAnswer(answer)
    } catch (error) {
      console.error('Something is not working here', error)
    }
  }
}