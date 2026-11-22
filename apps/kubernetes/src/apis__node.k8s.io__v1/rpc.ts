import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisNodeK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['node.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisNodeK8sIoV1Runtimeclasses(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$get(args, options))
}

export async function postApisNodeK8sIoV1Runtimeclasses(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$post(args, options))
}

export async function deleteApisNodeK8sIoV1Runtimeclasses(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$delete(args, options))
}

export async function getApisNodeK8sIoV1RuntimeclassesName(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(args, options),
  )
}

export async function putApisNodeK8sIoV1RuntimeclassesName(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$put(args, options),
  )
}

export async function deleteApisNodeK8sIoV1RuntimeclassesName(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$delete(args, options),
  )
}

export async function patchApisNodeK8sIoV1RuntimeclassesName(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$patch(args, options),
  )
}

export async function getApisNodeK8sIoV1WatchRuntimeclasses(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(args, options))
}

export async function getApisNodeK8sIoV1WatchRuntimeclassesName(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(args, options),
  )
}
