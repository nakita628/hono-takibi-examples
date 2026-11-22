import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShoppingKey() {
  return ['shopping'] as const
}

export function getShoppingFlightOffersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shopping)['flight-offers']['$get']>>,
) {
  return ['shopping', '/shopping/flight-offers', toValue(args)] as const
}

export function getShoppingFlightOffersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shopping)['flight-offers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShoppingFlightOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shopping['flight-offers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShoppingFlightOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shopping)['flight-offers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShoppingFlightOffersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShoppingFlightOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShoppingFlightOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shopping['flight-offers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostShoppingFlightOffersMutationKey() {
  return ['shopping', '/shopping/flight-offers', 'POST'] as const
}

export function getPostShoppingFlightOffersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shopping)['flight-offers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShoppingFlightOffersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.shopping)['flight-offers']['$post']>) {
      return parseResponse(client.shopping['flight-offers'].$post(args, options))
    },
  })
}

export function usePostShoppingFlightOffers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.shopping)['flight-offers']['$post']>,
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
  const mutationDefaults = getPostShoppingFlightOffersMutationOptions<TError, TOnMutateResult>(
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
