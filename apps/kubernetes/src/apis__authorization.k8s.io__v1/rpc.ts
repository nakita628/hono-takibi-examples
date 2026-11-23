import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAuthorizationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['authorization.k8s.io'].v1.index.$get(undefined, options))
}

export async function postApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviews(
  args: InferRequestType<
    (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authorization.k8s.io'].v1.namespaces[':namespace'].localsubjectaccessreviews.$post(
      args,
      options,
    ),
  )
}

export async function postApisAuthorizationK8sIoV1Selfsubjectaccessreviews(
  args: InferRequestType<
    (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authorization.k8s.io'].v1.selfsubjectaccessreviews.$post(args, options),
  )
}

export async function postApisAuthorizationK8sIoV1Selfsubjectrulesreviews(
  args: InferRequestType<
    (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authorization.k8s.io'].v1.selfsubjectrulesreviews.$post(args, options),
  )
}

export async function postApisAuthorizationK8sIoV1Subjectaccessreviews(
  args: InferRequestType<
    (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authorization.k8s.io'].v1.subjectaccessreviews.$post(args, options),
  )
}
