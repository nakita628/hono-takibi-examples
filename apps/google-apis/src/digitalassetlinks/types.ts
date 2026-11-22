type CertificateInfo = { sha256Fingerprint?: string | undefined }
type AndroidAppAsset = {
  certificate?: CertificateInfo | undefined
  packageName?: string | undefined
}
type WebAsset = { site?: string | undefined }
type Asset = { androidApp?: AndroidAppAsset | undefined; web?: WebAsset | undefined }
type StatementTemplate = {
  relation?: string | undefined
  source?: Asset | undefined
  target?: Asset | undefined
}
type BulkCheckRequest = {
  allowGoogleInternalDataSources?: boolean | undefined
  defaultRelation?: string | undefined
  defaultSource?: Asset | undefined
  defaultTarget?: Asset | undefined
  skipCacheLookup?: boolean | undefined
  statements?: StatementTemplate[] | undefined
}
type CheckResponse = {
  debugString?: string | undefined
  errorCode?:
    | (
        | 'ERROR_CODE_UNSPECIFIED'
        | 'ERROR_CODE_INVALID_QUERY'
        | 'ERROR_CODE_FETCH_ERROR'
        | 'ERROR_CODE_FAILED_SSL_VALIDATION'
        | 'ERROR_CODE_REDIRECT'
        | 'ERROR_CODE_TOO_LARGE'
        | 'ERROR_CODE_MALFORMED_HTTP_RESPONSE'
        | 'ERROR_CODE_WRONG_CONTENT_TYPE'
        | 'ERROR_CODE_MALFORMED_CONTENT'
        | 'ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE'
        | 'ERROR_CODE_FETCH_BUDGET_EXHAUSTED'
      )[]
    | undefined
  linked?: boolean | undefined
  maxAge?: string | undefined
}
type BulkCheckResponse = {
  bulkErrorCode?:
    | 'ERROR_CODE_UNSPECIFIED'
    | 'ERROR_CODE_INVALID_QUERY'
    | 'ERROR_CODE_FETCH_ERROR'
    | 'ERROR_CODE_FAILED_SSL_VALIDATION'
    | 'ERROR_CODE_REDIRECT'
    | 'ERROR_CODE_TOO_LARGE'
    | 'ERROR_CODE_MALFORMED_HTTP_RESPONSE'
    | 'ERROR_CODE_WRONG_CONTENT_TYPE'
    | 'ERROR_CODE_MALFORMED_CONTENT'
    | 'ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE'
    | 'ERROR_CODE_FETCH_BUDGET_EXHAUSTED'
    | undefined
  checkResults?: CheckResponse[] | undefined
}
type Statement = {
  relation?: string | undefined
  source?: Asset | undefined
  target?: Asset | undefined
}
type ListResponse = {
  debugString?: string | undefined
  errorCode?:
    | (
        | 'ERROR_CODE_UNSPECIFIED'
        | 'ERROR_CODE_INVALID_QUERY'
        | 'ERROR_CODE_FETCH_ERROR'
        | 'ERROR_CODE_FAILED_SSL_VALIDATION'
        | 'ERROR_CODE_REDIRECT'
        | 'ERROR_CODE_TOO_LARGE'
        | 'ERROR_CODE_MALFORMED_HTTP_RESPONSE'
        | 'ERROR_CODE_WRONG_CONTENT_TYPE'
        | 'ERROR_CODE_MALFORMED_CONTENT'
        | 'ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE'
        | 'ERROR_CODE_FETCH_BUDGET_EXHAUSTED'
      )[]
    | undefined
  maxAge?: string | undefined
  statements?: Statement[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/assetlinks:bulkCheck': {
      $post: {
        input: {
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
        } & { json: BulkCheckRequest }
        output: BulkCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assetlinks:check': {
      $get: {
        input: {
          query: {
            relation?: string | undefined
            'source.androidApp.certificate.sha256Fingerprint'?: string | undefined
            'source.androidApp.packageName'?: string | undefined
            'source.web.site'?: string | undefined
            'target.androidApp.certificate.sha256Fingerprint'?: string | undefined
            'target.androidApp.packageName'?: string | undefined
            'target.web.site'?: string | undefined
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
        output: CheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/statements:list': {
      $get: {
        input: {
          query: {
            relation?: string | undefined
            'source.androidApp.certificate.sha256Fingerprint'?: string | undefined
            'source.androidApp.packageName'?: string | undefined
            'source.web.site'?: string | undefined
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
        output: ListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
