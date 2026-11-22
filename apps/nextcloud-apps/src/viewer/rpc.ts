import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putOcsV2PhpAppsViewerApiV1ConfigKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['viewer']['api']['v1']['config'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.viewer.api.v1.config[':key'].$put(args, options),
  )
}
