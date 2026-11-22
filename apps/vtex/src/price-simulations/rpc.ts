import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVCustomPricesRules(
  args: InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._v['custom-prices'].rules.$post(args, options))
}

export async function getVCustomPricesRulesPriceAssociationId(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._v['custom-prices'].rules[':priceAssociationId'].$get(args, options),
  )
}

export async function putVCustomPricesRulesPriceAssociationId(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._v['custom-prices'].rules[':priceAssociationId'].$put(args, options),
  )
}

export async function deleteVCustomPricesRulesPriceAssociationId(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._v['custom-prices'].rules[':priceAssociationId'].$delete(args, options),
  )
}

export async function getVCustomPricesSessionSchema(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._v['custom-prices'].session.schema.$get(args, options))
}

export async function postVCustomPricesSessionSchema(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._v['custom-prices'].session.schema.$post(args, options))
}

export async function postSessionsIndex(
  args: InferRequestType<typeof client.sessions.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.index.$post(args, options))
}
