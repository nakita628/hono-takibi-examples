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

export function getReportKey() {
  return ['report'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getSubscriptionsGroupKey() {
  return ['subscriptions-group'] as const
}

export function getReportReportStatusReportIdQueryKey(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/reportStatus/:reportId', keyArgs] as const
}

export function getReportReportStatusReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportReportStatusReportIdQueryKey>
  >({
    queryKey: getReportReportStatusReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.reportStatus[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportReportStatusReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportReportStatusReportIdQueryKey>
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
      ...getReportReportStatusReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportReportStatusReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportReportStatusReportIdQueryKey>
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
      ...getReportReportStatusReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportSubscriptionsByDateQueryKey(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsByDate', keyArgs] as const
}

export function getReportSubscriptionsByDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsByDateQueryKey>
  >({
    queryKey: getReportSubscriptionsByDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.subscriptionsByDate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportSubscriptionsByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsByDateQueryKey>
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
      ...getReportSubscriptionsByDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportSubscriptionsByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsByDateQueryKey>
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
      ...getReportSubscriptionsByDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportSubscriptionsByStatusQueryKey(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsByStatus', keyArgs] as const
}

export function getReportSubscriptionsByStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsByStatusQueryKey>
  >({
    queryKey: getReportSubscriptionsByStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.subscriptionsByStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportSubscriptionsByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsByStatusQueryKey>
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
      ...getReportSubscriptionsByStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportSubscriptionsByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsByStatusQueryKey>
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
      ...getReportSubscriptionsByStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportSubscriptionsOrderByDateQueryKey(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsOrderByDate', keyArgs] as const
}

export function getReportSubscriptionsOrderByDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsOrderByDateQueryKey>
  >({
    queryKey: getReportSubscriptionsOrderByDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.subscriptionsOrderByDate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportSubscriptionsOrderByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsOrderByDateQueryKey>
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
      ...getReportSubscriptionsOrderByDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportSubscriptionsOrderByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsOrderByDateQueryKey>
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
      ...getReportSubscriptionsOrderByDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportSubscriptionsScheduledQueryKey(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsScheduled', keyArgs] as const
}

export function getReportSubscriptionsScheduledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsScheduledQueryKey>
  >({
    queryKey: getReportSubscriptionsScheduledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.subscriptionsScheduled.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportSubscriptionsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsScheduledQueryKey>
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
      ...getReportSubscriptionsScheduledQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportSubscriptionsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsScheduledQueryKey>
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
      ...getReportSubscriptionsScheduledQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportSubscriptionsUpdatedQueryKey(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsUpdated', keyArgs] as const
}

export function getReportSubscriptionsUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsUpdatedQueryKey>
  >({
    queryKey: getReportSubscriptionsUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.subscriptionsUpdated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportSubscriptionsUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsUpdatedQueryKey>
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
      ...getReportSubscriptionsUpdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportSubscriptionsUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportSubscriptionsUpdatedQueryKey>
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
      ...getReportSubscriptionsUpdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsQueryKey(args: InferRequestType<typeof client.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings', keyArgs] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSettingsMutationKey() {
  return ['settings', '/settings', 'POST'] as const
}

export function getPostSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$post>>>>>,
    TError,
    InferRequestType<typeof client.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$post>) {
      return parseResponse(client.settings.$post(args, options))
    },
  })
}

export function usePostSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionsGroupQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group', keyArgs] as const
}

export function getSubscriptionsGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupQueryKey>
  >({
    queryKey: getSubscriptionsGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionsGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionsGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionsGroupListQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/list', keyArgs] as const
}

export function getSubscriptionsGroupListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupListQueryKey>
  >({
    queryKey: getSubscriptionsGroupListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupListQueryKey>
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
      ...getSubscriptionsGroupListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupListQueryKey>
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
      ...getSubscriptionsGroupListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupNextPurchaseDateStrQueryKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/nextPurchase/:dateStr', keyArgs] as const
}

export function getSubscriptionsGroupNextPurchaseDateStrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupNextPurchaseDateStrQueryKey>
  >({
    queryKey: getSubscriptionsGroupNextPurchaseDateStrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'].nextPurchase[':dateStr'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupNextPurchaseDateStr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupNextPurchaseDateStrQueryKey>
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
      ...getSubscriptionsGroupNextPurchaseDateStrQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupNextPurchaseDateStr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupNextPurchaseDateStrQueryKey>
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
      ...getSubscriptionsGroupNextPurchaseDateStrQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupSimulateGroupIdQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/simulate/:groupId', keyArgs] as const
}

export function getSubscriptionsGroupSimulateGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupSimulateGroupIdQueryKey>
  >({
    queryKey: getSubscriptionsGroupSimulateGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'].simulate[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupSimulateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupSimulateGroupIdQueryKey>
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
      ...getSubscriptionsGroupSimulateGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupSimulateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupSimulateGroupIdQueryKey>
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
      ...getSubscriptionsGroupSimulateGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdQueryKey>
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
      ...getSubscriptionsGroupGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdQueryKey>
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
      ...getSubscriptionsGroupGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSubscriptionsGroupGroupIdMutationKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId', 'PATCH'] as const
}

export function getPatchSubscriptionsGroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsGroupGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']>,
    ) {
      return parseResponse(client['subscriptions-group'][':groupId'].$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsGroupGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsGroupGroupIdMutationOptions<
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

export function getPostSubscriptionsGroupGroupIdAdditemMutationKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/additem', 'POST'] as const
}

export function getPostSubscriptionsGroupGroupIdAdditemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsGroupGroupIdAdditemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['subscriptions-group'][':groupId']['additem']['$post']
      >,
    ) {
      return parseResponse(client['subscriptions-group'][':groupId'].additem.$post(args, options))
    },
  })
}

export function usePostSubscriptionsGroupGroupIdAdditem<
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
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsGroupGroupIdAdditemMutationOptions<
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

export function getSubscriptionsGroupGroupIdAddressesQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/addresses', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdAddressesQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdAddressesQueryKey>
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
      ...getSubscriptionsGroupGroupIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdAddressesQueryKey>
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
      ...getSubscriptionsGroupGroupIdAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSubscriptionsGroupGroupIdAddressesMutationKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/addresses', 'POST'] as const
}

export function getPostSubscriptionsGroupGroupIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsGroupGroupIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['subscriptions-group'][':groupId']['addresses']['$post']
      >,
    ) {
      return parseResponse(client['subscriptions-group'][':groupId'].addresses.$post(args, options))
    },
  })
}

export function usePostSubscriptionsGroupGroupIdAddresses<
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
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsGroupGroupIdAddressesMutationOptions<
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

export function getPatchSubscriptionsGroupGroupIdCancelMutationKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/cancel', 'PATCH'] as const
}

export function getPatchSubscriptionsGroupGroupIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsGroupGroupIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']
      >,
    ) {
      return parseResponse(client['subscriptions-group'][':groupId'].cancel.$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsGroupGroupIdCancel<
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
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsGroupGroupIdCancelMutationOptions<
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

export function getSubscriptionsGroupGroupIdConfigQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/config', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdConfigQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdConfigQueryKey>
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
      ...getSubscriptionsGroupGroupIdConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdConfigQueryKey>
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
      ...getSubscriptionsGroupGroupIdConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdConversationMessageQueryKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupId/conversation-message',
    keyArgs,
  ] as const
}

export function getSubscriptionsGroupGroupIdConversationMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdConversationMessageQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdConversationMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['conversation-message'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdConversationMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdConversationMessageQueryKey>
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
      ...getSubscriptionsGroupGroupIdConversationMessageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdConversationMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdConversationMessageQueryKey>
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
      ...getSubscriptionsGroupGroupIdConversationMessageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupId/frequency-options',
    keyArgs,
  ] as const
}

export function getSubscriptionsGroupGroupIdFrequencyOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['frequency-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdFrequencyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey>
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
      ...getSubscriptionsGroupGroupIdFrequencyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdFrequencyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey>
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
      ...getSubscriptionsGroupGroupIdFrequencyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdPaymentSystemsQueryKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/payment-systems', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdPaymentSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdPaymentSystemsQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdPaymentSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['payment-systems'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdPaymentSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdPaymentSystemsQueryKey>
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
      ...getSubscriptionsGroupGroupIdPaymentSystemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdPaymentSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdPaymentSystemsQueryKey>
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
      ...getSubscriptionsGroupGroupIdPaymentSystemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdWillCreateQueryKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/will-create', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdWillCreateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdWillCreateQueryKey>
  >({
    queryKey: getSubscriptionsGroupGroupIdWillCreateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['will-create'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsGroupGroupIdWillCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['will-create']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdWillCreateQueryKey>
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
      ...getSubscriptionsGroupGroupIdWillCreateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsGroupGroupIdWillCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['subscriptions-group'][':groupId']['will-create']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsGroupGroupIdWillCreateQueryKey>
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
      ...getSubscriptionsGroupGroupIdWillCreateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryMutationKey() {
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupid/instances/:instanceId/retry',
    'POST',
  ] as const
}

export function getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client['subscriptions-group'][':groupid'].instances[':instanceId'].retry.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSubscriptionsGroupGroupidInstancesInstanceIdRetry<
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
                  (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
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
  const mutationDefaults = getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryMutationOptions<
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

export function getSubscriptionsListQueryKey(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/list', keyArgs] as const
}

export function getSubscriptionsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsListQueryKey>
  >({
    queryKey: getSubscriptionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscriptionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscriptionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscriptionId', keyArgs] as const
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

export function getPatchSubscriptionsSubscriptionIdMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function getPatchSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsSubscriptionIdMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdAddressesMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/addresses', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscriptionId']['addresses']['$post']
      >,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].addresses.$post(args, options))
    },
  })
}

export function usePostSubscriptionsSubscriptionIdAddresses<
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
                ReturnType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsSubscriptionIdAddressesMutationOptions<
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

export function getPatchSubscriptionsSubscriptionIdCancelMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/cancel', 'PATCH'] as const
}

export function getPatchSubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].cancel.$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsSubscriptionIdCancel<
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
                ReturnType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSubscriptionsSubscriptionIdCancelMutationOptions<
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

export function getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscriptionId/frequency-options', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdFrequencyOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId']['frequency-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionsSubscriptionIdFrequencyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey>
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
      ...getSubscriptionsSubscriptionIdFrequencyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionsSubscriptionIdFrequencyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey>
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
      ...getSubscriptionsSubscriptionIdFrequencyOptionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
