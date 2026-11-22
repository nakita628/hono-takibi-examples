import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGetDeployments(
  args: InferRequestType<typeof client.GetDeployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetDeployments.$post(args, options))
}

export async function postGetDeviceRegistration(
  args: InferRequestType<typeof client.GetDeviceRegistration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetDeviceRegistration.$post(args, options))
}

export async function postSendHeartbeat(
  args: InferRequestType<typeof client.SendHeartbeat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SendHeartbeat.$post(args, options))
}
