type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type AdhocprofilesV1AdHocProfilesDiffRequest = {
  leftId?: string | undefined
  rightId?: string | undefined
  profileType?: (string | null) | undefined
  maxNodes?: (bigint | string | null) | undefined
}
type AdhocprofilesV1AdHocProfilesDiffResponse = {
  profileTypes?: string[] | undefined
  flamebearerProfile?: string | undefined
}
type ConnectErrorDetailsAny = {
  type?: string | undefined
  value?: File | undefined
  debug?: { [x: string]: unknown } | undefined
}
type ConnectError = {
  code?:
    | 'canceled'
    | 'unknown'
    | 'invalid_argument'
    | 'deadline_exceeded'
    | 'not_found'
    | 'already_exists'
    | 'permission_denied'
    | 'resource_exhausted'
    | 'failed_precondition'
    | 'aborted'
    | 'out_of_range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data_loss'
    | 'unauthenticated'
    | undefined
  message?: string | undefined
  details?: ConnectErrorDetailsAny[] | undefined
}
type AdhocprofilesV1AdHocProfilesGetRequest = {
  id?: string | undefined
  profileType?: (string | null) | undefined
  maxNodes?: (bigint | string | null) | undefined
}
type AdhocprofilesV1AdHocProfilesGetResponse = {
  id?: string | undefined
  name?: string | undefined
  uploadedAt?: bigint | string | undefined
  profileType?: string | undefined
  profileTypes?: string[] | undefined
  flamebearerProfile?: string | undefined
}
type AdhocprofilesV1AdHocProfilesListRequest = {}
type AdhocprofilesV1AdHocProfilesProfileMetadata = {
  id?: string | undefined
  name?: string | undefined
  uploadedAt?: bigint | string | undefined
}
type AdhocprofilesV1AdHocProfilesListResponse = {
  profiles?: AdhocprofilesV1AdHocProfilesProfileMetadata[] | undefined
}
type AdhocprofilesV1AdHocProfilesUploadRequest = {
  name?: string | undefined
  profile?: string | undefined
  maxNodes?: (bigint | string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/adhocprofiles.v1.AdHocProfileService/Diff': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesDiffRequest }
            output: AdhocprofilesV1AdHocProfilesDiffResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesDiffRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/adhocprofiles.v1.AdHocProfileService/Get': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesGetRequest }
            output: AdhocprofilesV1AdHocProfilesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesGetRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/adhocprofiles.v1.AdHocProfileService/List': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesListRequest }
            output: AdhocprofilesV1AdHocProfilesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesListRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/adhocprofiles.v1.AdHocProfileService/Upload': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesUploadRequest }
            output: AdhocprofilesV1AdHocProfilesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: AdhocprofilesV1AdHocProfilesUploadRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
