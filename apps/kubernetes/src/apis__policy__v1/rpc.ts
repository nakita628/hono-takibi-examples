import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisPolicyV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis.policy.v1.index.$get(undefined, options))
}

export async function getApisPolicyV1NamespacesNamespacePoddisruptionbudgets(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(args, options),
  )
}

export async function postApisPolicyV1NamespacesNamespacePoddisruptionbudgets(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$post(args, options),
  )
}

export async function deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgets(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$delete(args, options),
  )
}

export async function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisPolicyV1Poddisruptionbudgets(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.policy.v1.poddisruptionbudgets.$get(args, options))
}

export async function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgets(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(args, options),
  )
}

export async function getApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsName(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisPolicyV1WatchPoddisruptionbudgets(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.policy.v1.watch.poddisruptionbudgets.$get(args, options))
}
