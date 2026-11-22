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

export function getBillingEntitiesQueryKey() {
  return ['billing_entities', '/billing_entities'] as const
}

export function getBillingEntitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBillingEntitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing_entities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBillingEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>
            >
          >,
          ReturnType<typeof getBillingEntitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBillingEntitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.billing_entities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBillingEntitiesMutationKey() {
  return ['billing_entities', '/billing_entities', 'POST'] as const
}

export function getPostBillingEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.billing_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing_entities.$post>) {
      return parseResponse(client.billing_entities.$post(args, options))
    },
  })
}

export function usePostBillingEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billing_entities.$post>,
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
  const mutationDefaults = getPostBillingEntitiesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingEntitiesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_entities)[':code']['$get']>>,
) {
  return ['billing_entities', '/billing_entities/:code', toValue(args)] as const
}

export function getBillingEntitiesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_entities)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingEntitiesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing_entities[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingEntitiesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billing_entities)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingEntitiesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingEntitiesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingEntitiesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billing_entities[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBillingEntitiesCodeMutationKey() {
  return ['billing_entities', '/billing_entities/:code', 'PUT'] as const
}

export function getPutBillingEntitiesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.billing_entities)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingEntitiesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billing_entities)[':code']['$put']>) {
      return parseResponse(client.billing_entities[':code'].$put(args, options))
    },
  })
}

export function usePutBillingEntitiesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_entities)[':code']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billing_entities)[':code']['$put']>,
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
  const mutationDefaults = getPutBillingEntitiesCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActivityLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity_logs.$get>>,
) {
  return ['activity_logs', '/activity_logs', toValue(args)] as const
}

export function getActivityLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivityLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activity_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
          >,
          ReturnType<typeof getActivityLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActivityLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivityLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activity_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActivityLogsActivityIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>>,
) {
  return ['activity_logs', '/activity_logs/:activity_id', toValue(args)] as const
}

export function getActivityLogsActivityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivityLogsActivityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activity_logs[':activity_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivityLogsActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActivityLogsActivityIdQueryKey>
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
          Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivityLogsActivityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivityLogsActivityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activity_logs[':activity_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddOnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.add_ons.$get>>,
) {
  return ['add_ons', '/add_ons', toValue(args)] as const
}

export function getAddOnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.add_ons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddOnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.add_ons.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAddOns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.add_ons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
          >,
          ReturnType<typeof getAddOnsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddOnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddOnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.add_ons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAddOnsMutationKey() {
  return ['add_ons', '/add_ons', 'POST'] as const
}

export function getPostAddOnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$post>>>>>,
    TError,
    InferRequestType<typeof client.add_ons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddOnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.add_ons.$post>) {
      return parseResponse(client.add_ons.$post(args, options))
    },
  })
}

export function usePostAddOns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.add_ons.$post>,
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
  const mutationDefaults = getPostAddOnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAddOnsCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.add_ons)[':code']['$get']>>,
) {
  return ['add_ons', '/add_ons/:code', toValue(args)] as const
}

export function getAddOnsCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.add_ons)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddOnsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.add_ons[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddOnsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.add_ons)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getAddOnsCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddOnsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddOnsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.add_ons[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAddOnsCodeMutationKey() {
  return ['add_ons', '/add_ons/:code', 'PUT'] as const
}

export function getPutAddOnsCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.add_ons)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAddOnsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.add_ons)[':code']['$put']>) {
      return parseResponse(client.add_ons[':code'].$put(args, options))
    },
  })
}

export function usePutAddOnsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.add_ons)[':code']['$put']>,
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
  const mutationDefaults = getPutAddOnsCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAddOnsCodeMutationKey() {
  return ['add_ons', '/add_ons/:code', 'DELETE'] as const
}

export function getDeleteAddOnsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.add_ons)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddOnsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.add_ons)[':code']['$delete']>) {
      return parseResponse(client.add_ons[':code'].$delete(args, options))
    },
  })
}

export function useDeleteAddOnsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.add_ons)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteAddOnsCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_logs.$get>>,
) {
  return ['api_logs', '/api_logs', toValue(args)] as const
}

export function getApiLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
          >,
          ReturnType<typeof getApiLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogsRequestIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_logs)[':request_id']['$get']>>,
) {
  return ['api_logs', '/api_logs/:request_id', toValue(args)] as const
}

export function getApiLogsRequestIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_logs)[':request_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLogsRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_logs[':request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLogsRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_logs)[':request_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLogsRequestIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogsRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLogsRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_logs[':request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsGrossRevenueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.gross_revenue.$get>>,
) {
  return ['analytics', '/analytics/gross_revenue', toValue(args)] as const
}

export function getAnalyticsGrossRevenueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.gross_revenue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsGrossRevenueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.gross_revenue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsGrossRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.gross_revenue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsGrossRevenueQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsGrossRevenueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsGrossRevenueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.gross_revenue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsInvoiceCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoice_collection.$get>>,
) {
  return ['analytics', '/analytics/invoice_collection', toValue(args)] as const
}

export function getAnalyticsInvoiceCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoice_collection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsInvoiceCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.invoice_collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsInvoiceCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoice_collection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsInvoiceCollectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsInvoiceCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsInvoiceCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.invoice_collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsInvoicedUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoiced_usage.$get>>,
) {
  return ['analytics', '/analytics/invoiced_usage', toValue(args)] as const
}

export function getAnalyticsInvoicedUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoiced_usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsInvoicedUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.invoiced_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsInvoicedUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.invoiced_usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsInvoicedUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsInvoicedUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsInvoicedUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.invoiced_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsMrrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.mrr.$get>>,
) {
  return ['analytics', '/analytics/mrr', toValue(args)] as const
}

export function getAnalyticsMrrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.mrr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsMrrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.mrr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsMrr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.mrr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
          >,
          ReturnType<typeof getAnalyticsMrrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsMrrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsMrrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.mrr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsOverdueBalanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.overdue_balance.$get>>,
) {
  return ['analytics', '/analytics/overdue_balance', toValue(args)] as const
}

export function getAnalyticsOverdueBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.overdue_balance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsOverdueBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.overdue_balance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsOverdueBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.overdue_balance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsOverdueBalanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsOverdueBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsOverdueBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.overdue_balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.usage.$get>>,
) {
  return ['analytics', '/analytics/usage', toValue(args)] as const
}

export function getAnalyticsUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsUsageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppliedCouponsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applied_coupons.$get>>,
) {
  return ['applied_coupons', '/applied_coupons', toValue(args)] as const
}

export function getAppliedCouponsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applied_coupons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppliedCouponsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applied_coupons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppliedCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applied_coupons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>
            >
          >,
          ReturnType<typeof getAppliedCouponsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppliedCouponsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppliedCouponsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applied_coupons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppliedCouponsMutationKey() {
  return ['applied_coupons', '/applied_coupons', 'POST'] as const
}

export function getPostAppliedCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applied_coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppliedCouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applied_coupons.$post>) {
      return parseResponse(client.applied_coupons.$post(args, options))
    },
  })
}

export function usePostAppliedCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.applied_coupons.$post>,
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
  const mutationDefaults = getPostAppliedCouponsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillableMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billable_metrics.$get>>,
) {
  return ['billable_metrics', '/billable_metrics', toValue(args)] as const
}

export function getBillableMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billable_metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillableMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billable_metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillableMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billable_metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>
            >
          >,
          ReturnType<typeof getBillableMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillableMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillableMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billable_metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBillableMetricsMutationKey() {
  return ['billable_metrics', '/billable_metrics', 'POST'] as const
}

export function getPostBillableMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.billable_metrics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillableMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billable_metrics.$post>) {
      return parseResponse(client.billable_metrics.$post(args, options))
    },
  })
}

export function usePostBillableMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billable_metrics.$post>,
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
  const mutationDefaults = getPostBillableMetricsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBillableMetricsEvaluateExpressionMutationKey() {
  return ['billable_metrics', '/billable_metrics/evaluate_expression', 'POST'] as const
}

export function getPostBillableMetricsEvaluateExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.billable_metrics.evaluate_expression.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.billable_metrics.evaluate_expression.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillableMetricsEvaluateExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.billable_metrics.evaluate_expression.$post>,
    ) {
      return parseResponse(client.billable_metrics.evaluate_expression.$post(args, options))
    },
  })
}

export function usePostBillableMetricsEvaluateExpression<
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
                Awaited<ReturnType<typeof client.billable_metrics.evaluate_expression.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.billable_metrics.evaluate_expression.$post>,
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
  const mutationDefaults = getPostBillableMetricsEvaluateExpressionMutationOptions<
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

export function getBillableMetricsCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billable_metrics)[':code']['$get']>>,
) {
  return ['billable_metrics', '/billable_metrics/:code', toValue(args)] as const
}

