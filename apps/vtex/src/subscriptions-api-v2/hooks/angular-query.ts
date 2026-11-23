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

export function injectReportReportStatusReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportReportStatusReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReportSubscriptionsByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportSubscriptionsByDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReportSubscriptionsByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportSubscriptionsByStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReportSubscriptionsOrderByDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportSubscriptionsOrderByDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReportSubscriptionsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportSubscriptionsScheduledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectReportSubscriptionsUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportSubscriptionsUpdatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSubscriptionsGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsGroupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSubscriptionsGroupList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupNextPurchaseDateStr<
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
  args: () => InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupNextPurchaseDateStrQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupSimulateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['subscriptions-group']['simulate'][':groupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupSimulateGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchSubscriptionsGroupGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubscriptionsGroupGroupIdMutationOptions<
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

export function injectPostSubscriptionsGroupGroupIdAdditem<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsGroupGroupIdAdditemMutationOptions<
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

export function injectSubscriptionsGroupGroupIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['addresses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSubscriptionsGroupGroupIdAddresses<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsGroupGroupIdAddressesMutationOptions<
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

export function injectPatchSubscriptionsGroupGroupIdCancel<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubscriptionsGroupGroupIdCancelMutationOptions<
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

export function injectSubscriptionsGroupGroupIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupGroupIdConversationMessage<
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
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdConversationMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupGroupIdFrequencyOptions<
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
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdFrequencyOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupGroupIdPaymentSystems<
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
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdPaymentSystemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectSubscriptionsGroupGroupIdWillCreate<
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
  args: () => InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['will-create']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsGroupGroupIdWillCreateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSubscriptionsGroupGroupidInstancesInstanceIdRetry<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryMutationOptions<
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

export function injectSubscriptionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubscriptionsSubscriptionIdMutationOptions<
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

export function injectPostSubscriptionsSubscriptionIdAddresses<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsSubscriptionIdAddressesMutationOptions<
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

export function injectPatchSubscriptionsSubscriptionIdCancel<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubscriptionsSubscriptionIdCancelMutationOptions<
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

export function injectSubscriptionsSubscriptionIdFrequencyOptions<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsSubscriptionIdFrequencyOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
