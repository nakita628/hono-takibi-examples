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

export function getAdclientsKey() {
  return ['adclients'] as const
}

export function getAssociationsessionsKey() {
  return ['associationsessions'] as const
}

export function getReportsKey() {
  return ['reports'] as const
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

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
) {
  return ['accounts', '/accounts/:accountId', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdAdclients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsAdClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdAdclientsAdClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':accountId']['adclients'][':adClientId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdAdclientsAdClientIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
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
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PUT'] as const
}

export function getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAccountIdAdclientsAdClientIdAdunits<
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$put']
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
  const mutationDefaults = getPutAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
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

export function getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'POST'] as const
}

export function getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$post(args, options),
      )
    },
  })
}

export function usePostAccountsAccountIdAdclientsAdClientIdAdunits<
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$post']
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
  const mutationDefaults = getPostAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
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

export function getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey() {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', 'PATCH'] as const
}

export function getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$patch(args, options),
      )
    },
  })
}

export function usePatchAccountsAccountIdAdclientsAdClientIdAdunits<
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$patch']
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
  const mutationDefaults = getPatchAccountsAccountIdAdclientsAdClientIdAdunitsMutationOptions<
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

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
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
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationKey() {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$delete']
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
  const mutationDefaults =
    getDeleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdMutationOptions<
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

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/adcode',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
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
                    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
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
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/reports', toValue(args)] as const
}

export function getAccountsAccountIdReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
) {
  return ['adclients', '/adclients', toValue(args)] as const
}

export function getAdclientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
          >,
          ReturnType<typeof getAdclientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdclientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adclients)[':adClientId']['$get']>>,
) {
  return ['adclients', '/adclients/:adClientId', toValue(args)] as const
}

export function getAdclientsAdClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adclients)[':adClientId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdclientsAdClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adclients)[':adClientId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.adclients)[':adClientId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdCustomchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/customchannels', toValue(args)] as const
}

export function getAdclientsAdClientIdCustomchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdCustomchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdclientsAdClientIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
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
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdCustomchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].customchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PUT'] as const
}

export function getPutAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$put(args, options))
    },
  })
}

export function usePutAdclientsAdClientIdCustomchannels<
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
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$put']>,
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
  const mutationDefaults = getPutAdclientsAdClientIdCustomchannelsMutationOptions<
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

export function getPostAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'POST'] as const
}

export function getPostAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$post(args, options))
    },
  })
}

export function usePostAdclientsAdClientIdCustomchannels<
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
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$post']>,
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
  const mutationDefaults = getPostAdclientsAdClientIdCustomchannelsMutationOptions<
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

export function getPatchAdclientsAdClientIdCustomchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels', 'PATCH'] as const
}

export function getPatchAdclientsAdClientIdCustomchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdclientsAdClientIdCustomchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].customchannels.$patch(args, options))
    },
  })
}

export function usePatchAdclientsAdClientIdCustomchannels<
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
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$patch']>,
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
  const mutationDefaults = getPatchAdclientsAdClientIdCustomchannelsMutationOptions<
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

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/customchannels/:customChannelId',
    toValue(args),
  ] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdclientsAdClientIdCustomchannelsCustomChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
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
                    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
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
                    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
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
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].customchannels[':customChannelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationKey() {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', 'DELETE'] as const
}

export function getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdclientsAdClientIdCustomchannelsCustomChannelId<
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
                    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$delete']
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
  const mutationDefaults = getDeleteAdclientsAdClientIdCustomchannelsCustomChannelIdMutationOptions<
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

export function getAdclientsAdClientIdUrlchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/urlchannels', toValue(args)] as const
}

export function getAdclientsAdClientIdUrlchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdUrlchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdclientsAdClientIdUrlchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdUrlchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].urlchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdclientsAdClientIdUrlchannelsMutationKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels', 'POST'] as const
}

export function getPostAdclientsAdClientIdUrlchannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdclientsAdClientIdUrlchannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
    ) {
      return parseResponse(client.adclients[':adClientId'].urlchannels.$post(args, options))
    },
  })
}

export function usePostAdclientsAdClientIdUrlchannels<
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
                  ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$post']>,
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
  const mutationDefaults = getPostAdclientsAdClientIdUrlchannelsMutationOptions<
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

export function getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationKey() {
  return ['adclients', '/adclients/:adClientId/urlchannels/:urlChannelId', 'DELETE'] as const
}

export function getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels[':urlChannelId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdclientsAdClientIdUrlchannelsUrlChannelId<
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
                    (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.adclients)[':adClientId']['urlchannels'][':urlChannelId']['$delete']
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
  const mutationDefaults = getDeleteAdclientsAdClientIdUrlchannelsUrlChannelIdMutationOptions<
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

export function getAssociationsessionsStartQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.start.$get>>,
) {
  return ['associationsessions', '/associationsessions/start', toValue(args)] as const
}

export function getAssociationsessionsStartQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.start.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsessionsStartQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associationsessions.start.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsessionsStart<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.start.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.associationsessions.start.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.associationsessions.start.$get>>
              >
            >
          >,
          ReturnType<typeof getAssociationsessionsStartQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.start.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsessionsStartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsessionsStartQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associationsessions.start.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsessionsVerifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.verify.$get>>,
) {
  return ['associationsessions', '/associationsessions/verify', toValue(args)] as const
}

export function getAssociationsessionsVerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.verify.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsessionsVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associationsessions.verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsessionsVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associationsessions.verify.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.associationsessions.verify.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.associationsessions.verify.$get>>
              >
            >
          >,
          ReturnType<typeof getAssociationsessionsVerifyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.associationsessions.verify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsessionsVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsessionsVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associationsessions.verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
) {
  return ['reports', '/reports', toValue(args)] as const
}

export function getReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
