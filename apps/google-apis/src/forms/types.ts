type Info = {
  description?: string | undefined
  documentTitle?: string | undefined
  title?: string | undefined
}
type MediaProperties = {
  alignment?: 'ALIGNMENT_UNSPECIFIED' | 'LEFT' | 'RIGHT' | 'CENTER' | undefined
  width?: number | undefined
}
type Image = {
  altText?: string | undefined
  contentUri?: string | undefined
  properties?: MediaProperties | undefined
  sourceUri?: string | undefined
}
type ImageItem = { image?: Image | undefined }
type PageBreakItem = { [x: string]: unknown }
type Option = {
  goToAction?:
    | 'GO_TO_ACTION_UNSPECIFIED'
    | 'NEXT_SECTION'
    | 'RESTART_FORM'
    | 'SUBMIT_FORM'
    | undefined
  goToSectionId?: string | undefined
  image?: Image | undefined
  isOther?: boolean | undefined
  value?: string | undefined
}
type ChoiceQuestion = {
  options?: Option[] | undefined
  shuffle?: boolean | undefined
  type?: 'CHOICE_TYPE_UNSPECIFIED' | 'RADIO' | 'CHECKBOX' | 'DROP_DOWN' | undefined
}
type Grid = { columns?: ChoiceQuestion | undefined; shuffleQuestions?: boolean | undefined }
type DateQuestion = { includeTime?: boolean | undefined; includeYear?: boolean | undefined }
type FileUploadQuestion = {
  folderId?: string | undefined
  maxFileSize?: string | undefined
  maxFiles?: number | undefined
  types?:
    | (
        | 'FILE_TYPE_UNSPECIFIED'
        | 'ANY'
        | 'DOCUMENT'
        | 'PRESENTATION'
        | 'SPREADSHEET'
        | 'DRAWING'
        | 'PDF'
        | 'IMAGE'
        | 'VIDEO'
        | 'AUDIO'
      )[]
    | undefined
}
type CorrectAnswer = { value?: string | undefined }
type CorrectAnswers = { answers?: CorrectAnswer[] | undefined }
type TextLink = { displayText?: string | undefined; uri?: string | undefined }
type VideoLink = { displayText?: string | undefined; youtubeUri?: string | undefined }
type ExtraMaterial = { link?: TextLink | undefined; video?: VideoLink | undefined }
type Feedback = { material?: ExtraMaterial[] | undefined; text?: string | undefined }
type Grading = {
  correctAnswers?: CorrectAnswers | undefined
  generalFeedback?: Feedback | undefined
  pointValue?: number | undefined
  whenRight?: Feedback | undefined
  whenWrong?: Feedback | undefined
}
type RowQuestion = { title?: string | undefined }
type ScaleQuestion = {
  high?: number | undefined
  highLabel?: string | undefined
  low?: number | undefined
  lowLabel?: string | undefined
}
type TextQuestion = { paragraph?: boolean | undefined }
type TimeQuestion = { duration?: boolean | undefined }
type Question = {
  choiceQuestion?: ChoiceQuestion | undefined
  dateQuestion?: DateQuestion | undefined
  fileUploadQuestion?: FileUploadQuestion | undefined
  grading?: Grading | undefined
  questionId?: string | undefined
  required?: boolean | undefined
  rowQuestion?: RowQuestion | undefined
  scaleQuestion?: ScaleQuestion | undefined
  textQuestion?: TextQuestion | undefined
  timeQuestion?: TimeQuestion | undefined
}
type QuestionGroupItem = {
  grid?: Grid | undefined
  image?: Image | undefined
  questions?: Question[] | undefined
}
type QuestionItem = { image?: Image | undefined; question?: Question | undefined }
type TextItem = { [x: string]: unknown }
type Video = { properties?: MediaProperties | undefined; youtubeUri?: string | undefined }
type VideoItem = { caption?: string | undefined; video?: Video | undefined }
type Item = {
  description?: string | undefined
  imageItem?: ImageItem | undefined
  itemId?: string | undefined
  pageBreakItem?: PageBreakItem | undefined
  questionGroupItem?: QuestionGroupItem | undefined
  questionItem?: QuestionItem | undefined
  textItem?: TextItem | undefined
  title?: string | undefined
  videoItem?: VideoItem | undefined
}
type QuizSettings = { isQuiz?: boolean | undefined }
type FormSettings = { quizSettings?: QuizSettings | undefined }
type Form = {
  formId?: string | undefined
  info?: Info | undefined
  items?: Item[] | undefined
  linkedSheetId?: string | undefined
  responderUri?: string | undefined
  revisionId?: string | undefined
  settings?: FormSettings | undefined
}
type FileUploadAnswer = {
  fileId?: string | undefined
  fileName?: string | undefined
  mimeType?: string | undefined
}
type FileUploadAnswers = { answers?: FileUploadAnswer[] | undefined }
type Grade = {
  correct?: boolean | undefined
  feedback?: Feedback | undefined
  score?: number | undefined
}
type TextAnswer = { value?: string | undefined }
type TextAnswers = { answers?: TextAnswer[] | undefined }
type Answer = {
  fileUploadAnswers?: FileUploadAnswers | undefined
  grade?: Grade | undefined
  questionId?: string | undefined
  textAnswers?: TextAnswers | undefined
}
type FormResponse = {
  answers?: { [x: string]: Answer } | undefined
  createTime?: string | undefined
  formId?: string | undefined
  lastSubmittedTime?: string | undefined
  respondentEmail?: string | undefined
  responseId?: string | undefined
  totalScore?: number | undefined
}
type ListFormResponsesResponse = {
  nextPageToken?: string | undefined
  responses?: FormResponse[] | undefined
}
type CloudPubsubTopic = { topicName?: string | undefined }
type WatchTarget = { topic?: CloudPubsubTopic | undefined }
type Watch = {
  createTime?: string | undefined
  errorType?:
    | 'ERROR_TYPE_UNSPECIFIED'
    | 'PROJECT_NOT_AUTHORIZED'
    | 'NO_USER_ACCESS'
    | 'OTHER_ERRORS'
    | undefined
  eventType?: 'EVENT_TYPE_UNSPECIFIED' | 'SCHEMA' | 'RESPONSES' | undefined
  expireTime?: string | undefined
  id?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'SUSPENDED' | undefined
  target?: WatchTarget | undefined
}
type ListWatchesResponse = { watches?: Watch[] | undefined }
type CreateWatchRequest = { watch?: Watch | undefined; watchId?: string | undefined }
type Empty = { [x: string]: unknown }
type RenewWatchRequest = { [x: string]: unknown }
type Location = { index?: number | undefined }
type CreateItemRequest = { item?: Item | undefined; location?: Location | undefined }
type DeleteItemRequest = { location?: Location | undefined }
type MoveItemRequest = {
  newLocation?: Location | undefined
  originalLocation?: Location | undefined
}
type UpdateFormInfoRequest = { info?: Info | undefined; updateMask?: string | undefined }
type UpdateItemRequest = {
  item?: Item | undefined
  location?: Location | undefined
  updateMask?: string | undefined
}
type UpdateSettingsRequest = {
  settings?: FormSettings | undefined
  updateMask?: string | undefined
}
type Request = {
  createItem?: CreateItemRequest | undefined
  deleteItem?: DeleteItemRequest | undefined
  moveItem?: MoveItemRequest | undefined
  updateFormInfo?: UpdateFormInfoRequest | undefined
  updateItem?: UpdateItemRequest | undefined
  updateSettings?: UpdateSettingsRequest | undefined
}
type WriteControl = {
  requiredRevisionId?: string | undefined
  targetRevisionId?: string | undefined
}
type BatchUpdateFormRequest = {
  includeFormInResponse?: boolean | undefined
  requests?: Request[] | undefined
  writeControl?: WriteControl | undefined
}
type CreateItemResponse = { itemId?: string | undefined; questionId?: string[] | undefined }
type Response = { createItem?: CreateItemResponse | undefined }
type BatchUpdateFormResponse = {
  form?: Form | undefined
  replies?: Response[] | undefined
  writeControl?: WriteControl | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/forms': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Form }
        output: Form
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId': {
      $get: {
        input: { param: { formId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Form
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId/responses': {
      $get: {
        input: { param: { formId: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListFormResponsesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId/responses/:responseId': {
      $get: {
        input: { param: { formId: string; responseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: FormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId/watches': {
      $get: {
        input: { param: { formId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListWatchesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { formId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateWatchRequest }
        output: Watch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId/watches/:watchId': {
      $delete: {
        input: { param: { formId: string; watchId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId/watches/:watchId:renew': {
      $post: {
        input: { param: { formId: string; watchId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RenewWatchRequest }
        output: Watch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/forms/:formId:batchUpdate': {
      $post: {
        input: { param: { formId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchUpdateFormRequest }
        output: BatchUpdateFormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
