type DeleteSessionResponse = {
  botName?: {} | undefined
  botAlias?: {} | undefined
  userId?: {} | undefined
  sessionId?: {} | undefined
}
type NotFoundException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type InternalFailureException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type String = string
type IntentSummary = {
  intentName?: {} | undefined
  checkpointLabel?: {} | undefined
  slots?: {} | undefined
  confirmationStatus?: {} | undefined
  dialogActionType: {}
  fulfillmentState?: {} | undefined
  slotToElicit?: {} | undefined
}
type ActiveContext = {
  name: {}
  timeToLive: { timeToLiveInSeconds?: {} | undefined; turnsToLive?: {} | undefined }
  parameters: {}
}
type PutSessionResponse = { audioStream?: {} | undefined }
type NotAcceptableException = { [x: string]: unknown }
type DependencyFailedException = { [x: string]: unknown }
type BadGatewayException = { [x: string]: unknown }
type GetSessionResponse = {
  recentIntentSummaryView?: {} | undefined
  sessionAttributes?: {} | undefined
  sessionId?: {} | undefined
  dialogAction?:
    | {
        type: {}
        intentName?: {} | undefined
        slots?: {} | undefined
        slotToElicit?: {} | undefined
        fulfillmentState?: {} | undefined
        message?: {} | undefined
        messageFormat?: {} | undefined
      }
    | undefined
  activeContexts?: {} | undefined
}
type PostContentResponse = { audioStream?: {} | undefined }
type UnsupportedMediaTypeException = { [x: string]: unknown }
type RequestTimeoutException = { [x: string]: unknown }
type LoopDetectedException = { [x: string]: unknown }
type PostTextResponse = {
  intentName?: {} | undefined
  nluIntentConfidence?: { score?: {} | undefined } | undefined
  alternativeIntents?: {} | undefined
  slots?: {} | undefined
  sessionAttributes?: {} | undefined
  message?: {} | undefined
  sentimentResponse?:
    | { sentimentLabel?: {} | undefined; sentimentScore?: {} | undefined }
    | undefined
  messageFormat?: {} | undefined
  dialogState?: {} | undefined
  slotToElicit?: {} | undefined
  responseCard?:
    | {
        version?: {} | undefined
        contentType?: {} | undefined
        genericAttachments?: {} | undefined
      }
    | undefined
  sessionId?: {} | undefined
  botVersion?: {} | undefined
  activeContexts?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bot/:botName/alias/:botAlias/user/:userId/session': {
      $delete:
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: PutSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: NotAcceptableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                Accept?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                dialogAction?:
                  | {
                      type?: {} | undefined
                      intentName?: {} | undefined
                      slots?: {} | undefined
                      slotToElicit?: {} | undefined
                      fulfillmentState?: {} | undefined
                      message?: {} | undefined
                      messageFormat?: {} | undefined
                    }
                  | undefined
                recentIntentSummaryView?: IntentSummary[] | undefined
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: BadGatewayException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/session/': {
      $get:
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              query: { checkpointLabelFilter?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              query: { checkpointLabelFilter?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              query: { checkpointLabelFilter?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              query: { checkpointLabelFilter?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              query: { checkpointLabelFilter?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/content#Content-Type': {
      $post:
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: PostContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: UnsupportedMediaTypeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: NotAcceptableException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: RequestTimeoutException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: BadGatewayException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'x-amz-lex-session-attributes'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                Accept?: string | undefined
                'x-amz-lex-active-contexts'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream: string } }
            output: LoopDetectedException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/text': {
      $post:
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: PostTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: BadGatewayException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { botName: string; botAlias: string; userId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                sessionAttributes?: { [x: string]: String } | undefined
                requestAttributes?: { [x: string]: String } | undefined
                inputText: string
                activeContexts?: ActiveContext[] | undefined
              }
            }
            output: LoopDetectedException
            outputFormat: 'json'
            status: 487
          }
    }
  },
  '/'
>
export default routes
