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

export function getAccountIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
          >,
          ReturnType<typeof getAccountIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getBillingIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBillingIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBillingIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
          >,
          ReturnType<typeof getBillingIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBillingIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.billing.index.$put>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.billing.index.$patch>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.check.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEventsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
          >,
          ReturnType<typeof getEventsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['index']['$get']>>,
) {
  return ['events', '/events/:id/', toValue(args)] as const
}

export function getEventsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFrameworksIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.frameworks.index.$get>>,
) {
  return ['frameworks', '/frameworks/', toValue(args)] as const
}

export function getFrameworksIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.frameworks.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFrameworksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.frameworks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFrameworksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.frameworks.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>
            >
          >,
          ReturnType<typeof getFrameworksIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFrameworksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFrameworksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.frameworks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFrameworksIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>>,
) {
  return ['frameworks', '/frameworks/:id/', toValue(args)] as const
}

export function getFrameworksIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFrameworksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.frameworks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFrameworksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFrameworksIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFrameworksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFrameworksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.frameworks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsIndexQueryKey() {
  return ['integrations', '/integrations/'] as const
}

export function getIntegrationsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
            >
          >,
          ReturnType<typeof getIntegrationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsIndexQueryKey() {
  return ['integrations', '/integrations/jira-cloud/projects/'] as const
}

export function getIntegrationsJiraCloudProjectsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsJiraCloudProjectsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-cloud'].projects.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.integrations)['jira-cloud']['projects']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsJiraCloudProjectsIndexQueryKey>
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
            ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraCloudProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsJiraCloudProjectsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-cloud'].projects.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey>
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
              (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/priorities/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].priorities.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-cloud/projects/:project_id/issue_types/:issue_type_id/status/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-cloud'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].status.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
                    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsIndexQueryKey() {
  return ['integrations', '/integrations/jira-server/projects/'] as const
}

export function getIntegrationsJiraServerProjectsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsJiraServerProjectsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-server'].projects.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.integrations)['jira-server']['projects']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsJiraServerProjectsIndexQueryKey>
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
            ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraServerProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsJiraServerProjectsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-server'].projects.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey>
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
              (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/priorities/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].priorities.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
    >
  >,
) {
  return [
    'integrations',
    '/integrations/jira-server/projects/:project_id/issue_types/:issue_type_id/status/',
    toValue(args),
  ] as const
}

export function getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations['jira-server'].projects[':project_id'].issue_types[
          ':issue_type_id'
        ].status.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
                    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeysIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.index.$get>>,
) {
  return ['keys', '/keys/', toValue(args)] as const
}

export function getKeysIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
          >,
          ReturnType<typeof getKeysIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.keys.index.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['index']['$get']>>,
) {
  return ['keys', '/keys/:id/', toValue(args)] as const
}

export function getKeysIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getLabelsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.index.$get>>,
) {
  return ['labels', '/labels/', toValue(args)] as const
}

export function getLabelsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLabelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
          >,
          ReturnType<typeof getLabelsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.labels.index.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['index']['$get']>>,
) {
  return ['labels', '/labels/:id/', toValue(args)] as const
}

export function getLabelsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPlansIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlansIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
          >,
          ReturnType<typeof getPlansIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlansIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.plans.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.index.$get>>,
) {
  return ['profile', '/profile/', toValue(args)] as const
}

export function getProfileIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
          >,
          ReturnType<typeof getProfileIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reset.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reset.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTargetsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.index.$get>>,
) {
  return ['targets', '/targets/', toValue(args)] as const
}

export function getTargetsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
          >,
          ReturnType<typeof getTargetsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.targets.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTargetsAllAverageFixTimeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllAverageFixTimeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.average_fix_time.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllAverageFixTimeIndexQueryKey>
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
          Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllAverageFixTimeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllAverageFixTimeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.average_fix_time.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllNeedsAttentionPieIndexQueryKey() {
  return ['targets', '/targets/all/needs_attention_pie/'] as const
}

export function getTargetsAllNeedsAttentionPieIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllNeedsAttentionPieIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.needs_attention_pie.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllNeedsAttentionPieIndexQueryKey>
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
          Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllNeedsAttentionPieIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllNeedsAttentionPieIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.needs_attention_pie.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllNeedsAttentionTopIndexQueryKey() {
  return ['targets', '/targets/all/needs_attention_top/'] as const
}

export function getTargetsAllNeedsAttentionTopIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllNeedsAttentionTopIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.needs_attention_top.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllNeedsAttentionTopIndexQueryKey>
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
          Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllNeedsAttentionTopIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllNeedsAttentionTopIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.needs_attention_top.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllRiskTrendIndexQueryKey() {
  return ['targets', '/targets/all/risk_trend/'] as const
}

export function getTargetsAllRiskTrendIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllRiskTrendIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.risk_trend.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllRiskTrendIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllRiskTrendIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllRiskTrendIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.risk_trend.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllScansIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.all.scans.index.$get>>,
) {
  return ['targets', '/targets/all/scans/', toValue(args)] as const
}

