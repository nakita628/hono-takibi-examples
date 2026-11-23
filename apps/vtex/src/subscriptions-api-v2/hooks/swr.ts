import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetReportReportStatusReportIdKey(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/reportStatus/:reportId', keyArgs] as const
}

export function useGetReportReportStatusReportId<TError = unknown>(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
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
        ? getGetReportReportStatusReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.reportStatus[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportReportStatusReportId<TError = unknown>(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
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
        ? getGetReportReportStatusReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.reportStatus)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.reportStatus[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportSubscriptionsByDateKey(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsByDate', keyArgs] as const
}

export function useGetReportSubscriptionsByDate<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
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
        ? getGetReportSubscriptionsByDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportSubscriptionsByDate<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
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
        ? getGetReportSubscriptionsByDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportSubscriptionsByStatusKey(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsByStatus', keyArgs] as const
}

export function useGetReportSubscriptionsByStatus<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
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
        ? getGetReportSubscriptionsByStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsByStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportSubscriptionsByStatus<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
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
        ? getGetReportSubscriptionsByStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsByStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsByStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportSubscriptionsOrderByDateKey(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsOrderByDate', keyArgs] as const
}

export function useGetReportSubscriptionsOrderByDate<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
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
        ? getGetReportSubscriptionsOrderByDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsOrderByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportSubscriptionsOrderByDate<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
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
        ? getGetReportSubscriptionsOrderByDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsOrderByDate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsOrderByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportSubscriptionsScheduledKey(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsScheduled', keyArgs] as const
}

export function useGetReportSubscriptionsScheduled<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
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
        ? getGetReportSubscriptionsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsScheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportSubscriptionsScheduled<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
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
        ? getGetReportSubscriptionsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.report.subscriptionsScheduled.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsScheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportSubscriptionsUpdatedKey(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['report', '/report/subscriptionsUpdated', keyArgs] as const
}

export function useGetReportSubscriptionsUpdated<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
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
        ? getGetReportSubscriptionsUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsUpdated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportSubscriptionsUpdated<TError = unknown>(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
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
        ? getGetReportSubscriptionsUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.subscriptionsUpdated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.subscriptionsUpdated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsKey(args: InferRequestType<typeof client.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings', keyArgs] as const
}

export function useGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSettings<TError = unknown>(
  args: InferRequestType<typeof client.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.settings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSettingsKey() {
  return ['settings', '/settings', 'POST'] as const
}

export function usePostSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.$post> }) =>
        parseResponse(client.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function useGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group', keyArgs] as const
}

export function useGetSubscriptionsGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
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
        ? getGetSubscriptionsGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriptions-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
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
        ? getGetSubscriptionsGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriptions-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupListKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/list', keyArgs] as const
}

export function useGetSubscriptionsGroupList<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
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
        ? getGetSubscriptionsGroupListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriptions-group'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupList<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
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
        ? getGetSubscriptionsGroupListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscriptions-group'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupNextPurchaseDateStrKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/nextPurchase/:dateStr', keyArgs] as const
}

export function useGetSubscriptionsGroupNextPurchaseDateStr<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
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
        ? getGetSubscriptionsGroupNextPurchaseDateStrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'].nextPurchase[':dateStr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupNextPurchaseDateStr<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
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
        ? getGetSubscriptionsGroupNextPurchaseDateStrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'].nextPurchase[':dateStr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupSimulateGroupIdKey(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/simulate/:groupId', keyArgs] as const
}

export function useGetSubscriptionsGroupSimulateGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
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
        ? getGetSubscriptionsGroupSimulateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'].simulate[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupSimulateGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
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
        ? getGetSubscriptionsGroupSimulateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'].simulate[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId', keyArgs] as const
}

export function useGetSubscriptionsGroupGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
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
        ? getGetSubscriptionsGroupGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'][':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
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
        ? getGetSubscriptionsGroupGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'][':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSubscriptionsGroupGroupIdKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId', 'PATCH'] as const
}

export function usePatchSubscriptionsGroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscriptions-group'][':groupId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsGroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']> },
      ) => parseResponse(client['subscriptions-group'][':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsGroupGroupIdAdditemKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/additem', 'POST'] as const
}

