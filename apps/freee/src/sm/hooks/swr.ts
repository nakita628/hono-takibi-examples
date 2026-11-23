import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetBusinessesKey(args: InferRequestType<typeof client.businesses.$get>) {
  return ['businesses', '/businesses', args] as const
}

export function useGetBusinesses<TError = unknown>(
  args: InferRequestType<typeof client.businesses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinesses<TError = unknown>(
  args: InferRequestType<typeof client.businesses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessesKey() {
  return ['businesses', '/businesses', 'POST'] as const
}

export function usePostBusinesses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.businesses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.businesses.$post> }) =>
        parseResponse(client.businesses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessesIdKey(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
) {
  return ['businesses', '/businesses/:id', args] as const
}

export function useGetBusinessesId<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBusinessesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessesId<TError = unknown>(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBusinessesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businesses[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchBusinessesIdKey() {
  return ['businesses', '/businesses/:id', 'PATCH'] as const
}

export function usePatchBusinessesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businesses)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.businesses)[':id']['$patch']> },
      ) => parseResponse(client.businesses[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesIdCancellationKey() {
  return ['businesses', '/businesses/:id/cancellation', 'POST'] as const
}

export function usePostBusinessesIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.businesses[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesIdCloseKey() {
  return ['businesses', '/businesses/:id/close', 'POST'] as const
}

export function usePostBusinessesIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':id']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.businesses)[':id']['close']['$post']> },
      ) => parseResponse(client.businesses[':id'].close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessesIdReopenKey() {
  return ['businesses', '/businesses/:id/reopen', 'POST'] as const
}

export function usePostBusinessesIdReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.businesses)[':id']['reopen']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessesIdReopenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']> },
      ) => parseResponse(client.businesses[':id'].reopen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCostBudgetsKey(args: InferRequestType<typeof client.cost_budgets.$get>) {
  return ['cost_budgets', '/cost_budgets', args] as const
}

export function useGetCostBudgets<TError = unknown>(
  args: InferRequestType<typeof client.cost_budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCostBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cost_budgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCostBudgets<TError = unknown>(
  args: InferRequestType<typeof client.cost_budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCostBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cost_budgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCostBudgetsKey() {
  return ['cost_budgets', '/cost_budgets', 'POST'] as const
}

export function usePostCostBudgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cost_budgets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cost_budgets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCostBudgetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cost_budgets.$post> }) =>
        parseResponse(client.cost_budgets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCostBudgetsIdKey(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
) {
  return ['cost_budgets', '/cost_budgets/:id', args] as const
}

export function useGetCostBudgetsId<TError = unknown>(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCostBudgetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cost_budgets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCostBudgetsId<TError = unknown>(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCostBudgetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cost_budgets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCostBudgetsIdKey() {
  return ['cost_budgets', '/cost_budgets/:id', 'PATCH'] as const
}

export function usePatchCostBudgetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cost_budgets)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cost_budgets)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCostBudgetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cost_budgets)[':id']['$patch']> },
      ) => parseResponse(client.cost_budgets[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCostBudgetsIdCancellationKey() {
  return ['cost_budgets', '/cost_budgets/:id/cancellation', 'POST'] as const
}

export function usePostCostBudgetsIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCostBudgetsIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.cost_budgets[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMasterBusinessPhasesKey(
  args: InferRequestType<typeof client.master.business_phases.$get>,
) {
  return ['master', '/master/business_phases', args] as const
}

export function useGetMasterBusinessPhases<TError = unknown>(
  args: InferRequestType<typeof client.master.business_phases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
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
        ? getGetMasterBusinessPhasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.business_phases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterBusinessPhases<TError = unknown>(
  args: InferRequestType<typeof client.master.business_phases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
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
        ? getGetMasterBusinessPhasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.business_phases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.business_phases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterSalesProgressionsKey(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
) {
  return ['master', '/master/sales_progressions', args] as const
}

export function useGetMasterSalesProgressions<TError = unknown>(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
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
        ? getGetMasterSalesProgressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.sales_progressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterSalesProgressions<TError = unknown>(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
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
        ? getGetMasterSalesProgressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.sales_progressions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.sales_progressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterItemsKey(args: InferRequestType<typeof client.master.items.$get>) {
  return ['master', '/master/items', args] as const
}

export function useGetMasterItems<TError = unknown>(
  args: InferRequestType<typeof client.master.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterItems<TError = unknown>(
  args: InferRequestType<typeof client.master.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDealLineTypesKey(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
) {
  return ['master', '/master/deal_line_types', args] as const
}

export function useGetMasterDealLineTypes<TError = unknown>(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
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
        ? getGetMasterDealLineTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.deal_line_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDealLineTypes<TError = unknown>(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
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
        ? getGetMasterDealLineTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.master.deal_line_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.deal_line_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterEmployeesKey(
  args: InferRequestType<typeof client.master.employees.$get>,
) {
  return ['master', '/master/employees', args] as const
}

export function useGetMasterEmployees<TError = unknown>(
  args: InferRequestType<typeof client.master.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
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
        ? getGetMasterEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterEmployees<TError = unknown>(
  args: InferRequestType<typeof client.master.employees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
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
        ? getGetMasterEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.employees.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterMembersKey(args: InferRequestType<typeof client.master.members.$get>) {
  return ['master', '/master/members', args] as const
}

export function useGetMasterMembers<TError = unknown>(
  args: InferRequestType<typeof client.master.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterMembers<TError = unknown>(
  args: InferRequestType<typeof client.master.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMasterMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.master.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterCustomFieldsBusinessDefinitionsKey(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
) {
  return ['master', '/master/custom_fields/business/definitions', args] as const
}

export function useGetMasterCustomFieldsBusinessDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
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
        ? getGetMasterCustomFieldsBusinessDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.master.custom_fields.business.definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterCustomFieldsBusinessDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
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
        ? getGetMasterCustomFieldsBusinessDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.master.custom_fields.business.definitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.master.custom_fields.business.definitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersKey(
  args: InferRequestType<typeof client.purchase_orders.$get>,
) {
  return ['purchase_orders', '/purchase_orders', args] as const
}

export function useGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPurchaseOrdersKey() {
  return ['purchase_orders', '/purchase_orders', 'POST'] as const
}

export function usePostPurchaseOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.purchase_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.purchase_orders.$post> }) =>
        parseResponse(client.purchase_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersIdKey(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
) {
  return ['purchase_orders', '/purchase_orders/:id', args] as const
}

export function useGetPurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
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
        ? getGetPurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
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
        ? getGetPurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPurchaseOrdersIdKey() {
  return ['purchase_orders', '/purchase_orders/:id', 'PATCH'] as const
}

export function usePatchPurchaseOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.purchase_orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPurchaseOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.purchase_orders)[':id']['$patch']> },
      ) => parseResponse(client.purchase_orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPurchaseOrdersIdCancellationKey() {
  return ['purchase_orders', '/purchase_orders/:id/cancellation', 'POST'] as const
}

export function usePostPurchaseOrdersIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>
        },
      ) => parseResponse(client.purchase_orders[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotationsKey(args: InferRequestType<typeof client.quotations.$get>) {
  return ['quotations', '/quotations', args] as const
}

export function useGetQuotations<TError = unknown>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotations<TError = unknown>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotationsKey() {
  return ['quotations', '/quotations', 'POST'] as const
}

export function usePostQuotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quotations.$post> }) =>
        parseResponse(client.quotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotationsIdKey(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
) {
  return ['quotations', '/quotations/:id', args] as const
}

export function useGetQuotationsId<TError = unknown>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotationsId<TError = unknown>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchQuotationsIdKey() {
  return ['quotations', '/quotations/:id', 'PATCH'] as const
}

export function usePatchQuotationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchQuotationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotations)[':id']['$patch']> },
      ) => parseResponse(client.quotations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQuotationsIdQuotationStatusKey() {
  return ['quotations', '/quotations/:id/quotation_status', 'PUT'] as const
}

export function usePutQuotationsIdQuotationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['quotation_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotationsIdQuotationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']> },
      ) => parseResponse(client.quotations[':id'].quotation_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuotationsIdCancellationKey() {
  return ['quotations', '/quotations/:id/cancellation', 'POST'] as const
}

export function usePostQuotationsIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotationsIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.quotations[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesOrdersKey(args: InferRequestType<typeof client.sales_orders.$get>) {
  return ['sales_orders', '/sales_orders', args] as const
}

export function useGetSalesOrders<TError = unknown>(
  args: InferRequestType<typeof client.sales_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesOrders<TError = unknown>(
  args: InferRequestType<typeof client.sales_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSalesOrdersKey() {
  return ['sales_orders', '/sales_orders', 'POST'] as const
}

export function usePostSalesOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sales_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sales_orders.$post> }) =>
        parseResponse(client.sales_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesOrdersIdKey(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
) {
  return ['sales_orders', '/sales_orders/:id', args] as const
}

export function useGetSalesOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSalesOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSalesOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSalesOrdersIdKey() {
  return ['sales_orders', '/sales_orders/:id', 'PATCH'] as const
}

export function usePatchSalesOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_orders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales_orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSalesOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sales_orders)[':id']['$patch']> },
      ) => parseResponse(client.sales_orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSalesOrdersIdCancellationKey() {
  return ['sales_orders', '/sales_orders/:id/cancellation', 'POST'] as const
}

export function usePostSalesOrdersIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales_orders)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesOrdersIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.sales_orders[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliveriesKey(args: InferRequestType<typeof client.deliveries.$get>) {
  return ['deliveries', '/deliveries', args] as const
}

export function useGetDeliveries<TError = unknown>(
  args: InferRequestType<typeof client.deliveries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveries<TError = unknown>(
  args: InferRequestType<typeof client.deliveries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeliveriesKey() {
  return ['deliveries', '/deliveries', 'POST'] as const
}

export function usePostDeliveries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deliveries.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deliveries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeliveriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deliveries.$post> }) =>
        parseResponse(client.deliveries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliveriesIdKey(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
) {
  return ['deliveries', '/deliveries/:id', args] as const
}

export function useGetDeliveriesId<TError = unknown>(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeliveriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deliveries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveriesId<TError = unknown>(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeliveriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deliveries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchDeliveriesIdKey() {
  return ['deliveries', '/deliveries/:id', 'PATCH'] as const
}

export function usePatchDeliveriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.deliveries)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deliveries)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDeliveriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.deliveries)[':id']['$patch']> },
      ) => parseResponse(client.deliveries[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeliveriesIdCancellationKey() {
  return ['deliveries', '/deliveries/:id/cancellation', 'POST'] as const
}

export function usePostDeliveriesIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeliveriesIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.deliveries[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeliveriesIdDeliveryStatusKey() {
  return ['deliveries', '/deliveries/:id/delivery_status', 'PUT'] as const
}

export function usePutDeliveriesIdDeliveryStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['delivery_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveriesIdDeliveryStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']> },
      ) => parseResponse(client.deliveries[':id'].delivery_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeliveriesIdAcceptanceStatusKey() {
  return ['deliveries', '/deliveries/:id/acceptance_status', 'PUT'] as const
}

export function usePutDeliveriesIdAcceptanceStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveriesIdAcceptanceStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>
        },
      ) => parseResponse(client.deliveries[':id'].acceptance_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesKey(args: InferRequestType<typeof client.sales.$get>) {
  return ['sales', '/sales', args] as const
}

export function useGetSales<TError = unknown>(
  args: InferRequestType<typeof client.sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sales.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSales<TError = unknown>(
  args: InferRequestType<typeof client.sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sales.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSalesKey() {
  return ['sales', '/sales', 'POST'] as const
}

export function usePostSales<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sales.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sales.$post> }) =>
        parseResponse(client.sales.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesIdKey(args: InferRequestType<(typeof client.sales)[':id']['$get']>) {
  return ['sales', '/sales/:id', args] as const
}

export function useGetSalesId<TError = unknown>(
  args: InferRequestType<(typeof client.sales)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesId<TError = unknown>(
  args: InferRequestType<(typeof client.sales)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSalesIdKey() {
  return ['sales', '/sales/:id', 'PATCH'] as const
}

export function usePatchSalesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sales)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSalesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.sales)[':id']['$patch']> }) =>
        parseResponse(client.sales[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSalesIdCancellationKey() {
  return ['sales', '/sales/:id/cancellation', 'POST'] as const
}

export function usePostSalesIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.sales[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSalesIdCollectionStatusKey() {
  return ['sales', '/sales/:id/collection_status', 'PUT'] as const
}

export function usePutSalesIdCollectionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales)[':id']['collection_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSalesIdCollectionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']> },
      ) => parseResponse(client.sales[':id'].collection_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeriodicSalesKey(args: InferRequestType<typeof client.periodic_sales.$get>) {
  return ['periodic_sales', '/periodic_sales', args] as const
}

export function useGetPeriodicSales<TError = unknown>(
  args: InferRequestType<typeof client.periodic_sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeriodicSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.periodic_sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeriodicSales<TError = unknown>(
  args: InferRequestType<typeof client.periodic_sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeriodicSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.periodic_sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPeriodicSalesKey() {
  return ['periodic_sales', '/periodic_sales', 'POST'] as const
}

export function usePostPeriodicSales<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.periodic_sales.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.periodic_sales.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPeriodicSalesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.periodic_sales.$post> }) =>
        parseResponse(client.periodic_sales.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeriodicSalesIdKey(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
) {
  return ['periodic_sales', '/periodic_sales/:id', args] as const
}

export function useGetPeriodicSalesId<TError = unknown>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
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
        ? getGetPeriodicSalesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.periodic_sales[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeriodicSalesId<TError = unknown>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
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
        ? getGetPeriodicSalesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.periodic_sales[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPeriodicSalesIdKey() {
  return ['periodic_sales', '/periodic_sales/:id', 'PATCH'] as const
}

export function usePatchPeriodicSalesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.periodic_sales)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.periodic_sales)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPeriodicSalesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.periodic_sales)[':id']['$patch']> },
      ) => parseResponse(client.periodic_sales[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeriodicSalesIdSalesEntriesKey(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
) {
  return ['periodic_sales', '/periodic_sales/:id/sales_entries', args] as const
}

export function useGetPeriodicSalesIdSalesEntries<TError = unknown>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
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
        ? getGetPeriodicSalesIdSalesEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.periodic_sales[':id'].sales_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeriodicSalesIdSalesEntries<TError = unknown>(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
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
        ? getGetPeriodicSalesIdSalesEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.periodic_sales[':id'].sales_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPeriodicSalesIdCancellationKey() {
  return ['periodic_sales', '/periodic_sales/:id/cancellation', 'POST'] as const
}

export function usePostPeriodicSalesIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPeriodicSalesIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>
        },
      ) => parseResponse(client.periodic_sales[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesSchedulesKey(
  args: InferRequestType<typeof client.sales_schedules.$get>,
) {
  return ['sales_schedules', '/sales_schedules', args] as const
}

export function useGetSalesSchedules<TError = unknown>(
  args: InferRequestType<typeof client.sales_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesSchedules<TError = unknown>(
  args: InferRequestType<typeof client.sales_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSalesSchedulesIdKey(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
) {
  return ['sales_schedules', '/sales_schedules/:id', args] as const
}

export function useGetSalesSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
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
        ? getGetSalesSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
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
        ? getGetSalesSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_schedules[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSalesSchedulesIdKey() {
  return ['sales_schedules', '/sales_schedules/:id', 'DELETE'] as const
}

export function useDeleteSalesSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales_schedules)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSalesSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sales_schedules)[':id']['$delete']> },
      ) => parseResponse(client.sales_schedules[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSalesSchedulesIdKey() {
  return ['sales_schedules', '/sales_schedules/:id', 'PATCH'] as const
}

export function usePatchSalesSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sales_schedules)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales_schedules)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSalesSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sales_schedules)[':id']['$patch']> },
      ) => parseResponse(client.sales_schedules[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSalesSchedulesIdActualizationKey() {
  return ['sales_schedules', '/sales_schedules/:id/actualization', 'POST'] as const
}

export function usePostSalesSchedulesIdActualization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales_schedules)[':id']['actualization']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSalesSchedulesIdActualizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>
        },
      ) => parseResponse(client.sales_schedules[':id'].actualization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOtherCostsKey(args: InferRequestType<typeof client.other_costs.$get>) {
  return ['other_costs', '/other_costs', args] as const
}

export function useGetOtherCosts<TError = unknown>(
  args: InferRequestType<typeof client.other_costs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtherCostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.other_costs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtherCosts<TError = unknown>(
  args: InferRequestType<typeof client.other_costs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtherCostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.other_costs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOtherCostsKey() {
  return ['other_costs', '/other_costs', 'POST'] as const
}

export function usePostOtherCosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.other_costs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.other_costs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtherCostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.other_costs.$post> }) =>
        parseResponse(client.other_costs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOtherCostsIdKey(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
) {
  return ['other_costs', '/other_costs/:id', args] as const
}

export function useGetOtherCostsId<TError = unknown>(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOtherCostsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.other_costs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtherCostsId<TError = unknown>(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOtherCostsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.other_costs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOtherCostsIdKey() {
  return ['other_costs', '/other_costs/:id', 'PATCH'] as const
}

export function usePatchOtherCostsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.other_costs)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.other_costs)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOtherCostsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.other_costs)[':id']['$patch']> },
      ) => parseResponse(client.other_costs[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOtherCostsIdRestorationKey() {
  return ['other_costs', '/other_costs/:id/restoration', 'POST'] as const
}

export function usePostOtherCostsIdRestoration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.other_costs)[':id']['restoration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtherCostsIdRestorationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']> },
      ) => parseResponse(client.other_costs[':id'].restoration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOtherCostsIdCancellationKey() {
  return ['other_costs', '/other_costs/:id/cancellation', 'POST'] as const
}

export function usePostOtherCostsIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.other_costs)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtherCostsIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.other_costs[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProcurementsKey(args: InferRequestType<typeof client.procurements.$get>) {
  return ['procurements', '/procurements', args] as const
}

export function useGetProcurements<TError = unknown>(
  args: InferRequestType<typeof client.procurements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProcurementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.procurements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProcurements<TError = unknown>(
  args: InferRequestType<typeof client.procurements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProcurementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.procurements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProcurementsKey() {
  return ['procurements', '/procurements', 'POST'] as const
}

export function usePostProcurements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.procurements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.procurements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcurementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.procurements.$post> }) =>
        parseResponse(client.procurements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProcurementsIdKey(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
) {
  return ['procurements', '/procurements/:id', args] as const
}

export function useGetProcurementsId<TError = unknown>(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProcurementsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.procurements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProcurementsId<TError = unknown>(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProcurementsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.procurements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchProcurementsIdKey() {
  return ['procurements', '/procurements/:id', 'PATCH'] as const
}

export function usePatchProcurementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.procurements)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.procurements)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProcurementsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.procurements)[':id']['$patch']> },
      ) => parseResponse(client.procurements[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcurementsIdCancellationKey() {
  return ['procurements', '/procurements/:id/cancellation', 'POST'] as const
}

export function usePostProcurementsIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.procurements)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcurementsIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']> },
      ) => parseResponse(client.procurements[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProcurementsIdPaymentStatusKey() {
  return ['procurements', '/procurements/:id/payment_status', 'PUT'] as const
}

export function usePutProcurementsIdPaymentStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.procurements)[':id']['payment_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProcurementsIdPaymentStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']> },
      ) => parseResponse(client.procurements[':id'].payment_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdvanceReceiptsKey(
  args: InferRequestType<typeof client.advance_receipts.$get>,
) {
  return ['advance_receipts', '/advance_receipts', args] as const
}

export function useGetAdvanceReceipts<TError = unknown>(
  args: InferRequestType<typeof client.advance_receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
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
        ? getGetAdvanceReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advance_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdvanceReceipts<TError = unknown>(
  args: InferRequestType<typeof client.advance_receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
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
        ? getGetAdvanceReceiptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advance_receipts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdvanceReceiptsKey() {
  return ['advance_receipts', '/advance_receipts', 'POST'] as const
}

export function usePostAdvanceReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advance_receipts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.advance_receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvanceReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.advance_receipts.$post> }) =>
        parseResponse(client.advance_receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdvanceReceiptsIdKey(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
) {
  return ['advance_receipts', '/advance_receipts/:id', args] as const
}

export function useGetAdvanceReceiptsId<TError = unknown>(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
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
        ? getGetAdvanceReceiptsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advance_receipts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdvanceReceiptsId<TError = unknown>(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
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
        ? getGetAdvanceReceiptsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advance_receipts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAdvanceReceiptsIdKey() {
  return ['advance_receipts', '/advance_receipts/:id', 'PATCH'] as const
}

export function usePatchAdvanceReceiptsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advance_receipts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.advance_receipts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdvanceReceiptsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.advance_receipts)[':id']['$patch']> },
      ) => parseResponse(client.advance_receipts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdvanceReceiptsIdCancellationKey() {
  return ['advance_receipts', '/advance_receipts/:id/cancellation', 'POST'] as const
}

export function usePostAdvanceReceiptsIdCancellation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvanceReceiptsIdCancellationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>
        },
      ) => parseResponse(client.advance_receipts[':id'].cancellation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdvanceReceiptsIdReductionKey() {
  return ['advance_receipts', '/advance_receipts/:id/reduction', 'POST'] as const
}

export function usePostAdvanceReceiptsIdReduction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['reduction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvanceReceiptsIdReductionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']> },
      ) => parseResponse(client.advance_receipts[':id'].reduction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdvanceReceiptsIdPeriodicReductionKey() {
  return ['advance_receipts', '/advance_receipts/:id/periodic_reduction', 'POST'] as const
}

export function usePostAdvanceReceiptsIdPeriodicReduction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdvanceReceiptsIdPeriodicReductionKey()
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
            (typeof client.advance_receipts)[':id']['periodic_reduction']['$post']
          >
        },
      ) =>
        parseResponse(client.advance_receipts[':id'].periodic_reduction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdvanceReceiptsIdCollectionStatusKey() {
  return ['advance_receipts', '/advance_receipts/:id/collection_status', 'PUT'] as const
}

export function usePutAdvanceReceiptsIdCollectionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdvanceReceiptsIdCollectionStatusKey()
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
            (typeof client.advance_receipts)[':id']['collection_status']['$put']
          >
        },
      ) => parseResponse(client.advance_receipts[':id'].collection_status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
