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

export function createBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.budgets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsQueryKey>
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
    return { ...getBudgetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createBudgetsBudgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdQueryKey>
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
    return { ...getBudgetsBudgetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createBudgetsBudgetIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBudgetsBudgetIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostBudgetsBudgetIdAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdAccountsAccountId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdAccountsAccountIdTransactions<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdAccountsAccountIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdCategoriesCategoryId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdCategoriesCategoryIdTransactions<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdMonths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdMonthsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdMonthsMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdMonthsMonthCategoriesCategoryId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
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
      ...getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryId<
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
    const mutationDefaults = getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdMutationOptions<
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

export function createBudgetsBudgetIdPayeeLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdPayeeLocationsPayeeLocationId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
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
      ...getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdPayees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdPayeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdPayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdPayeesPayeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdPayeesPayeeIdPayeeLocations<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdPayeesPayeeIdTransactions<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
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
      ...getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdScheduledTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdScheduledTransactionsScheduledTransactionId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createBudgetsBudgetIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBudgetsBudgetIdTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBudgetsBudgetIdTransactions<
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
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>,
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
    const mutationDefaults = getPostBudgetsBudgetIdTransactionsMutationOptions<
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

export function createPatchBudgetsBudgetIdTransactions<
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
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>,
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
    const mutationDefaults = getPatchBudgetsBudgetIdTransactionsMutationOptions<
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

export function createPostBudgetsBudgetIdTransactionsBulk<
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
                  ReturnType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>,
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
    const mutationDefaults = getPostBudgetsBudgetIdTransactionsBulkMutationOptions<
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

export function createPostBudgetsBudgetIdTransactionsImport<
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
                    (typeof client.budgets)[':budget_id']['transactions']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.budgets)[':budget_id']['transactions']['import']['$post']
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
    const mutationDefaults = getPostBudgetsBudgetIdTransactionsImportMutationOptions<
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

export function createBudgetsBudgetIdTransactionsTransactionId<
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
  args: () => InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
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
      ...getBudgetsBudgetIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutBudgetsBudgetIdTransactionsTransactionId<
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
    const mutationDefaults = getPutBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
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

export function createDeleteBudgetsBudgetIdTransactionsTransactionId<
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
    const mutationDefaults = getDeleteBudgetsBudgetIdTransactionsTransactionIdMutationOptions<
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

export function createUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUserQueryKey>
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
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
