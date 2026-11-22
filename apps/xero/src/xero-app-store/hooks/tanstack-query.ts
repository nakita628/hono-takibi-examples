import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', args] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/usage-records', args] as const
}

export function getSubscriptionsSubscriptionIdUsageRecordsQueryOptions<
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdUsageRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId']['usage-records'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdUsageRecordsQueryKey>
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
      ...getSubscriptionsSubscriptionIdUsageRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionIdUsageRecords<
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['usage-records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdUsageRecordsQueryKey>
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
      ...getSubscriptionsSubscriptionIdUsageRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
