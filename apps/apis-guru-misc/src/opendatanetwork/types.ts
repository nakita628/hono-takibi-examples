declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data/v1/availability/': {
      $get: {
        input: { query: { entity_id: string; app_token?: string | undefined } } & {
          header: { 'X-App-Token'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/data/v1/constraint/:variable': {
      $get: {
        input: { param: { variable: string } } & {
          query: { entity_id: string; constraint: string; app_token?: string | undefined }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/data/v1/map/new': {
      $get: {
        input: {
          query: {
            variable: string
            entity_id: string
            constraint?: string | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/data/v1/values': {
      $get: {
        input: {
          query: {
            variable: string
            entity_id?: string | undefined
            forecast?: number | undefined
            describe?: boolean | undefined
            format?: 'google' | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/entity/v1': {
      $get: {
        input: {
          query: {
            entity_id?: string | undefined
            entity_name?: string | undefined
            entity_type?: string | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/entity/v1/:relation': {
      $get: {
        input: { param: { relation: 'parent' | 'child' | 'sibling' | 'peer' } } & {
          query: {
            entity_id: string
            variable_id?: string | undefined
            limit?: number | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search/v1/dataset': {
      $get: {
        input: {
          query: {
            entity_id?: string | undefined
            dataset_id?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search/v1/question': {
      $get: {
        input: {
          query: {
            query: string
            limit?: number | undefined
            offset?: number | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/suggest/v1/:type': {
      $get: {
        input: { param: { type: 'entity' | 'category' | 'publisher' | 'dataset' | 'question' } } & {
          query: {
            query: string
            limit?: number | undefined
            variable_id?: string | undefined
            app_token?: string | undefined
          }
        } & { header: { 'X-App-Token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
