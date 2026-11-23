type DirectoryList = {
  discoveryVersion?: string | undefined
  items?:
    | {
        description?: string | undefined
        discoveryLink?: string | undefined
        discoveryRestUrl?: string | undefined
        documentationLink?: string | undefined
        icons?: { x16?: string | undefined; x32?: string | undefined } | undefined
        id?: string | undefined
        kind?: string | undefined
        labels?: string[] | undefined
        name?: string | undefined
        preferred?: boolean | undefined
        title?: string | undefined
        version?: string | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type JsonSchema = {
  $ref?: string | undefined
  additionalProperties?: JsonSchema | undefined
  annotations?: { required?: string[] | undefined } | undefined
  description?: string | undefined
  enum?: string[] | undefined
  enumDescriptions?: string[] | undefined
  format?: string | undefined
  id?: string | undefined
  items?: JsonSchema | undefined
  location?: string | undefined
  maximum?: string | undefined
  minimum?: string | undefined
  pattern?: string | undefined
  properties?: { [x: string]: JsonSchema } | undefined
  readOnly?: boolean | undefined
  repeated?: boolean | undefined
  required?: boolean | undefined
  type?: string | undefined
  variant?:
    | {
        discriminant?: string | undefined
        map?: { $ref?: string | undefined; type_value?: string | undefined }[] | undefined
      }
    | undefined
}
type RestMethod = {
  description?: string | undefined
  etagRequired?: boolean | undefined
  flatPath?: string | undefined
  httpMethod?: string | undefined
  id?: string | undefined
  mediaUpload?:
    | {
        accept?: string[] | undefined
        maxSize?: string | undefined
        protocols?:
          | {
              resumable?: { multipart?: boolean | undefined; path?: string | undefined } | undefined
              simple?: { multipart?: boolean | undefined; path?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  parameterOrder?: string[] | undefined
  parameters?: { [x: string]: JsonSchema } | undefined
  path?: string | undefined
  request?: { $ref?: string | undefined; parameterName?: string | undefined } | undefined
  response?: { $ref?: string | undefined } | undefined
  scopes?: string[] | undefined
  supportsMediaDownload?: boolean | undefined
  supportsMediaUpload?: boolean | undefined
  supportsSubscription?: boolean | undefined
  useMediaDownloadService?: boolean | undefined
}
type RestResource = {
  methods?: { [x: string]: RestMethod } | undefined
  resources?: { [x: string]: RestResource } | undefined
}
type RestDescription = {
  auth?:
    | {
        oauth2?:
          | { scopes?: { [x: string]: { description?: string | undefined } } | undefined }
          | undefined
      }
    | undefined
  basePath?: string | undefined
  baseUrl?: string | undefined
  batchPath?: string | undefined
  canonicalName?: string | undefined
  description?: string | undefined
  discoveryVersion?: string | undefined
  documentationLink?: string | undefined
  etag?: string | undefined
  exponentialBackoffDefault?: boolean | undefined
  features?: string[] | undefined
  icons?: { x16?: string | undefined; x32?: string | undefined } | undefined
  id?: string | undefined
  kind?: string | undefined
  labels?: string[] | undefined
  methods?: { [x: string]: RestMethod } | undefined
  name?: string | undefined
  ownerDomain?: string | undefined
  ownerName?: string | undefined
  packagePath?: string | undefined
  parameters?: { [x: string]: JsonSchema } | undefined
  protocol?: string | undefined
  resources?: { [x: string]: RestResource } | undefined
  revision?: string | undefined
  rootUrl?: string | undefined
  schemas?: { [x: string]: JsonSchema } | undefined
  servicePath?: string | undefined
  title?: string | undefined
  version?: string | undefined
  version_module?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            preferred?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: DirectoryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:api/:version/rest': {
      $get: {
        input: { param: { api: string; version: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: RestDescription
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
