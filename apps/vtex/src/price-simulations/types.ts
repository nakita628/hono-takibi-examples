declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/_v/custom-prices/rules': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            email?: { [x: string]: unknown } | undefined
            orderType?: string | undefined
            pricetable: string
            state?: string | undefined
          }
        }
        output: {
          email?: { [x: string]: unknown } | undefined
          id: number
          orderType?: string | undefined
          pricetable: string
          state?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/_v/custom-prices/rules/:priceAssociationId': {
      $delete: {
        input: { param: { priceAssociationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { priceAssociationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          email?: { [x: string]: unknown } | undefined
          id: number
          orderType?: string | undefined
          pricetable: string
          state?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { priceAssociationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { orderType: string; pricetable: string; state: string } }
        output: {
          email?: { [x: string]: unknown } | undefined
          id: number
          orderType?: string | undefined
          pricetable: string
          state?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/_v/custom-prices/session/schema': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: { fields: { name: string; type: string }[]; useEmail?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { fields: { name: string; type: string }[]; useEmail?: boolean | undefined }
        }
        output: { fields: { name: string; type: string }[]; useEmail?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sessions/': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { public: { customSessionKeys: { value: string } } }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
