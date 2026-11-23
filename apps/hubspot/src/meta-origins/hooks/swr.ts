import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetaKey() {
  return ['meta'] as const
}

export function getGetMetaNetworkOrigins202609IpRangesKey(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges', args] as const
}

export function useGetMetaNetworkOrigins202609IpRanges<TError = unknown>(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
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
        ? getGetMetaNetworkOrigins202609IpRangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaNetworkOrigins202609IpRanges<TError = unknown>(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
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
        ? getGetMetaNetworkOrigins202609IpRangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetaNetworkOrigins202609IpRangesSimpleKey(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges/simple', args] as const
}

export function useGetMetaNetworkOrigins202609IpRangesSimple<TError = unknown>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
              >
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
        ? getGetMetaNetworkOrigins202609IpRangesSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaNetworkOrigins202609IpRangesSimple<TError = unknown>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
              >
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
        ? getGetMetaNetworkOrigins202609IpRangesSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdKey(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
) {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId',
    args,
  ] as const
}

export function useGetMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
              >
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
        ? getGetMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
            ':appId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
              >
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
        ? getGetMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
            ':appId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId',
    'POST',
  ] as const
}

export function usePostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
            ':appId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id',
    'DELETE',
  ] as const
}

export function useDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
            ':subscription-id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id/test',
    'POST',
  ] as const
}

export function usePostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
            ':subscription-id'
          ].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
