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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2AccountsPremiumIdTransactionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/premium/:id/transactions/', toValue(args)] as const
}

export function getApiV2AccountsPremiumIdTransactionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsPremiumIdTransactionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts.premium[':id'].transactions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AccountsPremiumIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
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
                    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
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
                    (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsPremiumIdTransactionsIndexQueryKey>
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
              (typeof client.api.v2.accounts.premium)[':id']['transactions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsPremiumIdTransactionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsPremiumIdTransactionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts.premium[':id'].transactions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/accounts/:id/', toValue(args)] as const
}

export function getApiV2AccountsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AccountsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsIdBalancesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/accounts/:id/balances/', toValue(args)] as const
}

export function getApiV2AccountsIdBalancesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsIdBalancesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':id'].balances.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AccountsIdBalancesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
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
                  ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsIdBalancesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['balances']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdBalancesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsIdBalancesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':id'].balances.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsIdDetailsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/accounts/:id/details/', toValue(args)] as const
}

export function getApiV2AccountsIdDetailsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsIdDetailsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':id'].details.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AccountsIdDetailsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
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
                  ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsIdDetailsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['details']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdDetailsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsIdDetailsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':id'].details.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsIdTransactionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/accounts/:id/transactions/', toValue(args)] as const
}

export function getApiV2AccountsIdTransactionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsIdTransactionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':id'].transactions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AccountsIdTransactionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
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
                    (typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']
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
                    (typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsIdTransactionsIndexQueryKey>
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
            ReturnType<(typeof client.api.v2.accounts)[':id']['transactions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsIdTransactionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsIdTransactionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':id'].transactions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AgreementsEnduserIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>>,
) {
  return ['api', '/api/v2/agreements/enduser/', toValue(args)] as const
}

export function getApiV2AgreementsEnduserIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgreementsEnduserIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agreements.enduser.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgreementsEnduserIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.agreements.enduser.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2AgreementsEnduserIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgreementsEnduserIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgreementsEnduserIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agreements.enduser.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2AgreementsEnduserIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/', 'POST'] as const
}

export function getPostApiV2AgreementsEnduserIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2AgreementsEnduserIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>) {
      return parseResponse(client.api.v2.agreements.enduser.index.$post(args, options))
    },
  })
}

export function usePostApiV2AgreementsEnduserIndex<
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
                Awaited<ReturnType<typeof client.api.v2.agreements.enduser.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.agreements.enduser.index.$post>,
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
  const mutationDefaults = getPostApiV2AgreementsEnduserIndexMutationOptions<
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

export function getApiV2AgreementsEnduserIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/agreements/enduser/:id/', toValue(args)] as const
}

export function getApiV2AgreementsEnduserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgreementsEnduserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.agreements.enduser[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgreementsEnduserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>
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
                  ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AgreementsEnduserIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgreementsEnduserIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgreementsEnduserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.agreements.enduser[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV2AgreementsEnduserIdIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/:id/', 'DELETE'] as const
}

export function getDeleteApiV2AgreementsEnduserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2AgreementsEnduserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.agreements.enduser[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteApiV2AgreementsEnduserIdIndex<
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
                  ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['index']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2AgreementsEnduserIdIndexMutationOptions<
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

export function getPutApiV2AgreementsEnduserIdAcceptIndexMutationKey() {
  return ['api', '/api/v2/agreements/enduser/:id/accept/', 'PUT'] as const
}

export function getPutApiV2AgreementsEnduserIdAcceptIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2AgreementsEnduserIdAcceptIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
      >,
    ) {
      return parseResponse(client.api.v2.agreements.enduser[':id'].accept.index.$put(args, options))
    },
  })
}

export function usePutApiV2AgreementsEnduserIdAcceptIndex<
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
                    (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.agreements.enduser)[':id']['accept']['index']['$put']
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
  const mutationDefaults = getPutApiV2AgreementsEnduserIdAcceptIndexMutationOptions<
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

export function getApiV2InstitutionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.institutions.index.$get>>,
) {
  return ['api', '/api/v2/institutions/', toValue(args)] as const
}

export function getApiV2InstitutionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.institutions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2InstitutionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.institutions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2InstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.institutions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2InstitutionsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.institutions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2InstitutionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2InstitutionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.institutions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2InstitutionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/institutions/:id/', toValue(args)] as const
}

export function getApiV2InstitutionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2InstitutionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.institutions[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2InstitutionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.institutions)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2InstitutionsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.institutions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2InstitutionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2InstitutionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.institutions[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PaymentsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.index.$get>>,
) {
  return ['api', '/api/v2/payments/', toValue(args)] as const
}

export function getApiV2PaymentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PaymentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PaymentsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PaymentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2PaymentsIndexMutationKey() {
  return ['api', '/api/v2/payments/', 'POST'] as const
}

export function getPostApiV2PaymentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.payments.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PaymentsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.payments.index.$post>) {
      return parseResponse(client.api.v2.payments.index.$post(args, options))
    },
  })
}

export function usePostApiV2PaymentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.payments.index.$post>,
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
  const mutationDefaults = getPostApiV2PaymentsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2PaymentsAccountIndexQueryKey() {
  return ['api', '/api/v2/payments/account/'] as const
}

export function getApiV2PaymentsAccountIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2PaymentsAccountIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments.account.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsAccountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PaymentsAccountIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.account.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsAccountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2PaymentsAccountIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments.account.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PaymentsCreditorsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.creditors.index.$get>>,
) {
  return ['api', '/api/v2/payments/creditors/', toValue(args)] as const
}

