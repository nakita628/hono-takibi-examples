import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getBillingEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingEntitiesQueryKey>
  >({
    queryKey: getBillingEntitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_entities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBillingEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillingEntitiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingEntitiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostBillingEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing_entities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billing_entities.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBillingEntitiesCodeQueryKey(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
) {
  return ['billing_entities', '/billing_entities/:code', args] as const
}

export function getBillingEntitiesCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingEntitiesCodeQueryKey>
  >({
    queryKey: getBillingEntitiesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billing_entities[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillingEntitiesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billing_entities)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillingEntitiesCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingEntitiesCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutBillingEntitiesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillingEntitiesCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActivityLogsQueryKey(args: InferRequestType<typeof client.activity_logs.$get>) {
  return ['activity_logs', '/activity_logs', args] as const
}

export function getActivityLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activity_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActivityLogsQueryKey>
  >({
    queryKey: getActivityLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.activity_logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity_logs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getActivityLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActivityLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActivityLogsActivityIdQueryKey(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
) {
  return ['activity_logs', '/activity_logs/:activity_id', args] as const
}

export function getActivityLogsActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActivityLogsActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity_logs[':activity_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActivityLogsActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activity_logs)[':activity_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActivityLogsActivityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddOnsQueryKey(args: InferRequestType<typeof client.add_ons.$get>) {
  return ['add_ons', '/add_ons', args] as const
}

export function getAddOnsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.add_ons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddOnsQueryKey>
  >({
    queryKey: getAddOnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.add_ons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAddOns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.add_ons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAddOnsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddOnsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAddOns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_ons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.add_ons.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddOnsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAddOnsCodeQueryKey(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
) {
  return ['add_ons', '/add_ons/:code', args] as const
}

export function getAddOnsCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddOnsCodeQueryKey>
  >({
    queryKey: getAddOnsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.add_ons[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAddOnsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.add_ons)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddOnsCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddOnsCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAddOnsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.add_ons)[':code']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAddOnsCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAddOnsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.add_ons)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.add_ons)[':code']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAddOnsCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLogsQueryKey(args: InferRequestType<typeof client.api_logs.$get>) {
  return ['api_logs', '/api_logs', args] as const
}

export function getApiLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLogsQueryKey>
  >({
    queryKey: getApiLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_logs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiLogsRequestIdQueryKey(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
) {
  return ['api_logs', '/api_logs/:request_id', args] as const
}

export function getApiLogsRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLogsRequestIdQueryKey>
  >({
    queryKey: getApiLogsRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_logs[':request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLogsRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_logs)[':request_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiLogsRequestIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLogsRequestIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsGrossRevenueQueryKey(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
) {
  return ['analytics', '/analytics/gross_revenue', args] as const
}

export function getAnalyticsGrossRevenueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsGrossRevenueQueryKey>
  >({
    queryKey: getAnalyticsGrossRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.gross_revenue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsGrossRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.gross_revenue.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.gross_revenue.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsGrossRevenueQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsGrossRevenueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsInvoiceCollectionQueryKey(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
) {
  return ['analytics', '/analytics/invoice_collection', args] as const
}

export function getAnalyticsInvoiceCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsInvoiceCollectionQueryKey>
  >({
    queryKey: getAnalyticsInvoiceCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.invoice_collection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsInvoiceCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.invoice_collection.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.invoice_collection.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsInvoiceCollectionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsInvoiceCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsInvoicedUsageQueryKey(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
) {
  return ['analytics', '/analytics/invoiced_usage', args] as const
}

export function getAnalyticsInvoicedUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsInvoicedUsageQueryKey>
  >({
    queryKey: getAnalyticsInvoicedUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.invoiced_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsInvoicedUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.invoiced_usage.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.invoiced_usage.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsInvoicedUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsInvoicedUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsMrrQueryKey(args: InferRequestType<typeof client.analytics.mrr.$get>) {
  return ['analytics', '/analytics/mrr', args] as const
}

export function getAnalyticsMrrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.mrr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsMrrQueryKey>
  >({
    queryKey: getAnalyticsMrrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.mrr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalyticsMrr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.mrr.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.mrr.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsMrrQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsMrrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsOverdueBalanceQueryKey(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
) {
  return ['analytics', '/analytics/overdue_balance', args] as const
}

export function getAnalyticsOverdueBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsOverdueBalanceQueryKey>
  >({
    queryKey: getAnalyticsOverdueBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.overdue_balance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsOverdueBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.overdue_balance.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.overdue_balance.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsOverdueBalanceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsOverdueBalanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsUsageQueryKey(
  args: InferRequestType<typeof client.analytics.usage.$get>,
) {
  return ['analytics', '/analytics/usage', args] as const
}

export function getAnalyticsUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsUsageQueryKey>
  >({
    queryKey: getAnalyticsUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalyticsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.usage.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.usage.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppliedCouponsQueryKey(
  args: InferRequestType<typeof client.applied_coupons.$get>,
) {
  return ['applied_coupons', '/applied_coupons', args] as const
}

export function getAppliedCouponsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.applied_coupons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppliedCouponsQueryKey>
  >({
    queryKey: getAppliedCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applied_coupons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppliedCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.applied_coupons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppliedCouponsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppliedCouponsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAppliedCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.applied_coupons.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.applied_coupons.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppliedCouponsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBillableMetricsQueryKey(
  args: InferRequestType<typeof client.billable_metrics.$get>,
) {
  return ['billable_metrics', '/billable_metrics', args] as const
}

export function getBillableMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.billable_metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillableMetricsQueryKey>
  >({
    queryKey: getBillableMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billable_metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBillableMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.billable_metrics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillableMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillableMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBillableMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billable_metrics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billable_metrics.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillableMetricsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBillableMetricsEvaluateExpression<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillableMetricsEvaluateExpressionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBillableMetricsCodeQueryKey(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
) {
  return ['billable_metrics', '/billable_metrics/:code', args] as const
}

export function getBillableMetricsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillableMetricsCodeQueryKey>
  >({
    queryKey: getBillableMetricsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billable_metrics[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillableMetricsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billable_metrics)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillableMetricsCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillableMetricsCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutBillableMetricsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillableMetricsCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBillableMetricsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBillableMetricsCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFeaturesQueryKey(args: InferRequestType<typeof client.features.$get>) {
  return ['features', '/features', args] as const
}

export function getFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.features.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeaturesQueryKey>
  >({
    queryKey: getFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.features.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.features.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFeaturesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeaturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFeatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.features.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFeaturesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFeaturesCodeQueryKey(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
) {
  return ['features', '/features/:code', args] as const
}

export function getFeaturesCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeaturesCodeQueryKey>
  >({
    queryKey: getFeaturesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.features[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeaturesCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.features)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeaturesCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeaturesCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutFeaturesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.features)[':code']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFeaturesCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFeaturesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFeaturesCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFeaturesCodePrivilegesPrivilegeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFeaturesCodePrivilegesPrivilegeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCouponsQueryKey(args: InferRequestType<typeof client.coupons.$get>) {
  return ['coupons', '/coupons', args] as const
}

export function getCouponsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.coupons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCouponsQueryKey>
  >({
    queryKey: getCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coupons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.coupons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCouponsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.coupons.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCouponsCodeQueryKey(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
) {
  return ['coupons', '/coupons/:code', args] as const
}

export function getCouponsCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsCodeQueryKey>
  >({
    queryKey: getCouponsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coupons[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCouponsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.coupons)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCouponsCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutCouponsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':code']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCouponsCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCouponsCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':code']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCouponsCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCreditNotesQueryKey(args: InferRequestType<typeof client.credit_notes.$get>) {
  return ['credit_notes', '/credit_notes', args] as const
}

export function getCreditNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credit_notes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditNotesQueryKey>
  >({
    queryKey: getCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credit_notes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.credit_notes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCreditNotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreditNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.credit_notes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreditNotesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCreditNotesLagoIdQueryKey(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
) {
  return ['credit_notes', '/credit_notes/:lago_id', args] as const
}

export function getCreditNotesLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreditNotesLagoIdQueryKey>
  >({
    queryKey: getCreditNotesLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credit_notes[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCreditNotesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credit_notes)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCreditNotesLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreditNotesLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutCreditNotesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCreditNotesLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditNotesLagoIdDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreditNotesLagoIdDownloadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditNotesLagoIdDownloadXml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreditNotesLagoIdDownloadXmlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditNotesEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit_notes.estimate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit_notes.estimate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreditNotesEstimateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCreditNotesLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCreditNotesLagoIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditNotesLagoIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreditNotesLagoIdMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCreditNotesLagoIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCreditNotesLagoIdMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCreditNotesLagoIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCreditNotesLagoIdMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCreditNotesLagoIdMetadataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCreditNotesLagoIdMetadataKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersQueryKey(args: InferRequestType<typeof client.customers.$get>) {
  return ['customers', '/customers', args] as const
}

export function getCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >({
    queryKey: getCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id', args] as const
}

export function getCustomersExternalCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomersExternalCustomerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdAppliedCouponsQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/applied_coupons', args] as const
}

export function getCustomersExternalCustomerIdAppliedCouponsQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdAppliedCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].applied_coupons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdAppliedCoupons<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdAppliedCouponsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdCreditNotesQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/credit_notes', args] as const
}

export function getCustomersExternalCustomerIdCreditNotesQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdCreditNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].credit_notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdCreditNotes<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdCreditNotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdCreditNotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/invoices', args] as const
}

export function getCustomersExternalCustomerIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['invoices']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/payments', args] as const
}

export function getCustomersExternalCustomerIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['payments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdPaymentRequestsQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_requests', args] as const
}

export function getCustomersExternalCustomerIdPaymentRequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdPaymentRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdPaymentRequests<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdPaymentRequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdPortalUrlQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/portal_url', args] as const
}

export function getCustomersExternalCustomerIdPortalUrlQueryOptions<
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
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdPortalUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].portal_url.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdPortalUrl<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['portal_url']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdPortalUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdPortalUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/subscriptions', args] as const
}

export function getCustomersExternalCustomerIdSubscriptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdSubscriptions<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdWalletsQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/wallets', args] as const
}

export function getCustomersExternalCustomerIdWalletsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdWalletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdWallets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdWalletsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdWalletsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCustomersExternalCustomerIdWallets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomersExternalCustomerIdWalletsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdWalletsCodeQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/wallets/:code', args] as const
}

export function getCustomersExternalCustomerIdWalletsCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdWalletsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdWalletsCode<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdWalletsCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutCustomersExternalCustomerIdWalletsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCustomersExternalCustomerIdWalletsCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdWalletsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomersExternalCustomerIdWalletsCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCustomersExternalCustomerIdWalletsWalletCodeMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchCustomersExternalCustomerIdWalletsWalletCodeMetadataMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey(
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

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdWalletsWalletCodeAlerts<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdWalletsWalletCodeAlertsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCustomersExternalCustomerIdWalletsWalletCodeAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdWalletsWalletCodeAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey(
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

export function getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdCurrentUsageQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/current_usage', args] as const
}

export function getCustomersExternalCustomerIdCurrentUsageQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdCurrentUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].current_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdCurrentUsage<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdCurrentUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdCurrentUsageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdProjectedUsageQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/projected_usage', args] as const
}

export function getCustomersExternalCustomerIdProjectedUsageQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdProjectedUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].projected_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdProjectedUsage<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdProjectedUsageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdPastUsageQueryKey(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
) {
  return ['customers', '/customers/:external_customer_id/past_usage', args] as const
}

export function getCustomersExternalCustomerIdPastUsageQueryOptions<
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
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdPastUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].past_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdPastUsage<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['past_usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCustomersExternalCustomerIdPastUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdPastUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdAttributedUsageQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/attributed_usage', args] as const
}

export function getCustomersExternalCustomerIdAttributedUsageQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdAttributedUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].attributed_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdAttributedUsage<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdAttributedUsageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCustomersExternalCustomerIdCheckoutUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomersExternalCustomerIdCheckoutUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersExternalCustomerIdPaymentMethodsQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
) {
  return ['customers', '/customers/:external_customer_id/payment_methods', args] as const
}

export function getCustomersExternalCustomerIdPaymentMethodsQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersExternalCustomerIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':external_customer_id'].payment_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersExternalCustomerIdPaymentMethods<
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
  args: () => InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersExternalCustomerIdPaymentMethodsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomersExternalCustomerIdPaymentMethodsLagoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCustomersExternalCustomerIdPaymentMethodsLagoIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEventsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEventsEstimateFees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.estimate_fees.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.estimate_fees.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEstimateFeesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEventsEstimateInstantFees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEstimateInstantFeesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEventsBatchEstimateInstantFees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsBatchEstimateInstantFeesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
) {
  return ['events', '/events/:transaction_id', args] as const
}

export function getEventsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsTransactionIdQueryKey>
  >({
    queryKey: getEventsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':transaction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsTransactionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsTransactionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeesQueryKey(args: InferRequestType<typeof client.fees.$get>) {
  return ['fees', '/fees', args] as const
}

export function getFeesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeesQueryKey>
  >({
    queryKey: getFeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFees<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fees.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fees.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getFeesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeesLagoIdQueryKey(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
) {
  return ['fees', '/fees/:lago_id', args] as const
}

export function getFeesLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeesLagoIdQueryKey>
  >({
    queryKey: getFeesLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fees[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeesLagoId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeesLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeesLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutFeesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.fees)[':lago_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFeesLagoIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFeesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fees)[':lago_id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.fees)[':lago_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFeesLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesQueryKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function getInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >({
    queryKey: getInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invoices.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesLagoIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
) {
  return ['invoices', '/invoices/:lago_id', args] as const
}

export function getInvoicesLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesLagoIdQueryKey>
  >({
    queryKey: getInvoicesLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoicesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutInvoicesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteInvoicesLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteInvoicesLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdDownloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdDownloadXml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdDownloadXmlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutInvoicesLagoIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesLagoIdFinalizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdLoseDispute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdLoseDisputeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutInvoicesLagoIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesLagoIdRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdRetryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdPaymentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdPaymentUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invoices.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invoices.preview.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdRetryPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdRetryPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvoicesLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesLagoIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrderFormsQueryKey(args: InferRequestType<typeof client.order_forms.$get>) {
  return ['order_forms', '/order_forms', args] as const
}

export function getOrderFormsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.order_forms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderFormsQueryKey>
  >({
    queryKey: getOrderFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order_forms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrderForms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.order_forms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order_forms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrderFormsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrderFormsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrderFormsLagoIdQueryKey(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
) {
  return ['order_forms', '/order_forms/:lago_id', args] as const
}

export function getOrderFormsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderFormsLagoIdQueryKey>
  >({
    queryKey: getOrderFormsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order_forms[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrderFormsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.order_forms)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrderFormsLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrderFormsLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrderFormsLagoIdMarkAsSigned<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderFormsLagoIdMarkAsSignedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrderFormsLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrderFormsLagoIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrdersQueryKey(args: InferRequestType<typeof client.orders.$get>) {
  return ['orders', '/orders', args] as const
}

export function getOrdersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >({
    queryKey: getOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.orders.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getOrdersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrdersLagoIdQueryKey(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
) {
  return ['orders', '/orders/:lago_id', args] as const
}

export function getOrdersLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersLagoIdQueryKey>
  >({
    queryKey: getOrdersLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrdersLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrdersLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrdersLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrdersLagoIdExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersLagoIdExecuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentReceiptsQueryKey(
  args: InferRequestType<typeof client.payment_receipts.$get>,
) {
  return ['payment_receipts', '/payment_receipts', args] as const
}

export function getPaymentReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payment_receipts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentReceiptsQueryKey>
  >({
    queryKey: getPaymentReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_receipts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payment_receipts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_receipts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentReceiptsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentReceiptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPaymentReceiptsLagoIdQueryKey(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
) {
  return ['payment_receipts', '/payment_receipts/:lago_id', args] as const
}

export function getPaymentReceiptsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentReceiptsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_receipts[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentReceiptsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_receipts)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentReceiptsLagoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPaymentRequestsQueryKey(
  args: InferRequestType<typeof client.payment_requests.$get>,
) {
  return ['payment_requests', '/payment_requests', args] as const
}

export function getPaymentRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payment_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentRequestsQueryKey>
  >({
    queryKey: getPaymentRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payment_requests.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentRequestsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPaymentRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_requests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_requests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentRequestsLagoIdQueryKey(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
) {
  return ['payment_requests', '/payment_requests/:lago_id', args] as const
}

export function getPaymentRequestsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentRequestsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_requests[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentRequestsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_requests)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentRequestsLagoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPaymentsQueryKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function getPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >({
    queryKey: getPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentsLagoIdQueryKey(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
) {
  return ['payments', '/payments/:lago_id', args] as const
}

export function getPaymentsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsLagoIdQueryKey>
  >({
    queryKey: getPaymentsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':lago_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlansQueryKey(args: InferRequestType<typeof client.plans.$get>) {
  return ['plans', '/plans', args] as const
}

export function getPlansQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >({
    queryKey: getPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
          TError,
          InferRequestType<typeof client.plans.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['$get']>,
) {
  return ['plans', '/plans/:code', args] as const
}

export function getPlansCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.plans)[':code']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeQueryKey>
  >({
    queryKey: getPlansCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlansCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlansCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutPlansCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPlansCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':code']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeEntitlementsQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
) {
  return ['plans', '/plans/:code/entitlements', args] as const
}

export function getPlansCodeEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeEntitlementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPlansCodeEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansCodeEntitlementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchPlansCodeEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPlansCodeEntitlementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeEntitlementsFeatureCodeQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
) {
  return ['plans', '/plans/:code/entitlements/:feature_code', args] as const
}

export function getPlansCodeEntitlementsFeatureCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeEntitlementsFeatureCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].entitlements[':feature_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeEntitlementsFeatureCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.plans)[':code']['entitlements'][':feature_code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getPlansCodeEntitlementsFeatureCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeEntitlementsFeatureCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeletePlansCodeEntitlementsFeatureCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeEntitlementsFeatureCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchPlansCodeMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPlansCodeMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeMetadataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeMetadataKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeChargesQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
) {
  return ['plans', '/plans/:code/charges', args] as const
}

export function getPlansCodeChargesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansCodeChargesQueryKey>
  >({
    queryKey: getPlansCodeChargesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].charges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':code']['charges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlansCodeChargesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansCodeChargesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPlansCodeCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansCodeChargesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeChargesChargeCodeQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
) {
  return ['plans', '/plans/:code/charges/:charge_code', args] as const
}

export function getPlansCodeChargesChargeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeChargesChargeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeChargesChargeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getPlansCodeChargesChargeCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeChargesChargeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutPlansCodeChargesChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPlansCodeChargesChargeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeChargesChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeChargesChargeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeChargesChargeCodeFiltersQueryKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters', args] as const
}

export function getPlansCodeChargesChargeCodeFiltersQueryOptions<
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
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeChargesChargeCodeFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeChargesChargeCodeFilters<
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
  args: () => InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getPlansCodeChargesChargeCodeFiltersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeChargesChargeCodeFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPlansCodeChargesChargeCodeFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansCodeChargesChargeCodeFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
) {
  return ['plans', '/plans/:code/charges/:charge_code/filters/:filter_id', args] as const
}

export function getPlansCodeChargesChargeCodeFiltersFilterIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeChargesChargeCodeFiltersFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeChargesChargeCodeFiltersFilterId<
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
  args: () => InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeChargesChargeCodeFiltersFilterIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutPlansCodeChargesChargeCodeFiltersFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeChargesChargeCodeFiltersFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeChargesChargeCodeFiltersFilterIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeFixedChargesQueryKey(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
) {
  return ['plans', '/plans/:code/fixed_charges', args] as const
}

export function getPlansCodeFixedChargesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeFixedChargesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].fixed_charges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeFixedCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plans)[':code']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeFixedChargesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPlansCodeFixedCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlansCodeFixedChargesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansCodeFixedChargesFixedChargeCodeQueryKey(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
) {
  return ['plans', '/plans/:code/fixed_charges/:fixed_charge_code', args] as const
}

export function getPlansCodeFixedChargesFixedChargeCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlansCodeFixedChargesFixedChargeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlansCodeFixedChargesFixedChargeCode<
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
  args: () => InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlansCodeFixedChargesFixedChargeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutPlansCodeFixedChargesFixedChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPlansCodeFixedChargesFixedChargeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePlansCodeFixedChargesFixedChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlansCodeFixedChargesFixedChargeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQuotesQueryKey(args: InferRequestType<typeof client.quotes.$get>) {
  return ['quotes', '/quotes', args] as const
}

export function getQuotesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotesQueryKey>
  >({
    queryKey: getQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quotes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotes.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuotesLagoIdQueryKey(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
) {
  return ['quotes', '/quotes/:lago_id', args] as const
}

export function getQuotesLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotesLagoIdQueryKey>
  >({
    queryKey: getQuotesLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotesLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quotes)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuotesLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotesLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQuotesLagoIdVersionsQueryKey(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
) {
  return ['quotes', '/quotes/:lago_id/versions', args] as const
}

export function getQuotesLagoIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQuotesLagoIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotes[':lago_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuotesLagoIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.quotes)[':lago_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getQuotesLagoIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getQuoteVersionsLagoIdQueryKey(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
) {
  return ['quote_versions', '/quote_versions/:lago_id', args] as const
}

export function getQuoteVersionsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQuoteVersionsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote_versions[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQuoteVersionsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.quote_versions)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuoteVersionsLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQuoteVersionsLagoIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuoteVersionsLagoIdApproveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuoteVersionsLagoIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuoteVersionsLagoIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuoteVersionsLagoIdClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuoteVersionsLagoIdCloneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
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

export function createSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id', args] as const
}

export function getSubscriptionsExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsExternalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubscriptionsExternalIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdLifetimeUsageQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/lifetime_usage', args] as const
}

export function getSubscriptionsExternalIdLifetimeUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdLifetimeUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].lifetime_usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdLifetimeUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSubscriptionsExternalIdLifetimeUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdLifetimeUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalIdLifetimeUsage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsExternalIdLifetimeUsageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdAlertsQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts', args] as const
}

export function getSubscriptionsExternalIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdAlertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSubscriptionsExternalIdAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsExternalIdAlertsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalIdAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubscriptionsExternalIdAlertsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdAlertsCodeQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/alerts/:code', args] as const
}

export function getSubscriptionsExternalIdAlertsCodeQueryOptions<
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
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdAlertsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].alerts[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdAlertsCode<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSubscriptionsExternalIdAlertsCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdAlertsCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalIdAlertsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsExternalIdAlertsCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalIdAlertsCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubscriptionsExternalIdAlertsCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdEntitlementsQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/entitlements', args] as const
}

export function getSubscriptionsExternalIdEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['entitlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSubscriptionsExternalIdEntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdEntitlementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchSubscriptionsExternalIdEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSubscriptionsExternalIdEntitlementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalIdEntitlementsFeatureCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubscriptionsExternalIdEntitlementsFeatureCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdFixedChargesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/fixed_charges', args] as const
}

export function getSubscriptionsExternalIdFixedChargesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdFixedChargesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].fixed_charges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdFixedCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdFixedChargesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdChargesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:external_id/charges', args] as const
}

export function getSubscriptionsExternalIdChargesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdChargesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].charges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdCharges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':external_id']['charges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSubscriptionsExternalIdChargesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdChargesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdChargesChargeCodeQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
) {
  return ['subscriptions', '/subscriptions/:external_id/charges/:charge_code', args] as const
}

export function getSubscriptionsExternalIdChargesChargeCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdChargesChargeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdChargesChargeCode<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdChargesChargeCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalIdChargesChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsExternalIdChargesChargeCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey(
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

export function getSubscriptionsExternalIdChargesChargeCodeFiltersQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdChargesChargeCodeFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdChargesChargeCodeFilters<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdChargesChargeCodeFiltersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostSubscriptionsExternalIdChargesChargeCodeFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsExternalIdChargesChargeCodeFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey(
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

export function getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey(
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

export function getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsExternalIdFixedChargesFixedChargeCode<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsExternalIdFixedChargesFixedChargeCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsExternalIdFixedChargesFixedChargeCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSubscriptionsExternalIdFixedChargesFixedChargeCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTaxesQueryKey(args: InferRequestType<typeof client.taxes.$get>) {
  return ['taxes', '/taxes', args] as const
}

export function getTaxesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.taxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxesQueryKey>
  >({
    queryKey: getTaxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.taxes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTaxesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTaxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxes.$post>>>>>,
          TError,
          InferRequestType<typeof client.taxes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTaxesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTaxesCodeQueryKey(
  args: InferRequestType<(typeof client.taxes)[':code']['$get']>,
) {
  return ['taxes', '/taxes/:code', args] as const
}

export function getTaxesCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.taxes)[':code']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxesCodeQueryKey>
  >({
    queryKey: getTaxesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxes[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaxesCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.taxes)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaxesCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxesCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutTaxesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.taxes)[':code']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTaxesCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTaxesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.taxes)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.taxes)[':code']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTaxesCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsageAttributionTypesQueryKey(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
) {
  return ['usage_attribution_types', '/usage_attribution_types', args] as const
}

export function getUsageAttributionTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsageAttributionTypesQueryKey>
  >({
    queryKey: getUsageAttributionTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usage_attribution_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsageAttributionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.usage_attribution_types.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsageAttributionTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsageAttributionTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsageAttributionTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usage_attribution_types.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.usage_attribution_types.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsageAttributionTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsageAttributionTypesCodeQueryKey(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
) {
  return ['usage_attribution_types', '/usage_attribution_types/:code', args] as const
}

export function getUsageAttributionTypesCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsageAttributionTypesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.usage_attribution_types[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsageAttributionTypesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.usage_attribution_types)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsageAttributionTypesCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutUsageAttributionTypesCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsageAttributionTypesCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsageAttributionTypesCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsageAttributionTypesCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWalletsQueryKey(args: InferRequestType<typeof client.wallets.$get>) {
  return ['wallets', '/wallets', args] as const
}

export function getWalletsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wallets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWalletsQueryKey>
  >({
    queryKey: getWalletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWallets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wallets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWalletsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWalletsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWallets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.wallets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWalletsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWalletsLagoIdQueryKey(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
) {
  return ['wallets', '/wallets/:lago_id', args] as const
}

export function getWalletsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletsLagoIdQueryKey>
  >({
    queryKey: getWalletsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallets[':lago_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWalletsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWalletsLagoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWalletsLagoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutWalletsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.wallets)[':lago_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.wallets)[':lago_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWalletsLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWalletsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWalletsLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchWalletsLagoIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWalletsLagoIdMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWalletsLagoIdMetadataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWalletsLagoIdMetadataKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet_transactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wallet_transactions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWalletTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWalletTransactionsLagoIdQueryKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id', args] as const
}

export function getWalletTransactionsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWalletTransactionsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWalletTransactionsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWalletTransactionsLagoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostWalletTransactionsLagoIdPaymentUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWalletTransactionsLagoIdPaymentUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWalletTransactionsLagoIdConsumptionsQueryKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/consumptions', args] as const
}

export function getWalletTransactionsLagoIdConsumptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWalletTransactionsLagoIdConsumptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].consumptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWalletTransactionsLagoIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getWalletTransactionsLagoIdConsumptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWalletTransactionsLagoIdConsumptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWalletTransactionsLagoIdFundingsQueryKey(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
) {
  return ['wallet_transactions', '/wallet_transactions/:lago_id/fundings', args] as const
}

export function getWalletTransactionsLagoIdFundingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWalletTransactionsLagoIdFundingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallet_transactions[':lago_id'].fundings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWalletTransactionsLagoIdFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getWalletTransactionsLagoIdFundingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWalletTransactionsLagoIdFundingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWalletsLagoIdWalletTransactionsQueryKey(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
) {
  return ['wallets', '/wallets/:lago_id/wallet_transactions', args] as const
}

export function getWalletsLagoIdWalletTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWalletsLagoIdWalletTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallets[':lago_id'].wallet_transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWalletsLagoIdWalletTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getWalletsLagoIdWalletTransactionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWalletsLagoIdWalletTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWebhooksPublicKeyQueryKey() {
  return ['webhooks', '/webhooks/public_key'] as const
}

export function getWebhooksPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksPublicKeyQueryKey>
  >({
    queryKey: getWebhooksPublicKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.public_key.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.public_key.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksPublicKeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksPublicKeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getWebhooksJsonPublicKeyQueryKey() {
  return ['webhooks', '/webhooks/json_public_key'] as const
}

export function getWebhooksJsonPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJsonPublicKeyQueryKey>
  >({
    queryKey: getWebhooksJsonPublicKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.json_public_key.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksJsonPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.json_public_key.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksJsonPublicKeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksJsonPublicKeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getWebhookEndpointsQueryKey(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
) {
  return ['webhook_endpoints', '/webhook_endpoints', args] as const
}

export function getWebhookEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook_endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookEndpointsQueryKey>
  >({
    queryKey: getWebhookEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebhookEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhookEndpointsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWebhookEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhook_endpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhook_endpoints.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhookEndpointsLagoIdQueryKey(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
) {
  return ['webhook_endpoints', '/webhook_endpoints/:lago_id', args] as const
}

export function getWebhookEndpointsLagoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhookEndpointsLagoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook_endpoints[':lago_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhookEndpointsLagoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhook_endpoints)[':lago_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhookEndpointsLagoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWebhookEndpointsLagoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhookEndpointsLagoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWebhookEndpointsLagoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhookEndpointsLagoIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
