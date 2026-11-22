import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2EntriesCopy(
  args: InferRequestType<(typeof client.v2)['entries:copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['entries:copy'].$post(args, options))
}

export async function postV2EntriesList(
  args: InferRequestType<(typeof client.v2)['entries:list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['entries:list'].$post(args, options))
}

export async function postV2EntriesTail(
  args: InferRequestType<(typeof client.v2)['entries:tail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['entries:tail'].$post(args, options))
}

export async function postV2EntriesWrite(
  args: InferRequestType<(typeof client.v2)['entries:write']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['entries:write'].$post(args, options))
}

export async function getV2MonitoredResourceDescriptors(
  args: InferRequestType<typeof client.v2.monitoredResourceDescriptors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoredResourceDescriptors.$get(args, options))
}

export async function deleteV2LogName(
  args: InferRequestType<(typeof client.v2)[':logName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':logName'].$delete(args, options))
}

export async function getV2MetricName(
  args: InferRequestType<(typeof client.v2)[':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':metricName'].$get(args, options))
}

export async function putV2MetricName(
  args: InferRequestType<(typeof client.v2)[':metricName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':metricName'].$put(args, options))
}

export async function deleteV2MetricName(
  args: InferRequestType<(typeof client.v2)[':metricName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':metricName'].$delete(args, options))
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2NameCmekSettings(
  args: InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].cmekSettings.$get(args, options))
}

export async function patchV2NameCmekSettings(
  args: InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].cmekSettings.$patch(args, options))
}

export async function getV2NameLocations(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].locations.$get(args, options))
}

export async function getV2NameOperations(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].operations.$get(args, options))
}

export async function getV2NameSettings(
  args: InferRequestType<(typeof client.v2)[':name']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].settings.$get(args, options))
}

export async function patchV2NameSettings(
  args: InferRequestType<(typeof client.v2)[':name']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].settings.$patch(args, options))
}

export async function postV2NameCancel(
  args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:cancel'].$post(args, options))
}

export async function postV2NameUndelete(
  args: InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:undelete'].$post(args, options))
}

export async function postV2NameUpdateAsync(
  args: InferRequestType<(typeof client.v2)[':name:updateAsync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:updateAsync'].$post(args, options))
}

export async function getV2ParentBuckets(
  args: InferRequestType<(typeof client.v2)[':parent']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].buckets.$get(args, options))
}

export async function postV2ParentBuckets(
  args: InferRequestType<(typeof client.v2)[':parent']['buckets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].buckets.$post(args, options))
}

export async function postV2ParentBucketsCreateAsync(
  args: InferRequestType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['buckets:createAsync'].$post(args, options))
}

export async function getV2ParentExclusions(
  args: InferRequestType<(typeof client.v2)[':parent']['exclusions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].exclusions.$get(args, options))
}

export async function postV2ParentExclusions(
  args: InferRequestType<(typeof client.v2)[':parent']['exclusions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].exclusions.$post(args, options))
}

export async function getV2ParentLinks(
  args: InferRequestType<(typeof client.v2)[':parent']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].links.$get(args, options))
}

export async function postV2ParentLinks(
  args: InferRequestType<(typeof client.v2)[':parent']['links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].links.$post(args, options))
}

export async function getV2ParentLogs(
  args: InferRequestType<(typeof client.v2)[':parent']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].logs.$get(args, options))
}

export async function getV2ParentMetrics(
  args: InferRequestType<(typeof client.v2)[':parent']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].metrics.$get(args, options))
}

export async function postV2ParentMetrics(
  args: InferRequestType<(typeof client.v2)[':parent']['metrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].metrics.$post(args, options))
}

export async function getV2ParentRecentQueries(
  args: InferRequestType<(typeof client.v2)[':parent']['recentQueries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].recentQueries.$get(args, options))
}

export async function getV2ParentSavedQueries(
  args: InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].savedQueries.$get(args, options))
}

export async function postV2ParentSavedQueries(
  args: InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].savedQueries.$post(args, options))
}

export async function getV2ParentSinks(
  args: InferRequestType<(typeof client.v2)[':parent']['sinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].sinks.$get(args, options))
}

export async function postV2ParentSinks(
  args: InferRequestType<(typeof client.v2)[':parent']['sinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].sinks.$post(args, options))
}

export async function getV2ParentViews(
  args: InferRequestType<(typeof client.v2)[':parent']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].views.$get(args, options))
}

export async function postV2ParentViews(
  args: InferRequestType<(typeof client.v2)[':parent']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].views.$post(args, options))
}

export async function getV2SinkName(
  args: InferRequestType<(typeof client.v2)[':sinkName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':sinkName'].$get(args, options))
}

export async function putV2SinkName(
  args: InferRequestType<(typeof client.v2)[':sinkName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':sinkName'].$put(args, options))
}

export async function deleteV2SinkName(
  args: InferRequestType<(typeof client.v2)[':sinkName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':sinkName'].$delete(args, options))
}

export async function patchV2SinkName(
  args: InferRequestType<(typeof client.v2)[':sinkName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':sinkName'].$patch(args, options))
}
