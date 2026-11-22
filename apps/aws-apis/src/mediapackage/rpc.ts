import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putChannelsIdConfigureLogs(
  args: InferRequestType<(typeof client.channels)[':id']['configure_logs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':id'].configure_logs.$put(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function getHarvestJobs(
  args: InferRequestType<typeof client.harvest_jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.harvest_jobs.$get(args, options))
}

export async function postHarvestJobs(
  args: InferRequestType<typeof client.harvest_jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.harvest_jobs.$post(args, options))
}

export async function getOriginEndpoints(
  args: InferRequestType<typeof client.origin_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.origin_endpoints.$get(args, options))
}

export async function postOriginEndpoints(
  args: InferRequestType<typeof client.origin_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.origin_endpoints.$post(args, options))
}

export async function getChannelsId(
  args: InferRequestType<(typeof client.channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':id'].$get(args, options))
}

export async function putChannelsId(
  args: InferRequestType<(typeof client.channels)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':id'].$put(args, options))
}

export async function deleteChannelsId(
  args: InferRequestType<(typeof client.channels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':id'].$delete(args, options))
}

export async function getOriginEndpointsId(
  args: InferRequestType<(typeof client.origin_endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.origin_endpoints[':id'].$get(args, options))
}

export async function putOriginEndpointsId(
  args: InferRequestType<(typeof client.origin_endpoints)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.origin_endpoints[':id'].$put(args, options))
}

export async function deleteOriginEndpointsId(
  args: InferRequestType<(typeof client.origin_endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.origin_endpoints[':id'].$delete(args, options))
}

export async function getHarvestJobsId(
  args: InferRequestType<(typeof client.harvest_jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.harvest_jobs[':id'].$get(args, options))
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

export async function putChannelsIdCredentials(
  args: InferRequestType<(typeof client.channels)[':id']['credentials']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':id'].credentials.$put(args, options))
}

export async function putChannelsIdIngestEndpointsIngestEndpointIdCredentials(
  args: InferRequestType<
    (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':id'].ingest_endpoints[':ingest_endpoint_id'].credentials.$put(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
}
