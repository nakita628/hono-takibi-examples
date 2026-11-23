import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsFilesRemindersApiVVersionFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v{version}'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_reminders.api['v{version}'][':fileId'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsFilesRemindersApiVVersionFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v{version}'][':fileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_reminders.api['v{version}'][':fileId'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsFilesRemindersApiVVersionFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v{version}'][':fileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files_reminders.api['v{version}'][':fileId'].$delete(args, options),
  )
}
