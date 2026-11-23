import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getHealthz(options?: ClientRequestOptions) {
  return await parseResponse(client.healthz.$get(undefined, options))
}

export async function getJson(
  args: InferRequestType<typeof client.json.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.json.$get(args, options))
}

export async function getApiEvents(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events.$get(args, options))
}

export async function getApiLogs(
  args: InferRequestType<typeof client.api.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logs.$get(args, options))
}

export async function getApiLogsStream(
  args: InferRequestType<typeof client.api.logs.stream.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logs.stream.$get(args, options))
}

export async function getOpenapiYaml(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.yaml'].$get(undefined, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function postApiRun(
  args: InferRequestType<typeof client.api.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.run.$post(args, options))
}

export async function postCheck(
  args: InferRequestType<typeof client.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check.$post(args, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}
