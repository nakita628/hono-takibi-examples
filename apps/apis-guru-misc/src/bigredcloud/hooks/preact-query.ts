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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AccountsQueryKey() {
  return ['v1', '/v1/accounts'] as const
}

export function getV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >({
    queryKey: getV1AccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AnalysisCategoriesQueryKey() {
  return ['v1', '/v1/analysisCategories'] as const
}

export function getV1AnalysisCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AnalysisCategoriesQueryKey>
  >({
    queryKey: getV1AnalysisCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analysisCategories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AnalysisCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AnalysisCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AnalysisCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AnalysisCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.analysisCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AnalysisCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AnalysisCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BankAccountsQueryKey() {
  return ['v1', '/v1/bankAccounts'] as const
}

export function getV1BankAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BankAccountsQueryKey>
  >({
    queryKey: getV1BankAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bankAccounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BankAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BankAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BankAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BankAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BankAccountsMutationKey() {
  return ['v1', '/v1/bankAccounts', 'POST'] as const
}

export function getPostV1BankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.bankAccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BankAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bankAccounts.$post>) {
      return parseResponse(client.v1.bankAccounts.$post(args, options))
    },
  })
}

export function usePostV1BankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.bankAccounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BankAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1BankAccountsBatchMutationKey() {
  return ['v1', '/v1/bankAccounts/batch', 'PUT'] as const
}

export function getPutV1BankAccountsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.bankAccounts.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BankAccountsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bankAccounts.batch.$put>) {
      return parseResponse(client.v1.bankAccounts.batch.$put(args, options))
    },
  })
}

export function usePutV1BankAccountsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.bankAccounts.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.bankAccounts.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BankAccountsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1BankAccountsIdQueryKey(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$get']>,
) {
  return ['v1', '/v1/bankAccounts/:id', args] as const
}

export function getV1BankAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BankAccountsIdQueryKey>
  >({
    queryKey: getV1BankAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bankAccounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BankAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BankAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BankAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BankAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BankAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BankAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1BankAccountsIdMutationKey() {
  return ['v1', '/v1/bankAccounts/:id', 'PUT'] as const
}

export function getPutV1BankAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bankAccounts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BankAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$put']>) {
      return parseResponse(client.v1.bankAccounts[':id'].$put(args, options))
    },
  })
}

export function usePutV1BankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bankAccounts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BankAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1BankAccountsIdMutationKey() {
  return ['v1', '/v1/bankAccounts/:id', 'DELETE'] as const
}

export function getDeleteV1BankAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bankAccounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BankAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$delete']>) {
      return parseResponse(client.v1.bankAccounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bankAccounts)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bankAccounts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BankAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BookTranTypesQueryKey() {
  return ['v1', '/v1/bookTranTypes'] as const
}

export function getV1BookTranTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BookTranTypesQueryKey>
  >({
    queryKey: getV1BookTranTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bookTranTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BookTranTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BookTranTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BookTranTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BookTranTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bookTranTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BookTranTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BookTranTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CashPaymentsQueryKey() {
  return ['v1', '/v1/cashPayments'] as const
}

export function getV1CashPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashPaymentsQueryKey>
  >({
    queryKey: getV1CashPaymentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cashPayments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CashPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CashPaymentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CashPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CashPaymentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1CashPaymentsMutationKey() {
  return ['v1', '/v1/cashPayments', 'POST'] as const
}

export function getPostV1CashPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.cashPayments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CashPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cashPayments.$post>) {
      return parseResponse(client.v1.cashPayments.$post(args, options))
    },
  })
}

export function usePostV1CashPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.cashPayments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CashPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1CashPaymentsBatchMutationKey() {
  return ['v1', '/v1/cashPayments/batch', 'PUT'] as const
}

export function getPutV1CashPaymentsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.cashPayments.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CashPaymentsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cashPayments.batch.$put>) {
      return parseResponse(client.v1.cashPayments.batch.$put(args, options))
    },
  })
}

export function usePutV1CashPaymentsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashPayments.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.cashPayments.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CashPaymentsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1CashPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$get']>,
) {
  return ['v1', '/v1/cashPayments/:id', args] as const
}

export function getV1CashPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashPaymentsIdQueryKey>
  >({
    queryKey: getV1CashPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cashPayments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CashPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CashPaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CashPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CashPaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1CashPaymentsIdMutationKey() {
  return ['v1', '/v1/cashPayments/:id', 'PUT'] as const
}

export function getPutV1CashPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cashPayments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CashPaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$put']>) {
      return parseResponse(client.v1.cashPayments[':id'].$put(args, options))
    },
  })
}

export function usePutV1CashPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cashPayments)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CashPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1CashPaymentsIdMutationKey() {
  return ['v1', '/v1/cashPayments/:id', 'DELETE'] as const
}

