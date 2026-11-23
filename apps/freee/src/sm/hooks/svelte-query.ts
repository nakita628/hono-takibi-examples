import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdvanceReceiptsKey() {
  return ['advance_receipts'] as const
}

export function getBusinessesKey() {
  return ['businesses'] as const
}

export function getCostBudgetsKey() {
  return ['cost_budgets'] as const
}

export function getDeliveriesKey() {
  return ['deliveries'] as const
}

export function getMasterKey() {
  return ['master'] as const
}

export function getOtherCostsKey() {
  return ['other_costs'] as const
}

export function getPeriodicSalesKey() {
  return ['periodic_sales'] as const
}

export function getProcurementsKey() {
  return ['procurements'] as const
}

export function getPurchaseOrdersKey() {
  return ['purchase_orders'] as const
}

export function getQuotationsKey() {
  return ['quotations'] as const
}

export function getSalesKey() {
  return ['sales'] as const
}

export function getSalesOrdersKey() {
  return ['sales_orders'] as const
}

export function getSalesSchedulesKey() {
  return ['sales_schedules'] as const
}

export function getBusinessesQueryKey(args: InferRequestType<typeof client.businesses.$get>) {
  return ['businesses', '/businesses', args] as const
}

export function getBusinessesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.businesses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBusinessesQueryKey>
  >({
    queryKey: getBusinessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBusinesses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.businesses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBusinessesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBusinessesMutationKey() {
  return ['businesses', '/businesses', 'POST'] as const
}

export function getPostBusinessesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$post>>>>>,
    TError,
    InferRequestType<typeof client.businesses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.businesses.$post>) {
      return parseResponse(client.businesses.$post(args, options))
    },
  })
}

export function createPostBusinesses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.businesses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBusinessesIdQueryKey(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
) {
  return ['businesses', '/businesses/:id', args] as const
}

export function getBusinessesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesIdQueryKey>
  >({
    queryKey: getBusinessesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businesses[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBusinessesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.businesses)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBusinessesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchBusinessesIdMutationKey() {
  return ['businesses', '/businesses/:id', 'PATCH'] as const
}

export function getPatchBusinessesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.businesses)[':id']['$patch']>) {
      return parseResponse(client.businesses[':id'].$patch(args, options))
    },
  })
}

export function createPatchBusinessesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBusinessesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBusinessesIdCancellationMutationKey() {
  return ['businesses', '/businesses/:id/cancellation', 'POST'] as const
}

export function getPostBusinessesIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.businesses[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostBusinessesIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesIdCancellationMutationOptions<
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

export function getPostBusinessesIdCloseMutationKey() {
  return ['businesses', '/businesses/:id/close', 'POST'] as const
}

export function getPostBusinessesIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':id']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesIdCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.businesses)[':id']['close']['$post']>) {
      return parseResponse(client.businesses[':id'].close.$post(args, options))
    },
  })
}

export function createPostBusinessesIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':id']['close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':id']['close']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesIdCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBusinessesIdReopenMutationKey() {
  return ['businesses', '/businesses/:id/reopen', 'POST'] as const
}

export function getPostBusinessesIdReopenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['reopen']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessesIdReopenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']>) {
      return parseResponse(client.businesses[':id'].reopen.$post(args, options))
    },
  })
}

export function createPostBusinessesIdReopen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businesses)[':id']['reopen']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBusinessesIdReopenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCostBudgetsQueryKey(args: InferRequestType<typeof client.cost_budgets.$get>) {
  return ['cost_budgets', '/cost_budgets', args] as const
}

export function getCostBudgetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cost_budgets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCostBudgetsQueryKey>
  >({
    queryKey: getCostBudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cost_budgets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCostBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cost_budgets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCostBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCostBudgetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCostBudgetsMutationKey() {
  return ['cost_budgets', '/cost_budgets', 'POST'] as const
}

export function getPostCostBudgetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cost_budgets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCostBudgetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cost_budgets.$post>) {
      return parseResponse(client.cost_budgets.$post(args, options))
    },
  })
}

export function createPostCostBudgets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cost_budgets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCostBudgetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCostBudgetsIdQueryKey(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
) {
  return ['cost_budgets', '/cost_budgets/:id', args] as const
}

