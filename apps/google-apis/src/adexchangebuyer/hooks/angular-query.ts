import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAccountsIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
) {
  return ['accounts', '/accounts/:id', args] as const
}

export function getAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.accounts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdQueryKey>
  >({
    queryKey: getAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBillinginfoQueryKey(args: InferRequestType<typeof client.billinginfo.$get>) {
  return ['billinginfo', '/billinginfo', args] as const
}

export function getBillinginfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.billinginfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillinginfoQueryKey>
  >({
    queryKey: getBillinginfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billinginfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBillinginfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.billinginfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillinginfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillinginfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBillinginfoAccountIdQueryKey(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
) {
  return ['billinginfo', '/billinginfo/:accountId', args] as const
}

export function getBillinginfoAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillinginfoAccountIdQueryKey>
  >({
    queryKey: getBillinginfoAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billinginfo[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBillinginfoAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillinginfoAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillinginfoAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBillinginfoAccountIdBillingIdQueryKey(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
) {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', args] as const
}

export function getBillinginfoAccountIdBillingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBillinginfoAccountIdBillingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billinginfo[':accountId'][':billingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBillinginfoAccountIdBillingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillinginfoAccountIdBillingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBillinginfoAccountIdBillingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillinginfoAccountIdBillingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBillinginfoAccountIdBillingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBillinginfoAccountIdBillingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreativesQueryKey(args: InferRequestType<typeof client.creatives.$get>) {
  return ['creatives', '/creatives', args] as const
}

export function getCreativesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.creatives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreativesQueryKey>
  >({
    queryKey: getCreativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creatives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreatives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.creatives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreativesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreativesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCreatives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.creatives.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreativesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreativesAccountIdBuyerCreativeIdQueryKey(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId', args] as const
}

export function getCreativesAccountIdBuyerCreativeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCreativesAccountIdBuyerCreativeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreativesAccountIdBuyerCreativeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCreativesAccountIdBuyerCreativeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCreativesAccountIdBuyerCreativeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCreativesAccountIdBuyerCreativeIdAddDealDealId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreativesAccountIdBuyerCreativeIdListDealsQueryKey(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/listDeals', args] as const
}

export function getCreativesAccountIdBuyerCreativeIdListDealsQueryOptions<
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
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCreativesAccountIdBuyerCreativeIdListDealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreativesAccountIdBuyerCreativeIdListDeals<
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
  args: () => InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCreativesAccountIdBuyerCreativeIdListDealsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCreativesAccountIdBuyerCreativeIdRemoveDealDealId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPerformancereportQueryKey(
  args: InferRequestType<typeof client.performancereport.$get>,
) {
  return ['performancereport', '/performancereport', args] as const
}

export function getPerformancereportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.performancereport.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPerformancereportQueryKey>
  >({
    queryKey: getPerformancereportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.performancereport.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPerformancereport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.performancereport.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPerformancereportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPerformancereportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPretargetingconfigsAccountIdQueryKey(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
) {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId', args] as const
}

export function getPretargetingconfigsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPretargetingconfigsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPretargetingconfigsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPretargetingconfigsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPretargetingconfigsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPretargetingconfigsAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPretargetingconfigsAccountIdConfigIdQueryKey(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
) {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', args] as const
}

export function getPretargetingconfigsAccountIdConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPretargetingconfigsAccountIdConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pretargetingconfigs[':accountId'][':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPretargetingconfigsAccountIdConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPretargetingconfigsAccountIdConfigIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutPretargetingconfigsAccountIdConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPretargetingconfigsAccountIdConfigIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePretargetingconfigsAccountIdConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePretargetingconfigsAccountIdConfigIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPretargetingconfigsAccountIdConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPretargetingconfigsAccountIdConfigIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPrivateauctionPrivateAuctionIdUpdateproposal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPrivateauctionPrivateAuctionIdUpdateproposalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProductsSearchQueryKey(
  args: InferRequestType<typeof client.products.search.$get>,
) {
  return ['products', '/products/search', args] as const
}

export function getProductsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsSearchQueryKey>
  >({
    queryKey: getProductsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsProductIdQueryKey(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
) {
  return ['products', '/products/:productId', args] as const
}

export function getProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsProductIdQueryKey>
  >({
    queryKey: getProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsProductIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProposalsInsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.proposals.insert.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.proposals.insert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsInsertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProposalsSearchQueryKey(
  args: InferRequestType<typeof client.proposals.search.$get>,
) {
  return ['proposals', '/proposals/search', args] as const
}

export function getProposalsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.proposals.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsSearchQueryKey>
  >({
    queryKey: getProposalsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proposals.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProposalsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.proposals.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProposalsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProposalsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProposalsProposalIdQueryKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId', args] as const
}

export function getProposalsProposalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProposalsProposalIdQueryKey>
  >({
    queryKey: getProposalsProposalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proposals[':proposalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProposalsProposalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProposalsProposalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProposalsProposalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProposalsProposalIdDealsQueryKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId/deals', args] as const
}

export function getProposalsProposalIdDealsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProposalsProposalIdDealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proposals[':proposalId'].deals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProposalsProposalIdDeals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProposalsProposalIdDealsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProposalsProposalIdDealsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsProposalIdDealsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProposalsProposalIdDealsInsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsProposalIdDealsInsertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProposalsProposalIdDealsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsProposalIdDealsUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProposalsProposalIdNotesQueryKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId/notes', args] as const
}

export function getProposalsProposalIdNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProposalsProposalIdNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proposals[':proposalId'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProposalsProposalIdNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProposalsProposalIdNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProposalsProposalIdNotesInsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsProposalIdNotesInsertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProposalsProposalIdSetupcomplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProposalsProposalIdSetupcompleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutProposalsProposalIdRevisionNumberUpdateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchProposalsProposalIdRevisionNumberUpdateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProposalsProposalIdRevisionNumberUpdateActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPublisherAccountIdProfilesQueryKey(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
) {
  return ['publisher', '/publisher/:accountId/profiles', args] as const
}

export function getPublisherAccountIdProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPublisherAccountIdProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publisher[':accountId'].profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPublisherAccountIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPublisherAccountIdProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
