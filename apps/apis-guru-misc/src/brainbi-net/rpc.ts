import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAnalyzePricing(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.analyze.pricing.$get(args, options))
}

export async function getApiCustomers(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers.$get(args, options))
}

export async function postApiLogin(
  args: InferRequestType<typeof client.api.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.login.$post(args, options))
}

export async function postApiLogout(
  args: InferRequestType<typeof client.api.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logout.$post(args, options))
}

export async function getApiOrders(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.$get(args, options))
}

export async function deleteApiOrders1137(
  args: InferRequestType<(typeof client.api.orders)['1137']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders['1137'].$delete(args, options))
}

export async function getApiProducts(
  args: InferRequestType<typeof client.api.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.products.$get(args, options))
}

export async function deleteApiProducts1137(
  args: InferRequestType<(typeof client.api.products)['1137']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.products['1137'].$delete(args, options))
}

export async function postApiRegister(
  args: InferRequestType<typeof client.api.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.register.$post(args, options))
}

export async function postApiRegisterWoocommerce(
  args: InferRequestType<typeof client.api.register_woocommerce.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.register_woocommerce.$post(args, options))
}

export async function getApiRule(
  args: InferRequestType<typeof client.api.rule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rule.$get(args, options))
}

export async function getApiRuleRuleData1(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rule.ruleData['1'].$get(args, options))
}

export async function getApiRuleRuleData1Latest(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rule.ruleData['1'].latest.$get(args, options))
}

export async function getApiSeoRankingLatest(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.seo.ranking.latest.$get(args, options))
}
