import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAccountstatusesKey() {
  return ['accountstatuses'] as const
}

export function getAccounttaxKey() {
  return ['accounttax'] as const
}

export function getDatafeedsKey() {
  return ['datafeeds'] as const
}

export function getDatafeedstatusesKey() {
  return ['datafeedstatuses'] as const
}

export function getLiasettingsKey() {
  return ['liasettings'] as const
}

export function getLocalinventoryKey() {
  return ['localinventory'] as const
}

export function getPosKey() {
  return ['pos'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProductstatusesKey() {
  return ['productstatuses'] as const
}

export function getRegionalinventoryKey() {
  return ['regionalinventory'] as const
}

export function getReturnaddressKey() {
  return ['returnaddress'] as const
}

export function getReturnpolicyKey() {
  return ['returnpolicy'] as const
}

export function getShippingsettingsKey() {
  return ['shippingsettings'] as const
}

export function getCssGroupIdKey() {
  return ['{cssGroupId}'] as const
}

export function getMerchantIdKey() {
  return ['{merchantId}'] as const
}

export function getAccountsAuthinfoQueryKey(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
) {
  return ['accounts', '/accounts/authinfo', args] as const
}

export function getAccountsAuthinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.authinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAuthinfoQueryKey>
  >({
    queryKey: getAccountsAuthinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.authinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountsAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAuthinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAuthinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.authinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAuthinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAuthinfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountsBatchMutationKey() {
  return ['accounts', '/accounts/batch', 'POST'] as const
}

export function getPostAccountsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.batch.$post>) {
      return parseResponse(client.accounts.batch.$post(args, options))
    },
  })
}

export function usePostAccountsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsAccountIdCredentialsMutationKey() {
  return ['accounts', '/accounts/:accountId/credentials', 'POST'] as const
}

export function getPostAccountsAccountIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].credentials.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdCredentialsMutationOptions<
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

export function getAccountsAccountIdLabelsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/labels', args] as const
}

export function getAccountsAccountIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdLabelsQueryKey>
  >({
    queryKey: getAccountsAccountIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdLabelsQueryKey>
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
      ...getAccountsAccountIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdLabelsQueryKey>
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
      ...getAccountsAccountIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdLabelsMutationKey() {
  return ['accounts', '/accounts/:accountId/labels', 'POST'] as const
}

export function getPostAccountsAccountIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].labels.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdLabelsLabelIdMutationKey() {
  return ['accounts', '/accounts/:accountId/labels/:labelId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].labels[':labelId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountIdLabelsLabelId<
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
                ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdLabelsLabelIdMutationOptions<
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

export function getPatchAccountsAccountIdLabelsLabelIdMutationKey() {
  return ['accounts', '/accounts/:accountId/labels/:labelId', 'PATCH'] as const
}

export function getPatchAccountsAccountIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].labels[':labelId'].$patch(args, options))
    },
  })
}

export function usePatchAccountsAccountIdLabelsLabelId<
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
                ReturnType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdLabelsLabelIdMutationOptions<
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

export function getAccountsAccountIdReturncarrierQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/returncarrier', args] as const
}

export function getAccountsAccountIdReturncarrierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReturncarrierQueryKey>
  >({
    queryKey: getAccountsAccountIdReturncarrierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].returncarrier.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountIdReturncarrier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReturncarrierQueryKey>
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
      ...getAccountsAccountIdReturncarrierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdReturncarrier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReturncarrierQueryKey>
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
      ...getAccountsAccountIdReturncarrierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdReturncarrierMutationKey() {
  return ['accounts', '/accounts/:accountId/returncarrier', 'POST'] as const
}

export function getPostAccountsAccountIdReturncarrierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdReturncarrierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountId'].returncarrier.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdReturncarrier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdReturncarrierMutationOptions<
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

export function getDeleteAccountsAccountIdReturncarrierCarrierAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId/returncarrier/:carrierAccountId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdReturncarrierCarrierAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdReturncarrierCarrierAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].returncarrier[':carrierAccountId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAccountIdReturncarrierCarrierAccountId<
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
                  (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountIdReturncarrierCarrierAccountIdMutationOptions<
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

export function getPatchAccountsAccountIdReturncarrierCarrierAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId/returncarrier/:carrierAccountId', 'PATCH'] as const
}

export function getPatchAccountsAccountIdReturncarrierCarrierAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdReturncarrierCarrierAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountId'].returncarrier[':carrierAccountId'].$patch(args, options),
      )
    },
  })
}

export function usePatchAccountsAccountIdReturncarrierCarrierAccountId<
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
                  (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
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
  const mutationDefaults = getPatchAccountsAccountIdReturncarrierCarrierAccountIdMutationOptions<
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

export function getPostAccountstatusesBatchMutationKey() {
  return ['accountstatuses', '/accountstatuses/batch', 'POST'] as const
}

export function getPostAccountstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountstatuses.batch.$post>) {
      return parseResponse(client.accountstatuses.batch.$post(args, options))
    },
  })
}

export function usePostAccountstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accountstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accountstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccounttaxBatchMutationKey() {
  return ['accounttax', '/accounttax/batch', 'POST'] as const
}

export function getPostAccounttaxBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounttax.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccounttaxBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounttax.batch.$post>) {
      return parseResponse(client.accounttax.batch.$post(args, options))
    },
  })
}

export function usePostAccounttaxBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounttax.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounttax.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccounttaxBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatafeedsBatchMutationKey() {
  return ['datafeeds', '/datafeeds/batch', 'POST'] as const
}

export function getPostDatafeedsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.datafeeds.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatafeedsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datafeeds.batch.$post>) {
      return parseResponse(client.datafeeds.batch.$post(args, options))
    },
  })
}

export function usePostDatafeedsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datafeeds.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datafeeds.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatafeedsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatafeedstatusesBatchMutationKey() {
  return ['datafeedstatuses', '/datafeedstatuses/batch', 'POST'] as const
}

export function getPostDatafeedstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.datafeedstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatafeedstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datafeedstatuses.batch.$post>) {
      return parseResponse(client.datafeedstatuses.batch.$post(args, options))
    },
  })
}

export function usePostDatafeedstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datafeedstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.datafeedstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatafeedstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiasettingsBatchMutationKey() {
  return ['liasettings', '/liasettings/batch', 'POST'] as const
}

export function getPostLiasettingsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.liasettings.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiasettingsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.liasettings.batch.$post>) {
      return parseResponse(client.liasettings.batch.$post(args, options))
    },
  })
}

export function usePostLiasettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.liasettings.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLiasettingsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getLiasettingsPosdataprovidersQueryKey(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
) {
  return ['liasettings', '/liasettings/posdataproviders', args] as const
}

export function getLiasettingsPosdataprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
  >({
    queryKey: getLiasettingsPosdataprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.liasettings.posdataproviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLiasettingsPosdataproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
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
      ...getLiasettingsPosdataprovidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLiasettingsPosdataproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.liasettings.posdataproviders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiasettingsPosdataprovidersQueryKey>
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
      ...getLiasettingsPosdataprovidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLocalinventoryBatchMutationKey() {
  return ['localinventory', '/localinventory/batch', 'POST'] as const
}

export function getPostLocalinventoryBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.localinventory.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.localinventory.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocalinventoryBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.localinventory.batch.$post>) {
      return parseResponse(client.localinventory.batch.$post(args, options))
    },
  })
}

export function usePostLocalinventoryBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.localinventory.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.localinventory.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLocalinventoryBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostPosBatchMutationKey() {
  return ['pos', '/pos/batch', 'POST'] as const
}

export function getPostPosBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.pos.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.batch.$post>) {
      return parseResponse(client.pos.batch.$post(args, options))
    },
  })
}

export function usePostPosBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPosBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProductsBatchMutationKey() {
  return ['products', '/products/batch', 'POST'] as const
}

export function getPostProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.products.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.batch.$post>) {
      return parseResponse(client.products.batch.$post(args, options))
    },
  })
}

export function usePostProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.products.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostProductstatusesBatchMutationKey() {
  return ['productstatuses', '/productstatuses/batch', 'POST'] as const
}

export function getPostProductstatusesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.productstatuses.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductstatusesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.productstatuses.batch.$post>) {
      return parseResponse(client.productstatuses.batch.$post(args, options))
    },
  })
}

