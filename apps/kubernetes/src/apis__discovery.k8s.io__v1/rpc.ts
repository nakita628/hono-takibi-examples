import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisDiscoveryK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['discovery.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisDiscoveryK8sIoV1Endpointslices(
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['discovery.k8s.io'].v1.endpointslices.$get(args, options))
}

export async function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(args, options),
  )
}

export async function postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$post(args, options),
  )
}

export async function deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$delete(
      args,
      options,
    ),
  )
}

export async function getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisDiscoveryK8sIoV1WatchEndpointslices(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(args, options),
  )
}

export async function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslices(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
      args,
      options,
    ),
  )
}

export async function getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesName(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[':name'].$get(
      args,
      options,
    ),
  )
}
