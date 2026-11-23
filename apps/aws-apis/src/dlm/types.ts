type TagValue = string
type CreateLifecyclePolicyResponse = { PolicyId?: {} | undefined }
type PolicyId = string
type ResourceTypeValues = 'VOLUME' | 'INSTANCE'
type TagFilter = string
type GetLifecyclePoliciesResponse = { Policies?: {} | undefined }
type DeleteLifecyclePolicyResponse = { [x: string]: unknown }
type GetLifecyclePolicyResponse = {
  Policy?:
    | {
        PolicyId?: {} | undefined
        Description?: {} | undefined
        State?: {} | undefined
        StatusMessage?: {} | undefined
        ExecutionRoleArn?: {} | undefined
        DateCreated?: {} | undefined
        DateModified?: {} | undefined
        PolicyDetails?:
          | {
              PolicyType?: {} | undefined
              ResourceTypes?: {} | undefined
              ResourceLocations?: {} | undefined
              TargetTags?: {} | undefined
              Schedules?: {} | undefined
              Parameters?:
                | {
                    ExcludeBootVolume?: {} | undefined
                    NoReboot?: {} | undefined
                    ExcludeDataVolumeTags?: {} | undefined
                  }
                | undefined
              EventSource?:
                | {
                    Type: {}
                    Parameters?:
                      | { EventType: {}; SnapshotOwner: {}; DescriptionRegex: {} }
                      | undefined
                  }
                | undefined
              Actions?: {} | undefined
            }
          | undefined
        Tags?: {} | undefined
        PolicyArn?: {} | undefined
      }
    | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateLifecyclePolicyResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/policies': {
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
            ExecutionRoleArn: string
            Description: string
            State: 'ENABLED' | 'DISABLED'
            PolicyDetails: {
              PolicyType?: {} | undefined
              ResourceTypes?: {} | undefined
              ResourceLocations?: {} | undefined
              TargetTags?: {} | undefined
              Schedules?: {} | undefined
              Parameters?:
                | {
                    ExcludeBootVolume?: {} | undefined
                    NoReboot?: {} | undefined
                    ExcludeDataVolumeTags?: {} | undefined
                  }
                | undefined
              EventSource?:
                | {
                    Type: {}
                    Parameters?:
                      | { EventType: {}; SnapshotOwner: {}; DescriptionRegex: {} }
                      | undefined
                  }
                | undefined
              Actions?: {} | undefined
            }
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            policyIds?: PolicyId[] | undefined
            state?: 'ENABLED' | 'DISABLED' | 'ERROR' | undefined
            resourceTypes?: ResourceTypeValues[] | undefined
            targetTags?: TagFilter[] | undefined
            tagsToAdd?: TagFilter[] | undefined
          }
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
        }
        output: GetLifecyclePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policies/:policyId/': {
      $delete: {
        input: { param: { policyId: string } } & {
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
        output: DeleteLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { policyId: string } } & {
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
        output: GetLifecyclePolicyResponse
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
  } & {
    '/policies/:policyId': {
      $patch: {
        input: { param: { policyId: string } } & {
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
            ExecutionRoleArn?: string | undefined
            State?: 'ENABLED' | 'DISABLED' | undefined
            Description?: string | undefined
            PolicyDetails?:
              | {
                  PolicyType?: {} | undefined
                  ResourceTypes?: {} | undefined
                  ResourceLocations?: {} | undefined
                  TargetTags?: {} | undefined
                  Schedules?: {} | undefined
                  Parameters?:
                    | {
                        ExcludeBootVolume?: {} | undefined
                        NoReboot?: {} | undefined
                        ExcludeDataVolumeTags?: {} | undefined
                      }
                    | undefined
                  EventSource?:
                    | {
                        Type: {}
                        Parameters?:
                          | { EventType: {}; SnapshotOwner: {}; DescriptionRegex: {} }
                          | undefined
                      }
                    | undefined
                  Actions?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