export function usePostProductstatusesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.productstatuses.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.productstatuses.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductstatusesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostRegionalinventoryBatchMutationKey() {
  return ['regionalinventory', '/regionalinventory/batch', 'POST'] as const
}

export function getPostRegionalinventoryBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.regionalinventory.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.regionalinventory.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegionalinventoryBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.regionalinventory.batch.$post>) {
      return parseResponse(client.regionalinventory.batch.$post(args, options))
    },
  })
}

export function usePostRegionalinventoryBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.regionalinventory.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.regionalinventory.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegionalinventoryBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostReturnaddressBatchMutationKey() {
  return ['returnaddress', '/returnaddress/batch', 'POST'] as const
}

export function getPostReturnaddressBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returnaddress.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.returnaddress.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReturnaddressBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.returnaddress.batch.$post>) {
      return parseResponse(client.returnaddress.batch.$post(args, options))
    },
  })
}

export function usePostReturnaddressBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.returnaddress.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.returnaddress.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReturnaddressBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostReturnpolicyBatchMutationKey() {
  return ['returnpolicy', '/returnpolicy/batch', 'POST'] as const
}

export function getPostReturnpolicyBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returnpolicy.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.returnpolicy.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReturnpolicyBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.returnpolicy.batch.$post>) {
      return parseResponse(client.returnpolicy.batch.$post(args, options))
    },
  })
}

export function usePostReturnpolicyBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.returnpolicy.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.returnpolicy.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReturnpolicyBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostShippingsettingsBatchMutationKey() {
  return ['shippingsettings', '/shippingsettings/batch', 'POST'] as const
}

export function getPostShippingsettingsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.shippingsettings.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShippingsettingsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shippingsettings.batch.$post>) {
      return parseResponse(client.shippingsettings.batch.$post(args, options))
    },
  })
}

export function usePostShippingsettingsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shippingsettings.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shippingsettings.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShippingsettingsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getCssGroupIdCssesQueryKey(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
) {
  return [':cssGroupId', '/:cssGroupId/csses', args] as const
}

export function getCssGroupIdCssesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCssGroupIdCssesQueryKey>
  >({
    queryKey: getCssGroupIdCssesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':cssGroupId'].csses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCssGroupIdCsses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssGroupIdCssesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCssGroupIdCssesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCssGroupIdCsses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':cssGroupId']['csses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssGroupIdCssesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCssGroupIdCssesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCssGroupIdCssesCssDomainIdQueryKey(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
) {
  return [':cssGroupId', '/:cssGroupId/csses/:cssDomainId', args] as const
}

export function getCssGroupIdCssesCssDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCssGroupIdCssesCssDomainIdQueryKey>
  >({
    queryKey: getCssGroupIdCssesCssDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':cssGroupId'].csses[':cssDomainId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCssGroupIdCssesCssDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssGroupIdCssesCssDomainIdQueryKey>
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
      ...getCssGroupIdCssesCssDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCssGroupIdCssesCssDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssGroupIdCssesCssDomainIdQueryKey>
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
      ...getCssGroupIdCssesCssDomainIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCssGroupIdCssesCssDomainIdUpdatelabelsMutationKey() {
  return [':cssGroupId', '/:cssGroupId/csses/:cssDomainId/updatelabels', 'POST'] as const
}

export function getPostCssGroupIdCssesCssDomainIdUpdatelabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCssGroupIdCssesCssDomainIdUpdatelabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
      >,
    ) {
      return parseResponse(
        client[':cssGroupId'].csses[':cssDomainId'].updatelabels.$post(args, options),
      )
    },
  })
}

export function usePostCssGroupIdCssesCssDomainIdUpdatelabels<
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
                  (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
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
  const mutationDefaults = getPostCssGroupIdCssesCssDomainIdUpdatelabelsMutationOptions<
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

export function getMerchantIdAccountsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts', args] as const
}

export function getMerchantIdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountsQueryKey>
  >({
    queryKey: getMerchantIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantIdAccountsMutationKey() {
  return [':merchantId', '/:merchantId/accounts', 'POST'] as const
}

export function getPostMerchantIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>) {
      return parseResponse(client[':merchantId'].accounts.$post(args, options))
    },
  })
}

export function usePostMerchantIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId', args] as const
}

export function getMerchantIdAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountsAccountIdQueryKey>
  >({
    queryKey: getMerchantIdAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsAccountIdQueryKey>
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
      ...getMerchantIdAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsAccountIdQueryKey>
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
      ...getMerchantIdAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdAccountsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'PUT'] as const
}

export function getPutMerchantIdAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdAccountsAccountIdMutationOptions<
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

export function getDeleteMerchantIdAccountsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteMerchantIdAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdAccountsAccountId<
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
                ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdAccountsAccountIdMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdClaimwebsiteMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/claimwebsite', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdClaimwebsiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdClaimwebsiteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].claimwebsite.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdAccountsAccountIdClaimwebsite<
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
                  (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
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
  const mutationDefaults = getPostMerchantIdAccountsAccountIdClaimwebsiteMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdLinkMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/link', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].accounts[':accountId'].link.$post(args, options))
    },
  })
}

export function usePostMerchantIdAccountsAccountIdLink<
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
                  (typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdAccountsAccountIdLinkMutationOptions<
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

export function getMerchantIdAccountsAccountIdListlinksQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/accounts/:accountId/listlinks', args] as const
}

export function getMerchantIdAccountsAccountIdListlinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountsAccountIdListlinksQueryKey>
  >({
    queryKey: getMerchantIdAccountsAccountIdListlinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].listlinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccountsAccountIdListlinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsAccountIdListlinksQueryKey>
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
      ...getMerchantIdAccountsAccountIdListlinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccountsAccountIdListlinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountsAccountIdListlinksQueryKey>
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
      ...getMerchantIdAccountsAccountIdListlinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdAccountsAccountIdRequestphoneverificationMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/accounts/:accountId/requestphoneverification',
    'POST',
  ] as const
}

