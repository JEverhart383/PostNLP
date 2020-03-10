import * as nlp from 'wink-nlp-utils'

export class PostNLP {
  public static language: string = "english"
  static createLog () {
    console.log('this is happening')
  }
  static extractPersonsName (name:string = 'Dr. Sarah Connor M. Tech., PhD. - AI') {
    return nlp.string.extractPersonsName(name)
  }
}