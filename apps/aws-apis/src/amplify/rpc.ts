import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function postApps(
  args: InferRequestType<typeof client.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$post(args, options))
}

export async function getAppsAppIdBackendenvironments(
  args: InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].backendenvironments.$get(args, options))
}

export async function postAppsAppIdBackendenvironments(
  args: InferRequestType<(typeof client.apps)[':appId']['backendenvironments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].backendenvironments.$post(args, options))
}

export async function getAppsAppIdBranches(
  args: InferRequestType<(typeof client.apps)[':appId']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches.$get(args, options))
}

export async function postAppsAppIdBranches(
  args: InferRequestType<(typeof client.apps)[':appId']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches.$post(args, options))
}

export async function postAppsAppIdBranchesBranchNameDeployments(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].deployments.$post(args, options),
  )
}

export async function getAppsAppIdDomains(
  args: InferRequestType<(typeof client.apps)[':appId']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].domains.$get(args, options))
}

export async function postAppsAppIdDomains(
  args: InferRequestType<(typeof client.apps)[':appId']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].domains.$post(args, options))
}

export async function getAppsAppIdWebhooks(
  args: InferRequestType<(typeof client.apps)[':appId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].webhooks.$get(args, options))
}

export async function postAppsAppIdWebhooks(
  args: InferRequestType<(typeof client.apps)[':appId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].webhooks.$post(args, options))
}

export async function getAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$get(args, options))
}

export async function postAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$post(args, options))
}

export async function deleteAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$delete(args, options))
}

export async function getAppsAppIdBackendenvironmentsEnvironmentName(
  args: InferRequestType<
    (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].backendenvironments[':environmentName'].$get(args, options),
  )
}

export async function deleteAppsAppIdBackendenvironmentsEnvironmentName(
  args: InferRequestType<
    (typeof client.apps)[':appId']['backendenvironments'][':environmentName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].backendenvironments[':environmentName'].$delete(args, options),
  )
}

export async function getAppsAppIdBranchesBranchName(
  args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches[':branchName'].$get(args, options))
}

export async function postAppsAppIdBranchesBranchName(
  args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches[':branchName'].$post(args, options))
}

export async function deleteAppsAppIdBranchesBranchName(
  args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches[':branchName'].$delete(args, options))
}

export async function getAppsAppIdDomainsDomainName(
  args: InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].domains[':domainName'].$get(args, options))
}

export async function postAppsAppIdDomainsDomainName(
  args: InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].domains[':domainName'].$post(args, options))
}

export async function deleteAppsAppIdDomainsDomainName(
  args: InferRequestType<(typeof client.apps)[':appId']['domains'][':domainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].domains[':domainName'].$delete(args, options))
}

export async function getAppsAppIdBranchesBranchNameJobsJobId(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].jobs[':jobId'].$get(args, options),
  )
}

export async function deleteAppsAppIdBranchesBranchNameJobsJobId(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].jobs[':jobId'].$delete(args, options),
  )
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$get(args, options))
}

export async function postWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$post(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$delete(args, options))
}

export async function postAppsAppIdAccesslogs(
  args: InferRequestType<(typeof client.apps)[':appId']['accesslogs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accesslogs.$post(args, options))
}

export async function getArtifactsArtifactId(
  args: InferRequestType<(typeof client.artifacts)[':artifactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artifacts[':artifactId'].$get(args, options))
}

export async function getAppsAppIdBranchesBranchNameJobsJobIdArtifacts(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].jobs[':jobId'].artifacts.$get(args, options),
  )
}

export async function getAppsAppIdBranchesBranchNameJobs(
  args: InferRequestType<(typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].branches[':branchName'].jobs.$get(args, options))
}

export async function postAppsAppIdBranchesBranchNameJobs(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].jobs.$post(args, options),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postAppsAppIdBranchesBranchNameDeploymentsStart(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['deployments']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].deployments.start.$post(args, options),
  )
}

export async function deleteAppsAppIdBranchesBranchNameJobsJobIdStop(
  args: InferRequestType<
    (typeof client.apps)[':appId']['branches'][':branchName']['jobs'][':jobId']['stop']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].branches[':branchName'].jobs[':jobId'].stop.$delete(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