export function getPostMerchantIdAccountsAccountIdRequestphoneverificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdRequestphoneverificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].requestphoneverification.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdAccountsAccountIdRequestphoneverification<
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
                  (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
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
  const mutationDefaults =
    getPostMerchantIdAccountsAccountIdRequestphoneverificationMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdUpdatelabelsMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/updatelabels', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdUpdatelabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdUpdatelabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].updatelabels.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdAccountsAccountIdUpdatelabels<
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
                  (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
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
  const mutationDefaults = getPostMerchantIdAccountsAccountIdUpdatelabelsMutationOptions<
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

export function getPostMerchantIdAccountsAccountIdVerifyphonenumberMutationKey() {
  return [':merchantId', '/:merchantId/accounts/:accountId/verifyphonenumber', 'POST'] as const
}

export function getPostMerchantIdAccountsAccountIdVerifyphonenumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdAccountsAccountIdVerifyphonenumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].accounts[':accountId'].verifyphonenumber.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdAccountsAccountIdVerifyphonenumber<
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
                  (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
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
  const mutationDefaults = getPostMerchantIdAccountsAccountIdVerifyphonenumberMutationOptions<
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

export function getMerchantIdAccountstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses', args] as const
}

export function getMerchantIdAccountstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountstatusesQueryKey>
  >({
    queryKey: getMerchantIdAccountstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accountstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccountstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountstatusesQueryKey>
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
      ...getMerchantIdAccountstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccountstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountstatusesQueryKey>
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
      ...getMerchantIdAccountstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdAccountstatusesAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accountstatuses/:accountId', args] as const
}

export function getMerchantIdAccountstatusesAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccountstatusesAccountIdQueryKey>
  >({
    queryKey: getMerchantIdAccountstatusesAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accountstatuses[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccountstatusesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountstatusesAccountIdQueryKey>
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
      ...getMerchantIdAccountstatusesAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccountstatusesAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccountstatusesAccountIdQueryKey>
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
      ...getMerchantIdAccountstatusesAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdAccounttaxQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax', args] as const
}

export function getMerchantIdAccounttaxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccounttaxQueryKey>
  >({
    queryKey: getMerchantIdAccounttaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounttax.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccounttax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccounttaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdAccounttaxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccounttax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['accounttax']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccounttaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdAccounttaxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMerchantIdAccounttaxAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/accounttax/:accountId', args] as const
}

export function getMerchantIdAccounttaxAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
  >({
    queryKey: getMerchantIdAccounttaxAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].accounttax[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdAccounttaxAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
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
      ...getMerchantIdAccounttaxAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdAccounttaxAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdAccounttaxAccountIdQueryKey>
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
      ...getMerchantIdAccounttaxAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdAccounttaxAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/accounttax/:accountId', 'PUT'] as const
}

export function getPutMerchantIdAccounttaxAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdAccounttaxAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].accounttax[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdAccounttaxAccountId<
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
                ReturnType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdAccounttaxAccountIdMutationOptions<
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

export function getMerchantIdBuyongoogleprogramsRegionCodeQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode', args] as const
}

export function getMerchantIdBuyongoogleprogramsRegionCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdBuyongoogleprogramsRegionCodeQueryKey>
  >({
    queryKey: getMerchantIdBuyongoogleprogramsRegionCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdBuyongoogleprogramsRegionCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdBuyongoogleprogramsRegionCodeQueryKey>
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
      ...getMerchantIdBuyongoogleprogramsRegionCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdBuyongoogleprogramsRegionCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdBuyongoogleprogramsRegionCodeQueryKey>
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
      ...getMerchantIdBuyongoogleprogramsRegionCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantIdBuyongoogleprogramsRegionCodeMutationKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode', 'PATCH'] as const
}

export function getPatchMerchantIdBuyongoogleprogramsRegionCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdBuyongoogleprogramsRegionCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantIdBuyongoogleprogramsRegionCode<
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
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
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
  const mutationDefaults = getPatchMerchantIdBuyongoogleprogramsRegionCodeMutationOptions<
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

export function getPostMerchantIdBuyongoogleprogramsRegionCodeActivateMutationKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/activate', 'POST'] as const
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdBuyongoogleprogramsRegionCodeActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].activate.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeActivate<
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
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
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
  const mutationDefaults = getPostMerchantIdBuyongoogleprogramsRegionCodeActivateMutationOptions<
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

export function getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardMutationKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/onboard', 'POST'] as const
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].onboard.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeOnboard<
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
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
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
  const mutationDefaults = getPostMerchantIdBuyongoogleprogramsRegionCodeOnboardMutationOptions<
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

export function getPostMerchantIdBuyongoogleprogramsRegionCodePauseMutationKey() {
  return [':merchantId', '/:merchantId/buyongoogleprograms/:regionCode/pause', 'POST'] as const
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdBuyongoogleprogramsRegionCodePauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].pause.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodePause<
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
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
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
  const mutationDefaults = getPostMerchantIdBuyongoogleprogramsRegionCodePauseMutationOptions<
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

export function getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/buyongoogleprograms/:regionCode/requestreview',
    'POST',
  ] as const
}

export function getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].buyongoogleprograms[':regionCode'].requestreview.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdBuyongoogleprogramsRegionCodeRequestreview<
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
                  (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
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
  const mutationDefaults =
    getPostMerchantIdBuyongoogleprogramsRegionCodeRequestreviewMutationOptions<
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

export function getMerchantIdCollectionsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
) {
  return [':merchantId', '/:merchantId/collections', args] as const
}

export function getMerchantIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdCollectionsQueryKey>
  >({
    queryKey: getMerchantIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionsQueryKey>
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
      ...getMerchantIdCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionsQueryKey>
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
      ...getMerchantIdCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdCollectionsMutationKey() {
  return [':merchantId', '/:merchantId/collections', 'POST'] as const
}

export function getPostMerchantIdCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['collections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['collections']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].collections.$post(args, options))
    },
  })
}

export function usePostMerchantIdCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['collections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['collections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
) {
  return [':merchantId', '/:merchantId/collections/:collectionId', args] as const
}

export function getMerchantIdCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdCollectionsCollectionIdQueryKey>
  >({
    queryKey: getMerchantIdCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].collections[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionsCollectionIdQueryKey>
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
      ...getMerchantIdCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionsCollectionIdQueryKey>
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
      ...getMerchantIdCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdCollectionsCollectionIdMutationKey() {
  return [':merchantId', '/:merchantId/collections/:collectionId', 'DELETE'] as const
}

export function getDeleteMerchantIdCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['collections'][':collectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].collections[':collectionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdCollectionsCollectionId<
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
                  (typeof client)[':merchantId']['collections'][':collectionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdCollectionsCollectionIdMutationOptions<
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

export function getMerchantIdCollectionstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/collectionstatuses', args] as const
}

export function getMerchantIdCollectionstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdCollectionstatusesQueryKey>
  >({
    queryKey: getMerchantIdCollectionstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].collectionstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdCollectionstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionstatusesQueryKey>
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
      ...getMerchantIdCollectionstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdCollectionstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['collectionstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionstatusesQueryKey>
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
      ...getMerchantIdCollectionstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdCollectionstatusesCollectionIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/collectionstatuses/:collectionId', args] as const
}

export function getMerchantIdCollectionstatusesCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdCollectionstatusesCollectionIdQueryKey>
  >({
    queryKey: getMerchantIdCollectionstatusesCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].collectionstatuses[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdCollectionstatusesCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionstatusesCollectionIdQueryKey>
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
      ...getMerchantIdCollectionstatusesCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdCollectionstatusesCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdCollectionstatusesCollectionIdQueryKey>
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
      ...getMerchantIdCollectionstatusesCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdConversionsourcesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
) {
  return [':merchantId', '/:merchantId/conversionsources', args] as const
}

export function getMerchantIdConversionsourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdConversionsourcesQueryKey>
  >({
    queryKey: getMerchantIdConversionsourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].conversionsources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdConversionsources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdConversionsourcesQueryKey>
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
      ...getMerchantIdConversionsourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdConversionsources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdConversionsourcesQueryKey>
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
      ...getMerchantIdConversionsourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdConversionsourcesMutationKey() {
  return [':merchantId', '/:merchantId/conversionsources', 'POST'] as const
}

export function getPostMerchantIdConversionsourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdConversionsourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].conversionsources.$post(args, options))
    },
  })
}

export function usePostMerchantIdConversionsources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['conversionsources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdConversionsourcesMutationOptions<
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

export function getMerchantIdConversionsourcesConversionSourceIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', args] as const
}

export function getMerchantIdConversionsourcesConversionSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdConversionsourcesConversionSourceIdQueryKey>
  >({
    queryKey: getMerchantIdConversionsourcesConversionSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].conversionsources[':conversionSourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdConversionsourcesConversionSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdConversionsourcesConversionSourceIdQueryKey>
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
      ...getMerchantIdConversionsourcesConversionSourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdConversionsourcesConversionSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdConversionsourcesConversionSourceIdQueryKey>
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
      ...getMerchantIdConversionsourcesConversionSourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdConversionsourcesConversionSourceIdMutationKey() {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', 'DELETE'] as const
}

export function getDeleteMerchantIdConversionsourcesConversionSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdConversionsourcesConversionSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].conversionsources[':conversionSourceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdConversionsourcesConversionSourceId<
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
                  (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdConversionsourcesConversionSourceIdMutationOptions<
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

export function getPatchMerchantIdConversionsourcesConversionSourceIdMutationKey() {
  return [':merchantId', '/:merchantId/conversionsources/:conversionSourceId', 'PATCH'] as const
}

export function getPatchMerchantIdConversionsourcesConversionSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdConversionsourcesConversionSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].conversionsources[':conversionSourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantIdConversionsourcesConversionSourceId<
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
                  (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
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
  const mutationDefaults = getPatchMerchantIdConversionsourcesConversionSourceIdMutationOptions<
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

export function getPostMerchantIdConversionsourcesConversionSourceIdUndeleteMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/conversionsources/:conversionSourceId:undelete',
    'POST',
  ] as const
}

export function getPostMerchantIdConversionsourcesConversionSourceIdUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdConversionsourcesConversionSourceIdUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].conversionsources[':conversionSourceId:undelete'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantIdConversionsourcesConversionSourceIdUndelete<
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
                  (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
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
  const mutationDefaults =
    getPostMerchantIdConversionsourcesConversionSourceIdUndeleteMutationOptions<
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

export function getMerchantIdDatafeedsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds', args] as const
}

export function getMerchantIdDatafeedsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedsQueryKey>
  >({
    queryKey: getMerchantIdDatafeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeeds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdDatafeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdDatafeedsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdDatafeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdDatafeedsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantIdDatafeedsMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds', 'POST'] as const
}

export function getPostMerchantIdDatafeedsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdDatafeedsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>) {
      return parseResponse(client[':merchantId'].datafeeds.$post(args, options))
    },
  })
}

export function usePostMerchantIdDatafeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdDatafeedsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdDatafeedsDatafeedIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', args] as const
}

export function getMerchantIdDatafeedsDatafeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
  >({
    queryKey: getMerchantIdDatafeedsDatafeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeeds[':datafeedId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdDatafeedsDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
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
      ...getMerchantIdDatafeedsDatafeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdDatafeedsDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedsDatafeedIdQueryKey>
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
      ...getMerchantIdDatafeedsDatafeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdDatafeedsDatafeedIdMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'PUT'] as const
}

export function getPutMerchantIdDatafeedsDatafeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdDatafeedsDatafeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdDatafeedsDatafeedId<
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
                ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdDatafeedsDatafeedIdMutationOptions<
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

export function getDeleteMerchantIdDatafeedsDatafeedIdMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId', 'DELETE'] as const
}

export function getDeleteMerchantIdDatafeedsDatafeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdDatafeedsDatafeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdDatafeedsDatafeedId<
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
                ReturnType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdDatafeedsDatafeedIdMutationOptions<
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

export function getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationKey() {
  return [':merchantId', '/:merchantId/datafeeds/:datafeedId/fetchNow', 'POST'] as const
}

export function getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].datafeeds[':datafeedId'].fetchNow.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdDatafeedsDatafeedIdFetchNow<
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
                  (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
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
  const mutationDefaults = getPostMerchantIdDatafeedsDatafeedIdFetchNowMutationOptions<
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

export function getMerchantIdDatafeedstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses', args] as const
}

export function getMerchantIdDatafeedstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedstatusesQueryKey>
  >({
    queryKey: getMerchantIdDatafeedstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdDatafeedstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedstatusesQueryKey>
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
      ...getMerchantIdDatafeedstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdDatafeedstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedstatusesQueryKey>
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
      ...getMerchantIdDatafeedstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
) {
  return [':merchantId', '/:merchantId/datafeedstatuses/:datafeedId', args] as const
}

export function getMerchantIdDatafeedstatusesDatafeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
  >({
    queryKey: getMerchantIdDatafeedstatusesDatafeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].datafeedstatuses[':datafeedId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdDatafeedstatusesDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
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
      ...getMerchantIdDatafeedstatusesDatafeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdDatafeedstatusesDatafeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdDatafeedstatusesDatafeedIdQueryKey>
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
      ...getMerchantIdDatafeedstatusesDatafeedIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdFreelistingsprogramQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
) {
  return [':merchantId', '/:merchantId/freelistingsprogram', args] as const
}

export function getMerchantIdFreelistingsprogramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdFreelistingsprogramQueryKey>
  >({
    queryKey: getMerchantIdFreelistingsprogramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].freelistingsprogram.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdFreelistingsprogram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdFreelistingsprogramQueryKey>
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
      ...getMerchantIdFreelistingsprogramQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdFreelistingsprogram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdFreelistingsprogramQueryKey>
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
      ...getMerchantIdFreelistingsprogramQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdFreelistingsprogramRequestreviewMutationKey() {
  return [':merchantId', '/:merchantId/freelistingsprogram/requestreview', 'POST'] as const
}

export function getPostMerchantIdFreelistingsprogramRequestreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdFreelistingsprogramRequestreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].freelistingsprogram.requestreview.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdFreelistingsprogramRequestreview<
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
                  (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
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
  const mutationDefaults = getPostMerchantIdFreelistingsprogramRequestreviewMutationOptions<
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

export function getMerchantIdLiasettingsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings', args] as const
}

export function getMerchantIdLiasettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsQueryKey>
  >({
    queryKey: getMerchantIdLiasettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdLiasettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsQueryKey>
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
      ...getMerchantIdLiasettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdLiasettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['liasettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsQueryKey>
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
      ...getMerchantIdLiasettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdLiasettingsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId', args] as const
}

export function getMerchantIdLiasettingsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
  >({
    queryKey: getMerchantIdLiasettingsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdLiasettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
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
      ...getMerchantIdLiasettingsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdLiasettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsAccountIdQueryKey>
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
      ...getMerchantIdLiasettingsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdLiasettingsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId', 'PUT'] as const
}

export function getPutMerchantIdLiasettingsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdLiasettingsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].liasettings[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdLiasettingsAccountId<
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
                ReturnType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdLiasettingsAccountIdMutationOptions<
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

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/liasettings/:accountId/accessiblegmbaccounts', args] as const
}

export function getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey>
  >({
    queryKey: getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey>
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
      ...getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdLiasettingsAccountIdAccessiblegmbaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryKey>
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
      ...getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/requestgmbaccess', 'POST'] as const
}

export function getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].requestgmbaccess.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdRequestgmbaccess<
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
                  (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
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
  const mutationDefaults = getPostMerchantIdLiasettingsAccountIdRequestgmbaccessMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/requestinventoryverification/:country',
    'POST',
  ] as const
}

export function getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].requestinventoryverification[
          ':country'
        ].$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountry<
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
                  (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
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
  const mutationDefaults =
    getPostMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/liasettings/:accountId/setinventoryverificationcontact',
    'POST',
  ] as const
}

export function getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].setinventoryverificationcontact.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdSetinventoryverificationcontact<
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
                  (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
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
  const mutationDefaults =
    getPostMerchantIdLiasettingsAccountIdSetinventoryverificationcontactMutationOptions<
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

export function getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationKey() {
  return [':merchantId', '/:merchantId/liasettings/:accountId/setposdataprovider', 'POST'] as const
}

export function getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].liasettings[':accountId'].setposdataprovider.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdLiasettingsAccountIdSetposdataprovider<
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
                  (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
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
  const mutationDefaults = getPostMerchantIdLiasettingsAccountIdSetposdataproviderMutationOptions<
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

export function getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createChargeInvoice', 'POST'] as const
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderinvoices[':orderId'].createChargeInvoice.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateChargeInvoice<
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
                  (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceMutationOptions<
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

export function getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationKey() {
  return [':merchantId', '/:merchantId/orderinvoices/:orderId/createRefundInvoice', 'POST'] as const
}

export function getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderinvoices[':orderId'].createRefundInvoice.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderinvoicesOrderIdCreateRefundInvoice<
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
                  (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceMutationOptions<
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

export function getMerchantIdOrderreportsDisbursementsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreports/disbursements', args] as const
}

export function getMerchantIdOrderreportsDisbursementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreportsDisbursementsQueryKey>
  >({
    queryKey: getMerchantIdOrderreportsDisbursementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdOrderreportsDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreportsDisbursementsQueryKey>
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
      ...getMerchantIdOrderreportsDisbursementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrderreportsDisbursements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreportsDisbursementsQueryKey>
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
      ...getMerchantIdOrderreportsDisbursementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
) {
  return [
    ':merchantId',
    '/:merchantId/orderreports/disbursements/:disbursementId/transactions',
    args,
  ] as const
}

export function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey>
  >({
    queryKey: getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey>
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
      ...getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrderreportsDisbursementsDisbursementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryKey>
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
      ...getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdOrderreturnsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns', args] as const
}

export function getMerchantIdOrderreturnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreturnsQueryKey>
  >({
    queryKey: getMerchantIdOrderreturnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreturns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdOrderreturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreturnsQueryKey>
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
      ...getMerchantIdOrderreturnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrderreturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreturnsQueryKey>
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
      ...getMerchantIdOrderreturnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdOrderreturnsCreateOrderReturnMutationKey() {
  return [':merchantId', '/:merchantId/orderreturns/createOrderReturn', 'POST'] as const
}

export function getPostMerchantIdOrderreturnsCreateOrderReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderreturnsCreateOrderReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderreturns.createOrderReturn.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderreturnsCreateOrderReturn<
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
                  (typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderreturnsCreateOrderReturnMutationOptions<
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

export function getMerchantIdOrderreturnsReturnIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orderreturns/:returnId', args] as const
}

export function getMerchantIdOrderreturnsReturnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
  >({
    queryKey: getMerchantIdOrderreturnsReturnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdOrderreturnsReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
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
      ...getMerchantIdOrderreturnsReturnIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrderreturnsReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrderreturnsReturnIdQueryKey>
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
      ...getMerchantIdOrderreturnsReturnIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdOrderreturnsReturnIdAcknowledgeMutationKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/acknowledge', 'POST'] as const
}

export function getPostMerchantIdOrderreturnsReturnIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderreturnsReturnIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].acknowledge.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderreturnsReturnIdAcknowledge<
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
                  (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderreturnsReturnIdAcknowledgeMutationOptions<
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

export function getPostMerchantIdOrderreturnsReturnIdLabelsMutationKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/labels', 'POST'] as const
}

export function getPostMerchantIdOrderreturnsReturnIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderreturnsReturnIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].labels.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderreturnsReturnIdLabels<
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
                  (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderreturnsReturnIdLabelsMutationOptions<
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

export function getPostMerchantIdOrderreturnsReturnIdProcessMutationKey() {
  return [':merchantId', '/:merchantId/orderreturns/:returnId/process', 'POST'] as const
}

export function getPostMerchantIdOrderreturnsReturnIdProcessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrderreturnsReturnIdProcessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orderreturns[':returnId'].process.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrderreturnsReturnIdProcess<
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
                  (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
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
  const mutationDefaults = getPostMerchantIdOrderreturnsReturnIdProcessMutationOptions<
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

export function getMerchantIdOrdersQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders', args] as const
}

export function getMerchantIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersQueryKey>
  >({
    queryKey: getMerchantIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMerchantIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMerchantIdOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
) {
  return [':merchantId', '/:merchantId/orders/:orderId', args] as const
}

export function getMerchantIdOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersOrderIdQueryKey>
  >({
    queryKey: getMerchantIdOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersOrderIdQueryKey>
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
      ...getMerchantIdOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersOrderIdQueryKey>
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
      ...getMerchantIdOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdOrdersOrderIdAcknowledgeMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/acknowledge', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].acknowledge.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdAcknowledge<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdAcknowledgeMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdCancelMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancel', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].cancel.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdCancel<
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
                ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdCancelLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/cancelLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdCancelLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdCancelLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].cancelLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdCancelLineItem<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdCancelLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdCaptureOrderMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/captureOrder', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdCaptureOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdCaptureOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].captureOrder.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdCaptureOrder<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdCaptureOrderMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/inStoreRefundLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].inStoreRefundLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdInStoreRefundLineItem<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdInStoreRefundLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdRefunditemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/refunditem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdRefunditemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdRefunditemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].refunditem.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdRefunditem<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdRefunditemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdRefundorderMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/refundorder', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdRefundorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdRefundorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].refundorder.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdRefundorder<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdRefundorderMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/rejectReturnLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].rejectReturnLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdRejectReturnLineItem<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdRejectReturnLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/returnRefundLineItem', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].returnRefundLineItem.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdReturnRefundLineItem<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdReturnRefundLineItemMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/setLineItemMetadata', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].setLineItemMetadata.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdSetLineItemMetadata<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdSetLineItemMetadataMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdShipLineItemsMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/shipLineItems', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdShipLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdShipLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].shipLineItems.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdShipLineItems<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdShipLineItemsMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdTestreturnMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/testreturn', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdTestreturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdTestreturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].orders[':orderId'].testreturn.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdersOrderIdTestreturn<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdTestreturnMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationKey() {
  return [
    ':merchantId',
    '/:merchantId/orders/:orderId/updateLineItemShippingDetails',
    'POST',
  ] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateLineItemShippingDetails.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateLineItemShippingDetails<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
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
  const mutationDefaults =
    getPostMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateMerchantOrderId', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateMerchantOrderId.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateMerchantOrderId<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateMerchantOrderIdMutationOptions<
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

export function getPostMerchantIdOrdersOrderIdUpdateShipmentMutationKey() {
  return [':merchantId', '/:merchantId/orders/:orderId/updateShipment', 'POST'] as const
}

export function getPostMerchantIdOrdersOrderIdUpdateShipmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdersOrderIdUpdateShipmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].orders[':orderId'].updateShipment.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdOrdersOrderIdUpdateShipment<
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
                  (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
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
  const mutationDefaults = getPostMerchantIdOrdersOrderIdUpdateShipmentMutationOptions<
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

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/ordersbymerchantid/:merchantOrderId', args] as const
}

export function getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey>
  >({
    queryKey: getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdOrdersbymerchantidMerchantOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey>
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
      ...getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdOrdersbymerchantidMerchantOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdOrdersbymerchantidMerchantOrderIdQueryKey>
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
      ...getMerchantIdOrdersbymerchantidMerchantOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdOrdertrackingsignalsMutationKey() {
  return [':merchantId', '/:merchantId/ordertrackingsignals', 'POST'] as const
}

export function getPostMerchantIdOrdertrackingsignalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdOrdertrackingsignalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].ordertrackingsignals.$post(args, options))
    },
  })
}

