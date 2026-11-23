import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMerchantsMerchantAccountConnectedDevices(
  args: InferRequestType<(typeof client.merchants)[':merchantAccount']['connectedDevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantAccount'].connectedDevices.$get(args, options),
  )
}

export async function postMerchantsMerchantAccountDevicesDeviceIdAsync(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantAccount'].devices[':deviceId'].async.$post(args, options),
  )
}

export async function getMerchantsMerchantAccountDevicesDeviceIdStatus(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantAccount'].devices[':deviceId'].status.$get(args, options),
  )
}

export async function postMerchantsMerchantAccountDevicesDeviceIdSync(
  args: InferRequestType<
    (typeof client.merchants)[':merchantAccount']['devices'][':deviceId']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantAccount'].devices[':deviceId'].sync.$post(args, options),
  )
}
