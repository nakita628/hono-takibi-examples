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

export function getMetaKey() {
  return ['meta'] as const
}

export function getMetaNetworkOrigins202609IpRangesQueryKey(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges', args] as const
}

export function getMetaNetworkOrigins202609IpRangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetaNetworkOrigins202609IpRangesQueryKey>
  >({
    queryKey: getMetaNetworkOrigins202609IpRangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMetaNetworkOrigins202609IpRanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetaNetworkOrigins202609IpRangesQueryKey>
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
      ...getMetaNetworkOrigins202609IpRangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMetaNetworkOrigins202609IpRangesSimpleQueryKey(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges/simple', args] as const
}

export function getMetaNetworkOrigins202609IpRangesSimpleQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetaNetworkOrigins202609IpRangesSimpleQueryKey>
  >({
    queryKey: getMetaNetworkOrigins202609IpRangesSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMetaNetworkOrigins202609IpRangesSimple<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetaNetworkOrigins202609IpRangesSimpleQueryKey>
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
      ...getMetaNetworkOrigins202609IpRangesSimpleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey(
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

export function getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey>
  >({
    queryKey: getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
          ':appId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey>
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
      ...getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdMutationKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId',
    'POST',
  ] as const
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
      >,
    ) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
          ':appId'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$post']
        >,
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
    const mutationDefaults =
      getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdMutationKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id',
    'DELETE',
  ] as const
}

export function getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
          ':subscription-id'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestMutationKey() {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id/test',
    'POST',
  ] as const
}

export function getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][
          ':subscription-id'
        ].test.$post(args, options),
      )
    },
  })
}

export function injectPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId'][':subscription-id']['test']['$post']
        >,
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
    const mutationDefaults =
      getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
