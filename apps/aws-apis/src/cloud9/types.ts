type CreateEnvironmentEC2Request = {
  name: {}
  description?: {} | undefined
  clientRequestToken?: {} | undefined
  instanceType: {}
  subnetId?: {} | undefined
  imageId?: {} | undefined
  automaticStopTimeMinutes?: {} | undefined
  ownerArn?: {} | undefined
  tags?: {} | undefined
  connectionType?: {} | undefined
  dryRun?: {} | undefined
}
type CreateEnvironmentEC2Result = { environmentId?: {} | undefined }
type CreateEnvironmentMembershipRequest = { environmentId: {}; userArn: {}; permissions: {} }
type CreateEnvironmentMembershipResult = {
  membership: {
    permissions: {}
    userId: {}
    userArn: {}
    environmentId: {}
    lastAccess?: {} | undefined
  }
}
type DeleteEnvironmentRequest = { environmentId: {} }
type DeleteEnvironmentResult = { [x: string]: unknown }
type DeleteEnvironmentMembershipRequest = { environmentId: {}; userArn: {} }
type DeleteEnvironmentMembershipResult = { [x: string]: unknown }
type DescribeEnvironmentMembershipsRequest = {
  userArn?: {} | undefined
  environmentId?: {} | undefined
  permissions?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeEnvironmentMembershipsResult = {
  memberships?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeEnvironmentStatusRequest = { environmentId: {} }
type DescribeEnvironmentStatusResult = { status: {}; message: {} }
type DescribeEnvironmentsRequest = { environmentIds: {} }
type DescribeEnvironmentsResult = { environments?: {} | undefined }
type ListEnvironmentsRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListEnvironmentsResult = { nextToken?: {} | undefined; environmentIds?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateEnvironmentRequest = {
  environmentId: {}
  name?: {} | undefined
  description?: {} | undefined
  managedCredentialsAction?: {} | undefined
}
type UpdateEnvironmentResult = { [x: string]: unknown }
type UpdateEnvironmentMembershipRequest = { environmentId: {}; userArn: {}; permissions: {} }
type UpdateEnvironmentMembershipResult = {
  membership?:
    | { permissions: {}; userId: {}; userArn: {}; environmentId: {}; lastAccess?: {} | undefined }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentEC2Request }
        output: CreateEnvironmentEC2Result
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentMembershipRequest }
        output: CreateEnvironmentMembershipResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.DeleteEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentRequest }
        output: DeleteEnvironmentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentMembershipRequest }
        output: DeleteEnvironmentMembershipResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEnvironmentMembershipsRequest }
        output: DescribeEnvironmentMembershipsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEnvironmentStatusRequest }
        output: DescribeEnvironmentStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.DescribeEnvironments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEnvironmentsRequest }
        output: DescribeEnvironmentsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.ListEnvironments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentsRequest }
        output: ListEnvironmentsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.UpdateEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentRequest }
        output: UpdateEnvironmentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentMembershipRequest }
        output: UpdateEnvironmentMembershipResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
