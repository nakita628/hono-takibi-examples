declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/classifier/business/batch/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              progress?: number | undefined
              results?:
                | {
                    labels?: string[] | undefined
                    logo?: string | undefined
                    merchant?: string | undefined
                    transaction_id?: string | undefined
                    website?: string | undefined
                  }[]
                | undefined
              status?: string | undefined
              updated_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/classifier/consumer/batch/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              progress?: number | undefined
              results?:
                | {
                    contact?: { email?: string | undefined; phone?: string | undefined } | undefined
                    labels?: string[] | undefined
                    location?:
                      | {
                          address?: string | undefined
                          city?: string | undefined
                          country?: string | undefined
                          lat?: number | undefined
                          lon?: number | undefined
                          postal_code?: string | undefined
                        }
                      | undefined
                    logo?: string | undefined
                    merchant?: string | undefined
                    person?: string | undefined
                    rating?:
                      | { reviews?: number | undefined; value?: number | undefined }
                      | undefined
                    transaction_id?: string | undefined
                    website?: string | undefined
                  }[]
                | undefined
              status?: string | undefined
              updated_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes
