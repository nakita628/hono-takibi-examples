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

export function getBillinginfoKey() {
  return ['billinginfo'] as const
}

export function getCreativesKey() {
  return ['creatives'] as const
}

export function getPerformancereportKey() {
  return ['performancereport'] as const
}

export function getPretargetingconfigsKey() {
  return ['pretargetingconfigs'] as const
}

export function getPrivateauctionKey() {
  return ['privateauction'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProposalsKey() {
  return ['proposals'] as const
}

export function getPublisherKey() {
  return ['publisher'] as const
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

export function getPutAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PUT'] as const
}

export function getPutAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$put']>) {
      return parseResponse(client.accounts[':id'].$put(args, options))
    },
  })
}

export function usePutAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['$put']>,
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
  const mutationDefaults = getPutAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PATCH'] as const
}

export function getPatchAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$patch']>) {
      return parseResponse(client.accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillinginfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billinginfo.$get>>,
) {
  return ['billinginfo', '/billinginfo', toValue(args)] as const
}

export function getBillinginfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billinginfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillinginfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billinginfo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBillinginfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.billinginfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
          >,
          ReturnType<typeof getBillinginfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillinginfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillinginfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billinginfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillinginfoAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>>,
) {
  return ['billinginfo', '/billinginfo/:accountId', toValue(args)] as const
}

export function getBillinginfoAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillinginfoAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billinginfo[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillinginfoAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillinginfoAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillinginfoAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillinginfoAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billinginfo[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillinginfoAccountIdBillingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>
  >,
) {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', toValue(args)] as const
}

export function getBillinginfoAccountIdBillingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillinginfoAccountIdBillingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billinginfo[':accountId'][':billingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillinginfoAccountIdBillingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillinginfoAccountIdBillingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillinginfoAccountIdBillingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillinginfoAccountIdBillingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billinginfo[':accountId'][':billingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBillinginfoAccountIdBillingIdMutationKey() {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', 'PUT'] as const
}

export function getPutBillinginfoAccountIdBillingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillinginfoAccountIdBillingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>,
    ) {
      return parseResponse(client.billinginfo[':accountId'][':billingId'].$put(args, options))
    },
  })
}

export function usePutBillinginfoAccountIdBillingId<
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
                Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>,
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
  const mutationDefaults = getPutBillinginfoAccountIdBillingIdMutationOptions<
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

export function getPatchBillinginfoAccountIdBillingIdMutationKey() {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', 'PATCH'] as const
}

export function getPatchBillinginfoAccountIdBillingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillinginfoAccountIdBillingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>,
    ) {
      return parseResponse(client.billinginfo[':accountId'][':billingId'].$patch(args, options))
    },
  })
}

export function usePatchBillinginfoAccountIdBillingId<
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
                  ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>,
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
  const mutationDefaults = getPatchBillinginfoAccountIdBillingIdMutationOptions<
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

export function getCreativesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creatives.$get>>,
) {
  return ['creatives', '/creatives', toValue(args)] as const
}

export function getCreativesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creatives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreativesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creatives.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreatives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.creatives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
          >,
          ReturnType<typeof getCreativesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreativesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreativesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creatives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCreativesMutationKey() {
  return ['creatives', '/creatives', 'POST'] as const
}

export function getPostCreativesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>>,
    TError,
    InferRequestType<typeof client.creatives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreativesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.creatives.$post>) {
      return parseResponse(client.creatives.$post(args, options))
    },
  })
}

export function usePostCreatives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.creatives.$post>,
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
  const mutationDefaults = getPostCreativesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreativesAccountIdBuyerCreativeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>
  >,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId', toValue(args)] as const
}

export function getCreativesAccountIdBuyerCreativeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreativesAccountIdBuyerCreativeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreativesAccountIdBuyerCreativeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>
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
                  ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCreativesAccountIdBuyerCreativeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreativesAccountIdBuyerCreativeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreativesAccountIdBuyerCreativeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creatives[':accountId'][':buyerCreativeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdMutationKey() {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/addDeal/:dealId', 'POST'] as const
}

export function getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
      >,
    ) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].addDeal[':dealId'].$post(args, options),
      )
    },
  })
}

export function usePostCreativesAccountIdBuyerCreativeIdAddDealDealId<
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
                    (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
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
  const mutationDefaults = getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdMutationOptions<
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

export function getCreativesAccountIdBuyerCreativeIdListDealsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
    >
  >,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/listDeals', toValue(args)] as const
}

export function getCreativesAccountIdBuyerCreativeIdListDealsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreativesAccountIdBuyerCreativeIdListDealsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreativesAccountIdBuyerCreativeIdListDeals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
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
                    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
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
                    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCreativesAccountIdBuyerCreativeIdListDealsQueryKey>
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
              (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreativesAccountIdBuyerCreativeIdListDealsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreativesAccountIdBuyerCreativeIdListDealsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdMutationKey() {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/removeDeal/:dealId', 'POST'] as const
}

export function getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
      >,
    ) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].removeDeal[':dealId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCreativesAccountIdBuyerCreativeIdRemoveDealDealId<
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
                    (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
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
  const mutationDefaults = getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdMutationOptions<
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

export function getPerformancereportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performancereport.$get>>,
) {
  return ['performancereport', '/performancereport', toValue(args)] as const
}

export function getPerformancereportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performancereport.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPerformancereportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.performancereport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePerformancereport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performancereport.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>
            >
          >,
          ReturnType<typeof getPerformancereportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPerformancereportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPerformancereportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.performancereport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPretargetingconfigsAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>
  >,
) {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId', toValue(args)] as const
}

