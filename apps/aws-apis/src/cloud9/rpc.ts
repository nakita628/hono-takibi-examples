import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'].$post(
      args,
      options,
    ),
  )
}
