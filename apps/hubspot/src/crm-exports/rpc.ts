import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCrmExports202609ExportAsync(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.exports['2026-09'].export.async.$post(args, options))
}

export async function getCrmExports202609ExportAsyncTasksTaskIdStatus(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(args, options),
  )
}

export async function getCrmExports202609ExportExportId(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.exports['2026-09'].export[':exportId'].$get(args, options))
}
