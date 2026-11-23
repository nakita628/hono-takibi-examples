type About = {
  apiReleaseDateIso8601?: string | undefined
  apiVersion?: { majorNumber?: number | undefined; minorNumber?: number | undefined } | undefined
  availableLanguagesIso639_1?: string | undefined
}
type Ec = {
  alphabetSequence?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
  apiVersion?: string | undefined
  detectedKeyboard?: string | undefined
  efficiency?: number | undefined
  entropy?: number | undefined
  entropyDistribution?:
    | {
        char?: string | undefined
        l33tchar?: string | undefined
        percentage?: number | undefined
      }[]
    | undefined
  idealEntropy?: number | undefined
  keyboardSequence?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
  l33tPassword?: string | undefined
  nonUniformEntropyDistributionPenalty?: number | undefined
  numberSequence?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
  password?: string | undefined
  passwordLength?: number | undefined
  penalty?: number | undefined
  repeatedChars?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
  requestId?: string | undefined
  requestTimestamp?: number | undefined
  summary?: string[] | undefined
  total?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
  words?:
    | { char?: string | undefined; l33tchar?: string | undefined; penalty?: number | undefined }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/about': {
      $get:
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: About
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: About
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: About
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { outputFormat?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ec': {
      $get:
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: Ec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: Ec
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: Ec
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                password: string
                outputFormat?: string | undefined
                penalty?: number | undefined
                reqId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
