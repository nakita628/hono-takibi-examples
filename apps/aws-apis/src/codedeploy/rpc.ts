import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetApplicationRevisions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetDeploymentGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetDeploymentInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetDeploymentTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetDeployments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ContinueDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006CreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006CreateDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006CreateDeploymentConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006CreateDeploymentGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeleteApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeleteDeploymentConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeleteDeploymentGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeleteGitHubAccountToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeleteResourcesByExternalId(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetApplication'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetApplicationRevision(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetDeploymentConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetDeploymentGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetDeploymentInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetDeploymentTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006GetOnPremisesInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListApplicationRevisions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListApplications'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListDeploymentConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListDeploymentGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListDeploymentInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListDeploymentTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListDeployments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListDeployments'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNames(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListOnPremisesInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeDeploy20141006RegisterApplicationRevision(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006RegisterOnPremisesInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTermination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodeDeploy20141006StopDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.StopDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006UpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetCodeDeploy20141006UpdateDeploymentGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup'].$post(args, options),
  )
}
