import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDirectionsOutputFormat(
  args: InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['directions.{outputFormat}'].$get(args, options))
}

export async function postDirectionsOutputFormat(
  args: InferRequestType<(typeof client)['directions.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['directions.{outputFormat}'].$post(args, options))
}

export async function getDistanceOutputFormat(
  args: InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['distance.{outputFormat}'].$get(args, options))
}

export async function postDistanceOutputFormat(
  args: InferRequestType<(typeof client)['distance.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['distance.{outputFormat}'].$post(args, options))
}

export async function getDistanceBetweenPairsOutputFormat(
  args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distance['betweenPairs.{outputFormat}'].$get(args, options))
}

export async function postDistanceBetweenPairsOutputFormat(
  args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distance['betweenPairs.{outputFormat}'].$post(args, options))
}

export async function getOptimalDirectionsOutputFormat(
  args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['optimalDirections.{outputFormat}'].$get(args, options))
}

export async function postOptimalDirectionsOutputFormat(
  args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['optimalDirections.{outputFormat}'].$post(args, options))
}

export async function getOptimalRouteOutputFormat(
  args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['optimalRoute.{outputFormat}'].$get(args, options))
}

export async function postOptimalRouteOutputFormat(
  args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['optimalRoute.{outputFormat}'].$post(args, options))
}

export async function getRouteOutputFormat(
  args: InferRequestType<(typeof client)['route.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['route.{outputFormat}'].$get(args, options))
}

export async function postRouteOutputFormat(
  args: InferRequestType<(typeof client)['route.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['route.{outputFormat}'].$post(args, options))
}

export async function getTruckDirectionsOutputFormat(
  args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['directions.{outputFormat}'].$get(args, options))
}

export async function postTruckDirectionsOutputFormat(
  args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['directions.{outputFormat}'].$post(args, options))
}

export async function getTruckDistanceOutputFormat(
  args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['distance.{outputFormat}'].$get(args, options))
}

export async function postTruckDistanceOutputFormat(
  args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['distance.{outputFormat}'].$post(args, options))
}

export async function getTruckDistanceBetweenPairsOutputFormat(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.truck.distance['betweenPairs.{outputFormat}'].$get(args, options),
  )
}

export async function postTruckDistanceBetweenPairsOutputFormat(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.truck.distance['betweenPairs.{outputFormat}'].$post(args, options),
  )
}

export async function getTruckOptimalDirectionsOutputFormat(
  args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['optimalDirections.{outputFormat}'].$get(args, options))
}

export async function postTruckOptimalDirectionsOutputFormat(
  args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['optimalDirections.{outputFormat}'].$post(args, options))
}

export async function getTruckOptimalRouteOutputFormat(
  args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['optimalRoute.{outputFormat}'].$get(args, options))
}

export async function postTruckOptimalRouteOutputFormat(
  args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['optimalRoute.{outputFormat}'].$post(args, options))
}

export async function getTruckRouteOutputFormat(
  args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['route.{outputFormat}'].$get(args, options))
}

export async function postTruckRouteOutputFormat(
  args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.truck['route.{outputFormat}'].$post(args, options))
}
