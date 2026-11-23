type DeleteSessionResponse = {
  botName?: {} | undefined
  botAlias?: {} | undefined
  userId?: {} | undefined
  sessionId?: {} | undefined
}
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
      $delete: {
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
      $post: {
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
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/session/': {
      $get: {
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
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/content#Content-Type': {
      $post: {
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
    }
  } & {
    '/bot/:botName/alias/:botAlias/user/:userId/text': {
      $post: {
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
    }
  },
  '/'
>
export default routes