export function getCostBudgetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCostBudgetsIdQueryKey>
  >({
    queryKey: getCostBudgetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cost_budgets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCostBudgetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCostBudgetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCostBudgetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchCostBudgetsIdMutationKey() {
  return ['cost_budgets', '/cost_budgets/:id', 'PATCH'] as const
}

export function getPatchCostBudgetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cost_budgets)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCostBudgetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cost_budgets)[':id']['$patch']>) {
      return parseResponse(client.cost_budgets[':id'].$patch(args, options))
    },
  })
}

export function createPatchCostBudgetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cost_budgets)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCostBudgetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCostBudgetsIdCancellationMutationKey() {
  return ['cost_budgets', '/cost_budgets/:id/cancellation', 'POST'] as const
}

export function getPostCostBudgetsIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCostBudgetsIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.cost_budgets[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostCostBudgetsIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCostBudgetsIdCancellationMutationOptions<
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

export function getMasterBusinessPhasesQueryKey(
  args: InferRequestType<typeof client.master.business_phases.$get>,
) {
  return ['master', '/master/business_phases', args] as const
}

export function getMasterBusinessPhasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.business_phases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterBusinessPhasesQueryKey>
  >({
    queryKey: getMasterBusinessPhasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.business_phases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterBusinessPhases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.business_phases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterBusinessPhasesQueryKey>
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
      ...getMasterBusinessPhasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterSalesProgressionsQueryKey(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
) {
  return ['master', '/master/sales_progressions', args] as const
}

export function getMasterSalesProgressionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterSalesProgressionsQueryKey>
  >({
    queryKey: getMasterSalesProgressionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.sales_progressions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterSalesProgressions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.sales_progressions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterSalesProgressionsQueryKey>
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
      ...getMasterSalesProgressionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterItemsQueryKey(args: InferRequestType<typeof client.master.items.$get>) {
  return ['master', '/master/items', args] as const
}

export function getMasterItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMasterItemsQueryKey>
  >({
    queryKey: getMasterItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDealLineTypesQueryKey(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
) {
  return ['master', '/master/deal_line_types', args] as const
}

export function getMasterDealLineTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDealLineTypesQueryKey>
  >({
    queryKey: getMasterDealLineTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.deal_line_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDealLineTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.deal_line_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDealLineTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterDealLineTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterEmployeesQueryKey(
  args: InferRequestType<typeof client.master.employees.$get>,
) {
  return ['master', '/master/employees', args] as const
}

export function getMasterEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master.employees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterEmployeesQueryKey>
  >({
    queryKey: getMasterEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterEmployees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.employees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterEmployeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterMembersQueryKey(
  args: InferRequestType<typeof client.master.members.$get>,
) {
  return ['master', '/master/members', args] as const
}

export function getMasterMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterMembersQueryKey>
  >({
    queryKey: getMasterMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterCustomFieldsBusinessDefinitionsQueryKey(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
) {
  return ['master', '/master/custom_fields/business/definitions', args] as const
}

export function getMasterCustomFieldsBusinessDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterCustomFieldsBusinessDefinitionsQueryKey>
  >({
    queryKey: getMasterCustomFieldsBusinessDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.custom_fields.business.definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterCustomFieldsBusinessDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterCustomFieldsBusinessDefinitionsQueryKey>
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
      ...getMasterCustomFieldsBusinessDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPurchaseOrdersQueryKey(
  args: InferRequestType<typeof client.purchase_orders.$get>,
) {
  return ['purchase_orders', '/purchase_orders', args] as const
}

export function getPurchaseOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.purchase_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersQueryKey>
  >({
    queryKey: getPurchaseOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.purchase_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPurchaseOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPurchaseOrdersMutationKey() {
  return ['purchase_orders', '/purchase_orders', 'POST'] as const
}

export function getPostPurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.purchase_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.purchase_orders.$post>) {
      return parseResponse(client.purchase_orders.$post(args, options))
    },
  })
}

export function createPostPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.purchase_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPurchaseOrdersIdQueryKey(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
) {
  return ['purchase_orders', '/purchase_orders/:id', args] as const
}

export function getPurchaseOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersIdQueryKey>
  >({
    queryKey: getPurchaseOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPurchaseOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPurchaseOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchPurchaseOrdersIdMutationKey() {
  return ['purchase_orders', '/purchase_orders/:id', 'PATCH'] as const
}

export function getPatchPurchaseOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.purchase_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPurchaseOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.purchase_orders)[':id']['$patch']>) {
      return parseResponse(client.purchase_orders[':id'].$patch(args, options))
    },
  })
}

export function createPatchPurchaseOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.purchase_orders)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPurchaseOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPurchaseOrdersIdCancellationMutationKey() {
  return ['purchase_orders', '/purchase_orders/:id/cancellation', 'POST'] as const
}

export function getPostPurchaseOrdersIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.purchase_orders[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostPurchaseOrdersIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPurchaseOrdersIdCancellationMutationOptions<
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

export function getQuotationsQueryKey(args: InferRequestType<typeof client.quotations.$get>) {
  return ['quotations', '/quotations', args] as const
}

export function getQuotationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotationsQueryKey>
  >({
    queryKey: getQuotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quotations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostQuotationsMutationKey() {
  return ['quotations', '/quotations', 'POST'] as const
}

export function getPostQuotationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>>,
    TError,
    InferRequestType<typeof client.quotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quotations.$post>) {
      return parseResponse(client.quotations.$post(args, options))
    },
  })
}

export function createPostQuotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.quotations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuotationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQuotationsIdQueryKey(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
) {
  return ['quotations', '/quotations/:id', args] as const
}

export function getQuotationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotationsIdQueryKey>
  >({
    queryKey: getQuotationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuotationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchQuotationsIdMutationKey() {
  return ['quotations', '/quotations/:id', 'PATCH'] as const
}

export function getPatchQuotationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchQuotationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotations)[':id']['$patch']>) {
      return parseResponse(client.quotations[':id'].$patch(args, options))
    },
  })
}

export function createPatchQuotationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchQuotationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutQuotationsIdQuotationStatusMutationKey() {
  return ['quotations', '/quotations/:id/quotation_status', 'PUT'] as const
}

export function getPutQuotationsIdQuotationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['quotation_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotationsIdQuotationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']>,
    ) {
      return parseResponse(client.quotations[':id'].quotation_status.$put(args, options))
    },
  })
}

export function createPutQuotationsIdQuotationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.quotations)[':id']['quotation_status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutQuotationsIdQuotationStatusMutationOptions<
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

export function getPostQuotationsIdCancellationMutationKey() {
  return ['quotations', '/quotations/:id/cancellation', 'POST'] as const
}

export function getPostQuotationsIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotationsIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.quotations[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostQuotationsIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.quotations)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuotationsIdCancellationMutationOptions<
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

export function getSalesOrdersQueryKey(args: InferRequestType<typeof client.sales_orders.$get>) {
  return ['sales_orders', '/sales_orders', args] as const
}

export function getSalesOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sales_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesOrdersQueryKey>
  >({
    queryKey: getSalesOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sales_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalesOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSalesOrdersMutationKey() {
  return ['sales_orders', '/sales_orders', 'POST'] as const
}

export function getPostSalesOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sales_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sales_orders.$post>) {
      return parseResponse(client.sales_orders.$post(args, options))
    },
  })
}

