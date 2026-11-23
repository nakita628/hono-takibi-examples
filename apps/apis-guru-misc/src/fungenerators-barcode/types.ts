declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/barcode/decode': {
      $post:
        | {
            input: { json: { barimage: File } } & { form: { barimage: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { barimage: File } } & { form: { barimage: File } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/barcode/decode/types': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/barcode/encode': {
      $get:
        | {
            input: {
              query: {
                number: string
                barcodeformat?: string | undefined
                outputformat?: string | undefined
                widthfactor?: number | undefined
                totalheight?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                number: string
                barcodeformat?: string | undefined
                outputformat?: string | undefined
                widthfactor?: number | undefined
                totalheight?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/barcode/encode/types': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  },
  '/'
>
export default routes
