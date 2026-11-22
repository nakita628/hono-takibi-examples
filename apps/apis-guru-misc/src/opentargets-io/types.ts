declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/platform/docs': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/platform/docs/swagger-ui': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/autocomplete': {
      $get: {
        input: { query: { q: string; size?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/platform/private/besthitsearch': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/disease': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/disease/:disease': {
      $get: { input: { param: { disease: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/drug/:DRUG_ID': {
      $get: {
        input: { param: { DRUG_ID: string } } & { query: { drug_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/platform/private/eco/:ECO_ID': {
      $get: { input: { param: { ECO_ID: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/enrichment/targets': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/quicksearch': {
      $get: {
        input: { query: { q: string; size?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/platform/private/relation': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/relation/disease/:disease': {
      $get: { input: { param: { disease: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/relation/target/:target': {
      $get: { input: { param: { target: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/target': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/target/expression': {
      $get: { input: { query: { gene: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/private/target/:target': {
      $get: { input: { param: { target: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/association': {
      $get: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/association/filter': {
      $get: {
        input: {
          query: {
            target?: string | undefined
            disease?: string | undefined
            therapeutic_area?: string | undefined
            datasource?: string | undefined
            datatype?: string | undefined
            pathway?: string | undefined
            target_class?: string | undefined
            uniprotkw?: string | undefined
            direct?: boolean | undefined
            datastructure?: string | undefined
            fields?: string | undefined
            facets?: boolean | undefined
            scorevalue_min?: number | undefined
            scorevalue_max?: number | undefined
            scorevalue_types?: string | undefined
            size?: number | undefined
            from?: number | undefined
            format?: string | undefined
            sort?: string | undefined
            search?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/evidence': {
      $get: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/evidence/filter': {
      $get: {
        input: {
          query: {
            target?: string | undefined
            disease?: string | undefined
            'data source'?: string | undefined
            datatype?: string | undefined
            pathway?: string | undefined
            uniprotkw?: string | undefined
            datastructure?: string | undefined
            fields?: string | undefined
            scorevalue_min?: number | undefined
            scorevalue_max?: number | undefined
            sort?: string | undefined
            size?: number | undefined
            from?: number | undefined
            format?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/search': {
      $get: {
        input: {
          query: {
            q: string
            size?: string | undefined
            from?: string | undefined
            filter?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/platform/public/utils/metrics': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/utils/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/utils/stats': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/utils/therapeuticareas': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/public/utils/version': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/platform/swagger': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
