declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sms': {
      $post:
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 423
          }
    }
  } & {
    '/voice': {
      $post:
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: { 'message-id': string; delivered: true | false | 0 | 1; timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 423
          }
    }
  },
  '/'
>
export default routes
