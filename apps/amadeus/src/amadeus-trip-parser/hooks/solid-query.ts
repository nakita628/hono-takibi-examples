import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTravelKey() {
  return ['travel'] as const
}

export function getPostTravelTripParserMutationKey() {
  return ['travel', '/travel/trip-parser', 'POST'] as const
}

export function getPostTravelTripParserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.travel)['trip-parser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.travel)['trip-parser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTravelTripParserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.travel)['trip-parser']['$post']>) {
      return parseResponse(client.travel['trip-parser'].$post(args, options))
    },
  })
}

export function createPostTravelTripParser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.travel)['trip-parser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.travel)['trip-parser']['$post']>,
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
    const mutationDefaults = getPostTravelTripParserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
