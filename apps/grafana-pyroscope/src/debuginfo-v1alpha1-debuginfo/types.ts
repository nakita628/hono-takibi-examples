type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type DebuginfoV1alpha1DeleteDebuginfoRequest = { gnuBuildId?: string | undefined }
type DebuginfoV1alpha1DeleteDebuginfoResponse = {}
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
type DebuginfoV1alpha1ListDebuginfoRequest = {}
type DebuginfoV1alpha1FileMetadataType =
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_EXECUTABLE_FULL'
  | 'TYPE_EXECUTABLE_NO_TEXT'
type DebuginfoV1alpha1FileMetadata = {
  gnuBuildId?: string | undefined
  goBuildId?: string | undefined
  otelFileId?: string | undefined
  name?: string | undefined
  type?: DebuginfoV1alpha1FileMetadataType | undefined
}
type DebuginfoV1alpha1ObjectMetadataState = 'STATE_UPLOADING' | 'STATE_UPLOADED'
type GoogleProtobufTimestamp = string
type DebuginfoV1alpha1ObjectMetadata = {
  file?: DebuginfoV1alpha1FileMetadata | undefined
  state?: DebuginfoV1alpha1ObjectMetadataState | undefined
  startedAt?: GoogleProtobufTimestamp | undefined
  finishedAt?: GoogleProtobufTimestamp | undefined
  sizeBytes?: bigint | string | undefined
}
type DebuginfoV1alpha1ListDebuginfoResponse = {
  object?: DebuginfoV1alpha1ObjectMetadata[] | undefined
}
type DebuginfoV1alpha1ShouldInitiateUploadRequest = {
  file?: DebuginfoV1alpha1FileMetadata | undefined
}
type DebuginfoV1alpha1ShouldInitiateUploadResponse = {
  shouldInitiateUpload?: boolean | undefined
  reason?: string | undefined
}
type DebuginfoV1alpha1UploadFinishedRequest = { gnuBuildId?: string | undefined }
type DebuginfoV1alpha1UploadFinishedResponse = {}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1DeleteDebuginfoRequest }
            output: DebuginfoV1alpha1DeleteDebuginfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1DeleteDebuginfoRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debuginfo.v1alpha1.DebuginfoService/ListDebuginfo': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1ListDebuginfoRequest }
            output: DebuginfoV1alpha1ListDebuginfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1ListDebuginfoRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1ShouldInitiateUploadRequest }
            output: DebuginfoV1alpha1ShouldInitiateUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1ShouldInitiateUploadRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/debuginfo.v1alpha1.DebuginfoService/UploadFinished': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1UploadFinishedRequest }
            output: DebuginfoV1alpha1UploadFinishedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: DebuginfoV1alpha1UploadFinishedRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
