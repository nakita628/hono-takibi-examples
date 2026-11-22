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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/reportStatus/:reportId', keyArgs] as const
}

export function getReportReportStatusReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportReportStatusReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.reportStatus[':reportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportReportStatusReportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportReportStatusReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportReportStatusReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.reportStatus[':reportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportSubscriptionsByDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByDate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/subscriptionsByDate', keyArgs] as const
}

export function getReportSubscriptionsByDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportSubscriptionsByDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.subscriptionsByDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportSubscriptionsByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>
              >
            >
          >,
          ReturnType<typeof getReportSubscriptionsByDateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsByDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportSubscriptionsByDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.subscriptionsByDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportSubscriptionsByStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByStatus.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/subscriptionsByStatus', keyArgs] as const
}

export function getReportSubscriptionsByStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportSubscriptionsByStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.subscriptionsByStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportSubscriptionsByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsByStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>
              >
            >
          >,
          ReturnType<typeof getReportSubscriptionsByStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsByStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportSubscriptionsByStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.subscriptionsByStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportSubscriptionsOrderByDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/subscriptionsOrderByDate', keyArgs] as const
}

export function getReportSubscriptionsOrderByDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportSubscriptionsOrderByDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.subscriptionsOrderByDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportSubscriptionsOrderByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
              >
            >
          >,
          ReturnType<typeof getReportSubscriptionsOrderByDateQueryKey>
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
          Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsOrderByDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportSubscriptionsOrderByDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.subscriptionsOrderByDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportSubscriptionsScheduledQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsScheduled.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/subscriptionsScheduled', keyArgs] as const
}

export function getReportSubscriptionsScheduledQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsScheduled.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportSubscriptionsScheduledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.subscriptionsScheduled.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportSubscriptionsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsScheduled.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
              >
            >
          >,
          ReturnType<typeof getReportSubscriptionsScheduledQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsScheduledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportSubscriptionsScheduledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.subscriptionsScheduled.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportSubscriptionsUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsUpdated.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/subscriptionsUpdated', keyArgs] as const
}

export function getReportSubscriptionsUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsUpdated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportSubscriptionsUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.subscriptionsUpdated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportSubscriptionsUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.subscriptionsUpdated.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>
              >
            >
          >,
          ReturnType<typeof getReportSubscriptionsUpdatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportSubscriptionsUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportSubscriptionsUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.subscriptionsUpdated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings', keyArgs] as const
}

export function getSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.$post>,
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

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group', keyArgs] as const
}

export function getSubscriptionsGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/list', keyArgs] as const
}

export function getSubscriptionsGroupListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupListQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupNextPurchaseDateStrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/nextPurchase/:dateStr', keyArgs] as const
}

export function getSubscriptionsGroupNextPurchaseDateStrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupNextPurchaseDateStrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'].nextPurchase[':dateStr'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
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
                    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
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
                    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupNextPurchaseDateStrQueryKey>
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
            ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupNextPurchaseDateStrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupNextPurchaseDateStrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'].nextPurchase[':dateStr'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupSimulateGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/simulate/:groupId', keyArgs] as const
}

export function getSubscriptionsGroupSimulateGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupSimulateGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'].simulate[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupSimulateGroupIdQueryKey>
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
            ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupSimulateGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupSimulateGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'].simulate[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/:groupId', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/:groupId/addresses', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
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
                    (typeof client)['subscriptions-group'][':groupId']['addresses']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['addresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdAddressesQueryKey>
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
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['subscriptions-group'][':groupId']['addresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['subscriptions-group'][':groupId']['addresses']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/:groupId/config', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdConfigQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdConversationMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupId/conversation-message',
    keyArgs,
  ] as const
}

export function getSubscriptionsGroupGroupIdConversationMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdConversationMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['conversation-message'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdConversationMessageQueryKey>
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
              (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdConversationMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdConversationMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId']['conversation-message'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupId/frequency-options',
    keyArgs,
  ] as const
}

export function getSubscriptionsGroupGroupIdFrequencyOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['frequency-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey>
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
              (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdFrequencyOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId']['frequency-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdPaymentSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/:groupId/payment-systems', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdPaymentSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdPaymentSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['payment-systems'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']>
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
                    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdPaymentSystemsQueryKey>
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
              (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdPaymentSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdPaymentSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId']['payment-systems'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsGroupGroupIdWillCreateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions-group', '/subscriptions-group/:groupId/will-create', keyArgs] as const
}

export function getSubscriptionsGroupGroupIdWillCreateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsGroupGroupIdWillCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscriptions-group'][':groupId']['will-create'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
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
                    (typeof client)['subscriptions-group'][':groupId']['will-create']['$get']
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
                    (typeof client)['subscriptions-group'][':groupId']['will-create']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsGroupGroupIdWillCreateQueryKey>
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
            ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsGroupGroupIdWillCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsGroupGroupIdWillCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscriptions-group'][':groupId']['will-create'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.list.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/list', keyArgs] as const
}

export function getSubscriptionsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:subscriptionId', keyArgs] as const
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:subscriptionId/frequency-options', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdFrequencyOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId']['frequency-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey>
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
              (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdFrequencyOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId']['frequency-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
