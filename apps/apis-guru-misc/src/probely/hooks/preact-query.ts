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

export function getAccountKey() {
  return ['account'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getCheckKey() {
  return ['check'] as const
}

export function getEnterpriseKey() {
  return ['enterprise'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFrameworksKey() {
  return ['frameworks'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getResetKey() {
  return ['reset'] as const
}

export function getSetpasswordKey() {
  return ['setpassword'] as const
}

export function getTargetActionsKey() {
  return ['target-actions'] as const
}

export function getTargetsKey() {
  return ['targets'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVulnerabilityDefinitionsKey() {
  return ['vulnerability_definitions'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountIndexQueryKey() {
  return ['account', '/account/'] as const
}

export function getAccountIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIndexQueryKey>
  >({
    queryKey: getAccountIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthObtainIndexMutationKey() {
  return ['auth', '/auth/obtain/', 'POST'] as const
}

export function getPostAuthObtainIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.obtain.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.obtain.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthObtainIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.obtain.index.$post>) {
      return parseResponse(client.auth.obtain.index.$post(args, options))
    },
  })
}

export function usePostAuthObtainIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.obtain.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.obtain.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthObtainIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthRefreshIndexMutationKey() {
  return ['auth', '/auth/refresh/', 'POST'] as const
}

export function getPostAuthRefreshIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.refresh.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.refresh.index.$post>) {
      return parseResponse(client.auth.refresh.index.$post(args, options))
    },
  })
}

export function usePostAuthRefreshIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.refresh.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthRefreshIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthRevokeIndexMutationKey() {
  return ['auth', '/auth/revoke/', 'POST'] as const
}

export function getPostAuthRevokeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.revoke.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.revoke.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRevokeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.revoke.index.$post>) {
      return parseResponse(client.auth.revoke.index.$post(args, options))
    },
  })
}

export function usePostAuthRevokeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.revoke.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.revoke.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthRevokeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthVerifyIndexMutationKey() {
  return ['auth', '/auth/verify/', 'POST'] as const
}

export function getPostAuthVerifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.verify.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthVerifyIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.verify.index.$post>) {
      return parseResponse(client.auth.verify.index.$post(args, options))
    },
  })
}

export function usePostAuthVerifyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.verify.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthVerifyIndexMutationOptions<TError, TOnMutateResult>(
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

export function getBillingIndexQueryKey() {
  return ['billing', '/billing/'] as const
}

export function getBillingIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingIndexQueryKey>
  >({
    queryKey: getBillingIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBillingIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBillingIndexMutationKey() {
  return ['billing', '/billing/', 'PUT'] as const
}

export function getPutBillingIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.billing.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.index.$put>) {
      return parseResponse(client.billing.index.$put(args, options))
    },
  })
}

export function usePutBillingIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.billing.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBillingIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBillingIndexMutationKey() {
  return ['billing', '/billing/', 'PATCH'] as const
}

export function getPatchBillingIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.billing.index.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillingIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.index.$patch>) {
      return parseResponse(client.billing.index.$patch(args, options))
    },
  })
}

export function usePatchBillingIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.billing.index.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBillingIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBillingActionsIndexMutationKey() {
  return ['billing', '/billing/actions/', 'POST'] as const
}

export function getPostBillingActionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.actions.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.billing.actions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingActionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.actions.index.$post>) {
      return parseResponse(client.billing.actions.index.$post(args, options))
    },
  })
}

export function usePostBillingActionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.actions.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.billing.actions.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingActionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBillingEstimateIndexMutationKey() {
  return ['billing', '/billing/estimate/', 'POST'] as const
}

export function getPostBillingEstimateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.estimate.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.billing.estimate.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingEstimateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.estimate.index.$post>) {
      return parseResponse(client.billing.estimate.index.$post(args, options))
    },
  })
}

export function usePostBillingEstimateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.estimate.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.billing.estimate.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingEstimateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostBillingSubscribeIndexMutationKey() {
  return ['billing', '/billing/subscribe/', 'POST'] as const
}

export function getPostBillingSubscribeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.subscribe.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.billing.subscribe.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingSubscribeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.billing.subscribe.index.$post>) {
      return parseResponse(client.billing.subscribe.index.$post(args, options))
    },
  })
}

export function usePostBillingSubscribeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.subscribe.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.billing.subscribe.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingSubscribeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostCheckIndexMutationKey() {
  return ['check', '/check/', 'POST'] as const
}

export function getPostCheckIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.check.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check.index.$post>) {
      return parseResponse(client.check.index.$post(args, options))
    },
  })
}

export function usePostCheckIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.check.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEnterpriseAuthObtainIndexMutationKey() {
  return ['enterprise', '/enterprise/auth/obtain/', 'POST'] as const
}

export function getPostEnterpriseAuthObtainIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.obtain.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enterprise.auth.obtain.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseAuthObtainIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enterprise.auth.obtain.index.$post>) {
      return parseResponse(client.enterprise.auth.obtain.index.$post(args, options))
    },
  })
}

export function usePostEnterpriseAuthObtainIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.enterprise.auth.obtain.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.enterprise.auth.obtain.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterpriseAuthObtainIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostEnterpriseAuthRefreshIndexMutationKey() {
  return ['enterprise', '/enterprise/auth/refresh/', 'POST'] as const
}

export function getPostEnterpriseAuthRefreshIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.refresh.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enterprise.auth.refresh.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseAuthRefreshIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enterprise.auth.refresh.index.$post>) {
      return parseResponse(client.enterprise.auth.refresh.index.$post(args, options))
    },
  })
}

export function usePostEnterpriseAuthRefreshIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.enterprise.auth.refresh.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.enterprise.auth.refresh.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterpriseAuthRefreshIndexMutationOptions<
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

