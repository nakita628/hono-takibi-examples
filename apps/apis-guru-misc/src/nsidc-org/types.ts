declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Facets': {
      $get:
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/OpenSearch': {
      $get:
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                searchTerms?: string | undefined
                count?: number | undefined
                startIndex?: number | undefined
                spatial?: string | undefined
                sortKeys?:
                  | 'score,,desc'
                  | 'spatial_area,,asc'
                  | 'spatial_area,,desc'
                  | 'temporal_duration,,asc'
                  | 'temporal_duration,,desc'
                  | 'updated,,desc'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                facetFilters?: string | undefined
                source?: 'NSIDC' | 'ADE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/OpenSearchDescription': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/suggest': {
      $get:
        | {
            input: { query: { q: string; source: 'NSIDC' | 'ADE' } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string; source: 'NSIDC' | 'ADE' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { q: string; source: 'NSIDC' | 'ADE' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
