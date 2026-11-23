type OffsetTransition = {
  dateTime?: string | undefined
  offsetAfter?: Offset | undefined
  offsetBefore?: Offset | undefined
}
type Rules = { transitions?: OffsetTransition[] | undefined }
type Offset = { id?: string | undefined; rules?: Rules | undefined }
type ProductStock = { test_param?: SalesLine[] | undefined }
type SalesLine = { stock?: ProductStock | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything': {
      $get: {
        input: {}
        output: {
          dateTime?: string | undefined
          offsetAfter?: Offset | undefined
          offsetBefore?: Offset | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { circular?: Offset | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put:
        | {
            input: { header: { content?: SalesLine[] | undefined } }
            output: SalesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { content?: SalesLine[] | undefined } }
            output: SalesLine
            outputFormat: 'json'
            status: 201
          }
    }
  },
  '/'
>
export default routes