export function getPostEnterpriseAuthRevokeIndexMutationKey() {
  return ['enterprise', '/enterprise/auth/revoke/', 'POST'] as const
}

export function getPostEnterpriseAuthRevokeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.revoke.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enterprise.auth.revoke.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseAuthRevokeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enterprise.auth.revoke.index.$post>) {
      return parseResponse(client.enterprise.auth.revoke.index.$post(args, options))
    },
  })
}

export function usePostEnterpriseAuthRevokeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.enterprise.auth.revoke.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.enterprise.auth.revoke.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterpriseAuthRevokeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostEnterpriseAuthVerifyIndexMutationKey() {
  return ['enterprise', '/enterprise/auth/verify/', 'POST'] as const
}

export function getPostEnterpriseAuthVerifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.verify.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enterprise.auth.verify.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterpriseAuthVerifyIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enterprise.auth.verify.index.$post>) {
      return parseResponse(client.enterprise.auth.verify.index.$post(args, options))
    },
  })
}

export function usePostEnterpriseAuthVerifyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.enterprise.auth.verify.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.enterprise.auth.verify.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterpriseAuthVerifyIndexMutationOptions<TError, TOnMutateResult>(
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

export function getEventsIndexQueryKey() {
  return ['events', '/events/'] as const
}

export function getEventsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsIndexQueryKey>
  >({
    queryKey: getEventsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsIdIndexQueryKey(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
) {
  return ['events', '/events/:id/', args] as const
}

export function getEventsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdIndexQueryKey>
  >({
    queryKey: getEventsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFrameworksIndexQueryKey(
  args: InferRequestType<typeof client.frameworks.index.$get>,
) {
  return ['frameworks', '/frameworks/', args] as const
}

export function getFrameworksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.frameworks.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFrameworksIndexQueryKey>
  >({
    queryKey: getFrameworksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.frameworks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFrameworksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.frameworks.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFrameworksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFrameworksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFrameworksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.frameworks.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFrameworksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFrameworksIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFrameworksIdIndexQueryKey(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
) {
  return ['frameworks', '/frameworks/:id/', args] as const
}

export function getFrameworksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFrameworksIdIndexQueryKey>
  >({
    queryKey: getFrameworksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.frameworks[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFrameworksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFrameworksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFrameworksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFrameworksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFrameworksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFrameworksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIntegrationsIndexQueryKey() {
  return ['integrations', '/integrations/'] as const
}

export function getIntegrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIndexQueryKey>
  >({
    queryKey: getIntegrationsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntegrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntegrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsIndexQueryKey() {
  return ['integrations', '/integrations/jira-cloud/projects/'] as const
}

export function getIntegrationsJiraCloudProjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraCloudProjectsIndexQueryKey>
  >({
    queryKey: getIntegrationsJiraCloudProjectsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-cloud'].projects.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsJiraCloudProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraCloudProjectsIndexQueryKey>
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
      ...getIntegrationsJiraCloudProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraCloudProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraCloudProjectsIndexQueryKey>
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
      ...getIntegrationsJiraCloudProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/',
    args,
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey>
  >({
    queryKey: getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey>
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey>
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/priorities/',
    args,
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
    >
  >({
    queryKey:
      getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].priorities.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
        >
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
        >
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/status/',
    args,
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
    >
  >({
    queryKey:
      getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].status.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
        >
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
        >
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
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsIndexQueryKey() {
  return ['integrations', '/integrations/jira-server/projects/'] as const
}

export function getIntegrationsJiraServerProjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraServerProjectsIndexQueryKey>
  >({
    queryKey: getIntegrationsJiraServerProjectsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-server'].projects.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsJiraServerProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraServerProjectsIndexQueryKey>
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
      ...getIntegrationsJiraServerProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraServerProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraServerProjectsIndexQueryKey>
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
      ...getIntegrationsJiraServerProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/',
    args,
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey>
  >({
    queryKey: getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsJiraServerProjectsProjectIdIssueTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey>
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraServerProjectsProjectIdIssueTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey>
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/priorities/',
    args,
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
    >
  >({
    queryKey:
      getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].priorities.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
        >
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
        >
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/status/',
    args,
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
    >
  >({
    queryKey:
      getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].status.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
        >
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
        >
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
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getKeysIndexQueryKey(args: InferRequestType<typeof client.keys.index.$get>) {
  return ['keys', '/keys/', args] as const
}

export function getKeysIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keys.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysIndexQueryKey>
  >({
    queryKey: getKeysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKeysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.keys.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKeysIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKeysIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKeysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.keys.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKeysIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKeysIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostKeysIndexMutationKey() {
  return ['keys', '/keys/', 'POST'] as const
}

export function getPostKeysIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.keys.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.keys.index.$post>) {
      return parseResponse(client.keys.index.$post(args, options))
    },
  })
}

export function usePostKeysIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.keys.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeysIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysIdIndexQueryKey(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
) {
  return ['keys', '/keys/:id/', args] as const
}

export function getKeysIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysIdIndexQueryKey>
  >({
    queryKey: getKeysIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKeysIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKeysIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteKeysIdIndexMutationKey() {
  return ['keys', '/keys/:id/', 'DELETE'] as const
}

export function getDeleteKeysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.keys)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':id']['index']['$delete']>) {
      return parseResponse(client.keys[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteKeysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.keys)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKeysIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getLabelsIndexQueryKey(args: InferRequestType<typeof client.labels.index.$get>) {
  return ['labels', '/labels/', args] as const
}

export function getLabelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.labels.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsIndexQueryKey>
  >({
    queryKey: getLabelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLabelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.labels.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLabelsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLabelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.labels.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLabelsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLabelsIndexMutationKey() {
  return ['labels', '/labels/', 'POST'] as const
}

export function getPostLabelsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.labels.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labels.index.$post>) {
      return parseResponse(client.labels.index.$post(args, options))
    },
  })
}

export function usePostLabelsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.labels.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLabelsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelsIdIndexQueryKey(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
) {
  return ['labels', '/labels/:id/', args] as const
}

export function getLabelsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdIndexQueryKey>
  >({
    queryKey: getLabelsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLabelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLabelsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLabelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLabelsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLabelsIdIndexMutationKey() {
  return ['labels', '/labels/:id/', 'PUT'] as const
}

export function getPutLabelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['index']['$put']>) {
      return parseResponse(client.labels[':id'].index.$put(args, options))
    },
  })
}

export function usePutLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.labels)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLabelsIdIndexMutationKey() {
  return ['labels', '/labels/:id/', 'DELETE'] as const
}

export function getDeleteLabelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.labels)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['index']['$delete']>) {
      return parseResponse(client.labels[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.labels)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLabelsIdIndexMutationKey() {
  return ['labels', '/labels/:id/', 'PATCH'] as const
}

export function getPatchLabelsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLabelsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['index']['$patch']>) {
      return parseResponse(client.labels[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.labels)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPlansIndexQueryKey() {
  return ['plans', '/plans/'] as const
}

export function getPlansIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansIndexQueryKey>
  >({
    queryKey: getPlansIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.plans.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlansIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlansIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileIndexQueryKey(args: InferRequestType<typeof client.profile.index.$get>) {
  return ['profile', '/profile/', args] as const
}

export function getProfileIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profile.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileIndexQueryKey>
  >({
    queryKey: getProfileIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfileChangePasswordIndexMutationKey() {
  return ['profile', '/profile/change_password/', 'POST'] as const
}

export function getPostProfileChangePasswordIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.profile.change_password.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.profile.change_password.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileChangePasswordIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.change_password.index.$post>) {
      return parseResponse(client.profile.change_password.index.$post(args, options))
    },
  })
}

export function usePostProfileChangePasswordIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.profile.change_password.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.profile.change_password.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileChangePasswordIndexMutationOptions<
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

export function getPostResetIndexMutationKey() {
  return ['reset', '/reset/', 'POST'] as const
}

export function getPostResetIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reset.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.reset.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reset.index.$post>) {
      return parseResponse(client.reset.index.$post(args, options))
    },
  })
}

export function usePostResetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reset.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reset.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResetIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetpasswordIndexMutationKey() {
  return ['setpassword', '/setpassword/', 'POST'] as const
}

export function getPostSetpasswordIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setpassword.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setpassword.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetpasswordIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setpassword.index.$post>) {
      return parseResponse(client.setpassword.index.$post(args, options))
    },
  })
}

export function usePostSetpasswordIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.setpassword.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.setpassword.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetpasswordIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostTargetActionsIndexMutationKey() {
  return ['target-actions', '/target-actions/', 'POST'] as const
}

export function getPostTargetActionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-actions']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['target-actions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetActionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['target-actions']['index']['$post']>) {
      return parseResponse(client['target-actions'].index.$post(args, options))
    },
  })
}

export function usePostTargetActionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['target-actions']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['target-actions']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetActionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getTargetsIndexQueryKey(args: InferRequestType<typeof client.targets.index.$get>) {
  return ['targets', '/targets/', args] as const
}

export function getTargetsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.targets.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsIndexQueryKey>
  >({
    queryKey: getTargetsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTargetsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTargetsIndexMutationKey() {
  return ['targets', '/targets/', 'POST'] as const
}

export function getPostTargetsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.targets.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.targets.index.$post>) {
      return parseResponse(client.targets.index.$post(args, options))
    },
  })
}

export function usePostTargetsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.targets.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostTargetsActivateIndexMutationKey() {
  return ['targets', '/targets/activate/', 'POST'] as const
}

export function getPostTargetsActivateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.activate.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.targets.activate.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsActivateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.targets.activate.index.$post>) {
      return parseResponse(client.targets.activate.index.$post(args, options))
    },
  })
}

export function usePostTargetsActivateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targets.activate.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.targets.activate.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsActivateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getTargetsAllAverageFixTimeIndexQueryKey() {
  return ['targets', '/targets/all/average_fix_time/'] as const
}

export function getTargetsAllAverageFixTimeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllAverageFixTimeIndexQueryKey>
  >({
    queryKey: getTargetsAllAverageFixTimeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.average_fix_time.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllAverageFixTimeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllAverageFixTimeIndexQueryKey>
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
      ...getTargetsAllAverageFixTimeIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsAllAverageFixTimeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllAverageFixTimeIndexQueryKey>
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
      ...getTargetsAllAverageFixTimeIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsAllNeedsAttentionPieIndexQueryKey() {
  return ['targets', '/targets/all/needs_attention_pie/'] as const
}

export function getTargetsAllNeedsAttentionPieIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllNeedsAttentionPieIndexQueryKey>
  >({
    queryKey: getTargetsAllNeedsAttentionPieIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.needs_attention_pie.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllNeedsAttentionPieIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllNeedsAttentionPieIndexQueryKey>
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
      ...getTargetsAllNeedsAttentionPieIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsAllNeedsAttentionPieIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllNeedsAttentionPieIndexQueryKey>
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
      ...getTargetsAllNeedsAttentionPieIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsAllNeedsAttentionTopIndexQueryKey() {
  return ['targets', '/targets/all/needs_attention_top/'] as const
}

export function getTargetsAllNeedsAttentionTopIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllNeedsAttentionTopIndexQueryKey>
  >({
    queryKey: getTargetsAllNeedsAttentionTopIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.needs_attention_top.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllNeedsAttentionTopIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllNeedsAttentionTopIndexQueryKey>
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
      ...getTargetsAllNeedsAttentionTopIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsAllNeedsAttentionTopIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllNeedsAttentionTopIndexQueryKey>
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
      ...getTargetsAllNeedsAttentionTopIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsAllRiskTrendIndexQueryKey() {
  return ['targets', '/targets/all/risk_trend/'] as const
}

export function getTargetsAllRiskTrendIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllRiskTrendIndexQueryKey>
  >({
    queryKey: getTargetsAllRiskTrendIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.risk_trend.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllRiskTrendIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetsAllRiskTrendIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetsAllRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllRiskTrendIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetsAllRiskTrendIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTargetsAllScansIndexQueryKey(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
) {
  return ['targets', '/targets/all/scans/', args] as const
}

export function getTargetsAllScansIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllScansIndexQueryKey>
  >({
    queryKey: getTargetsAllScansIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.scans.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllScansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetsAllScansIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetsAllScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllScansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetsAllScansIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTargetsAllScheduledscansExpandedIndexQueryKey(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
) {
  return ['targets', '/targets/all/scheduledscans/expanded/', args] as const
}

export function getTargetsAllScheduledscansExpandedIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllScheduledscansExpandedIndexQueryKey>
  >({
    queryKey: getTargetsAllScheduledscansExpandedIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.scheduledscans.expanded.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllScheduledscansExpandedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllScheduledscansExpandedIndexQueryKey>
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
      ...getTargetsAllScheduledscansExpandedIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsAllScheduledscansExpandedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllScheduledscansExpandedIndexQueryKey>
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
      ...getTargetsAllScheduledscansExpandedIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsAllSeverityTrendIndexQueryKey() {
  return ['targets', '/targets/all/severity_trend/'] as const
}

export function getTargetsAllSeverityTrendIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllSeverityTrendIndexQueryKey>
  >({
    queryKey: getTargetsAllSeverityTrendIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.severity_trend.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllSeverityTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllSeverityTrendIndexQueryKey>
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
      ...getTargetsAllSeverityTrendIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsAllSeverityTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllSeverityTrendIndexQueryKey>
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
      ...getTargetsAllSeverityTrendIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsAllTopVulnsIndexQueryKey() {
  return ['targets', '/targets/all/top_vulns/'] as const
}

export function getTargetsAllTopVulnsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllTopVulnsIndexQueryKey>
  >({
    queryKey: getTargetsAllTopVulnsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.all.top_vulns.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsAllTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllTopVulnsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetsAllTopVulnsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetsAllTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsAllTopVulnsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetsAllTopVulnsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTargetsArchiveIndexMutationKey() {
  return ['targets', '/targets/archive/', 'POST'] as const
}

export function getPostTargetsArchiveIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.archive.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.targets.archive.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsArchiveIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.targets.archive.index.$post>) {
      return parseResponse(client.targets.archive.index.$post(args, options))
    },
  })
}

export function usePostTargetsArchiveIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targets.archive.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.targets.archive.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsArchiveIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostTargetsArchivedIndexMutationKey() {
  return ['targets', '/targets/archived/', 'POST'] as const
}

export function getPostTargetsArchivedIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.archived.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.targets.archived.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsArchivedIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.targets.archived.index.$post>) {
      return parseResponse(client.targets.archived.index.$post(args, options))
    },
  })
}

export function usePostTargetsArchivedIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.targets.archived.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.targets.archived.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsArchivedIndexMutationOptions<TError, TOnMutateResult>(
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

export function getTargetsIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
) {
  return ['targets', '/targets/:id/', args] as const
}

export function getTargetsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsIdIndexQueryKey>
  >({
    queryKey: getTargetsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTargetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTargetsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTargetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTargetsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTargetsIdIndexMutationKey() {
  return ['targets', '/targets/:id/', 'PUT'] as const
}

export function getPutTargetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.targets)[':id']['index']['$put']>) {
      return parseResponse(client.targets[':id'].index.$put(args, options))
    },
  })
}

export function usePutTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTargetsIdIndexMutationKey() {
  return ['targets', '/targets/:id/', 'DELETE'] as const
}

export function getDeleteTargetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.targets)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTargetsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.targets)[':id']['index']['$delete']>) {
      return parseResponse(client.targets[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targets)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.targets)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTargetsIdIndexMutationKey() {
  return ['targets', '/targets/:id/', 'PATCH'] as const
}

export function getPatchTargetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.targets)[':id']['index']['$patch']>) {
      return parseResponse(client.targets[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getTargetsTargetIdAssetsIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/assets/', args] as const
}

export function getTargetsTargetIdAssetsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAssetsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdAssetsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].assets.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdAssetsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAssetsIndexQueryKey>
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
      ...getTargetsTargetIdAssetsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdAssetsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAssetsIndexQueryKey>
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
      ...getTargetsTargetIdAssetsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdAssetsIndexMutationKey() {
  return ['targets', '/targets/:target_id/assets/', 'POST'] as const
}

export function getPostTargetsTargetIdAssetsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdAssetsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>,
    ) {
      return parseResponse(client.targets[':target_id'].assets.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdAssetsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdAssetsIndexMutationOptions<
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

export function getTargetsTargetIdAssetsIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/assets/:id/', args] as const
}

export function getTargetsTargetIdAssetsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAssetsIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdAssetsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].assets[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdAssetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAssetsIdIndexQueryKey>
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
      ...getTargetsTargetIdAssetsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdAssetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAssetsIdIndexQueryKey>
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
      ...getTargetsTargetIdAssetsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdAssetsIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'PUT'] as const
}

export function getPutTargetsTargetIdAssetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdAssetsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['assets'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].assets[':id'].index.$put(args, options))
    },
  })
}