export function getDeleteV1CashPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cashPayments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CashPaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$delete']>) {
      return parseResponse(client.v1.cashPayments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CashPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashPayments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cashPayments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CashPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1CashReceiptsQueryKey() {
  return ['v1', '/v1/cashReceipts'] as const
}

export function getV1CashReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashReceiptsQueryKey>
  >({
    queryKey: getV1CashReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cashReceipts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CashReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CashReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CashReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CashReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1CashReceiptsMutationKey() {
  return ['v1', '/v1/cashReceipts', 'POST'] as const
}

export function getPostV1CashReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.cashReceipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CashReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cashReceipts.$post>) {
      return parseResponse(client.v1.cashReceipts.$post(args, options))
    },
  })
}

export function usePostV1CashReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.cashReceipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CashReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1CashReceiptsBatchMutationKey() {
  return ['v1', '/v1/cashReceipts/batch', 'PUT'] as const
}

export function getPutV1CashReceiptsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.cashReceipts.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CashReceiptsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cashReceipts.batch.$put>) {
      return parseResponse(client.v1.cashReceipts.batch.$put(args, options))
    },
  })
}

export function usePutV1CashReceiptsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.cashReceipts.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.cashReceipts.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CashReceiptsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1CashReceiptsIdQueryKey(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$get']>,
) {
  return ['v1', '/v1/cashReceipts/:id', args] as const
}

export function getV1CashReceiptsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashReceiptsIdQueryKey>
  >({
    queryKey: getV1CashReceiptsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cashReceipts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CashReceiptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CashReceiptsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CashReceiptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CashReceiptsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1CashReceiptsIdMutationKey() {
  return ['v1', '/v1/cashReceipts/:id', 'PUT'] as const
}

export function getPutV1CashReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cashReceipts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CashReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$put']>) {
      return parseResponse(client.v1.cashReceipts[':id'].$put(args, options))
    },
  })
}

export function usePutV1CashReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cashReceipts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CashReceiptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1CashReceiptsIdMutationKey() {
  return ['v1', '/v1/cashReceipts/:id', 'DELETE'] as const
}

export function getDeleteV1CashReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cashReceipts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CashReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$delete']>) {
      return parseResponse(client.v1.cashReceipts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CashReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cashReceipts)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cashReceipts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CashReceiptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1CategoryTypesQueryKey() {
  return ['v1', '/v1/categoryTypes'] as const
}

