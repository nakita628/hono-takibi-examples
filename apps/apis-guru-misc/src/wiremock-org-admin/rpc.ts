import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminMappings(
  args: InferRequestType<typeof client.__admin.mappings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings.$get(args, options))
}

export async function postAdminMappings(
  args: InferRequestType<typeof client.__admin.mappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings.$post(args, options))
}

export async function deleteAdminMappings(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.mappings.$delete(undefined, options))
}

export async function postAdminMappingsFindByMetadata(
  args: InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings['find-by-metadata'].$post(args, options))
}

export async function postAdminMappingsImport(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.mappings.import.$post(undefined, options))
}

export async function postAdminMappingsRemoveByMetadata(
  args: InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings['remove-by-metadata'].$post(args, options))
}

export async function postAdminMappingsReset(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.mappings.reset.$post(undefined, options))
}

export async function postAdminMappingsSave(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.mappings.save.$post(undefined, options))
}

export async function getAdminMappingsStubMappingId(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings[':stubMappingId'].$get(args, options))
}

export async function putAdminMappingsStubMappingId(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings[':stubMappingId'].$put(args, options))
}

export async function deleteAdminMappingsStubMappingId(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.mappings[':stubMappingId'].$delete(args, options))
}

export async function postAdminNearMissesRequest(
  args: InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin['near-misses'].request.$post(args, options))
}

export async function postAdminNearMissesRequestPattern(
  args: InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin['near-misses']['request-pattern'].$post(args, options))
}

export async function postAdminRecordingsSnapshot(
  args: InferRequestType<typeof client.__admin.recordings.snapshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.recordings.snapshot.$post(args, options))
}

export async function postAdminRecordingsStart(
  args: InferRequestType<typeof client.__admin.recordings.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.recordings.start.$post(args, options))
}

export async function getAdminRecordingsStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.recordings.status.$get(undefined, options))
}

export async function postAdminRecordingsStop(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.recordings.stop.$post(undefined, options))
}

export async function getAdminRequests(
  args: InferRequestType<typeof client.__admin.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests.$get(args, options))
}

export async function deleteAdminRequests(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.requests.$delete(undefined, options))
}

export async function postAdminRequestsCount(
  args: InferRequestType<typeof client.__admin.requests.count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests.count.$post(args, options))
}

export async function postAdminRequestsFind(
  args: InferRequestType<typeof client.__admin.requests.find.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests.find.$post(args, options))
}

export async function postAdminRequestsRemove(
  args: InferRequestType<typeof client.__admin.requests.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests.remove.$post(args, options))
}

export async function postAdminRequestsRemoveByMetadata(
  args: InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests['remove-by-metadata'].$post(args, options))
}

export async function postAdminRequestsReset(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.requests.reset.$post(undefined, options))
}

export async function getAdminRequestsUnmatched(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.requests.unmatched.$get(undefined, options))
}

export async function getAdminRequestsUnmatchedNearMisses(options?: ClientRequestOptions) {
  return await parseResponse(
    client.__admin.requests.unmatched['near-misses'].$get(undefined, options),
  )
}

export async function getAdminRequestsRequestId(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests[':requestId'].$get(args, options))
}

export async function deleteAdminRequestsRequestId(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.requests[':requestId'].$delete(args, options))
}

export async function postAdminReset(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.reset.$post(undefined, options))
}

export async function getAdminScenarios(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.scenarios.$get(undefined, options))
}

export async function postAdminScenariosReset(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.scenarios.reset.$post(undefined, options))
}

export async function postAdminSettings(
  args: InferRequestType<typeof client.__admin.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.__admin.settings.$post(args, options))
}

export async function postAdminShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client.__admin.shutdown.$post(undefined, options))
}
