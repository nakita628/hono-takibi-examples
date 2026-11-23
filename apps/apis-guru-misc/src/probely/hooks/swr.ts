import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountIndexKey() {
  return ['account', '/account/'] as const
}

export function useGetAccountIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthObtainIndexKey() {
  return ['auth', '/auth/obtain/', 'POST'] as const
}

export function usePostAuthObtainIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.obtain.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.obtain.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthObtainIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.obtain.index.$post> }) =>
        parseResponse(client.auth.obtain.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthRefreshIndexKey() {
  return ['auth', '/auth/refresh/', 'POST'] as const
}

export function usePostAuthRefreshIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.refresh.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthRefreshIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.refresh.index.$post> }) =>
        parseResponse(client.auth.refresh.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthRevokeIndexKey() {
  return ['auth', '/auth/revoke/', 'POST'] as const
}

export function usePostAuthRevokeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.revoke.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.revoke.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthRevokeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.revoke.index.$post> }) =>
        parseResponse(client.auth.revoke.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthVerifyIndexKey() {
  return ['auth', '/auth/verify/', 'POST'] as const
}

export function usePostAuthVerifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.verify.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthVerifyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.verify.index.$post> }) =>
        parseResponse(client.auth.verify.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingIndexKey() {
  return ['billing', '/billing/'] as const
}

export function useGetBillingIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBillingIndexKey() {
  return ['billing', '/billing/', 'PUT'] as const
}

export function usePutBillingIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billing.index.$put> }) =>
        parseResponse(client.billing.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillingIndexKey() {
  return ['billing', '/billing/', 'PATCH'] as const
}

export function usePatchBillingIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.index.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.index.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillingIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.billing.index.$patch> }) =>
        parseResponse(client.billing.index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBillingActionsIndexKey() {
  return ['billing', '/billing/actions/', 'POST'] as const
}

export function usePostBillingActionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.actions.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.actions.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingActionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.billing.actions.index.$post> },
      ) => parseResponse(client.billing.actions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBillingEstimateIndexKey() {
  return ['billing', '/billing/estimate/', 'POST'] as const
}

export function usePostBillingEstimateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.estimate.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.estimate.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingEstimateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.billing.estimate.index.$post> },
      ) => parseResponse(client.billing.estimate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBillingSubscribeIndexKey() {
  return ['billing', '/billing/subscribe/', 'POST'] as const
}

export function usePostBillingSubscribeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.subscribe.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.billing.subscribe.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingSubscribeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.billing.subscribe.index.$post> },
      ) => parseResponse(client.billing.subscribe.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCheckIndexKey() {
  return ['check', '/check/', 'POST'] as const
}

export function usePostCheckIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.check.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.check.index.$post> }) =>
        parseResponse(client.check.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnterpriseAuthObtainIndexKey() {
  return ['enterprise', '/enterprise/auth/obtain/', 'POST'] as const
}

export function usePostEnterpriseAuthObtainIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.obtain.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enterprise.auth.obtain.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseAuthObtainIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enterprise.auth.obtain.index.$post> },
      ) => parseResponse(client.enterprise.auth.obtain.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnterpriseAuthRefreshIndexKey() {
  return ['enterprise', '/enterprise/auth/refresh/', 'POST'] as const
}

export function usePostEnterpriseAuthRefreshIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.refresh.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enterprise.auth.refresh.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseAuthRefreshIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enterprise.auth.refresh.index.$post> },
      ) => parseResponse(client.enterprise.auth.refresh.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnterpriseAuthRevokeIndexKey() {
  return ['enterprise', '/enterprise/auth/revoke/', 'POST'] as const
}

export function usePostEnterpriseAuthRevokeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.revoke.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enterprise.auth.revoke.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseAuthRevokeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enterprise.auth.revoke.index.$post> },
      ) => parseResponse(client.enterprise.auth.revoke.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnterpriseAuthVerifyIndexKey() {
  return ['enterprise', '/enterprise/auth/verify/', 'POST'] as const
}

export function usePostEnterpriseAuthVerifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enterprise.auth.verify.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enterprise.auth.verify.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterpriseAuthVerifyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enterprise.auth.verify.index.$post> },
      ) => parseResponse(client.enterprise.auth.verify.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsIndexKey() {
  return ['events', '/events/'] as const
}

export function useGetEventsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsIdIndexKey(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
) {
  return ['events', '/events/:id/', args] as const
}

export function useGetEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFrameworksIndexKey(
  args: InferRequestType<typeof client.frameworks.index.$get>,
) {
  return ['frameworks', '/frameworks/', args] as const
}

export function useGetFrameworksIndex<TError = unknown>(
  args: InferRequestType<typeof client.frameworks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
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
        ? getGetFrameworksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frameworks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFrameworksIndex<TError = unknown>(
  args: InferRequestType<typeof client.frameworks.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
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
        ? getGetFrameworksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frameworks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frameworks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFrameworksIdIndexKey(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
) {
  return ['frameworks', '/frameworks/:id/', args] as const
}

export function useGetFrameworksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
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
        ? getGetFrameworksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frameworks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFrameworksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.frameworks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
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
        ? getGetFrameworksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.frameworks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frameworks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsIndexKey() {
  return ['integrations', '/integrations/'] as const
}

export function useGetIntegrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraCloudProjectsIndexKey() {
  return ['integrations', '/integrations/jira-cloud/projects/'] as const
}

export function useGetIntegrationsJiraCloudProjectsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationsJiraCloudProjectsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations['jira-cloud'].projects.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraCloudProjectsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationsJiraCloudProjectsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)['jira-cloud']['projects']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations['jira-cloud'].projects.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexKey(
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

export function useGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(
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

export function useGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(
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

export function useGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(args)
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
                (typeof client.integrations)['jira-cloud']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
          client.integrations['jira-cloud'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraServerProjectsIndexKey() {
  return ['integrations', '/integrations/jira-server/projects/'] as const
}

export function useGetIntegrationsJiraServerProjectsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationsJiraServerProjectsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations['jira-server'].projects.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraServerProjectsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIntegrationsJiraServerProjectsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)['jira-server']['projects']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations['jira-server'].projects.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIndexKey(
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

export function useGetIntegrationsJiraServerProjectsProjectIdIssueTypesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraServerProjectsProjectIdIssueTypesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(
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

export function useGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['priorities']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].priorities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(
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

export function useGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexKey(args)
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
                (typeof client.integrations)['jira-server']['projects'][':project_id']['issue_types'][':issue_type_id']['status']['index']['$get']
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
          client.integrations['jira-server'].projects[':project_id'].issue_types[
            ':issue_type_id'
          ].status.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKeysIndexKey(args: InferRequestType<typeof client.keys.index.$get>) {
  return ['keys', '/keys/', args] as const
}

export function useGetKeysIndex<TError = unknown>(
  args: InferRequestType<typeof client.keys.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysIndex<TError = unknown>(
  args: InferRequestType<typeof client.keys.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeysIndexKey() {
  return ['keys', '/keys/', 'POST'] as const
}

export function usePostKeysIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.keys.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.keys.index.$post> }) =>
        parseResponse(client.keys.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysIdIndexKey(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
) {
  return ['keys', '/keys/:id/', args] as const
}

export function useGetKeysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteKeysIdIndexKey() {
  return ['keys', '/keys/:id/', 'DELETE'] as const
}

export function useDeleteKeysIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['index']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':id']['index']['$delete']> },
      ) => parseResponse(client.keys[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsIndexKey(args: InferRequestType<typeof client.labels.index.$get>) {
  return ['labels', '/labels/', args] as const
}

export function useGetLabelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.labels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.labels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLabelsIndexKey() {
  return ['labels', '/labels/', 'POST'] as const
}

export function usePostLabelsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.labels.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.labels.index.$post> }) =>
        parseResponse(client.labels.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsIdIndexKey(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
) {
  return ['labels', '/labels/:id/', args] as const
}

export function useGetLabelsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLabelsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLabelsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLabelsIdIndexKey() {
  return ['labels', '/labels/:id/', 'PUT'] as const
}

export function usePutLabelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':id']['index']['$put']> },
      ) => parseResponse(client.labels[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelsIdIndexKey() {
  return ['labels', '/labels/:id/', 'DELETE'] as const
}

export function useDeleteLabelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':id']['index']['$delete']> },
      ) => parseResponse(client.labels[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLabelsIdIndexKey() {
  return ['labels', '/labels/:id/', 'PATCH'] as const
}

export function usePatchLabelsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLabelsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':id']['index']['$patch']> },
      ) => parseResponse(client.labels[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansIndexKey() {
  return ['plans', '/plans/'] as const
}

export function useGetPlansIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileIndexKey(args: InferRequestType<typeof client.profile.index.$get>) {
  return ['profile', '/profile/', args] as const
}

export function useGetProfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.profile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.profile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfileChangePasswordIndexKey() {
  return ['profile', '/profile/change_password/', 'POST'] as const
}

export function usePostProfileChangePasswordIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.profile.change_password.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile.change_password.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileChangePasswordIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.profile.change_password.index.$post> },
      ) => parseResponse(client.profile.change_password.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResetIndexKey() {
  return ['reset', '/reset/', 'POST'] as const
}

export function usePostResetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reset.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reset.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResetIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reset.index.$post> }) =>
        parseResponse(client.reset.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetpasswordIndexKey() {
  return ['setpassword', '/setpassword/', 'POST'] as const
}

export function usePostSetpasswordIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setpassword.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setpassword.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetpasswordIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setpassword.index.$post> }) =>
        parseResponse(client.setpassword.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetActionsIndexKey() {
  return ['target-actions', '/target-actions/', 'POST'] as const
}

export function usePostTargetActionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-actions']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['target-actions']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetActionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['target-actions']['index']['$post']> },
      ) => parseResponse(client['target-actions'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsIndexKey(args: InferRequestType<typeof client.targets.index.$get>) {
  return ['targets', '/targets/', args] as const
}

export function useGetTargetsIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTargetsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTargetsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsIndexKey() {
  return ['targets', '/targets/', 'POST'] as const
}

export function usePostTargetsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.targets.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.targets.index.$post> }) =>
        parseResponse(client.targets.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetsActivateIndexKey() {
  return ['targets', '/targets/activate/', 'POST'] as const
}

export function usePostTargetsActivateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.activate.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.targets.activate.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsActivateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.targets.activate.index.$post> },
      ) => parseResponse(client.targets.activate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsAllAverageFixTimeIndexKey() {
  return ['targets', '/targets/all/average_fix_time/'] as const
}

export function useGetTargetsAllAverageFixTimeIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllAverageFixTimeIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.average_fix_time.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllAverageFixTimeIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllAverageFixTimeIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.average_fix_time.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.average_fix_time.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllNeedsAttentionPieIndexKey() {
  return ['targets', '/targets/all/needs_attention_pie/'] as const
}

export function useGetTargetsAllNeedsAttentionPieIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllNeedsAttentionPieIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.needs_attention_pie.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllNeedsAttentionPieIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllNeedsAttentionPieIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.needs_attention_pie.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.needs_attention_pie.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllNeedsAttentionTopIndexKey() {
  return ['targets', '/targets/all/needs_attention_top/'] as const
}

export function useGetTargetsAllNeedsAttentionTopIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllNeedsAttentionTopIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.needs_attention_top.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllNeedsAttentionTopIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllNeedsAttentionTopIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.needs_attention_top.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.needs_attention_top.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllRiskTrendIndexKey() {
  return ['targets', '/targets/all/risk_trend/'] as const
}

export function useGetTargetsAllRiskTrendIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllRiskTrendIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.risk_trend.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllRiskTrendIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllRiskTrendIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.risk_trend.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.risk_trend.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllScansIndexKey(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
) {
  return ['targets', '/targets/all/scans/', args] as const
}

export function useGetTargetsAllScansIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
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
        ? getGetTargetsAllScansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.scans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllScansIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.all.scans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
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
        ? getGetTargetsAllScansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.scans.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.scans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllScheduledscansExpandedIndexKey(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
) {
  return ['targets', '/targets/all/scheduledscans/expanded/', args] as const
}

export function useGetTargetsAllScheduledscansExpandedIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
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
        ? getGetTargetsAllScheduledscansExpandedIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.scheduledscans.expanded.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllScheduledscansExpandedIndex<TError = unknown>(
  args: InferRequestType<typeof client.targets.all.scheduledscans.expanded.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
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
        ? getGetTargetsAllScheduledscansExpandedIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.scheduledscans.expanded.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.scheduledscans.expanded.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllSeverityTrendIndexKey() {
  return ['targets', '/targets/all/severity_trend/'] as const
}

export function useGetTargetsAllSeverityTrendIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllSeverityTrendIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.severity_trend.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllSeverityTrendIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllSeverityTrendIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.targets.all.severity_trend.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets.all.severity_trend.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsAllTopVulnsIndexKey() {
  return ['targets', '/targets/all/top_vulns/'] as const
}

export function useGetTargetsAllTopVulnsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllTopVulnsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.top_vulns.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsAllTopVulnsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTargetsAllTopVulnsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.targets.all.top_vulns.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets.all.top_vulns.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsArchiveIndexKey() {
  return ['targets', '/targets/archive/', 'POST'] as const
}

export function usePostTargetsArchiveIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.archive.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.targets.archive.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsArchiveIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.targets.archive.index.$post> },
      ) => parseResponse(client.targets.archive.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetsArchivedIndexKey() {
  return ['targets', '/targets/archived/', 'POST'] as const
}

export function usePostTargetsArchivedIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.archived.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.targets.archived.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsArchivedIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.targets.archived.index.$post> },
      ) => parseResponse(client.targets.archived.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
) {
  return ['targets', '/targets/:id/', args] as const
}

