import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBusKey() {
  return ['bus'] as const
}

export function getPostBusV1EventsKey() {
  return ['bus', '/bus/v1/events', 'POST'] as const
}

export function usePostBusV1Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bus.v1.events.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.bus.v1.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusV1EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bus.v1.events.$post> }) =>
        parseResponse(client.bus.v1.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBusV1SubscriptionsSubscriptionIdKey() {
  return ['bus', '/bus/v1/subscriptions/:subscriptionId', 'PUT'] as const
}

export function usePutBusV1SubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBusV1SubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['$put']>
        },
      ) => parseResponse(client.bus.v1.subscriptions[':subscriptionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusV1SubscriptionsSubscriptionIdEventsKey(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
) {
  return ['bus', '/bus/v1/subscriptions/:subscriptionId/events', args] as const
}

export function useGetBusV1SubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusV1SubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bus.v1.subscriptions[':subscriptionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusV1SubscriptionsSubscriptionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusV1SubscriptionsSubscriptionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bus.v1.subscriptions)[':subscriptionId']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bus.v1.subscriptions[':subscriptionId'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
