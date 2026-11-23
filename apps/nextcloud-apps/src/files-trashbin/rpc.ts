import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpAppsFilesTrashbinPreview(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.files_trashbin.preview.$get(args, options))
}
