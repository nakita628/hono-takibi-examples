declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/_v/cms/api/:builderId/': {
      $get:
        | {
            input: { param: { builderId: string } }
            output: {
              contentTypes?:
                | {
                    configurationSchemaSets?:
                      | {
                          configurations?: { [x: string]: unknown }[] | undefined
                          name?: string | undefined
                        }[]
                      | undefined
                    id?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { builderId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { builderId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/_v/cms/api/:builderId/:content-type': {
      $get:
        | {
            input: { param: { builderId: string; 'content-type': string } } & {
              query: {
                versionId?: string | undefined
                releaseId?: string | undefined
                'filters[{field}]'?: string | undefined
              }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    parameters?: { [x: string]: unknown } | undefined
                    sections?:
                      | {
                          data?: { [x: string]: unknown } | undefined
                          id?: string | undefined
                          name?: string | undefined
                        }[]
                      | undefined
                    status?: string | undefined
                    type?: string | undefined
                    versionId?: string | undefined
                    versionStatus?: string | undefined
                  }[]
                | undefined
              hasNextPage?: boolean | undefined
              totalItems?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { builderId: string; 'content-type': string } } & {
              query: {
                versionId?: string | undefined
                releaseId?: string | undefined
                'filters[{field}]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { builderId: string; 'content-type': string } } & {
              query: {
                versionId?: string | undefined
                releaseId?: string | undefined
                'filters[{field}]'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/_v/cms/api/:builderId/:content-type/:document-id/': {
      $get:
        | {
            input: {
              param: { builderId: string; 'content-type': string; 'document-id': string }
            } & { query: { versionId?: string | undefined; releaseId?: string | undefined } }
            output: {
              id: string
              name: string
              sections?: { data: { [x: string]: unknown }; id: string; name: string }[] | undefined
              status: string
              type: string
              versionId?: string | undefined
              versionStatus?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { builderId: string; 'content-type': string; 'document-id': string }
            } & { query: { versionId?: string | undefined; releaseId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { builderId: string; 'content-type': string; 'document-id': string }
            } & { query: { versionId?: string | undefined; releaseId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
