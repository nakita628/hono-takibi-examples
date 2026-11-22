type ValidationResult = { openapi: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/badge': {
      $get: { input: { query: { url: string } }; output: {}; outputFormat: string; status: 301 }
    }
  } & {
    '/convert': {
      $get:
        | {
            input: { query: { url: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              form: {
                filename?: string | undefined
                source?: string | undefined
                validate?: 'on' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                filename?: string | undefined
                source?: string | undefined
                validate?: 'on' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                filename?: string | undefined
                source?: string | undefined
                validate?: 'on' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                filename?: string | undefined
                source?: string | undefined
                validate?: 'on' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/status': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/validate': {
      $get:
        | {
            input: { query: { url: string } }
            output: ValidationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string } }
            output: ValidationResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { form: { filename?: string | undefined; source?: string | undefined } }
            output: ValidationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { filename?: string | undefined; source?: string | undefined } }
            output: ValidationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { filename?: string | undefined; source?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { filename?: string | undefined; source?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 400
          }
    }
  },
  '/'
>
export default routes
