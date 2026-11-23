type BalanceResponse = {
  data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: number | undefined
}
type _400 = {
  data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: number | undefined
}
type _401 = {
  data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: number | undefined
}
type _403 = {
  data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: number | undefined
}
type _422 = {
  data?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: number | undefined
}
type IBANResult = {
  data?: { [x: string]: unknown } | undefined
  expremental?: number | undefined
  message?: string | undefined
  result?: number | undefined
  validations?: { [x: string]: unknown }[] | undefined
}
type IBANResultBasic = {
  data?: { [x: string]: unknown } | undefined
  expremental?: number | undefined
  message?: string | undefined
  result?: number | undefined
  validations?: { [x: string]: unknown }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/balance': {
      $get:
        | { input: {}; output: BalanceResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: _400; outputFormat: 'json'; status: 400 }
        | { input: {}; output: _401; outputFormat: 'json'; status: 401 }
        | { input: {}; output: _403; outputFormat: 'json'; status: 403 }
        | { input: {}; output: _422; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/validate': {
      $get:
        | {
            input: { query: { iban: string } }
            output: IBANResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { iban: string } }; output: _400; outputFormat: 'json'; status: 400 }
        | { input: { query: { iban: string } }; output: _401; outputFormat: 'json'; status: 401 }
        | { input: { query: { iban: string } }; output: _403; outputFormat: 'json'; status: 403 }
        | { input: { query: { iban: string } }; output: _422; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/validate-basic': {
      $get:
        | {
            input: { query: { iban: string } }
            output: IBANResultBasic
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { iban: string } }; output: _400; outputFormat: 'json'; status: 400 }
        | { input: { query: { iban: string } }; output: _401; outputFormat: 'json'; status: 401 }
        | { input: { query: { iban: string } }; output: _403; outputFormat: 'json'; status: 403 }
        | { input: { query: { iban: string } }; output: _422; outputFormat: 'json'; status: 422 }
    }
  },
  '/'
>
export default routes
