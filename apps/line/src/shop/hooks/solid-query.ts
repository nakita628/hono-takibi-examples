import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShopKey() {
  return ['shop'] as const
}

export function getPostShopV3MissionMutationKey() {
  return ['shop', '/shop/v3/mission', 'POST'] as const
}

export function getPostShopV3MissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.v3.mission.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shop.v3.mission.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShopV3MissionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shop.v3.mission.$post>) {
      return parseResponse(client.shop.v3.mission.$post(args, options))
    },
  })
}

export function createPostShopV3Mission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shop.v3.mission.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shop.v3.mission.$post>,
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
    const mutationDefaults = getPostShopV3MissionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