export function useGetTargetsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTargetsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTargetsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsIdIndexKey() {
  return ['targets', '/targets/:id/', 'PUT'] as const
}

export function usePutTargetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.targets)[':id']['index']['$put']> },
      ) => parseResponse(client.targets[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTargetsIdIndexKey() {
  return ['targets', '/targets/:id/', 'DELETE'] as const
}

export function useDeleteTargetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTargetsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.targets)[':id']['index']['$delete']> },
      ) => parseResponse(client.targets[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsIdIndexKey() {
  return ['targets', '/targets/:id/', 'PATCH'] as const
}

export function usePatchTargetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.targets)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.targets)[':id']['index']['$patch']> },
      ) => parseResponse(client.targets[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdAssetsIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/assets/', args] as const
}

export function useGetTargetsTargetIdAssetsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
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
        ? getGetTargetsTargetIdAssetsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].assets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdAssetsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
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
        ? getGetTargetsTargetIdAssetsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].assets.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdAssetsIndexKey() {
  return ['targets', '/targets/:target_id/assets/', 'POST'] as const
}

export function usePostTargetsTargetIdAssetsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['assets']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdAssetsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['assets']['index']['$post']>
        },
      ) => parseResponse(client.targets[':target_id'].assets.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdAssetsIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/assets/:id/', args] as const
}

export function useGetTargetsTargetIdAssetsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdAssetsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].assets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdAssetsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdAssetsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].assets[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdAssetsIdIndexKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'PUT'] as const
}

export function usePutTargetsTargetIdAssetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdAssetsIdIndexKey()
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
            (typeof client.targets)[':target_id']['assets'][':id']['index']['$put']
          >
        },
      ) => parseResponse(client.targets[':target_id'].assets[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTargetsTargetIdAssetsIdIndexKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'DELETE'] as const
}

export function useDeleteTargetsTargetIdAssetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTargetsTargetIdAssetsIdIndexKey()
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
            (typeof client.targets)[':target_id']['assets'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].assets[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdAssetsIdIndexKey() {
  return ['targets', '/targets/:target_id/assets/:id/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdAssetsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdAssetsIdIndexKey()
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
            (typeof client.targets)[':target_id']['assets'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].assets[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetsTargetIdAssetsIdVerifyIndexKey() {
  return ['targets', '/targets/:target_id/assets/:id/verify/', 'POST'] as const
}

export function usePostTargetsTargetIdAssetsIdVerifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdAssetsIdVerifyIndexKey()
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
            (typeof client.targets)[':target_id']['assets'][':id']['verify']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].assets[':id'].verify.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdAverageFixTimeIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/average_fix_time/', args] as const
}

export function useGetTargetsTargetIdAverageFixTimeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
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
        ? getGetTargetsTargetIdAverageFixTimeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.targets[':target_id'].average_fix_time.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdAverageFixTimeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['average_fix_time']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
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
        ? getGetTargetsTargetIdAverageFixTimeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['average_fix_time']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.targets[':target_id'].average_fix_time.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdEventsIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/events/', args] as const
}

export function useGetTargetsTargetIdEventsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
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
        ? getGetTargetsTargetIdEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdEventsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
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
        ? getGetTargetsTargetIdEventsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['events']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].events.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdEventsIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/events/:id/', args] as const
}

export function useGetTargetsTargetIdEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdEventsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdEventsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdEventsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['events'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].events[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/findings/', args] as const
}

export function useGetTargetsTargetIdFindingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
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
        ? getGetTargetsTargetIdFindingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
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
        ? getGetTargetsTargetIdFindingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['findings']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdFindingsBulkReportIndexKey() {
  return ['targets', '/targets/:target_id/findings/bulk/report/', 'POST'] as const
}

export function usePostTargetsTargetIdFindingsBulkReportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdFindingsBulkReportIndexKey()
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
            (typeof client.targets)[':target_id']['findings']['bulk']['report']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings.bulk.report.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTargetsTargetIdFindingsBulkRetestIndexKey() {
  return ['targets', '/targets/:target_id/findings/bulk/retest/', 'POST'] as const
}

export function usePostTargetsTargetIdFindingsBulkRetestIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdFindingsBulkRetestIndexKey()
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
            (typeof client.targets)[':target_id']['findings']['bulk']['retest']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings.bulk.retest.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdFindingsBulkUpdateIndexKey() {
  return ['targets', '/targets/:target_id/findings/bulk/update/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdFindingsBulkUpdateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdFindingsBulkUpdateIndexKey()
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
            (typeof client.targets)[':target_id']['findings']['bulk']['update']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings.bulk.update.index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsReportIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/report/', args] as const
}

export function useGetTargetsTargetIdFindingsReportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsReportIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings.report.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsReportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsReportIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings']['report']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings.report.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/findings/:id/', args] as const
}

export function useGetTargetsTargetIdFindingsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdFindingsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdFindingsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].findings[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdFindingsIdIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/', 'PUT'] as const
}

export function usePutTargetsTargetIdFindingsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdFindingsIdIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].findings[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdFindingsIdIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdFindingsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdFindingsIdIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', args] as const
}

export function useGetTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', 'PUT'] as const
}

export function usePutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-cloud/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-cloud']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-cloud'].index.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', args] as const
}

export function useGetTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', 'PUT'] as const
}

export function usePutTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/integrations/jira-server/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['integrations']['jira-server']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].integrations['jira-server'].index.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdFindingsIdLogIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/findings/:id/log/', args] as const
}

export function useGetTargetsTargetIdFindingsIdLogIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdLogIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].log.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdFindingsIdLogIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdFindingsIdLogIndexKey(args)
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
                (typeof client.targets)[':target_id']['findings'][':id']['log']['index']['$get']
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
          client.targets[':target_id'].findings[':id'].log.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdFindingsIdRetestIndexKey() {
  return ['targets', '/targets/:target_id/findings/:id/retest/', 'POST'] as const
}

export function usePostTargetsTargetIdFindingsIdRetestIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdFindingsIdRetestIndexKey()
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
            (typeof client.targets)[':target_id']['findings'][':id']['retest']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].findings[':id'].retest.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdIntegrationsIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/integrations/', args] as const
}

export function useGetTargetsTargetIdIntegrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
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
        ? getGetTargetsTargetIdIntegrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].integrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdIntegrationsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
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
        ? getGetTargetsTargetIdIntegrationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['integrations']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].integrations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdIntegrationsJiraCloudIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', args] as const
}

