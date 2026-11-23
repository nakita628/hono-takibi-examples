type AssociateResourceResponse = { [x: string]: unknown }
type TagValue = string
type CanaryCodeOutput = { SourceLocationArn?: {} | undefined; Handler?: {} | undefined }
type CanaryRunConfigOutput = {
  TimeoutInSeconds?: {} | undefined
  MemoryInMB?: {} | undefined
  ActiveTracing?: {} | undefined
}
type VpcConfigOutput = {
  VpcId?: {} | undefined
  SubnetIds?: {} | undefined
  SecurityGroupIds?: {} | undefined
}
type CreateCanaryResponse = {
  Canary?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Code?: CanaryCodeOutput | undefined
        ExecutionRoleArn?: {} | undefined
        Schedule?: { Expression?: {} | undefined; DurationInSeconds?: {} | undefined } | undefined
        RunConfig?: CanaryRunConfigOutput | undefined
        SuccessRetentionPeriodInDays?: {} | undefined
        FailureRetentionPeriodInDays?: {} | undefined
        Status?:
          | {
              State?: {} | undefined
              StateReason?: {} | undefined
              StateReasonCode?: {} | undefined
            }
          | undefined
        Timeline?:
          | {
              Created?: {} | undefined
              LastModified?: {} | undefined
              LastStarted?: {} | undefined
              LastStopped?: {} | undefined
            }
          | undefined
        ArtifactS3Location?: {} | undefined
        EngineArn?: {} | undefined
        RuntimeVersion?: {} | undefined
        VpcConfig?: VpcConfigOutput | undefined
        VisualReference?:
          | { BaseScreenshots?: {} | undefined; BaseCanaryRunId?: {} | undefined }
          | undefined
        Tags?: {} | undefined
        ArtifactConfig?:
          | {
              S3Encryption?:
                | { EncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateGroupResponse = {
  Group?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Arn?: {} | undefined
        Tags?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type DeleteCanaryResponse = { [x: string]: unknown }
type GetCanaryResponse = {
  Canary?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Code?: CanaryCodeOutput | undefined
        ExecutionRoleArn?: {} | undefined
        Schedule?: { Expression?: {} | undefined; DurationInSeconds?: {} | undefined } | undefined
        RunConfig?: CanaryRunConfigOutput | undefined
        SuccessRetentionPeriodInDays?: {} | undefined
        FailureRetentionPeriodInDays?: {} | undefined
        Status?:
          | {
              State?: {} | undefined
              StateReason?: {} | undefined
              StateReasonCode?: {} | undefined
            }
          | undefined
        Timeline?:
          | {
              Created?: {} | undefined
              LastModified?: {} | undefined
              LastStarted?: {} | undefined
              LastStopped?: {} | undefined
            }
          | undefined
        ArtifactS3Location?: {} | undefined
        EngineArn?: {} | undefined
        RuntimeVersion?: {} | undefined
        VpcConfig?: VpcConfigOutput | undefined
        VisualReference?:
          | { BaseScreenshots?: {} | undefined; BaseCanaryRunId?: {} | undefined }
          | undefined
        Tags?: {} | undefined
        ArtifactConfig?:
          | {
              S3Encryption?:
                | { EncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateCanaryResponse = { [x: string]: unknown }
type DeleteGroupResponse = { [x: string]: unknown }
type GetGroupResponse = {
  Group?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Arn?: {} | undefined
        Tags?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type CanaryName = string
type DescribeCanariesResponse = { Canaries?: {} | undefined; NextToken?: {} | undefined }
type DescribeCanariesLastRunResponse = {
  CanariesLastRun?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRuntimeVersionsResponse = {
  RuntimeVersions?: {} | undefined
  NextToken?: {} | undefined
}
type DisassociateResourceResponse = { [x: string]: unknown }
type GetCanaryRunsResponse = { CanaryRuns?: {} | undefined; NextToken?: {} | undefined }
type ListAssociatedGroupsResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type ListGroupResourcesResponse = { Resources?: {} | undefined; NextToken?: {} | undefined }
type ListGroupsResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type StartCanaryResponse = { [x: string]: unknown }
type StopCanaryResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/group/:groupIdentifier/associate': {
      $patch: {
        input: { param: { groupIdentifier: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string } }
        output: AssociateResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canary': {
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
            Name: string
            Code: {
              S3Bucket?: {} | undefined
              S3Key?: {} | undefined
              S3Version?: {} | undefined
              ZipFile?: {} | undefined
              Handler?: {} | undefined
            }
            ArtifactS3Location: string
            ExecutionRoleArn: string
            Schedule: { Expression?: {} | undefined; DurationInSeconds?: {} | undefined }
            RunConfig?:
              | {
                  TimeoutInSeconds?: {} | undefined
                  MemoryInMB?: {} | undefined
                  ActiveTracing?: {} | undefined
                  EnvironmentVariables?: {} | undefined
                }
              | undefined
            SuccessRetentionPeriodInDays?: number | undefined
            FailureRetentionPeriodInDays?: number | undefined
            RuntimeVersion: string
            VpcConfig?:
              | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
              | undefined
            Tags?: { [x: string]: TagValue } | undefined
            ArtifactConfig?:
              | {
                  S3Encryption?:
                    | { EncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: CreateCanaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/group': {
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
        } & { json: { Name: string; Tags?: { [x: string]: TagValue } | undefined } }
        output: CreateGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canary/:name': {
      $delete: {
        input: { param: { name: string } } & { query: { deleteLambda?: boolean | undefined } } & {
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
        output: DeleteCanaryResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        output: GetCanaryResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
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
            Code?:
              | {
                  S3Bucket?: {} | undefined
                  S3Key?: {} | undefined
                  S3Version?: {} | undefined
                  ZipFile?: {} | undefined
                  Handler?: {} | undefined
                }
              | undefined
            ExecutionRoleArn?: string | undefined
            RuntimeVersion?: string | undefined
            Schedule?:
              | { Expression?: {} | undefined; DurationInSeconds?: {} | undefined }
              | undefined
            RunConfig?:
              | {
                  TimeoutInSeconds?: {} | undefined
                  MemoryInMB?: {} | undefined
                  ActiveTracing?: {} | undefined
                  EnvironmentVariables?: {} | undefined
                }
              | undefined
            SuccessRetentionPeriodInDays?: number | undefined
            FailureRetentionPeriodInDays?: number | undefined
            VpcConfig?:
              | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
              | undefined
            VisualReference?:
              | { BaseScreenshots?: {} | undefined; BaseCanaryRunId?: {} | undefined }
              | undefined
            ArtifactS3Location?: string | undefined
            ArtifactConfig?:
              | {
                  S3Encryption?:
                    | { EncryptionMode?: {} | undefined; KmsKeyArn?: {} | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: UpdateCanaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/group/:groupIdentifier': {
      $delete: {
        input: { param: { groupIdentifier: string } } & {
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
        output: DeleteGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { groupIdentifier: string } } & {
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
        output: GetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canaries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Names?: CanaryName[] | undefined
          }
        }
        output: DescribeCanariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canaries/last-run': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Names?: CanaryName[] | undefined
          }
        }
        output: DescribeCanariesLastRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runtime-versions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: DescribeRuntimeVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/group/:groupIdentifier/disassociate': {
      $patch: {
        input: { param: { groupIdentifier: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceArn: string } }
        output: DisassociateResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canary/:name/runs': {
      $post: {
        input: { param: { name: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: GetCanaryRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource/:resourceArn/groups': {
      $post: {
        input: { param: { resourceArn: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: ListAssociatedGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/group/:groupIdentifier/resources': {
      $post: {
        input: { param: { groupIdentifier: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: ListGroupResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canary/:name/start': {
      $post: {
        input: { param: { name: string } } & {
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
        output: StartCanaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/canary/:name/stop': {
      $post: {
        input: { param: { name: string } } & {
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
        output: StopCanaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
