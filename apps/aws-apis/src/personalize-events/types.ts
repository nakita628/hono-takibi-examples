type Event = {
  eventId?: {} | undefined
  eventType: {}
  eventValue?: {} | undefined
  itemId?: {} | undefined
  properties?: { [x: string]: unknown } | undefined
  sentAt: {}
  recommendationId?: {} | undefined
  impression?: {} | undefined
  metricAttribution?: { eventAttributionSource: {} } | undefined
}
type Item = { itemId: {}; properties?: { [x: string]: unknown } | undefined }
type User = { userId: {}; properties?: { [x: string]: unknown } | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events': {
      $post: {
        input: {
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
            trackingId: string
            userId?: string | undefined
            sessionId: string
            eventList: Event[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/items': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { datasetArn: string; items: Item[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { datasetArn: string; users: User[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