export function useGetTargetsTargetIdIntegrationsJiraCloudIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsJiraCloudIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
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
          client.targets[':target_id'].integrations['jira-cloud'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdIntegrationsJiraCloudIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsJiraCloudIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$get']
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
          client.targets[':target_id'].integrations['jira-cloud'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdIntegrationsJiraCloudIndexKey() {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', 'PUT'] as const
}

export function usePutTargetsTargetIdIntegrationsJiraCloudIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdIntegrationsJiraCloudIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations['jira-cloud'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdIntegrationsJiraCloudIndexKey() {
  return ['targets', '/targets/:target_id/integrations/jira-cloud/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdIntegrationsJiraCloudIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdIntegrationsJiraCloudIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['jira-cloud']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations['jira-cloud'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdIntegrationsJiraServerIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/jira-server/', args] as const
}

export function useGetTargetsTargetIdIntegrationsJiraServerIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsJiraServerIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
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
          client.targets[':target_id'].integrations['jira-server'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdIntegrationsJiraServerIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsJiraServerIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$get']
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
          client.targets[':target_id'].integrations['jira-server'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdIntegrationsJiraServerIndexKey() {
  return ['targets', '/targets/:target_id/integrations/jira-server/', 'PUT'] as const
}

export function usePutTargetsTargetIdIntegrationsJiraServerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdIntegrationsJiraServerIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations['jira-server'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdIntegrationsJiraServerIndexKey() {
  return ['targets', '/targets/:target_id/integrations/jira-server/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdIntegrationsJiraServerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdIntegrationsJiraServerIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['jira-server']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations['jira-server'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdIntegrationsSlackIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/integrations/slack/', args] as const
}

export function useGetTargetsTargetIdIntegrationsSlackIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsSlackIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
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
          client.targets[':target_id'].integrations.slack.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdIntegrationsSlackIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdIntegrationsSlackIndexKey(args)
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
                (typeof client.targets)[':target_id']['integrations']['slack']['index']['$get']
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
          client.targets[':target_id'].integrations.slack.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdIntegrationsSlackIndexKey() {
  return ['targets', '/targets/:target_id/integrations/slack/', 'PUT'] as const
}

export function usePutTargetsTargetIdIntegrationsSlackIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdIntegrationsSlackIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['slack']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations.slack.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdIntegrationsSlackIndexKey() {
  return ['targets', '/targets/:target_id/integrations/slack/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdIntegrationsSlackIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdIntegrationsSlackIndexKey()
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
            (typeof client.targets)[':target_id']['integrations']['slack']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].integrations.slack.index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdKeysIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/keys/', args] as const
}

export function useGetTargetsTargetIdKeysIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
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
        ? getGetTargetsTargetIdKeysIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].keys.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdKeysIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
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
        ? getGetTargetsTargetIdKeysIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].keys.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdKeysIndexKey() {
  return ['targets', '/targets/:target_id/keys/', 'POST'] as const
}

export function usePostTargetsTargetIdKeysIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['keys']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdKeysIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['keys']['index']['$post']>
        },
      ) => parseResponse(client.targets[':target_id'].keys.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdKeysIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/keys/:id/', args] as const
}

export function useGetTargetsTargetIdKeysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdKeysIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].keys[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdKeysIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdKeysIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].keys[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTargetsTargetIdKeysIdIndexKey() {
  return ['targets', '/targets/:target_id/keys/:id/', 'DELETE'] as const
}

export function useDeleteTargetsTargetIdKeysIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTargetsTargetIdKeysIdIndexKey()
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
            (typeof client.targets)[':target_id']['keys'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].keys[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdRiskTrendIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/risk_trend/', args] as const
}

export function useGetTargetsTargetIdRiskTrendIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
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
        ? getGetTargetsTargetIdRiskTrendIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].risk_trend.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdRiskTrendIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
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
        ? getGetTargetsTargetIdRiskTrendIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['risk_trend']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].risk_trend.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdScanNowIndexKey() {
  return ['targets', '/targets/:target_id/scan_now/', 'POST'] as const
}

export function usePostTargetsTargetIdScanNowIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdScanNowIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['scan_now']['index']['$post']>
        },
      ) => parseResponse(client.targets[':target_id'].scan_now.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/', args] as const
}

export function useGetTargetsTargetIdScansIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
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
        ? getGetTargetsTargetIdScansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].scans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
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
        ? getGetTargetsTargetIdScansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['scans']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].scans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansDatesIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/dates/', args] as const
}

export function useGetTargetsTargetIdScansDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
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
        ? getGetTargetsTargetIdScansDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scans.dates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
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
        ? getGetTargetsTargetIdScansDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans']['dates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scans.dates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansRetrievePageIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/retrieve_page/', args] as const
}

export function useGetTargetsTargetIdScansRetrievePageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansRetrievePageIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
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
          client.targets[':target_id'].scans.retrieve_page.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansRetrievePageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansRetrievePageIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans']['retrieve_page']['index']['$get']
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
          client.targets[':target_id'].scans.retrieve_page.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scans/:id/', args] as const
}

export function useGetTargetsTargetIdScansIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdScansIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scans[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdScansIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scans'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scans[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdScansIdCancelIndexKey() {
  return ['targets', '/targets/:target_id/scans/:id/cancel/', 'POST'] as const
}

export function usePostTargetsTargetIdScansIdCancelIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdScansIdCancelIndexKey()
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
            (typeof client.targets)[':target_id']['scans'][':id']['cancel']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].scans[':id'].cancel.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdEndpointsIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/endpoints/', args] as const
}

export function useGetTargetsTargetIdScansIdEndpointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdEndpointsIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].endpoints.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdEndpointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdEndpointsIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['endpoints']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].endpoints.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdReportIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/', args] as const
}

export function useGetTargetsTargetIdScansIdReportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdReportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdReportDefaultIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/default/', args] as const
}

export function useGetTargetsTargetIdScansIdReportDefaultIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportDefaultIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.default.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdReportDefaultIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportDefaultIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['default']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.default.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdReportOwaspIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/owasp/', args] as const
}

