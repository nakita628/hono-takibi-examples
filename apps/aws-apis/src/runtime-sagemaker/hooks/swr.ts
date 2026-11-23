import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getPostEndpointsEndpointNameInvocationsKey() {
  return ['endpoints', '/endpoints/:EndpointName/invocations', 'POST'] as const
}

export function usePostEndpointsEndpointNameInvocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsEndpointNameInvocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>
        },
      ) => parseResponse(client.endpoints[':EndpointName'].invocations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationKey() {
  return [
    'endpoints',
    '/endpoints/:EndpointName/async-invocations#X-Amzn-SageMaker-InputLocation',
    'POST',
  ] as const
}

export function usePostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.endpoints[':EndpointName'][
            'async-invocations#X-Amzn-SageMaker-InputLocation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
