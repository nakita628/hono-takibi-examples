type DescribeReportCreationInput = { [x: string]: unknown }
type DescribeReportCreationOutput = {
  Status?: {} | undefined
  S3Location?: {} | undefined
  ErrorMessage?: {} | undefined
}
type GetComplianceSummaryInput = {
  TargetIdFilters?: {} | undefined
  RegionFilters?: {} | undefined
  ResourceTypeFilters?: {} | undefined
  TagKeyFilters?: {} | undefined
  GroupBy?: {} | undefined
  MaxResults?: {} | undefined
  PaginationToken?: {} | undefined
}
type GetComplianceSummaryOutput = { SummaryList?: {} | undefined; PaginationToken?: {} | undefined }
type GetResourcesInput = {
  PaginationToken?: {} | undefined
  TagFilters?: {} | undefined
  ResourcesPerPage?: {} | undefined
  TagsPerPage?: {} | undefined
  ResourceTypeFilters?: {} | undefined
  IncludeComplianceDetails?: {} | undefined
  ExcludeCompliantResources?: {} | undefined
  ResourceARNList?: {} | undefined
}
type GetResourcesOutput = {
  PaginationToken?: {} | undefined
  ResourceTagMappingList?: {} | undefined
}
type GetTagKeysInput = { PaginationToken?: {} | undefined }
type GetTagKeysOutput = { PaginationToken?: {} | undefined; TagKeys?: {} | undefined }
type GetTagValuesInput = { PaginationToken?: {} | undefined; Key: {} }
type GetTagValuesOutput = { PaginationToken?: {} | undefined; TagValues?: {} | undefined }
type StartReportCreationInput = { S3Bucket: {} }
type StartReportCreationOutput = { [x: string]: unknown }
type TagResourcesInput = { ResourceARNList: {}; Tags: {} }
type TagResourcesOutput = { FailedResourcesMap?: {} | undefined }
type UntagResourcesInput = { ResourceARNList: {}; TagKeys: {} }
type UntagResourcesOutput = { FailedResourcesMap?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReportCreationInput }
        output: DescribeReportCreationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary': {
      $post: {
        input: {
          query: { MaxResults?: string | undefined; PaginationToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetComplianceSummaryInput }
        output: GetComplianceSummaryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources': {
      $post: {
        input: {
          query: { ResourcesPerPage?: string | undefined; PaginationToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.GetResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcesInput }
        output: GetResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys': {
      $post: {
        input: { query: { PaginationToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.GetTagKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTagKeysInput }
        output: GetTagKeysOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues': {
      $post: {
        input: { query: { PaginationToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.GetTagValues'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTagValuesInput }
        output: GetTagValuesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.StartReportCreation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartReportCreationInput }
        output: StartReportCreationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.TagResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourcesInput }
        output: TagResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ResourceGroupsTaggingAPI_20170126.UntagResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourcesInput }
        output: UntagResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
