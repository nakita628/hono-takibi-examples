type FormatComplexity = { lodHint?: number | undefined; triangleCount?: string | undefined }
type File2 = {
  contentType?: string | undefined
  relativePath?: string | undefined
  url?: string | undefined
}
type Format = {
  formatComplexity?: FormatComplexity | undefined
  formatType?: string | undefined
  resources?: File2[] | undefined
  root?: File2 | undefined
}
type Quaternion = {
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
  z?: number | undefined
}
type PresentationParams = {
  backgroundColor?: string | undefined
  colorSpace?: 'UNKNOWN' | 'LINEAR' | 'GAMMA' | undefined
  orientingRotation?: Quaternion | undefined
}
type RemixInfo = { sourceAsset?: string[] | undefined }
type Asset = {
  authorName?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  formats?: Format[] | undefined
  isCurated?: boolean | undefined
  license?: 'UNKNOWN' | 'CREATIVE_COMMONS_BY' | 'ALL_RIGHTS_RESERVED' | undefined
  metadata?: string | undefined
  name?: string | undefined
  presentationParams?: PresentationParams | undefined
  remixInfo?: RemixInfo | undefined
  thumbnail?: File2 | undefined
  updateTime?: string | undefined
  visibility?: 'VISIBILITY_UNSPECIFIED' | 'PRIVATE' | 'UNLISTED' | 'PUBLIC' | undefined
}
type ListAssetsResponse = {
  assets?: Asset[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type UserAsset = { asset?: Asset | undefined }
type ListUserAssetsResponse = {
  nextPageToken?: string | undefined
  totalSize?: number | undefined
  userAssets?: UserAsset[] | undefined
}
type ListLikedAssetsResponse = {
  assets?: Asset[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/assets': {
      $get: {
        input: {
          query: {
            category?: string | undefined
            curated?: boolean | undefined
            format?: string | undefined
            keywords?: string | undefined
            maxComplexity?: 'COMPLEXITY_UNSPECIFIED' | 'COMPLEX' | 'MEDIUM' | 'SIMPLE' | undefined
            orderBy?: string | undefined
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
        output: ListAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/assets': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            format?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            visibility?: 'VISIBILITY_UNSPECIFIED' | 'PUBLISHED' | 'PRIVATE' | undefined
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
        output: ListUserAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/likedassets': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            format?: string | undefined
            orderBy?: string | undefined
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
        output: ListLikedAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
