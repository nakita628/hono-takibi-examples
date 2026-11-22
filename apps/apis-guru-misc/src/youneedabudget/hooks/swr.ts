import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBudgetsKey() {
  return ['budgets'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getGetBudgetsKey(args: InferRequestType<typeof client.budgets.$get>) {
  return ['budgets', '/budgets', args] as const
}

export function useGetBudgets<TError = unknown>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.budgets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBudgets<TError = unknown>(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBudgetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.budgets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.budgets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBudgetsBudgetIdKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id', args] as const
}

export function useGetBudgetsBudgetId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
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
        ? getGetBudgetsBudgetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
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
        ? getGetBudgetsBudgetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.budgets)[':budget_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdAccountsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/accounts', args] as const
}

export function useGetBudgetsBudgetIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
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
        ? getGetBudgetsBudgetIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
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
        ? getGetBudgetsBudgetIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBudgetsBudgetIdAccountsKey() {
  return ['budgets', '/budgets/:budget_id/accounts', 'POST'] as const
}

export function usePostBudgetsBudgetIdAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBudgetsBudgetIdAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']> },
      ) => parseResponse(client.budgets[':budget_id'].accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdAccountsAccountIdKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/accounts/:account_id', args] as const
}

export function useGetBudgetsBudgetIdAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
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
        ? getGetBudgetsBudgetIdAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.budgets[':budget_id'].accounts[':account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
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
        ? getGetBudgetsBudgetIdAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.budgets[':budget_id'].accounts[':account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdAccountsAccountIdTransactionsKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/accounts/:account_id/transactions', args] as const
}

export function useGetBudgetsBudgetIdAccountsAccountIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdAccountsAccountIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
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
          client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdAccountsAccountIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdAccountsAccountIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
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
          client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdCategoriesKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/categories', args] as const
}

export function useGetBudgetsBudgetIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
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
        ? getGetBudgetsBudgetIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
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
        ? getGetBudgetsBudgetIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdCategoriesCategoryIdKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories/:category_id', args] as const
}

export function useGetBudgetsBudgetIdCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdCategoriesCategoryIdKey(args)
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
                (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
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
          client.budgets[':budget_id'].categories[':category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdCategoriesCategoryIdKey(args)
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
                (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
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
          client.budgets[':budget_id'].categories[':category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdCategoriesCategoryIdTransactionsKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/categories/:category_id/transactions', args] as const
}

export function useGetBudgetsBudgetIdCategoriesCategoryIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdCategoriesCategoryIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
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
          client.budgets[':budget_id'].categories[':category_id'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdCategoriesCategoryIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdCategoriesCategoryIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
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
          client.budgets[':budget_id'].categories[':category_id'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdMonthsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/months', args] as const
}

export function useGetBudgetsBudgetIdMonths<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
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
        ? getGetBudgetsBudgetIdMonthsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].months.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdMonths<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
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
        ? getGetBudgetsBudgetIdMonthsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].months.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdMonthsMonthKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/months/:month', args] as const
}

export function useGetBudgetsBudgetIdMonthsMonth<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
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
        ? getGetBudgetsBudgetIdMonthsMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].months[':month'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdMonthsMonth<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
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
        ? getGetBudgetsBudgetIdMonthsMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].months[':month'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdMonthsMonthCategoriesCategoryIdKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/months/:month/categories/:category_id', args] as const
}

export function useGetBudgetsBudgetIdMonthsMonthCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdMonthsMonthCategoriesCategoryIdKey(args)
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
                (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
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
          client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdMonthsMonthCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdMonthsMonthCategoriesCategoryIdKey(args)
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
                (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
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
          client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdKey() {
  return ['budgets', '/budgets/:budget_id/months/:month/categories/:category_id', 'PATCH'] as const
}

export function usePatchBudgetsBudgetIdMonthsMonthCategoriesCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBudgetsBudgetIdMonthsMonthCategoriesCategoryIdKey()
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
            (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.budgets[':budget_id'].months[':month'].categories[':category_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeeLocationsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payee_locations', args] as const
}

export function useGetBudgetsBudgetIdPayeeLocations<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
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
        ? getGetBudgetsBudgetIdPayeeLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].payee_locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayeeLocations<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
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
        ? getGetBudgetsBudgetIdPayeeLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].payee_locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeeLocationsPayeeLocationIdKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payee_locations/:payee_location_id', args] as const
}

