import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsFilesExternalApiV1Mounts(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_external.api.v1.mounts.$get(args, options),
  )
}
