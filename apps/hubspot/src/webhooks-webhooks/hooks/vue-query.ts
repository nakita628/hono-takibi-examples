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

export function getAppWebhooksKey() {
  return ['app-webhooks'] as const
}

export function getWebhooksJournalKey() {
  return ['webhooks-journal'] as const
}

export function getAppWebhooks202609AppIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
  >,
) {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', toValue(args)] as const
}

export function getAppWebhooks202609AppIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppWebhooks202609AppIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppWebhooks202609AppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppWebhooks202609AppIdSettingsQueryKey>
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
            ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppWebhooks202609AppIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-webhooks']['2026-09'][':appId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppWebhooks202609AppIdSettingsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', 'PUT'] as const
}

export function getPutAppWebhooks202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppWebhooks202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']
      >,
    ) {
      return parseResponse(client['app-webhooks']['2026-09'][':appId'].settings.$put(args, options))
    },
  })
}

export function usePutAppWebhooks202609AppIdSettings<
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']
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
  const mutationDefaults = getPutAppWebhooks202609AppIdSettingsMutationOptions<
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

export function getDeleteAppWebhooks202609AppIdSettingsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', 'DELETE'] as const
}

export function getDeleteAppWebhooks202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppWebhooks202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].settings.$delete(args, options),
      )
    },
  })
}

export function useDeleteAppWebhooks202609AppIdSettings<
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
                      (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
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
  const mutationDefaults = getDeleteAppWebhooks202609AppIdSettingsMutationOptions<
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

export function getAppWebhooks202609AppIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
  >,
) {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/subscriptions', toValue(args)] as const
}

export function getAppWebhooks202609AppIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppWebhooks202609AppIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppWebhooks202609AppIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsQueryKey>
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
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppWebhooks202609AppIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-webhooks']['2026-09'][':appId'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppWebhooks202609AppIdSubscriptionsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/subscriptions', 'POST'] as const
}

export function getPostAppWebhooks202609AppIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppWebhooks202609AppIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostAppWebhooks202609AppIdSubscriptions<
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
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
  const mutationDefaults = getPostAppWebhooks202609AppIdSubscriptionsMutationOptions<
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

export function getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/batch/update',
    'POST',
  ] as const
}

export function getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.batch.update.$post(args, options),
      )
    },
  })
}

export function usePostAppWebhooks202609AppIdSubscriptionsBatchUpdate<
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
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
  const mutationDefaults = getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationOptions<
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

export function getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
    >
  >,
) {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    toValue(args),
  ] as const
}

export function getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAppWebhooks202609AppIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey>
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
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionId<
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
                      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
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
    getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    'PATCH',
  ] as const
}

export function getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAppWebhooks202609AppIdSubscriptionsSubscriptionId<
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
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
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
  const mutationDefaults = getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/earliest/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchEarliestCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609BatchEarliestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/latest/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchLatestCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609BatchLatestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksJournalJournalLocal202609BatchReadMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/batch/read', 'POST'] as const
}

export function getPostWebhooksJournalJournalLocal202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalJournalLocal202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksJournalJournalLocal202609BatchRead<
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
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
  const mutationDefaults = getPostWebhooksJournalJournalLocal202609BatchReadMutationOptions<
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

export function getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/:offset/next/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[':count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609BatchOffsetNextCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[
            ':count'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournalLocal202609EarliestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/earliest',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609EarliestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609EarliestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609Earliest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609EarliestQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609EarliestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournalLocal202609EarliestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournalLocal202609LatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/latest',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609LatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609LatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609Latest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609LatestQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609LatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournalLocal202609LatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/offset/:offset/next',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609OffsetOffsetNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/status/:statusId',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournalLocal202609StatusStatusIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournalLocal202609StatusStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
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
                    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey>
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
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609BatchEarliestCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/earliest/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournal202609BatchEarliestCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609BatchEarliestCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609BatchEarliestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609BatchEarliestCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchEarliestCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609BatchEarliestCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609BatchLatestCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/latest/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournal202609BatchLatestCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609BatchLatestCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609BatchLatestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609BatchLatestCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchLatestCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609BatchLatestCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksJournalJournal202609BatchReadMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/batch/read', 'POST'] as const
}