export function getBillableMetricsCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billable_metrics)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillableMetricsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billable_metrics[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillableMetricsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billable_metrics)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillableMetricsCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillableMetricsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillableMetricsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billable_metrics[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBillableMetricsCodeMutationKey() {
  return ['billable_metrics', '/billable_metrics/:code', 'PUT'] as const
}

export function getPutBillableMetricsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.billable_metrics)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillableMetricsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billable_metrics)[':code']['$put']>) {
      return parseResponse(client.billable_metrics[':code'].$put(args, options))
    },
  })
}

export function usePutBillableMetricsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billable_metrics)[':code']['$put']>,
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
  const mutationDefaults = getPutBillableMetricsCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBillableMetricsCodeMutationKey() {
  return ['billable_metrics', '/billable_metrics/:code', 'DELETE'] as const
}

export function getDeleteBillableMetricsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billable_metrics)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBillableMetricsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.billable_metrics)[':code']['$delete']>) {
      return parseResponse(client.billable_metrics[':code'].$delete(args, options))
    },
  })
}

export function useDeleteBillableMetricsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billable_metrics)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteBillableMetricsCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFeaturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.features.$get>>,
) {
  return ['features', '/features', toValue(args)] as const
}

export function getFeaturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.features.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.features.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.features.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          ReturnType<typeof getFeaturesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFeaturesMutationKey() {
  return ['features', '/features', 'POST'] as const
}

export function getPostFeaturesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$post>>>>>,
    TError,
    InferRequestType<typeof client.features.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeaturesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.features.$post>) {
      return parseResponse(client.features.$post(args, options))
    },
  })
}

export function usePostFeatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.features.$post>,
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
  const mutationDefaults = getPostFeaturesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFeaturesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':code']['$get']>>,
) {
  return ['features', '/features/:code', toValue(args)] as const
}

export function getFeaturesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeaturesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.features[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeaturesCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getFeaturesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeaturesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeaturesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.features[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFeaturesCodeMutationKey() {
  return ['features', '/features/:code', 'PUT'] as const
}

export function getPutFeaturesCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.features)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeaturesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.features)[':code']['$put']>) {
      return parseResponse(client.features[':code'].$put(args, options))
    },
  })
}

export function usePutFeaturesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.features)[':code']['$put']>,
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
  const mutationDefaults = getPutFeaturesCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFeaturesCodeMutationKey() {
  return ['features', '/features/:code', 'DELETE'] as const
}

export function getDeleteFeaturesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.features)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeaturesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.features)[':code']['$delete']>) {
      return parseResponse(client.features[':code'].$delete(args, options))
    },
  })
}

export function useDeleteFeaturesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.features)[':code']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.features)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteFeaturesCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFeaturesCodePrivilegesPrivilegeCodeMutationKey() {
  return ['features', '/features/:code/privileges/:privilege_code', 'DELETE'] as const
}

export function getDeleteFeaturesCodePrivilegesPrivilegeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.features)[':code']['privileges'][':privilege_code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeaturesCodePrivilegesPrivilegeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.features[':code'].privileges[':privilege_code'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFeaturesCodePrivilegesPrivilegeCode<
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
                    (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
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
  const mutationDefaults = getDeleteFeaturesCodePrivilegesPrivilegeCodeMutationOptions<
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

export function getCouponsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
) {
  return ['coupons', '/coupons', toValue(args)] as const
}

export function getCouponsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coupons.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          ReturnType<typeof getCouponsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCouponsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coupons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCouponsMutationKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function getPostCouponsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>,
    TError,
    InferRequestType<typeof client.coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.coupons.$post>) {
      return parseResponse(client.coupons.$post(args, options))
    },
  })
}

export function usePostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.coupons.$post>,
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
  const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCouponsCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':code']['$get']>>,
) {
  return ['coupons', '/coupons/:code', toValue(args)] as const
}

export function getCouponsCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coupons[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getCouponsCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coupons[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCouponsCodeMutationKey() {
  return ['coupons', '/coupons/:code', 'PUT'] as const
}

export function getPutCouponsCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.coupons)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCouponsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.coupons)[':code']['$put']>) {
      return parseResponse(client.coupons[':code'].$put(args, options))
    },
  })
}

export function usePutCouponsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':code']['$put']>,
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
  const mutationDefaults = getPutCouponsCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCouponsCodeMutationKey() {
  return ['coupons', '/coupons/:code', 'DELETE'] as const
}

export function getDeleteCouponsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.coupons)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCouponsCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.coupons)[':code']['$delete']>) {
      return parseResponse(client.coupons[':code'].$delete(args, options))
    },
  })
}

export function useDeleteCouponsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteCouponsCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreditNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_notes.$get>>,
) {
  return ['credit_notes', '/credit_notes', toValue(args)] as const
}

export function getCreditNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credit_notes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credit_notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
          >,
          ReturnType<typeof getCreditNotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credit_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCreditNotesMutationKey() {
  return ['credit_notes', '/credit_notes', 'POST'] as const
}

export function getPostCreditNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.credit_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit_notes.$post>) {
      return parseResponse(client.credit_notes.$post(args, options))
    },
  })
}

export function usePostCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.credit_notes.$post>,
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
  const mutationDefaults = getPostCreditNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreditNotesLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>>,
) {
  return ['credit_notes', '/credit_notes/:lago_id', toValue(args)] as const
}

export function getCreditNotesLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreditNotesLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credit_notes[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreditNotesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreditNotesLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreditNotesLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credit_notes[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCreditNotesLagoIdMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id', 'PUT'] as const
}

export function getPutCreditNotesLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']>) {
      return parseResponse(client.credit_notes[':lago_id'].$put(args, options))
    },
  })
}

export function usePutCreditNotesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']>,
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
  const mutationDefaults = getPutCreditNotesLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreditNotesLagoIdDownloadMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/download', 'POST'] as const
}

export function getPostCreditNotesLagoIdDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['download']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesLagoIdDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].download.$post(args, options))
    },
  })
}

export function usePostCreditNotesLagoIdDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['download']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']>,
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
  const mutationDefaults = getPostCreditNotesLagoIdDownloadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreditNotesLagoIdDownloadXmlMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/download_xml', 'POST'] as const
}

export function getPostCreditNotesLagoIdDownloadXmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesLagoIdDownloadXmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].download_xml.$post(args, options))
    },
  })
}

export function usePostCreditNotesLagoIdDownloadXml<
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
                  ReturnType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>,
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
  const mutationDefaults = getPostCreditNotesLagoIdDownloadXmlMutationOptions<
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

export function getPostCreditNotesEstimateMutationKey() {
  return ['credit_notes', '/credit_notes/estimate', 'POST'] as const
}

export function getPostCreditNotesEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.estimate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit_notes.estimate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesEstimateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit_notes.estimate.$post>) {
      return parseResponse(client.credit_notes.estimate.$post(args, options))
    },
  })
}

export function usePostCreditNotesEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.estimate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit_notes.estimate.$post>,
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
  const mutationDefaults = getPostCreditNotesEstimateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreditNotesLagoIdVoidMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/void', 'PUT'] as const
}

export function getPutCreditNotesLagoIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['void']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCreditNotesLagoIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].void.$put(args, options))
    },
  })
}

export function usePutCreditNotesLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['void']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']>,
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
  const mutationDefaults = getPutCreditNotesLagoIdVoidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreditNotesLagoIdMetadataMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'POST'] as const
}

export function getPostCreditNotesLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditNotesLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].metadata.$post(args, options))
    },
  })
}

export function usePostCreditNotesLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>,
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
  const mutationDefaults = getPostCreditNotesLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCreditNotesLagoIdMetadataMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'DELETE'] as const
}

export function getDeleteCreditNotesLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCreditNotesLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].metadata.$delete(args, options))
    },
  })
}

export function useDeleteCreditNotesLagoIdMetadata<
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
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>,
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
  const mutationDefaults = getDeleteCreditNotesLagoIdMetadataMutationOptions<
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

export function getPatchCreditNotesLagoIdMetadataMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata', 'PATCH'] as const
}

export function getPatchCreditNotesLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCreditNotesLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].metadata.$patch(args, options))
    },
  })
}

export function usePatchCreditNotesLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchCreditNotesLagoIdMetadataMutationOptions<
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

export function getDeleteCreditNotesLagoIdMetadataKeyMutationKey() {
  return ['credit_notes', '/credit_notes/:lago_id/metadata/:key', 'DELETE'] as const
}

export function getDeleteCreditNotesLagoIdMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCreditNotesLagoIdMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']
      >,
    ) {
      return parseResponse(client.credit_notes[':lago_id'].metadata[':key'].$delete(args, options))
    },
  })
}

export function useDeleteCreditNotesLagoIdMetadataKey<
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
                    (typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']>,
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
  const mutationDefaults = getDeleteCreditNotesLagoIdMetadataKeyMutationOptions<
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

export function getCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
) {
  return ['customers', '/customers', toValue(args)] as const
}

export function getCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          ReturnType<typeof getCustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomersMutationKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function getPostCustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    InferRequestType<typeof client.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.$post>) {
      return parseResponse(client.customers.$post(args, options))
    },
  })
}

