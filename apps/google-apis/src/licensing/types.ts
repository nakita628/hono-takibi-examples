type LicenseAssignmentInsert = { userId?: string | undefined }
type LicenseAssignment = {
  etags?: string | undefined
  kind?: string | undefined
  productId?: string | undefined
  productName?: string | undefined
  selfLink?: string | undefined
  skuId?: string | undefined
  skuName?: string | undefined
  userId?: string | undefined
}
type Empty = { [x: string]: unknown }
type LicenseAssignmentList = {
  etag?: string | undefined
  items?: LicenseAssignment[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps/licensing/v1/product/:productId/sku/:skuId/user': {
      $post: {
        input: { param: { productId: string; skuId: string } } & {
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
        } & { json: LicenseAssignmentInsert }
        output: LicenseAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId': {
      $delete: {
        input: { param: { productId: string; skuId: string; userId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { productId: string; skuId: string; userId: string } } & {
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
        output: LicenseAssignment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { productId: string; skuId: string; userId: string } } & {
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
        } & { json: LicenseAssignment }
        output: LicenseAssignment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { productId: string; skuId: string; userId: string } } & {
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
        } & { json: LicenseAssignment }
        output: LicenseAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/licensing/v1/product/:productId/sku/:skuId/users': {
      $get: {
        input: { param: { productId: string; skuId: string } } & {
          query: {
            customerId: string
            maxResults?: number | undefined
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
        output: LicenseAssignmentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/licensing/v1/product/:productId/users': {
      $get: {
        input: { param: { productId: string } } & {
          query: {
            customerId: string
            maxResults?: number | undefined
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
        output: LicenseAssignmentList
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
