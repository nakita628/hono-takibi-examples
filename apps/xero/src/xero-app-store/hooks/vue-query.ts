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

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records',
    'POST',
  ] as const
}

export function getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].items[':subscriptionItemId']['usage-records'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecords<
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
                    (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records']['$post']
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
    getPostSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsMutationOptions<
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

export function getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:subscriptionId/items/:subscriptionItemId/usage-records/:usageRecordId',
    'PUT',
  ] as const
}

export function getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].items[':subscriptionItemId']['usage-records'][
          ':usageRecordId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordId<
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
                    (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':subscriptionId']['items'][':subscriptionItemId']['usage-records'][':usageRecordId']['$put']
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
    getPutSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdMutationOptions<
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

export function getSubscriptionsSubscriptionIdUsageRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/usage-records', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdUsageRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdUsageRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId']['usage-records'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdUsageRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdUsageRecordsQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdUsageRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdUsageRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId']['usage-records'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
