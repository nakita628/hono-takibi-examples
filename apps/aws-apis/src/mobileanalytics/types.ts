type Event = {
  eventType: {}
  timestamp: {}
  session?:
    | {
        id?: {} | undefined
        duration?: {} | undefined
        startTimestamp?: {} | undefined
        stopTimestamp?: {} | undefined
      }
    | undefined
  version?: {} | undefined
  attributes?: {} | undefined
  metrics?: {} | undefined
}
type BadRequestException = { message?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2014-06-05/events#x-amz-Client-Context': {
      $post:
        | {
            input: {
              header: {
                'x-amz-Client-Context': string
                'x-amz-Client-Context-Encoding'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { events: Event[] } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              header: {
                'x-amz-Client-Context': string
                'x-amz-Client-Context-Encoding'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { events: Event[] } }
            output: BadRequestException
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
