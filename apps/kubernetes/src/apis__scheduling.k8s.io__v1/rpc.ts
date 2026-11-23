import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisSchedulingK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['scheduling.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisSchedulingK8sIoV1Priorityclasses(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(args, options),
  )
}

export async function postApisSchedulingK8sIoV1Priorityclasses(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses.$post(args, options),
  )
}

export async function deleteApisSchedulingK8sIoV1Priorityclasses(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses.$delete(args, options),
  )
}

export async function getApisSchedulingK8sIoV1PriorityclassesName(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(args, options),
  )
}

export async function putApisSchedulingK8sIoV1PriorityclassesName(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$put(args, options),
  )
}

export async function deleteApisSchedulingK8sIoV1PriorityclassesName(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$delete(args, options),
  )
}

export async function patchApisSchedulingK8sIoV1PriorityclassesName(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$patch(args, options),
  )
}

export async function getApisSchedulingK8sIoV1WatchPriorityclasses(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(args, options),
  )
}

export async function getApisSchedulingK8sIoV1WatchPriorityclassesName(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(args, options),
  )
}
