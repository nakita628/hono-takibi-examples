type Standarderror = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/versions/publish/anon': {
      $post:
        | {
            input: {
              json: {
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: { url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/versions/:versionId/export/:format': {
      $get:
        | {
            input: {
              param: {
                versionId: string
                format:
                  | 'oas.json'
                  | 'oas.yaml'
                  | 'raml08.yaml'
                  | 'raml10.yaml'
                  | 'stoplight.json'
                  | 'stoplight.yaml'
              }
            }
            output: { [x: string]: unknown } | string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                versionId: string
                format:
                  | 'oas.json'
                  | 'oas.yaml'
                  | 'raml08.yaml'
                  | 'raml10.yaml'
                  | 'stoplight.json'
                  | 'stoplight.yaml'
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                versionId: string
                format:
                  | 'oas.json'
                  | 'oas.yaml'
                  | 'raml08.yaml'
                  | 'raml10.yaml'
                  | 'stoplight.json'
                  | 'stoplight.yaml'
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:versionId/import': {
      $put:
        | {
            input: { param: { versionId: string } } & {
              json: {
                options?:
                  | {
                      removeExtraEndpoints?: boolean | undefined
                      removeExtraSchemas?: boolean | undefined
                      removeExtraTextSections?: boolean | undefined
                      removeExtraTraits?: boolean | undefined
                    }
                  | undefined
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: {
              data: {
                endpointCount: number
                format: 'RAML08' | 'RAML10' | 'SWAGGER' | 'STOPLIGHTX'
                projectId: string
                schemaCount: number
                testCount: number
                textSectionCount: number
                traitCount: number
                versionId: string
                workspaceId: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionId: string } } & {
              json: {
                options?:
                  | {
                      removeExtraEndpoints?: boolean | undefined
                      removeExtraSchemas?: boolean | undefined
                      removeExtraTextSections?: boolean | undefined
                      removeExtraTraits?: boolean | undefined
                    }
                  | undefined
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } } & {
              json: {
                options?:
                  | {
                      removeExtraEndpoints?: boolean | undefined
                      removeExtraSchemas?: boolean | undefined
                      removeExtraTextSections?: boolean | undefined
                      removeExtraTraits?: boolean | undefined
                    }
                  | undefined
                specData?: { [x: string]: unknown } | string | undefined
                url?: string | undefined
              }
            }
            output: Standarderror
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:versionId/publish': {
      $post:
        | {
            input: { param: { versionId: string } }
            output: { customDomain?: string | undefined; url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionId: string } }
            output: Standarderror
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } }
            output: Standarderror
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:versionId/unpublish': {
      $put:
        | {
            input: { param: { versionId: string } }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionId: string } }
            output: Standarderror
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } }
            output: Standarderror
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
