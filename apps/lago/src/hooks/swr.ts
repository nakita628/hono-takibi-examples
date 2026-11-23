import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivityLogsKey() {
  return ['activity_logs'] as const
}

export function getAddOnsKey() {
  return ['add_ons'] as const
}

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getApiLogsKey() {
  return ['api_logs'] as const
}

export function getAppliedCouponsKey() {
  return ['applied_coupons'] as const
}

export function getBillableMetricsKey() {
  return ['billable_metrics'] as const
}

export function getBillingEntitiesKey() {
  return ['billing_entities'] as const
}

export function getCouponsKey() {
  return ['coupons'] as const
}

export function getCreditNotesKey() {
  return ['credit_notes'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getFeesKey() {
  return ['fees'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getOrderFormsKey() {
  return ['order_forms'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPaymentReceiptsKey() {
  return ['payment_receipts'] as const
}

export function getPaymentRequestsKey() {
  return ['payment_requests'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getQuoteVersionsKey() {
  return ['quote_versions'] as const
}

export function getQuotesKey() {
  return ['quotes'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTaxesKey() {
  return ['taxes'] as const
}

export function getUsageAttributionTypesKey() {
  return ['usage_attribution_types'] as const
}

export function getWalletTransactionsKey() {
  return ['wallet_transactions'] as const
}

export function getWalletsKey() {
  return ['wallets'] as const
}

export function getWebhookEndpointsKey() {
  return ['webhook_endpoints'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetBillingEntitiesKey() {
  return ['billing_entities', '/billing_entities'] as const
}

export function useGetBillingEntities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingEntitiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_entities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingEntities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingEntitiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_entities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingEntitiesKey() {
  return ['billing_entities', '/billing_entities', 'POST'] as const
}

export function usePostBillingEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing_entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billing_entities.$post> }) =>
        parseResponse(client.billing_entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingEntitiesCodeKey(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
) {
  return ['billing_entities', '/billing_entities/:code', args] as const
}

export function useGetBillingEntitiesCode<TError = unknown>(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
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
        ? getGetBillingEntitiesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_entities[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingEntitiesCode<TError = unknown>(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
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
        ? getGetBillingEntitiesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing_entities[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillingEntitiesCodeKey() {
  return ['billing_entities', '/billing_entities/:code', 'PUT'] as const
}

export function usePutBillingEntitiesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billing_entities)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingEntitiesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billing_entities)[':code']['$put']> },
      ) => parseResponse(client.billing_entities[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActivityLogsKey(args: InferRequestType<typeof client.activity_logs.$get>) {
  return ['activity_logs', '/activity_logs', args] as const
}

export function useGetActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivityLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivityLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActivityLogsActivityIdKey(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
) {
  return ['activity_logs', '/activity_logs/:activity_id', args] as const
}

export function useGetActivityLogsActivityId<TError = unknown>(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
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
        ? getGetActivityLogsActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activity_logs[':activity_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActivityLogsActivityId<TError = unknown>(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
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
        ? getGetActivityLogsActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activity_logs[':activity_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddOnsKey(args: InferRequestType<typeof client.add_ons.$get>) {
  return ['add_ons', '/add_ons', args] as const
}

export function useGetAddOns<TError = unknown>(
  args: InferRequestType<typeof client.add_ons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddOnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.add_ons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAddOns<TError = unknown>(
  args: InferRequestType<typeof client.add_ons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddOnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.add_ons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAddOnsKey() {
  return ['add_ons', '/add_ons', 'POST'] as const
}

export function usePostAddOns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.add_ons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddOnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.add_ons.$post> }) =>
        parseResponse(client.add_ons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddOnsCodeKey(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
) {
  return ['add_ons', '/add_ons/:code', args] as const
}

export function useGetAddOnsCode<TError = unknown>(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAddOnsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.add_ons[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddOnsCode<TError = unknown>(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAddOnsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.add_ons[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAddOnsCodeKey() {
  return ['add_ons', '/add_ons/:code', 'PUT'] as const
}

export function usePutAddOnsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.add_ons)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAddOnsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.add_ons)[':code']['$put']> },
      ) => parseResponse(client.add_ons[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAddOnsCodeKey() {
  return ['add_ons', '/add_ons/:code', 'DELETE'] as const
}

export function useDeleteAddOnsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.add_ons)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddOnsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.add_ons)[':code']['$delete']> },
      ) => parseResponse(client.add_ons[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLogsKey(args: InferRequestType<typeof client.api_logs.$get>) {
  return ['api_logs', '/api_logs', args] as const
}

export function useGetApiLogs<TError = unknown>(
  args: InferRequestType<typeof client.api_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiLogs<TError = unknown>(
  args: InferRequestType<typeof client.api_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiLogsRequestIdKey(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
) {
  return ['api_logs', '/api_logs/:request_id', args] as const
}

export function useGetApiLogsRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
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
        ? getGetApiLogsRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_logs[':request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogsRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
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
        ? getGetApiLogsRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_logs[':request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsGrossRevenueKey(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
) {
  return ['analytics', '/analytics/gross_revenue', args] as const
}

export function useGetAnalyticsGrossRevenue<TError = unknown>(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
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
        ? getGetAnalyticsGrossRevenueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.gross_revenue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsGrossRevenue<TError = unknown>(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
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
        ? getGetAnalyticsGrossRevenueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.gross_revenue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsInvoiceCollectionKey(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
) {
  return ['analytics', '/analytics/invoice_collection', args] as const
}

export function useGetAnalyticsInvoiceCollection<TError = unknown>(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
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
        ? getGetAnalyticsInvoiceCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.invoice_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsInvoiceCollection<TError = unknown>(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
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
        ? getGetAnalyticsInvoiceCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.invoice_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsInvoicedUsageKey(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
) {
  return ['analytics', '/analytics/invoiced_usage', args] as const
}

export function useGetAnalyticsInvoicedUsage<TError = unknown>(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
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
        ? getGetAnalyticsInvoicedUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.invoiced_usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsInvoicedUsage<TError = unknown>(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
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
        ? getGetAnalyticsInvoicedUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.invoiced_usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsMrrKey(args: InferRequestType<typeof client.analytics.mrr.$get>) {
  return ['analytics', '/analytics/mrr', args] as const
}

export function useGetAnalyticsMrr<TError = unknown>(
  args: InferRequestType<typeof client.analytics.mrr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsMrrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.mrr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsMrr<TError = unknown>(
  args: InferRequestType<typeof client.analytics.mrr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsMrrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.mrr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsOverdueBalanceKey(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
) {
  return ['analytics', '/analytics/overdue_balance', args] as const
}

export function useGetAnalyticsOverdueBalance<TError = unknown>(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
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
        ? getGetAnalyticsOverdueBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.overdue_balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsOverdueBalance<TError = unknown>(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
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
        ? getGetAnalyticsOverdueBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.overdue_balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsUsageKey(
  args: InferRequestType<typeof client.analytics.usage.$get>,
) {
  return ['analytics', '/analytics/usage', args] as const
}

export function useGetAnalyticsUsage<TError = unknown>(
  args: InferRequestType<typeof client.analytics.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsUsage<TError = unknown>(
  args: InferRequestType<typeof client.analytics.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppliedCouponsKey(
  args: InferRequestType<typeof client.applied_coupons.$get>,
) {
  return ['applied_coupons', '/applied_coupons', args] as const
}

export function useGetAppliedCoupons<TError = unknown>(
  args: InferRequestType<typeof client.applied_coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppliedCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applied_coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppliedCoupons<TError = unknown>(
  args: InferRequestType<typeof client.applied_coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppliedCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applied_coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppliedCouponsKey() {
  return ['applied_coupons', '/applied_coupons', 'POST'] as const
}

export function usePostAppliedCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.applied_coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppliedCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.applied_coupons.$post> }) =>
        parseResponse(client.applied_coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillableMetricsKey(
  args: InferRequestType<typeof client.billable_metrics.$get>,
) {
  return ['billable_metrics', '/billable_metrics', args] as const
}

export function useGetBillableMetrics<TError = unknown>(
  args: InferRequestType<typeof client.billable_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
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
        ? getGetBillableMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billable_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillableMetrics<TError = unknown>(
  args: InferRequestType<typeof client.billable_metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
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
        ? getGetBillableMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billable_metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillableMetricsKey() {
  return ['billable_metrics', '/billable_metrics', 'POST'] as const
}

export function usePostBillableMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billable_metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillableMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billable_metrics.$post> }) =>
        parseResponse(client.billable_metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBillableMetricsEvaluateExpressionKey() {
  return ['billable_metrics', '/billable_metrics/evaluate_expression', 'POST'] as const
}

export function usePostBillableMetricsEvaluateExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.billable_metrics.evaluate_expression.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.billable_metrics.evaluate_expression.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillableMetricsEvaluateExpressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.billable_metrics.evaluate_expression.$post> },
      ) => parseResponse(client.billable_metrics.evaluate_expression.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillableMetricsCodeKey(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
) {
  return ['billable_metrics', '/billable_metrics/:code', args] as const
}

export function useGetBillableMetricsCode<TError = unknown>(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
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
        ? getGetBillableMetricsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billable_metrics[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillableMetricsCode<TError = unknown>(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
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
        ? getGetBillableMetricsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billable_metrics[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillableMetricsCodeKey() {
  return ['billable_metrics', '/billable_metrics/:code', 'PUT'] as const
}

export function usePutBillableMetricsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billable_metrics)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillableMetricsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billable_metrics)[':code']['$put']> },
      ) => parseResponse(client.billable_metrics[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBillableMetricsCodeKey() {
  return ['billable_metrics', '/billable_metrics/:code', 'DELETE'] as const
}

export function useDeleteBillableMetricsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billable_metrics)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBillableMetricsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.billable_metrics)[':code']['$delete']> },
      ) => parseResponse(client.billable_metrics[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeaturesKey(args: InferRequestType<typeof client.features.$get>) {
  return ['features', '/features', args] as const
}

export function useGetFeatures<TError = unknown>(
  args: InferRequestType<typeof client.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.features.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFeatures<TError = unknown>(
  args: InferRequestType<typeof client.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.features.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFeaturesKey() {
  return ['features', '/features', 'POST'] as const
}

export function usePostFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.features.$post> }) =>
        parseResponse(client.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeaturesCodeKey(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
) {
  return ['features', '/features/:code', args] as const
}

export function useGetFeaturesCode<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeaturesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeaturesCode<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeaturesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFeaturesCodeKey() {
  return ['features', '/features/:code', 'PUT'] as const
}

export function usePutFeaturesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeaturesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.features)[':code']['$put']> },
      ) => parseResponse(client.features[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeaturesCodeKey() {
  return ['features', '/features/:code', 'DELETE'] as const
}

export function useDeleteFeaturesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeaturesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.features)[':code']['$delete']> },
      ) => parseResponse(client.features[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeaturesCodePrivilegesPrivilegeCodeKey() {
  return ['features', '/features/:code/privileges/:privilege_code', 'DELETE'] as const
}

export function useDeleteFeaturesCodePrivilegesPrivilegeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.features)[':code']['privileges'][':privilege_code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeaturesCodePrivilegesPrivilegeCodeKey()
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
            (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.features[':code'].privileges[':privilege_code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsKey(args: InferRequestType<typeof client.coupons.$get>) {
  return ['coupons', '/coupons', args] as const
}

export function useGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCouponsKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function usePostCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coupons.$post> }) =>
        parseResponse(client.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsCodeKey(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
) {
  return ['coupons', '/coupons/:code', args] as const
}

export function useGetCouponsCode<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCouponsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponsCode<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCouponsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCouponsCodeKey() {
  return ['coupons', '/coupons/:code', 'PUT'] as const
}

export function usePutCouponsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCouponsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.coupons)[':code']['$put']> },
      ) => parseResponse(client.coupons[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCouponsCodeKey() {
  return ['coupons', '/coupons/:code', 'DELETE'] as const
}

export function useDeleteCouponsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCouponsCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.coupons)[':code']['$delete']> },
      ) => parseResponse(client.coupons[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesKey(args: InferRequestType<typeof client.credit_notes.$get>) {
  return ['credit_notes', '/credit_notes', args] as const
}

export function useGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreditNotesKey() {
  return ['credit_notes', '/credit_notes', 'POST'] as const
}

export function usePostCreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit_notes.$post> }) =>
        parseResponse(client.credit_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditNotesLagoIdKey(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
) {
  return ['credit_notes', '/credit_notes/:lago_id', args] as const
}

export function useGetCreditNotesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
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
        ? getGetCreditNotesLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreditNotesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
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
        ? getGetCreditNotesLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credit_notes[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCreditNotesLagoIdKey() {
  return ['credit_notes', '/credit_notes/:lago_id', 'PUT'] as const
}

export function usePutCreditNotesLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']> },
      ) => parseResponse(client.credit_notes[':lago_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesLagoIdDownloadKey() {
  return ['credit_notes', '/credit_notes/:lago_id/download', 'POST'] as const
}

export function usePostCreditNotesLagoIdDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['download']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesLagoIdDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']> },
      ) => parseResponse(client.credit_notes[':lago_id'].download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesLagoIdDownloadXmlKey() {
  return ['credit_notes', '/credit_notes/:lago_id/download_xml', 'POST'] as const
}

export function usePostCreditNotesLagoIdDownloadXml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesLagoIdDownloadXmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>
        },
      ) => parseResponse(client.credit_notes[':lago_id'].download_xml.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesEstimateKey() {
  return ['credit_notes', '/credit_notes/estimate', 'POST'] as const
}

export function usePostCreditNotesEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.estimate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit_notes.estimate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit_notes.estimate.$post> },
      ) => parseResponse(client.credit_notes.estimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreditNotesLagoIdVoidKey() {
  return ['credit_notes', '/credit_notes/:lago_id/void', 'PUT'] as const
}

export function usePutCreditNotesLagoIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['void']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreditNotesLagoIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']> },
      ) => parseResponse(client.credit_notes[':lago_id'].void.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditNotesLagoIdMetadataKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'POST'] as const
}

export function usePostCreditNotesLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditNotesLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']> },
      ) => parseResponse(client.credit_notes[':lago_id'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCreditNotesLagoIdMetadataKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'DELETE'] as const
}

export function useDeleteCreditNotesLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCreditNotesLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>
        },
      ) => parseResponse(client.credit_notes[':lago_id'].metadata.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCreditNotesLagoIdMetadataKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'PATCH'] as const
}

export function usePatchCreditNotesLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCreditNotesLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>
        },
      ) => parseResponse(client.credit_notes[':lago_id'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCreditNotesLagoIdMetadataKeyKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata/:key', 'DELETE'] as const
}

export function useDeleteCreditNotesLagoIdMetadataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCreditNotesLagoIdMetadataKeyKey()
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
            (typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(client.credit_notes[':lago_id'].metadata[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersKey(args: InferRequestType<typeof client.customers.$get>) {
  return ['customers', '/customers', args] as const
}

export function useGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function usePostCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.$post> }) =>
        parseResponse(client.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id', args] as const
}

export function useGetCustomersExternalCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
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
        ? getGetCustomersExternalCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
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
        ? getGetCustomersExternalCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdKey() {
  return ['customers', '/customers/:external_customer_id', 'DELETE'] as const
}

export function useDeleteCustomersExternalCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']> },
      ) => parseResponse(client.customers[':external_customer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdAppliedCouponsKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/applied_coupons', args] as const
}

export function useGetCustomersExternalCustomerIdAppliedCoupons<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
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
        ? getGetCustomersExternalCustomerIdAppliedCouponsKey(args)
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
                (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
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
          client.customers[':external_customer_id'].applied_coupons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdAppliedCoupons<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
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
        ? getGetCustomersExternalCustomerIdAppliedCouponsKey(args)
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
                (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
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
          client.customers[':external_customer_id'].applied_coupons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdKey() {
  return [
    'customers',
    '/customers/:external_customer_id/applied_coupons/:applied_coupon_id',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdKey()
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
            (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].applied_coupons[':applied_coupon_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdCreditNotesKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/credit_notes', args] as const
}

export function useGetCustomersExternalCustomerIdCreditNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
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
        ? getGetCustomersExternalCustomerIdCreditNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].credit_notes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdCreditNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
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
        ? getGetCustomersExternalCustomerIdCreditNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].credit_notes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdInvoicesKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/invoices', args] as const
}

export function useGetCustomersExternalCustomerIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
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
        ? getGetCustomersExternalCustomerIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
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
        ? getGetCustomersExternalCustomerIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdPaymentsKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/payments', args] as const
}

export function useGetCustomersExternalCustomerIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
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
        ? getGetCustomersExternalCustomerIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
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
        ? getGetCustomersExternalCustomerIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdPaymentRequestsKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_requests', args] as const
}

export function useGetCustomersExternalCustomerIdPaymentRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
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
        ? getGetCustomersExternalCustomerIdPaymentRequestsKey(args)
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
                (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
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
          client.customers[':external_customer_id'].payment_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdPaymentRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
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
        ? getGetCustomersExternalCustomerIdPaymentRequestsKey(args)
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
                (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
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
          client.customers[':external_customer_id'].payment_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdPortalUrlKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/portal_url', args] as const
}

export function useGetCustomersExternalCustomerIdPortalUrl<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
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
        ? getGetCustomersExternalCustomerIdPortalUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].portal_url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdPortalUrl<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
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
        ? getGetCustomersExternalCustomerIdPortalUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].portal_url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdSubscriptionsKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/subscriptions', args] as const
}

export function useGetCustomersExternalCustomerIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
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
        ? getGetCustomersExternalCustomerIdSubscriptionsKey(args)
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
                (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
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
          client.customers[':external_customer_id'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
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
        ? getGetCustomersExternalCustomerIdSubscriptionsKey(args)
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
                (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
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
          client.customers[':external_customer_id'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdWalletsKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/wallets', args] as const
}

export function useGetCustomersExternalCustomerIdWallets<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
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
        ? getGetCustomersExternalCustomerIdWalletsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdWallets<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
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
        ? getGetCustomersExternalCustomerIdWalletsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':external_customer_id'].wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersExternalCustomerIdWalletsKey() {
  return ['customers', '/customers/:external_customer_id/wallets', 'POST'] as const
}

export function usePostCustomersExternalCustomerIdWallets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersExternalCustomerIdWalletsKey()
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
            (typeof client.customers)[':external_customer_id']['wallets']['$post']
          >
        },
      ) =>
        parseResponse(client.customers[':external_customer_id'].wallets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdWalletsCodeKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/wallets/:code', args] as const
}

export function useGetCustomersExternalCustomerIdWalletsCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsCodeKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
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
          client.customers[':external_customer_id'].wallets[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdWalletsCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsCodeKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
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
          client.customers[':external_customer_id'].wallets[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersExternalCustomerIdWalletsCodeKey() {
  return ['customers', '/customers/:external_customer_id/wallets/:code', 'PUT'] as const
}

export function usePutCustomersExternalCustomerIdWalletsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersExternalCustomerIdWalletsCodeKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdWalletsCodeKey() {
  return ['customers', '/customers/:external_customer_id/wallets/:code', 'DELETE'] as const
}

export function useDeleteCustomersExternalCustomerIdWalletsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdWalletsCodeKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'POST',
  ] as const
}

export function usePostCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'PATCH',
  ] as const
}

export function usePatchCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata/:key',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].metadata[
            ':key'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
) {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    args,
  ] as const
}

export function useGetCustomersExternalCustomerIdWalletsWalletCodeAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdWalletsWalletCodeAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    'POST',
  ] as const
}

export function usePostCustomersExternalCustomerIdWalletsWalletCodeAlerts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeAlerts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
) {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    args,
  ] as const
}

export function useGetCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
        ? getGetCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey(args)
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
                (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    'PUT',
  ] as const
}

export function usePutCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeKey()
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
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdCurrentUsageKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/current_usage', args] as const
}

export function useGetCustomersExternalCustomerIdCurrentUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['current_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdCurrentUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['current_usage']['$get']
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
          client.customers[':external_customer_id'].current_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdCurrentUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['current_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdCurrentUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['current_usage']['$get']
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
          client.customers[':external_customer_id'].current_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdProjectedUsageKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/projected_usage', args] as const
}

export function useGetCustomersExternalCustomerIdProjectedUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdProjectedUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
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
          client.customers[':external_customer_id'].projected_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdProjectedUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdProjectedUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
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
          client.customers[':external_customer_id'].projected_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdPastUsageKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/past_usage', args] as const
}

export function useGetCustomersExternalCustomerIdPastUsage<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
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
        ? getGetCustomersExternalCustomerIdPastUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].past_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdPastUsage<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
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
        ? getGetCustomersExternalCustomerIdPastUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customers[':external_customer_id'].past_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdAttributedUsageKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/attributed_usage', args] as const
}

export function useGetCustomersExternalCustomerIdAttributedUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdAttributedUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
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
          client.customers[':external_customer_id'].attributed_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdAttributedUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
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
        ? getGetCustomersExternalCustomerIdAttributedUsageKey(args)
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
                (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
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
          client.customers[':external_customer_id'].attributed_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersExternalCustomerIdCheckoutUrlKey() {
  return ['customers', '/customers/:external_customer_id/checkout_url', 'POST'] as const
}

export function usePostCustomersExternalCustomerIdCheckoutUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.customers)[':external_customer_id']['checkout_url']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':external_customer_id']['checkout_url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersExternalCustomerIdCheckoutUrlKey()
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
            (typeof client.customers)[':external_customer_id']['checkout_url']['$post']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].checkout_url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersExternalCustomerIdPaymentMethodsKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_methods', args] as const
}

export function useGetCustomersExternalCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
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
        ? getGetCustomersExternalCustomerIdPaymentMethodsKey(args)
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
                (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
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
          client.customers[':external_customer_id'].payment_methods.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersExternalCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
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
        ? getGetCustomersExternalCustomerIdPaymentMethodsKey(args)
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
                (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
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
          client.customers[':external_customer_id'].payment_methods.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultKey() {
  return [
    'customers',
    '/customers/:external_customer_id/payment_methods/:lago_id/set_as_default',
    'PUT',
  ] as const
}

export function usePutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultKey()
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
            (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].payment_methods[':lago_id'].set_as_default.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdKey() {
  return [
    'customers',
    '/customers/:external_customer_id/payment_methods/:lago_id',
    'DELETE',
  ] as const
}

export function useDeleteCustomersExternalCustomerIdPaymentMethodsLagoId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdKey()
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
            (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customers[':external_customer_id'].payment_methods[':lago_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEventsKey() {
  return ['events', '/events', 'POST'] as const
}

export function usePostEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$post> }) =>
        parseResponse(client.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsBatchKey() {
  return ['events', '/events/batch', 'POST'] as const
}

export function usePostEventsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.batch.$post> }) =>
        parseResponse(client.events.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEstimateFeesKey() {
  return ['events', '/events/estimate_fees', 'POST'] as const
}

export function usePostEventsEstimateFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_fees.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.estimate_fees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEstimateFeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.events.estimate_fees.$post> },
      ) => parseResponse(client.events.estimate_fees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEstimateInstantFeesKey() {
  return ['events', '/events/estimate_instant_fees', 'POST'] as const
}

export function usePostEventsEstimateInstantFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_instant_fees.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.estimate_instant_fees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEstimateInstantFeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.events.estimate_instant_fees.$post> },
      ) => parseResponse(client.events.estimate_instant_fees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsBatchEstimateInstantFeesKey() {
  return ['events', '/events/batch_estimate_instant_fees', 'POST'] as const
}

export function usePostEventsBatchEstimateInstantFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.events.batch_estimate_instant_fees.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.batch_estimate_instant_fees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsBatchEstimateInstantFeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.events.batch_estimate_instant_fees.$post> },
      ) => parseResponse(client.events.batch_estimate_instant_fees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsTransactionIdKey(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
) {
  return ['events', '/events/:transaction_id', args] as const
}

export function useGetEventsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
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
        ? getGetEventsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
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
        ? getGetEventsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeesKey(args: InferRequestType<typeof client.fees.$get>) {
  return ['fees', '/fees', args] as const
}

export function useGetFees<TError = unknown>(
  args: InferRequestType<typeof client.fees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fees.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFees<TError = unknown>(
  args: InferRequestType<typeof client.fees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fees.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFeesLagoIdKey(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
) {
  return ['fees', '/fees/:lago_id', args] as const
}

export function useGetFeesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fees[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fees[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFeesLagoIdKey() {
  return ['fees', '/fees/:lago_id', 'PUT'] as const
}

export function usePutFeesLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fees)[':lago_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeesLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fees)[':lago_id']['$put']> },
      ) => parseResponse(client.fees[':lago_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeesLagoIdKey() {
  return ['fees', '/fees/:lago_id', 'DELETE'] as const
}

export function useDeleteFeesLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fees)[':lago_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeesLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fees)[':lago_id']['$delete']> },
      ) => parseResponse(client.fees[':lago_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInvoicesKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function usePostInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invoices.$post> }) =>
        parseResponse(client.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesLagoIdKey(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
) {
  return ['invoices', '/invoices/:lago_id', args] as const
}

export function useGetInvoicesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInvoicesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInvoicesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInvoicesLagoIdKey() {
  return ['invoices', '/invoices/:lago_id', 'PUT'] as const
}

export function usePutInvoicesLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['$put']> },
      ) => parseResponse(client.invoices[':lago_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvoicesLagoIdKey() {
  return ['invoices', '/invoices/:lago_id', 'DELETE'] as const
}

export function useDeleteInvoicesLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvoicesLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['$delete']> },
      ) => parseResponse(client.invoices[':lago_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdDownloadKey() {
  return ['invoices', '/invoices/:lago_id/download', 'POST'] as const
}

export function usePostInvoicesLagoIdDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdDownloadXmlKey() {
  return ['invoices', '/invoices/:lago_id/download_xml', 'POST'] as const
}

export function usePostInvoicesLagoIdDownloadXml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdDownloadXmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].download_xml.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvoicesLagoIdFinalizeKey() {
  return ['invoices', '/invoices/:lago_id/finalize', 'PUT'] as const
}

export function usePutInvoicesLagoIdFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['finalize']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesLagoIdFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']> },
      ) => parseResponse(client.invoices[':lago_id'].finalize.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdLoseDisputeKey() {
  return ['invoices', '/invoices/:lago_id/lose_dispute', 'POST'] as const
}

export function usePostInvoicesLagoIdLoseDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdLoseDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].lose_dispute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvoicesLagoIdRefreshKey() {
  return ['invoices', '/invoices/:lago_id/refresh', 'PUT'] as const
}

export function usePutInvoicesLagoIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['refresh']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesLagoIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']> },
      ) => parseResponse(client.invoices[':lago_id'].refresh.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdRetryKey() {
  return ['invoices', '/invoices/:lago_id/retry', 'POST'] as const
}

export function usePostInvoicesLagoIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdPaymentUrlKey() {
  return ['invoices', '/invoices/:lago_id/payment_url', 'POST'] as const
}

export function usePostInvoicesLagoIdPaymentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdPaymentUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].payment_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesPreviewKey() {
  return ['invoices', '/invoices/preview', 'POST'] as const
}

export function usePostInvoicesPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invoices.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invoices.preview.$post> }) =>
        parseResponse(client.invoices.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdRetryPaymentKey() {
  return ['invoices', '/invoices/:lago_id/retry_payment', 'POST'] as const
}

export function usePostInvoicesLagoIdRetryPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdRetryPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>
        },
      ) => parseResponse(client.invoices[':lago_id'].retry_payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesLagoIdVoidKey() {
  return ['invoices', '/invoices/:lago_id/void', 'POST'] as const
}

export function usePostInvoicesLagoIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesLagoIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']> },
      ) => parseResponse(client.invoices[':lago_id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderFormsKey(args: InferRequestType<typeof client.order_forms.$get>) {
  return ['order_forms', '/order_forms', args] as const
}

export function useGetOrderForms<TError = unknown>(
  args: InferRequestType<typeof client.order_forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderFormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderForms<TError = unknown>(
  args: InferRequestType<typeof client.order_forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderFormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderFormsLagoIdKey(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
) {
  return ['order_forms', '/order_forms/:lago_id', args] as const
}

export function useGetOrderFormsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
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
        ? getGetOrderFormsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_forms[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderFormsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
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
        ? getGetOrderFormsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order_forms[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderFormsLagoIdMarkAsSignedKey() {
  return ['order_forms', '/order_forms/:lago_id/mark_as_signed', 'POST'] as const
}

export function usePostOrderFormsLagoIdMarkAsSigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderFormsLagoIdMarkAsSignedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>
        },
      ) => parseResponse(client.order_forms[':lago_id'].mark_as_signed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderFormsLagoIdVoidKey() {
  return ['order_forms', '/order_forms/:lago_id/void', 'POST'] as const
}

export function usePostOrderFormsLagoIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderFormsLagoIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']> },
      ) => parseResponse(client.order_forms[':lago_id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersKey(args: InferRequestType<typeof client.orders.$get>) {
  return ['orders', '/orders', args] as const
}

export function useGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOrdersLagoIdKey(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
) {
  return ['orders', '/orders/:lago_id', args] as const
}

export function useGetOrdersLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrdersLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrdersLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersLagoIdExecuteKey() {
  return ['orders', '/orders/:lago_id/execute', 'POST'] as const
}

export function usePostOrdersLagoIdExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':lago_id']['execute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersLagoIdExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']> },
      ) => parseResponse(client.orders[':lago_id'].execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsKey() {
  return ['organizations', '/organizations'] as const
}

export function useGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsKey() {
  return ['organizations', '/organizations', 'PUT'] as const
}

export function usePutOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$put> }) =>
        parseResponse(client.organizations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentReceiptsKey(
  args: InferRequestType<typeof client.payment_receipts.$get>,
) {
  return ['payment_receipts', '/payment_receipts', args] as const
}

export function useGetPaymentReceipts<TError = unknown>(
  args: InferRequestType<typeof client.payment_receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
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
        ? getGetPaymentReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentReceipts<TError = unknown>(
  args: InferRequestType<typeof client.payment_receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
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
        ? getGetPaymentReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentReceiptsLagoIdKey(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
) {
  return ['payment_receipts', '/payment_receipts/:lago_id', args] as const
}

export function useGetPaymentReceiptsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
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
        ? getGetPaymentReceiptsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_receipts[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentReceiptsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
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
        ? getGetPaymentReceiptsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_receipts[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentRequestsKey(
  args: InferRequestType<typeof client.payment_requests.$get>,
) {
  return ['payment_requests', '/payment_requests', args] as const
}

export function useGetPaymentRequests<TError = unknown>(
  args: InferRequestType<typeof client.payment_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
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
        ? getGetPaymentRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentRequests<TError = unknown>(
  args: InferRequestType<typeof client.payment_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
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
        ? getGetPaymentRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentRequestsKey() {
  return ['payment_requests', '/payment_requests', 'POST'] as const
}

export function usePostPaymentRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_requests.$post> }) =>
        parseResponse(client.payment_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentRequestsLagoIdKey(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
) {
  return ['payment_requests', '/payment_requests/:lago_id', args] as const
}

export function useGetPaymentRequestsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
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
        ? getGetPaymentRequestsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_requests[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentRequestsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
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
        ? getGetPaymentRequestsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_requests[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function useGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPayments<TError = unknown>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.payments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPaymentsKey() {
  return ['payments', '/payments', 'POST'] as const
}

export function usePostPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.$post> }) =>
        parseResponse(client.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsLagoIdKey(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
) {
  return ['payments', '/payments/:lago_id', args] as const
}

export function useGetPaymentsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentsLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentsLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlansKey(args: InferRequestType<typeof client.plans.$get>) {
  return ['plans', '/plans', args] as const
}

export function useGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPlansKey() {
  return ['plans', '/plans', 'POST'] as const
}

export function usePostPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.plans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.plans.$post> }) =>
        parseResponse(client.plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeKey(args: InferRequestType<(typeof client.plans)[':code']['$get']>) {
  return ['plans', '/plans/:code', args] as const
}

export function useGetPlansCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPlansCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPlansCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlansCodeKey() {
  return ['plans', '/plans/:code', 'PUT'] as const
}

export function usePutPlansCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlansCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['$put']> }) =>
        parseResponse(client.plans[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeKey() {
  return ['plans', '/plans/:code', 'DELETE'] as const
}

export function useDeletePlansCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['$delete']> },
      ) => parseResponse(client.plans[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeEntitlementsKey(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
) {
  return ['plans', '/plans/:code/entitlements', args] as const
}

export function useGetPlansCodeEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
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
        ? getGetPlansCodeEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
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
        ? getGetPlansCodeEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlansCodeEntitlementsKey() {
  return ['plans', '/plans/:code/entitlements', 'POST'] as const
}

export function usePostPlansCodeEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansCodeEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']> },
      ) => parseResponse(client.plans[':code'].entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlansCodeEntitlementsKey() {
  return ['plans', '/plans/:code/entitlements', 'PATCH'] as const
}

export function usePatchPlansCodeEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlansCodeEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']> },
      ) => parseResponse(client.plans[':code'].entitlements.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeEntitlementsFeatureCodeKey(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
) {
  return ['plans', '/plans/:code/entitlements/:feature_code', args] as const
}

export function useGetPlansCodeEntitlementsFeatureCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
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
        ? getGetPlansCodeEntitlementsFeatureCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.plans[':code'].entitlements[':feature_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeEntitlementsFeatureCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
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
        ? getGetPlansCodeEntitlementsFeatureCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.plans[':code'].entitlements[':feature_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeletePlansCodeEntitlementsFeatureCodeKey() {
  return ['plans', '/plans/:code/entitlements/:feature_code', 'DELETE'] as const
}

export function useDeletePlansCodeEntitlementsFeatureCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeEntitlementsFeatureCodeKey()
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
            (typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].entitlements[':feature_code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeKey() {
  return [
    'plans',
    '/plans/:code/entitlements/:feature_code/privileges/:privilege_code',
    'DELETE',
  ] as const
}

export function useDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeKey()
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
            (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].entitlements[':feature_code'].privileges[':privilege_code'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPlansCodeMetadataKey() {
  return ['plans', '/plans/:code/metadata', 'POST'] as const
}

export function usePostPlansCodeMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansCodeMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['metadata']['$post']> },
      ) => parseResponse(client.plans[':code'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeMetadataKey() {
  return ['plans', '/plans/:code/metadata', 'DELETE'] as const
}

export function useDeletePlansCodeMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']> },
      ) => parseResponse(client.plans[':code'].metadata.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlansCodeMetadataKey() {
  return ['plans', '/plans/:code/metadata', 'PATCH'] as const
}

export function usePatchPlansCodeMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlansCodeMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']> },
      ) => parseResponse(client.plans[':code'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeMetadataKeyKey() {
  return ['plans', '/plans/:code/metadata/:key', 'DELETE'] as const
}

export function useDeletePlansCodeMetadataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeMetadataKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']> },
      ) => parseResponse(client.plans[':code'].metadata[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeChargesKey(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
) {
  return ['plans', '/plans/:code/charges', args] as const
}

export function useGetPlansCodeCharges<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
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
        ? getGetPlansCodeChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeCharges<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
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
        ? getGetPlansCodeChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlansCodeChargesKey() {
  return ['plans', '/plans/:code/charges', 'POST'] as const
}

export function usePostPlansCodeCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['charges']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansCodeChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':code']['charges']['$post']> },
      ) => parseResponse(client.plans[':code'].charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeChargesChargeCodeKey(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
) {
  return ['plans', '/plans/:code/charges/:charge_code', args] as const
}

export function useGetPlansCodeChargesChargeCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
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
        ? getGetPlansCodeChargesChargeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.plans[':code'].charges[':charge_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeChargesChargeCode<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
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
        ? getGetPlansCodeChargesChargeCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.plans[':code'].charges[':charge_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlansCodeChargesChargeCodeKey() {
  return ['plans', '/plans/:code/charges/:charge_code', 'PUT'] as const
}

export function usePutPlansCodeChargesChargeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlansCodeChargesChargeCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>
        },
      ) => parseResponse(client.plans[':code'].charges[':charge_code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeChargesChargeCodeKey() {
  return ['plans', '/plans/:code/charges/:charge_code', 'DELETE'] as const
}

export function useDeletePlansCodeChargesChargeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeChargesChargeCodeKey()
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
            (typeof client.plans)[':code']['charges'][':charge_code']['$delete']
          >
        },
      ) => parseResponse(client.plans[':code'].charges[':charge_code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeChargesChargeCodeFiltersKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters', args] as const
}

export function useGetPlansCodeChargesChargeCodeFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
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
        ? getGetPlansCodeChargesChargeCodeFiltersKey(args)
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
                (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
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
          client.plans[':code'].charges[':charge_code'].filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeChargesChargeCodeFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
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
        ? getGetPlansCodeChargesChargeCodeFiltersKey(args)
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
                (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
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
          client.plans[':code'].charges[':charge_code'].filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPlansCodeChargesChargeCodeFiltersKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters', 'POST'] as const
}

export function usePostPlansCodeChargesChargeCodeFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansCodeChargesChargeCodeFiltersKey()
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
            (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].charges[':charge_code'].filters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeChargesChargeCodeFiltersFilterIdKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', args] as const
}

export function useGetPlansCodeChargesChargeCodeFiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
        ? getGetPlansCodeChargesChargeCodeFiltersFilterIdKey(args)
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
                (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
          client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeChargesChargeCodeFiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
        ? getGetPlansCodeChargesChargeCodeFiltersFilterIdKey(args)
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
                (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
          client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPlansCodeChargesChargeCodeFiltersFilterIdKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', 'PUT'] as const
}

export function usePutPlansCodeChargesChargeCodeFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlansCodeChargesChargeCodeFiltersFilterIdKey()
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
            (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeChargesChargeCodeFiltersFilterIdKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', 'DELETE'] as const
}

export function useDeletePlansCodeChargesChargeCodeFiltersFilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeChargesChargeCodeFiltersFilterIdKey()
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
            (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeFixedChargesKey(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
) {
  return ['plans', '/plans/:code/fixed_charges', args] as const
}

export function useGetPlansCodeFixedCharges<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
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
        ? getGetPlansCodeFixedChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].fixed_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeFixedCharges<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
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
        ? getGetPlansCodeFixedChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':code'].fixed_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlansCodeFixedChargesKey() {
  return ['plans', '/plans/:code/fixed_charges', 'POST'] as const
}

export function usePostPlansCodeFixedCharges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansCodeFixedChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']> },
      ) => parseResponse(client.plans[':code'].fixed_charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansCodeFixedChargesFixedChargeCodeKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
) {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', args] as const
}

export function useGetPlansCodeFixedChargesFixedChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
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
        ? getGetPlansCodeFixedChargesFixedChargeCodeKey(args)
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
                (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
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
          client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansCodeFixedChargesFixedChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
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
        ? getGetPlansCodeFixedChargesFixedChargeCodeKey(args)
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
                (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
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
          client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPlansCodeFixedChargesFixedChargeCodeKey() {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', 'PUT'] as const
}

export function usePutPlansCodeFixedChargesFixedChargeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlansCodeFixedChargesFixedChargeCodeKey()
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
            (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].fixed_charges[':fixed_charge_code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansCodeFixedChargesFixedChargeCodeKey() {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', 'DELETE'] as const
}

export function useDeletePlansCodeFixedChargesFixedChargeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansCodeFixedChargesFixedChargeCodeKey()
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
            (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.plans[':code'].fixed_charges[':fixed_charge_code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuotesKey(args: InferRequestType<typeof client.quotes.$get>) {
  return ['quotes', '/quotes', args] as const
}

export function useGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuotes<TError = unknown>(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetQuotesLagoIdKey(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
) {
  return ['quotes', '/quotes/:lago_id', args] as const
}

export function useGetQuotesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotesLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotesLagoIdVersionsKey(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
) {
  return ['quotes', '/quotes/:lago_id/versions', args] as const
}

export function useGetQuotesLagoIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
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
        ? getGetQuotesLagoIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':lago_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotesLagoIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
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
        ? getGetQuotesLagoIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotes[':lago_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuoteVersionsLagoIdKey(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
) {
  return ['quote_versions', '/quote_versions/:lago_id', args] as const
}

export function useGetQuoteVersionsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
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
        ? getGetQuoteVersionsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote_versions[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuoteVersionsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
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
        ? getGetQuoteVersionsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quote_versions[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuoteVersionsLagoIdApproveKey() {
  return ['quote_versions', '/quote_versions/:lago_id/approve', 'POST'] as const
}

export function usePostQuoteVersionsLagoIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteVersionsLagoIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>
        },
      ) => parseResponse(client.quote_versions[':lago_id'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteVersionsLagoIdVoidKey() {
  return ['quote_versions', '/quote_versions/:lago_id/void', 'POST'] as const
}

export function usePostQuoteVersionsLagoIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteVersionsLagoIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']> },
      ) => parseResponse(client.quote_versions[':lago_id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuoteVersionsLagoIdCloneKey() {
  return ['quote_versions', '/quote_versions/:lago_id/clone', 'POST'] as const
}

export function usePostQuoteVersionsLagoIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuoteVersionsLagoIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']> },
      ) => parseResponse(client.quote_versions[':lago_id'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
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

export function getPostSubscriptionsKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function usePostSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscriptions.$post> }) =>
        parseResponse(client.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id', args] as const
}

export function useGetSubscriptionsExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
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
        ? getGetSubscriptionsExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
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
        ? getGetSubscriptionsExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':external_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdKey() {
  return ['subscriptions', '/subscriptions/:external_id', 'PUT'] as const
}

export function usePutSubscriptionsExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.subscriptions)[':external_id']['$put']> },
      ) => parseResponse(client.subscriptions[':external_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdKey() {
  return ['subscriptions', '/subscriptions/:external_id', 'DELETE'] as const
}

export function useDeleteSubscriptionsExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsExternalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']> },
      ) => parseResponse(client.subscriptions[':external_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdLifetimeUsageKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/lifetime_usage', args] as const
}

export function useGetSubscriptionsExternalIdLifetimeUsage<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
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
        ? getGetSubscriptionsExternalIdLifetimeUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':external_id'].lifetime_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdLifetimeUsage<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
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
        ? getGetSubscriptionsExternalIdLifetimeUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':external_id'].lifetime_usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdLifetimeUsageKey() {
  return ['subscriptions', '/subscriptions/:external_id/lifetime_usage', 'PUT'] as const
}

export function usePutSubscriptionsExternalIdLifetimeUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdLifetimeUsageKey()
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
            (typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']
          >
        },
      ) =>
        parseResponse(client.subscriptions[':external_id'].lifetime_usage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdAlertsKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts', args] as const
}

export function useGetSubscriptionsExternalIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
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
        ? getGetSubscriptionsExternalIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
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
        ? getGetSubscriptionsExternalIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsExternalIdAlertsKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts', 'POST'] as const
}

export function usePostSubscriptionsExternalIdAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsExternalIdAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>
        },
      ) => parseResponse(client.subscriptions[':external_id'].alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdAlertsKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts', 'DELETE'] as const
}

export function useDeleteSubscriptionsExternalIdAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsExternalIdAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>
        },
      ) => parseResponse(client.subscriptions[':external_id'].alerts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdAlertsCodeKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', args] as const
}

export function useGetSubscriptionsExternalIdAlertsCode<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
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
        ? getGetSubscriptionsExternalIdAlertsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':external_id'].alerts[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdAlertsCode<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
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
        ? getGetSubscriptionsExternalIdAlertsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.subscriptions[':external_id'].alerts[':code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdAlertsCodeKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', 'PUT'] as const
}

export function usePutSubscriptionsExternalIdAlertsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdAlertsCodeKey()
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
            (typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].alerts[':code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdAlertsCodeKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', 'DELETE'] as const
}

export function useDeleteSubscriptionsExternalIdAlertsCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsExternalIdAlertsCodeKey()
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
            (typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].alerts[':code'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdEntitlementsKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/entitlements', args] as const
}

export function useGetSubscriptionsExternalIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
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
        ? getGetSubscriptionsExternalIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
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
        ? getGetSubscriptionsExternalIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSubscriptionsExternalIdEntitlementsKey() {
  return ['subscriptions', '/subscriptions/:external_id/entitlements', 'PATCH'] as const
}

export function usePatchSubscriptionsExternalIdEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSubscriptionsExternalIdEntitlementsKey()
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
            (typeof client.subscriptions)[':external_id']['entitlements']['$patch']
          >
        },
      ) =>
        parseResponse(client.subscriptions[':external_id'].entitlements.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/entitlements/:feature_code',
    'DELETE',
  ] as const
}