export function createPostSalesOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sales_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSalesOrdersIdQueryKey(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
) {
  return ['sales_orders', '/sales_orders/:id', args] as const
}

export function getSalesOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSalesOrdersIdQueryKey>
  >({
    queryKey: getSalesOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalesOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchSalesOrdersIdMutationKey() {
  return ['sales_orders', '/sales_orders/:id', 'PATCH'] as const
}

export function getPatchSalesOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sales_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSalesOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sales_orders)[':id']['$patch']>) {
      return parseResponse(client.sales_orders[':id'].$patch(args, options))
    },
  })
}

export function createPatchSalesOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sales_orders)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSalesOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSalesOrdersIdCancellationMutationKey() {
  return ['sales_orders', '/sales_orders/:id/cancellation', 'POST'] as const
}

export function getPostSalesOrdersIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales_orders)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesOrdersIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.sales_orders[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostSalesOrdersIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales_orders)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesOrdersIdCancellationMutationOptions<
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

export function getDeliveriesQueryKey(args: InferRequestType<typeof client.deliveries.$get>) {
  return ['deliveries', '/deliveries', args] as const
}

export function getDeliveriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deliveries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeliveriesQueryKey>
  >({
    queryKey: getDeliveriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deliveries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeliveries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deliveries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliveriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDeliveriesMutationKey() {
  return ['deliveries', '/deliveries', 'POST'] as const
}

export function getPostDeliveriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$post>>>>>,
    TError,
    InferRequestType<typeof client.deliveries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeliveriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deliveries.$post>) {
      return parseResponse(client.deliveries.$post(args, options))
    },
  })
}

