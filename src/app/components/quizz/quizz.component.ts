import { Component, OnInit } from '@angular/core';
import quizz_questions from "src/assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string = ""
  questions:any
  questionSelected:any
  answers:string[] = []
  answerSelected:string = ""
  questionIndex:number = 0
  questionMaxIndex:number = 0
  finished:boolean = false

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title
      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]
      this.questionMaxIndex = this.questions.length
    }
  }
  async checkResult(){
    const highFreq = this.answers.filter(x => x==="A").length
    if((this.questionMaxIndex - highFreq) <= Math.floor(this.questionMaxIndex/2)){
      return("A")
    }else{
      return("B")
    }
  }

  async playerChoice(value:string){
    this.answers.push(value)
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
      const finalAnswer = await this.checkResult()
      this.answerSelected = quizz_questions.results[finalAnswer]
    }
  }

}
