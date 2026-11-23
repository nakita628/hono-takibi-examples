import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProjects(
  args: InferRequestType<typeof client.Projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.Projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].$get(args, options))
}

export async function putProjectsProjectId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].$put(args, options))
}

export async function patchProjectsProjectId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].$patch(args, options))
}

export async function getProjectsUsers(
  args: InferRequestType<typeof client.ProjectsUsers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ProjectsUsers.$get(args, options))
}

export async function getProjectsProjectIdTasks(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Tasks.$get(args, options))
}

export async function postProjectsProjectIdTasks(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Tasks.$post(args, options))
}

export async function getProjectsProjectIdTasksTaskId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Tasks[':taskId'].$get(args, options))
}

export async function putProjectsProjectIdTasksTaskId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Tasks[':taskId'].$put(args, options))
}

export async function deleteProjectsProjectIdTasksTaskId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Tasks'][':taskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Tasks[':taskId'].$delete(args, options))
}

export async function getProjectsProjectIdTime(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Time.$get(args, options))
}

export async function postProjectsProjectIdTime(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Time.$post(args, options))
}

export async function getProjectsProjectIdTimeTimeEntryId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Time[':timeEntryId'].$get(args, options))
}

export async function putProjectsProjectIdTimeTimeEntryId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Projects[':projectId'].Time[':timeEntryId'].$put(args, options))
}

export async function deleteProjectsProjectIdTimeTimeEntryId(
  args: InferRequestType<(typeof client.Projects)[':projectId']['Time'][':timeEntryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Projects[':projectId'].Time[':timeEntryId'].$delete(args, options),
  )
}