export function getPretargetingconfigsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPretargetingconfigsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePretargetingconfigsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPretargetingconfigsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPretargetingconfigsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPretargetingconfigsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pretargetingconfigs[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPretargetingconfigsAccountIdMutationKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId', 'POST'] as const
}

export function getPostPretargetingconfigsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPretargetingconfigsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']>,
    ) {
      return parseResponse(client.pretargetingconfigs[':accountId'].$post(args, options))
    },
  })
}

export function usePostPretargetingconfigsAccountId<
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
                Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']>,
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
  const mutationDefaults = getPostPretargetingconfigsAccountIdMutationOptions<
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

export function getPretargetingconfigsAccountIdConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
  >,
) {
  return [
    'pretargetingconfigs',
    '/pretargetingconfigs/:accountId/:configId',
    toValue(args),
  ] as const
}

export function getPretargetingconfigsAccountIdConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPretargetingconfigsAccountIdConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'][':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePretargetingconfigsAccountIdConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
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
                  ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPretargetingconfigsAccountIdConfigIdQueryKey>
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
            ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPretargetingconfigsAccountIdConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPretargetingconfigsAccountIdConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPretargetingconfigsAccountIdConfigIdMutationKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'PUT'] as const
}

export function getPutPretargetingconfigsAccountIdConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPretargetingconfigsAccountIdConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']
      >,
    ) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'][':configId'].$put(args, options),
      )
    },
  })
}

export function usePutPretargetingconfigsAccountIdConfigId<
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
                  ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>,
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
  const mutationDefaults = getPutPretargetingconfigsAccountIdConfigIdMutationOptions<
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

export function getDeletePretargetingconfigsAccountIdConfigIdMutationKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'DELETE'] as const
}

export function getDeletePretargetingconfigsAccountIdConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePretargetingconfigsAccountIdConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']
      >,
    ) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'][':configId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePretargetingconfigsAccountIdConfigId<
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
                    (typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']
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
  const mutationDefaults = getDeletePretargetingconfigsAccountIdConfigIdMutationOptions<
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

export function getPatchPretargetingconfigsAccountIdConfigIdMutationKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'PATCH'] as const
}

export function getPatchPretargetingconfigsAccountIdConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPretargetingconfigsAccountIdConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']
      >,
    ) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'][':configId'].$patch(args, options),
      )
    },
  })
}

export function usePatchPretargetingconfigsAccountIdConfigId<
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
                    (typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']
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
  const mutationDefaults = getPatchPretargetingconfigsAccountIdConfigIdMutationOptions<
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

export function getPostPrivateauctionPrivateAuctionIdUpdateproposalMutationKey() {
  return ['privateauction', '/privateauction/:privateAuctionId/updateproposal', 'POST'] as const
}

export function getPostPrivateauctionPrivateAuctionIdUpdateproposalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPrivateauctionPrivateAuctionIdUpdateproposalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
      >,
    ) {
      return parseResponse(
        client.privateauction[':privateAuctionId'].updateproposal.$post(args, options),
      )
    },
  })
}

export function usePostPrivateauctionPrivateAuctionIdUpdateproposal<
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
                    (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
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
  const mutationDefaults = getPostPrivateauctionPrivateAuctionIdUpdateproposalMutationOptions<
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

export function getProductsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.search.$get>>,
) {
  return ['products', '/products/search', toValue(args)] as const
}

export function getProductsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>
            >
          >,
          ReturnType<typeof getProductsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductsProductIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
) {
  return ['products', '/products/:productId', toValue(args)] as const
}

export function getProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':productId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductsProductIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProposalsInsertMutationKey() {
  return ['proposals', '/proposals/insert', 'POST'] as const
}

export function getPostProposalsInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.insert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.proposals.insert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsInsertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proposals.insert.$post>) {
      return parseResponse(client.proposals.insert.$post(args, options))
    },
  })
}

export function usePostProposalsInsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.proposals.insert.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.proposals.insert.$post>,
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
  const mutationDefaults = getPostProposalsInsertMutationOptions<TError, TOnMutateResult>(
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

export function getProposalsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proposals.search.$get>>,
) {
  return ['proposals', '/proposals/search', toValue(args)] as const
}

export function getProposalsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proposals.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProposalsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proposals.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProposalsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proposals.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>
            >
          >,
          ReturnType<typeof getProposalsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProposalsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proposals.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProposalsProposalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.proposals)[':proposalId']['$get']>>,
) {
  return ['proposals', '/proposals/:proposalId', toValue(args)] as const
}

