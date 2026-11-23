type QueueMessage = {
  contentType?: string | undefined
  createDate?: bigint | undefined
  data?: string | undefined
  href?: string | undefined
  messageId?: string | undefined
  queueMessageId?: string | undefined
  queueName: string
  receivingRegion?: string | undefined
  sendingRegion?: string | undefined
}
type Queue = { name: string }
type ApiResponse = {
  count?: number | undefined
  message?: string | undefined
  queueMessages?: QueueMessage[] | undefined
  queues?: Queue[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/queues': {
      $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 }
      $post:
        | { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/queues/:queueName': {
      $delete:
        | {
            input: { param: { queueName: string } } & { query: { confirm?: boolean | undefined } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueName: string } } & { query: { confirm?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/queues/:queueName/config': {
      $get:
        | {
            input: { param: { queueName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { queueName: string } }; output: {}; outputFormat: string; status: 400 }
      $put:
        | {
            input: { param: { queueName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { queueName: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/queues/:queueName/data/:queueMessageId': {
      $get:
        | {
            input: { param: { queueName: string; queueMessageId: string } }
            output: ApiResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { queueName: string; queueMessageId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { queueName: string; queueMessageId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/queues/:queueName/messages': {
      $get:
        | {
            input: { param: { queueName: string } } & { query: { count?: string | undefined } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueName: string } } & { query: { count?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: {
        input: { param: { queueName: string } } & {
          query: {
            regions?: string | undefined
            delay?: string | undefined
            expiration?: string | undefined
            contentType: string
          }
        } & { json: string[] }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queues/:queueName/messages/:queueMessageId': {
      $delete:
        | {
            input: { param: { queueName: string; queueMessageId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueName: string; queueMessageId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/status': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
