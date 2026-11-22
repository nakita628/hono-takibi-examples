type DeleteReportDefinitionRequest = { ReportName?: {} | undefined }
type DeleteResponseMessage = string
type DeleteReportDefinitionResponse = { ResponseMessage?: DeleteResponseMessage | undefined }
type InternalErrorException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type MaxResults = number
type GenericString = string
type DescribeReportDefinitionsRequest = {
  MaxResults?: MaxResults | undefined
  NextToken?: GenericString | undefined
}
type DescribeReportDefinitionsResponse = {
  ReportDefinitions?: {} | undefined
  NextToken?: GenericString | undefined
}
type ReportName = string
type TimeUnit = 'HOURLY' | 'DAILY' | 'MONTHLY'
type ReportFormat = 'textORcsv' | 'Parquet'
type CompressionFormat = 'ZIP' | 'GZIP' | 'Parquet'
type S3Bucket = string
type S3Prefix = string
type AWSRegion =
  | 'af-south-1'
  | 'ap-east-1'
  | 'ap-south-1'
  | 'ap-southeast-1'
  | 'ap-southeast-2'
  | 'ap-southeast-3'
  | 'ap-northeast-1'
  | 'ap-northeast-2'
  | 'ap-northeast-3'
  | 'ca-central-1'
  | 'eu-central-1'
  | 'eu-west-1'
  | 'eu-west-2'
  | 'eu-west-3'
  | 'eu-north-1'
  | 'eu-south-1'
  | 'eu-south-2'
  | 'me-central-1'
  | 'me-south-1'
  | 'sa-east-1'
  | 'us-east-1'
  | 'us-east-2'
  | 'us-west-1'
  | 'us-west-2'
  | 'cn-north-1'
  | 'cn-northwest-1'
type ReportDefinition = {
  ReportName: ReportName
  TimeUnit: TimeUnit
  Format: ReportFormat
  Compression: CompressionFormat
  AdditionalSchemaElements: {}
  S3Bucket: S3Bucket
  S3Prefix: S3Prefix
  S3Region: AWSRegion
  AdditionalArtifacts?: {} | undefined
  RefreshClosedReports?: {} | undefined
  ReportVersioning?: {} | undefined
  BillingViewArn?: {} | undefined
}
type ModifyReportDefinitionRequest = { ReportName: ReportName; ReportDefinition: ReportDefinition }
type ModifyReportDefinitionResponse = { [x: string]: unknown }
type PutReportDefinitionRequest = {
  ReportDefinition: {
    ReportName: ReportName
    TimeUnit: TimeUnit
    Format: ReportFormat
    Compression: CompressionFormat
    AdditionalSchemaElements: {}
    S3Bucket: S3Bucket
    S3Prefix: S3Prefix
    S3Region: AWSRegion
    AdditionalArtifacts?: {} | undefined
    RefreshClosedReports?: {} | undefined
    ReportVersioning?: {} | undefined
    BillingViewArn?: {} | undefined
  }
}
type PutReportDefinitionResponse = { [x: string]: unknown }
type DuplicateReportNameException = { [x: string]: unknown }
type ReportLimitReachedException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.DeleteReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReportDefinitionRequest }
            output: DeleteReportDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.DeleteReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReportDefinitionRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.DeleteReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteReportDefinitionRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.DescribeReportDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReportDefinitionsRequest }
            output: DescribeReportDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.DescribeReportDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeReportDefinitionsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.ModifyReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReportDefinitionRequest }
            output: ModifyReportDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.ModifyReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReportDefinitionRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.ModifyReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyReportDefinitionRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.PutReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutReportDefinitionRequest }
            output: PutReportDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.PutReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutReportDefinitionRequest }
            output: DuplicateReportNameException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.PutReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutReportDefinitionRequest }
            output: ReportLimitReachedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.PutReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutReportDefinitionRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSOrigamiServiceGatewayService.PutReportDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutReportDefinitionRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