export function getV1CategoryTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoryTypesQueryKey>
  >({
    queryKey: getV1CategoryTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.categoryTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CategoryTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoryTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CategoryTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CategoryTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categoryTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CategoryTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CategoryTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CompanySettingsQueryKey() {
  return ['v1', '/v1/companySettings'] as const
}

export function getV1CompanySettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanySettingsQueryKey>
  >({
    queryKey: getV1CompanySettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.companySettings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CompanySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CompanySettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CompanySettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySettings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CompanySettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CompanySetupConfigQueryKey() {
  return ['v1', '/v1/companySetupConfig'] as const
}

export function getV1CompanySetupConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanySetupConfigQueryKey>
  >({
    queryKey: getV1CompanySetupConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.companySetupConfig.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CompanySetupConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CompanySetupConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CompanySetupConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.companySetupConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CompanySetupConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CompanySetupConfigGetCompanyOptionsQueryKey() {
  return ['v1', '/v1/companySetupConfig/getCompanyOptions'] as const
}

export function getV1CompanySetupConfigGetCompanyOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanySetupConfigGetCompanyOptionsQueryKey>
  >({
    queryKey: getV1CompanySetupConfigGetCompanyOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.companySetupConfig.getCompanyOptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CompanySetupConfigGetCompanyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigGetCompanyOptionsQueryKey>
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
      ...getV1CompanySetupConfigGetCompanyOptionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CompanySetupConfigGetCompanyOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.companySetupConfig.getCompanyOptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigGetCompanyOptionsQueryKey>
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
      ...getV1CompanySetupConfigGetCompanyOptionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CompanySetupConfigGetFinancialYearQueryKey() {
  return ['v1', '/v1/companySetupConfig/getFinancialYear'] as const
}

export function getV1CompanySetupConfigGetFinancialYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CompanySetupConfigGetFinancialYearQueryKey>
  >({
    queryKey: getV1CompanySetupConfigGetFinancialYearQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.companySetupConfig.getFinancialYear.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CompanySetupConfigGetFinancialYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigGetFinancialYearQueryKey>
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
      ...getV1CompanySetupConfigGetFinancialYearQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CompanySetupConfigGetFinancialYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.companySetupConfig.getFinancialYear.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CompanySetupConfigGetFinancialYearQueryKey>
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
      ...getV1CompanySetupConfigGetFinancialYearQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CustomersQueryKey() {
  return ['v1', '/v1/customers'] as const
}

export function getV1CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CustomersQueryKey>
  >({
    queryKey: getV1CustomersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CustomersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CustomersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1CustomersMutationKey() {
  return ['v1', '/v1/customers', 'POST'] as const
}

export function getPostV1CustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.customers.$post>) {
      return parseResponse(client.v1.customers.$post(args, options))
    },
  })
}

export function usePostV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1CustomersBatchMutationKey() {
  return ['v1', '/v1/customers/batch', 'PUT'] as const
}

export function getPutV1CustomersBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.customers.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.customers.batch.$put>) {
      return parseResponse(client.v1.customers.batch.$put(args, options))
    },
  })
}

export function usePutV1CustomersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.customers.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CustomersBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1CustomersIdQueryKey(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$get']>,
) {
  return ['v1', '/v1/customers/:id', args] as const
}

export function getV1CustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersIdQueryKey>
  >({
    queryKey: getV1CustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CustomersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CustomersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1CustomersIdMutationKey() {
  return ['v1', '/v1/customers/:id', 'PUT'] as const
}

export function getPutV1CustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.customers)[':id']['$put']>) {
      return parseResponse(client.v1.customers[':id'].$put(args, options))
    },
  })
}

export function usePutV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1CustomersIdMutationKey() {
  return ['v1', '/v1/customers/:id', 'DELETE'] as const
}

export function getDeleteV1CustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.customers)[':id']['$delete']>) {
      return parseResponse(client.v1.customers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1CustomersItemIdAccountTransQueryKey(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>,
) {
  return ['v1', '/v1/customers/:itemId/accountTrans', args] as const
}

export function getV1CustomersItemIdAccountTransQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersItemIdAccountTransQueryKey>
  >({
    queryKey: getV1CustomersItemIdAccountTransQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers[':itemId'].accountTrans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CustomersItemIdAccountTrans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdAccountTransQueryKey>
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
      ...getV1CustomersItemIdAccountTransQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CustomersItemIdAccountTrans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdAccountTransQueryKey>
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
      ...getV1CustomersItemIdAccountTransQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CustomersItemIdOpeningBalanceQueryKey(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>,
) {
  return ['v1', '/v1/customers/:itemId/openingBalance', args] as const
}

export function getV1CustomersItemIdOpeningBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersItemIdOpeningBalanceQueryKey>
  >({
    queryKey: getV1CustomersItemIdOpeningBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers[':itemId'].openingBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CustomersItemIdOpeningBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdOpeningBalanceQueryKey>
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
      ...getV1CustomersItemIdOpeningBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CustomersItemIdOpeningBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdOpeningBalanceQueryKey>
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
      ...getV1CustomersItemIdOpeningBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CustomersItemIdOpeningBalanceListQueryKey(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>,
) {
  return ['v1', '/v1/customers/:itemId/openingBalanceList', args] as const
}

export function getV1CustomersItemIdOpeningBalanceListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersItemIdOpeningBalanceListQueryKey>
  >({
    queryKey: getV1CustomersItemIdOpeningBalanceListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers[':itemId'].openingBalanceList.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CustomersItemIdOpeningBalanceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdOpeningBalanceListQueryKey>
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
      ...getV1CustomersItemIdOpeningBalanceListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CustomersItemIdOpeningBalanceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdOpeningBalanceListQueryKey>
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
      ...getV1CustomersItemIdOpeningBalanceListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CustomersItemIdQuotesQueryKey(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>,
) {
  return ['v1', '/v1/customers/:itemId/quotes', args] as const
}

export function getV1CustomersItemIdQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersItemIdQuotesQueryKey>
  >({
    queryKey: getV1CustomersItemIdQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers[':itemId'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CustomersItemIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdQuotesQueryKey>
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
      ...getV1CustomersItemIdQuotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CustomersItemIdQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomersItemIdQuotesQueryKey>
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
      ...getV1CustomersItemIdQuotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1EmailSendEmailStatementMutationKey() {
  return ['v1', '/v1/email/sendEmailStatement', 'POST'] as const
}

export function getPostV1EmailSendEmailStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.sendEmailStatement.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.email.sendEmailStatement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailSendEmailStatementMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.sendEmailStatement.$post>) {
      return parseResponse(client.v1.email.sendEmailStatement.$post(args, options))
    },
  })
}

export function usePostV1EmailSendEmailStatement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.email.sendEmailStatement.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email.sendEmailStatement.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EmailSendEmailStatementMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EmailSendQuoteMutationKey() {
  return ['v1', '/v1/email/sendQuote', 'POST'] as const
}

export function getPostV1EmailSendQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.sendQuote.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.email.sendQuote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailSendQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.sendQuote.$post>) {
      return parseResponse(client.v1.email.sendQuote.$post(args, options))
    },
  })
}

export function usePostV1EmailSendQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.sendQuote.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email.sendQuote.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EmailSendQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EmailSendSalesInvoiceMutationKey() {
  return ['v1', '/v1/email/sendSalesInvoice', 'POST'] as const
}

export function getPostV1EmailSendSalesInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.sendSalesInvoice.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.email.sendSalesInvoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmailSendSalesInvoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.email.sendSalesInvoice.$post>) {
      return parseResponse(client.v1.email.sendSalesInvoice.$post(args, options))
    },
  })
}

