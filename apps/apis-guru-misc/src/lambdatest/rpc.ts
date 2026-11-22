import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getDevices(
  args: InferRequestType<typeof client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$get(args, options))
}

export async function getLocations(options?: ClientRequestOptions) {
  return await parseResponse(client.locations.$get(undefined, options))
}

export async function getOsBrowsers(
  args: InferRequestType<(typeof client)['os-browsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['os-browsers'].$get(args, options))
}

export async function getProfiles(options?: ClientRequestOptions) {
  return await parseResponse(client.profiles.$get(undefined, options))
}

export async function getResolutions(options?: ClientRequestOptions) {
  return await parseResponse(client.resolutions.$get(undefined, options))
}

export async function putStopTestId(
  args: InferRequestType<(typeof client.stop)[':test_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stop[':test_id'].$put(args, options))
}

export async function getTestId(
  args: InferRequestType<(typeof client)[':test_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':test_id'].$get(args, options))
}

export async function getTestIdZip(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':test_id'].zip.$get(args, options))
}
