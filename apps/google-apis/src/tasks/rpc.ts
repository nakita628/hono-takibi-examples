import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTasksV1ListsTasklistClear(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.lists[':tasklist'].clear.$post(args, options))
}

export async function getTasksV1ListsTasklistTasks(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$get(args, options))
}

export async function postTasksV1ListsTasklistTasks(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$post(args, options))
}

export async function getTasksV1ListsTasklistTasksTask(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$get(args, options))
}

export async function putTasksV1ListsTasklistTasksTask(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$put(args, options))
}

export async function deleteTasksV1ListsTasklistTasksTask(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tasks.v1.lists[':tasklist'].tasks[':task'].$delete(args, options),
  )
}

export async function patchTasksV1ListsTasklistTasksTask(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tasks.v1.lists[':tasklist'].tasks[':task'].$patch(args, options),
  )
}

export async function postTasksV1ListsTasklistTasksTaskMove(
  args: InferRequestType<
    (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tasks.v1.lists[':tasklist'].tasks[':task'].move.$post(args, options),
  )
}

export async function getTasksV1UsersMeLists(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists.$get(args, options))
}

export async function postTasksV1UsersMeLists(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists.$post(args, options))
}

export async function getTasksV1UsersMeListsTasklist(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$get(args, options))
}

export async function putTasksV1UsersMeListsTasklist(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$put(args, options))
}

export async function deleteTasksV1UsersMeListsTasklist(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$delete(args, options))
}

export async function patchTasksV1UsersMeListsTasklist(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$patch(args, options))
}
