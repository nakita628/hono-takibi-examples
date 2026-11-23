type Config = { providers: { [x: string]: unknown }; topics: { [x: string]: unknown }[] }
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type DiscordMessageRequest = {
  base64_message?: string | undefined
  channel: string
  message?: string | undefined
}
type SlackMessageRequest = {
  base64_message?: string | undefined
  channel: string
  message?: string | undefined
}
type SnsMessageRequest = { base64_message?: string | undefined; message?: string | undefined }
type TwilioMessageRequest = {
  base64_message?: string | undefined
  message?: string | undefined
  to: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/config': {
      $get:
        | {
            input: { header: { authorization?: string | undefined } }
            output: Config
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/discord': {
      $get:
        | {
            input: {
              query: {
                channel: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: DiscordMessageRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: DiscordMessageRequest
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/slack': {
      $get:
        | {
            input: {
              query: {
                channel: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: SlackMessageRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: SlackMessageRequest
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sns': {
      $get:
        | {
            input: {
              query: { message?: string | undefined; base64_message?: string | undefined }
            } & { header: { authorization?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { message?: string | undefined; base64_message?: string | undefined }
            } & { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { authorization?: string | undefined } } & { json: SnsMessageRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization?: string | undefined } } & { json: SnsMessageRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/topic/:topic_name': {
      $get:
        | {
            input: { param: { topic_name: string } } & {
              query: { message?: string | undefined; base64_message?: string | undefined }
            } & { header: { authorization?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topic_name: string } } & {
              query: { message?: string | undefined; base64_message?: string | undefined }
            } & { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/twilio': {
      $get:
        | {
            input: {
              query: {
                to: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                to: string
                message?: string | undefined
                base64_message?: string | undefined
              }
            } & { header: { authorization?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: TwilioMessageRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization?: string | undefined } } & {
              json: TwilioMessageRequest
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
