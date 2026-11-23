import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postQuerierV1QuerierServiceAnalyzeQuery(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['AnalyzeQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].AnalyzeQuery.$post(args, options))
}

export async function postQuerierV1QuerierServiceDiff(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['Diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].Diff.$post(args, options))
}

export async function postQuerierV1QuerierServiceGetProfileStats(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['GetProfileStats']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['querier.v1.QuerierService'].GetProfileStats.$post(args, options),
  )
}

export async function postQuerierV1QuerierServiceLabelNames(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelNames']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].LabelNames.$post(args, options))
}

export async function postQuerierV1QuerierServiceLabelValues(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['LabelValues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].LabelValues.$post(args, options))
}

export async function postQuerierV1QuerierServiceProfileTypes(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['ProfileTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].ProfileTypes.$post(args, options))
}

export async function postQuerierV1QuerierServiceQueryAnomalies(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['QueryAnomalies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['querier.v1.QuerierService'].QueryAnomalies.$post(args, options),
  )
}

export async function postQuerierV1QuerierServiceSelectHeatmap(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectHeatmap']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].SelectHeatmap.$post(args, options))
}

export async function postQuerierV1QuerierServiceSelectMergeProfile(
  args: InferRequestType<
    (typeof client)['querier.v1.QuerierService']['SelectMergeProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['querier.v1.QuerierService'].SelectMergeProfile.$post(args, options),
  )
}

export async function postQuerierV1QuerierServiceSelectMergeSpanProfile(
  args: InferRequestType<
    (typeof client)['querier.v1.QuerierService']['SelectMergeSpanProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['querier.v1.QuerierService'].SelectMergeSpanProfile.$post(args, options),
  )
}

export async function postQuerierV1QuerierServiceSelectMergeStacktraces(
  args: InferRequestType<
    (typeof client)['querier.v1.QuerierService']['SelectMergeStacktraces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['querier.v1.QuerierService'].SelectMergeStacktraces.$post(args, options),
  )
}

export async function postQuerierV1QuerierServiceSelectSeries(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['SelectSeries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].SelectSeries.$post(args, options))
}

export async function postQuerierV1QuerierServiceSeries(
  args: InferRequestType<(typeof client)['querier.v1.QuerierService']['Series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['querier.v1.QuerierService'].Series.$post(args, options))
}
