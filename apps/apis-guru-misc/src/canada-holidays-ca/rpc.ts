import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.$get(undefined, options))
}

export async function getApiV1Holidays(
  args: InferRequestType<typeof client.api.v1.holidays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.holidays.$get(args, options))
}

export async function getApiV1HolidaysHolidayId(
  args: InferRequestType<(typeof client.api.v1.holidays)[':holidayId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.holidays[':holidayId'].$get(args, options))
}

export async function getApiV1Provinces(
  args: InferRequestType<typeof client.api.v1.provinces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.provinces.$get(args, options))
}

export async function getApiV1ProvincesProvinceId(
  args: InferRequestType<(typeof client.api.v1.provinces)[':provinceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.provinces[':provinceId'].$get(args, options))
}

export async function getApiV1Spec(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.spec.$get(undefined, options))
}