export function getApiV2PaymentsCreditorsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.creditors.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PaymentsCreditorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments.creditors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsCreditorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.payments.creditors.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2PaymentsCreditorsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsCreditorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PaymentsCreditorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments.creditors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2PaymentsCreditorsIndexMutationKey() {
  return ['api', '/api/v2/payments/creditors/', 'POST'] as const
}

export function getPostApiV2PaymentsCreditorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.payments.creditors.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2PaymentsCreditorsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.payments.creditors.index.$post>) {
      return parseResponse(client.api.v2.payments.creditors.index.$post(args, options))
    },
  })
}

export function usePostApiV2PaymentsCreditorsIndex<
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
                Awaited<ReturnType<typeof client.api.v2.payments.creditors.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.payments.creditors.index.$post>,
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
  const mutationDefaults = getPostApiV2PaymentsCreditorsIndexMutationOptions<
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

export function getApiV2PaymentsCreditorsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/payments/creditors/:id/', toValue(args)] as const
}

export function getApiV2PaymentsCreditorsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PaymentsCreditorsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments.creditors[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsCreditorsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>
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
                  ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PaymentsCreditorsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsCreditorsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PaymentsCreditorsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments.creditors[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV2PaymentsCreditorsIdIndexMutationKey() {
  return ['api', '/api/v2/payments/creditors/:id/', 'DELETE'] as const
}

export function getDeleteApiV2PaymentsCreditorsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PaymentsCreditorsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.payments.creditors[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteApiV2PaymentsCreditorsIdIndex<
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
                    ReturnType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.payments.creditors)[':id']['index']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2PaymentsCreditorsIdIndexMutationOptions<
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

export function getApiV2PaymentsFieldsInstitutionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/payments/fields/:institution_id/', toValue(args)] as const
}

export function getApiV2PaymentsFieldsInstitutionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PaymentsFieldsInstitutionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments.fields[':institution_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsFieldsInstitutionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
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
                    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
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
                    (typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2PaymentsFieldsInstitutionIdIndexQueryKey>
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
            ReturnType<(typeof client.api.v2.payments.fields)[':institution_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsFieldsInstitutionIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PaymentsFieldsInstitutionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments.fields[':institution_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PaymentsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>>,
) {
  return ['api', '/api/v2/payments/:id/', toValue(args)] as const
}

export function getApiV2PaymentsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PaymentsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.payments[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PaymentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PaymentsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PaymentsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PaymentsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.payments[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV2PaymentsIdIndexMutationKey() {
  return ['api', '/api/v2/payments/:id/', 'DELETE'] as const
}

export function getDeleteApiV2PaymentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2PaymentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.payments[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteApiV2PaymentsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.payments)[':id']['index']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.payments)[':id']['index']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2PaymentsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2RequisitionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.requisitions.index.$get>>,
) {
  return ['api', '/api/v2/requisitions/', toValue(args)] as const
}

export function getApiV2RequisitionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.requisitions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RequisitionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.requisitions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RequisitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.requisitions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV2RequisitionsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RequisitionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RequisitionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.requisitions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2RequisitionsIndexMutationKey() {
  return ['api', '/api/v2/requisitions/', 'POST'] as const
}

export function getPostApiV2RequisitionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.requisitions.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.requisitions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2RequisitionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.requisitions.index.$post>) {
      return parseResponse(client.api.v2.requisitions.index.$post(args, options))
    },
  })
}

export function usePostApiV2RequisitionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.requisitions.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.requisitions.index.$post>,
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
  const mutationDefaults = getPostApiV2RequisitionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2RequisitionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/requisitions/:id/', toValue(args)] as const
}

export function getApiV2RequisitionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RequisitionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.requisitions[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RequisitionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2RequisitionsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RequisitionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RequisitionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.requisitions[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV2RequisitionsIdIndexMutationKey() {
  return ['api', '/api/v2/requisitions/:id/', 'DELETE'] as const
}

export function getDeleteApiV2RequisitionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2RequisitionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v2.requisitions[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteApiV2RequisitionsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.requisitions)[':id']['index']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2RequisitionsIdIndexMutationOptions<
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

export function getPostApiV2TokenNewIndexMutationKey() {
  return ['api', '/api/v2/token/new/', 'POST'] as const
}

export function getPostApiV2TokenNewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.new.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.token.new.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TokenNewIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.token.new.index.$post>) {
      return parseResponse(client.api.v2.token.new.index.$post(args, options))
    },
  })
}

export function usePostApiV2TokenNewIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.new.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.token.new.index.$post>,
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
  const mutationDefaults = getPostApiV2TokenNewIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV2TokenRefreshIndexMutationKey() {
  return ['api', '/api/v2/token/refresh/', 'POST'] as const
}

export function getPostApiV2TokenRefreshIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.token.refresh.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v2.token.refresh.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2TokenRefreshIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.token.refresh.index.$post>) {
      return parseResponse(client.api.v2.token.refresh.index.$post(args, options))
    },
  })
}

export function usePostApiV2TokenRefreshIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v2.token.refresh.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.token.refresh.index.$post>,
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
  const mutationDefaults = getPostApiV2TokenRefreshIndexMutationOptions<TError, TOnMutateResult>(
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