export function usePostV1EmailSendSalesInvoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.sendSalesInvoice.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.email.sendSalesInvoice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EmailSendSalesInvoiceMutationOptions<TError, TOnMutateResult>(
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

export function getV1OwnerTypeGroupsQueryKey() {
  return ['v1', '/v1/ownerTypeGroups'] as const
}

export function getV1OwnerTypeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OwnerTypeGroupsQueryKey>
  >({
    queryKey: getV1OwnerTypeGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ownerTypeGroups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OwnerTypeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OwnerTypeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OwnerTypeGroupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OwnerTypeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypeGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OwnerTypeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OwnerTypeGroupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1OwnerTypesQueryKey() {
  return ['v1', '/v1/ownerTypes'] as const
}

export function getV1OwnerTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OwnerTypesQueryKey>
  >({
    queryKey: getV1OwnerTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ownerTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1OwnerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OwnerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OwnerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OwnerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ownerTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OwnerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OwnerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1PaymentsQueryKey() {
  return ['v1', '/v1/payments'] as const
}

export function getV1PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >({
    queryKey: getV1PaymentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PaymentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PaymentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1PaymentsMutationKey() {
  return ['v1', '/v1/payments', 'POST'] as const
}

export function getPostV1PaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.$post>) {
      return parseResponse(client.v1.payments.$post(args, options))
    },
  })
}

export function usePostV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.payments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1PaymentsBatchMutationKey() {
  return ['v1', '/v1/payments/batch', 'PUT'] as const
}

export function getPutV1PaymentsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.payments.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.batch.$put>) {
      return parseResponse(client.v1.payments.batch.$put(args, options))
    },
  })
}

export function usePutV1PaymentsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.payments.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentsIdQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$get']>,
) {
  return ['v1', '/v1/payments/:id', args] as const
}

export function getV1PaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsIdQueryKey>
  >({
    queryKey: getV1PaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1PaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PaymentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PaymentsIdMutationKey() {
  return ['v1', '/v1/payments/:id', 'PUT'] as const
}

export function getPutV1PaymentsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.payments)[':id']['$put']>) {
      return parseResponse(client.v1.payments[':id'].$put(args, options))
    },
  })
}

export function usePutV1PaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.payments)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PaymentsIdMutationKey() {
  return ['v1', '/v1/payments/:id', 'DELETE'] as const
}

export function getDeleteV1PaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.payments)[':id']['$delete']>) {
      return parseResponse(client.v1.payments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.payments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProductTypesQueryKey() {
  return ['v1', '/v1/productTypes'] as const
}

export function getV1ProductTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductTypesQueryKey>
  >({
    queryKey: getV1ProductTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.productTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProductTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProductTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProductTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.productTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProductTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ProductsQueryKey() {
  return ['v1', '/v1/products'] as const
}

export function getV1ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProductsQueryKey>
  >({
    queryKey: getV1ProductsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProductsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProductsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProductsMutationKey() {
  return ['v1', '/v1/products', 'POST'] as const
}

export function getPostV1ProductsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.products.$post>) {
      return parseResponse(client.v1.products.$post(args, options))
    },
  })
}

export function usePostV1Products<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1ProductsBatchMutationKey() {
  return ['v1', '/v1/products/batch', 'PUT'] as const
}

export function getPutV1ProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.products.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.products.batch.$put>) {
      return parseResponse(client.v1.products.batch.$put(args, options))
    },
  })
}

export function usePutV1ProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.products.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProductsIdQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
) {
  return ['v1', '/v1/products/:id', args] as const
}

export function getV1ProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsIdQueryKey>
  >({
    queryKey: getV1ProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1ProductsIdMutationKey() {
  return ['v1', '/v1/products/:id', 'PUT'] as const
}

export function getPutV1ProductsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':id']['$put']>) {
      return parseResponse(client.v1.products[':id'].$put(args, options))
    },
  })
}

export function usePutV1ProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProductsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ProductsIdMutationKey() {
  return ['v1', '/v1/products/:id', 'DELETE'] as const
}

export function getDeleteV1ProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':id']['$delete']>) {
      return parseResponse(client.v1.products[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PurchasesQueryKey() {
  return ['v1', '/v1/purchases'] as const
}

export function getV1PurchasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PurchasesQueryKey>
  >({
    queryKey: getV1PurchasesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.purchases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Purchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PurchasesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Purchases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PurchasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PurchasesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1PurchasesMutationKey() {
  return ['v1', '/v1/purchases', 'POST'] as const
}

export function getPostV1PurchasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.purchases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PurchasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.purchases.$post>) {
      return parseResponse(client.v1.purchases.$post(args, options))
    },
  })
}

export function usePostV1Purchases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.purchases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PurchasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1PurchasesBatchMutationKey() {
  return ['v1', '/v1/purchases/batch', 'PUT'] as const
}

export function getPutV1PurchasesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.purchases.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PurchasesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.purchases.batch.$put>) {
      return parseResponse(client.v1.purchases.batch.$put(args, options))
    },
  })
}

export function usePutV1PurchasesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.purchases.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.purchases.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PurchasesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1PurchasesIdQueryKey(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$get']>,
) {
  return ['v1', '/v1/purchases/:id', args] as const
}