export function usePutTargetsTargetIdAssetsIdIndex<
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
                ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function getDeleteTargetsTargetIdAssetsIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'DELETE'] as const
}

export function getDeleteTargetsTargetIdAssetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTargetsTargetIdAssetsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].assets[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTargetsTargetIdAssetsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function getPatchTargetsTargetIdAssetsIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdAssetsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdAssetsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].assets[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTargetsTargetIdAssetsIdIndex<
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
                  (typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function getPostTargetsTargetIdAssetsIdVerifyIndexMutationKey() {
  return ['targets', '/targets/:target_id/assets/:id/verify/', 'POST'] as const
}

export function getPostTargetsTargetIdAssetsIdVerifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdAssetsIdVerifyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].assets[':id'].verify.index.$post(args, options),
      )
    },
  })
}

export function usePostTargetsTargetIdAssetsIdVerifyIndex<
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
                  (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
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
  const mutationDefaults = getPostTargetsTargetIdAssetsIdVerifyIndexMutationOptions<
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

export function getTargetsTargetIdAverageFixTimeIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/average_fix_time/', args] as const
}

export function getTargetsTargetIdAverageFixTimeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAverageFixTimeIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdAverageFixTimeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].average_fix_time.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdAverageFixTimeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAverageFixTimeIndexQueryKey>
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
      ...getTargetsTargetIdAverageFixTimeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdAverageFixTimeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdAverageFixTimeIndexQueryKey>
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
      ...getTargetsTargetIdAverageFixTimeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdEventsIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/events/', args] as const
}

export function getTargetsTargetIdEventsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdEventsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].events.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdEventsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdEventsIndexQueryKey>
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
      ...getTargetsTargetIdEventsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdEventsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdEventsIndexQueryKey>
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
      ...getTargetsTargetIdEventsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdEventsIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/events/:id/', args] as const
}

export function getTargetsTargetIdEventsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdEventsIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdEventsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].events[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdEventsIdIndexQueryKey>
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
      ...getTargetsTargetIdEventsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdEventsIdIndexQueryKey>
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
      ...getTargetsTargetIdEventsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdFindingsIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/findings/', args] as const
}

export function getTargetsTargetIdFindingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdFindingsBulkReportIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/bulk/report/', 'POST'] as const
}

export function getPostTargetsTargetIdFindingsBulkReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdFindingsBulkReportIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings.bulk.report.index.$post(args, options),
      )
    },
  })
}

export function usePostTargetsTargetIdFindingsBulkReportIndex<
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
                  (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
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
  const mutationDefaults = getPostTargetsTargetIdFindingsBulkReportIndexMutationOptions<
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

export function getPostTargetsTargetIdFindingsBulkRetestIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/bulk/retest/', 'POST'] as const
}

export function getPostTargetsTargetIdFindingsBulkRetestIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdFindingsBulkRetestIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings.bulk.retest.index.$post(args, options),
      )
    },
  })
}

