import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Report(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.report.$get(undefined, options))
}

export async function postV1Report(
  args: InferRequestType<typeof client.v1.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.report.$post(args, options))
}

export async function getV1ReportId(
  args: InferRequestType<(typeof client.v1.report)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.report[':id'].$get(args, options))
}

export async function putV1ReportId(
  args: InferRequestType<(typeof client.v1.report)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.report[':id'].$put(args, options))
}

export async function deleteV1ReportId(
  args: InferRequestType<(typeof client.v1.report)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.report[':id'].$delete(args, options))
}

export async function getV1Slo(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.slo.$get(undefined, options))
}

export async function postV1Slo(
  args: InferRequestType<typeof client.v1.slo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.slo.$post(args, options))
}

export async function getV1SloId(
  args: InferRequestType<(typeof client.v1.slo)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.slo[':id'].$get(args, options))
}

export async function putV1SloId(
  args: InferRequestType<(typeof client.v1.slo)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.slo[':id'].$put(args, options))
}

export async function deleteV1SloId(
  args: InferRequestType<(typeof client.v1.slo)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.slo[':id'].$delete(args, options))
}