export function getV1PurchasesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PurchasesIdQueryKey>
  >({
    queryKey: getV1PurchasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.purchases[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1PurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1PurchasesIdMutationKey() {
  return ['v1', '/v1/purchases/:id', 'PUT'] as const
}

export function getPutV1PurchasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.purchases)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PurchasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.purchases)[':id']['$put']>) {
      return parseResponse(client.v1.purchases[':id'].$put(args, options))
    },
  })
}

export function usePutV1PurchasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.purchases)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PurchasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PurchasesIdMutationKey() {
  return ['v1', '/v1/purchases/:id', 'DELETE'] as const
}

export function getDeleteV1PurchasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.purchases)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PurchasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.purchases)[':id']['$delete']>) {
      return parseResponse(client.v1.purchases[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PurchasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.purchases)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.purchases)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PurchasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1QuotesQueryKey() {
  return ['v1', '/v1/quotes'] as const
}

export function getV1QuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1QuotesQueryKey>
  >({
    queryKey: getV1QuotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.quotes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Quotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1QuotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Quotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1QuotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1QuotesMutationKey() {
  return ['v1', '/v1/quotes', 'POST'] as const
}

export function getPostV1QuotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.quotes.$post>) {
      return parseResponse(client.v1.quotes.$post(args, options))
    },
  })
}

export function usePostV1Quotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.quotes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1QuotesBatchMutationKey() {
  return ['v1', '/v1/quotes/batch', 'PUT'] as const
}

export function getPutV1QuotesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.quotes.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1QuotesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.quotes.batch.$put>) {
      return parseResponse(client.v1.quotes.batch.$put(args, options))
    },
  })
}

export function usePutV1QuotesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.batch.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.quotes.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1QuotesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1QuotesCloseIdMutationKey() {
  return ['v1', '/v1/quotes/close/:id', 'PUT'] as const
}

export function getPutV1QuotesCloseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes.close)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.quotes.close)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1QuotesCloseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.quotes.close)[':id']['$put']>) {
      return parseResponse(client.v1.quotes.close[':id'].$put(args, options))
    },
  })
}

export function usePutV1QuotesCloseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.quotes.close)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.quotes.close)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1QuotesCloseIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1QuotesCreateQuoteWithGeneratingReferenceMutationKey() {
  return ['v1', '/v1/quotes/createQuoteWithGeneratingReference', 'POST'] as const
}

export function getPostV1QuotesCreateQuoteWithGeneratingReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuotesCreateQuoteWithGeneratingReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>,
    ) {
      return parseResponse(client.v1.quotes.createQuoteWithGeneratingReference.$post(args, options))
    },
  })
}

export function usePostV1QuotesCreateQuoteWithGeneratingReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuotesCreateQuoteWithGeneratingReferenceMutationOptions<
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

export function getPostV1QuotesGenerateSaleInvoiceMutationKey() {
  return ['v1', '/v1/quotes/generateSaleInvoice', 'POST'] as const
}

export function getPostV1QuotesGenerateSaleInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.generateSaleInvoice.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.quotes.generateSaleInvoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuotesGenerateSaleInvoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.quotes.generateSaleInvoice.$post>) {
      return parseResponse(client.v1.quotes.generateSaleInvoice.$post(args, options))
    },
  })
}

export function usePostV1QuotesGenerateSaleInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.quotes.generateSaleInvoice.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.quotes.generateSaleInvoice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuotesGenerateSaleInvoiceMutationOptions<
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

export function getPutV1QuotesReopenIdMutationKey() {
  return ['v1', '/v1/quotes/reopen/:id', 'PUT'] as const
}

export function getPutV1QuotesReopenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes.reopen)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.quotes.reopen)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1QuotesReopenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.quotes.reopen)[':id']['$put']>) {
      return parseResponse(client.v1.quotes.reopen[':id'].$put(args, options))
    },
  })
}

export function usePutV1QuotesReopenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.quotes.reopen)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.quotes.reopen)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1QuotesReopenIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1QuotesIdQueryKey(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$get']>,
) {
  return ['v1', '/v1/quotes/:id', args] as const
}

export function getV1QuotesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuotesIdQueryKey>
  >({
    queryKey: getV1QuotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.quotes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1QuotesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1QuotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1QuotesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1QuotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1QuotesIdMutationKey() {
  return ['v1', '/v1/quotes/:id', 'PUT'] as const
}

export function getPutV1QuotesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.quotes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1QuotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.quotes)[':id']['$put']>) {
      return parseResponse(client.v1.quotes[':id'].$put(args, options))
    },
  })
}

export function usePutV1QuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.quotes)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1QuotesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1QuotesIdMutationKey() {
  return ['v1', '/v1/quotes/:id', 'DELETE'] as const
}

