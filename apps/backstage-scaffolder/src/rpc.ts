import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2TemplatesNamespaceKindNameParameterSchema(
  args: InferRequestType<
    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.templates[':namespace'][':kind'][':name']['parameter-schema'].$get(args, options),
  )
}

export async function getV2Actions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.actions.$get(undefined, options))
}

export async function getV2Tasks(
  args: InferRequestType<typeof client.v2.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks.$get(args, options))
}

export async function postV2Tasks(
  args: InferRequestType<typeof client.v2.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks.$post(args, options))
}

export async function getV2TasksTaskId(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks[':taskId'].$get(args, options))
}

export async function postV2TasksTaskIdCancel(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks[':taskId'].cancel.$post(args, options))
}

export async function postV2TasksTaskIdRetry(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks[':taskId'].retry.$post(args, options))
}

export async function getV2TasksTaskIdEvents(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tasks[':taskId'].events.$get(args, options))
}

export async function postV2DryRun(
  args: InferRequestType<(typeof client.v2)['dry-run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['dry-run'].$post(args, options))
}

export async function postV2AutocompleteProviderResource(
  args: InferRequestType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.autocomplete[':provider'][':resource'].$post(args, options))
}

export async function getV2TemplatingExtensions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['templating-extensions'].$get(undefined, options))
}
