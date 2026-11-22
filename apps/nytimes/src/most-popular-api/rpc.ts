import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMostemailedSectionTimePeriodJson(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mostemailed[':section'][':time-period.json'].$get(args, options),
  )
}

export async function getMostsharedSectionTimePeriodJson(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mostshared[':section'][':time-period.json'].$get(args, options))
}

export async function getMostviewedSectionTimePeriodJson(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mostviewed[':section'][':time-period.json'].$get(args, options))
}
