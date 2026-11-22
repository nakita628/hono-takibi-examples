import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpAppsFilesVersionsPreview(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.files_versions.preview.$get(args, options))
}
