import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putChannels(
  args: InferRequestType<typeof client.channels.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$put(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function getInsightsId(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':Id'].$get(args, options))
}

export async function deleteInsightsId(
  args: InferRequestType<(typeof client.insights)[':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':Id'].$delete(args, options))
}

export async function getAccountsHealth(
  args: InferRequestType<typeof client.accounts.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.health.$get(args, options))
}

export async function postAccountsOverview(
  args: InferRequestType<typeof client.accounts.overview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.overview.$post(args, options))
}

export async function getAnomaliesId(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anomalies[':Id'].$get(args, options))
}

export async function putEventSources(
  args: InferRequestType<(typeof client)['event-sources']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-sources'].$put(args, options))
}

export async function postEventSources(
  args: InferRequestType<(typeof client)['event-sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-sources'].$post(args, options))
}

export async function putFeedback(
  args: InferRequestType<typeof client.feedback.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback.$put(args, options))
}

export async function postFeedback(
  args: InferRequestType<typeof client.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback.$post(args, options))
}

export async function postOrganizationHealth(
  args: InferRequestType<typeof client.organization.health.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.health.$post(args, options))
}

export async function postOrganizationOverview(
  args: InferRequestType<typeof client.organization.overview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.overview.$post(args, options))
}

export async function postOrganizationHealthResourceCollection(
  args: InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.health['resource-collection'].$post(args, options))
}

export async function getAccountsHealthResourceCollectionResourceCollectionType(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts.health['resource-collection'][':ResourceCollectionType'].$get(args, options),
  )
}

export async function getServiceIntegrations(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-integrations'].$get(args, options))
}

export async function putServiceIntegrations(
  args: InferRequestType<(typeof client)['service-integrations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['service-integrations'].$put(args, options))
}

export async function getCostEstimation(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cost-estimation'].$get(args, options))
}

export async function putCostEstimation(
  args: InferRequestType<(typeof client)['cost-estimation']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cost-estimation'].$put(args, options))
}

export async function getResourceCollectionsResourceCollectionType(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-collections'][':ResourceCollectionType'].$get(args, options),
  )
}

export async function postAnomaliesInsightInsightId(
  args: InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anomalies.insight[':InsightId'].$post(args, options))
}

export async function postListLogAnomalies(
  args: InferRequestType<(typeof client)['list-log-anomalies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-log-anomalies'].$post(args, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postInsights(
  args: InferRequestType<typeof client.insights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.$post(args, options))
}

export async function postMonitoredResources(
  args: InferRequestType<typeof client.monitoredResources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitoredResources.$post(args, options))
}

export async function postOrganizationInsights(
  args: InferRequestType<typeof client.organization.insights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.insights.$post(args, options))
}

export async function postRecommendations(
  args: InferRequestType<typeof client.recommendations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.$post(args, options))
}

export async function deleteChannelsId(
  args: InferRequestType<(typeof client.channels)[':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':Id'].$delete(args, options))
}

export async function postInsightsSearch(
  args: InferRequestType<typeof client.insights.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.search.$post(args, options))
}

export async function postOrganizationInsightsSearch(
  args: InferRequestType<typeof client.organization.insights.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.insights.search.$post(args, options))
}

export async function putResourceCollections(
  args: InferRequestType<(typeof client)['resource-collections']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-collections'].$put(args, options))
}
