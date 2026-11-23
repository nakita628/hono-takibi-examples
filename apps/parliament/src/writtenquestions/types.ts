type HouseEnum = 'Bicameral' | 'Commons' | 'Lords'
type Link = {
  href?: (string | null) | undefined
  method?: (string | null) | undefined
  rel?: (string | null) | undefined
}
type DailyReportViewModel = {
  date?: string | undefined
  fileSizeBytes?: bigint | undefined
  house?: HouseEnum | undefined
  url?: (string | null) | undefined
}
type DailyReportViewModelItem = {
  links?: (Link[] | null) | undefined
  value?: DailyReportViewModel | undefined
}
type DailyReportViewModelSearchResult = {
  results?: (DailyReportViewModelItem[] | null) | undefined
  totalResults?: number | undefined
}
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type Answered = 'Any' | 'Answered' | 'Unanswered'
type QuestionStatusEnum = 'NotAnswered' | 'AnsweredOnly' | 'AllQuestions'
type MemberViewModel = {
  id?: number | undefined
  listAs?: (string | null) | undefined
  memberFrom?: (string | null) | undefined
  name?: (string | null) | undefined
  party?: (string | null) | undefined
  partyAbbreviation?: (string | null) | undefined
  partyColour?: (string | null) | undefined
  thumbnailUrl?: (string | null) | undefined
}
type AttachmentViewModel = {
  fileSizeBytes?: bigint | undefined
  fileType?: (string | null) | undefined
  title?: (string | null) | undefined
  url?: (string | null) | undefined
}
type GroupedQuestionViewModel = {
  dateTabled?: string | undefined
  questionUin?: (string | null) | undefined
}
type QuestionsViewModel = {
  answerIsCorrection?: (boolean | null) | undefined
  answerIsHolding?: (boolean | null) | undefined
  answerText?: (string | null) | undefined
  answeringBodyId?: number | undefined
  answeringBodyName?: (string | null) | undefined
  answeringMember?: MemberViewModel | undefined
  answeringMemberId?: (number | null) | undefined
  askingMember?: MemberViewModel | undefined
  askingMemberId?: number | undefined
  attachmentCount?: number | undefined
  attachments?: (AttachmentViewModel[] | null) | undefined
  comparableAnswerText?: (string | null) | undefined
  correctingMember?: MemberViewModel | undefined
  correctingMemberId?: (number | null) | undefined
  dateAnswerCorrected?: (string | null) | undefined
  dateAnswered?: (string | null) | undefined
  dateForAnswer?: string | undefined
  dateHoldingAnswer?: (string | null) | undefined
  dateTabled?: string | undefined
  groupedQuestions?: (string[] | null) | undefined
  groupedQuestionsDates?: (GroupedQuestionViewModel[] | null) | undefined
  heading?: (string | null) | undefined
  house?: HouseEnum | undefined
  id?: number | undefined
  isNamedDay?: boolean | undefined
  isWithdrawn?: boolean | undefined
  memberHasInterest?: boolean | undefined
  originalAnswerText?: (string | null) | undefined
  questionText?: (string | null) | undefined
  uin?: (string | null) | undefined
}
type QuestionsViewModelItem = {
  links?: (Link[] | null) | undefined
  value?: QuestionsViewModel | undefined
}
type QuestionsViewModelSearchResult = {
  results?: (QuestionsViewModelItem[] | null) | undefined
  totalResults?: number | undefined
}
type StatementLinkTypeEnum = 'CorrectedStatement' | 'CorrectedAnswer' | 'JointStatement'
type LinkedStatements = {
  linkDate?: string | undefined
  linkType?: StatementLinkTypeEnum | undefined
  linkedStatementId?: number | undefined
}
type StatementsViewModel = {
  answeringBodyId?: number | undefined
  answeringBodyName?: (string | null) | undefined
  attachments?: (AttachmentViewModel[] | null) | undefined
  dateMade?: string | undefined
  hasAttachments?: boolean | undefined
  hasLinkedStatements?: boolean | undefined
  house?: HouseEnum | undefined
  id?: number | undefined
  linkedStatements?: (LinkedStatements[] | null) | undefined
  member?: MemberViewModel | undefined
  memberId?: number | undefined
  memberRole?: (string | null) | undefined
  noticeNumber?: number | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
  uin?: (string | null) | undefined
}
type StatementsViewModelItem = {
  links?: (Link[] | null) | undefined
  value?: StatementsViewModel | undefined
}
type StatementsViewModelSearchResult = {
  results?: (StatementsViewModelItem[] | null) | undefined
  totalResults?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/dailyreports/dailyreports': {
      $get:
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: DailyReportViewModelSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: DailyReportViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: DailyReportViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                dateFrom?: (string | null) | undefined
                dateTo?: (string | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/writtenquestions/questions': {
      $get:
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: QuestionsViewModelSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: QuestionsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: QuestionsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                askingMemberId?: (number | null) | undefined
                answeringMemberId?: (number | null) | undefined
                tabledWhenFrom?: (string | null) | undefined
                tabledWhenTo?: (string | null) | undefined
                answered?: Answered | undefined
                answeredWhenFrom?: (string | null) | undefined
                answeredWhenTo?: (string | null) | undefined
                questionStatus?: QuestionStatusEnum | undefined
                includeWithdrawn?: boolean | undefined
                expandMember?: boolean | undefined
                correctedWhenFrom?: (string | null) | undefined
                correctedWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/writtenquestions/questions/:date/:uin': {
      $get:
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: QuestionsViewModelItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: QuestionsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: QuestionsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/writtenquestions/questions/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: QuestionsViewModelItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: QuestionsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: QuestionsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/writtenstatements/statements': {
      $get:
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: StatementsViewModelSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: StatementsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: StatementsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                madeWhenFrom?: (string | null) | undefined
                madeWhenTo?: (string | null) | undefined
                searchTerm?: (string | null) | undefined
                uIN?: (string | null) | undefined
                answeringBodies?: (number[] | null) | undefined
                members?: (number[] | null) | undefined
                house?: HouseEnum | undefined
                skip?: (number | null) | undefined
                take?: (number | null) | undefined
                expandMember?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/writtenstatements/statements/:date/:uin': {
      $get:
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: StatementsViewModelItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: StatementsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: StatementsViewModelItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { date: string; uin: string | null } } & {
              query: { expandMember?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/writtenstatements/statements/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: StatementsViewModelSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: StatementsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: StatementsViewModelSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { expandMember?: boolean | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
