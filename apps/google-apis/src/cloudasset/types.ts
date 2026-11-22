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
type GoogleCloudAssetV1p7beta1PartitionSpec = {
  partitionKey?: 'PARTITION_KEY_UNSPECIFIED' | 'READ_TIME' | 'REQUEST_TIME' | undefined
}
type GoogleCloudAssetV1p7beta1BigQueryDestination = {
  dataset?: string | undefined
  force?: boolean | undefined
  partitionSpec?: GoogleCloudAssetV1p7beta1PartitionSpec | undefined
  separateTablesPerAssetType?: boolean | undefined
  table?: string | undefined
}
type GoogleCloudAssetV1p7beta1GcsDestination = {
  uri?: string | undefined
  uriPrefix?: string | undefined
}
type GoogleCloudAssetV1p7beta1OutputConfig = {
  bigqueryDestination?: GoogleCloudAssetV1p7beta1BigQueryDestination | undefined
  gcsDestination?: GoogleCloudAssetV1p7beta1GcsDestination | undefined
}
type GoogleCloudAssetV1p7beta1ExportAssetsRequest = {
  assetTypes?: string[] | undefined
  contentType?:
    | 'CONTENT_TYPE_UNSPECIFIED'
    | 'RESOURCE'
    | 'IAM_POLICY'
    | 'ORG_POLICY'
    | 'ACCESS_POLICY'
    | 'RELATIONSHIP'
    | undefined
  outputConfig?: GoogleCloudAssetV1p7beta1OutputConfig | undefined
  readTime?: string | undefined
  relationshipTypes?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1p7beta1/:name': {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p7beta1/:parent:exportAssets': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudAssetV1p7beta1ExportAssetsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
