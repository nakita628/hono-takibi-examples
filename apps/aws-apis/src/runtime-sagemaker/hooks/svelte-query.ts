import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getPostEndpointsEndpointNameInvocationsMutationKey() {
  return ['endpoints', '/endpoints/:EndpointName/invocations', 'POST'] as const
}

export function getPostEndpointsEndpointNameInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsEndpointNameInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>,
    ) {
      return parseResponse(client.endpoints[':EndpointName'].invocations.$post(args, options))
    },
  })
}

export function createPostEndpointsEndpointNameInvocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.endpoints)[':EndpointName']['invocations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsEndpointNameInvocationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationMutationKey() {
  return [
    'endpoints',
    '/endpoints/:EndpointName/async-invocations#X-Amzn-SageMaker-InputLocation',
    'POST',
  ] as const
}

export function getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
      >,
    ) {
      return parseResponse(
        client.endpoints[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.endpoints)[':EndpointName']['async-invocations#X-Amzn-SageMaker-InputLocation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostEndpointsEndpointNameAsyncInvocationsXAmznSageMakerInputLocationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
