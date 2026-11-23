import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSeldonNamespaceDeploymentApiV10Feedback(
  args: InferRequestType<
    (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.seldon[':namespace'][':deployment'].api['v1.0'].feedback.$post(args, options),
  )
}

export async function postSeldonNamespaceDeploymentApiV10Predictions(
  args: InferRequestType<
    (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.seldon[':namespace'][':deployment'].api['v1.0'].predictions.$post(args, options),
  )
}