export function usePostMerchantIdOrdertrackingsignals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdOrdertrackingsignalsMutationOptions<
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

export function getPostMerchantIdPosTargetMerchantIdInventoryMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/inventory', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].inventory.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdInventory<
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
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdInventoryMutationOptions<
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

export function getPostMerchantIdPosTargetMerchantIdSaleMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/sale', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdSaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdSaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
      >,
    ) {
      return parseResponse(client[':merchantId'].pos[':targetMerchantId'].sale.$post(args, options))
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdSale<
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
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdSaleMutationOptions<
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

export function getMerchantIdPosTargetMerchantIdStoreQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', args] as const
}

export function getMerchantIdPosTargetMerchantIdStoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
  >({
    queryKey: getMerchantIdPosTargetMerchantIdStoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdPosTargetMerchantIdStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
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
      ...getMerchantIdPosTargetMerchantIdStoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdPosTargetMerchantIdStore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreQueryKey>
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
      ...getMerchantIdPosTargetMerchantIdStoreQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdPosTargetMerchantIdStoreMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store', 'POST'] as const
}

export function getPostMerchantIdPosTargetMerchantIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPosTargetMerchantIdStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdPosTargetMerchantIdStore<
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
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
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
  const mutationDefaults = getPostMerchantIdPosTargetMerchantIdStoreMutationOptions<
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

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', args] as const
}

export function getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey>
  >({
    queryKey: getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdPosTargetMerchantIdStoreStoreCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey>
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
      ...getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdPosTargetMerchantIdStoreStoreCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryKey>
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
      ...getMerchantIdPosTargetMerchantIdStoreStoreCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationKey() {
  return [':merchantId', '/:merchantId/pos/:targetMerchantId/store/:storeCode', 'DELETE'] as const
}

export function getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdPosTargetMerchantIdStoreStoreCode<
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
                  (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdPosTargetMerchantIdStoreStoreCodeMutationOptions<
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

export function getPostMerchantIdProductdeliverytimeMutationKey() {
  return [':merchantId', '/:merchantId/productdeliverytime', 'POST'] as const
}

export function getPostMerchantIdProductdeliverytimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['productdeliverytime']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdProductdeliverytimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].productdeliverytime.$post(args, options))
    },
  })
}

export function usePostMerchantIdProductdeliverytime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['productdeliverytime']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdProductdeliverytimeMutationOptions<
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

export function getMerchantIdProductdeliverytimeProductIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/productdeliverytime/:productId', args] as const
}

export function getMerchantIdProductdeliverytimeProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductdeliverytimeProductIdQueryKey>
  >({
    queryKey: getMerchantIdProductdeliverytimeProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productdeliverytime[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProductdeliverytimeProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductdeliverytimeProductIdQueryKey>
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
      ...getMerchantIdProductdeliverytimeProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdProductdeliverytimeProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductdeliverytimeProductIdQueryKey>
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
      ...getMerchantIdProductdeliverytimeProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdProductdeliverytimeProductIdMutationKey() {
  return [':merchantId', '/:merchantId/productdeliverytime/:productId', 'DELETE'] as const
}

export function getDeleteMerchantIdProductdeliverytimeProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdProductdeliverytimeProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].productdeliverytime[':productId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdProductdeliverytimeProductId<
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
                  (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdProductdeliverytimeProductIdMutationOptions<
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

export function getMerchantIdProductsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
) {
  return [':merchantId', '/:merchantId/products', args] as const
}

export function getMerchantIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductsQueryKey>
  >({
    queryKey: getMerchantIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantIdProductsMutationKey() {
  return [':merchantId', '/:merchantId/products', 'POST'] as const
}

export function getPostMerchantIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdProductsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['products']['$post']>) {
      return parseResponse(client[':merchantId'].products.$post(args, options))
    },
  })
}

export function usePostMerchantIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['products']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdProductsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdProductsProductIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/products/:productId', args] as const
}