export function useDeleteSubscriptionsExternalIdEntitlementsFeatureCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeKey()
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
            (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].entitlements[':feature_code'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/entitlements/:feature_code/privileges/:privilege_code',
    'DELETE',
  ] as const
}

export function useDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeKey()
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
            (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].entitlements[':feature_code'].privileges[
            ':privilege_code'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdFixedChargesKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/fixed_charges', args] as const
}

export function useGetSubscriptionsExternalIdFixedCharges<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
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
        ? getGetSubscriptionsExternalIdFixedChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].fixed_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdFixedCharges<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
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
        ? getGetSubscriptionsExternalIdFixedChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].fixed_charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdChargesKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/charges', args] as const
}

export function useGetSubscriptionsExternalIdCharges<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
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
        ? getGetSubscriptionsExternalIdChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdCharges<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
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
        ? getGetSubscriptionsExternalIdChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':external_id'].charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdChargesChargeCodeKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/charges/:charge_code', args] as const
}

export function useGetSubscriptionsExternalIdChargesChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdChargesChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdChargesChargeCodeKey() {
  return ['subscriptions', '/subscriptions/:external_id/charges/:charge_code', 'PUT'] as const
}

export function usePutSubscriptionsExternalIdChargesChargeCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdChargesChargeCodeKey()
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
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdChargesChargeCodeFiltersKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters',
    args,
  ] as const
}

