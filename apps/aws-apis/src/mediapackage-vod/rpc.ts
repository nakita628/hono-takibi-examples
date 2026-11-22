import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putPackagingGroupsIdConfigureLogs(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups[':id'].configure_logs.$put(args, options))
}

export async function getAssets(
  args: InferRequestType<typeof client.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$get(args, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$post(args, options))
}

export async function getPackagingConfigurations(
  args: InferRequestType<typeof client.packaging_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_configurations.$get(args, options))
}

export async function postPackagingConfigurations(
  args: InferRequestType<typeof client.packaging_configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_configurations.$post(args, options))
}

export async function getPackagingGroups(
  args: InferRequestType<typeof client.packaging_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups.$get(args, options))
}

export async function postPackagingGroups(
  args: InferRequestType<typeof client.packaging_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups.$post(args, options))
}

export async function getAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$get(args, options))
}

export async function deleteAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$delete(args, options))
}

export async function getPackagingConfigurationsId(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_configurations[':id'].$get(args, options))
}

export async function deletePackagingConfigurationsId(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_configurations[':id'].$delete(args, options))
}

export async function getPackagingGroupsId(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups[':id'].$get(args, options))
}

export async function putPackagingGroupsId(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups[':id'].$put(args, options))
}

export async function deletePackagingGroupsId(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packaging_groups[':id'].$delete(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
}
