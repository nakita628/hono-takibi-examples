import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectShoppingFlightOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShoppingFlightOffersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostShoppingFlightOffers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostShoppingFlightOffersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
