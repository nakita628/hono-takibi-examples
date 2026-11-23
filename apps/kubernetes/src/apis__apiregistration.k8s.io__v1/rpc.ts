import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisApiregistrationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, options),
  )
}

export async function getApisApiregistrationK8sIoV1Apiservices(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices.$get(args, options),
  )
}

export async function postApisApiregistrationK8sIoV1Apiservices(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices.$post(args, options),
  )
}

export async function deleteApisApiregistrationK8sIoV1Apiservices(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices.$delete(args, options),
  )
}

export async function getApisApiregistrationK8sIoV1ApiservicesName(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(args, options),
  )
}

export async function putApisApiregistrationK8sIoV1ApiservicesName(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$put(args, options),
  )
}

export async function deleteApisApiregistrationK8sIoV1ApiservicesName(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$delete(args, options),
  )
}

export async function patchApisApiregistrationK8sIoV1ApiservicesName(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$patch(args, options),
  )
}

export async function getApisApiregistrationK8sIoV1ApiservicesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(args, options),
  )
}

export async function putApisApiregistrationK8sIoV1ApiservicesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$put(args, options),
  )
}

export async function patchApisApiregistrationK8sIoV1ApiservicesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$patch(args, options),
  )
}

export async function getApisApiregistrationK8sIoV1WatchApiservices(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(args, options),
  )
}

export async function getApisApiregistrationK8sIoV1WatchApiservicesName(
  args: InferRequestType<
    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(args, options),
  )
}
