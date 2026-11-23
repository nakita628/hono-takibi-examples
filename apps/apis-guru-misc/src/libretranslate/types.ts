type Detections = { confidence?: number | undefined; language?: string | undefined }[]
type ErrorResponse = { error?: string | undefined }
type ErrorSlowDown = { error?: string | undefined }
type FrontendSettings = {
  apiKeys?: boolean | undefined
  charLimit?: number | undefined
  frontendTimeout?: number | undefined
  keyRequired?: boolean | undefined
  language?:
    | {
        source?: { code?: string | undefined; name?: string | undefined } | undefined
        target?: { code?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
  suggestions?: boolean | undefined
  supportedFilesFormat?: string[] | undefined
}
type Languages = {
  code?: string | undefined
  name?: string | undefined
  targets?: string[] | undefined
}[]
type SuggestResponse = { success?: boolean | undefined }
type Translate = { translatedText?: string | { [x: string]: unknown }[] | undefined }
type TranslateFile = { translatedFileUrl?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/detect': {
      $post:
        | {
            input: { json: string } & { form: string }
            output: Detections
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorSlowDown
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/frontend/settings': {
      $get: { input: {}; output: FrontendSettings; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/languages': { $get: { input: {}; output: Languages; outputFormat: 'text'; status: 200 } }
  } & {
    '/suggest': {
      $post:
        | {
            input: { json: string } & { form: string }
            output: SuggestResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/translate': {
      $post:
        | {
            input: { json: string } & { form: string }
            output: Translate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorSlowDown
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: string } & { form: string }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/translate_file': {
      $post:
        | { input: { form: string }; output: TranslateFile; outputFormat: 'text'; status: 200 }
        | { input: { form: string }; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: { form: string }; output: ErrorResponse; outputFormat: 'text'; status: 403 }
        | { input: { form: string }; output: ErrorSlowDown; outputFormat: 'text'; status: 429 }
        | { input: { form: string }; output: ErrorResponse; outputFormat: 'text'; status: 500 }
    }
  },
  '/'
>
export default routes
