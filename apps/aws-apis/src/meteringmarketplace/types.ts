type BatchMeterUsageRequest = { UsageRecords: {}; ProductCode: {} }
type BatchMeterUsageResult = { Results?: {} | undefined; UnprocessedRecords?: {} | undefined }
type MeterUsageRequest = {
  ProductCode: {}
  Timestamp: {}
  UsageDimension: {}
  UsageQuantity?: {} | undefined
  DryRun?: {} | undefined
  UsageAllocations?: {} | undefined
}
type MeterUsageResult = { MeteringRecordId?: {} | undefined }
type RegisterUsageRequest = { ProductCode: {}; PublicKeyVersion: {}; Nonce?: {} | undefined }
type RegisterUsageResult = {
  PublicKeyRotationTimestamp?: {} | undefined
  Signature?: {} | undefined
}
type ResolveCustomerRequest = { RegistrationToken: {} }
type ResolveCustomerResult = {
  CustomerIdentifier?: {} | undefined
  ProductCode?: {} | undefined
  CustomerAWSAccountId?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMPMeteringService.BatchMeterUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchMeterUsageRequest }
        output: BatchMeterUsageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMPMeteringService.MeterUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMPMeteringService.MeterUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MeterUsageRequest }
        output: MeterUsageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMPMeteringService.RegisterUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMPMeteringService.RegisterUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterUsageRequest }
        output: RegisterUsageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSMPMeteringService.ResolveCustomer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMPMeteringService.ResolveCustomer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResolveCustomerRequest }
        output: ResolveCustomerResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
