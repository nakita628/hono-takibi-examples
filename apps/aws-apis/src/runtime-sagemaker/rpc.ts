import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEndpointsEndpointNameInvocations(
  args: InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':EndpointName'].invocations.$post(args, options))
}

export async function postEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocation(
  args: InferRequestType<
    (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation'].$post(
      args,
      options,
    ),
  )
}
