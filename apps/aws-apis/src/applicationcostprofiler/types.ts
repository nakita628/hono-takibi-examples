type DeleteReportDefinitionResult = { reportId?: {} | undefined }
type GetReportDefinitionResult = {
  reportId: {}
  reportDescription: {}
  reportFrequency: {}
  format: {}
  destinationS3Location: { bucket: {}; prefix: {} }
  createdAt: {}
  lastUpdated: {}
}
type UpdateReportDefinitionResult = { reportId?: {} | undefined }
type ImportApplicationUsageResult = { importId: {} }
type ListReportDefinitionsResult = {
  reportDefinitions?: {} | undefined
  nextToken?: {} | undefined
}
type PutReportDefinitionResult = { reportId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/reportDefinition/:reportId': {
      $delete: {
        input: { param: { reportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteReportDefinitionResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { reportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetReportDefinitionResult
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { reportId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            reportDescription: string
            reportFrequency: 'MONTHLY' | 'DAILY' | 'ALL'
            format: 'CSV' | 'PARQUET'
            destinationS3Location: { bucket?: {} | undefined; prefix?: {} | undefined }
          }
        }
        output: UpdateReportDefinitionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/importApplicationUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            sourceS3Location: {
              bucket?: {} | undefined
              key?: {} | undefined
              region?: {} | undefined
            }
          }
        }
        output: ImportApplicationUsageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reportDefinition': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListReportDefinitionsResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            reportId: string
            reportDescription: string
            reportFrequency: 'MONTHLY' | 'DAILY' | 'ALL'
            format: 'CSV' | 'PARQUET'
            destinationS3Location: { bucket?: {} | undefined; prefix?: {} | undefined }
          }
        }
        output: PutReportDefinitionResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