export function usePostTargetsTargetIdFindingsBulkRetestIndex<
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
                  (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
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
  const mutationDefaults = getPostTargetsTargetIdFindingsBulkRetestIndexMutationOptions<
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

export function getPatchTargetsTargetIdFindingsBulkUpdateIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/bulk/update/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdFindingsBulkUpdateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdFindingsBulkUpdateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings.bulk.update.index.$patch(args, options),
      )
    },
  })
}

export function usePatchTargetsTargetIdFindingsBulkUpdateIndex<
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
                  (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdFindingsBulkUpdateIndexMutationOptions<
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

export function getTargetsTargetIdFindingsReportIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/report/', args] as const
}

export function getTargetsTargetIdFindingsReportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsReportIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsReportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings.report.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsReportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsReportIndexQueryKey>
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
      ...getTargetsTargetIdFindingsReportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsReportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsReportIndexQueryKey>
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
      ...getTargetsTargetIdFindingsReportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdFindingsIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/findings/:id/', args] as const
}

export function getTargetsTargetIdFindingsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdFindingsIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/', 'PUT'] as const
}

export function getPutTargetsTargetIdFindingsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdFindingsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].findings[':id'].index.$put(args, options))
    },
  })
}

export function usePutTargetsTargetIdFindingsIdIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetsTargetIdFindingsIdIndexMutationOptions<
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

export function getPatchTargetsTargetIdFindingsIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdFindingsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdFindingsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].findings[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTargetsTargetIdFindingsIdIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdFindingsIdIndexMutationOptions<
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

export function getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', args] as const
}

export function getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', 'PUT'] as const
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
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
  const mutationDefaults = getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
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

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
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
    getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
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

export function getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', args] as const
}

export function getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', 'PUT'] as const
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
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
    getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
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

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
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
    getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
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

export function getTargetsTargetIdFindingsIdLogIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/log/', args] as const
}

export function getTargetsTargetIdFindingsIdLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdLogIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdFindingsIdLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].log.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdFindingsIdLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdLogIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdLogIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdFindingsIdLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdFindingsIdLogIndexQueryKey>
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
      ...getTargetsTargetIdFindingsIdLogIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdFindingsIdRetestIndexMutationKey() {
  return ['targets', '/targets/:target_id/findings/:id/retest/', 'POST'] as const
}

export function getPostTargetsTargetIdFindingsIdRetestIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdFindingsIdRetestIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].retest.index.$post(args, options),
      )
    },
  })
}

export function usePostTargetsTargetIdFindingsIdRetestIndex<
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
                  (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
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
  const mutationDefaults = getPostTargetsTargetIdFindingsIdRetestIndexMutationOptions<
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

export function getTargetsTargetIdIntegrationsIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/integrations/', args] as const
}

export function getTargetsTargetIdIntegrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdIntegrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].integrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdIntegrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdIntegrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', args] as const
}

export function getTargetsTargetIdIntegrationsJiraCloudIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-cloud'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdIntegrationsJiraCloudIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdIntegrationsJiraCloudIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdIntegrationsJiraCloudIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', 'PUT'] as const
}

export function getPutTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdIntegrationsJiraCloudIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-cloud'].index.$put(args, options),
      )
    },
  })
}

export function usePutTargetsTargetIdIntegrationsJiraCloudIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
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
  const mutationDefaults = getPutTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
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

