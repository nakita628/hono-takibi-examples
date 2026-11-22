import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function postClientRegister(
  args: InferRequestType<typeof client.client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client.register.$post(args, options))
}

export async function postDeviceAuthorization(
  args: InferRequestType<typeof client.device_authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device_authorization.$post(args, options))
}
