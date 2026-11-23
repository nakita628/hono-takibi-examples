type Api = {
  operation?: string | undefined
  protocol?: string | undefined
  service?: string | undefined
  version?: string | undefined
}
type Peer = {
  ip?: string | undefined
  labels?: { [x: string]: string } | undefined
  port?: string | undefined
  principal?: string | undefined
  regionCode?: string | undefined
}
type Auth = {
  accessLevels?: string[] | undefined
  audiences?: string[] | undefined
  claims?: { [x: string]: { [x: string]: unknown } } | undefined
  presenter?: string | undefined
  principal?: string | undefined
}
type Request = {
  auth?: Auth | undefined
  headers?: { [x: string]: string } | undefined
  host?: string | undefined
  id?: string | undefined
  method?: string | undefined
  path?: string | undefined
  protocol?: string | undefined
  query?: string | undefined
  reason?: string | undefined
  scheme?: string | undefined
  size?: string | undefined
  time?: string | undefined
}
type Resource = {
  annotations?: { [x: string]: string } | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  location?: string | undefined
  name?: string | undefined
  service?: string | undefined
  type?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type Response = {
  backendLatency?: string | undefined
  code?: string | undefined
  headers?: { [x: string]: string } | undefined
  size?: string | undefined
  time?: string | undefined
}
type AttributeContext = {
  api?: Api | undefined
  destination?: Peer | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
  origin?: Peer | undefined
  request?: Request | undefined
  resource?: Resource | undefined
  response?: Response | undefined
  source?: Peer | undefined
}
type ResourceInfo = {
  container?: string | undefined
  location?: string | undefined
  name?: string | undefined
  permission?: string | undefined
  type?: string | undefined
}
type CheckRequest = {
  attributes?: AttributeContext | undefined
  flags?: string | undefined
  resources?: ResourceInfo[] | undefined
  serviceConfigId?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type CheckResponse = { headers?: { [x: string]: string } | undefined; status?: Status | undefined }
type ReportRequest = {
  operations?: AttributeContext[] | undefined
  serviceConfigId?: string | undefined
}
type ReportResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/services/:serviceName:check': {
      $post: {
        input: { param: { serviceName: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CheckRequest }
        output: CheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/services/:serviceName:report': {
      $post: {
        input: { param: { serviceName: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ReportRequest }
        output: ReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
