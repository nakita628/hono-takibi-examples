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

export function injectAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAuthObtainIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthObtainIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthRefreshIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthRefreshIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthRevokeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthRevokeIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthVerifyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthVerifyIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectBillingIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBillingIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillingIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBillingIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBillingIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBillingActionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingActionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBillingEstimateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingEstimateIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBillingSubscribeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingSubscribeIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCheckIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCheckIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEnterpriseAuthObtainIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnterpriseAuthObtainIndexMutationOptions<
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

export function injectPostEnterpriseAuthRefreshIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnterpriseAuthRefreshIndexMutationOptions<
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

export function injectPostEnterpriseAuthRevokeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnterpriseAuthRevokeIndexMutationOptions<
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

export function injectPostEnterpriseAuthVerifyIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnterpriseAuthVerifyIndexMutationOptions<
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

export function injectEventsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFrameworksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.frameworks.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFrameworksIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFrameworksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFrameworksIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectIntegrationsJiraCloudProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraCloudProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraServerProjectsIndex<
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
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraServerProjectsIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraServerProjectsProjectIdIssueTypesIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
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
  args: () => InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectKeysIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keys.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeysIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteKeysIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeysIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLabelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.labels.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLabelsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLabelsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectLabelsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchLabelsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLabelsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectProfileIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.profile.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfileIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProfileChangePasswordIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProfileChangePasswordIndexMutationOptions<
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

export function injectPostResetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResetIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSetpasswordIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetpasswordIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTargetActionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetActionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTargetsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTargetsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTargetsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTargetsActivateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsActivateIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTargetsAllAverageFixTimeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllAverageFixTimeIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllNeedsAttentionPieIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllNeedsAttentionPieIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllNeedsAttentionTopIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllNeedsAttentionTopIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTargetsAllRiskTrendIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectTargetsAllScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllScansIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllScheduledscansExpandedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllScheduledscansExpandedIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllSeverityTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsAllSeverityTrendIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsAllTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTargetsAllTopVulnsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTargetsArchiveIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsArchiveIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTargetsArchivedIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsArchivedIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTargetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTargetsIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTargetsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdAssetsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdAssetsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdAssetsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdAssetsIndexMutationOptions<
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

export function injectTargetsTargetIdAssetsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['assets'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdAssetsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdAssetsIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function injectDeleteTargetsTargetIdAssetsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function injectPatchTargetsTargetIdAssetsIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdAssetsIdIndexMutationOptions<
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

export function injectPostTargetsTargetIdAssetsIdVerifyIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdAssetsIdVerifyIndexMutationOptions<
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

export function injectTargetsTargetIdAverageFixTimeIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdAverageFixTimeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdEventsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdEventsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdEventsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['events'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdEventsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdFindingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdFindingsBulkReportIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdFindingsBulkReportIndexMutationOptions<
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

export function injectPostTargetsTargetIdFindingsBulkRetestIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdFindingsBulkRetestIndexMutationOptions<
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

export function injectPatchTargetsTargetIdFindingsBulkUpdateIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdFindingsBulkUpdateIndexMutationOptions<
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

export function injectTargetsTargetIdFindingsReportIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsReportIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdFindingsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdFindingsIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdFindingsIdIndexMutationOptions<
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

export function injectPatchTargetsTargetIdFindingsIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdFindingsIdIndexMutationOptions<
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

export function injectTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
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

export function injectPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexMutationOptions<
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

export function injectTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
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

export function injectPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexMutationOptions<
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

export function injectTargetsTargetIdFindingsIdLogIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdFindingsIdLogIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdFindingsIdRetestIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdFindingsIdRetestIndexMutationOptions<
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

export function injectTargetsTargetIdIntegrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdIntegrationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdIntegrationsJiraCloudIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdIntegrationsJiraCloudIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdIntegrationsJiraCloudIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
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

export function injectPatchTargetsTargetIdIntegrationsJiraCloudIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdIntegrationsJiraCloudIndexMutationOptions<
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

export function injectTargetsTargetIdIntegrationsJiraServerIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdIntegrationsJiraServerIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdIntegrationsJiraServerIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
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

export function injectPatchTargetsTargetIdIntegrationsJiraServerIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdIntegrationsJiraServerIndexMutationOptions<
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

export function injectTargetsTargetIdIntegrationsSlackIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdIntegrationsSlackIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdIntegrationsSlackIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdIntegrationsSlackIndexMutationOptions<
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

export function injectPatchTargetsTargetIdIntegrationsSlackIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdIntegrationsSlackIndexMutationOptions<
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

export function injectTargetsTargetIdKeysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdKeysIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdKeysIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdKeysIndexMutationOptions<
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

export function injectTargetsTargetIdKeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['keys'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdKeysIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteTargetsTargetIdKeysIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTargetsTargetIdKeysIdIndexMutationOptions<
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

export function injectTargetsTargetIdRiskTrendIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['risk_trend']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdRiskTrendIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdScanNowIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdScanNowIndexMutationOptions<
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

export function injectTargetsTargetIdScansIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansDatesIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans']['dates']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansDatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansRetrievePageIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansRetrievePageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdScansIdCancelIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdScansIdCancelIndexMutationOptions<
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

export function injectTargetsTargetIdScansIdEndpointsIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdEndpointsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansIdReportIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdReportIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansIdReportDefaultIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdReportDefaultIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansIdReportOwaspIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdReportOwaspIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScansIdReportPciIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScansIdReportPciIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScheduledscansIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScheduledscansIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdScheduledscansIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdScheduledscansIndexMutationOptions<
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

export function injectTargetsTargetIdScheduledscansExpandedIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScheduledscansExpandedIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdScheduledscansIdIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdScheduledscansIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdScheduledscansIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function injectDeleteTargetsTargetIdScheduledscansIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function injectPatchTargetsTargetIdScheduledscansIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdScheduledscansIdIndexMutationOptions<
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

export function injectTargetsTargetIdSeverityTrendIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['severity_trend']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdSeverityTrendIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdSiteIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdSiteIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdSiteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdSiteIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTargetsTargetIdSiteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdSiteIndexMutationOptions<
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

export function injectPostTargetsTargetIdSiteVerifyIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdSiteVerifyIndexMutationOptions<
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

export function injectTargetsTargetIdTopVulnsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdTopVulnsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTargetsTargetIdWebhooksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdWebhooksIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTargetsTargetIdWebhooksIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetsTargetIdWebhooksIndexMutationOptions<
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

export function injectTargetsTargetIdWebhooksIdIndex<
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
  args: () => InferRequestType<
    (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTargetsTargetIdWebhooksIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTargetsTargetIdWebhooksIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function injectDeleteTargetsTargetIdWebhooksIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function injectPatchTargetsTargetIdWebhooksIdIndex<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTargetsTargetIdWebhooksIdIndexMutationOptions<
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

export function injectUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectVulnerabilityDefinitionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVulnerabilityDefinitionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVulnerabilityDefinitionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVulnerabilityDefinitionsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectWebhooksIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectWebhooksIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchWebhooksIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