export function useGetSubscriptionsExternalIdChargesChargeCodeFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeFiltersKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdChargesChargeCodeFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeFiltersKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsExternalIdChargesChargeCodeFiltersKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters',
    'POST',
  ] as const
}

export function usePostSubscriptionsExternalIdChargesChargeCodeFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsExternalIdChargesChargeCodeFiltersKey()
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
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].filters.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    args,
  ] as const
}

export function useGetSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
        ? getGetSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey(args)
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
                (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
          client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    'PUT',
  ] as const
}

export function usePutSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey()
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
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    'DELETE',
  ] as const
}

export function useDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdKey()
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
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].filters[
            ':filter_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsExternalIdFixedChargesFixedChargeCodeKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/fixed_charges/:fixed_charge_code',
    args,
  ] as const
}

export function useGetSubscriptionsExternalIdFixedChargesFixedChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
        ? getGetSubscriptionsExternalIdFixedChargesFixedChargeCodeKey(args)
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
                (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
          client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsExternalIdFixedChargesFixedChargeCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
        ? getGetSubscriptionsExternalIdFixedChargesFixedChargeCodeKey(args)
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
                (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
          client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/fixed_charges/:fixed_charge_code',
    'PUT',
  ] as const
}

export function usePutSubscriptionsExternalIdFixedChargesFixedChargeCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeKey()
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
            (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTaxesKey(args: InferRequestType<typeof client.taxes.$get>) {
  return ['taxes', '/taxes', args] as const
}

export function useGetTaxes<TError = unknown>(
  args: InferRequestType<typeof client.taxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.taxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTaxes<TError = unknown>(
  args: InferRequestType<typeof client.taxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.taxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTaxesKey() {
  return ['taxes', '/taxes', 'POST'] as const
}

export function usePostTaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.taxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.taxes.$post> }) =>
        parseResponse(client.taxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxesCodeKey(args: InferRequestType<(typeof client.taxes)[':code']['$get']>) {
  return ['taxes', '/taxes/:code', args] as const
}

export function useGetTaxesCode<TError = unknown>(
  args: InferRequestType<(typeof client.taxes)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTaxesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxes[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxesCode<TError = unknown>(
  args: InferRequestType<(typeof client.taxes)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTaxesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxes[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTaxesCodeKey() {
  return ['taxes', '/taxes/:code', 'PUT'] as const
}

export function usePutTaxesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.taxes)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTaxesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.taxes)[':code']['$put']> }) =>
        parseResponse(client.taxes[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTaxesCodeKey() {
  return ['taxes', '/taxes/:code', 'DELETE'] as const
}

export function useDeleteTaxesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.taxes)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTaxesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.taxes)[':code']['$delete']> },
      ) => parseResponse(client.taxes[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageAttributionTypesKey(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
) {
  return ['usage_attribution_types', '/usage_attribution_types', args] as const
}

export function useGetUsageAttributionTypes<TError = unknown>(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
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
        ? getGetUsageAttributionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_attribution_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageAttributionTypes<TError = unknown>(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
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
        ? getGetUsageAttributionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_attribution_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsageAttributionTypesKey() {
  return ['usage_attribution_types', '/usage_attribution_types', 'POST'] as const
}

export function usePostUsageAttributionTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.usage_attribution_types.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsageAttributionTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.usage_attribution_types.$post> },
      ) => parseResponse(client.usage_attribution_types.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageAttributionTypesCodeKey(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
) {
  return ['usage_attribution_types', '/usage_attribution_types/:code', args] as const
}

export function useGetUsageAttributionTypesCode<TError = unknown>(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
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
        ? getGetUsageAttributionTypesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_attribution_types[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageAttributionTypesCode<TError = unknown>(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
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
        ? getGetUsageAttributionTypesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage_attribution_types[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsageAttributionTypesCodeKey() {
  return ['usage_attribution_types', '/usage_attribution_types/:code', 'PUT'] as const
}

export function usePutUsageAttributionTypesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsageAttributionTypesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']> },
      ) => parseResponse(client.usage_attribution_types[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsageAttributionTypesCodeKey() {
  return ['usage_attribution_types', '/usage_attribution_types/:code', 'DELETE'] as const
}

export function useDeleteUsageAttributionTypesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsageAttributionTypesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']> },
      ) => parseResponse(client.usage_attribution_types[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletsKey(args: InferRequestType<typeof client.wallets.$get>) {
  return ['wallets', '/wallets', args] as const
}

export function useGetWallets<TError = unknown>(
  args: InferRequestType<typeof client.wallets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wallets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWallets<TError = unknown>(
  args: InferRequestType<typeof client.wallets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wallets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWalletsKey() {
  return ['wallets', '/wallets', 'POST'] as const
}

export function usePostWallets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.wallets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wallets.$post> }) =>
        parseResponse(client.wallets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletsLagoIdKey(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
) {
  return ['wallets', '/wallets/:lago_id', args] as const
}

export function useGetWalletsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWalletsLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallets[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetWalletsLagoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallets[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletsLagoIdKey() {
  return ['wallets', '/wallets/:lago_id', 'PUT'] as const
}

export function usePutWalletsLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletsLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wallets)[':lago_id']['$put']> },
      ) => parseResponse(client.wallets[':lago_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWalletsLagoIdKey() {
  return ['wallets', '/wallets/:lago_id', 'DELETE'] as const
}

export function useDeleteWalletsLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWalletsLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wallets)[':lago_id']['$delete']> },
      ) => parseResponse(client.wallets[':lago_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletsLagoIdMetadataKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'POST'] as const
}

export function usePostWalletsLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletsLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']> },
      ) => parseResponse(client.wallets[':lago_id'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWalletsLagoIdMetadataKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'DELETE'] as const
}

export function useDeleteWalletsLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWalletsLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']> },
      ) => parseResponse(client.wallets[':lago_id'].metadata.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletsLagoIdMetadataKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'PATCH'] as const
}

export function usePatchWalletsLagoIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletsLagoIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']> },
      ) => parseResponse(client.wallets[':lago_id'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWalletsLagoIdMetadataKeyKey() {
  return ['wallets', '/wallets/:lago_id/metadata/:key', 'DELETE'] as const
}

export function useDeleteWalletsLagoIdMetadataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWalletsLagoIdMetadataKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>
        },
      ) => parseResponse(client.wallets[':lago_id'].metadata[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletTransactionsKey() {
  return ['wallet_transactions', '/wallet_transactions', 'POST'] as const
}

export function usePostWalletTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet_transactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wallet_transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wallet_transactions.$post> }) =>
        parseResponse(client.wallet_transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletTransactionsLagoIdKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id', args] as const
}

export function useGetWalletTransactionsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
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
        ? getGetWalletTransactionsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet_transactions[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletTransactionsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
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
        ? getGetWalletTransactionsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet_transactions[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletTransactionsLagoIdPaymentUrlKey() {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/payment_url', 'POST'] as const
}

export function usePostWalletTransactionsLagoIdPaymentUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletTransactionsLagoIdPaymentUrlKey()
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
            (typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']
          >
        },
      ) =>
        parseResponse(client.wallet_transactions[':lago_id'].payment_url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletTransactionsLagoIdConsumptionsKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/consumptions', args] as const
}

export function useGetWalletTransactionsLagoIdConsumptions<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
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
        ? getGetWalletTransactionsLagoIdConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wallet_transactions[':lago_id'].consumptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletTransactionsLagoIdConsumptions<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
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
        ? getGetWalletTransactionsLagoIdConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wallet_transactions[':lago_id'].consumptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWalletTransactionsLagoIdFundingsKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/fundings', args] as const
}

export function useGetWalletTransactionsLagoIdFundings<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
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
        ? getGetWalletTransactionsLagoIdFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wallet_transactions[':lago_id'].fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletTransactionsLagoIdFundings<TError = unknown>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
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
        ? getGetWalletTransactionsLagoIdFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wallet_transactions[':lago_id'].fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWalletsLagoIdWalletTransactionsKey(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
) {
  return ['wallets', '/wallets/:lago_id/wallet_transactions', args] as const
}

export function useGetWalletsLagoIdWalletTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
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
        ? getGetWalletsLagoIdWalletTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wallets[':lago_id'].wallet_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletsLagoIdWalletTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
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
        ? getGetWalletsLagoIdWalletTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wallets[':lago_id'].wallet_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksPublicKeyKey() {
  return ['webhooks', '/webhooks/public_key'] as const
}

export function useGetWebhooksPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.public_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.public_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksJsonPublicKeyKey() {
  return ['webhooks', '/webhooks/json_public_key'] as const
}

export function useGetWebhooksJsonPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJsonPublicKeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.json_public_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksJsonPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksJsonPublicKeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.json_public_key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookEndpointsKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function useGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
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
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
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
        ? getGetWebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookEndpointsKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function usePostWebhookEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook_endpoints.$post> }) =>
        parseResponse(client.webhook_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookEndpointsLagoIdKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', args] as const
}

export function useGetWebhookEndpointsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
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
        ? getGetWebhookEndpointsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookEndpointsLagoId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
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
        ? getGetWebhookEndpointsLagoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook_endpoints[':lago_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhookEndpointsLagoIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', 'PUT'] as const
}

export function usePutWebhookEndpointsLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhookEndpointsLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']> },
      ) => parseResponse(client.webhook_endpoints[':lago_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookEndpointsLagoIdKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', 'DELETE'] as const
}

export function useDeleteWebhookEndpointsLagoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookEndpointsLagoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']> },
      ) => parseResponse(client.webhook_endpoints[':lago_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
