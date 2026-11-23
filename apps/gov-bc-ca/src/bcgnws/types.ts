declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/featureCategories': {
      $get: {
        input: { query: { outputFormat: 'json' | 'xml' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/featureClasses': {
      $get: {
        input: { query: { outputFormat: 'json' | 'xml' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/featureTypes': {
      $get: {
        input: { query: { outputFormat: 'json' | 'xml' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/features/:featureId': {
      $get:
        | { input: { param: { featureId: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { featureId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/nameAuthorities': {
      $get: {
        input: { query: { outputFormat: 'json' | 'xml' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/names/changes': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                fromDate: number
                toDate: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                fromDate: number
                toDate: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/decisions/recent': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                days: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                days: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/decisions/year': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                year: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                year: number
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/inside': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                bbox: string
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                bbox: string
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/near': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                featurePoint: string
                distance: string
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                featurePoint: string
                distance: string
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/notOfficial/search': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/official/search': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/search': {
      $get:
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                outputFormat: 'json' | 'xml' | 'kml' | 'csv'
                name: string
                exactSpelling?: 0 | 1 | undefined
                featureClass?: string | undefined
                featureCategory?: string | undefined
                featureType?: string | undefined
                sortBy?: 'relevance' | 'name' | 'featureType' | 'decisionDate' | undefined
                outputSRS?:
                  | 4326
                  | 4269
                  | 3005
                  | 3857
                  | 26907
                  | 26908
                  | 26909
                  | 26910
                  | 26911
                  | undefined
                embed?: 0 | 1 | undefined
                outputStyle?: 'summary' | 'detail' | undefined
                itemsPerPage?: number | undefined
                startIndex?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/names/:nameId.:outputFormat': {
      $get:
        | {
            input: {
              param: { nameId: number; outputFormat: 'json' | 'xml' | 'kml' | 'csv' | 'html' }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { nameId: number; outputFormat: 'json' | 'xml' | 'kml' | 'csv' | 'html' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
