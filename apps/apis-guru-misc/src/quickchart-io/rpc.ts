import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChart(
  args: InferRequestType<typeof client.chart.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.$get(args, options))
}

export async function postChart(
  args: InferRequestType<typeof client.chart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.$post(args, options))
}

export async function getQr(
  args: InferRequestType<typeof client.qr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qr.$get(args, options))
}

export async function postQr(
  args: InferRequestType<typeof client.qr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qr.$post(args, options))
}
