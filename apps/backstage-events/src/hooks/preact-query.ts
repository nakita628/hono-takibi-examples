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

export function getBusKey() {
  return ['bus'] as const
}

export function getPostBusV1EventsMutationKey() {
  return ['bus', '/bus/v1/events', 'POST'] as const
}

export function getPostBusV1EventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bus.v1.events.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.bus.v1.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBusV1EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bus.v1.events.$post>) {
      return parseResponse(client.bus.v1.events.$post(args, options))
    },
  })
}

export function usePostBusV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bus.v1.events.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.bus.v1.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusV1EventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBusV1SubscriptionsSubscriptionIdMutationKey() {
  return ['bus', '/bus/v1/subscriptions/:subscriptionId', 'PUT'] as const
}

export function getPutBusV1SubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBusV1SubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>,
    ) {
      return parseResponse(client.bus.v1.subscriptions[':subscriptionId'].$put(args, options))
    },
  })
}

export function usePutBusV1SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBusV1SubscriptionsSubscriptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusV1SubscriptionsSubscriptionIdEventsQueryKey(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
) {
  return ['bus', '/bus/v1/subscriptions/:subscriptionId/events', args] as const
}

export function getBusV1SubscriptionsSubscriptionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusV1SubscriptionsSubscriptionIdEventsQueryKey>
  >({
    queryKey: getBusV1SubscriptionsSubscriptionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bus.v1.subscriptions[':subscriptionId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBusV1SubscriptionsSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusV1SubscriptionsSubscriptionIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBusV1SubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBusV1SubscriptionsSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusV1SubscriptionsSubscriptionIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBusV1SubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
