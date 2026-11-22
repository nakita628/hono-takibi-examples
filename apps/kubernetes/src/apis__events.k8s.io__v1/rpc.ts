import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisEventsK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['events.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisEventsK8sIoV1Events(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['events.k8s.io'].v1.events.$get(args, options))
}

export async function getApisEventsK8sIoV1NamespacesNamespaceEvents(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(args, options),
  )
}

export async function postApisEventsK8sIoV1NamespacesNamespaceEvents(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$post(args, options),
  )
}

export async function deleteApisEventsK8sIoV1NamespacesNamespaceEvents(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$delete(args, options),
  )
}

export async function getApisEventsK8sIoV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(args, options),
  )
}

export async function putApisEventsK8sIoV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$put(args, options),
  )
}

export async function deleteApisEventsK8sIoV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$delete(args, options),
  )
}

export async function patchApisEventsK8sIoV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$patch(args, options),
  )
}

export async function getApisEventsK8sIoV1WatchEvents(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['events.k8s.io'].v1.watch.events.$get(args, options))
}

export async function getApisEventsK8sIoV1WatchNamespacesNamespaceEvents(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(args, options),
  )
}

export async function getApisEventsK8sIoV1WatchNamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(
      args,
      options,
    ),
  )
}
