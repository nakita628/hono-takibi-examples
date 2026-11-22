declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/incidents': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            occurred_before?: number | undefined
            occurred_after?: number | undefined
            incident_type?:
              | 'crash'
              | 'hazard'
              | 'theft'
              | 'unconfirmed'
              | 'infrastructure_issue'
              | 'chop_shop'
              | undefined
            proximity?: string | undefined
            proximity_square?: number | undefined
            query?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/incidents/:id': {
      $get: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/locations': {
      $get: {
        input: {
          query: {
            occurred_before?: number | undefined
            occurred_after?: number | undefined
            incident_type?:
              | 'crash'
              | 'hazard'
              | 'theft'
              | 'unconfirmed'
              | 'infrastructure_issue'
              | 'chop_shop'
              | undefined
            proximity?: string | undefined
            proximity_square?: number | undefined
            query?: string | undefined
            limit?: number | undefined
            all?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/locations/markers': {
      $get: {
        input: {
          query: {
            occurred_before?: number | undefined
            occurred_after?: number | undefined
            incident_type?:
              | 'crash'
              | 'hazard'
              | 'theft'
              | 'unconfirmed'
              | 'infrastructure_issue'
              | 'chop_shop'
              | undefined
            proximity?: string | undefined
            proximity_square?: number | undefined
            query?: string | undefined
            limit?: number | undefined
            all?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
