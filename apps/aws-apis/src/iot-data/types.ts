type DeleteThingShadowResponse = { payload: {} }
type GetThingShadowResponse = { payload?: {} | undefined }
type UpdateThingShadowResponse = { payload?: {} | undefined }
type GetRetainedMessageResponse = {
  topic?: {} | undefined
  payload?: {} | undefined
  qos?: {} | undefined
  lastModifiedTime?: {} | undefined
  userProperties?: {} | undefined
}
type ListNamedShadowsForThingResponse = {
  results?: {} | undefined
  nextToken?: {} | undefined
  timestamp?: {} | undefined
}
type ListRetainedMessagesResponse = { retainedTopics?: {} | undefined; nextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/things/:thingName/shadow': {
      $delete: {
        input: { param: { thingName: string } } & { query: { name?: string | undefined } } & {
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
        output: DeleteThingShadowResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { thingName: string } } & { query: { name?: string | undefined } } & {
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
        output: GetThingShadowResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { thingName: string } } & { query: { name?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { payload: string } }
        output: UpdateThingShadowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/retainedMessage/:topic': {
      $get: {
        input: { param: { topic: string } } & {
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
        output: GetRetainedMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/things/shadow/ListNamedShadowsForThing/:thingName': {
      $get: {
        input: { param: { thingName: string } } & {
          query: { nextToken?: string | undefined; pageSize?: number | undefined }
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
        output: ListNamedShadowsForThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/retainedMessage': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListRetainedMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics/:topic': {
      $post: {
        input: { param: { topic: string } } & {
          query: {
            qos?: number | undefined
            retain?: boolean | undefined
            contentType?: string | undefined
            responseTopic?: string | undefined
            messageExpiry?: number | undefined
          }
        } & {
          header: {
            'x-amz-mqtt5-user-properties'?: string | undefined
            'x-amz-mqtt5-payload-format-indicator'?: 'UNSPECIFIED_BYTES' | 'UTF8_DATA' | undefined
            'x-amz-mqtt5-correlation-data'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { payload?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
