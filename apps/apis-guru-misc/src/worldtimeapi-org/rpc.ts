import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIp(options?: ClientRequestOptions) {
  return await parseResponse(client.ip.$get(undefined, options))
}

export async function getIpTxt(options?: ClientRequestOptions) {
  return await parseResponse(client['ip.txt'].$get(undefined, options))
}

export async function getIpIpv4(
  args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip[':ipv4'].$get(args, options))
}

export async function getIpIpv4Txt(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip[':ipv4.txt'].$get(args, options))
}

export async function getTimezone(options?: ClientRequestOptions) {
  return await parseResponse(client.timezone.$get(undefined, options))
}

export async function getTimezoneTxt(options?: ClientRequestOptions) {
  return await parseResponse(client['timezone.txt'].$get(undefined, options))
}

export async function getTimezoneArea(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timezone[':area'].$get(args, options))
}

export async function getTimezoneAreaTxt(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timezone[':area.txt'].$get(args, options))
}

export async function getTimezoneAreaLocation(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timezone[':area'][':location'].$get(args, options))
}

export async function getTimezoneAreaLocationTxt(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timezone[':area'][':location.txt'].$get(args, options))
}

export async function getTimezoneAreaLocationRegion(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timezone[':area'][':location'][':region'].$get(args, options))
}

export async function getTimezoneAreaLocationRegionTxt(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timezone[':area'][':location'][':region.txt'].$get(args, options),
  )
}
