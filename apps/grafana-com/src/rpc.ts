import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getInstances(
  args: InferRequestType<typeof client.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances.$get(args, options))
}

export async function postInstances(
  args: InferRequestType<typeof client.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances.$post(args, options))
}

export async function getInstancesInstanceId(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].$get(args, options))
}

export async function postInstancesInstanceId(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].$post(args, options))
}

export async function deleteInstancesInstanceId(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].$delete(args, options))
}

export async function postInstancesInstanceIdApiServiceaccounts(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts.$post(args, options),
  )
}

export async function getInstancesInstanceIdApiServiceaccountsSearch(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts.search.$get(args, options),
  )
}

export async function getInstancesInstanceIdApiServiceaccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(args, options),
  )
}

export async function deleteInstancesInstanceIdApiServiceaccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$delete(args, options),
  )
}

export async function getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(
      args,
      options,
    ),
  )
}

export async function postInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$post(
      args,
      options,
    ),
  )
}

export async function deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens[
      ':tokenId'
    ].$delete(args, options),
  )
}

export async function getInstancesInstanceIdPlugins(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].plugins.$get(args, options))
}

export async function postInstancesInstanceIdPlugins(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].plugins.$post(args, options))
}

export async function getInstancesInstanceIdPluginsPluginSlugOrId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(args, options),
  )
}

export async function postInstancesInstanceIdPluginsPluginSlugOrId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].plugins[':pluginSlugOrId'].$post(args, options),
  )
}

export async function deleteInstancesInstanceIdPluginsPluginSlugOrId(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':instanceId'].plugins[':pluginSlugOrId'].$delete(args, options),
  )
}

export async function getInstancesInstanceIdReadiness(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].readiness.$get(args, options))
}

export async function getOrgStackRegions(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['org-stack-regions'].$get(args, options))
}

export async function getOrgsOrgSlugOrIdBilledUsage(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgSlugOrId']['billed-usage'].$get(args, options))
}

export async function getOrgsOrgSlugOrIdBilledUsageHistory(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':orgSlugOrId']['billed-usage-history'].$get(args, options),
  )
}

export async function getOrgsOrgSlugInstances(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':orgSlug'].instances.$get(args, options))
}

export async function getOrgsSlugOrId(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].$get(args, options))
}

export async function getOrgsSlugOrIdCheckVisibility(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId']['check-visibility'].$get(args, options))
}

export async function getOrgsSlugOrIdMembers(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].members.$get(args, options))
}

export async function postOrgsSlugOrIdMembers(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].members.$post(args, options))
}

export async function getOrgsSlugOrIdMembersUsernameOrId(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$get(args, options))
}

export async function postOrgsSlugOrIdMembersUsernameOrId(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$post(args, options))
}

export async function deleteOrgsSlugOrIdMembersUsernameOrId(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':slugOrId'].members[':usernameOrId'].$delete(args, options),
  )
}

export async function getOrgsSlugOrIdSettings(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].settings.$get(args, options))
}

export async function postOrgsSlugOrIdSettings(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':slugOrId'].settings.$post(args, options))
}

export async function postPluginsMarketplaceLicensesRenew(
  args: InferRequestType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['plugins-marketplace'].licenses.renew.$post(args, options))
}

export async function getPluginsSlug(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':slug'].$get(args, options))
}

export async function getStackRegions(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stack-regions'].$get(args, options))
}

export async function getStackRegionsClosest(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stack-regions'].closest.$get(args, options))
}

export async function getV1Accesspolicies(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies.$get(args, options))
}

export async function postV1Accesspolicies(
  args: InferRequestType<typeof client.v1.accesspolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies.$post(args, options))
}

export async function getV1AccesspoliciesConfig(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies.config.$get(args, options))
}

export async function getV1AccesspoliciesId(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies[':id'].$get(args, options))
}

export async function postV1AccesspoliciesId(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies[':id'].$post(args, options))
}

export async function deleteV1AccesspoliciesId(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accesspolicies[':id'].$delete(args, options))
}

export async function getV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$get(args, options))
}

export async function postV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$post(args, options))
}

export async function getV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$get(args, options))
}

export async function postV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$post(args, options))
}

export async function deleteV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$delete(args, options))
}

export async function getInstancesInstanceIdConnections(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].connections.$get(args, options))
}

export async function getV1Stacks(
  args: InferRequestType<typeof client.v1.stacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks.$get(args, options))
}

export async function postV1Stacks(
  args: InferRequestType<typeof client.v1.stacks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks.$post(args, options))
}

export async function postV1StacksCheckUrl(
  args: InferRequestType<typeof client.v1.stacks.checkUrl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks.checkUrl.$post(args, options))
}

export async function getV1StacksIdOrSlug(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks[':idOrSlug'].$get(args, options))
}

export async function postV1StacksIdOrSlug(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks[':idOrSlug'].$post(args, options))
}

export async function deleteV1StacksIdOrSlug(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks[':idOrSlug'].$delete(args, options))
}

export async function getV1StacksIdOrSlugConnections(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks[':idOrSlug'].connections.$get(args, options))
}

export async function getV1StacksIdOrSlugReadiness(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stacks[':idOrSlug'].readiness.$get(args, options))
}

export async function getInstancesInstanceIdUsers(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':instanceId'].users.$get(args, options))
}
