import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCustomerSupportCustomers(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-support'].customers.$get(args, options))
}

export async function postCustomerSupportCustomers(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-support'].customers.$post(args, options))
}

export async function getCustomerSupportCustomersId(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-support'].customers[':id'].$get(args, options))
}

export async function deleteCustomerSupportCustomersId(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-support'].customers[':id'].$delete(args, options))
}

export async function patchCustomerSupportCustomersId(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-support'].customers[':id'].$patch(args, options))
}
