import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVirtualclustersVirtualClusterIdJobrunsJobRunId(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(args, options),
  )
}

export async function deleteVirtualclustersVirtualClusterIdJobrunsJobRunId(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$delete(args, options),
  )
}

export async function getJobtemplates(
  args: InferRequestType<typeof client.jobtemplates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobtemplates.$get(args, options))
}

export async function postJobtemplates(
  args: InferRequestType<typeof client.jobtemplates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobtemplates.$post(args, options))
}

export async function getVirtualclustersVirtualClusterIdEndpoints(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].endpoints.$get(args, options),
  )
}

export async function postVirtualclustersVirtualClusterIdEndpoints(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].endpoints.$post(args, options),
  )
}

export async function getVirtualclusters(
  args: InferRequestType<typeof client.virtualclusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualclusters.$get(args, options))
}

export async function postVirtualclusters(
  args: InferRequestType<typeof client.virtualclusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualclusters.$post(args, options))
}

export async function getJobtemplatesTemplateId(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobtemplates[':templateId'].$get(args, options))
}

export async function deleteJobtemplatesTemplateId(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobtemplates[':templateId'].$delete(args, options))
}

export async function getVirtualclustersVirtualClusterIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(args, options),
  )
}

export async function deleteVirtualclustersVirtualClusterIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$delete(args, options),
  )
}

export async function getVirtualclustersVirtualClusterId(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualclusters[':virtualClusterId'].$get(args, options))
}

export async function deleteVirtualclustersVirtualClusterId(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtualclusters[':virtualClusterId'].$delete(args, options))
}

export async function getVirtualclustersVirtualClusterIdJobruns(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].jobruns.$get(args, options),
  )
}

export async function postVirtualclustersVirtualClusterIdJobruns(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtualclusters[':virtualClusterId'].jobruns.$post(args, options),
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

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
