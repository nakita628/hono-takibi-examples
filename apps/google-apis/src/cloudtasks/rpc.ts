import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2beta3Name(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name'].$get(args, options))
}

export async function deleteV2beta3Name(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name'].$delete(args, options))
}

export async function patchV2beta3Name(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name'].$patch(args, options))
}

export async function getV2beta3NameLocations(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name'].locations.$get(args, options))
}

export async function postV2beta3NamePause(
  args: InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name:pause'].$post(args, options))
}

export async function postV2beta3NamePurge(
  args: InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name:purge'].$post(args, options))
}

export async function postV2beta3NameResume(
  args: InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name:resume'].$post(args, options))
}

export async function postV2beta3NameRun(
  args: InferRequestType<(typeof client.v2beta3)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':name:run'].$post(args, options))
}

export async function getV2beta3ParentQueues(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':parent'].queues.$get(args, options))
}

export async function postV2beta3ParentQueues(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':parent'].queues.$post(args, options))
}

export async function getV2beta3ParentTasks(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':parent'].tasks.$get(args, options))
}

export async function postV2beta3ParentTasks(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':parent'].tasks.$post(args, options))
}

export async function postV2beta3QueueTasksTaskIdBuffer(
  args: InferRequestType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':queue'].tasks[':taskId:buffer'].$post(args, options))
}

export async function postV2beta3ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':resource:getIamPolicy'].$post(args, options))
}

export async function postV2beta3ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':resource:setIamPolicy'].$post(args, options))
}

export async function postV2beta3ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta3[':resource:testIamPermissions'].$post(args, options))
}
