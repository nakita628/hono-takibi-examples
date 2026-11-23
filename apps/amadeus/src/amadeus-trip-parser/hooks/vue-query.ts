import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostTravelTripParser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTravelTripParserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
