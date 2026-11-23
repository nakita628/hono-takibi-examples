import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2DiscoveryClientStatusMutationKey() {
  return ['v2', '/v2/discovery:client_status', 'POST'] as const
}

export function getPostV2DiscoveryClientStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['discovery:client_status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['discovery:client_status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DiscoveryClientStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['discovery:client_status']['$post']>,
    ) {
      return parseResponse(client.v2['discovery:client_status'].$post(args, options))
    },
  })
}

export function createPostV2DiscoveryClientStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['discovery:client_status']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['discovery:client_status']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2DiscoveryClientStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