export function usePostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
  const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id', toValue(args)] as const
}

export function getCustomersExternalCustomerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCustomersExternalCustomerIdMutationKey() {
  return ['customers', '/customers/:external_customer_id', 'DELETE'] as const
}

export function getDeleteCustomersExternalCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']>,
    ) {
      return parseResponse(client.customers[':external_customer_id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomersExternalCustomerId<
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
                Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']>,
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
  const mutationDefaults = getDeleteCustomersExternalCustomerIdMutationOptions<
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

export function getCustomersExternalCustomerIdAppliedCouponsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['applied_coupons']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/applied_coupons', toValue(args)] as const
}

export function getCustomersExternalCustomerIdAppliedCouponsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['applied_coupons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdAppliedCouponsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].applied_coupons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdAppliedCoupons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['applied_coupons']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['applied_coupons']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
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
                    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdAppliedCouponsQueryKey>
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
              (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdAppliedCouponsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdAppliedCouponsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].applied_coupons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/applied_coupons/:applied_coupon_id',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].applied_coupons[':applied_coupon_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponId<
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
                    (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
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
    getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdMutationOptions<
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

export function getCustomersExternalCustomerIdCreditNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/credit_notes', toValue(args)] as const
}

export function getCustomersExternalCustomerIdCreditNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdCreditNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].credit_notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdCreditNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
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
                    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdCreditNotesQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['credit_notes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdCreditNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdCreditNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].credit_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/invoices', toValue(args)] as const
}

export function getCustomersExternalCustomerIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
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
                  ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdInvoicesQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/payments', toValue(args)] as const
}

export function getCustomersExternalCustomerIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
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
                  ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdPaymentsQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdPaymentRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_requests']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_requests', toValue(args)] as const
}

export function getCustomersExternalCustomerIdPaymentRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdPaymentRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdPaymentRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['payment_requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_requests']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
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
                    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdPaymentRequestsQueryKey>
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
              (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdPaymentRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdPaymentRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].payment_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdPortalUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/portal_url', toValue(args)] as const
}

export function getCustomersExternalCustomerIdPortalUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdPortalUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].portal_url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdPortalUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['portal_url']['$get']
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
                    (typeof client.customers)[':external_customer_id']['portal_url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdPortalUrlQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdPortalUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdPortalUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].portal_url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['subscriptions']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/subscriptions', toValue(args)] as const
}

export function getCustomersExternalCustomerIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['subscriptions']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
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
                    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdSubscriptionsQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['subscriptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdWalletsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/wallets', toValue(args)] as const
}

export function getCustomersExternalCustomerIdWalletsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdWalletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdWallets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
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
                  ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdWalletsQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdWalletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdWalletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].wallets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomersExternalCustomerIdWalletsMutationKey() {
  return ['customers', '/customers/:external_customer_id/wallets', 'POST'] as const
}

export function getPostCustomersExternalCustomerIdWalletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersExternalCustomerIdWalletsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets']['$post']
      >,
    ) {
      return parseResponse(client.customers[':external_customer_id'].wallets.$post(args, options))
    },
  })
}

export function usePostCustomersExternalCustomerIdWallets<
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
                  ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>,
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
  const mutationDefaults = getPostCustomersExternalCustomerIdWalletsMutationOptions<
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

export function getCustomersExternalCustomerIdWalletsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/wallets/:code', toValue(args)] as const
}

export function getCustomersExternalCustomerIdWalletsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdWalletsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdWalletsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdWalletsCodeQueryKey>
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
              (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdWalletsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdWalletsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].wallets[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomersExternalCustomerIdWalletsCodeMutationKey() {
  return ['customers', '/customers/:external_customer_id/wallets/:code', 'PUT'] as const
}

export function getPutCustomersExternalCustomerIdWalletsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersExternalCustomerIdWalletsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':code'].$put(args, options),
      )
    },
  })
}

export function usePutCustomersExternalCustomerIdWalletsCode<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
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
  const mutationDefaults = getPutCustomersExternalCustomerIdWalletsCodeMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdWalletsCodeMutationKey() {
  return ['customers', '/customers/:external_customer_id/wallets/:code', 'DELETE'] as const
}

export function getDeleteCustomersExternalCustomerIdWalletsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdWalletsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':code'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdWalletsCode<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
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
  const mutationDefaults = getDeleteCustomersExternalCustomerIdWalletsCodeMutationOptions<
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

export function getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'POST',
  ] as const
}

export function getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCustomersExternalCustomerIdWalletsWalletCodeMetadata<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
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
    getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadata<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
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
    getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
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

export function getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata',
    'PATCH',
  ] as const
}

export function getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCustomersExternalCustomerIdWalletsWalletCodeMetadata<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
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
    getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/metadata/:key',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].metadata[':key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
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
    getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyMutationOptions<
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

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
    >
  >,
) {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    toValue(args),
  ] as const
}

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCustomersExternalCustomerIdWalletsWalletCodeAlerts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey>
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
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    'POST',
  ] as const
}

export function getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCustomersExternalCustomerIdWalletsWalletCodeAlerts<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
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
  const mutationDefaults = getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeAlerts<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
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
    getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
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

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
    >
  >,
) {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    toValue(args),
  ] as const
}

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey>
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
              (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    'PUT',
  ] as const
}

export function getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
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
    getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
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
                    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
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
    getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
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

export function getCustomersExternalCustomerIdCurrentUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['current_usage']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/current_usage', toValue(args)] as const
}

export function getCustomersExternalCustomerIdCurrentUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['current_usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdCurrentUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].current_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdCurrentUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['current_usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['current_usage']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
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
                    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdCurrentUsageQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['current_usage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdCurrentUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdCurrentUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].current_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdProjectedUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['projected_usage']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/projected_usage', toValue(args)] as const
}

export function getCustomersExternalCustomerIdProjectedUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['projected_usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdProjectedUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].projected_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdProjectedUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['projected_usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['projected_usage']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
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
                    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdProjectedUsageQueryKey>
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
              (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdProjectedUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdProjectedUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].projected_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdPastUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/past_usage', toValue(args)] as const
}

export function getCustomersExternalCustomerIdPastUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdPastUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].past_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdPastUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['past_usage']['$get']
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
                    (typeof client.customers)[':external_customer_id']['past_usage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdPastUsageQueryKey>
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
            ReturnType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdPastUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdPastUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].past_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersExternalCustomerIdAttributedUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['attributed_usage']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/attributed_usage', toValue(args)] as const
}

export function getCustomersExternalCustomerIdAttributedUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['attributed_usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdAttributedUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].attributed_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdAttributedUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['attributed_usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['attributed_usage']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
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
                    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdAttributedUsageQueryKey>
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
              (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdAttributedUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdAttributedUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].attributed_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomersExternalCustomerIdCheckoutUrlMutationKey() {
  return ['customers', '/customers/:external_customer_id/checkout_url', 'POST'] as const
}

export function getPostCustomersExternalCustomerIdCheckoutUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.customers)[':external_customer_id']['checkout_url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersExternalCustomerIdCheckoutUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['checkout_url']['$post']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].checkout_url.$post(args, options),
      )
    },
  })
}

export function usePostCustomersExternalCustomerIdCheckoutUrl<
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
                    (typeof client.customers)[':external_customer_id']['checkout_url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['checkout_url']['$post']
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
  const mutationDefaults = getPostCustomersExternalCustomerIdCheckoutUrlMutationOptions<
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

export function getCustomersExternalCustomerIdPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_methods']['$get']>
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_methods', toValue(args)] as const
}

export function getCustomersExternalCustomerIdPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_methods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersExternalCustomerIdPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersExternalCustomerIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customers)[':external_customer_id']['payment_methods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':external_customer_id']['payment_methods']['$get']>
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
                    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
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
                    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersExternalCustomerIdPaymentMethodsQueryKey>
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
              (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersExternalCustomerIdPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersExternalCustomerIdPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':external_customer_id'].payment_methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/payment_methods/:lago_id/set_as_default',
    'PUT',
  ] as const
}

export function getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_methods[':lago_id'].set_as_default.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefault<
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
                    (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
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
    getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultMutationOptions<
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

export function getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdMutationKey() {
  return [
    'customers',
    '/customers/:external_customer_id/payment_methods/:lago_id',
    'DELETE',
  ] as const
}

export function getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_methods[':lago_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCustomersExternalCustomerIdPaymentMethodsLagoId<
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
                    (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
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
  const mutationDefaults = getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdMutationOptions<
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$post>,
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
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsBatchMutationKey() {
  return ['events', '/events/batch', 'POST'] as const
}

export function getPostEventsBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.batch.$post>) {
      return parseResponse(client.events.batch.$post(args, options))
    },
  })
}

export function usePostEventsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.batch.$post>,
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
  const mutationDefaults = getPostEventsBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsEstimateFeesMutationKey() {
  return ['events', '/events/estimate_fees', 'POST'] as const
}

