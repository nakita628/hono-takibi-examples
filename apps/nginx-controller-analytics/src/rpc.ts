import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnalyticsAlertsRules(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.alerts.rules.$get(undefined, options))
}

export async function postAnalyticsAlertsRules(
  args: InferRequestType<typeof client.analytics.alerts.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.alerts.rules.$post(args, options))
}

export async function getAnalyticsAlertsRulesAlertRuleName(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.alerts.rules[':alertRuleName'].$get(args, options))
}

export async function putAnalyticsAlertsRulesAlertRuleName(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.alerts.rules[':alertRuleName'].$put(args, options))
}

export async function deleteAnalyticsAlertsRulesAlertRuleName(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.alerts.rules[':alertRuleName'].$delete(args, options))
}

export async function getAnalyticsAlertsRulesAlertRuleNameAlerts(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.alerts.rules[':alertRuleName'].alerts.$get(args, options),
  )
}

export async function getAnalyticsAlertsRulesAlertRuleNameAlertsAlertId(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(args, options),
  )
}

export async function getAnalyticsCatalogsMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.catalogs.metrics.$get(undefined, options))
}

export async function getAnalyticsCatalogsMetricsMetricName(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.catalogs.metrics[':metricName'].$get(args, options))
}

export async function getAnalyticsCatalogsDimensions(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.catalogs.dimensions.$get(undefined, options))
}

export async function getAnalyticsCatalogsDimensionsDimensionName(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.catalogs.dimensions[':dimensionName'].$get(args, options),
  )
}

export async function getAnalyticsEvents(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.events.$get(args, options))
}

export async function getAnalyticsEventsId(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.events[':id'].$get(args, options))
}

export async function getAnalyticsForwarders(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.forwarders.$get(undefined, options))
}

export async function postAnalyticsForwarders(
  args: InferRequestType<typeof client.analytics.forwarders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.forwarders.$post(args, options))
}

export async function getAnalyticsForwardersForwarderName(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.forwarders[':forwarderName'].$get(args, options))
}

export async function putAnalyticsForwardersForwarderName(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.forwarders[':forwarderName'].$put(args, options))
}

export async function deleteAnalyticsForwardersForwarderName(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.forwarders[':forwarderName'].$delete(args, options))
}

export async function getAnalyticsMetrics(
  args: InferRequestType<typeof client.analytics.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.$get(args, options))
}
