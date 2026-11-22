import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQuery(
  args: InferRequestType<typeof client.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$get(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

export async function getQueryRange(
  args: InferRequestType<typeof client.query_range.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_range.$get(args, options))
}

export async function postQueryRange(
  args: InferRequestType<typeof client.query_range.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_range.$post(args, options))
}

export async function getQueryCost(
  args: InferRequestType<typeof client.query_cost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_cost.$get(args, options))
}

export async function postQueryCost(
  args: InferRequestType<typeof client.query_cost.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_cost.$post(args, options))
}

export async function getQueryRangeCost(
  args: InferRequestType<typeof client.query_range_cost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_range_cost.$get(args, options))
}

export async function postQueryRangeCost(
  args: InferRequestType<typeof client.query_range_cost.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_range_cost.$post(args, options))
}

export async function getQueryExemplars(
  args: InferRequestType<typeof client.query_exemplars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_exemplars.$get(args, options))
}

export async function postQueryExemplars(
  args: InferRequestType<typeof client.query_exemplars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_exemplars.$post(args, options))
}

export async function getFormatQuery(
  args: InferRequestType<typeof client.format_query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.format_query.$get(args, options))
}

export async function postFormatQuery(
  args: InferRequestType<typeof client.format_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.format_query.$post(args, options))
}

export async function getParseQuery(
  args: InferRequestType<typeof client.parse_query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parse_query.$get(args, options))
}

export async function postParseQuery(
  args: InferRequestType<typeof client.parse_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parse_query.$post(args, options))
}

export async function getLabels(
  args: InferRequestType<typeof client.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$get(args, options))
}

export async function postLabels(
  args: InferRequestType<typeof client.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$post(args, options))
}

export async function getLabelNameValues(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.label[':name'].values.$get(args, options))
}

export async function getSearchMetricNames(
  args: InferRequestType<typeof client.search.metric_names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.metric_names.$get(args, options))
}

export async function postSearchMetricNames(
  args: InferRequestType<typeof client.search.metric_names.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.metric_names.$post(args, options))
}

export async function getSearchLabelNames(
  args: InferRequestType<typeof client.search.label_names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.label_names.$get(args, options))
}

export async function postSearchLabelNames(
  args: InferRequestType<typeof client.search.label_names.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.label_names.$post(args, options))
}

export async function getSearchLabelValues(
  args: InferRequestType<typeof client.search.label_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.label_values.$get(args, options))
}

export async function postSearchLabelValues(
  args: InferRequestType<typeof client.search.label_values.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.label_values.$post(args, options))
}

export async function getSeries(
  args: InferRequestType<typeof client.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$get(args, options))
}

export async function postSeries(
  args: InferRequestType<typeof client.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$post(args, options))
}

export async function getMetadata(
  args: InferRequestType<typeof client.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.$get(args, options))
}

export async function getScrapePools(options?: ClientRequestOptions) {
  return await parseResponse(client.scrape_pools.$get(undefined, options))
}

export async function getScrapePoolsConfig(
  args: InferRequestType<typeof client.scrape_pools.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrape_pools.config.$get(args, options))
}

export async function getTargets(
  args: InferRequestType<typeof client.targets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.$get(args, options))
}

export async function getTargetsMetadata(
  args: InferRequestType<typeof client.targets.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.metadata.$get(args, options))
}

export async function getTargetsRelabelSteps(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targets.relabel_steps.$get(args, options))
}

export async function getRules(
  args: InferRequestType<typeof client.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.$get(args, options))
}

export async function getAlerts(options?: ClientRequestOptions) {
  return await parseResponse(client.alerts.$get(undefined, options))
}

export async function getAlertmanagers(options?: ClientRequestOptions) {
  return await parseResponse(client.alertmanagers.$get(undefined, options))
}

export async function getStatusConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.status.config.$get(undefined, options))
}

export async function getStatusRuntimeinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.status.runtimeinfo.$get(undefined, options))
}

export async function getStatusBuildinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.status.buildinfo.$get(undefined, options))
}

export async function getStatusFlags(options?: ClientRequestOptions) {
  return await parseResponse(client.status.flags.$get(undefined, options))
}

export async function getStatusTsdb(
  args: InferRequestType<typeof client.status.tsdb.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.tsdb.$get(args, options))
}

export async function getStatusTsdbBlocks(options?: ClientRequestOptions) {
  return await parseResponse(client.status.tsdb.blocks.$get(undefined, options))
}

export async function getStatusWalreplay(options?: ClientRequestOptions) {
  return await parseResponse(client.status.walreplay.$get(undefined, options))
}

export async function getStatusSelfMetrics(
  args: InferRequestType<typeof client.status.self_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.self_metrics.$get(args, options))
}

export async function putAdminTsdbDeleteSeries(
  args: InferRequestType<typeof client.admin.tsdb.delete_series.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.tsdb.delete_series.$put(args, options))
}

export async function postAdminTsdbDeleteSeries(
  args: InferRequestType<typeof client.admin.tsdb.delete_series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.tsdb.delete_series.$post(args, options))
}

export async function putAdminTsdbCleanTombstones(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.tsdb.clean_tombstones.$put(undefined, options))
}

export async function postAdminTsdbCleanTombstones(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.tsdb.clean_tombstones.$post(undefined, options))
}

export async function putAdminTsdbSnapshot(
  args: InferRequestType<typeof client.admin.tsdb.snapshot.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.tsdb.snapshot.$put(args, options))
}

export async function postAdminTsdbSnapshot(
  args: InferRequestType<typeof client.admin.tsdb.snapshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.tsdb.snapshot.$post(args, options))
}

export async function postRead(options?: ClientRequestOptions) {
  return await parseResponse(client.read.$post(undefined, options))
}

export async function postWrite(options?: ClientRequestOptions) {
  return await parseResponse(client.write.$post(undefined, options))
}

export async function postOtlpV1Metrics(options?: ClientRequestOptions) {
  return await parseResponse(client.otlp.v1.metrics.$post(undefined, options))
}

export async function getNotifications(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.$get(undefined, options))
}

export async function getFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.features.$get(undefined, options))
}