export function createPostDeliveries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deliveries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeliveriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeliveriesIdQueryKey(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
) {
  return ['deliveries', '/deliveries/:id', args] as const
}

export function getDeliveriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveriesIdQueryKey>
  >({
    queryKey: getDeliveriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deliveries[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeliveriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.deliveries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliveriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchDeliveriesIdMutationKey() {
  return ['deliveries', '/deliveries/:id', 'PATCH'] as const
}

export function getPatchDeliveriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.deliveries)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDeliveriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.deliveries)[':id']['$patch']>) {
      return parseResponse(client.deliveries[':id'].$patch(args, options))
    },
  })
}

export function createPatchDeliveriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.deliveries)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDeliveriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeliveriesIdCancellationMutationKey() {
  return ['deliveries', '/deliveries/:id/cancellation', 'POST'] as const
}

export function getPostDeliveriesIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeliveriesIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.deliveries[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostDeliveriesIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deliveries)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeliveriesIdCancellationMutationOptions<
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

export function getPutDeliveriesIdDeliveryStatusMutationKey() {
  return ['deliveries', '/deliveries/:id/delivery_status', 'PUT'] as const
}

export function getPutDeliveriesIdDeliveryStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['delivery_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveriesIdDeliveryStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']>,
    ) {
      return parseResponse(client.deliveries[':id'].delivery_status.$put(args, options))
    },
  })
}

export function createPutDeliveriesIdDeliveryStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deliveries)[':id']['delivery_status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveriesIdDeliveryStatusMutationOptions<
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

export function getPutDeliveriesIdAcceptanceStatusMutationKey() {
  return ['deliveries', '/deliveries/:id/acceptance_status', 'PUT'] as const
}

export function getPutDeliveriesIdAcceptanceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliveriesIdAcceptanceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>,
    ) {
      return parseResponse(client.deliveries[':id'].acceptance_status.$put(args, options))
    },
  })
}

export function createPutDeliveriesIdAcceptanceStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliveriesIdAcceptanceStatusMutationOptions<
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

export function getSalesQueryKey(args: InferRequestType<typeof client.sales.$get>) {
  return ['sales', '/sales', args] as const
}

export function getSalesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sales.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesQueryKey>
  >({
    queryKey: getSalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSales<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sales.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSalesMutationKey() {
  return ['sales', '/sales', 'POST'] as const
}

export function getPostSalesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$post>>>>>,
    TError,
    InferRequestType<typeof client.sales.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sales.$post>) {
      return parseResponse(client.sales.$post(args, options))
    },
  })
}

export function createPostSales<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$post>>>>>,
        TError,
        InferRequestType<typeof client.sales.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSalesIdQueryKey(args: InferRequestType<(typeof client.sales)[':id']['$get']>) {
  return ['sales', '/sales/:id', args] as const
}

export function getSalesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sales)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalesIdQueryKey>
  >({
    queryKey: getSalesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sales)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchSalesIdMutationKey() {
  return ['sales', '/sales/:id', 'PATCH'] as const
}

export function getPatchSalesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sales)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSalesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sales)[':id']['$patch']>) {
      return parseResponse(client.sales[':id'].$patch(args, options))
    },
  })
}

export function createPatchSalesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sales)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSalesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSalesIdCancellationMutationKey() {
  return ['sales', '/sales/:id/cancellation', 'POST'] as const
}

export function getPostSalesIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.sales[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostSalesIdCancellation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesIdCancellationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSalesIdCollectionStatusMutationKey() {
  return ['sales', '/sales/:id/collection_status', 'PUT'] as const
}

export function getPutSalesIdCollectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':id']['collection_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSalesIdCollectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']>,
    ) {
      return parseResponse(client.sales[':id'].collection_status.$put(args, options))
    },
  })
}

export function createPutSalesIdCollectionStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales)[':id']['collection_status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSalesIdCollectionStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPeriodicSalesQueryKey(
  args: InferRequestType<typeof client.periodic_sales.$get>,
) {
  return ['periodic_sales', '/periodic_sales', args] as const
}

export function getPeriodicSalesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.periodic_sales.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeriodicSalesQueryKey>
  >({
    queryKey: getPeriodicSalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.periodic_sales.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPeriodicSales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.periodic_sales.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPeriodicSalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeriodicSalesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPeriodicSalesMutationKey() {
  return ['periodic_sales', '/periodic_sales', 'POST'] as const
}

export function getPostPeriodicSalesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.periodic_sales.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPeriodicSalesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.periodic_sales.$post>) {
      return parseResponse(client.periodic_sales.$post(args, options))
    },
  })
}

export function createPostPeriodicSales<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.periodic_sales.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPeriodicSalesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPeriodicSalesIdQueryKey(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
) {
  return ['periodic_sales', '/periodic_sales/:id', args] as const
}

export function getPeriodicSalesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeriodicSalesIdQueryKey>
  >({
    queryKey: getPeriodicSalesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.periodic_sales[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPeriodicSalesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeriodicSalesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeriodicSalesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchPeriodicSalesIdMutationKey() {
  return ['periodic_sales', '/periodic_sales/:id', 'PATCH'] as const
}

export function getPatchPeriodicSalesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.periodic_sales)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPeriodicSalesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.periodic_sales)[':id']['$patch']>) {
      return parseResponse(client.periodic_sales[':id'].$patch(args, options))
    },
  })
}

export function createPatchPeriodicSalesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.periodic_sales)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPeriodicSalesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPeriodicSalesIdSalesEntriesQueryKey(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
) {
  return ['periodic_sales', '/periodic_sales/:id/sales_entries', args] as const
}

export function getPeriodicSalesIdSalesEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeriodicSalesIdSalesEntriesQueryKey>
  >({
    queryKey: getPeriodicSalesIdSalesEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.periodic_sales[':id'].sales_entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPeriodicSalesIdSalesEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeriodicSalesIdSalesEntriesQueryKey>
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
      ...getPeriodicSalesIdSalesEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPeriodicSalesIdCancellationMutationKey() {
  return ['periodic_sales', '/periodic_sales/:id/cancellation', 'POST'] as const
}

export function getPostPeriodicSalesIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeriodicSalesIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.periodic_sales[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostPeriodicSalesIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPeriodicSalesIdCancellationMutationOptions<
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

export function getSalesSchedulesQueryKey(
  args: InferRequestType<typeof client.sales_schedules.$get>,
) {
  return ['sales_schedules', '/sales_schedules', args] as const
}

export function getSalesSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sales_schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalesSchedulesQueryKey>
  >({
    queryKey: getSalesSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSalesSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sales_schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalesSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSalesSchedulesIdQueryKey(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
) {
  return ['sales_schedules', '/sales_schedules/:id', args] as const
}

export function getSalesSchedulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSalesSchedulesIdQueryKey>
  >({
    queryKey: getSalesSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_schedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSalesSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalesSchedulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalesSchedulesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSalesSchedulesIdMutationKey() {
  return ['sales_schedules', '/sales_schedules/:id', 'DELETE'] as const
}

export function getDeleteSalesSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sales_schedules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSalesSchedulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sales_schedules)[':id']['$delete']>) {
      return parseResponse(client.sales_schedules[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSalesSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales_schedules)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSalesSchedulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSalesSchedulesIdMutationKey() {
  return ['sales_schedules', '/sales_schedules/:id', 'PATCH'] as const
}

export function getPatchSalesSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sales_schedules)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSalesSchedulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sales_schedules)[':id']['$patch']>) {
      return parseResponse(client.sales_schedules[':id'].$patch(args, options))
    },
  })
}

export function createPatchSalesSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales_schedules)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSalesSchedulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSalesSchedulesIdActualizationMutationKey() {
  return ['sales_schedules', '/sales_schedules/:id/actualization', 'POST'] as const
}

export function getPostSalesSchedulesIdActualizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales_schedules)[':id']['actualization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSalesSchedulesIdActualizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>,
    ) {
      return parseResponse(client.sales_schedules[':id'].actualization.$post(args, options))
    },
  })
}

export function createPostSalesSchedulesIdActualization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sales_schedules)[':id']['actualization']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSalesSchedulesIdActualizationMutationOptions<
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

export function getOtherCostsQueryKey(args: InferRequestType<typeof client.other_costs.$get>) {
  return ['other_costs', '/other_costs', args] as const
}

export function getOtherCostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.other_costs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOtherCostsQueryKey>
  >({
    queryKey: getOtherCostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.other_costs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOtherCosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.other_costs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOtherCostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOtherCostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOtherCostsMutationKey() {
  return ['other_costs', '/other_costs', 'POST'] as const
}

export function getPostOtherCostsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$post>>>>>,
    TError,
    InferRequestType<typeof client.other_costs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOtherCostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.other_costs.$post>) {
      return parseResponse(client.other_costs.$post(args, options))
    },
  })
}

export function createPostOtherCosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.other_costs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtherCostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOtherCostsIdQueryKey(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
) {
  return ['other_costs', '/other_costs/:id', args] as const
}

export function getOtherCostsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOtherCostsIdQueryKey>
  >({
    queryKey: getOtherCostsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.other_costs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOtherCostsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.other_costs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOtherCostsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOtherCostsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchOtherCostsIdMutationKey() {
  return ['other_costs', '/other_costs/:id', 'PATCH'] as const
}

export function getPatchOtherCostsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.other_costs)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOtherCostsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.other_costs)[':id']['$patch']>) {
      return parseResponse(client.other_costs[':id'].$patch(args, options))
    },
  })
}

export function createPatchOtherCostsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.other_costs)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOtherCostsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOtherCostsIdRestorationMutationKey() {
  return ['other_costs', '/other_costs/:id/restoration', 'POST'] as const
}

export function getPostOtherCostsIdRestorationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.other_costs)[':id']['restoration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOtherCostsIdRestorationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']>,
    ) {
      return parseResponse(client.other_costs[':id'].restoration.$post(args, options))
    },
  })
}

export function createPostOtherCostsIdRestoration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.other_costs)[':id']['restoration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtherCostsIdRestorationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOtherCostsIdCancellationMutationKey() {
  return ['other_costs', '/other_costs/:id/cancellation', 'POST'] as const
}

export function getPostOtherCostsIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.other_costs)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOtherCostsIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.other_costs[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostOtherCostsIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.other_costs)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtherCostsIdCancellationMutationOptions<
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

export function getProcurementsQueryKey(args: InferRequestType<typeof client.procurements.$get>) {
  return ['procurements', '/procurements', args] as const
}

export function getProcurementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.procurements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProcurementsQueryKey>
  >({
    queryKey: getProcurementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.procurements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProcurements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.procurements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProcurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProcurementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProcurementsMutationKey() {
  return ['procurements', '/procurements', 'POST'] as const
}

export function getPostProcurementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.procurements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcurementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.procurements.$post>) {
      return parseResponse(client.procurements.$post(args, options))
    },
  })
}

export function createPostProcurements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.procurements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProcurementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProcurementsIdQueryKey(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
) {
  return ['procurements', '/procurements/:id', args] as const
}

export function getProcurementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProcurementsIdQueryKey>
  >({
    queryKey: getProcurementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.procurements[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProcurementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.procurements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProcurementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProcurementsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchProcurementsIdMutationKey() {
  return ['procurements', '/procurements/:id', 'PATCH'] as const
}

export function getPatchProcurementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.procurements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProcurementsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.procurements)[':id']['$patch']>) {
      return parseResponse(client.procurements[':id'].$patch(args, options))
    },
  })
}

export function createPatchProcurementsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.procurements)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProcurementsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProcurementsIdCancellationMutationKey() {
  return ['procurements', '/procurements/:id/cancellation', 'POST'] as const
}

export function getPostProcurementsIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.procurements)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProcurementsIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.procurements[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostProcurementsIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.procurements)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProcurementsIdCancellationMutationOptions<
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

export function getPutProcurementsIdPaymentStatusMutationKey() {
  return ['procurements', '/procurements/:id/payment_status', 'PUT'] as const
}

export function getPutProcurementsIdPaymentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.procurements)[':id']['payment_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProcurementsIdPaymentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']>,
    ) {
      return parseResponse(client.procurements[':id'].payment_status.$put(args, options))
    },
  })
}

export function createPutProcurementsIdPaymentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.procurements)[':id']['payment_status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProcurementsIdPaymentStatusMutationOptions<
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

export function getAdvanceReceiptsQueryKey(
  args: InferRequestType<typeof client.advance_receipts.$get>,
) {
  return ['advance_receipts', '/advance_receipts', args] as const
}

export function getAdvanceReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.advance_receipts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdvanceReceiptsQueryKey>
  >({
    queryKey: getAdvanceReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advance_receipts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdvanceReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.advance_receipts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdvanceReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvanceReceiptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAdvanceReceiptsMutationKey() {
  return ['advance_receipts', '/advance_receipts', 'POST'] as const
}

export function getPostAdvanceReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.advance_receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvanceReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.advance_receipts.$post>) {
      return parseResponse(client.advance_receipts.$post(args, options))
    },
  })
}

export function createPostAdvanceReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.advance_receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvanceReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdvanceReceiptsIdQueryKey(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
) {
  return ['advance_receipts', '/advance_receipts/:id', args] as const
}

export function getAdvanceReceiptsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvanceReceiptsIdQueryKey>
  >({
    queryKey: getAdvanceReceiptsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advance_receipts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdvanceReceiptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvanceReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvanceReceiptsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchAdvanceReceiptsIdMutationKey() {
  return ['advance_receipts', '/advance_receipts/:id', 'PATCH'] as const
}

export function getPatchAdvanceReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.advance_receipts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdvanceReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.advance_receipts)[':id']['$patch']>) {
      return parseResponse(client.advance_receipts[':id'].$patch(args, options))
    },
  })
}

export function createPatchAdvanceReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.advance_receipts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdvanceReceiptsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdvanceReceiptsIdCancellationMutationKey() {
  return ['advance_receipts', '/advance_receipts/:id/cancellation', 'POST'] as const
}

export function getPostAdvanceReceiptsIdCancellationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvanceReceiptsIdCancellationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>,
    ) {
      return parseResponse(client.advance_receipts[':id'].cancellation.$post(args, options))
    },
  })
}

export function createPostAdvanceReceiptsIdCancellation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvanceReceiptsIdCancellationMutationOptions<
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

export function getPostAdvanceReceiptsIdReductionMutationKey() {
  return ['advance_receipts', '/advance_receipts/:id/reduction', 'POST'] as const
}

export function getPostAdvanceReceiptsIdReductionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['reduction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvanceReceiptsIdReductionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']>,
    ) {
      return parseResponse(client.advance_receipts[':id'].reduction.$post(args, options))
    },
  })
}

export function createPostAdvanceReceiptsIdReduction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advance_receipts)[':id']['reduction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvanceReceiptsIdReductionMutationOptions<
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

export function getPostAdvanceReceiptsIdPeriodicReductionMutationKey() {
  return ['advance_receipts', '/advance_receipts/:id/periodic_reduction', 'POST'] as const
}

export function getPostAdvanceReceiptsIdPeriodicReductionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvanceReceiptsIdPeriodicReductionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.advance_receipts)[':id']['periodic_reduction']['$post']
      >,
    ) {
      return parseResponse(client.advance_receipts[':id'].periodic_reduction.$post(args, options))
    },
  })
}

export function createPostAdvanceReceiptsIdPeriodicReduction<
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
                ReturnType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvanceReceiptsIdPeriodicReductionMutationOptions<
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

export function getPutAdvanceReceiptsIdCollectionStatusMutationKey() {
  return ['advance_receipts', '/advance_receipts/:id/collection_status', 'PUT'] as const
}

export function getPutAdvanceReceiptsIdCollectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdvanceReceiptsIdCollectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>,
    ) {
      return parseResponse(client.advance_receipts[':id'].collection_status.$put(args, options))
    },
  })
}

export function createPutAdvanceReceiptsIdCollectionStatus<
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
                ReturnType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdvanceReceiptsIdCollectionStatusMutationOptions<
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
