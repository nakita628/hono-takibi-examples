import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Correlation(
  args: InferRequestType<typeof client.v1.correlation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.correlation.$get(args, options))
}

export async function getV1Indices(
  args: InferRequestType<typeof client.v1.indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indices.$get(args, options))
}

export async function getV1InvestorGrades(
  args: InferRequestType<(typeof client.v1)['investor-grades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['investor-grades'].$get(args, options))
}

export async function getV1MarketIndicator(
  args: InferRequestType<(typeof client.v1)['market-indicator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['market-indicator'].$get(args, options))
}

export async function getV1Price(
  args: InferRequestType<typeof client.v1.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.price.$get(args, options))
}

export async function getV1PricePrediction(
  args: InferRequestType<(typeof client.v1)['price-prediction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['price-prediction'].$get(args, options))
}

export async function getV1QuantmetricsTier1(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-1']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['quantmetrics-tier-1'].$get(args, options))
}

export async function getV1QuantmetricsTier2(
  args: InferRequestType<(typeof client.v1)['quantmetrics-tier-2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['quantmetrics-tier-2'].$get(args, options))
}

export async function getV1ResistanceSupport(
  args: InferRequestType<(typeof client.v1)['resistance-support']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['resistance-support'].$get(args, options))
}

export async function getV1ScenarioAnalysis(
  args: InferRequestType<(typeof client.v1)['scenario-analysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['scenario-analysis'].$get(args, options))
}

export async function getV1Sentiments(
  args: InferRequestType<typeof client.v1.sentiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sentiments.$get(args, options))
}

export async function getV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$get(args, options))
}

export async function getV1TraderGrades(
  args: InferRequestType<(typeof client.v1)['trader-grades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['trader-grades'].$get(args, options))
}

export async function getV1TradingIndicator(
  args: InferRequestType<(typeof client.v1)['trading-indicator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['trading-indicator'].$get(args, options))
}
