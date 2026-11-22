import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisBatchV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis.batch.v1.index.$get(undefined, options))
}

export async function getApisBatchV1Cronjobs(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.batch.v1.cronjobs.$get(args, options))
}

export async function getApisBatchV1Jobs(
  args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.batch.v1.jobs.$get(args, options))
}

export async function getApisBatchV1NamespacesNamespaceCronjobs(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(args, options),
  )
}

export async function postApisBatchV1NamespacesNamespaceCronjobs(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs.$post(args, options),
  )
}

export async function deleteApisBatchV1NamespacesNamespaceCronjobs(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs.$delete(args, options),
  )
}

export async function getApisBatchV1NamespacesNamespaceCronjobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(args, options),
  )
}

export async function putApisBatchV1NamespacesNamespaceCronjobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$put(args, options),
  )
}

export async function deleteApisBatchV1NamespacesNamespaceCronjobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$delete(args, options),
  )
}

export async function patchApisBatchV1NamespacesNamespaceCronjobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$patch(args, options),
  )
}

export async function getApisBatchV1NamespacesNamespaceCronjobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(args, options),
  )
}

export async function putApisBatchV1NamespacesNamespaceCronjobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$put(args, options),
  )
}

export async function patchApisBatchV1NamespacesNamespaceCronjobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$patch(args, options),
  )
}

export async function getApisBatchV1NamespacesNamespaceJobs(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.batch.v1.namespaces[':namespace'].jobs.$get(args, options))
}

export async function postApisBatchV1NamespacesNamespaceJobs(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs.$post(args, options),
  )
}

export async function deleteApisBatchV1NamespacesNamespaceJobs(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs.$delete(args, options),
  )
}

export async function getApisBatchV1NamespacesNamespaceJobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(args, options),
  )
}

export async function putApisBatchV1NamespacesNamespaceJobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$put(args, options),
  )
}

export async function deleteApisBatchV1NamespacesNamespaceJobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$delete(args, options),
  )
}

export async function patchApisBatchV1NamespacesNamespaceJobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$patch(args, options),
  )
}

export async function getApisBatchV1NamespacesNamespaceJobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(args, options),
  )
}

export async function putApisBatchV1NamespacesNamespaceJobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$put(args, options),
  )
}

export async function patchApisBatchV1NamespacesNamespaceJobsNameStatus(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$patch(args, options),
  )
}

export async function getApisBatchV1WatchCronjobs(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.batch.v1.watch.cronjobs.$get(args, options))
}

export async function getApisBatchV1WatchJobs(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.batch.v1.watch.jobs.$get(args, options))
}

export async function getApisBatchV1WatchNamespacesNamespaceCronjobs(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(args, options),
  )
}

export async function getApisBatchV1WatchNamespacesNamespaceCronjobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(args, options),
  )
}

export async function getApisBatchV1WatchNamespacesNamespaceJobs(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(args, options),
  )
}

export async function getApisBatchV1WatchNamespacesNamespaceJobsName(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(args, options),
  )
}
