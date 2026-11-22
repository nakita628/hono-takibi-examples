type DecodeIntegrityTokenRequest = { integrityToken?: string | undefined }
type AccountActivity = {
  activityLevel?:
    | 'ACTIVITY_LEVEL_UNSPECIFIED'
    | 'UNEVALUATED'
    | 'UNUSUAL'
    | 'UNKNOWN'
    | 'TYPICAL_BASIC'
    | 'TYPICAL_STRONG'
    | undefined
}
type AccountDetails = {
  accountActivity?: AccountActivity | undefined
  appLicensingVerdict?: 'UNKNOWN' | 'LICENSED' | 'UNLICENSED' | 'UNEVALUATED' | undefined
}
type AppIntegrity = {
  appRecognitionVerdict?:
    | 'UNKNOWN'
    | 'PLAY_RECOGNIZED'
    | 'UNRECOGNIZED_VERSION'
    | 'UNEVALUATED'
    | undefined
  certificateSha256Digest?: string[] | undefined
  packageName?: string | undefined
  versionCode?: string | undefined
}
type DeviceIntegrity = {
  deviceRecognitionVerdict?:
    | (
        | 'UNKNOWN'
        | 'MEETS_BASIC_INTEGRITY'
        | 'MEETS_DEVICE_INTEGRITY'
        | 'MEETS_STRONG_INTEGRITY'
        | 'MEETS_VIRTUAL_INTEGRITY'
      )[]
    | undefined
}
type RequestDetails = {
  nonce?: string | undefined
  requestHash?: string | undefined
  requestPackageName?: string | undefined
  timestampMillis?: string | undefined
}
type TestingDetails = { isTestingResponse?: boolean | undefined }
type TokenPayloadExternal = {
  accountDetails?: AccountDetails | undefined
  appIntegrity?: AppIntegrity | undefined
  deviceIntegrity?: DeviceIntegrity | undefined
  requestDetails?: RequestDetails | undefined
  testingDetails?: TestingDetails | undefined
}
type DecodeIntegrityTokenResponse = { tokenPayloadExternal?: TokenPayloadExternal | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:packageName:decodeIntegrityToken': {
      $post: {
        input: { param: { packageName: string } } & {
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
        } & { json: DecodeIntegrityTokenRequest }
        output: DecodeIntegrityTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