export function getProposalsProposalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.proposals)[':proposalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProposalsProposalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proposals[':proposalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.proposals)[':proposalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProposalsProposalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsProposalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProposalsProposalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proposals[':proposalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProposalsProposalIdDealsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>
  >,
) {
  return ['proposals', '/proposals/:proposalId/deals', toValue(args)] as const
}

export function getProposalsProposalIdDealsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProposalsProposalIdDealsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proposals[':proposalId'].deals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProposalsProposalIdDeals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProposalsProposalIdDealsQueryKey>
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
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsProposalIdDealsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProposalsProposalIdDealsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proposals[':proposalId'].deals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProposalsProposalIdDealsDeleteMutationKey() {
  return ['proposals', '/proposals/:proposalId/deals/delete', 'POST'] as const
}

export function getPostProposalsProposalIdDealsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsProposalIdDealsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>,
    ) {
      return parseResponse(client.proposals[':proposalId'].deals.delete.$post(args, options))
    },
  })
}

export function usePostProposalsProposalIdDealsDelete<
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
                  ReturnType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>,
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
  const mutationDefaults = getPostProposalsProposalIdDealsDeleteMutationOptions<
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

export function getPostProposalsProposalIdDealsInsertMutationKey() {
  return ['proposals', '/proposals/:proposalId/deals/insert', 'POST'] as const
}

export function getPostProposalsProposalIdDealsInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsProposalIdDealsInsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>,
    ) {
      return parseResponse(client.proposals[':proposalId'].deals.insert.$post(args, options))
    },
  })
}

export function usePostProposalsProposalIdDealsInsert<
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
                  ReturnType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>,
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
  const mutationDefaults = getPostProposalsProposalIdDealsInsertMutationOptions<
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

export function getPostProposalsProposalIdDealsUpdateMutationKey() {
  return ['proposals', '/proposals/:proposalId/deals/update', 'POST'] as const
}

export function getPostProposalsProposalIdDealsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsProposalIdDealsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>,
    ) {
      return parseResponse(client.proposals[':proposalId'].deals.update.$post(args, options))
    },
  })
}

export function usePostProposalsProposalIdDealsUpdate<
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
                  ReturnType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>,
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
  const mutationDefaults = getPostProposalsProposalIdDealsUpdateMutationOptions<
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

export function getProposalsProposalIdNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>
  >,
) {
  return ['proposals', '/proposals/:proposalId/notes', toValue(args)] as const
}

export function getProposalsProposalIdNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProposalsProposalIdNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proposals[':proposalId'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProposalsProposalIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProposalsProposalIdNotesQueryKey>
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
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsProposalIdNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProposalsProposalIdNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proposals[':proposalId'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProposalsProposalIdNotesInsertMutationKey() {
  return ['proposals', '/proposals/:proposalId/notes/insert', 'POST'] as const
}

export function getPostProposalsProposalIdNotesInsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsProposalIdNotesInsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>,
    ) {
      return parseResponse(client.proposals[':proposalId'].notes.insert.$post(args, options))
    },
  })
}

export function usePostProposalsProposalIdNotesInsert<
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
                  ReturnType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>,
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
  const mutationDefaults = getPostProposalsProposalIdNotesInsertMutationOptions<
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

export function getPostProposalsProposalIdSetupcompleteMutationKey() {
  return ['proposals', '/proposals/:proposalId/setupcomplete', 'POST'] as const
}

export function getPostProposalsProposalIdSetupcompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProposalsProposalIdSetupcompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>,
    ) {
      return parseResponse(client.proposals[':proposalId'].setupcomplete.$post(args, options))
    },
  })
}

export function usePostProposalsProposalIdSetupcomplete<
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
                  ReturnType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>,
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
  const mutationDefaults = getPostProposalsProposalIdSetupcompleteMutationOptions<
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

export function getPutProposalsProposalIdRevisionNumberUpdateActionMutationKey() {
  return ['proposals', '/proposals/:proposalId/:revisionNumber/:updateAction', 'PUT'] as const
}

export function getPutProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProposalsProposalIdRevisionNumberUpdateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
      >,
    ) {
      return parseResponse(
        client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$put(args, options),
      )
    },
  })
}

export function usePutProposalsProposalIdRevisionNumberUpdateAction<
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
                    (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
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
  const mutationDefaults = getPutProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
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

export function getPatchProposalsProposalIdRevisionNumberUpdateActionMutationKey() {
  return ['proposals', '/proposals/:proposalId/:revisionNumber/:updateAction', 'PATCH'] as const
}

export function getPatchProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProposalsProposalIdRevisionNumberUpdateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
      >,
    ) {
      return parseResponse(
        client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$patch(args, options),
      )
    },
  })
}

export function usePatchProposalsProposalIdRevisionNumberUpdateAction<
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
                    (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
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
  const mutationDefaults = getPatchProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
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

export function getPublisherAccountIdProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>
  >,
) {
  return ['publisher', '/publisher/:accountId/profiles', toValue(args)] as const
}

export function getPublisherAccountIdProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublisherAccountIdProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publisher[':accountId'].profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublisherAccountIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPublisherAccountIdProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublisherAccountIdProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublisherAccountIdProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publisher[':accountId'].profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
