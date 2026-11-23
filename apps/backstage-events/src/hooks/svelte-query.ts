import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostBusV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusV1EventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutBusV1SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBusV1SubscriptionsSubscriptionIdMutationOptions<
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

export function createBusV1SubscriptionsSubscriptionIdEvents<
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
  args: () => InferRequestType<
    (typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBusV1SubscriptionsSubscriptionIdEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
