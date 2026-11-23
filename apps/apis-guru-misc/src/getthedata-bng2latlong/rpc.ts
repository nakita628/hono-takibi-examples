import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBng2latlongEastingNorthing(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bng2latlong[':easting'][':northing'].$get(args, options))
}
