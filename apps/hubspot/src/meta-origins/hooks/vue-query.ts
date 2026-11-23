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

export function getMetaKey() {
  return ['meta'] as const
}

export function getMetaNetworkOrigins202609IpRangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
  >,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges', toValue(args)] as const
}

export function getMetaNetworkOrigins202609IpRangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetaNetworkOrigins202609IpRangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetaNetworkOrigins202609IpRanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetaNetworkOrigins202609IpRangesQueryKey>
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
            ReturnType<(typeof client.meta)['network-origins']['2026-09']['ip-ranges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetaNetworkOrigins202609IpRangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetaNetworkOrigins202609IpRangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetaNetworkOrigins202609IpRangesSimpleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
    >
  >,
) {
  return ['meta', '/meta/network-origins/2026-09/ip-ranges/simple', toValue(args)] as const
}

export function getMetaNetworkOrigins202609IpRangesSimpleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetaNetworkOrigins202609IpRangesSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetaNetworkOrigins202609IpRangesSimple<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
    >
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['simple']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetaNetworkOrigins202609IpRangesSimpleQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetaNetworkOrigins202609IpRangesSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges'].simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
    >
  >,
) {
  return [
    'meta',
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId',
    toValue(args),
  ] as const
}

export function getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
          ':appId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
    >
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
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
                    (typeof client.meta)['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.meta['network-origins']['2026-09']['ip-ranges']['webhook-subscriptions'][
            ':appId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdMutationOptions<
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

export function useDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdMutationOptions<
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

export function usePostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestMutationOptions<
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
