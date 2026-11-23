type DeleteSessionResponse = {
  botId?: {} | undefined
  botAliasId?: {} | undefined
  localeId?: {} | undefined
  sessionId?: {} | undefined
}
type AccessDeniedException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type GetSessionResponse = {
  sessionId?: {} | undefined
  messages?: {} | undefined
  interpretations?: {} | undefined
  sessionState?:
    | {
        dialogAction?:
          | {
              type: {}
              slotToElicit?: {} | undefined
              slotElicitationStyle?: {} | undefined
              subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
            }
          | undefined
        intent?:
          | {
              name: {}
              slots?: {} | undefined
              state?: {} | undefined
              confirmationState?: {} | undefined
            }
          | undefined
        activeContexts?: {} | undefined
        sessionAttributes?: {} | undefined
        originatingRequestId?: {} | undefined
        runtimeHints?: { slotHints?: {} | undefined } | undefined
      }
    | undefined
}
type ImageResponseCard = {
  title: {}
  subtitle?: {} | undefined
  imageUrl?: {} | undefined
  buttons?: {} | undefined
}
type Message = {
  content?: {} | undefined
  contentType: {}
  imageResponseCard?: ImageResponseCard | undefined
}
type String = string
type PutSessionResponse = { audioStream?: {} | undefined }
type DependencyFailedException = { [x: string]: unknown }
type BadGatewayException = { [x: string]: unknown }
type RecognizeTextResponse = {
  messages?: {} | undefined
  sessionState?:
    | {
        dialogAction?:
          | {
              type: {}
              slotToElicit?: {} | undefined
              slotElicitationStyle?: {} | undefined
              subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
            }
          | undefined
        intent?:
          | {
              name: {}
              slots?: {} | undefined
              state?: {} | undefined
              confirmationState?: {} | undefined
            }
          | undefined
        activeContexts?: {} | undefined
        sessionAttributes?: {} | undefined
        originatingRequestId?: {} | undefined
        runtimeHints?: { slotHints?: {} | undefined } | undefined
      }
    | undefined
  interpretations?: {} | undefined
  requestAttributes?: {} | undefined
  sessionId?: {} | undefined
  recognizedBotMember?: { botId: {}; botName?: {} | undefined } | undefined
}
type RecognizeUtteranceResponse = { audioStream?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId': {
      $delete:
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: DeleteSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: PutSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                ResponseContentType?: string | undefined
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
                messages?: Message[] | undefined
                sessionState: {
                  dialogAction?:
                    | {
                        type: {}
                        slotToElicit?: {} | undefined
                        slotElicitationStyle?: {} | undefined
                        subSlotToElicit?: { name: {}; subSlotToElicit?: {} | undefined } | undefined
                      }
                    | undefined
                  intent?:
                    | {
                        name: {}
                        slots?: {} | undefined
                        state?: {} | undefined
                        confirmationState?: {} | undefined
                      }
                    | undefined
                  activeContexts?: {} | undefined
                  sessionAttributes?: {} | undefined
                  originatingRequestId?: {} | undefined
                  runtimeHints?: { slotHints?: {} | undefined } | undefined
                }
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: BadGatewayException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/text': {
      $post:
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: RecognizeTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
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
            } & {
              json: {
                text: string
                sessionState?:
                  | {
                      dialogAction?:
                        | {
                            type: {}
                            slotToElicit?: {} | undefined
                            slotElicitationStyle?: {} | undefined
                            subSlotToElicit?:
                              | { name: {}; subSlotToElicit?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      intent?:
                        | {
                            name: {}
                            slots?: {} | undefined
                            state?: {} | undefined
                            confirmationState?: {} | undefined
                          }
                        | undefined
                      activeContexts?: {} | undefined
                      sessionAttributes?: {} | undefined
                      originatingRequestId?: {} | undefined
                      runtimeHints?: { slotHints?: {} | undefined } | undefined
                    }
                  | undefined
                requestAttributes?: { [x: string]: String } | undefined
              }
            }
            output: BadGatewayException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/utterance#Content-Type': {
      $post:
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: RecognizeUtteranceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: DependencyFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              param: { botId: string; botAliasId: string; localeId: string; sessionId: string }
            } & {
              header: {
                'x-amz-lex-session-state'?: string | undefined
                'x-amz-lex-request-attributes'?: string | undefined
                'Content-Type': string
                'Response-Content-Type'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { inputStream?: string | undefined } }
            output: BadGatewayException
            outputFormat: 'json'
            status: 487
          }
    }
  },
  '/'
>
export default routes
