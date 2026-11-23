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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getUtilKey() {
  return ['util'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/transactions', toValue(args)] as const
}

export function getAccountsAccountIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
) {
  return ['accounts', '/accounts/:id', toValue(args)] as const
}

export function getAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAccountsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  return ['categories', '/categories', toValue(args)] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
) {
  return ['categories', '/categories/:id', toValue(args)] as const
}

export function getCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCategoriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  return ['transactions', '/transactions', toValue(args)] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
) {
  return ['transactions', '/transactions/:id', toValue(args)] as const
}

export function getTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchTransactionsTransactionIdRelationshipsCategoryMutationKey() {
  return ['transactions', '/transactions/:transactionId/relationships/category', 'PATCH'] as const
}

export function getPatchTransactionsTransactionIdRelationshipsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTransactionsTransactionIdRelationshipsCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
      >,
    ) {
      return parseResponse(
        client.transactions[':transactionId'].relationships.category.$patch(args, options),
      )
    },
  })
}

export function usePatchTransactionsTransactionIdRelationshipsCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
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
  const mutationDefaults = getPatchTransactionsTransactionIdRelationshipsCategoryMutationOptions<
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

export function getPostTransactionsTransactionIdRelationshipsTagsMutationKey() {
  return ['transactions', '/transactions/:transactionId/relationships/tags', 'POST'] as const
}

export function getPostTransactionsTransactionIdRelationshipsTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsTransactionIdRelationshipsTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.transactions[':transactionId'].relationships.tags.$post(args, options),
      )
    },
  })
}

export function usePostTransactionsTransactionIdRelationshipsTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
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
  const mutationDefaults = getPostTransactionsTransactionIdRelationshipsTagsMutationOptions<
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

export function getDeleteTransactionsTransactionIdRelationshipsTagsMutationKey() {
  return ['transactions', '/transactions/:transactionId/relationships/tags', 'DELETE'] as const
}

export function getDeleteTransactionsTransactionIdRelationshipsTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionsTransactionIdRelationshipsTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
      >,
    ) {
      return parseResponse(
        client.transactions[':transactionId'].relationships.tags.$delete(args, options),
      )
    },
  })
}

export function useDeleteTransactionsTransactionIdRelationshipsTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
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
  const mutationDefaults = getDeleteTransactionsTransactionIdRelationshipsTagsMutationOptions<
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

export function getUtilPingQueryKey() {
  return ['util', '/util/ping'] as const
}

export function getUtilPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUtilPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.util.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUtilPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.util.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.util.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.util.ping.$get>>>>
          >,
          ReturnType<typeof getUtilPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.util.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUtilPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUtilPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.util.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id', toValue(args)] as const
}

export function getWebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWebhooksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksWebhookIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhookId/logs', toValue(args)] as const
}

export function getWebhooksWebhookIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksWebhookIdPingMutationKey() {
  return ['webhooks', '/webhooks/:webhookId/ping', 'POST'] as const
}

export function getPostWebhooksWebhookIdPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['ping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['ping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdPingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhookId']['ping']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhookId'].ping.$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['ping']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['ping']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdPingMutationOptions<TError, TOnMutateResult>(
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
