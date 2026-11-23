import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisApiextensionsK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisApiextensionsK8sIoV1Customresourcedefinitions(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(args, options),
  )
}

export async function postApisApiextensionsK8sIoV1Customresourcedefinitions(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$post(args, options),
  )
}

export async function deleteApisApiextensionsK8sIoV1Customresourcedefinitions(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$delete(args, options),
  )
}

export async function getApisApiextensionsK8sIoV1CustomresourcedefinitionsName(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(args, options),
  )
}

export async function putApisApiextensionsK8sIoV1CustomresourcedefinitionsName(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$put(args, options),
  )
}

export async function deleteApisApiextensionsK8sIoV1CustomresourcedefinitionsName(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisApiextensionsK8sIoV1CustomresourcedefinitionsName(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$patch(args, options),
  )
}

export async function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitions(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(args, options),
  )
}

export async function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsName(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(
      args,
      options,
    ),
  )
}
