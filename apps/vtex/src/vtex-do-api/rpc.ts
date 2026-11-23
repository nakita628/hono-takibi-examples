import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNotes(
  args: InferRequestType<typeof client.notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes.$get(args, options))
}

export async function postNotes(
  args: InferRequestType<typeof client.notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes.$post(args, options))
}

export async function getNotesNoteId(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes[':noteId'].$get(args, options))
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function postTasks(
  args: InferRequestType<typeof client.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$post(args, options))
}

export async function getTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].$get(args, options))
}

export async function putTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].$put(args, options))
}

export async function postTasksTaskIdComments(
  args: InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].comments.$post(args, options))
}
