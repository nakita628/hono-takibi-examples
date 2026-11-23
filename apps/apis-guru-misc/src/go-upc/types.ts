type Error = {
  code?: string | undefined
  codeType?: { [x: string]: unknown } | undefined
  error: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/code/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: {
              barcodeUrl?: string | undefined
              codeType?: 'UPC' | 'EAN' | 'ISBN' | undefined
              product?:
                | {
                    brand?: string | undefined
                    category?: string | undefined
                    description?: string | undefined
                    ean?: number | undefined
                    imageUrl?: string | undefined
                    name?: string | undefined
                    region?: string | undefined
                    specs?: string[][] | undefined
                    upc?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { code: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { code: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  },
  '/'
>
export default routes
