import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAccountsIdKey(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
) {
  return ['accounts', '/accounts/:id', args] as const
}

export function useGetAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsIdKey() {
  return ['accounts', '/accounts/:id', 'PUT'] as const
}

export function usePutAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['$put']> }) =>
        parseResponse(client.accounts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsIdKey() {
  return ['accounts', '/accounts/:id', 'PATCH'] as const
}

export function usePatchAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['$patch']> },
      ) => parseResponse(client.accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillinginfoKey(args: InferRequestType<typeof client.billinginfo.$get>) {
  return ['billinginfo', '/billinginfo', args] as const
}

export function useGetBillinginfo<TError = unknown>(
  args: InferRequestType<typeof client.billinginfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillinginfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billinginfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillinginfo<TError = unknown>(
  args: InferRequestType<typeof client.billinginfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillinginfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billinginfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billinginfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillinginfoAccountIdKey(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
) {
  return ['billinginfo', '/billinginfo/:accountId', args] as const
}

export function useGetBillinginfoAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
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
        ? getGetBillinginfoAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billinginfo[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillinginfoAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
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
        ? getGetBillinginfoAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billinginfo[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillinginfoAccountIdBillingIdKey(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
) {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', args] as const
}

export function useGetBillinginfoAccountIdBillingId<TError = unknown>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
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
        ? getGetBillinginfoAccountIdBillingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billinginfo[':accountId'][':billingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillinginfoAccountIdBillingId<TError = unknown>(
  args: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
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
        ? getGetBillinginfoAccountIdBillingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billinginfo[':accountId'][':billingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillinginfoAccountIdBillingIdKey() {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', 'PUT'] as const
}

export function usePutBillinginfoAccountIdBillingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillinginfoAccountIdBillingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$put']>
        },
      ) => parseResponse(client.billinginfo[':accountId'][':billingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillinginfoAccountIdBillingIdKey() {
  return ['billinginfo', '/billinginfo/:accountId/:billingId', 'PATCH'] as const
}

export function usePatchBillinginfoAccountIdBillingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillinginfoAccountIdBillingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.billinginfo)[':accountId'][':billingId']['$patch']>
        },
      ) => parseResponse(client.billinginfo[':accountId'][':billingId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreativesKey(args: InferRequestType<typeof client.creatives.$get>) {
  return ['creatives', '/creatives', args] as const
}

export function useGetCreatives<TError = unknown>(
  args: InferRequestType<typeof client.creatives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreatives<TError = unknown>(
  args: InferRequestType<typeof client.creatives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreativesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreativesKey() {
  return ['creatives', '/creatives', 'POST'] as const
}

export function usePostCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.creatives.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.creatives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreativesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.creatives.$post> }) =>
        parseResponse(client.creatives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreativesAccountIdBuyerCreativeIdKey(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId', args] as const
}

export function useGetCreativesAccountIdBuyerCreativeId<TError = unknown>(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
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
        ? getGetCreativesAccountIdBuyerCreativeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.creatives[':accountId'][':buyerCreativeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreativesAccountIdBuyerCreativeId<TError = unknown>(
  args: InferRequestType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
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
        ? getGetCreativesAccountIdBuyerCreativeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.creatives)[':accountId'][':buyerCreativeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.creatives[':accountId'][':buyerCreativeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdKey() {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/addDeal/:dealId', 'POST'] as const
}

export function usePostCreativesAccountIdBuyerCreativeIdAddDealDealId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreativesAccountIdBuyerCreativeIdAddDealDealIdKey()
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
            (typeof client.creatives)[':accountId'][':buyerCreativeId']['addDeal'][':dealId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.creatives[':accountId'][':buyerCreativeId'].addDeal[':dealId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCreativesAccountIdBuyerCreativeIdListDealsKey(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
) {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/listDeals', args] as const
}

export function useGetCreativesAccountIdBuyerCreativeIdListDeals<TError = unknown>(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreativesAccountIdBuyerCreativeIdListDealsKey(args)
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
                (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
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
          client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreativesAccountIdBuyerCreativeIdListDeals<TError = unknown>(
  args: InferRequestType<
    (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCreativesAccountIdBuyerCreativeIdListDealsKey(args)
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
                (typeof client.creatives)[':accountId'][':buyerCreativeId']['listDeals']['$get']
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
          client.creatives[':accountId'][':buyerCreativeId'].listDeals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdKey() {
  return ['creatives', '/creatives/:accountId/:buyerCreativeId/removeDeal/:dealId', 'POST'] as const
}

export function usePostCreativesAccountIdBuyerCreativeIdRemoveDealDealId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreativesAccountIdBuyerCreativeIdRemoveDealDealIdKey()
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
            (typeof client.creatives)[':accountId'][':buyerCreativeId']['removeDeal'][':dealId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.creatives[':accountId'][':buyerCreativeId'].removeDeal[':dealId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPerformancereportKey(
  args: InferRequestType<typeof client.performancereport.$get>,
) {
  return ['performancereport', '/performancereport', args] as const
}

export function useGetPerformancereport<TError = unknown>(
  args: InferRequestType<typeof client.performancereport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
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
        ? getGetPerformancereportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performancereport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPerformancereport<TError = unknown>(
  args: InferRequestType<typeof client.performancereport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
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
        ? getGetPerformancereportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performancereport.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performancereport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPretargetingconfigsAccountIdKey(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
) {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId', args] as const
}

export function useGetPretargetingconfigsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
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
        ? getGetPretargetingconfigsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pretargetingconfigs[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPretargetingconfigsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
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
        ? getGetPretargetingconfigsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pretargetingconfigs[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPretargetingconfigsAccountIdKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId', 'POST'] as const
}

export function usePostPretargetingconfigsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pretargetingconfigs)[':accountId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPretargetingconfigsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.pretargetingconfigs)[':accountId']['$post']> },
      ) => parseResponse(client.pretargetingconfigs[':accountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPretargetingconfigsAccountIdConfigIdKey(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
) {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', args] as const
}

export function useGetPretargetingconfigsAccountIdConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
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
        ? getGetPretargetingconfigsAccountIdConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPretargetingconfigsAccountIdConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
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
        ? getGetPretargetingconfigsAccountIdConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPretargetingconfigsAccountIdConfigIdKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'PUT'] as const
}

export function usePutPretargetingconfigsAccountIdConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPretargetingconfigsAccountIdConfigIdKey()
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
            (typeof client.pretargetingconfigs)[':accountId'][':configId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePretargetingconfigsAccountIdConfigIdKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'DELETE'] as const
}

export function useDeletePretargetingconfigsAccountIdConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePretargetingconfigsAccountIdConfigIdKey()
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
            (typeof client.pretargetingconfigs)[':accountId'][':configId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPretargetingconfigsAccountIdConfigIdKey() {
  return ['pretargetingconfigs', '/pretargetingconfigs/:accountId/:configId', 'PATCH'] as const
}

export function usePatchPretargetingconfigsAccountIdConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPretargetingconfigsAccountIdConfigIdKey()
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
            (typeof client.pretargetingconfigs)[':accountId'][':configId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.pretargetingconfigs[':accountId'][':configId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPrivateauctionPrivateAuctionIdUpdateproposalKey() {
  return ['privateauction', '/privateauction/:privateAuctionId/updateproposal', 'POST'] as const
}

export function usePostPrivateauctionPrivateAuctionIdUpdateproposal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrivateauctionPrivateAuctionIdUpdateproposalKey()
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
            (typeof client.privateauction)[':privateAuctionId']['updateproposal']['$post']
          >
        },
      ) =>
        parseResponse(
          client.privateauction[':privateAuctionId'].updateproposal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProductsSearchKey(
  args: InferRequestType<typeof client.products.search.$get>,
) {
  return ['products', '/products/search', args] as const
}

export function useGetProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsProductIdKey(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
) {
  return ['products', '/products/:productId', args] as const
}

export function useGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
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
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
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
        ? getGetProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProposalsInsertKey() {
  return ['proposals', '/proposals/insert', 'POST'] as const
}

export function usePostProposalsInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.insert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.proposals.insert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsInsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proposals.insert.$post> }) =>
        parseResponse(client.proposals.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProposalsSearchKey(
  args: InferRequestType<typeof client.proposals.search.$get>,
) {
  return ['proposals', '/proposals/search', args] as const
}

export function useGetProposalsSearch<TError = unknown>(
  args: InferRequestType<typeof client.proposals.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
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
        ? getGetProposalsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProposalsSearch<TError = unknown>(
  args: InferRequestType<typeof client.proposals.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
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
        ? getGetProposalsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proposals.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProposalsProposalIdKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId', args] as const
}

export function useGetProposalsProposalId<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
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
        ? getGetProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProposalsProposalId<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
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
        ? getGetProposalsProposalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProposalsProposalIdDealsKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId/deals', args] as const
}

export function useGetProposalsProposalIdDeals<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
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
        ? getGetProposalsProposalIdDealsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].deals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProposalsProposalIdDeals<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['deals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
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
        ? getGetProposalsProposalIdDealsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].deals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProposalsProposalIdDealsDeleteKey() {
  return ['proposals', '/proposals/:proposalId/deals/delete', 'POST'] as const
}

export function usePostProposalsProposalIdDealsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsProposalIdDealsDeleteKey()
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
            (typeof client.proposals)[':proposalId']['deals']['delete']['$post']
          >
        },
      ) => parseResponse(client.proposals[':proposalId'].deals.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProposalsProposalIdDealsInsertKey() {
  return ['proposals', '/proposals/:proposalId/deals/insert', 'POST'] as const
}

export function usePostProposalsProposalIdDealsInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['insert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsProposalIdDealsInsertKey()
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
            (typeof client.proposals)[':proposalId']['deals']['insert']['$post']
          >
        },
      ) => parseResponse(client.proposals[':proposalId'].deals.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProposalsProposalIdDealsUpdateKey() {
  return ['proposals', '/proposals/:proposalId/deals/update', 'POST'] as const
}

export function usePostProposalsProposalIdDealsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proposals)[':proposalId']['deals']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsProposalIdDealsUpdateKey()
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
            (typeof client.proposals)[':proposalId']['deals']['update']['$post']
          >
        },
      ) => parseResponse(client.proposals[':proposalId'].deals.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProposalsProposalIdNotesKey(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
) {
  return ['proposals', '/proposals/:proposalId/notes', args] as const
}

export function useGetProposalsProposalIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
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
        ? getGetProposalsProposalIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProposalsProposalIdNotes<TError = unknown>(
  args: InferRequestType<(typeof client.proposals)[':proposalId']['notes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
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
        ? getGetProposalsProposalIdNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proposals[':proposalId'].notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProposalsProposalIdNotesInsertKey() {
  return ['proposals', '/proposals/:proposalId/notes/insert', 'POST'] as const
}

export function usePostProposalsProposalIdNotesInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proposals)[':proposalId']['notes']['insert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsProposalIdNotesInsertKey()
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
            (typeof client.proposals)[':proposalId']['notes']['insert']['$post']
          >
        },
      ) => parseResponse(client.proposals[':proposalId'].notes.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProposalsProposalIdSetupcompleteKey() {
  return ['proposals', '/proposals/:proposalId/setupcomplete', 'POST'] as const
}

export function usePostProposalsProposalIdSetupcomplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProposalsProposalIdSetupcompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.proposals)[':proposalId']['setupcomplete']['$post']>
        },
      ) => parseResponse(client.proposals[':proposalId'].setupcomplete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProposalsProposalIdRevisionNumberUpdateActionKey() {
  return ['proposals', '/proposals/:proposalId/:revisionNumber/:updateAction', 'PUT'] as const
}

export function usePutProposalsProposalIdRevisionNumberUpdateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProposalsProposalIdRevisionNumberUpdateActionKey()
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
            (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$put']
          >
        },
      ) =>
        parseResponse(
          client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProposalsProposalIdRevisionNumberUpdateActionKey() {
  return ['proposals', '/proposals/:proposalId/:revisionNumber/:updateAction', 'PATCH'] as const
}

export function usePatchProposalsProposalIdRevisionNumberUpdateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProposalsProposalIdRevisionNumberUpdateActionKey()
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
            (typeof client.proposals)[':proposalId'][':revisionNumber'][':updateAction']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.proposals[':proposalId'][':revisionNumber'][':updateAction'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublisherAccountIdProfilesKey(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
) {
  return ['publisher', '/publisher/:accountId/profiles', args] as const
}

export function useGetPublisherAccountIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
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
        ? getGetPublisherAccountIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publisher[':accountId'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublisherAccountIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.publisher)[':accountId']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
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
        ? getGetPublisherAccountIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.publisher)[':accountId']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publisher[':accountId'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
