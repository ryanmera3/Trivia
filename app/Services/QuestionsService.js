import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionApi } from "../Services/AxiosService.js"


class QuestionsService {
  constructor() {
    console.log("QuestionsService Loaded");
  }
  async getQuestion(results) {

    const response = await questionApi.get(results)
    console.log('Trivia API getQuestion', response.data);
    ProxyState.question = response.data.results.map(q => new Question(q))
    ProxyState.correct = response.data.results[0].correct_answer
  }

  async correctAnswer(answer) {
    console.log(answer, ProxyState.correct)
    if (answer == ProxyState.correct) {
      alert("Correct")
      return this.getQuestion()
    }
    alert("Incorrect")
  }

}

export const questionsService = new QuestionsService()