export function getPostEventsEstimateFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_fees.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.events.estimate_fees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEstimateFeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.estimate_fees.$post>) {
      return parseResponse(client.events.estimate_fees.$post(args, options))
    },
  })
}

export function usePostEventsEstimateFees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_fees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.estimate_fees.$post>,
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
  const mutationDefaults = getPostEventsEstimateFeesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsEstimateInstantFeesMutationKey() {
  return ['events', '/events/estimate_instant_fees', 'POST'] as const
}

export function getPostEventsEstimateInstantFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_instant_fees.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.events.estimate_instant_fees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEstimateInstantFeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.estimate_instant_fees.$post>) {
      return parseResponse(client.events.estimate_instant_fees.$post(args, options))
    },
  })
}

export function usePostEventsEstimateInstantFees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.events.estimate_instant_fees.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.events.estimate_instant_fees.$post>,
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
  const mutationDefaults = getPostEventsEstimateInstantFeesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsBatchEstimateInstantFeesMutationKey() {
  return ['events', '/events/batch_estimate_instant_fees', 'POST'] as const
}

export function getPostEventsBatchEstimateInstantFeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.events.batch_estimate_instant_fees.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.events.batch_estimate_instant_fees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsBatchEstimateInstantFeesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.events.batch_estimate_instant_fees.$post>,
    ) {
      return parseResponse(client.events.batch_estimate_instant_fees.$post(args, options))
    },
  })
}

export function usePostEventsBatchEstimateInstantFees<
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
                Awaited<ReturnType<typeof client.events.batch_estimate_instant_fees.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.events.batch_estimate_instant_fees.$post>,
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
  const mutationDefaults = getPostEventsBatchEstimateInstantFeesMutationOptions<
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

export function getEventsTransactionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':transaction_id']['$get']>>,
) {
  return ['events', '/events/:transaction_id', toValue(args)] as const
}

export function getEventsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':transaction_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':transaction_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsTransactionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeesQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.fees.$get>>) {
  return ['fees', '/fees', toValue(args)] as const
}

export function getFeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFees<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
          ReturnType<typeof getFeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeesLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fees)[':lago_id']['$get']>>,
) {
  return ['fees', '/fees/:lago_id', toValue(args)] as const
}

export function getFeesLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fees)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeesLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fees[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeesLagoId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fees)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFeesLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeesLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeesLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fees[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFeesLagoIdMutationKey() {
  return ['fees', '/fees/:lago_id', 'PUT'] as const
}

export function getPutFeesLagoIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fees)[':lago_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeesLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fees)[':lago_id']['$put']>) {
      return parseResponse(client.fees[':lago_id'].$put(args, options))
    },
  })
}

export function usePutFeesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.fees)[':lago_id']['$put']>,
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
  const mutationDefaults = getPutFeesLagoIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFeesLagoIdMutationKey() {
  return ['fees', '/fees/:lago_id', 'DELETE'] as const
}

export function getDeleteFeesLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fees)[':lago_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeesLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fees)[':lago_id']['$delete']>) {
      return parseResponse(client.fees[':lago_id'].$delete(args, options))
    },
  })
}

export function useDeleteFeesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.fees)[':lago_id']['$delete']>,
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
  const mutationDefaults = getDeleteFeesLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
) {
  return ['invoices', '/invoices', toValue(args)] as const
}

export function getInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          ReturnType<typeof getInvoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInvoicesMutationKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function getPostInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoices.$post>) {
      return parseResponse(client.invoices.$post(args, options))
    },
  })
}

export function usePostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invoices.$post>,
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
  const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':lago_id']['$get']>>,
) {
  return ['invoices', '/invoices/:lago_id', toValue(args)] as const
}

export function getInvoicesLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInvoicesLagoIdMutationKey() {
  return ['invoices', '/invoices/:lago_id', 'PUT'] as const
}

export function getPutInvoicesLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':lago_id']['$put']>) {
      return parseResponse(client.invoices[':lago_id'].$put(args, options))
    },
  })
}

export function usePutInvoicesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['$put']>,
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
  const mutationDefaults = getPutInvoicesLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInvoicesLagoIdMutationKey() {
  return ['invoices', '/invoices/:lago_id', 'DELETE'] as const
}

export function getDeleteInvoicesLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvoicesLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':lago_id']['$delete']>) {
      return parseResponse(client.invoices[':lago_id'].$delete(args, options))
    },
  })
}

export function useDeleteInvoicesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['$delete']>,
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
  const mutationDefaults = getDeleteInvoicesLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdDownloadMutationKey() {
  return ['invoices', '/invoices/:lago_id/download', 'POST'] as const
}

export function getPostInvoicesLagoIdDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].download.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdDownloadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdDownloadXmlMutationKey() {
  return ['invoices', '/invoices/:lago_id/download_xml', 'POST'] as const
}

export function getPostInvoicesLagoIdDownloadXmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdDownloadXmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].download_xml.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdDownloadXml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdDownloadXmlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutInvoicesLagoIdFinalizeMutationKey() {
  return ['invoices', '/invoices/:lago_id/finalize', 'PUT'] as const
}

export function getPutInvoicesLagoIdFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['finalize']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesLagoIdFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].finalize.$put(args, options))
    },
  })
}

export function usePutInvoicesLagoIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['finalize']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']>,
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
  const mutationDefaults = getPutInvoicesLagoIdFinalizeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdLoseDisputeMutationKey() {
  return ['invoices', '/invoices/:lago_id/lose_dispute', 'POST'] as const
}

export function getPostInvoicesLagoIdLoseDisputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdLoseDisputeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].lose_dispute.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdLoseDispute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdLoseDisputeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutInvoicesLagoIdRefreshMutationKey() {
  return ['invoices', '/invoices/:lago_id/refresh', 'PUT'] as const
}

export function getPutInvoicesLagoIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['refresh']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesLagoIdRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].refresh.$put(args, options))
    },
  })
}

export function usePutInvoicesLagoIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['refresh']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']>,
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
  const mutationDefaults = getPutInvoicesLagoIdRefreshMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdRetryMutationKey() {
  return ['invoices', '/invoices/:lago_id/retry', 'POST'] as const
}

export function getPostInvoicesLagoIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].retry.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdRetryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdPaymentUrlMutationKey() {
  return ['invoices', '/invoices/:lago_id/payment_url', 'POST'] as const
}

export function getPostInvoicesLagoIdPaymentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdPaymentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].payment_url.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdPaymentUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdPaymentUrlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesPreviewMutationKey() {
  return ['invoices', '/invoices/preview', 'POST'] as const
}

export function getPostInvoicesPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invoices.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoices.preview.$post>) {
      return parseResponse(client.invoices.preview.$post(args, options))
    },
  })
}

export function usePostInvoicesPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invoices.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invoices.preview.$post>,
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
  const mutationDefaults = getPostInvoicesPreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInvoicesLagoIdRetryPaymentMutationKey() {
  return ['invoices', '/invoices/:lago_id/retry_payment', 'POST'] as const
}

export function getPostInvoicesLagoIdRetryPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdRetryPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].retry_payment.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdRetryPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdRetryPaymentMutationOptions<
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

export function getPostInvoicesLagoIdVoidMutationKey() {
  return ['invoices', '/invoices/:lago_id/void', 'POST'] as const
}

export function getPostInvoicesLagoIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesLagoIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']>,
    ) {
      return parseResponse(client.invoices[':lago_id'].void.$post(args, options))
    },
  })
}

export function usePostInvoicesLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['void']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']>,
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
  const mutationDefaults = getPostInvoicesLagoIdVoidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrderFormsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_forms.$get>>,
) {
  return ['order_forms', '/order_forms', toValue(args)] as const
}

export function getOrderFormsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_forms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order_forms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrderForms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order_forms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
          >,
          ReturnType<typeof getOrderFormsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order_forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderFormsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>>,
) {
  return ['order_forms', '/order_forms/:lago_id', toValue(args)] as const
}

export function getOrderFormsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderFormsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order_forms[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderFormsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrderFormsLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFormsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderFormsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order_forms[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrderFormsLagoIdMarkAsSignedMutationKey() {
  return ['order_forms', '/order_forms/:lago_id/mark_as_signed', 'POST'] as const
}

export function getPostOrderFormsLagoIdMarkAsSignedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderFormsLagoIdMarkAsSignedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>,
    ) {
      return parseResponse(client.order_forms[':lago_id'].mark_as_signed.$post(args, options))
    },
  })
}

export function usePostOrderFormsLagoIdMarkAsSigned<
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
                  ReturnType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>,
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
  const mutationDefaults = getPostOrderFormsLagoIdMarkAsSignedMutationOptions<
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

export function getPostOrderFormsLagoIdVoidMutationKey() {
  return ['order_forms', '/order_forms/:lago_id/void', 'POST'] as const
}

export function getPostOrderFormsLagoIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderFormsLagoIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']>,
    ) {
      return parseResponse(client.order_forms[':lago_id'].void.$post(args, options))
    },
  })
}

