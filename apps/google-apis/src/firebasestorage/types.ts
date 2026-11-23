type AddFirebaseRequest = { [x: string]: unknown }
type Bucket = { name?: string | undefined }
type RemoveFirebaseRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type ListBucketsResponse = { buckets?: Bucket[] | undefined; nextPageToken?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:bucket:addFirebase': {
      $post: {
        input: { param: { bucket: string } } & {
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
        } & { json: AddFirebaseRequest }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:bucket:removeFirebase': {
      $post: {
        input: { param: { bucket: string } } & {
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
        } & { json: RemoveFirebaseRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name': {
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
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/buckets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListBucketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
