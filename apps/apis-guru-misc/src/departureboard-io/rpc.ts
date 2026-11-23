import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetArrivalsAndDeparturesByCRSCRS(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getArrivalsAndDeparturesByCRS[':CRS'].$get(args, options))
}

export async function getGetArrivalsByCRSCRS(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getArrivalsByCRS[':CRS'].$get(args, options))
}

export async function getGetDeparturesByCRSCRS(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDeparturesByCRS[':CRS'].$get(args, options))
}

export async function getGetFastestDeparturesByCRSCRS(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getFastestDeparturesByCRS[':CRS'].$get(args, options))
}

export async function getGetNextDeparturesByCRSCRS(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getNextDeparturesByCRS[':CRS'].$get(args, options))
}

export async function getGetServiceDetailsByIDServiceID(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getServiceDetailsByID[':serviceID'].$get(args, options))
}
