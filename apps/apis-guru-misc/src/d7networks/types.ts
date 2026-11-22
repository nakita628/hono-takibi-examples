type SendSMSRequest = { content: string; from: string; to: bigint }
type Message = { content: string; from: string; to: string[] }
type BulkSMSRequest = { messages: Message[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/balance': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/send': {
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & { json: SendSMSRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & { json: SendSMSRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sendbatch': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: BulkSMSRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
