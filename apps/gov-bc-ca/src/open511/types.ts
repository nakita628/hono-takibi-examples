declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/areas': {
      $get: {
        input: { query: { format?: 'json' | 'xml' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/events': {
      $get: {
        input: {
          query: {
            format?: 'json' | 'xml' | undefined
            status?: 'ALL' | 'ACTIVE' | 'ARCHIVED' | undefined
            severity?: string | undefined
            jurisdiction?: string | undefined
            event_type?:
              | 'CONSTRUCTION'
              | 'SPECIAL_EVENT'
              | 'INCIDENT'
              | 'WEATHER_CONDITION'
              | 'ROAD_CONDITION'
              | undefined
            created?: string | undefined
            updated?: string | undefined
            road_name?: string | undefined
            area_id?: string | undefined
            bbox?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/jurisdiction': {
      $get: {
        input: { query: { format?: 'json' | 'xml' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/jurisdictiongeography': {
      $get: {
        input: { query: { format?: 'json' | 'xml' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
