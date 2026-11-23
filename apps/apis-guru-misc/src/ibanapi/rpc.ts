import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.balance.$get(undefined, options))
}

export async function getValidate(
  args: InferRequestType<typeof client.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.$get(args, options))
}

export async function getValidateBasic(
  args: InferRequestType<(typeof client)['validate-basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['validate-basic'].$get(args, options))
}
