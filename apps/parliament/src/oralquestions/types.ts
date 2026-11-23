type StatusCount = { Count?: number | undefined; StatusId?: number | undefined }
type PagingInfo = {
  GlobalStatusCounts?: StatusCount[] | undefined
  GlobalTotal?: number | undefined
  Skip?: number | undefined
  StatusCounts?: StatusCount[] | undefined
  Take?: number | undefined
  Total?: number | undefined
}
type MemberForDate = {
  Constituency?: string | undefined
  ListAs?: string | undefined
  MnisId?: number | undefined
  Name?: string | undefined
  Party?: string | undefined
  PartyColour?: string | undefined
  PartyId?: number | undefined
  PhotoUrl?: string | undefined
  PimsId?: number | undefined
  Status?: string | undefined
}
type PublishedWrittenQuestion = {
  Answer?: string | undefined
  AnsweredWhen?: string | undefined
  AnsweringBody?: string | undefined
  AnsweringBodyId?: number | undefined
  AnsweringMinister?: MemberForDate | undefined
  AnsweringMinisterId?: number | undefined
  AnsweringMinisterTitle?: string | undefined
  AskingMember?: MemberForDate | undefined
  AskingMemberId?: number | undefined
  DueForAnswer?: string | undefined
  Id?: number | undefined
  QuestionText?: string | undefined
  QuestionType?: 'NamedDay' | 'Ordinary' | undefined
  TabledWhen?: string | undefined
  UIN?: number | undefined
}
type ApiResponseListPublishedWrittenQuestion = {
  Errors?: string[] | undefined
  PagingInfo?: PagingInfo | undefined
  Response?: PublishedWrittenQuestion[] | undefined
  StatusCode?:
    | 'Continue'
    | 'SwitchingProtocols'
    | 'OK'
    | 'Created'
    | 'Accepted'
    | 'NonAuthoritativeInformation'
    | 'NoContent'
    | 'ResetContent'
    | 'PartialContent'
    | 'MultipleChoices'
    | 'Ambiguous'
    | 'MovedPermanently'
    | 'Moved'
    | 'Found'
    | 'Redirect'
    | 'SeeOther'
    | 'RedirectMethod'
    | 'NotModified'
    | 'UseProxy'
    | 'Unused'
    | 'TemporaryRedirect'
    | 'RedirectKeepVerb'
    | 'BadRequest'
    | 'Unauthorized'
    | 'PaymentRequired'
    | 'Forbidden'
    | 'NotFound'
    | 'MethodNotAllowed'
    | 'NotAcceptable'
    | 'ProxyAuthenticationRequired'
    | 'RequestTimeout'
    | 'Conflict'
    | 'Gone'
    | 'LengthRequired'
    | 'PreconditionFailed'
    | 'RequestEntityTooLarge'
    | 'RequestUriTooLong'
    | 'UnsupportedMediaType'
    | 'RequestedRangeNotSatisfiable'
    | 'ExpectationFailed'
    | 'UpgradeRequired'
    | 'InternalServerError'
    | 'NotImplemented'
    | 'BadGateway'
    | 'ServiceUnavailable'
    | 'GatewayTimeout'
    | 'HttpVersionNotSupported'
    | undefined
  Success?: boolean | undefined
}
type ApiResponseObject = {
  Errors?: string[] | undefined
  PagingInfo?: PagingInfo | undefined
  Response?: { [x: string]: unknown } | undefined
  StatusCode?:
    | 'Continue'
    | 'SwitchingProtocols'
    | 'OK'
    | 'Created'
    | 'Accepted'
    | 'NonAuthoritativeInformation'
    | 'NoContent'
    | 'ResetContent'
    | 'PartialContent'
    | 'MultipleChoices'
    | 'Ambiguous'
    | 'MovedPermanently'
    | 'Moved'
    | 'Found'
    | 'Redirect'
    | 'SeeOther'
    | 'RedirectMethod'
    | 'NotModified'
    | 'UseProxy'
    | 'Unused'
    | 'TemporaryRedirect'
    | 'RedirectKeepVerb'
    | 'BadRequest'
    | 'Unauthorized'
    | 'PaymentRequired'
    | 'Forbidden'
    | 'NotFound'
    | 'MethodNotAllowed'
    | 'NotAcceptable'
    | 'ProxyAuthenticationRequired'
    | 'RequestTimeout'
    | 'Conflict'
    | 'Gone'
    | 'LengthRequired'
    | 'PreconditionFailed'
    | 'RequestEntityTooLarge'
    | 'RequestUriTooLong'
    | 'UnsupportedMediaType'
    | 'RequestedRangeNotSatisfiable'
    | 'ExpectationFailed'
    | 'UpgradeRequired'
    | 'InternalServerError'
    | 'NotImplemented'
    | 'BadGateway'
    | 'ServiceUnavailable'
    | 'GatewayTimeout'
    | 'HttpVersionNotSupported'
    | undefined
  Success?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/EarlyDayMotion/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ApiResponseObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ApiResponseObject
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/EarlyDayMotions/list': {
      $get:
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.edmIds'?: number[] | undefined
                'parameters.uINWithAmendmentSuffix'?: string | undefined
                'parameters.searchTerm'?: string | undefined
                'parameters.currentStatusDateStart'?: string | undefined
                'parameters.currentStatusDateEnd'?: string | undefined
                'parameters.isPrayer'?: boolean | undefined
                'parameters.memberId'?: number | undefined
                'parameters.includeSponsoredByMember'?: boolean | undefined
                'parameters.tabledStartDate'?: string | undefined
                'parameters.tabledEndDate'?: string | undefined
                'parameters.statuses'?: ('Published' | 'Withdrawn')[] | undefined
                'parameters.orderBy'?:
                  | 'DateTabledAsc'
                  | 'DateTabledDesc'
                  | 'TitleAsc'
                  | 'TitleDesc'
                  | 'SignatureCountAsc'
                  | 'SignatureCountDesc'
                  | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/oralquestions/list': {
      $get:
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.questionType'?: 'Substantive' | 'Topical' | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.askingMemberIds'?: number[] | undefined
                'parameters.uINs'?: number[] | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/oralquestiontimes/list': {
      $get:
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseListPublishedWrittenQuestion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                'parameters.answeringDateStart'?: string | undefined
                'parameters.answeringDateEnd'?: string | undefined
                'parameters.deadlineDateStart'?: string | undefined
                'parameters.deadlineDateEnd'?: string | undefined
                'parameters.oralQuestionTimeId'?: number | undefined
                'parameters.answeringBodyIds'?: number[] | undefined
                'parameters.skip'?: number | undefined
                'parameters.take'?: number | undefined
              }
            }
            output: ApiResponseObject
            outputFormat: 'text'
            status: 400
          }
    }
  },
  '/'
>
export default routes
