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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.bus.v1.events.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.bus.v1.events.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
  >,
) {
  return ['bus', '/bus/v1/subscriptions/:subscriptionId/events', toValue(args)] as const
}

export function getBusV1SubscriptionsSubscriptionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusV1SubscriptionsSubscriptionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bus.v1.subscriptions[':subscriptionId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getBusV1SubscriptionsSubscriptionIdEventsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusV1SubscriptionsSubscriptionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bus.v1.subscriptions[':subscriptionId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