export function getPatchTargetsTargetIdIntegrationsJiraCloudIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdIntegrationsJiraCloudIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-cloud'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchTargetsTargetIdIntegrationsJiraCloudIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
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

export function getTargetsTargetIdIntegrationsJiraServerIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-server/', args] as const
}

export function getTargetsTargetIdIntegrationsJiraServerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsJiraServerIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdIntegrationsJiraServerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-server'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdIntegrationsJiraServerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsJiraServerIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdIntegrationsJiraServerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsJiraServerIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdIntegrationsJiraServerIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/jira-server/', 'PUT'] as const
}

export function getPutTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdIntegrationsJiraServerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-server'].index.$put(args, options),
      )
    },
  })
}

export function usePutTargetsTargetIdIntegrationsJiraServerIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
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
  const mutationDefaults = getPutTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
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

export function getPatchTargetsTargetIdIntegrationsJiraServerIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/jira-server/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdIntegrationsJiraServerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-server'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchTargetsTargetIdIntegrationsJiraServerIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
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

export function getTargetsTargetIdIntegrationsSlackIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/slack/', args] as const
}

export function getTargetsTargetIdIntegrationsSlackIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsSlackIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdIntegrationsSlackIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].integrations.slack.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdIntegrationsSlackIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsSlackIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsSlackIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdIntegrationsSlackIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdIntegrationsSlackIndexQueryKey>
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
      ...getTargetsTargetIdIntegrationsSlackIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdIntegrationsSlackIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/slack/', 'PUT'] as const
}

export function getPutTargetsTargetIdIntegrationsSlackIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdIntegrationsSlackIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations.slack.index.$put(args, options),
      )
    },
  })
}

export function usePutTargetsTargetIdIntegrationsSlackIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
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
  const mutationDefaults = getPutTargetsTargetIdIntegrationsSlackIndexMutationOptions<
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

export function getPatchTargetsTargetIdIntegrationsSlackIndexMutationKey() {
  return ['targets', '/targets/:target_id/integrations/slack/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdIntegrationsSlackIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdIntegrationsSlackIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].integrations.slack.index.$patch(args, options),
      )
    },
  })
}

export function usePatchTargetsTargetIdIntegrationsSlackIndex<
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
                  (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdIntegrationsSlackIndexMutationOptions<
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

export function getTargetsTargetIdKeysIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/keys/', args] as const
}

export function getTargetsTargetIdKeysIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdKeysIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdKeysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].keys.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdKeysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdKeysIndexQueryKey>
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
      ...getTargetsTargetIdKeysIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdKeysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdKeysIndexQueryKey>
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
      ...getTargetsTargetIdKeysIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdKeysIndexMutationKey() {
  return ['targets', '/targets/:target_id/keys/', 'POST'] as const
}

export function getPostTargetsTargetIdKeysIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdKeysIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>,
    ) {
      return parseResponse(client.targets[':target_id'].keys.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdKeysIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdKeysIndexMutationOptions<TError, TOnMutateResult>(
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

export function getTargetsTargetIdKeysIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/keys/:id/', args] as const
}

export function getTargetsTargetIdKeysIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdKeysIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdKeysIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].keys[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdKeysIdIndexQueryKey>
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
      ...getTargetsTargetIdKeysIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdKeysIdIndexQueryKey>
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
      ...getTargetsTargetIdKeysIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTargetsTargetIdKeysIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/keys/:id/', 'DELETE'] as const
}

export function getDeleteTargetsTargetIdKeysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTargetsTargetIdKeysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].keys[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteTargetsTargetIdKeysIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTargetsTargetIdKeysIdIndexMutationOptions<
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

export function getTargetsTargetIdRiskTrendIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/risk_trend/', args] as const
}

export function getTargetsTargetIdRiskTrendIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdRiskTrendIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdRiskTrendIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].risk_trend.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdRiskTrendIndexQueryKey>
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
      ...getTargetsTargetIdRiskTrendIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdRiskTrendIndexQueryKey>
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
      ...getTargetsTargetIdRiskTrendIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdScanNowIndexMutationKey() {
  return ['targets', '/targets/:target_id/scan_now/', 'POST'] as const
}

export function getPostTargetsTargetIdScanNowIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdScanNowIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>,
    ) {
      return parseResponse(client.targets[':target_id'].scan_now.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdScanNowIndex<
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
                ReturnType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdScanNowIndexMutationOptions<
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

export function getTargetsTargetIdScansIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/', args] as const
}

export function getTargetsTargetIdScansIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIndexQueryKey>
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
      ...getTargetsTargetIdScansIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIndexQueryKey>
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
      ...getTargetsTargetIdScansIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansDatesIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/dates/', args] as const
}

export function getTargetsTargetIdScansDatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansDatesIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansDatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans.dates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansDatesIndexQueryKey>
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
      ...getTargetsTargetIdScansDatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansDatesIndexQueryKey>
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
      ...getTargetsTargetIdScansDatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansRetrievePageIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/retrieve_page/', args] as const
}

export function getTargetsTargetIdScansRetrievePageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansRetrievePageIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansRetrievePageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans.retrieve_page.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansRetrievePageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansRetrievePageIndexQueryKey>
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
      ...getTargetsTargetIdScansRetrievePageIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansRetrievePageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansRetrievePageIndexQueryKey>
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
      ...getTargetsTargetIdScansRetrievePageIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/:id/', args] as const
}

export function getTargetsTargetIdScansIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdIndexQueryKey>
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
      ...getTargetsTargetIdScansIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdIndexQueryKey>
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
      ...getTargetsTargetIdScansIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdScansIdCancelIndexMutationKey() {
  return ['targets', '/targets/:target_id/scans/:id/cancel/', 'POST'] as const
}