export function useGetTargetsTargetIdScansIdReportOwaspIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportOwaspIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.owasp.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdReportOwaspIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportOwaspIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['owasp']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.owasp.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScansIdReportPciIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scans/:id/report/pci/', args] as const
}

export function useGetTargetsTargetIdScansIdReportPciIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportPciIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.pci.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScansIdReportPciIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScansIdReportPciIndexKey(args)
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
                (typeof client.targets)[':target_id']['scans'][':id']['report']['pci']['index']['$get']
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
          client.targets[':target_id'].scans[':id'].report.pci.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScheduledscansIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/scheduledscans/', args] as const
}

export function useGetTargetsTargetIdScheduledscansIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
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
        ? getGetTargetsTargetIdScheduledscansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scheduledscans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScheduledscansIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
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
        ? getGetTargetsTargetIdScheduledscansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].scheduledscans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdScheduledscansIndexKey() {
  return ['targets', '/targets/:target_id/scheduledscans/', 'POST'] as const
}

export function usePostTargetsTargetIdScheduledscansIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['scheduledscans']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdScheduledscansIndexKey()
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
            (typeof client.targets)[':target_id']['scheduledscans']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].scheduledscans.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdScheduledscansExpandedIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/expanded/', args] as const
}

export function useGetTargetsTargetIdScheduledscansExpandedIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScheduledscansExpandedIndexKey(args)
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
                (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
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
          client.targets[':target_id'].scheduledscans.expanded.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScheduledscansExpandedIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScheduledscansExpandedIndexKey(args)
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
                (typeof client.targets)[':target_id']['scheduledscans']['expanded']['index']['$get']
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
          client.targets[':target_id'].scheduledscans.expanded.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdScheduledscansIdIndexKey(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
) {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', args] as const
}

export function useGetTargetsTargetIdScheduledscansIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScheduledscansIdIndexKey(args)
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
                (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
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
          client.targets[':target_id'].scheduledscans[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdScheduledscansIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTargetsTargetIdScheduledscansIdIndexKey(args)
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
                (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$get']
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
          client.targets[':target_id'].scheduledscans[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdScheduledscansIdIndexKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'PUT'] as const
}

export function usePutTargetsTargetIdScheduledscansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdScheduledscansIdIndexKey()
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
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].scheduledscans[':id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTargetsTargetIdScheduledscansIdIndexKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'DELETE'] as const
}

export function useDeleteTargetsTargetIdScheduledscansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTargetsTargetIdScheduledscansIdIndexKey()
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
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].scheduledscans[':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdScheduledscansIdIndexKey() {
  return ['targets', '/targets/:target_id/scheduledscans/:id/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdScheduledscansIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdScheduledscansIdIndexKey()
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
            (typeof client.targets)[':target_id']['scheduledscans'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].scheduledscans[':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdSeverityTrendIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/severity_trend/', args] as const
}

export function useGetTargetsTargetIdSeverityTrendIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
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
        ? getGetTargetsTargetIdSeverityTrendIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].severity_trend.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdSeverityTrendIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
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
        ? getGetTargetsTargetIdSeverityTrendIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['severity_trend']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].severity_trend.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdSiteIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/site/', args] as const
}

export function useGetTargetsTargetIdSiteIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
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
        ? getGetTargetsTargetIdSiteIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].site.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdSiteIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
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
        ? getGetTargetsTargetIdSiteIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.targets[':target_id'].site.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdSiteIndexKey() {
  return ['targets', '/targets/:target_id/site/', 'PUT'] as const
}

export function usePutTargetsTargetIdSiteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdSiteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$put']>
        },
      ) => parseResponse(client.targets[':target_id'].site.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdSiteIndexKey() {
  return ['targets', '/targets/:target_id/site/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdSiteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['site']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdSiteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['site']['index']['$patch']>
        },
      ) => parseResponse(client.targets[':target_id'].site.index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetsTargetIdSiteVerifyIndexKey() {
  return ['targets', '/targets/:target_id/site/verify/', 'POST'] as const
}

export function usePostTargetsTargetIdSiteVerifyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['site']['verify']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdSiteVerifyIndexKey()
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
            (typeof client.targets)[':target_id']['site']['verify']['index']['$post']
          >
        },
      ) => parseResponse(client.targets[':target_id'].site.verify.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdTopVulnsIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/top_vulns/', args] as const
}

export function useGetTargetsTargetIdTopVulnsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
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
        ? getGetTargetsTargetIdTopVulnsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].top_vulns.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdTopVulnsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
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
        ? getGetTargetsTargetIdTopVulnsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['top_vulns']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].top_vulns.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTargetsTargetIdWebhooksIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/webhooks/', args] as const
}

export function useGetTargetsTargetIdWebhooksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
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
        ? getGetTargetsTargetIdWebhooksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].webhooks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdWebhooksIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
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
        ? getGetTargetsTargetIdWebhooksIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].webhooks.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTargetsTargetIdWebhooksIndexKey() {
  return ['targets', '/targets/:target_id/webhooks/', 'POST'] as const
}

export function usePostTargetsTargetIdWebhooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetsTargetIdWebhooksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.targets)[':target_id']['webhooks']['index']['$post']>
        },
      ) => parseResponse(client.targets[':target_id'].webhooks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTargetsTargetIdWebhooksIdIndexKey(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
) {
  return ['targets', '/targets/:target_id/webhooks/:id/', args] as const
}

export function useGetTargetsTargetIdWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTargetsTargetIdWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
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
        ? getGetTargetsTargetIdWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.targets[':target_id'].webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTargetsTargetIdWebhooksIdIndexKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'PUT'] as const
}

export function usePutTargetsTargetIdWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetsTargetIdWebhooksIdIndexKey()
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
            (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(client.targets[':target_id'].webhooks[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTargetsTargetIdWebhooksIdIndexKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'DELETE'] as const
}

export function useDeleteTargetsTargetIdWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTargetsTargetIdWebhooksIdIndexKey()
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
            (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].webhooks[':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTargetsTargetIdWebhooksIdIndexKey() {
  return ['targets', '/targets/:target_id/webhooks/:id/', 'PATCH'] as const
}

export function usePatchTargetsTargetIdWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTargetsTargetIdWebhooksIdIndexKey()
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
            (typeof client.targets)[':target_id']['webhooks'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.targets[':target_id'].webhooks[':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIndexKey(args: InferRequestType<typeof client.users.index.$get>) {
  return ['users', '/users/', args] as const
}

export function useGetUsersIndex<TError = unknown>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIndex<TError = unknown>(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIndexKey() {
  return ['users', '/users/', 'POST'] as const
}

export function usePostUsersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.index.$post> }) =>
        parseResponse(client.users.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdIndexKey(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
) {
  return ['users', '/users/:id/', args] as const
}

export function useGetUsersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdIndexKey() {
  return ['users', '/users/:id/', 'PUT'] as const
}

export function usePutUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$put']> },
      ) => parseResponse(client.users[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdIndexKey() {
  return ['users', '/users/:id/', 'DELETE'] as const
}

export function useDeleteUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$delete']> },
      ) => parseResponse(client.users[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersIdIndexKey() {
  return ['users', '/users/:id/', 'PATCH'] as const
}

export function usePatchUsersIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['index']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['index']['$patch']> },
      ) => parseResponse(client.users[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVulnerabilityDefinitionsIndexKey(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/', args] as const
}

export function useGetVulnerabilityDefinitionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
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
        ? getGetVulnerabilityDefinitionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vulnerability_definitions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVulnerabilityDefinitionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.vulnerability_definitions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
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
        ? getGetVulnerabilityDefinitionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.vulnerability_definitions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vulnerability_definitions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVulnerabilityDefinitionsIdIndexKey(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
) {
  return ['vulnerability_definitions', '/vulnerability_definitions/:id/', args] as const
}

export function useGetVulnerabilityDefinitionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
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
        ? getGetVulnerabilityDefinitionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vulnerability_definitions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVulnerabilityDefinitionsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
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
        ? getGetVulnerabilityDefinitionsIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vulnerability_definitions)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vulnerability_definitions[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksIndexKey() {
  return ['webhooks', '/webhooks/'] as const
}

export function useGetWebhooksIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksIndexKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function usePostWebhooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.index.$post> }) =>
        parseResponse(client.webhooks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdIndexKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/', args] as const
}

export function useGetWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
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
        ? getGetWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
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
        ? getGetWebhooksIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'PUT'] as const
}

export function usePutWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']> },
      ) => parseResponse(client.webhooks[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'DELETE'] as const
}

export function useDeleteWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']> },
      ) => parseResponse(client.webhooks[':id'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksIdIndexKey() {
  return ['webhooks', '/webhooks/:id/', 'PATCH'] as const
}

export function usePatchWebhooksIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id']['index']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']> },
      ) => parseResponse(client.webhooks[':id'].index.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
