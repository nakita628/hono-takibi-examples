import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEcommerceCustomers(
  args: InferRequestType<typeof client.ecommerce.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.customers.$get(args, options))
}

export async function getEcommerceCustomersId(
  args: InferRequestType<(typeof client.ecommerce.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.customers[':id'].$get(args, options))
}

export async function getEcommerceOrders(
  args: InferRequestType<typeof client.ecommerce.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.orders.$get(args, options))
}

export async function getEcommerceOrdersId(
  args: InferRequestType<(typeof client.ecommerce.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.orders[':id'].$get(args, options))
}

export async function getEcommerceProducts(
  args: InferRequestType<typeof client.ecommerce.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.products.$get(args, options))
}

export async function getEcommerceProductsId(
  args: InferRequestType<(typeof client.ecommerce.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.products[':id'].$get(args, options))
}

export async function getEcommerceStore(
  args: InferRequestType<typeof client.ecommerce.store.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.store.$get(args, options))
}
