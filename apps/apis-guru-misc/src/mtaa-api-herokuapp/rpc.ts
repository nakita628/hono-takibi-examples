import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCountry(
  args: InferRequestType<(typeof client)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':country'].$get(args, options))
}

export async function getCountryRegion(
  args: InferRequestType<(typeof client)[':country'][':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':country'][':region'].$get(args, options))
}

export async function getCountryRegionDistrict(
  args: InferRequestType<(typeof client)[':country'][':region'][':district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':country'][':region'][':district'].$get(args, options))
}

export async function getCountryRegionDistrictWard(
  args: InferRequestType<(typeof client)[':country'][':region'][':district'][':ward']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':country'][':region'][':district'][':ward'].$get(args, options),
  )
}

export async function getCountryRegionDistrictWardStreet(
  args: InferRequestType<
    (typeof client)[':country'][':region'][':district'][':ward'][':street']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':country'][':region'][':district'][':ward'][':street'].$get(args, options),
  )
}
