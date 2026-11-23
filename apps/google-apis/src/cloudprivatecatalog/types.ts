type GoogleCloudPrivatecatalogV1beta1Catalog = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse = {
  catalogs?: GoogleCloudPrivatecatalogV1beta1Catalog[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudPrivatecatalogV1beta1Product = {
  assetType?: string | undefined
  createTime?: string | undefined
  displayMetadata?: { [x: string]: { [x: string]: unknown } } | undefined
  iconUri?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudPrivatecatalogV1beta1SearchProductsResponse = {
  nextPageToken?: string | undefined
  products?: GoogleCloudPrivatecatalogV1beta1Product[] | undefined
}
type GoogleCloudPrivatecatalogV1beta1Version = {
  asset?: { [x: string]: { [x: string]: unknown } } | undefined
  createTime?: string | undefined
  description?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse = {
  nextPageToken?: string | undefined
  versions?: GoogleCloudPrivatecatalogV1beta1Version[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:resource/catalogs:search': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource/products:search': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource/versions:search': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
