type Config = {
  moduleEnablementState?:
    | 'ENABLEMENT_STATE_UNSPECIFIED'
    | 'INHERITED'
    | 'ENABLED'
    | 'DISABLED'
    | undefined
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ContainerThreatDetectionSettings = {
  modules?: { [x: string]: Config } | undefined
  name?: string | undefined
  serviceAccount?: string | undefined
  serviceEnablementState?:
    | 'ENABLEMENT_STATE_UNSPECIFIED'
    | 'INHERITED'
    | 'ENABLED'
    | 'DISABLED'
    | undefined
  updateTime?: string | undefined
}
type WebSecurityScannerSettings = {
  modules?: { [x: string]: Config } | undefined
  name?: string | undefined
  serviceEnablementState?:
    | 'ENABLEMENT_STATE_UNSPECIFIED'
    | 'INHERITED'
    | 'ENABLED'
    | 'DISABLED'
    | undefined
  updateTime?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta2/:name': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: ContainerThreatDetectionSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ContainerThreatDetectionSettings }
        output: ContainerThreatDetectionSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:name:calculate': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: WebSecurityScannerSettings
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
