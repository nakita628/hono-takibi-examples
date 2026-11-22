import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAuthenticationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['authentication.k8s.io'].v1.index.$get(undefined, options))
}

export async function postApisAuthenticationK8sIoV1Selfsubjectreviews(
  args: InferRequestType<
    (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authentication.k8s.io'].v1.selfsubjectreviews.$post(args, options),
  )
}

export async function postApisAuthenticationK8sIoV1Tokenreviews(
  args: InferRequestType<
    (typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['authentication.k8s.io'].v1.tokenreviews.$post(args, options),
  )
}