export function getPostWebhooksJournalJournal202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalJournal202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksJournalJournal202609BatchRead<
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
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
  const mutationDefaults = getPostWebhooksJournalJournal202609BatchReadMutationOptions<
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

export function getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/:offset/next/:count',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournal202609BatchOffsetNextCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalJournal202609BatchOffsetNextCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609EarliestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/earliest', toValue(args)] as const
}

export function getWebhooksJournalJournal202609EarliestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609EarliestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].earliest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609Earliest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609EarliestQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609EarliestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609EarliestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].earliest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609LatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/latest', toValue(args)] as const
}

export function getWebhooksJournalJournal202609LatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609LatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609Latest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609LatestQueryKey>
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
            ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609LatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609LatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609OffsetOffsetNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/offset/:offset/next',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournal202609OffsetOffsetNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609OffsetOffsetNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609OffsetOffsetNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609OffsetOffsetNextQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609OffsetOffsetNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609OffsetOffsetNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalJournal202609StatusStatusIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/status/:statusId',
    toValue(args),
  ] as const
}

export function getWebhooksJournalJournal202609StatusStatusIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalJournal202609StatusStatusIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalJournal202609StatusStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
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
                    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalJournal202609StatusStatusIdQueryKey>
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
              (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609StatusStatusIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalJournal202609StatusStatusIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksJournalSnapshots202609CrmMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/snapshots/2026-09/crm', 'POST'] as const
}

export function getPostWebhooksJournalSnapshots202609CrmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSnapshots202609CrmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
      >,
    ) {
      return parseResponse(client['webhooks-journal'].snapshots['2026-09'].crm.$post(args, options))
    },
  })
}

export function usePostWebhooksJournalSnapshots202609Crm<
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
                    (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
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
  const mutationDefaults = getPostWebhooksJournalSnapshots202609CrmMutationOptions<
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

export function getWebhooksJournalSubscriptions202609QueryKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09'] as const
}

export function getWebhooksJournalSubscriptions202609QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksJournalSubscriptions202609QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalSubscriptions202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalSubscriptions202609QueryKey>
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
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksJournalSubscriptions202609QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksJournalSubscriptions202609MutationKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09', 'POST'] as const
}

export function getPostWebhooksJournalSubscriptions202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSubscriptions202609MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']
      >,
    ) {
      return parseResponse(client['webhooks-journal'].subscriptions['2026-09'].$post(args, options))
    },
  })
}

export function usePostWebhooksJournalSubscriptions202609<
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']
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
  const mutationDefaults = getPostWebhooksJournalSubscriptions202609MutationOptions<
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

export function getPostWebhooksJournalSubscriptions202609FiltersMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09/filters', 'POST'] as const
}

export function getPostWebhooksJournalSubscriptions202609FiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSubscriptions202609FiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksJournalSubscriptions202609Filters<
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
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
  const mutationDefaults = getPostWebhooksJournalSubscriptions202609FiltersMutationOptions<
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

export function getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/subscription/:subscriptionId',
    toValue(args),
  ] as const
}

export function getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
          ':subscriptionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey
          >
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
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
            ':subscriptionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    toValue(args),
  ] as const
}

export function getWebhooksJournalSubscriptions202609FiltersFilterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksJournalSubscriptions202609FiltersFilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey>
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
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWebhooksJournalSubscriptions202609FiltersFilterId<
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
                      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
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
    getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationOptions<
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

export function getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/portals/:portalId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].portals[':portalId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWebhooksJournalSubscriptions202609PortalsPortalId<
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
                      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
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
    getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationOptions<
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

export function getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
    >
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    toValue(args),
  ] as const
}

export function getWebhooksJournalSubscriptions202609SubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJournalSubscriptions202609SubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
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
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey>
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
              (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWebhooksJournalSubscriptions202609SubscriptionId<
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
                      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
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
  const mutationDefaults = getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationOptions<
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
