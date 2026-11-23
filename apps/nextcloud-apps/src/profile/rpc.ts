import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsProfileApiV1ResourcesUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['profile']['api']['v1']['resources'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.profile.api.v1.resources[':userId'].$get(args, options),
  )
}
