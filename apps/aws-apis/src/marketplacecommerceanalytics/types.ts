type GenerateDataSetRequest = {
  dataSetType: {}
  dataSetPublicationDate: {}
  roleNameArn: {}
  destinationS3BucketName: {}
  destinationS3Prefix?: {} | undefined
  snsTopicArn: {}
  customerDefinedValues?: {} | undefined
}
type GenerateDataSetResult = { dataSetRequestId?: {} | undefined }
type StartSupportDataExportRequest = {
  dataSetType: {}
  fromDate: {}
  roleNameArn: {}
  destinationS3BucketName: {}
  destinationS3Prefix?: {} | undefined
  snsTopicArn: {}
  customerDefinedValues?: {} | undefined
}
type StartSupportDataExportResult = { dataSetRequestId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MarketplaceCommerceAnalytics20150701.GenerateDataSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateDataSetRequest }
        output: GenerateDataSetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MarketplaceCommerceAnalytics20150701.StartSupportDataExport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSupportDataExportRequest }
        output: StartSupportDataExportResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