export function getPostTargetsTargetIdScansIdCancelIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdScansIdCancelIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].cancel.index.$post(args, options),
      )
    },
  })
}

export function usePostTargetsTargetIdScansIdCancelIndex<
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
                  (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
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
  const mutationDefaults = getPostTargetsTargetIdScansIdCancelIndexMutationOptions<
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

export function getTargetsTargetIdScansIdEndpointsIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/endpoints/', args] as const
}

export function getTargetsTargetIdScansIdEndpointsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdEndpointsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdEndpointsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].endpoints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdEndpointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdEndpointsIndexQueryKey>
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
      ...getTargetsTargetIdScansIdEndpointsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdEndpointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdEndpointsIndexQueryKey>
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
      ...getTargetsTargetIdScansIdEndpointsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/', args] as const
}

export function getTargetsTargetIdScansIdReportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdReportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdReportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdReportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportDefaultIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/default/', args] as const
}

export function getTargetsTargetIdScansIdReportDefaultIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportDefaultIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdReportDefaultIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.default.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdReportDefaultIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportDefaultIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportDefaultIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdReportDefaultIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportDefaultIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportDefaultIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportOwaspIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/owasp/', args] as const
}

export function getTargetsTargetIdScansIdReportOwaspIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportOwaspIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdReportOwaspIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.owasp.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdReportOwaspIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportOwaspIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportOwaspIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdReportOwaspIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportOwaspIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportOwaspIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportPciIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/pci/', args] as const
}

export function getTargetsTargetIdScansIdReportPciIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportPciIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScansIdReportPciIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.pci.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScansIdReportPciIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportPciIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportPciIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScansIdReportPciIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScansIdReportPciIndexQueryKey>
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
      ...getTargetsTargetIdScansIdReportPciIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScheduledscansIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scheduledscans/', args] as const
}

export function getTargetsTargetIdScheduledscansIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScheduledscansIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScheduledscansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScheduledscansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdScheduledscansIndexMutationKey() {
  return ['targets', '/targets/:target_id/scheduledscans/', 'POST'] as const
}

export function getPostTargetsTargetIdScheduledscansIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdScheduledscansIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['scheduledscans']['index']['$post']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].scheduledscans.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdScheduledscansIndex<
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
                  (typeof client.targets)[':target_id']['scheduledscans']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdScheduledscansIndexMutationOptions<
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

export function getTargetsTargetIdScheduledscansExpandedIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/expanded/', args] as const
}

export function getTargetsTargetIdScheduledscansExpandedIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansExpandedIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScheduledscansExpandedIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans.expanded.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScheduledscansExpandedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansExpandedIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansExpandedIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScheduledscansExpandedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansExpandedIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansExpandedIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdScheduledscansIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', args] as const
}

export function getTargetsTargetIdScheduledscansIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdScheduledscansIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdScheduledscansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansIdIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdScheduledscansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdScheduledscansIdIndexQueryKey>
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
      ...getTargetsTargetIdScheduledscansIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdScheduledscansIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'PUT'] as const
}

export function getPutTargetsTargetIdScheduledscansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdScheduledscansIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans[':id'].index.$put(args, options),
      )
    },
  })
}

export function usePutTargetsTargetIdScheduledscansIdIndex<
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
                  (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
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
  const mutationDefaults = getPutTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function getDeleteTargetsTargetIdScheduledscansIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'DELETE'] as const
}

export function getDeleteTargetsTargetIdScheduledscansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTargetsTargetIdScheduledscansIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans[':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteTargetsTargetIdScheduledscansIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function getPatchTargetsTargetIdScheduledscansIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdScheduledscansIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdScheduledscansIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans[':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchTargetsTargetIdScheduledscansIdIndex<
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
                  (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function getTargetsTargetIdSeverityTrendIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/severity_trend/', args] as const
}

export function getTargetsTargetIdSeverityTrendIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdSeverityTrendIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdSeverityTrendIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].severity_trend.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdSeverityTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdSeverityTrendIndexQueryKey>
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
      ...getTargetsTargetIdSeverityTrendIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdSeverityTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdSeverityTrendIndexQueryKey>
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
      ...getTargetsTargetIdSeverityTrendIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdSiteIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/site/', args] as const
}

export function getTargetsTargetIdSiteIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdSiteIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdSiteIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].site.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdSiteIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdSiteIndexQueryKey>
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
      ...getTargetsTargetIdSiteIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdSiteIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdSiteIndexQueryKey>
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
      ...getTargetsTargetIdSiteIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdSiteIndexMutationKey() {
  return ['targets', '/targets/:target_id/site/', 'PUT'] as const
}

export function getPutTargetsTargetIdSiteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdSiteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>,
    ) {
      return parseResponse(client.targets[':target_id'].site.index.$put(args, options))
    },
  })
}

export function usePutTargetsTargetIdSiteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetsTargetIdSiteIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTargetsTargetIdSiteIndexMutationKey() {
  return ['targets', '/targets/:target_id/site/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdSiteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdSiteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>,
    ) {
      return parseResponse(client.targets[':target_id'].site.index.$patch(args, options))
    },
  })
}

export function usePatchTargetsTargetIdSiteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTargetsTargetIdSiteIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostTargetsTargetIdSiteVerifyIndexMutationKey() {
  return ['targets', '/targets/:target_id/site/verify/', 'POST'] as const
}

export function getPostTargetsTargetIdSiteVerifyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['site']['verify']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['site']['verify']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdSiteVerifyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['site']['verify']['index']['$post']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].site.verify.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdSiteVerifyIndex<
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
                  (typeof client.targets)[':target_id']['site']['verify']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['site']['verify']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdSiteVerifyIndexMutationOptions<
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

export function getTargetsTargetIdTopVulnsIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/top_vulns/', args] as const
}

export function getTargetsTargetIdTopVulnsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdTopVulnsIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdTopVulnsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].top_vulns.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdTopVulnsIndexQueryKey>
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
      ...getTargetsTargetIdTopVulnsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdTopVulnsIndexQueryKey>
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
      ...getTargetsTargetIdTopVulnsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTargetsTargetIdWebhooksIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/webhooks/', args] as const
}

export function getTargetsTargetIdWebhooksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdWebhooksIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdWebhooksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].webhooks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdWebhooksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdWebhooksIndexQueryKey>
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
      ...getTargetsTargetIdWebhooksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdWebhooksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdWebhooksIndexQueryKey>
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
      ...getTargetsTargetIdWebhooksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTargetsTargetIdWebhooksIndexMutationKey() {
  return ['targets', '/targets/:target_id/webhooks/', 'POST'] as const
}

export function getPostTargetsTargetIdWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetsTargetIdWebhooksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>,
    ) {
      return parseResponse(client.targets[':target_id'].webhooks.index.$post(args, options))
    },
  })
}

export function usePostTargetsTargetIdWebhooksIndex<
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
                ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetsTargetIdWebhooksIndexMutationOptions<
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

export function getTargetsTargetIdWebhooksIdIndexQueryKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/webhooks/:id/', args] as const
}

export function getTargetsTargetIdWebhooksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdWebhooksIdIndexQueryKey>
  >({
    queryKey: getTargetsTargetIdWebhooksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets[':target_id'].webhooks[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTargetsTargetIdWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdWebhooksIdIndexQueryKey>
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
      ...getTargetsTargetIdWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTargetsTargetIdWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTargetsTargetIdWebhooksIdIndexQueryKey>
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
      ...getTargetsTargetIdWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTargetsTargetIdWebhooksIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'PUT'] as const
}

export function getPutTargetsTargetIdWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetsTargetIdWebhooksIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].webhooks[':id'].index.$put(args, options))
    },
  })
}

export function usePutTargetsTargetIdWebhooksIdIndex<
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
                  (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function getDeleteTargetsTargetIdWebhooksIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'DELETE'] as const
}

export function getDeleteTargetsTargetIdWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTargetsTargetIdWebhooksIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.targets[':target_id'].webhooks[':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteTargetsTargetIdWebhooksIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function getPatchTargetsTargetIdWebhooksIdIndexMutationKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'PATCH'] as const
}

export function getPatchTargetsTargetIdWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTargetsTargetIdWebhooksIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(client.targets[':target_id'].webhooks[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchTargetsTargetIdWebhooksIdIndex<
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
                  (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']
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
  const mutationDefaults = getPatchTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function getUsersIndexQueryKey(args: InferRequestType<typeof client.users.index.$get>) {
  return ['users', '/users/', args] as const
}

export function getUsersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >({
    queryKey: getUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersIndexMutationKey() {
  return ['users', '/users/', 'POST'] as const
}

export function getPostUsersIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.index.$post>) {
      return parseResponse(client.users.index.$post(args, options))
    },
  })
}

export function usePostUsersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
) {
  return ['users', '/users/:id/', args] as const
}

export function getUsersIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdIndexQueryKey>
  >({
    queryKey: getUsersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'PUT'] as const
}

export function getPutUsersIdIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$put']>) {
      return parseResponse(client.users[':id'].index.$put(args, options))
    },
  })
}

export function usePutUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersIdIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'DELETE'] as const
}

export function getDeleteUsersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$delete']>) {
      return parseResponse(client.users[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersIdIndexMutationKey() {
  return ['users', '/users/:id/', 'PATCH'] as const
}

export function getPatchUsersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['index']['$patch']>) {
      return parseResponse(client.users[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getVulnerabilityDefinitionsIndexQueryKey(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/', args] as const
}

export function getVulnerabilityDefinitionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVulnerabilityDefinitionsIndexQueryKey>
  >({
    queryKey: getVulnerabilityDefinitionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vulnerability_definitions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVulnerabilityDefinitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVulnerabilityDefinitionsIndexQueryKey>
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
      ...getVulnerabilityDefinitionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVulnerabilityDefinitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVulnerabilityDefinitionsIndexQueryKey>
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
      ...getVulnerabilityDefinitionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVulnerabilityDefinitionsIdIndexQueryKey(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/:id/', args] as const
}

export function getVulnerabilityDefinitionsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVulnerabilityDefinitionsIdIndexQueryKey>
  >({
    queryKey: getVulnerabilityDefinitionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vulnerability_definitions[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVulnerabilityDefinitionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVulnerabilityDefinitionsIdIndexQueryKey>
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
      ...getVulnerabilityDefinitionsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVulnerabilityDefinitionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVulnerabilityDefinitionsIdIndexQueryKey>
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
      ...getVulnerabilityDefinitionsIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWebhooksIndexQueryKey() {
  return ['webhooks', '/webhooks/'] as const
}

export function getWebhooksIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIndexQueryKey>
  >({
    queryKey: getWebhooksIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhooksIndexMutationKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function getPostWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.index.$post>) {
      return parseResponse(client.webhooks.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIndexMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdIndexQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/', args] as const
}

export function getWebhooksIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdIndexQueryKey>
  >({
    queryKey: getWebhooksIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'PUT'] as const
}

export function getPutWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>) {
      return parseResponse(client.webhooks[':id'].index.$put(args, options))
    },
  })
}

export function usePutWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'DELETE'] as const
}

export function getDeleteWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>) {
      return parseResponse(client.webhooks[':id'].index.$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksIdIndexMutationKey() {
  return ['webhooks', '/webhooks/:id/', 'PATCH'] as const
}

export function getPatchWebhooksIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>) {
      return parseResponse(client.webhooks[':id'].index.$patch(args, options))
    },
  })
}

export function usePatchWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
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
