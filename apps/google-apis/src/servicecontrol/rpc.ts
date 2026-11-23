import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ServicesServiceNameCheck(
  args: InferRequestType<(typeof client.v2.services)[':serviceName:check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.services[':serviceName:check'].$post(args, options))
}

export async function postV2ServicesServiceNameReport(
  args: InferRequestType<(typeof client.v2.services)[':serviceName:report']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.services[':serviceName:report'].$post(args, options))
}