export function getTargetsAllScansIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.all.scans.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsAllScansIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.scans.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetsAllScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.all.scans.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
            >
          >,
          ReturnType<typeof getTargetsAllScansIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllScansIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsAllScansIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.scans.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllScheduledscansExpandedIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>
  >,
) {
  return ['targets', '/targets/all/scheduledscans/expanded/', toValue(args)] as const
}

export function getTargetsAllScheduledscansExpandedIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsAllScheduledscansExpandedIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.scheduledscans.expanded.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllScheduledscansExpandedIndexQueryKey>
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
          Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllScheduledscansExpandedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsAllScheduledscansExpandedIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.scheduledscans.expanded.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllSeverityTrendIndexQueryKey() {
  return ['targets', '/targets/all/severity_trend/'] as const
}

export function getTargetsAllSeverityTrendIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllSeverityTrendIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.severity_trend.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllSeverityTrendIndexQueryKey>
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
          Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllSeverityTrendIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllSeverityTrendIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.severity_trend.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsAllTopVulnsIndexQueryKey() {
  return ['targets', '/targets/all/top_vulns/'] as const
}

export function getTargetsAllTopVulnsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTargetsAllTopVulnsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.all.top_vulns.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTargetsAllTopVulnsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsAllTopVulnsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTargetsAllTopVulnsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.all.top_vulns.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.targets)[':id']['index']['$get']>>,
) {
  return ['targets', '/targets/:id/', toValue(args)] as const
}

export function getTargetsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.targets)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.targets)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTargetsIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/assets/', toValue(args)] as const
}

export function getTargetsTargetIdAssetsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdAssetsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].assets.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>
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
                  ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdAssetsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAssetsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdAssetsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].assets.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/assets/:id/', toValue(args)] as const
}

export function getTargetsTargetIdAssetsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdAssetsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].assets[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['assets'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['assets'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdAssetsIdIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAssetsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdAssetsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].assets[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.targets)[':target_id']['assets'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/average_fix_time/', toValue(args)] as const
}

export function getTargetsTargetIdAverageFixTimeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdAverageFixTimeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].average_fix_time.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
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
                    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdAverageFixTimeIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdAverageFixTimeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdAverageFixTimeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].average_fix_time.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdEventsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/events/', toValue(args)] as const
}

export function getTargetsTargetIdEventsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdEventsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].events.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>
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
                  ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdEventsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdEventsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].events.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdEventsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/events/:id/', toValue(args)] as const
}

export function getTargetsTargetIdEventsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdEventsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].events[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['events'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['events'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdEventsIdIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdEventsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdEventsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].events[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdFindingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/findings/', toValue(args)] as const
}

export function getTargetsTargetIdFindingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdFindingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/findings/report/', toValue(args)] as const
}

export function getTargetsTargetIdFindingsReportIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsReportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings.report.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsReportIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['findings']['report']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsReportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdFindingsReportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings.report.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdFindingsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/', toValue(args)] as const
}

export function getTargetsTargetIdFindingsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['findings'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsIdIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdFindingsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['findings'][':id']['index']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
    >
  >,
) {
  return [
    'targets',
    '/targets/:target_id/findings/:id/integrations/jira-cloud/',
    toValue(args),
  ] as const
}

export function getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey>
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
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
    >
  >,
) {
  return [
    'targets',
    '/targets/:target_id/findings/:id/integrations/jira-server/',
    toValue(args),
  ] as const
}

export function getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey>
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
              (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/log/', toValue(args)] as const
}

export function getTargetsTargetIdFindingsIdLogIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdFindingsIdLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].findings[':id'].log.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
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
                    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdFindingsIdLogIndexQueryKey>
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
              (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdFindingsIdLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdFindingsIdLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].findings[':id'].log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/integrations/', toValue(args)] as const
}

export function getTargetsTargetIdIntegrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdIntegrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].integrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdIntegrationsIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdIntegrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].integrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', toValue(args)] as const
}

export function getTargetsTargetIdIntegrationsJiraCloudIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-cloud'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey>
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
              (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdIntegrationsJiraCloudIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].integrations['jira-cloud'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-server/', toValue(args)] as const
}

export function getTargetsTargetIdIntegrationsJiraServerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdIntegrationsJiraServerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].integrations['jira-server'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdIntegrationsJiraServerIndexQueryKey>
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
              (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsJiraServerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdIntegrationsJiraServerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].integrations['jira-server'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/integrations/slack/', toValue(args)] as const
}

export function getTargetsTargetIdIntegrationsSlackIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdIntegrationsSlackIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].integrations.slack.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
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
                    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdIntegrationsSlackIndexQueryKey>
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
              (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdIntegrationsSlackIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdIntegrationsSlackIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].integrations.slack.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/keys/', toValue(args)] as const
}

export function getTargetsTargetIdKeysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdKeysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].keys.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdKeysIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdKeysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdKeysIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].keys.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/keys/:id/', toValue(args)] as const
}

export function getTargetsTargetIdKeysIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdKeysIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].keys[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdKeysIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdKeysIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdKeysIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].keys[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/risk_trend/', toValue(args)] as const
}

export function getTargetsTargetIdRiskTrendIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdRiskTrendIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].risk_trend.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdRiskTrendIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdRiskTrendIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdRiskTrendIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].risk_trend.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/scans/', toValue(args)] as const
}

export function getTargetsTargetIdScansIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansDatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/scans/dates/', toValue(args)] as const
}

export function getTargetsTargetIdScansDatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansDatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans.dates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['scans']['dates']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans']['dates']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansDatesIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansDatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansDatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans.dates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansRetrievePageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/retrieve_page/', toValue(args)] as const
}

export function getTargetsTargetIdScansRetrievePageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansRetrievePageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans.retrieve_page.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansRetrievePageIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansRetrievePageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansRetrievePageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans.retrieve_page.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/endpoints/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdEndpointsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdEndpointsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].endpoints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdEndpointsIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdEndpointsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdEndpointsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].endpoints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdReportIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdReportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdReportIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdReportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].report.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportDefaultIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/default/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdReportDefaultIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdReportDefaultIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.default.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdReportDefaultIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportDefaultIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdReportDefaultIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].report.default.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportOwaspIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/owasp/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdReportOwaspIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdReportOwaspIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.owasp.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdReportOwaspIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportOwaspIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdReportOwaspIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].report.owasp.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScansIdReportPciIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/pci/', toValue(args)] as const
}

export function getTargetsTargetIdScansIdReportPciIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScansIdReportPciIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scans[':id'].report.pci.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScansIdReportPciIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScansIdReportPciIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScansIdReportPciIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scans[':id'].report.pci.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScheduledscansIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/', toValue(args)] as const
}

export function getTargetsTargetIdScheduledscansIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScheduledscansIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['scheduledscans']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scheduledscans']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScheduledscansIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScheduledscansIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scheduledscans.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['scheduledscans']['index']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/expanded/', toValue(args)] as const
}

export function getTargetsTargetIdScheduledscansExpandedIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScheduledscansExpandedIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans.expanded.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScheduledscansExpandedIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansExpandedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScheduledscansExpandedIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scheduledscans.expanded.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdScheduledscansIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
    >
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', toValue(args)] as const
}

export function getTargetsTargetIdScheduledscansIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdScheduledscansIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].scheduledscans[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdScheduledscansIdIndexQueryKey>
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
              (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdScheduledscansIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdScheduledscansIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].scheduledscans[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/severity_trend/', toValue(args)] as const
}

export function getTargetsTargetIdSeverityTrendIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdSeverityTrendIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].severity_trend.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['severity_trend']['index']['$get']
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
                    (typeof client.targets)[':target_id']['severity_trend']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdSeverityTrendIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdSeverityTrendIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdSeverityTrendIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].severity_trend.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdSiteIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/site/', toValue(args)] as const
}

export function getTargetsTargetIdSiteIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdSiteIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].site.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdSiteIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdSiteIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdSiteIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].site.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['site']['index']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['site']['verify']['index']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/top_vulns/', toValue(args)] as const
}

export function getTargetsTargetIdTopVulnsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdTopVulnsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].top_vulns.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdTopVulnsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdTopVulnsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdTopVulnsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].top_vulns.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsTargetIdWebhooksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/webhooks/', toValue(args)] as const
}

export function getTargetsTargetIdWebhooksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdWebhooksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].webhooks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdWebhooksIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdWebhooksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdWebhooksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].webhooks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
  >,
) {
  return ['targets', '/targets/:target_id/webhooks/:id/', toValue(args)] as const
}

export function getTargetsTargetIdWebhooksIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsTargetIdWebhooksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets[':target_id'].webhooks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
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
                    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']
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
                    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTargetsTargetIdWebhooksIdIndexQueryKey>
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
            ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsTargetIdWebhooksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsTargetIdWebhooksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets[':target_id'].webhooks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
) {
  return ['users', '/users/', toValue(args)] as const
}

export function getUsersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          ReturnType<typeof getUsersIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.index.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
) {
  return ['users', '/users/:id/', toValue(args)] as const
}

export function getUsersIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['index']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.vulnerability_definitions.index.$get>>,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/', toValue(args)] as const
}

export function getVulnerabilityDefinitionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vulnerability_definitions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVulnerabilityDefinitionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vulnerability_definitions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVulnerabilityDefinitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vulnerability_definitions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getVulnerabilityDefinitionsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVulnerabilityDefinitionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVulnerabilityDefinitionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vulnerability_definitions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVulnerabilityDefinitionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>
  >,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/:id/', toValue(args)] as const
}

export function getVulnerabilityDefinitionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVulnerabilityDefinitionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vulnerability_definitions[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>
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
                  ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVulnerabilityDefinitionsIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVulnerabilityDefinitionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVulnerabilityDefinitionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vulnerability_definitions[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksIndexQueryKey() {
  return ['webhooks', '/webhooks/'] as const
}

export function getWebhooksIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
          >,
          ReturnType<typeof getWebhooksIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.index.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id/', toValue(args)] as const
}

export function getWebhooksIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
