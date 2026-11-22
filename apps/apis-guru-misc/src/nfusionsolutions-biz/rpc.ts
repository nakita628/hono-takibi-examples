import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1CurrenciesHistory(
  args: InferRequestType<typeof client.api.v1.Currencies.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.history.$get(args, options))
}

export async function getApiV1CurrenciesHistorySupported(
  args: InferRequestType<typeof client.api.v1.Currencies.history.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.history.supported.$get(args, options))
}

export async function getApiV1CurrenciesRate(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.rate.$get(args, options))
}

export async function getApiV1CurrenciesRateSupported(
  args: InferRequestType<typeof client.api.v1.Currencies.rate.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.rate.supported.$get(args, options))
}

export async function getApiV1CurrenciesSummary(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.summary.$get(args, options))
}

export async function getApiV1CurrenciesSummarySupported(
  args: InferRequestType<typeof client.api.v1.Currencies.summary.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Currencies.summary.supported.$get(args, options))
}

export async function getApiV1MetalsBenchmarkHistory(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.benchmark.history.$get(args, options))
}

export async function getApiV1MetalsBenchmarkSummary(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.benchmark.summary.$get(args, options))
}

export async function getApiV1MetalsBenchmarkSupported(
  args: InferRequestType<typeof client.api.v1.Metals.benchmark.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.benchmark.supported.$get(args, options))
}

export async function getApiV1MetalsSpotHistory(
  args: InferRequestType<typeof client.api.v1.Metals.spot.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.history.$get(args, options))
}

export async function getApiV1MetalsSpotPerformance(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.performance.$get(args, options))
}

export async function getApiV1MetalsSpotPerformanceAnnual(
  args: InferRequestType<typeof client.api.v1.Metals.spot.performance.annual.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.performance.annual.$get(args, options))
}

export async function getApiV1MetalsSpotRatioHistory(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.ratio.history.$get(args, options))
}

export async function getApiV1MetalsSpotRatioSummary(
  args: InferRequestType<typeof client.api.v1.Metals.spot.ratio.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.ratio.summary.$get(args, options))
}

export async function getApiV1MetalsSpotSummary(
  args: InferRequestType<typeof client.api.v1.Metals.spot.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.summary.$get(args, options))
}

export async function getApiV1MetalsSpotSupported(
  args: InferRequestType<typeof client.api.v1.Metals.spot.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.spot.supported.$get(args, options))
}

export async function getApiV1MetalsSupportedCurrency(
  args: InferRequestType<typeof client.api.v1.Metals.supported.currency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Metals.supported.currency.$get(args, options))
}
