import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getForecastSubmissions202609Events(
  args: InferRequestType<(typeof client)['forecast-submissions']['2026-09']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['forecast-submissions']['2026-09'].events.$get(args, options))
}
