type CreateHomeRegionControlRequest = {
  HomeRegion: {}
  Target: { Type: {}; Id?: {} | undefined }
  DryRun?: {} | undefined
}
type CreateHomeRegionControlResult = {
  HomeRegionControl?:
    | {
        ControlId?: {} | undefined
        HomeRegion?: {} | undefined
        Target?: { Type: {}; Id?: {} | undefined } | undefined
        RequestedTime?: {} | undefined
      }
    | undefined
}
type InternalServerError = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type DryRunOperation = { [x: string]: unknown }
type InvalidInputException = { [x: string]: unknown }
type DescribeHomeRegionControlsRequest = {
  ControlId?: {} | undefined
  HomeRegion?: {} | undefined
  Target?: { Type: {}; Id?: {} | undefined } | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeHomeRegionControlsResult = {
  HomeRegionControls?: {} | undefined
  NextToken?: {} | undefined
}
type GetHomeRegionRequest = { [x: string]: unknown }
type GetHomeRegionResult = { HomeRegion?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: CreateHomeRegionControlResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: DryRunOperation
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateHomeRegionControlRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: DescribeHomeRegionControlsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHomeRegionControlsRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: GetHomeRegionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSMigrationHubMultiAccountService.GetHomeRegion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHomeRegionRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
