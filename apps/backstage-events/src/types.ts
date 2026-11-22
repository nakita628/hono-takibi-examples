type Event = { topic: string; payload: { [x: string]: unknown } }
type Error = {
  error: { name: string; message: string }
  request: { method: string; url: string }
  response: { statusCode: number }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bus/v1/events': {
      $post:
        | {
            input: { json: { event: Event; notifiedSubscribers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: { event: Event; notifiedSubscribers?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { event: Event; notifiedSubscribers?: string[] | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/bus/v1/subscriptions/:subscriptionId': {
      $put:
        | {
            input: { param: { subscriptionId: string } } & { json: { topics: string[] } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { subscriptionId: string } } & { json: { topics: string[] } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/bus/v1/subscriptions/:subscriptionId/events': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: { events: Event[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
