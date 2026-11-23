import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShoppingKey() {
  return ['shopping'] as const
}

export function getShoppingFlightOffersQueryKey(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
) {
  return ['shopping', '/shopping/flight-offers', args] as const
}

export function getShoppingFlightOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShoppingFlightOffersQueryKey>
  >({
    queryKey: getShoppingFlightOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shopping['flight-offers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShoppingFlightOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getShoppingFlightOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShoppingFlightOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShoppingFlightOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShoppingFlightOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShoppingFlightOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