export function usePostSubscriptionsGroupGroupIdAdditem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsGroupGroupIdAdditemKey()
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
            (typeof client)['subscriptions-group'][':groupId']['additem']['$post']
          >
        },
      ) =>
        parseResponse(client['subscriptions-group'][':groupId'].additem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdAddressesKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/addresses', keyArgs] as const
}

export function useGetSubscriptionsGroupGroupIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'][':groupId'].addresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'][':groupId'].addresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsGroupGroupIdAddressesKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/addresses', 'POST'] as const
}

export function usePostSubscriptionsGroupGroupIdAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsGroupGroupIdAddressesKey()
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
            (typeof client)['subscriptions-group'][':groupId']['addresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['subscriptions-group'][':groupId'].addresses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSubscriptionsGroupGroupIdCancelKey() {
  return ['subscriptions-group', '/subscriptions-group/:groupId/cancel', 'PATCH'] as const
}

export function usePatchSubscriptionsGroupGroupIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsGroupGroupIdCancelKey()
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
            (typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']
          >
        },
      ) =>
        parseResponse(client['subscriptions-group'][':groupId'].cancel.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdConfigKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/config', keyArgs] as const
}

export function useGetSubscriptionsGroupGroupIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'][':groupId'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscriptions-group'][':groupId'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdConversationMessageKey(
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

export function useGetSubscriptionsGroupGroupIdConversationMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdConversationMessageKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
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
          client['subscriptions-group'][':groupId']['conversation-message'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdConversationMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdConversationMessageKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
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
          client['subscriptions-group'][':groupId']['conversation-message'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdFrequencyOptionsKey(
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

export function useGetSubscriptionsGroupGroupIdFrequencyOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdFrequencyOptionsKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
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
          client['subscriptions-group'][':groupId']['frequency-options'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdFrequencyOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdFrequencyOptionsKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
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
          client['subscriptions-group'][':groupId']['frequency-options'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdPaymentSystemsKey(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/payment-systems', keyArgs] as const
}

export function useGetSubscriptionsGroupGroupIdPaymentSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdPaymentSystemsKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
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
          client['subscriptions-group'][':groupId']['payment-systems'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdPaymentSystems<TError = unknown>(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsGroupGroupIdPaymentSystemsKey(args)
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
                (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
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
          client['subscriptions-group'][':groupId']['payment-systems'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsGroupGroupIdWillCreateKey(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions-group', '/subscriptions-group/:groupId/will-create', keyArgs] as const
}

export function useGetSubscriptionsGroupGroupIdWillCreate<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdWillCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'][':groupId']['will-create'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsGroupGroupIdWillCreate<TError = unknown>(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
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
        ? getGetSubscriptionsGroupGroupIdWillCreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['subscriptions-group'][':groupId']['will-create'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryKey() {
  return [
    'subscriptions-group',
    '/subscriptions-group/:groupid/instances/:instanceId/retry',
    'POST',
  ] as const
}

export function usePostSubscriptionsGroupGroupidInstancesInstanceIdRetry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsGroupGroupidInstancesInstanceIdRetryKey()
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
            (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client['subscriptions-group'][':groupid'].instances[':instanceId'].retry.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsListKey(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/list', keyArgs] as const
}

export function useGetSubscriptionsList<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
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
        ? getGetSubscriptionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsList<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
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
        ? getGetSubscriptionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscriptionId', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSubscriptionsSubscriptionIdKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function usePatchSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']> },
      ) => parseResponse(client.subscriptions[':subscriptionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdAddressesKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/addresses', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdAddressesKey()
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
            (typeof client.subscriptions)[':subscriptionId']['addresses']['$post']
          >
        },
      ) =>
        parseResponse(client.subscriptions[':subscriptionId'].addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSubscriptionsSubscriptionIdCancelKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/cancel', 'PATCH'] as const
}

export function usePatchSubscriptionsSubscriptionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsSubscriptionIdCancelKey()
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
            (typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']
          >
        },
      ) => parseResponse(client.subscriptions[':subscriptionId'].cancel.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdFrequencyOptionsKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscriptionId/frequency-options', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionIdFrequencyOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsSubscriptionIdFrequencyOptionsKey(args)
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
                (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
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
          client.subscriptions[':subscriptionId']['frequency-options'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionIdFrequencyOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSubscriptionsSubscriptionIdFrequencyOptionsKey(args)
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
                (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
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
          client.subscriptions[':subscriptionId']['frequency-options'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
