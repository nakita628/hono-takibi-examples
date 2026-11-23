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

export function getBudgetsKey() {
  return ['budgets'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getBudgetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.budgets.$get>>,
) {
  return ['budgets', '/budgets', toValue(args)] as const
}

export function getBudgetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.budgets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBudgets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.budgets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>
          >,
          ReturnType<typeof getBudgetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBudgetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['$get']>>,
) {
  return ['budgets', '/budgets/:budget_id', toValue(args)] as const
}

export function getBudgetsBudgetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBudgetsBudgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/accounts', toValue(args)] as const
}

export function getBudgetsBudgetIdAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/accounts/:account_id', toValue(args)] as const
}

export function getBudgetsBudgetIdAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
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
            ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
    >
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/accounts/:account_id/transactions',
    toValue(args),
  ] as const
}

export function getBudgetsBudgetIdAccountsAccountIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
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
              (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdAccountsAccountIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories', toValue(args)] as const
}

export function getBudgetsBudgetIdCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories/:category_id', toValue(args)] as const
}

export function getBudgetsBudgetIdCategoriesCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdCategoriesCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].categories[':category_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
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
            ReturnType<(typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdCategoriesCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].categories[':category_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
    >
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/categories/:category_id/transactions',
    toValue(args),
  ] as const
}

export function getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].categories[':category_id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
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
              (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdCategoriesCategoryIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].categories[':category_id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>>,
) {
  return ['budgets', '/budgets/:budget_id/months', toValue(args)] as const
}

export function getBudgetsBudgetIdMonthsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdMonthsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].months.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdMonthsQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdMonthsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].months.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/months/:month', toValue(args)] as const
}

export function getBudgetsBudgetIdMonthsMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdMonthsMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].months[':month'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdMonthsMonthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].months[':month'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
    >
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/months/:month/categories/:category_id',
    toValue(args),
  ] as const
}

export function getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
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
              (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdMonthsMonthCategoriesCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/payee_locations', toValue(args)] as const
}

export function getBudgetsBudgetIdPayeeLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeeLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payee_locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeeLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeeLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payee_locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
    >
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/payee_locations/:payee_location_id',
    toValue(args),
  ] as const
}

export function getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
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
              (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeeLocationsPayeeLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>>,
) {
  return ['budgets', '/budgets/:budget_id/payees', toValue(args)] as const
}

export function getBudgetsBudgetIdPayeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeesQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id', toValue(args)] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payees[':payee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
    >
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/payee_locations', toValue(args)] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
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
              (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdPayeeLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
    >
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/transactions', toValue(args)] as const
}

export function getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
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
              (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdPayeesPayeeIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdScheduledTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/scheduled_transactions', toValue(args)] as const
}

export function getBudgetsBudgetIdScheduledTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdScheduledTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].scheduled_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
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
            ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdScheduledTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].scheduled_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
    >
  >,
) {
  return [
    'budgets',
    '/budgets/:budget_id/scheduled_transactions/:scheduled_transaction_id',
    toValue(args),
  ] as const
}

export function getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
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
              (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/settings', toValue(args)] as const
}

export function getBudgetsBudgetIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBudgetsBudgetIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>
  >,
) {
  return ['budgets', '/budgets/:budget_id/transactions', toValue(args)] as const
}

export function getBudgetsBudgetIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
    >
  >,
) {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', toValue(args)] as const
}

export function getBudgetsBudgetIdTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBudgetsBudgetIdTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.budgets[':budget_id'].transactions[':transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
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
                    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
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
              (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBudgetsBudgetIdTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBudgetsBudgetIdTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.budgets[':budget_id'].transactions[':transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