export function getDeleteV1QuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.quotes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1QuotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.quotes)[':id']['$delete']>) {
      return parseResponse(client.v1.quotes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1QuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.quotes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1QuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesQueryKey() {
  return ['v1', '/v1/sales'] as const
}

export function getV1SalesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SalesQueryKey>
  >({
    queryKey: getV1SalesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.sales.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Sales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1SalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Sales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sales.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1SalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SalesCreditNotesQueryKey() {
  return ['v1', '/v1/salesCreditNotes'] as const
}

export function getV1SalesCreditNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesCreditNotesQueryKey>
  >({
    queryKey: getV1SalesCreditNotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesCreditNotes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SalesCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesCreditNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesCreditNotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesCreditNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesCreditNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesCreditNotesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SalesCreditNotesMutationKey() {
  return ['v1', '/v1/salesCreditNotes', 'POST'] as const
}

export function getPostV1SalesCreditNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.salesCreditNotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesCreditNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesCreditNotes.$post>) {
      return parseResponse(client.v1.salesCreditNotes.$post(args, options))
    },
  })
}

export function usePostV1SalesCreditNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesCreditNotes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SalesCreditNotesMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SalesCreditNotesBatchMutationKey() {
  return ['v1', '/v1/salesCreditNotes/batch', 'PUT'] as const
}

export function getPutV1SalesCreditNotesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.salesCreditNotes.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesCreditNotesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesCreditNotes.batch.$put>) {
      return parseResponse(client.v1.salesCreditNotes.batch.$put(args, options))
    },
  })
}

export function usePutV1SalesCreditNotesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesCreditNotes.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesCreditNotes.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesCreditNotesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesCreditNotesIdQueryKey(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$get']>,
) {
  return ['v1', '/v1/salesCreditNotes/:id', args] as const
}

export function getV1SalesCreditNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesCreditNotesIdQueryKey>
  >({
    queryKey: getV1SalesCreditNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesCreditNotes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SalesCreditNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesCreditNotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesCreditNotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesCreditNotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesCreditNotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesCreditNotesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SalesCreditNotesIdMutationKey() {
  return ['v1', '/v1/salesCreditNotes/:id', 'PUT'] as const
}

export function getPutV1SalesCreditNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesCreditNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$put']>) {
      return parseResponse(client.v1.salesCreditNotes[':id'].$put(args, options))
    },
  })
}

export function usePutV1SalesCreditNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesCreditNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SalesCreditNotesIdMutationKey() {
  return ['v1', '/v1/salesCreditNotes/:id', 'DELETE'] as const
}

export function getDeleteV1SalesCreditNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SalesCreditNotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.salesCreditNotes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SalesCreditNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SalesCreditNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesEntriesQueryKey() {
  return ['v1', '/v1/salesEntries'] as const
}

export function getV1SalesEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesEntriesQueryKey>
  >({
    queryKey: getV1SalesEntriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesEntries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SalesEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesEntriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesEntriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SalesEntriesMutationKey() {
  return ['v1', '/v1/salesEntries', 'POST'] as const
}

export function getPostV1SalesEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.salesEntries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesEntriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesEntries.$post>) {
      return parseResponse(client.v1.salesEntries.$post(args, options))
    },
  })
}

export function usePostV1SalesEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.salesEntries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SalesEntriesMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SalesEntriesBatchMutationKey() {
  return ['v1', '/v1/salesEntries/batch', 'PUT'] as const
}

export function getPutV1SalesEntriesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.salesEntries.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesEntriesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesEntries.batch.$put>) {
      return parseResponse(client.v1.salesEntries.batch.$put(args, options))
    },
  })
}

export function usePutV1SalesEntriesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesEntries.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesEntries.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesEntriesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesEntriesIdQueryKey(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$get']>,
) {
  return ['v1', '/v1/salesEntries/:id', args] as const
}

export function getV1SalesEntriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesEntriesIdQueryKey>
  >({
    queryKey: getV1SalesEntriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesEntries[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SalesEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesEntriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesEntriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesEntriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesEntriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SalesEntriesIdMutationKey() {
  return ['v1', '/v1/salesEntries/:id', 'PUT'] as const
}

export function getPutV1SalesEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesEntries)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesEntriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$put']>) {
      return parseResponse(client.v1.salesEntries[':id'].$put(args, options))
    },
  })
}

export function usePutV1SalesEntriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesEntries)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesEntriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SalesEntriesIdMutationKey() {
  return ['v1', '/v1/salesEntries/:id', 'DELETE'] as const
}

export function getDeleteV1SalesEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesEntries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SalesEntriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$delete']>) {
      return parseResponse(client.v1.salesEntries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SalesEntriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesEntries)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesEntries)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SalesEntriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesInvoicesQueryKey() {
  return ['v1', '/v1/salesInvoices'] as const
}

export function getV1SalesInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesInvoicesQueryKey>
  >({
    queryKey: getV1SalesInvoicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesInvoices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SalesInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesInvoicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesInvoicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SalesInvoicesMutationKey() {
  return ['v1', '/v1/salesInvoices', 'POST'] as const
}

export function getPostV1SalesInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.salesInvoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesInvoices.$post>) {
      return parseResponse(client.v1.salesInvoices.$post(args, options))
    },
  })
}

export function usePostV1SalesInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesInvoices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SalesInvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SalesInvoicesBatchMutationKey() {
  return ['v1', '/v1/salesInvoices/batch', 'PUT'] as const
}

