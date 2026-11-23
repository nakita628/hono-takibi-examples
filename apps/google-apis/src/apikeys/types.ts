type V2LookupKeyResponse = { name?: string | undefined; parent?: string | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type V2AndroidApplication = {
  packageName?: string | undefined
  sha1Fingerprint?: string | undefined
}
type V2AndroidKeyRestrictions = { allowedApplications?: V2AndroidApplication[] | undefined }
type V2ApiTarget = { methods?: string[] | undefined; service?: string | undefined }
type V2BrowserKeyRestrictions = { allowedReferrers?: string[] | undefined }
type V2IosKeyRestrictions = { allowedBundleIds?: string[] | undefined }
type V2ServerKeyRestrictions = { allowedIps?: string[] | undefined }
type V2Restrictions = {
  androidKeyRestrictions?: V2AndroidKeyRestrictions | undefined
  apiTargets?: V2ApiTarget[] | undefined
  browserKeyRestrictions?: V2BrowserKeyRestrictions | undefined
  iosKeyRestrictions?: V2IosKeyRestrictions | undefined
  serverKeyRestrictions?: V2ServerKeyRestrictions | undefined
}
type V2Key = {
  annotations?: { [x: string]: string } | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  keyString?: string | undefined
  name?: string | undefined
  restrictions?: V2Restrictions | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type V2GetKeyStringResponse = { keyString?: string | undefined }
type V2UndeleteKeyRequest = { [x: string]: unknown }
type V2ListKeysResponse = { keys?: V2Key[] | undefined; nextPageToken?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/keys:lookupKey': {
      $get: {
        input: {
          query: {
            keyString?: string | undefined
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
        output: V2LookupKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            etag?: string | undefined
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
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
        output: V2Key
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
        } & { json: V2Key }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/keyString': {
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
        output: V2GetKeyStringResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:undelete': {
      $post: {
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
        } & { json: V2UndeleteKeyRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/keys': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: V2ListKeysResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            keyId?: string | undefined
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
        } & { json: V2Key }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