export function useGetBudgetsBudgetIdPayeeLocationsPayeeLocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeeLocationsPayeeLocationIdKey(args)
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
                (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
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
          client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayeeLocationsPayeeLocationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeeLocationsPayeeLocationIdKey(args)
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
                (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
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
          client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeesKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payees', args] as const
}

export function useGetBudgetsBudgetIdPayees<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
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
        ? getGetBudgetsBudgetIdPayeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayees<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
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
        ? getGetBudgetsBudgetIdPayeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['payees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeesPayeeIdKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id', args] as const
}

export function useGetBudgetsBudgetIdPayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].payees[':payee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].payees[':payee_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeesPayeeIdPayeeLocationsKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/payee_locations', args] as const
}

export function useGetBudgetsBudgetIdPayeesPayeeIdPayeeLocations<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdPayeeLocationsKey(args)
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
                (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
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
          client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayeesPayeeIdPayeeLocations<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdPayeeLocationsKey(args)
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
                (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
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
          client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdPayeesPayeeIdTransactionsKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/payees/:payee_id/transactions', args] as const
}

export function useGetBudgetsBudgetIdPayeesPayeeIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
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
          client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdPayeesPayeeIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdPayeesPayeeIdTransactionsKey(args)
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
                (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
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
          client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdScheduledTransactionsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/scheduled_transactions', args] as const
}

export function useGetBudgetsBudgetIdScheduledTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
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
        ? getGetBudgetsBudgetIdScheduledTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.budgets[':budget_id'].scheduled_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdScheduledTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
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
        ? getGetBudgetsBudgetIdScheduledTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.budgets[':budget_id'].scheduled_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdKey(
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

export function useGetBudgetsBudgetIdScheduledTransactionsScheduledTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdKey(args)
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
                (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
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
          client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdScheduledTransactionsScheduledTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdKey(args)
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
                (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
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
          client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdSettingsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/settings', args] as const
}

export function useGetBudgetsBudgetIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
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
        ? getGetBudgetsBudgetIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
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
        ? getGetBudgetsBudgetIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.budgets[':budget_id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdTransactionsKey(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
) {
  return ['budgets', '/budgets/:budget_id/transactions', args] as const
}

export function useGetBudgetsBudgetIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
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
        ? getGetBudgetsBudgetIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
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
        ? getGetBudgetsBudgetIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.budgets[':budget_id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBudgetsBudgetIdTransactionsKey() {
  return ['budgets', '/budgets/:budget_id/transactions', 'POST'] as const
}

export function usePostBudgetsBudgetIdTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBudgetsBudgetIdTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>
        },
      ) => parseResponse(client.budgets[':budget_id'].transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBudgetsBudgetIdTransactionsKey() {
  return ['budgets', '/budgets/:budget_id/transactions', 'PATCH'] as const
}

export function usePatchBudgetsBudgetIdTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBudgetsBudgetIdTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>
        },
      ) => parseResponse(client.budgets[':budget_id'].transactions.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBudgetsBudgetIdTransactionsBulkKey() {
  return ['budgets', '/budgets/:budget_id/transactions/bulk', 'POST'] as const
}

export function usePostBudgetsBudgetIdTransactionsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBudgetsBudgetIdTransactionsBulkKey()
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
            (typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']
          >
        },
      ) => parseResponse(client.budgets[':budget_id'].transactions.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBudgetsBudgetIdTransactionsImportKey() {
  return ['budgets', '/budgets/:budget_id/transactions/import', 'POST'] as const
}

export function usePostBudgetsBudgetIdTransactionsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBudgetsBudgetIdTransactionsImportKey()
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
            (typeof client.budgets)[':budget_id']['transactions']['import']['$post']
          >
        },
      ) =>
        parseResponse(client.budgets[':budget_id'].transactions.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBudgetsBudgetIdTransactionsTransactionIdKey(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
) {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', args] as const
}

export function useGetBudgetsBudgetIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdTransactionsTransactionIdKey(args)
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
                (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
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
          client.budgets[':budget_id'].transactions[':transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBudgetsBudgetIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBudgetsBudgetIdTransactionsTransactionIdKey(args)
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
                (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
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
          client.budgets[':budget_id'].transactions[':transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBudgetsBudgetIdTransactionsTransactionIdKey() {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', 'PUT'] as const
}

export function usePutBudgetsBudgetIdTransactionsTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBudgetsBudgetIdTransactionsTransactionIdKey()
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
            (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.budgets[':budget_id'].transactions[':transaction_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBudgetsBudgetIdTransactionsTransactionIdKey() {
  return ['budgets', '/budgets/:budget_id/transactions/:transaction_id', 'DELETE'] as const
}

export function useDeleteBudgetsBudgetIdTransactionsTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBudgetsBudgetIdTransactionsTransactionIdKey()
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
            (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.budgets[':budget_id'].transactions[':transaction_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
