import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postClustersNameEncryptionConfigAssociate(
  args: InferRequestType<
    (typeof client.clusters)[':name']['encryption-config']['associate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['encryption-config'].associate.$post(args, options),
  )
}

export async function postClustersNameIdentityProviderConfigsAssociate(
  args: InferRequestType<
    (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['identity-provider-configs'].associate.$post(args, options),
  )
}

export async function getClustersNameAddons(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].addons.$get(args, options))
}

export async function postClustersNameAddons(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].addons.$post(args, options))
}

export async function getClusters(
  args: InferRequestType<typeof client.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters.$get(args, options))
}

export async function postClusters(
  args: InferRequestType<typeof client.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters.$post(args, options))
}

export async function getClustersNameFargateProfiles(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name']['fargate-profiles'].$get(args, options))
}

export async function postClustersNameFargateProfiles(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name']['fargate-profiles'].$post(args, options))
}

export async function getClustersNameNodeGroups(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name']['node-groups'].$get(args, options))
}

export async function postClustersNameNodeGroups(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name']['node-groups'].$post(args, options))
}

export async function getClustersNameAddonsAddonName(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].addons[':addonName'].$get(args, options))
}

export async function deleteClustersNameAddonsAddonName(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].addons[':addonName'].$delete(args, options))
}

export async function getClustersName(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].$get(args, options))
}

export async function deleteClustersName(
  args: InferRequestType<(typeof client.clusters)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].$delete(args, options))
}

export async function getClustersNameFargateProfilesFargateProfileName(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(args, options),
  )
}

export async function deleteClustersNameFargateProfilesFargateProfileName(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$delete(args, options),
  )
}

export async function getClustersNameNodeGroupsNodegroupName(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['node-groups'][':nodegroupName'].$get(args, options),
  )
}

export async function deleteClustersNameNodeGroupsNodegroupName(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['node-groups'][':nodegroupName'].$delete(args, options),
  )
}

export async function deleteClusterRegistrationsName(
  args: InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-registrations'][':name'].$delete(args, options))
}

export async function getAddonsConfigurationSchemasAddonNameAddonVersion(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.addons['configuration-schemas#addonName&addonVersion'].$get(args, options),
  )
}

export async function getAddonsSupportedVersions(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons['supported-versions'].$get(args, options))
}

export async function postClustersNameIdentityProviderConfigsDescribe(
  args: InferRequestType<
    (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['identity-provider-configs'].describe.$post(args, options),
  )
}

export async function getClustersNameUpdatesUpdateId(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].updates[':updateId'].$get(args, options))
}

export async function postClustersNameIdentityProviderConfigsDisassociate(
  args: InferRequestType<
    (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['identity-provider-configs'].disassociate.$post(args, options),
  )
}

export async function getClustersNameIdentityProviderConfigs(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['identity-provider-configs'].$get(args, options),
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

export async function getClustersNameUpdates(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].updates.$get(args, options))
}

export async function postClustersNameUpdates(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name'].updates.$post(args, options))
}

export async function postClusterRegistrations(
  args: InferRequestType<(typeof client)['cluster-registrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cluster-registrations'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postClustersNameAddonsAddonNameUpdate(
  args: InferRequestType<
    (typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name'].addons[':addonName'].update.$post(args, options),
  )
}

export async function postClustersNameUpdateConfig(
  args: InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':name']['update-config'].$post(args, options))
}

export async function postClustersNameNodeGroupsNodegroupNameUpdateConfig(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['node-groups'][':nodegroupName']['update-config'].$post(args, options),
  )
}

export async function postClustersNameNodeGroupsNodegroupNameUpdateVersion(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':name']['node-groups'][':nodegroupName']['update-version'].$post(
      args,
      options,
    ),
  )
}
