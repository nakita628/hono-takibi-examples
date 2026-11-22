import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBudgetsKey() {
  return ['budgets'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getBudgetsQueryKey(args: InferRequestType<typeof client.budgets.$get>) {
  return ['budgets', '/budgets', args] as const
}

export function getBudgetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.budgets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBudgetsQueryKey>
  >({
    queryKey: getBudgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBudgetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBudgetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBudgetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBudgetsBudgetIdQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id', args] as const
}

export function getBudgetsBudgetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBudgetsBudgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBudgetsBudgetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBudgetsBudgetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBudgetsBudgetIdAccountsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/accounts', args] as const
}

export function getBudgetsBudgetIdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsQueryKey>
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
      ...getBudgetsBudgetIdAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsQueryKey>
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
      ...getBudgetsBudgetIdAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBudgetsBudgetIdAccountsMutationKey() {
  return ['budgets', '/budgets/:budget_id/accounts', 'POST'] as const
}

export function getPostBudgetsBudgetIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBudgetsBudgetIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']>,
    ) {
      return parseResponse(client.budgets[':budget_id'].accounts.$post(args, options))
    },
  })
}

export function usePostBudgetsBudgetIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBudgetsBudgetIdAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getBudgetsBudgetIdAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/accounts/:account_id', args] as const
}

export function getBudgetsBudgetIdAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/accounts/:account_id/transactions', args] as const
}

export function getBudgetsBudgetIdAccountsAccountIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdAccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdAccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/categories', args] as const
}

export function getBudgetsBudgetIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesQueryKey>
  >({
    queryKey: getBudgetsBudgetIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesQueryKey>
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
      ...getBudgetsBudgetIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesQueryKey>
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
      ...getBudgetsBudgetIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories/:category_id', args] as const
}

export function getBudgetsBudgetIdCategoriesCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdCategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].categories[':category_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories/:category_id/transactions', args] as const
}

export function getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].categories[':category_id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdCategoriesCategoryIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdCategoriesCategoryIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/months', args] as const
}

export function getBudgetsBudgetIdMonthsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdMonthsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].months.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdMonths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsQueryKey>
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
      ...getBudgetsBudgetIdMonthsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdMonths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsQueryKey>
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
      ...getBudgetsBudgetIdMonthsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsMonthQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/months/:month', args] as const
}

export function getBudgetsBudgetIdMonthsMonthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
  >({
    queryKey: getBudgetsBudgetIdMonthsMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].months[':month'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdMonthsMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdMonthsMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/months/:month/categories/:category_id', args] as const
}

export function getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdMonthsMonthCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdMonthsMonthCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdMutationKey() {
  return ['budgets', '/budgets/:budget_id/months/:month/categories/:category_id', 'PATCH'] as const
}

export function getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.budgets[':budget_id'].months[':month'].categories[':category_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchBudgetsBudgetIdMonthsMonthCategoriesCategoryId<
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
                  (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
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
  const mutationDefaults = getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdMutationOptions<
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

export function getBudgetsBudgetIdPayeeLocationsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payee_locations', args] as const
}

export function getBudgetsBudgetIdPayeeLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeeLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payee_locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayeeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayeeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payee_locations/:payee_location_id', args] as const
}

export function getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayeeLocationsPayeeLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayeeLocationsPayeeLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payees', args] as const
}

export function getBudgetsBudgetIdPayeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesQueryKey>
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
      ...getBudgetsBudgetIdPayeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesQueryKey>
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
      ...getBudgetsBudgetIdPayeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id', args] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeesPayeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/payee_locations', args] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayeesPayeeIdPayeeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayeesPayeeIdPayeeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/transactions', args] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdPayeesPayeeIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdPayeesPayeeIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdScheduledTransactionsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/scheduled_transactions', args] as const
}

export function getBudgetsBudgetIdScheduledTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdScheduledTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].scheduled_transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdScheduledTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdScheduledTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/scheduled_transactions/:scheduled_transaction_id',
    args,
  ] as const
}

export function getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBudgetsBudgetIdScheduledTransactionsScheduledTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdScheduledTransactionsScheduledTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdSettingsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/settings', args] as const
}

export function getBudgetsBudgetIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdSettingsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdSettingsQueryKey>
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
      ...getBudgetsBudgetIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdSettingsQueryKey>
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
      ...getBudgetsBudgetIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/transactions', args] as const
}

export function getBudgetsBudgetIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdTransactionsQueryKey>
  >({
    queryKey: getBudgetsBudgetIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBudgetsBudgetIdTransactionsMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions', 'POST'] as const
}

export function getPostBudgetsBudgetIdTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBudgetsBudgetIdTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>,
    ) {
      return parseResponse(client.budgets[':budget_id'].transactions.$post(args, options))
    },
  })
}

export function usePostBudgetsBudgetIdTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBudgetsBudgetIdTransactionsMutationOptions<
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

export function getPatchBudgetsBudgetIdTransactionsMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions', 'PATCH'] as const
}

export function getPatchBudgetsBudgetIdTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBudgetsBudgetIdTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>,
    ) {
      return parseResponse(client.budgets[':budget_id'].transactions.$patch(args, options))
    },
  })
}

export function usePatchBudgetsBudgetIdTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBudgetsBudgetIdTransactionsMutationOptions<
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

export function getPostBudgetsBudgetIdTransactionsBulkMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions/bulk', 'POST'] as const
}

export function getPostBudgetsBudgetIdTransactionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBudgetsBudgetIdTransactionsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']
      >,
    ) {
      return parseResponse(client.budgets[':budget_id'].transactions.bulk.$post(args, options))
    },
  })
}

export function usePostBudgetsBudgetIdTransactionsBulk<
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
                ReturnType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBudgetsBudgetIdTransactionsBulkMutationOptions<
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

export function getPostBudgetsBudgetIdTransactionsImportMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions/import', 'POST'] as const
}

export function getPostBudgetsBudgetIdTransactionsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBudgetsBudgetIdTransactionsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.budgets)[':budget_id']['transactions']['import']['$post']
      >,
    ) {
      return parseResponse(client.budgets[':budget_id'].transactions.import.$post(args, options))
    },
  })
}

export function usePostBudgetsBudgetIdTransactionsImport<
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
                ReturnType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBudgetsBudgetIdTransactionsImportMutationOptions<
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

export function getBudgetsBudgetIdTransactionsTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', args] as const
}

export function getBudgetsBudgetIdTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
  >({
    queryKey: getBudgetsBudgetIdTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.budgets[':budget_id'].transactions[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBudgetsBudgetIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBudgetsBudgetIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBudgetsBudgetIdTransactionsTransactionIdMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', 'PUT'] as const
}

export function getPutBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBudgetsBudgetIdTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
      >,
    ) {
      return parseResponse(
        client.budgets[':budget_id'].transactions[':transaction_id'].$put(args, options),
      )
    },
  })
}

export function usePutBudgetsBudgetIdTransactionsTransactionId<
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
                  (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
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
  const mutationDefaults = getPutBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
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

export function getDeleteBudgetsBudgetIdTransactionsTransactionIdMutationKey() {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', 'DELETE'] as const
}

export function getDeleteBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBudgetsBudgetIdTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.budgets[':budget_id'].transactions[':transaction_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBudgetsBudgetIdTransactionsTransactionId<
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
                  (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
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
  const mutationDefaults = getDeleteBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