export function getMerchantIdProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductsProductIdQueryKey>
  >({
    queryKey: getMerchantIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductsProductIdQueryKey>
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
      ...getMerchantIdProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductsProductIdQueryKey>
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
      ...getMerchantIdProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdProductsProductIdMutationKey() {
  return [':merchantId', '/:merchantId/products/:productId', 'DELETE'] as const
}

export function getDeleteMerchantIdProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdProductsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].products[':productId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdProductsProductId<
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
                ReturnType<(typeof client)[':merchantId']['products'][':productId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdProductsProductIdMutationOptions<
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

export function getPatchMerchantIdProductsProductIdMutationKey() {
  return [':merchantId', '/:merchantId/products/:productId', 'PATCH'] as const
}

export function getPatchMerchantIdProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['products'][':productId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdProductsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>,
    ) {
      return parseResponse(client[':merchantId'].products[':productId'].$patch(args, options))
    },
  })
}

export function usePatchMerchantIdProductsProductId<
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
                ReturnType<(typeof client)[':merchantId']['products'][':productId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantIdProductsProductIdMutationOptions<
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

export function getPostMerchantIdProductsProductIdLocalinventoryMutationKey() {
  return [':merchantId', '/:merchantId/products/:productId/localinventory', 'POST'] as const
}

export function getPostMerchantIdProductsProductIdLocalinventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdProductsProductIdLocalinventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].products[':productId'].localinventory.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdProductsProductIdLocalinventory<
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
                  (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
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
  const mutationDefaults = getPostMerchantIdProductsProductIdLocalinventoryMutationOptions<
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

export function getPostMerchantIdProductsProductIdRegionalinventoryMutationKey() {
  return [':merchantId', '/:merchantId/products/:productId/regionalinventory', 'POST'] as const
}

export function getPostMerchantIdProductsProductIdRegionalinventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdProductsProductIdRegionalinventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].products[':productId'].regionalinventory.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdProductsProductIdRegionalinventory<
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
                  (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
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
  const mutationDefaults = getPostMerchantIdProductsProductIdRegionalinventoryMutationOptions<
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

export function getMerchantIdProductstatusesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses', args] as const
}

export function getMerchantIdProductstatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductstatusesQueryKey>
  >({
    queryKey: getMerchantIdProductstatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productstatuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProductstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesQueryKey>
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
      ...getMerchantIdProductstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdProductstatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesQueryKey>
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
      ...getMerchantIdProductstatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdProductstatusesProductIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId', args] as const
}

export function getMerchantIdProductstatusesProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductstatusesProductIdQueryKey>
  >({
    queryKey: getMerchantIdProductstatusesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productstatuses[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProductstatusesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesProductIdQueryKey>
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
      ...getMerchantIdProductstatusesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdProductstatusesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesProductIdQueryKey>
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
      ...getMerchantIdProductstatusesProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdProductstatusesProductIdRepricingreportsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/productstatuses/:productId/repricingreports', args] as const
}

export function getMerchantIdProductstatusesProductIdRepricingreportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdProductstatusesProductIdRepricingreportsQueryKey>
  >({
    queryKey: getMerchantIdProductstatusesProductIdRepricingreportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].productstatuses[':productId'].repricingreports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdProductstatusesProductIdRepricingreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesProductIdRepricingreportsQueryKey>
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
      ...getMerchantIdProductstatusesProductIdRepricingreportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdProductstatusesProductIdRepricingreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdProductstatusesProductIdRepricingreportsQueryKey>
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
      ...getMerchantIdProductstatusesProductIdRepricingreportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdPromotionsMutationKey() {
  return [':merchantId', '/:merchantId/promotions', 'POST'] as const
}

export function getPostMerchantIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['promotions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['promotions']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].promotions.$post(args, options))
    },
  })
}

export function usePostMerchantIdPromotions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['promotions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['promotions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdPromotionsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdPromotionsIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
) {
  return [':merchantId', '/:merchantId/promotions/:id', args] as const
}

export function getMerchantIdPromotionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPromotionsIdQueryKey>
  >({
    queryKey: getMerchantIdPromotionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].promotions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdPromotionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPromotionsIdQueryKey>
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
      ...getMerchantIdPromotionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdPromotionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['promotions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPromotionsIdQueryKey>
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
      ...getMerchantIdPromotionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdPubsubnotificationsettingsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/pubsubnotificationsettings', args] as const
}

export function getMerchantIdPubsubnotificationsettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdPubsubnotificationsettingsQueryKey>
  >({
    queryKey: getMerchantIdPubsubnotificationsettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].pubsubnotificationsettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdPubsubnotificationsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPubsubnotificationsettingsQueryKey>
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
      ...getMerchantIdPubsubnotificationsettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdPubsubnotificationsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdPubsubnotificationsettingsQueryKey>
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
      ...getMerchantIdPubsubnotificationsettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdPubsubnotificationsettingsMutationKey() {
  return [':merchantId', '/:merchantId/pubsubnotificationsettings', 'PUT'] as const
}

export function getPutMerchantIdPubsubnotificationsettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdPubsubnotificationsettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>,
    ) {
      return parseResponse(client[':merchantId'].pubsubnotificationsettings.$put(args, options))
    },
  })
}

export function usePutMerchantIdPubsubnotificationsettings<
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
                ReturnType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdPubsubnotificationsettingsMutationOptions<
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

export function getMerchantIdQuotasQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
) {
  return [':merchantId', '/:merchantId/quotas', args] as const
}

export function getMerchantIdQuotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdQuotasQueryKey>
  >({
    queryKey: getMerchantIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].quotas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMerchantIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdQuotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['quotas']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdQuotasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMerchantIdRecommendationsGenerateQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
) {
  return [':merchantId', '/:merchantId/recommendations/generate', args] as const
}

export function getMerchantIdRecommendationsGenerateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRecommendationsGenerateQueryKey>
  >({
    queryKey: getMerchantIdRecommendationsGenerateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].recommendations.generate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRecommendationsGenerate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRecommendationsGenerateQueryKey>
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
      ...getMerchantIdRecommendationsGenerateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdRecommendationsGenerate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRecommendationsGenerateQueryKey>
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
      ...getMerchantIdRecommendationsGenerateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdRecommendationsReportInteractionMutationKey() {
  return [':merchantId', '/:merchantId/recommendations/reportInteraction', 'POST'] as const
}

export function getPostMerchantIdRecommendationsReportInteractionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdRecommendationsReportInteractionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].recommendations.reportInteraction.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdRecommendationsReportInteraction<
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
                  (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
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
  const mutationDefaults = getPostMerchantIdRecommendationsReportInteractionMutationOptions<
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

export function getMerchantIdRegionsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
) {
  return [':merchantId', '/:merchantId/regions', args] as const
}

export function getMerchantIdRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRegionsQueryKey>
  >({
    queryKey: getMerchantIdRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].regions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantIdRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantIdRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantIdRegionsMutationKey() {
  return [':merchantId', '/:merchantId/regions', 'POST'] as const
}

export function getPostMerchantIdRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['regions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdRegionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':merchantId']['regions']['$post']>) {
      return parseResponse(client[':merchantId'].regions.$post(args, options))
    },
  })
}

export function usePostMerchantIdRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['regions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdRegionsMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdRegionsRegionIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
) {
  return [':merchantId', '/:merchantId/regions/:regionId', args] as const
}

export function getMerchantIdRegionsRegionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRegionsRegionIdQueryKey>
  >({
    queryKey: getMerchantIdRegionsRegionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].regions[':regionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRegionsRegionIdQueryKey>
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
      ...getMerchantIdRegionsRegionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRegionsRegionIdQueryKey>
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
      ...getMerchantIdRegionsRegionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdRegionsRegionIdMutationKey() {
  return [':merchantId', '/:merchantId/regions/:regionId', 'DELETE'] as const
}

export function getDeleteMerchantIdRegionsRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdRegionsRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>,
    ) {
      return parseResponse(client[':merchantId'].regions[':regionId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdRegionsRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdRegionsRegionIdMutationOptions<
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

export function getPatchMerchantIdRegionsRegionIdMutationKey() {
  return [':merchantId', '/:merchantId/regions/:regionId', 'PATCH'] as const
}

export function getPatchMerchantIdRegionsRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdRegionsRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>,
    ) {
      return parseResponse(client[':merchantId'].regions[':regionId'].$patch(args, options))
    },
  })
}

export function usePatchMerchantIdRegionsRegionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantIdRegionsRegionIdMutationOptions<
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

export function getPostMerchantIdReportsSearchMutationKey() {
  return [':merchantId', '/:merchantId/reports/search', 'POST'] as const
}

export function getPostMerchantIdReportsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['reports']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdReportsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].reports.search.$post(args, options))
    },
  })
}

export function usePostMerchantIdReportsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['reports']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdReportsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdRepricingrulesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
) {
  return [':merchantId', '/:merchantId/repricingrules', args] as const
}

export function getMerchantIdRepricingrulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRepricingrulesQueryKey>
  >({
    queryKey: getMerchantIdRepricingrulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].repricingrules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRepricingrules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesQueryKey>
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
      ...getMerchantIdRepricingrulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdRepricingrules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesQueryKey>
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
      ...getMerchantIdRepricingrulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdRepricingrulesMutationKey() {
  return [':merchantId', '/:merchantId/repricingrules', 'POST'] as const
}

export function getPostMerchantIdRepricingrulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdRepricingrulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].repricingrules.$post(args, options))
    },
  })
}

export function usePostMerchantIdRepricingrules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdRepricingrulesMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdRepricingrulesRuleIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
) {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', args] as const
}

export function getMerchantIdRepricingrulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRepricingrulesRuleIdQueryKey>
  >({
    queryKey: getMerchantIdRepricingrulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].repricingrules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRepricingrulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesRuleIdQueryKey>
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
      ...getMerchantIdRepricingrulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdRepricingrulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesRuleIdQueryKey>
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
      ...getMerchantIdRepricingrulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdRepricingrulesRuleIdMutationKey() {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', 'DELETE'] as const
}

export function getDeleteMerchantIdRepricingrulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdRepricingrulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(client[':merchantId'].repricingrules[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteMerchantIdRepricingrulesRuleId<
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
                ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantIdRepricingrulesRuleIdMutationOptions<
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

export function getPatchMerchantIdRepricingrulesRuleIdMutationKey() {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId', 'PATCH'] as const
}

export function getPatchMerchantIdRepricingrulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdRepricingrulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>,
    ) {
      return parseResponse(client[':merchantId'].repricingrules[':ruleId'].$patch(args, options))
    },
  })
}

export function usePatchMerchantIdRepricingrulesRuleId<
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
                ReturnType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantIdRepricingrulesRuleIdMutationOptions<
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

export function getMerchantIdRepricingrulesRuleIdRepricingreportsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/repricingrules/:ruleId/repricingreports', args] as const
}

export function getMerchantIdRepricingrulesRuleIdRepricingreportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdRepricingrulesRuleIdRepricingreportsQueryKey>
  >({
    queryKey: getMerchantIdRepricingrulesRuleIdRepricingreportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].repricingrules[':ruleId'].repricingreports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdRepricingrulesRuleIdRepricingreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesRuleIdRepricingreportsQueryKey>
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
      ...getMerchantIdRepricingrulesRuleIdRepricingreportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdRepricingrulesRuleIdRepricingreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdRepricingrulesRuleIdRepricingreportsQueryKey>
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
      ...getMerchantIdRepricingrulesRuleIdRepricingreportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdReturnaddressQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnaddress', args] as const
}

export function getMerchantIdReturnaddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnaddressQueryKey>
  >({
    queryKey: getMerchantIdReturnaddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnaddress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnaddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnaddressQueryKey>
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
      ...getMerchantIdReturnaddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnaddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnaddressQueryKey>
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
      ...getMerchantIdReturnaddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdReturnaddressMutationKey() {
  return [':merchantId', '/:merchantId/returnaddress', 'POST'] as const
}

export function getPostMerchantIdReturnaddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdReturnaddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].returnaddress.$post(args, options))
    },
  })
}

export function usePostMerchantIdReturnaddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnaddress']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdReturnaddressMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdReturnaddressReturnAddressIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/returnaddress/:returnAddressId', args] as const
}

export function getMerchantIdReturnaddressReturnAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnaddressReturnAddressIdQueryKey>
  >({
    queryKey: getMerchantIdReturnaddressReturnAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnaddress[':returnAddressId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnaddressReturnAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnaddressReturnAddressIdQueryKey>
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
      ...getMerchantIdReturnaddressReturnAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnaddressReturnAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnaddressReturnAddressIdQueryKey>
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
      ...getMerchantIdReturnaddressReturnAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdReturnaddressReturnAddressIdMutationKey() {
  return [':merchantId', '/:merchantId/returnaddress/:returnAddressId', 'DELETE'] as const
}

export function getDeleteMerchantIdReturnaddressReturnAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdReturnaddressReturnAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].returnaddress[':returnAddressId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdReturnaddressReturnAddressId<
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
                  (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdReturnaddressReturnAddressIdMutationOptions<
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

export function getMerchantIdReturnpolicyQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicy', args] as const
}

export function getMerchantIdReturnpolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnpolicyQueryKey>
  >({
    queryKey: getMerchantIdReturnpolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnpolicy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnpolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyQueryKey>
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
      ...getMerchantIdReturnpolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnpolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyQueryKey>
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
      ...getMerchantIdReturnpolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdReturnpolicyMutationKey() {
  return [':merchantId', '/:merchantId/returnpolicy', 'POST'] as const
}

export function getPostMerchantIdReturnpolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdReturnpolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].returnpolicy.$post(args, options))
    },
  })
}

export function usePostMerchantIdReturnpolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdReturnpolicyMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantIdReturnpolicyReturnPolicyIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicy/:returnPolicyId', args] as const
}

export function getMerchantIdReturnpolicyReturnPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnpolicyReturnPolicyIdQueryKey>
  >({
    queryKey: getMerchantIdReturnpolicyReturnPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnpolicy[':returnPolicyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnpolicyReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyReturnPolicyIdQueryKey>
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
      ...getMerchantIdReturnpolicyReturnPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnpolicyReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyReturnPolicyIdQueryKey>
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
      ...getMerchantIdReturnpolicyReturnPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdReturnpolicyReturnPolicyIdMutationKey() {
  return [':merchantId', '/:merchantId/returnpolicy/:returnPolicyId', 'DELETE'] as const
}

export function getDeleteMerchantIdReturnpolicyReturnPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdReturnpolicyReturnPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].returnpolicy[':returnPolicyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdReturnpolicyReturnPolicyId<
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
                  (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdReturnpolicyReturnPolicyIdMutationOptions<
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

export function getMerchantIdReturnpolicyonlineQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
) {
  return [':merchantId', '/:merchantId/returnpolicyonline', args] as const
}

export function getMerchantIdReturnpolicyonlineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnpolicyonlineQueryKey>
  >({
    queryKey: getMerchantIdReturnpolicyonlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnpolicyonline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnpolicyonline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyonlineQueryKey>
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
      ...getMerchantIdReturnpolicyonlineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnpolicyonline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyonlineQueryKey>
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
      ...getMerchantIdReturnpolicyonlineQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdReturnpolicyonlineMutationKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline', 'POST'] as const
}

export function getPostMerchantIdReturnpolicyonlineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdReturnpolicyonlineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].returnpolicyonline.$post(args, options))
    },
  })
}

export function usePostMerchantIdReturnpolicyonline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdReturnpolicyonlineMutationOptions<
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

export function getMerchantIdReturnpolicyonlineReturnPolicyIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', args] as const
}