export function usePostOrderFormsLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['void']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']>,
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
  const mutationDefaults = getPostOrderFormsLagoIdVoidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
) {
  return ['orders', '/orders', toValue(args)] as const
}

export function getOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          ReturnType<typeof getOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrdersLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':lago_id']['$get']>>,
) {
  return ['orders', '/orders/:lago_id', toValue(args)] as const
}

export function getOrdersLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
            >
          >,
          ReturnType<typeof getOrdersLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersLagoIdExecuteMutationKey() {
  return ['orders', '/orders/:lago_id/execute', 'POST'] as const
}

export function getPostOrdersLagoIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':lago_id']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersLagoIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']>,
    ) {
      return parseResponse(client.orders[':lago_id'].execute.$post(args, options))
    },
  })
}

export function usePostOrdersLagoIdExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':lago_id']['execute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']>,
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
  const mutationDefaults = getPostOrdersLagoIdExecuteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'PUT'] as const
}

export function getPutOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$put>) {
      return parseResponse(client.organizations.$put(args, options))
    },
  })
}

export function usePutOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$put>,
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
  const mutationDefaults = getPutOrganizationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentReceiptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_receipts.$get>>,
) {
  return ['payment_receipts', '/payment_receipts', toValue(args)] as const
}

export function getPaymentReceiptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_receipts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_receipts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_receipts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>
            >
          >,
          ReturnType<typeof getPaymentReceiptsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_receipts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentReceiptsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>>,
) {
  return ['payment_receipts', '/payment_receipts/:lago_id', toValue(args)] as const
}

export function getPaymentReceiptsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentReceiptsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_receipts[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentReceiptsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentReceiptsLagoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentReceiptsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentReceiptsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_receipts[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_requests.$get>>,
) {
  return ['payment_requests', '/payment_requests', toValue(args)] as const
}

export function getPaymentRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>
            >
          >,
          ReturnType<typeof getPaymentRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentRequestsMutationKey() {
  return ['payment_requests', '/payment_requests', 'POST'] as const
}

export function getPostPaymentRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_requests.$post>) {
      return parseResponse(client.payment_requests.$post(args, options))
    },
  })
}

export function usePostPaymentRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_requests.$post>,
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
  const mutationDefaults = getPostPaymentRequestsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentRequestsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>>,
) {
  return ['payment_requests', '/payment_requests/:lago_id', toValue(args)] as const
}

export function getPaymentRequestsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentRequestsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_requests[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentRequestsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentRequestsLagoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentRequestsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentRequestsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_requests[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
) {
  return ['payments', '/payments', toValue(args)] as const
}

export function getPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          ReturnType<typeof getPaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentsMutationKey() {
  return ['payments', '/payments', 'POST'] as const
}

export function getPostPaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.$post>) {
      return parseResponse(client.payments.$post(args, options))
    },
  })
}

export function usePostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payments.$post>,
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
  const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaymentsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments)[':lago_id']['$get']>>,
) {
  return ['payments', '/payments/:lago_id', toValue(args)] as const
}

export function getPaymentsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentsLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
) {
  return ['plans', '/plans', toValue(args)] as const
}

export function getPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          ReturnType<typeof getPlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlansMutationKey() {
  return ['plans', '/plans', 'POST'] as const
}

export function getPostPlansMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
    TError,
    InferRequestType<typeof client.plans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.plans.$post>) {
      return parseResponse(client.plans.$post(args, options))
    },
  })
}

export function usePostPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
          TError,
          InferRequestType<typeof client.plans.$post>,
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
  const mutationDefaults = getPostPlansMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['$get']>>,
) {
  return ['plans', '/plans/:code', toValue(args)] as const
}

export function getPlansCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getPlansCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlansCodeMutationKey() {
  return ['plans', '/plans/:code', 'PUT'] as const
}

export function getPutPlansCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlansCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':code']['$put']>) {
      return parseResponse(client.plans[':code'].$put(args, options))
    },
  })
}

export function usePutPlansCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['$put']>,
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
  const mutationDefaults = getPutPlansCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePlansCodeMutationKey() {
  return ['plans', '/plans/:code', 'DELETE'] as const
}

export function getDeletePlansCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':code']['$delete']>) {
      return parseResponse(client.plans[':code'].$delete(args, options))
    },
  })
}

export function useDeletePlansCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['$delete']>,
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
  const mutationDefaults = getDeletePlansCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeEntitlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>>,
) {
  return ['plans', '/plans/:code/entitlements', toValue(args)] as const
}

export function getPlansCodeEntitlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlansCodeEntitlementsQueryKey>
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
          Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlansCodeEntitlementsMutationKey() {
  return ['plans', '/plans/:code/entitlements', 'POST'] as const
}

export function getPostPlansCodeEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansCodeEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']>,
    ) {
      return parseResponse(client.plans[':code'].entitlements.$post(args, options))
    },
  })
}

export function usePostPlansCodeEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']>,
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
  const mutationDefaults = getPostPlansCodeEntitlementsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPlansCodeEntitlementsMutationKey() {
  return ['plans', '/plans/:code/entitlements', 'PATCH'] as const
}

export function getPatchPlansCodeEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlansCodeEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']>,
    ) {
      return parseResponse(client.plans[':code'].entitlements.$patch(args, options))
    },
  })
}

export function usePatchPlansCodeEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']>,
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
  const mutationDefaults = getPatchPlansCodeEntitlementsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeEntitlementsFeatureCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
  >,
) {
  return ['plans', '/plans/:code/entitlements/:feature_code', toValue(args)] as const
}

export function getPlansCodeEntitlementsFeatureCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeEntitlementsFeatureCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].entitlements[':feature_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeEntitlementsFeatureCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
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
                    (typeof client.plans)[':code']['entitlements'][':feature_code']['$get']
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
                    (typeof client.plans)[':code']['entitlements'][':feature_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlansCodeEntitlementsFeatureCodeQueryKey>
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
            ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeEntitlementsFeatureCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeEntitlementsFeatureCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].entitlements[':feature_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePlansCodeEntitlementsFeatureCodeMutationKey() {
  return ['plans', '/plans/:code/entitlements/:feature_code', 'DELETE'] as const
}

export function getDeletePlansCodeEntitlementsFeatureCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeEntitlementsFeatureCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].entitlements[':feature_code'].$delete(args, options),
      )
    },
  })
}

export function useDeletePlansCodeEntitlementsFeatureCode<
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
                    (typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']
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
  const mutationDefaults = getDeletePlansCodeEntitlementsFeatureCodeMutationOptions<
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

export function getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationKey() {
  return [
    'plans',
    '/plans/:code/entitlements/:feature_code/privileges/:privilege_code',
    'DELETE',
  ] as const
}

export function getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].entitlements[':feature_code'].privileges[':privilege_code'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCode<
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
                    (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
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
    getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
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

export function getPostPlansCodeMetadataMutationKey() {
  return ['plans', '/plans/:code/metadata', 'POST'] as const
}

export function getPostPlansCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansCodeMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':code']['metadata']['$post']>) {
      return parseResponse(client.plans[':code'].metadata.$post(args, options))
    },
  })
}

export function usePostPlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['metadata']['$post']>,
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
  const mutationDefaults = getPostPlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePlansCodeMetadataMutationKey() {
  return ['plans', '/plans/:code/metadata', 'DELETE'] as const
}

export function getDeletePlansCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']>,
    ) {
      return parseResponse(client.plans[':code'].metadata.$delete(args, options))
    },
  })
}

export function useDeletePlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']>,
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
  const mutationDefaults = getDeletePlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPlansCodeMetadataMutationKey() {
  return ['plans', '/plans/:code/metadata', 'PATCH'] as const
}

export function getPatchPlansCodeMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlansCodeMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']>) {
      return parseResponse(client.plans[':code'].metadata.$patch(args, options))
    },
  })
}

export function usePatchPlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['metadata']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchPlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePlansCodeMetadataKeyMutationKey() {
  return ['plans', '/plans/:code/metadata/:key', 'DELETE'] as const
}

export function getDeletePlansCodeMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>,
    ) {
      return parseResponse(client.plans[':code'].metadata[':key'].$delete(args, options))
    },
  })
}

export function useDeletePlansCodeMetadataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>,
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
  const mutationDefaults = getDeletePlansCodeMetadataKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeChargesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['charges']['$get']>>,
) {
  return ['plans', '/plans/:code/charges', toValue(args)] as const
}

export function getPlansCodeChargesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['charges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeChargesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].charges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['charges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlansCodeChargesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeChargesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeChargesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].charges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlansCodeChargesMutationKey() {
  return ['plans', '/plans/:code/charges', 'POST'] as const
}

export function getPostPlansCodeChargesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['charges']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansCodeChargesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':code']['charges']['$post']>) {
      return parseResponse(client.plans[':code'].charges.$post(args, options))
    },
  })
}

export function usePostPlansCodeCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['charges']['$post']>,
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
  const mutationDefaults = getPostPlansCodeChargesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeChargesChargeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code', toValue(args)] as const
}

export function getPlansCodeChargesChargeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeChargesChargeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeChargesChargeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>
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
                  ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlansCodeChargesChargeCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeChargesChargeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeChargesChargeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].charges[':charge_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlansCodeChargesChargeCodeMutationKey() {
  return ['plans', '/plans/:code/charges/:charge_code', 'PUT'] as const
}

export function getPutPlansCodeChargesChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlansCodeChargesChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>,
    ) {
      return parseResponse(client.plans[':code'].charges[':charge_code'].$put(args, options))
    },
  })
}

export function usePutPlansCodeChargesChargeCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>,
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
  const mutationDefaults = getPutPlansCodeChargesChargeCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePlansCodeChargesChargeCodeMutationKey() {
  return ['plans', '/plans/:code/charges/:charge_code', 'DELETE'] as const
}

export function getDeletePlansCodeChargesChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeChargesChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>,
    ) {
      return parseResponse(client.plans[':code'].charges[':charge_code'].$delete(args, options))
    },
  })
}

export function useDeletePlansCodeChargesChargeCode<
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
                  ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>,
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
  const mutationDefaults = getDeletePlansCodeChargesChargeCodeMutationOptions<
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

export function getPlansCodeChargesChargeCodeFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']>
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters', toValue(args)] as const
}

export function getPlansCodeChargesChargeCodeFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeChargesChargeCodeFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeChargesChargeCodeFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']>
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlansCodeChargesChargeCodeFiltersQueryKey>
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
            ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeChargesChargeCodeFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeChargesChargeCodeFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].charges[':charge_code'].filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlansCodeChargesChargeCodeFiltersMutationKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters', 'POST'] as const
}

export function getPostPlansCodeChargesChargeCodeFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansCodeChargesChargeCodeFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters.$post(args, options),
      )
    },
  })
}

export function usePostPlansCodeChargesChargeCodeFilters<
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
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
  const mutationDefaults = getPostPlansCodeChargesChargeCodeFiltersMutationOptions<
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

export function getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
    >
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', toValue(args)] as const
}

export function getPlansCodeChargesChargeCodeFiltersFilterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeChargesChargeCodeFiltersFilterId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey>
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
              (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlansCodeChargesChargeCodeFiltersFilterIdMutationKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', 'PUT'] as const
}

export function getPutPlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPlansCodeChargesChargeCodeFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$put(args, options),
      )
    },
  })
}

export function usePutPlansCodeChargesChargeCodeFiltersFilterId<
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
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
  const mutationDefaults = getPutPlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
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

export function getDeletePlansCodeChargesChargeCodeFiltersFilterIdMutationKey() {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', 'DELETE'] as const
}

export function getDeletePlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeChargesChargeCodeFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$delete(args, options),
      )
    },
  })
}

export function useDeletePlansCodeChargesChargeCodeFiltersFilterId<
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
                    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
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
  const mutationDefaults = getDeletePlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
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

export function getPlansCodeFixedChargesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>>,
) {
  return ['plans', '/plans/:code/fixed_charges', toValue(args)] as const
}

export function getPlansCodeFixedChargesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeFixedChargesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].fixed_charges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeFixedCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlansCodeFixedChargesQueryKey>
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
          Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeFixedChargesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeFixedChargesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].fixed_charges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlansCodeFixedChargesMutationKey() {
  return ['plans', '/plans/:code/fixed_charges', 'POST'] as const
}

export function getPostPlansCodeFixedChargesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansCodeFixedChargesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']>,
    ) {
      return parseResponse(client.plans[':code'].fixed_charges.$post(args, options))
    },
  })
}

export function usePostPlansCodeFixedCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']>,
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
  const mutationDefaults = getPostPlansCodeFixedChargesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansCodeFixedChargesFixedChargeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']>
  >,
) {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', toValue(args)] as const
}

export function getPlansCodeFixedChargesFixedChargeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansCodeFixedChargesFixedChargeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansCodeFixedChargesFixedChargeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']>
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
                    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
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
                    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlansCodeFixedChargesFixedChargeCodeQueryKey>
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
              (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeFixedChargesFixedChargeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansCodeFixedChargesFixedChargeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlansCodeFixedChargesFixedChargeCodeMutationKey() {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', 'PUT'] as const
}

export function getPutPlansCodeFixedChargesFixedChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlansCodeFixedChargesFixedChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].fixed_charges[':fixed_charge_code'].$put(args, options),
      )
    },
  })
}

export function usePutPlansCodeFixedChargesFixedChargeCode<
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
                    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
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
  const mutationDefaults = getPutPlansCodeFixedChargesFixedChargeCodeMutationOptions<
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

export function getDeletePlansCodeFixedChargesFixedChargeCodeMutationKey() {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', 'DELETE'] as const
}

export function getDeletePlansCodeFixedChargesFixedChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansCodeFixedChargesFixedChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.plans[':code'].fixed_charges[':fixed_charge_code'].$delete(args, options),
      )
    },
  })
}

export function useDeletePlansCodeFixedChargesFixedChargeCode<
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
                    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
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
  const mutationDefaults = getDeletePlansCodeFixedChargesFixedChargeCodeMutationOptions<
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

export function getQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.$get>>,
) {
  return ['quotes', '/quotes', toValue(args)] as const
}

export function getQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
          ReturnType<typeof getQuotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['$get']>>,
) {
  return ['quotes', '/quotes/:lago_id', toValue(args)] as const
}

export function getQuotesLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
            >
          >,
          ReturnType<typeof getQuotesLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuotesLagoIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>>,
) {
  return ['quotes', '/quotes/:lago_id/versions', toValue(args)] as const
}

export function getQuotesLagoIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotesLagoIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quotes[':lago_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotesLagoIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuotesLagoIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesLagoIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotesLagoIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quotes[':lago_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteVersionsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>>,
) {
  return ['quote_versions', '/quote_versions/:lago_id', toValue(args)] as const
}

export function getQuoteVersionsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteVersionsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote_versions[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuoteVersionsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuoteVersionsLagoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteVersionsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteVersionsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote_versions[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuoteVersionsLagoIdApproveMutationKey() {
  return ['quote_versions', '/quote_versions/:lago_id/approve', 'POST'] as const
}

export function getPostQuoteVersionsLagoIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteVersionsLagoIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>,
    ) {
      return parseResponse(client.quote_versions[':lago_id'].approve.$post(args, options))
    },
  })
}

export function usePostQuoteVersionsLagoIdApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>,
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
  const mutationDefaults = getPostQuoteVersionsLagoIdApproveMutationOptions<
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

export function getPostQuoteVersionsLagoIdVoidMutationKey() {
  return ['quote_versions', '/quote_versions/:lago_id/void', 'POST'] as const
}

export function getPostQuoteVersionsLagoIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['void']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteVersionsLagoIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']>,
    ) {
      return parseResponse(client.quote_versions[':lago_id'].void.$post(args, options))
    },
  })
}

export function usePostQuoteVersionsLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['void']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']>,
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
  const mutationDefaults = getPostQuoteVersionsLagoIdVoidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteVersionsLagoIdCloneMutationKey() {
  return ['quote_versions', '/quote_versions/:lago_id/clone', 'POST'] as const
}

export function getPostQuoteVersionsLagoIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteVersionsLagoIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>,
    ) {
      return parseResponse(client.quote_versions[':lago_id'].clone.$post(args, options))
    },
  })
}

export function usePostQuoteVersionsLagoIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>,
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
  const mutationDefaults = getPostQuoteVersionsLagoIdCloneMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
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
  return ['subscriptions', '/subscriptions', toValue(args)] as const
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

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function usePostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
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
  const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubscriptionsExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>>,
) {
  return ['subscriptions', '/subscriptions/:external_id', toValue(args)] as const
}

export function getSubscriptionsExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id', 'PUT'] as const
}

export function getPutSubscriptionsExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':external_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':external_id']['$put']>,
    ) {
      return parseResponse(client.subscriptions[':external_id'].$put(args, options))
    },
  })
}

export function usePutSubscriptionsExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['$put']>,
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
  const mutationDefaults = getPutSubscriptionsExternalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSubscriptionsExternalIdMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id', 'DELETE'] as const
}

export function getDeleteSubscriptionsExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']>,
    ) {
      return parseResponse(client.subscriptions[':external_id'].$delete(args, options))
    },
  })
}

export function useDeleteSubscriptionsExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']>,
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
  const mutationDefaults = getDeleteSubscriptionsExternalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubscriptionsExternalIdLifetimeUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/lifetime_usage', toValue(args)] as const
}

export function getSubscriptionsExternalIdLifetimeUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdLifetimeUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].lifetime_usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdLifetimeUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
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
                    (typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']
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
                    (typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdLifetimeUsageQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdLifetimeUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdLifetimeUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].lifetime_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdLifetimeUsageMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/lifetime_usage', 'PUT'] as const
}

export function getPutSubscriptionsExternalIdLifetimeUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdLifetimeUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']
      >,
    ) {
      return parseResponse(client.subscriptions[':external_id'].lifetime_usage.$put(args, options))
    },
  })
}

export function usePutSubscriptionsExternalIdLifetimeUsage<
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
                    (typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']>,
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
  const mutationDefaults = getPutSubscriptionsExternalIdLifetimeUsageMutationOptions<
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

export function getSubscriptionsExternalIdAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts', toValue(args)] as const
}

export function getSubscriptionsExternalIdAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubscriptionsExternalIdAlertsMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts', 'POST'] as const
}

export function getPostSubscriptionsExternalIdAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsExternalIdAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':external_id'].alerts.$post(args, options))
    },
  })
}

export function usePostSubscriptionsExternalIdAlerts<
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
                  ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>,
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
  const mutationDefaults = getPostSubscriptionsExternalIdAlertsMutationOptions<
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

export function getDeleteSubscriptionsExternalIdAlertsMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts', 'DELETE'] as const
}

export function getDeleteSubscriptionsExternalIdAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsExternalIdAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>,
    ) {
      return parseResponse(client.subscriptions[':external_id'].alerts.$delete(args, options))
    },
  })
}

export function useDeleteSubscriptionsExternalIdAlerts<
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
                  ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>,
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
  const mutationDefaults = getDeleteSubscriptionsExternalIdAlertsMutationOptions<
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

export function getSubscriptionsExternalIdAlertsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', toValue(args)] as const
}

export function getSubscriptionsExternalIdAlertsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdAlertsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].alerts[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdAlertsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
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
                    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']
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
                    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdAlertsCodeQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdAlertsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdAlertsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].alerts[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdAlertsCodeMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', 'PUT'] as const
}

export function getPutSubscriptionsExternalIdAlertsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdAlertsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']
      >,
    ) {
      return parseResponse(client.subscriptions[':external_id'].alerts[':code'].$put(args, options))
    },
  })
}

export function usePutSubscriptionsExternalIdAlertsCode<
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
                    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']
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
  const mutationDefaults = getPutSubscriptionsExternalIdAlertsCodeMutationOptions<
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

export function getDeleteSubscriptionsExternalIdAlertsCodeMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', 'DELETE'] as const
}

export function getDeleteSubscriptionsExternalIdAlertsCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsExternalIdAlertsCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].alerts[':code'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSubscriptionsExternalIdAlertsCode<
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
                    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']
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
  const mutationDefaults = getDeleteSubscriptionsExternalIdAlertsCodeMutationOptions<
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

export function getSubscriptionsExternalIdEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/entitlements', toValue(args)] as const
}

export function getSubscriptionsExternalIdEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdEntitlementsQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSubscriptionsExternalIdEntitlementsMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/entitlements', 'PATCH'] as const
}

export function getPatchSubscriptionsExternalIdEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsExternalIdEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['entitlements']['$patch']
      >,
    ) {
      return parseResponse(client.subscriptions[':external_id'].entitlements.$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsExternalIdEntitlements<
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
                    (typeof client.subscriptions)[':external_id']['entitlements']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$patch']>,
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
  const mutationDefaults = getPatchSubscriptionsExternalIdEntitlementsMutationOptions<
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

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/entitlements/:feature_code',
    'DELETE',
  ] as const
}

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].entitlements[':feature_code'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSubscriptionsExternalIdEntitlementsFeatureCode<
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
                    (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
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
  const mutationDefaults = getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeMutationOptions<
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

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/entitlements/:feature_code/privileges/:privilege_code',
    'DELETE',
  ] as const
}

export function getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].entitlements[':feature_code'].privileges[
          ':privilege_code'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCode<
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
                    (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
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
    getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
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

export function getSubscriptionsExternalIdFixedChargesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/fixed_charges', toValue(args)] as const
}

export function getSubscriptionsExternalIdFixedChargesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdFixedChargesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].fixed_charges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdFixedCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdFixedChargesQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdFixedChargesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdFixedChargesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].fixed_charges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsExternalIdChargesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/charges', toValue(args)] as const
}

export function getSubscriptionsExternalIdChargesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdChargesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].charges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdChargesQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdChargesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdChargesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].charges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsExternalIdChargesChargeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code',
    toValue(args),
  ] as const
}

export function getSubscriptionsExternalIdChargesChargeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdChargesChargeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdChargesChargeCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeQueryKey>
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
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdChargesChargeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdChargesChargeCodeMutationKey() {
  return ['subscriptions', '/subscriptions/:external_id/charges/:charge_code', 'PUT'] as const
}

export function getPutSubscriptionsExternalIdChargesChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdChargesChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].$put(args, options),
      )
    },
  })
}

export function usePutSubscriptionsExternalIdChargesChargeCode<
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
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
  const mutationDefaults = getPutSubscriptionsExternalIdChargesChargeCodeMutationOptions<
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

export function getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters',
    toValue(args),
  ] as const
}

export function getSubscriptionsExternalIdChargesChargeCodeFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsExternalIdChargesChargeCodeFilters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey>
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
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubscriptionsExternalIdChargesChargeCodeFiltersMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters',
    'POST',
  ] as const
}

export function getPostSubscriptionsExternalIdChargesChargeCodeFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsExternalIdChargesChargeCodeFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters.$post(args, options),
      )
    },
  })
}

export function usePostSubscriptionsExternalIdChargesChargeCodeFilters<
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
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
  const mutationDefaults = getPostSubscriptionsExternalIdChargesChargeCodeFiltersMutationOptions<
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

export function getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    toValue(args),
  ] as const
}

export function getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey>
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
              (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    'PUT',
  ] as const
}

export function getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
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
    getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
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

export function getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id',
    'DELETE',
  ] as const
}

export function getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
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
                    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
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
    getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
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

export function getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:external_id/fixed_charges/:fixed_charge_code',
    toValue(args),
  ] as const
}

export function getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSubscriptionsExternalIdFixedChargesFixedChargeCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
                    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
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
                    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey>
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
              (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeMutationKey() {
  return [
    'subscriptions',
    '/subscriptions/:external_id/fixed_charges/:fixed_charge_code',
    'PUT',
  ] as const
}

export function getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSubscriptionsExternalIdFixedChargesFixedChargeCode<
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
                    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
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
  const mutationDefaults = getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeMutationOptions<
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

export function getTaxesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxes.$get>>,
) {
  return ['taxes', '/taxes', toValue(args)] as const
}

export function getTaxesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.taxes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
          ReturnType<typeof getTaxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.taxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTaxesMutationKey() {
  return ['taxes', '/taxes', 'POST'] as const
}

export function getPostTaxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.taxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.taxes.$post>) {
      return parseResponse(client.taxes.$post(args, options))
    },
  })
}

export function usePostTaxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$post>>>>>,
          TError,
          InferRequestType<typeof client.taxes.$post>,
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
  const mutationDefaults = getPostTaxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaxesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.taxes)[':code']['$get']>>,
) {
  return ['taxes', '/taxes/:code', toValue(args)] as const
}

export function getTaxesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.taxes)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxes[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxesCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.taxes)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getTaxesCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.taxes[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTaxesCodeMutationKey() {
  return ['taxes', '/taxes/:code', 'PUT'] as const
}

export function getPutTaxesCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.taxes)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTaxesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.taxes)[':code']['$put']>) {
      return parseResponse(client.taxes[':code'].$put(args, options))
    },
  })
}

export function usePutTaxesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.taxes)[':code']['$put']>,
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
  const mutationDefaults = getPutTaxesCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTaxesCodeMutationKey() {
  return ['taxes', '/taxes/:code', 'DELETE'] as const
}

export function getDeleteTaxesCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.taxes)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaxesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.taxes)[':code']['$delete']>) {
      return parseResponse(client.taxes[':code'].$delete(args, options))
    },
  })
}

export function useDeleteTaxesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.taxes)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteTaxesCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsageAttributionTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usage_attribution_types.$get>>,
) {
  return ['usage_attribution_types', '/usage_attribution_types', toValue(args)] as const
}

export function getUsageAttributionTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usage_attribution_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageAttributionTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usage_attribution_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsageAttributionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.usage_attribution_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
            >
          >,
          ReturnType<typeof getUsageAttributionTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageAttributionTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageAttributionTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usage_attribution_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsageAttributionTypesMutationKey() {
  return ['usage_attribution_types', '/usage_attribution_types', 'POST'] as const
}

export function getPostUsageAttributionTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.usage_attribution_types.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsageAttributionTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.usage_attribution_types.$post>) {
      return parseResponse(client.usage_attribution_types.$post(args, options))
    },
  })
}

export function usePostUsageAttributionTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.usage_attribution_types.$post>,
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
  const mutationDefaults = getPostUsageAttributionTypesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsageAttributionTypesCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>
  >,
) {
  return ['usage_attribution_types', '/usage_attribution_types/:code', toValue(args)] as const
}

