declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/globalwinescores/': {
      $get: {
        input: {
          query: {
            wine_id?: number[] | undefined
            vintage?: string | undefined
            color?: 'red' | 'white' | 'pink' | undefined
            is_primeurs?: boolean | undefined
            lwin?: string | undefined
            lwin_11?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            ordering?: 'date' | '-date' | 'score' | '-score' | undefined
          }
        } & { header: { Authorization?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/globalwinescores/latest/': {
      $get: {
        input: {
          query: {
            wine_id?: number[] | undefined
            vintage?: string | undefined
            color?: 'red' | 'white' | 'pink' | undefined
            is_primeurs?: boolean | undefined
            lwin?: string | undefined
            lwin_11?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            ordering?: 'date' | '-date' | 'score' | '-score' | undefined
          }
        } & { header: { Authorization?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
