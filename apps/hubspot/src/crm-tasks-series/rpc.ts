import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCrmTaskSeries202609(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm['task-series']['2026-09'].$post(args, options))
}

export async function getCrmTaskSeries202609TaskId(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm['task-series']['2026-09'][':taskId'].$get(args, options))
}

export async function deleteCrmTaskSeries202609TaskId(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm['task-series']['2026-09'][':taskId'].$delete(args, options))
}

export async function patchCrmTaskSeries202609TaskId(
  args: InferRequestType<(typeof client.crm)['task-series']['2026-09'][':taskId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm['task-series']['2026-09'][':taskId'].$patch(args, options))
}
