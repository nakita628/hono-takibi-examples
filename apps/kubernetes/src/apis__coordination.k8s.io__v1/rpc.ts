import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisCoordinationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['coordination.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisCoordinationK8sIoV1Leases(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['coordination.k8s.io'].v1.leases.$get(args, options))
}

export async function getApisCoordinationK8sIoV1NamespacesNamespaceLeases(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(args, options),
  )
}

export async function postApisCoordinationK8sIoV1NamespacesNamespaceLeases(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$post(args, options),
  )
}

export async function deleteApisCoordinationK8sIoV1NamespacesNamespaceLeases(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$delete(args, options),
  )
}

export async function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesName(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisCoordinationK8sIoV1NamespacesNamespaceLeasesName(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesName(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesName(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisCoordinationK8sIoV1WatchLeases(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['coordination.k8s.io'].v1.watch.leases.$get(args, options))
}

export async function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeases(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(args, options),
  )
}

export async function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesName(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
      args,
      options,
    ),
  )
}
