import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSMigrationHubAssociateCreatedArtifact(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubAssociateDiscoveredResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubCreateProgressUpdateStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubDeleteProgressUpdateStream(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubDescribeApplicationState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubDescribeMigrationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubDisassociateCreatedArtifact(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubDisassociateDiscoveredResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubImportMigrationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubListApplicationStates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ListApplicationStates'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubListCreatedArtifacts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubListDiscoveredResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubListMigrationTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubListProgressUpdateStreams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubNotifyApplicationState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubNotifyMigrationTaskState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMigrationHubPutResourceAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes'].$post(args, options),
  )
}