export function getPutV1SalesInvoicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.batch.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.salesInvoices.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesInvoicesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesInvoices.batch.$put>) {
      return parseResponse(client.v1.salesInvoices.batch.$put(args, options))
    },
  })
}

export function usePutV1SalesInvoicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesInvoices.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesInvoices.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesInvoicesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceMutationKey() {
  return ['v1', '/v1/salesInvoices/createSaleInvoiceWithGeneratingReference', 'POST'] as const
}

export function getPostV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post
      >,
    ) {
      return parseResponse(
        client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post(args, options),
      )
    },
  })
}

export function usePostV1SalesInvoicesCreateSaleInvoiceWithGeneratingReference<
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
                  typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post
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
    getPostV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceMutationOptions<
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

export function getV1SalesInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$get']>,
) {
  return ['v1', '/v1/salesInvoices/:id', args] as const
}

export function getV1SalesInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesInvoicesIdQueryKey>
  >({
    queryKey: getV1SalesInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesInvoices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SalesInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SalesInvoicesIdMutationKey() {
  return ['v1', '/v1/salesInvoices/:id', 'PUT'] as const
}

export function getPutV1SalesInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesInvoices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$put']>) {
      return parseResponse(client.v1.salesInvoices[':id'].$put(args, options))
    },
  })
}

export function usePutV1SalesInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesInvoices)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SalesInvoicesIdMutationKey() {
  return ['v1', '/v1/salesInvoices/:id', 'DELETE'] as const
}

export function getDeleteV1SalesInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesInvoices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SalesInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$delete']>) {
      return parseResponse(client.v1.salesInvoices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SalesInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesInvoices)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesInvoices)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SalesInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesRepsQueryKey() {
  return ['v1', '/v1/salesReps'] as const
}

export function getV1SalesRepsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SalesRepsQueryKey>
  >({
    queryKey: getV1SalesRepsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesReps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SalesReps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRepsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesRepsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesReps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRepsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesRepsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SalesRepsMutationKey() {
  return ['v1', '/v1/salesReps', 'POST'] as const
}

export function getPostV1SalesRepsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.salesReps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SalesRepsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesReps.$post>) {
      return parseResponse(client.v1.salesReps.$post(args, options))
    },
  })
}

export function usePostV1SalesReps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.salesReps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SalesRepsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1SalesRepsBatchMutationKey() {
  return ['v1', '/v1/salesReps/batch', 'PUT'] as const
}

export function getPutV1SalesRepsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.salesReps.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesRepsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.salesReps.batch.$put>) {
      return parseResponse(client.v1.salesReps.batch.$put(args, options))
    },
  })
}

export function usePutV1SalesRepsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReps.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.salesReps.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesRepsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesRepsIdQueryKey(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$get']>,
) {
  return ['v1', '/v1/salesReps/:id', args] as const
}

export function getV1SalesRepsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesRepsIdQueryKey>
  >({
    queryKey: getV1SalesRepsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesReps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SalesRepsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRepsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesRepsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesRepsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesRepsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesRepsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SalesRepsIdMutationKey() {
  return ['v1', '/v1/salesReps/:id', 'PUT'] as const
}

export function getPutV1SalesRepsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesReps)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SalesRepsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesReps)[':id']['$put']>) {
      return parseResponse(client.v1.salesReps[':id'].$put(args, options))
    },
  })
}

export function usePutV1SalesRepsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesReps)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SalesRepsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SalesRepsIdMutationKey() {
  return ['v1', '/v1/salesReps/:id', 'DELETE'] as const
}

export function getDeleteV1SalesRepsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.salesReps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SalesRepsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.salesReps)[':id']['$delete']>) {
      return parseResponse(client.v1.salesReps[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SalesRepsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.salesReps)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.salesReps)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SalesRepsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SuppliersQueryKey() {
  return ['v1', '/v1/suppliers'] as const
}

export function getV1SuppliersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SuppliersQueryKey>
  >({
    queryKey: getV1SuppliersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.suppliers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Suppliers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SuppliersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Suppliers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SuppliersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SuppliersMutationKey() {
  return ['v1', '/v1/suppliers', 'POST'] as const
}

export function getPostV1SuppliersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.suppliers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SuppliersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.suppliers.$post>) {
      return parseResponse(client.v1.suppliers.$post(args, options))
    },
  })
}

export function usePostV1Suppliers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.suppliers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SuppliersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1SuppliersBatchMutationKey() {
  return ['v1', '/v1/suppliers/batch', 'PUT'] as const
}

export function getPutV1SuppliersBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.suppliers.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SuppliersBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.suppliers.batch.$put>) {
      return parseResponse(client.v1.suppliers.batch.$put(args, options))
    },
  })
}

export function usePutV1SuppliersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.suppliers.batch.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.suppliers.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SuppliersBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV1SuppliersIdQueryKey(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$get']>,
) {
  return ['v1', '/v1/suppliers/:id', args] as const
}