export function getUsageAttributionTypesCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageAttributionTypesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usage_attribution_types[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsageAttributionTypesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsageAttributionTypesCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageAttributionTypesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageAttributionTypesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.usage_attribution_types[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsageAttributionTypesCodeMutationKey() {
  return ['usage_attribution_types', '/usage_attribution_types/:code', 'PUT'] as const
}

export function getPutUsageAttributionTypesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsageAttributionTypesCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']>,
    ) {
      return parseResponse(client.usage_attribution_types[':code'].$put(args, options))
    },
  })
}

export function usePutUsageAttributionTypesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']>,
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
  const mutationDefaults = getPutUsageAttributionTypesCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsageAttributionTypesCodeMutationKey() {
  return ['usage_attribution_types', '/usage_attribution_types/:code', 'DELETE'] as const
}

export function getDeleteUsageAttributionTypesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsageAttributionTypesCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']>,
    ) {
      return parseResponse(client.usage_attribution_types[':code'].$delete(args, options))
    },
  })
}

export function useDeleteUsageAttributionTypesCode<
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
                Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteUsageAttributionTypesCodeMutationOptions<
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

export function getWalletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wallets.$get>>,
) {
  return ['wallets', '/wallets', toValue(args)] as const
}

export function getWalletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wallets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWallets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wallets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
          >,
          ReturnType<typeof getWalletsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWalletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWalletsMutationKey() {
  return ['wallets', '/wallets', 'POST'] as const
}

export function getPostWalletsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$post>>>>>,
    TError,
    InferRequestType<typeof client.wallets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallets.$post>) {
      return parseResponse(client.wallets.$post(args, options))
    },
  })
}

export function usePostWallets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.wallets.$post>,
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
  const mutationDefaults = getPostWalletsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWalletsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallets)[':lago_id']['$get']>>,
) {
  return ['wallets', '/wallets/:lago_id', toValue(args)] as const
}

export function getWalletsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallets)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallets[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallets)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
            >
          >,
          ReturnType<typeof getWalletsLagoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallets[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWalletsLagoIdMutationKey() {
  return ['wallets', '/wallets/:lago_id', 'PUT'] as const
}

export function getPutWalletsLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletsLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.wallets)[':lago_id']['$put']>) {
      return parseResponse(client.wallets[':lago_id'].$put(args, options))
    },
  })
}

export function usePutWalletsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['$put']>,
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
  const mutationDefaults = getPutWalletsLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWalletsLagoIdMutationKey() {
  return ['wallets', '/wallets/:lago_id', 'DELETE'] as const
}

export function getDeleteWalletsLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWalletsLagoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.wallets)[':lago_id']['$delete']>) {
      return parseResponse(client.wallets[':lago_id'].$delete(args, options))
    },
  })
}

export function useDeleteWalletsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['$delete']>,
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
  const mutationDefaults = getDeleteWalletsLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWalletsLagoIdMetadataMutationKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'POST'] as const
}

export function getPostWalletsLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletsLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']>,
    ) {
      return parseResponse(client.wallets[':lago_id'].metadata.$post(args, options))
    },
  })
}

export function usePostWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']>,
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
  const mutationDefaults = getPostWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWalletsLagoIdMetadataMutationKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'DELETE'] as const
}

export function getDeleteWalletsLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWalletsLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>,
    ) {
      return parseResponse(client.wallets[':lago_id'].metadata.$delete(args, options))
    },
  })
}

export function useDeleteWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>,
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
  const mutationDefaults = getDeleteWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchWalletsLagoIdMetadataMutationKey() {
  return ['wallets', '/wallets/:lago_id/metadata', 'PATCH'] as const
}

export function getPatchWalletsLagoIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletsLagoIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>,
    ) {
      return parseResponse(client.wallets[':lago_id'].metadata.$patch(args, options))
    },
  })
}

export function usePatchWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWalletsLagoIdMetadataKeyMutationKey() {
  return ['wallets', '/wallets/:lago_id/metadata/:key', 'DELETE'] as const
}

export function getDeleteWalletsLagoIdMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWalletsLagoIdMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>,
    ) {
      return parseResponse(client.wallets[':lago_id'].metadata[':key'].$delete(args, options))
    },
  })
}

export function useDeleteWalletsLagoIdMetadataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>,
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
  const mutationDefaults = getDeleteWalletsLagoIdMetadataKeyMutationOptions<
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

export function getPostWalletTransactionsMutationKey() {
  return ['wallet_transactions', '/wallet_transactions', 'POST'] as const
}

export function getPostWalletTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet_transactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wallet_transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet_transactions.$post>) {
      return parseResponse(client.wallet_transactions.$post(args, options))
    },
  })
}

export function usePostWalletTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet_transactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wallet_transactions.$post>,
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
  const mutationDefaults = getPostWalletTransactionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWalletTransactionsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id', toValue(args)] as const
}

export function getWalletTransactionsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletTransactionsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletTransactionsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWalletTransactionsLagoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletTransactionsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletTransactionsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet_transactions[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWalletTransactionsLagoIdPaymentUrlMutationKey() {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/payment_url', 'POST'] as const
}

export function getPostWalletTransactionsLagoIdPaymentUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletTransactionsLagoIdPaymentUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']
      >,
    ) {
      return parseResponse(client.wallet_transactions[':lago_id'].payment_url.$post(args, options))
    },
  })
}

export function usePostWalletTransactionsLagoIdPaymentUrl<
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
                    (typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']>,
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
  const mutationDefaults = getPostWalletTransactionsLagoIdPaymentUrlMutationOptions<
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

export function getWalletTransactionsLagoIdConsumptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
  >,
) {
  return [
    'wallet_transactions',
    '/wallet_transactions/:lago_id/consumptions',
    toValue(args),
  ] as const
}

export function getWalletTransactionsLagoIdConsumptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletTransactionsLagoIdConsumptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].consumptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletTransactionsLagoIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
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
                    (typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']
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
                    (typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWalletTransactionsLagoIdConsumptionsQueryKey>
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
            ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletTransactionsLagoIdConsumptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletTransactionsLagoIdConsumptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet_transactions[':lago_id'].consumptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWalletTransactionsLagoIdFundingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>
  >,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/fundings', toValue(args)] as const
}

export function getWalletTransactionsLagoIdFundingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletTransactionsLagoIdFundingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].fundings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletTransactionsLagoIdFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>
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
                  ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWalletTransactionsLagoIdFundingsQueryKey>
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
          Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletTransactionsLagoIdFundingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletTransactionsLagoIdFundingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet_transactions[':lago_id'].fundings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWalletsLagoIdWalletTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>
  >,
) {
  return ['wallets', '/wallets/:lago_id/wallet_transactions', toValue(args)] as const
}

export function getWalletsLagoIdWalletTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletsLagoIdWalletTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallets[':lago_id'].wallet_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletsLagoIdWalletTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>
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
                  ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWalletsLagoIdWalletTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletsLagoIdWalletTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletsLagoIdWalletTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallets[':lago_id'].wallet_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksPublicKeyQueryKey() {
  return ['webhooks', '/webhooks/public_key'] as const
}

export function getWebhooksPublicKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksPublicKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.public_key.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>
            >
          >,
          ReturnType<typeof getWebhooksPublicKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksPublicKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.public_key.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksJsonPublicKeyQueryKey() {
  return ['webhooks', '/webhooks/json_public_key'] as const
}

export function getWebhooksJsonPublicKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksJsonPublicKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.json_public_key.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksJsonPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
            >
          >,
          ReturnType<typeof getWebhooksJsonPublicKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJsonPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksJsonPublicKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.json_public_key.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', toValue(args)] as const
}

export function getWebhookEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook_endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          ReturnType<typeof getWebhookEndpointsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhookEndpointsMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints', 'POST'] as const
}

export function getPostWebhookEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhook_endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook_endpoints.$post>) {
      return parseResponse(client.webhook_endpoints.$post(args, options))
    },
  })
}

export function usePostWebhookEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhook_endpoints.$post>,
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
  const mutationDefaults = getPostWebhookEndpointsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhookEndpointsLagoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', toValue(args)] as const
}

export function getWebhookEndpointsLagoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookEndpointsLagoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook_endpoints[':lago_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhookEndpointsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhookEndpointsLagoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsLagoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookEndpointsLagoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook_endpoints[':lago_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhookEndpointsLagoIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', 'PUT'] as const
}

export function getPutWebhookEndpointsLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhookEndpointsLagoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']>,
    ) {
      return parseResponse(client.webhook_endpoints[':lago_id'].$put(args, options))
    },
  })
}

export function usePutWebhookEndpointsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']>,
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
  const mutationDefaults = getPutWebhookEndpointsLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhookEndpointsLagoIdMutationKey() {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', 'DELETE'] as const
}

export function getDeleteWebhookEndpointsLagoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookEndpointsLagoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>,
    ) {
      return parseResponse(client.webhook_endpoints[':lago_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookEndpointsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhookEndpointsLagoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