export function getMerchantIdReturnpolicyonlineReturnPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdReturnpolicyonlineReturnPolicyIdQueryKey>
  >({
    queryKey: getMerchantIdReturnpolicyonlineReturnPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].returnpolicyonline[':returnPolicyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdReturnpolicyonlineReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyonlineReturnPolicyIdQueryKey>
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
      ...getMerchantIdReturnpolicyonlineReturnPolicyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdReturnpolicyonlineReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdReturnpolicyonlineReturnPolicyIdQueryKey>
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
      ...getMerchantIdReturnpolicyonlineReturnPolicyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdMutationKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', 'DELETE'] as const
}

export function getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].returnpolicyonline[':returnPolicyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantIdReturnpolicyonlineReturnPolicyId<
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
                  (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
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
  const mutationDefaults = getDeleteMerchantIdReturnpolicyonlineReturnPolicyIdMutationOptions<
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

export function getPatchMerchantIdReturnpolicyonlineReturnPolicyIdMutationKey() {
  return [':merchantId', '/:merchantId/returnpolicyonline/:returnPolicyId', 'PATCH'] as const
}

export function getPatchMerchantIdReturnpolicyonlineReturnPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantIdReturnpolicyonlineReturnPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].returnpolicyonline[':returnPolicyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantIdReturnpolicyonlineReturnPolicyId<
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
                  (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
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
  const mutationDefaults = getPatchMerchantIdReturnpolicyonlineReturnPolicyIdMutationOptions<
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

export function getMerchantIdSettlementreportsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
) {
  return [':merchantId', '/:merchantId/settlementreports', args] as const
}

export function getMerchantIdSettlementreportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSettlementreportsQueryKey>
  >({
    queryKey: getMerchantIdSettlementreportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].settlementreports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSettlementreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsQueryKey>
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
      ...getMerchantIdSettlementreportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSettlementreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['settlementreports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsQueryKey>
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
      ...getMerchantIdSettlementreportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdSettlementreportsSettlementIdQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/settlementreports/:settlementId', args] as const
}

export function getMerchantIdSettlementreportsSettlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSettlementreportsSettlementIdQueryKey>
  >({
    queryKey: getMerchantIdSettlementreportsSettlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].settlementreports[':settlementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSettlementreportsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsSettlementIdQueryKey>
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
      ...getMerchantIdSettlementreportsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSettlementreportsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsSettlementIdQueryKey>
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
      ...getMerchantIdSettlementreportsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdSettlementreportsSettlementIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/settlementreports/:settlementId/transactions', args] as const
}

export function getMerchantIdSettlementreportsSettlementIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSettlementreportsSettlementIdTransactionsQueryKey>
  >({
    queryKey: getMerchantIdSettlementreportsSettlementIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].settlementreports[':settlementId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSettlementreportsSettlementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsSettlementIdTransactionsQueryKey>
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
      ...getMerchantIdSettlementreportsSettlementIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSettlementreportsSettlementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSettlementreportsSettlementIdTransactionsQueryKey>
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
      ...getMerchantIdSettlementreportsSettlementIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdShippingsettingsQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings', args] as const
}

export function getMerchantIdShippingsettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdShippingsettingsQueryKey>
  >({
    queryKey: getMerchantIdShippingsettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].shippingsettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdShippingsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShippingsettingsQueryKey>
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
      ...getMerchantIdShippingsettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdShippingsettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['shippingsettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShippingsettingsQueryKey>
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
      ...getMerchantIdShippingsettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdShippingsettingsAccountIdQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
) {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', args] as const
}

export function getMerchantIdShippingsettingsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdShippingsettingsAccountIdQueryKey>
  >({
    queryKey: getMerchantIdShippingsettingsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].shippingsettings[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdShippingsettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShippingsettingsAccountIdQueryKey>
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
      ...getMerchantIdShippingsettingsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdShippingsettingsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShippingsettingsAccountIdQueryKey>
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
      ...getMerchantIdShippingsettingsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMerchantIdShippingsettingsAccountIdMutationKey() {
  return [':merchantId', '/:merchantId/shippingsettings/:accountId', 'PUT'] as const
}

export function getPutMerchantIdShippingsettingsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMerchantIdShippingsettingsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']
      >,
    ) {
      return parseResponse(client[':merchantId'].shippingsettings[':accountId'].$put(args, options))
    },
  })
}

export function usePutMerchantIdShippingsettingsAccountId<
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
                ReturnType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMerchantIdShippingsettingsAccountIdMutationOptions<
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

export function getMerchantIdShoppingadsprogramQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
) {
  return [':merchantId', '/:merchantId/shoppingadsprogram', args] as const
}

export function getMerchantIdShoppingadsprogramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdShoppingadsprogramQueryKey>
  >({
    queryKey: getMerchantIdShoppingadsprogramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].shoppingadsprogram.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdShoppingadsprogram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShoppingadsprogramQueryKey>
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
      ...getMerchantIdShoppingadsprogramQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdShoppingadsprogram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdShoppingadsprogramQueryKey>
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
      ...getMerchantIdShoppingadsprogramQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdShoppingadsprogramRequestreviewMutationKey() {
  return [':merchantId', '/:merchantId/shoppingadsprogram/requestreview', 'POST'] as const
}

export function getPostMerchantIdShoppingadsprogramRequestreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdShoppingadsprogramRequestreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].shoppingadsprogram.requestreview.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdShoppingadsprogramRequestreview<
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
                  (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
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
  const mutationDefaults = getPostMerchantIdShoppingadsprogramRequestreviewMutationOptions<
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

export function getMerchantIdSupportedCarriersQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedCarriers', args] as const
}

export function getMerchantIdSupportedCarriersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedCarriersQueryKey>
  >({
    queryKey: getMerchantIdSupportedCarriersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedCarriers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSupportedCarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedCarriersQueryKey>
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
      ...getMerchantIdSupportedCarriersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSupportedCarriers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedCarriers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedCarriersQueryKey>
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
      ...getMerchantIdSupportedCarriersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdSupportedHolidaysQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedHolidays', args] as const
}

export function getMerchantIdSupportedHolidaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedHolidaysQueryKey>
  >({
    queryKey: getMerchantIdSupportedHolidaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedHolidays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSupportedHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedHolidaysQueryKey>
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
      ...getMerchantIdSupportedHolidaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSupportedHolidays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedHolidays']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedHolidaysQueryKey>
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
      ...getMerchantIdSupportedHolidaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantIdSupportedPickupServicesQueryKey(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
) {
  return [':merchantId', '/:merchantId/supportedPickupServices', args] as const
}

export function getMerchantIdSupportedPickupServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdSupportedPickupServicesQueryKey>
  >({
    queryKey: getMerchantIdSupportedPickupServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].supportedPickupServices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdSupportedPickupServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedPickupServicesQueryKey>
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
      ...getMerchantIdSupportedPickupServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdSupportedPickupServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdSupportedPickupServicesQueryKey>
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
      ...getMerchantIdSupportedPickupServicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantIdTestordersMutationKey() {
  return [':merchantId', '/:merchantId/testorders', 'POST'] as const
}

export function getPostMerchantIdTestordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':merchantId']['testorders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
    ) {
      return parseResponse(client[':merchantId'].testorders.$post(args, options))
    },
  })
}

export function usePostMerchantIdTestorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':merchantId']['testorders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantIdTestordersMutationOptions<TError, TOnMutateResult>(
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

export function getPostMerchantIdTestordersOrderIdAdvanceMutationKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/advance', 'POST'] as const
}

export function getPostMerchantIdTestordersOrderIdAdvanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersOrderIdAdvanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].testorders[':orderId'].advance.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdTestordersOrderIdAdvance<
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
                  (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
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
  const mutationDefaults = getPostMerchantIdTestordersOrderIdAdvanceMutationOptions<
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

export function getPostMerchantIdTestordersOrderIdCancelByCustomerMutationKey() {
  return [':merchantId', '/:merchantId/testorders/:orderId/cancelByCustomer', 'POST'] as const
}

export function getPostMerchantIdTestordersOrderIdCancelByCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantIdTestordersOrderIdCancelByCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
      >,
    ) {
      return parseResponse(
        client[':merchantId'].testorders[':orderId'].cancelByCustomer.$post(args, options),
      )
    },
  })
}

export function usePostMerchantIdTestordersOrderIdCancelByCustomer<
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
                  (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
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
  const mutationDefaults = getPostMerchantIdTestordersOrderIdCancelByCustomerMutationOptions<
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

export function getMerchantIdTestordertemplatesTemplateNameQueryKey(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
) {
  return [':merchantId', '/:merchantId/testordertemplates/:templateName', args] as const
}

export function getMerchantIdTestordertemplatesTemplateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantIdTestordertemplatesTemplateNameQueryKey>
  >({
    queryKey: getMerchantIdTestordertemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':merchantId'].testordertemplates[':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantIdTestordertemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdTestordertemplatesTemplateNameQueryKey>
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
      ...getMerchantIdTestordertemplatesTemplateNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantIdTestordertemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantIdTestordertemplatesTemplateNameQueryKey>
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
      ...getMerchantIdTestordertemplatesTemplateNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
