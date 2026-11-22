import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCluster(
  args: InferRequestType<typeof client.cluster.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.$post(args, options))
}

export async function postClusterCalculate(
  args: InferRequestType<typeof client.cluster.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.calculate.$post(args, options))
}

export async function getClusterSolutionJobId(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.solution[':jobId'].$get(args, options))
}

export async function getGeocode(
  args: InferRequestType<typeof client.geocode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.geocode.$get(args, options))
}

export async function getIsochrone(
  args: InferRequestType<typeof client.isochrone.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.isochrone.$get(args, options))
}

export async function postMatch(
  args: InferRequestType<typeof client.match.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.match.$post(args, options))
}

export async function getMatrix(
  args: InferRequestType<typeof client.matrix.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matrix.$get(args, options))
}

export async function postMatrix(
  args: InferRequestType<typeof client.matrix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matrix.$post(args, options))
}

export async function postMatrixCalculate(
  args: InferRequestType<typeof client.matrix.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matrix.calculate.$post(args, options))
}

export async function getMatrixSolutionJobId(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.matrix.solution[':jobId'].$get(args, options))
}

export async function getRoute(
  args: InferRequestType<typeof client.route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.$get(args, options))
}

export async function postRoute(
  args: InferRequestType<typeof client.route.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route.$post(args, options))
}

export async function getRouteInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.route.info.$get(undefined, options))
}

export async function postVrp(
  args: InferRequestType<typeof client.vrp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrp.$post(args, options))
}

export async function postVrpOptimize(
  args: InferRequestType<typeof client.vrp.optimize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrp.optimize.$post(args, options))
}

export async function getVrpSolutionJobId(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrp.solution[':jobId'].$get(args, options))
}
