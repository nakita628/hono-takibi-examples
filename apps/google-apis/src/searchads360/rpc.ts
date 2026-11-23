import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV0CustomersCustomerIdCustomColumns(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.customers[':customerId'].customColumns.$get(args, options))
}

export async function postV0CustomersCustomerIdSearchAds360Search(
  args: InferRequestType<
    (typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v0.customers[':customerId']['searchAds360:search'].$post(args, options),
  )
}

export async function postV0CustomersCustomerIdSearchAds360SearchStream(
  args: InferRequestType<
    (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v0.customers[':customerId']['searchAds360:searchStream'].$post(args, options),
  )
}

export async function postV0SearchAds360FieldsSearch(
  args: InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0['searchAds360Fields:search'].$post(args, options))
}

export async function getV0ResourceName(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0[':resourceName'].$get(args, options))
}