export function getV1SuppliersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SuppliersIdQueryKey>
  >({
    queryKey: getV1SuppliersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.suppliers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SuppliersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SuppliersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SuppliersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SuppliersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SuppliersIdMutationKey() {
  return ['v1', '/v1/suppliers/:id', 'PUT'] as const
}

export function getPutV1SuppliersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.suppliers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SuppliersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.suppliers)[':id']['$put']>) {
      return parseResponse(client.v1.suppliers[':id'].$put(args, options))
    },
  })
}

export function usePutV1SuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.suppliers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SuppliersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SuppliersIdMutationKey() {
  return ['v1', '/v1/suppliers/:id', 'DELETE'] as const
}

export function getDeleteV1SuppliersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.suppliers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SuppliersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.suppliers)[':id']['$delete']>) {
      return parseResponse(client.v1.suppliers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SuppliersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.suppliers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.suppliers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SuppliersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SuppliersItemIdAccountTransQueryKey(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>,
) {
  return ['v1', '/v1/suppliers/:itemId/accountTrans', args] as const
}

export function getV1SuppliersItemIdAccountTransQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SuppliersItemIdAccountTransQueryKey>
  >({
    queryKey: getV1SuppliersItemIdAccountTransQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.suppliers[':itemId'].accountTrans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SuppliersItemIdAccountTrans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdAccountTransQueryKey>
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
      ...getV1SuppliersItemIdAccountTransQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SuppliersItemIdAccountTrans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdAccountTransQueryKey>
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
      ...getV1SuppliersItemIdAccountTransQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1SuppliersItemIdOpeningBalanceQueryKey(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>,
) {
  return ['v1', '/v1/suppliers/:itemId/openingBalance', args] as const
}

export function getV1SuppliersItemIdOpeningBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SuppliersItemIdOpeningBalanceQueryKey>
  >({
    queryKey: getV1SuppliersItemIdOpeningBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.suppliers[':itemId'].openingBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SuppliersItemIdOpeningBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdOpeningBalanceQueryKey>
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
      ...getV1SuppliersItemIdOpeningBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SuppliersItemIdOpeningBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdOpeningBalanceQueryKey>
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
      ...getV1SuppliersItemIdOpeningBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1SuppliersItemIdOpeningBalanceListQueryKey(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>,
) {
  return ['v1', '/v1/suppliers/:itemId/openingBalanceList', args] as const
}

export function getV1SuppliersItemIdOpeningBalanceListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SuppliersItemIdOpeningBalanceListQueryKey>
  >({
    queryKey: getV1SuppliersItemIdOpeningBalanceListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.suppliers[':itemId'].openingBalanceList.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SuppliersItemIdOpeningBalanceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdOpeningBalanceListQueryKey>
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
      ...getV1SuppliersItemIdOpeningBalanceListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SuppliersItemIdOpeningBalanceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SuppliersItemIdOpeningBalanceListQueryKey>
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
      ...getV1SuppliersItemIdOpeningBalanceListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1UserDefinedFieldsQueryKey() {
  return ['v1', '/v1/userDefinedFields'] as const
}

export function getV1UserDefinedFieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserDefinedFieldsQueryKey>
  >({
    queryKey: getV1UserDefinedFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userDefinedFields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserDefinedFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserDefinedFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UserDefinedFieldsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UserDefinedFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.userDefinedFields.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserDefinedFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UserDefinedFieldsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1VatAnalysisTypesQueryKey() {
  return ['v1', '/v1/vatAnalysisTypes'] as const
}

export function getV1VatAnalysisTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1VatAnalysisTypesQueryKey>
  >({
    queryKey: getV1VatAnalysisTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vatAnalysisTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1VatAnalysisTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatAnalysisTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VatAnalysisTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VatAnalysisTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatAnalysisTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatAnalysisTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VatAnalysisTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1VatCategoriesQueryKey() {
  return ['v1', '/v1/vatCategories'] as const
}

export function getV1VatCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1VatCategoriesQueryKey>
  >({
    queryKey: getV1VatCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vatCategories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1VatCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VatCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VatCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VatCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1VatCategoriesVatRatesMutationKey() {
  return ['v1', '/v1/vatCategories/vatRates', 'POST'] as const
}

export function getPostV1VatCategoriesVatRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.vatRates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.vatCategories.vatRates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VatCategoriesVatRatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.vatCategories.vatRates.$post>) {
      return parseResponse(client.v1.vatCategories.vatRates.$post(args, options))
    },
  })
}

export function usePostV1VatCategoriesVatRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatCategories.vatRates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.vatCategories.vatRates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1VatCategoriesVatRatesMutationOptions<TError, TOnMutateResult>(
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

export function getV1VatRatesQueryKey() {
  return ['v1', '/v1/vatRates'] as const
}

export function getV1VatRatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VatRatesQueryKey>
  >({
    queryKey: getV1VatRatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vatRates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1VatRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VatRatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VatRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatRates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VatRatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1VatTypesQueryKey() {
  return ['v1', '/v1/vatTypes'] as const
}

export function getV1VatTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VatTypesQueryKey>
  >({
    queryKey: getV1VatTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.vatTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1VatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VatTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vatTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
