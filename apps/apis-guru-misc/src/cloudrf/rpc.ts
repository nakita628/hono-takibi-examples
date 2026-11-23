import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getArchiveDelete(
  args: InferRequestType<typeof client.archive.delete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archive.delete.$get(args, options))
}

export async function getArchiveDeleteNetwork(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archive.delete.network.$get(args, options))
}

export async function getArchiveExport(
  args: InferRequestType<typeof client.archive.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archive.export.$get(args, options))
}

export async function getArchiveList(
  args: InferRequestType<typeof client.archive.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archive.list.$get(args, options))
}

export async function postArea(
  args: InferRequestType<typeof client.area.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.area.$post(args, options))
}

export async function postClutterAdd(
  args: InferRequestType<typeof client.clutter.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clutter.add.$post(args, options))
}

export async function getInterference(
  args: InferRequestType<typeof client.interference.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.interference.$get(args, options))
}

export async function getMesh(
  args: InferRequestType<typeof client.mesh.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mesh.$get(args, options))
}

export async function getNetwork(
  args: InferRequestType<typeof client.network.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.$get(args, options))
}

export async function postPath(
  args: InferRequestType<typeof client.path.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.path.$post(args, options))
}

export async function postPoints(
  args: InferRequestType<typeof client.points.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.points.$post(args, options))
}
