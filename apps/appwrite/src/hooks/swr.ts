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

export function getAvatarsKey() {
  return ['avatars'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getFunctionsKey() {
  return ['functions'] as const
}

export function getGraphqlKey() {
  return ['graphql'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getLocaleKey() {
  return ['locale'] as const
}

export function getMessagingKey() {
  return ['messaging'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getStorageKey() {
  return ['storage'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountKey() {
  return ['account', '/account', 'POST'] as const
}

export function usePostAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$post> }) =>
        parseResponse(client.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountEmailKey() {
  return ['account', '/account/email', 'PATCH'] as const
}

export function usePatchAccountEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.email.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.email.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.email.$patch> }) =>
        parseResponse(client.account.email.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdentitiesKey(
  args: InferRequestType<typeof client.account.identities.$get>,
) {
  return ['account', '/account/identities', args] as const
}

export function useGetAccountIdentities<TError = unknown>(
  args: InferRequestType<typeof client.account.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
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
        ? getGetAccountIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdentities<TError = unknown>(
  args: InferRequestType<typeof client.account.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
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
        ? getGetAccountIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountIdentitiesIdentityIdKey() {
  return ['account', '/account/identities/:identityId', 'DELETE'] as const
}

export function useDeleteAccountIdentitiesIdentityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.identities)[':identityId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.identities)[':identityId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdentitiesIdentityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.identities)[':identityId']['$delete']> },
      ) => parseResponse(client.account.identities[':identityId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountJwtsKey() {
  return ['account', '/account/jwts', 'POST'] as const
}

export function usePostAccountJwts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.jwts.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountJwtsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.jwts.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountLogsKey(args: InferRequestType<typeof client.account.logs.$get>) {
  return ['account', '/account/logs', args] as const
}

export function useGetAccountLogs<TError = unknown>(
  args: InferRequestType<typeof client.account.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountLogs<TError = unknown>(
  args: InferRequestType<typeof client.account.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountMfaKey() {
  return ['account', '/account/mfa', 'PATCH'] as const
}

export function usePatchAccountMfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.mfa.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountMfaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.mfa.$patch> }) =>
        parseResponse(client.account.mfa.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountMfaAuthenticatorsTypeKey() {
  return ['account', '/account/mfa/authenticators/:type', 'PUT'] as const
}

export function usePutAccountMfaAuthenticatorsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountMfaAuthenticatorsTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']> },
      ) => parseResponse(client.account.mfa.authenticators[':type'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountMfaAuthenticatorsTypeKey() {
  return ['account', '/account/mfa/authenticators/:type', 'POST'] as const
}

export function usePostAccountMfaAuthenticatorsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountMfaAuthenticatorsTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']> },
      ) => parseResponse(client.account.mfa.authenticators[':type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountMfaAuthenticatorsTypeKey() {
  return ['account', '/account/mfa/authenticators/:type', 'DELETE'] as const
}

export function useDeleteAccountMfaAuthenticatorsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountMfaAuthenticatorsTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>
        },
      ) => parseResponse(client.account.mfa.authenticators[':type'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountMfaChallengeKey() {
  return ['account', '/account/mfa/challenge', 'PUT'] as const
}

export function usePutAccountMfaChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.mfa.challenge.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountMfaChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.mfa.challenge.$put> },
      ) => parseResponse(client.account.mfa.challenge.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountMfaChallengeKey() {
  return ['account', '/account/mfa/challenge', 'POST'] as const
}

export function usePostAccountMfaChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.mfa.challenge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountMfaChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.mfa.challenge.$post> },
      ) => parseResponse(client.account.mfa.challenge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountMfaFactorsKey() {
  return ['account', '/account/mfa/factors'] as const
}

export function useGetAccountMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountMfaRecoveryCodesKey() {
  return ['account', '/account/mfa/recovery-codes'] as const
}

export function useGetAccountMfaRecoveryCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
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
        ? getGetAccountMfaRecoveryCodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.mfa['recovery-codes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountMfaRecoveryCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
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
        ? getGetAccountMfaRecoveryCodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.mfa['recovery-codes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountMfaRecoveryCodesKey() {
  return ['account', '/account/mfa/recovery-codes', 'POST'] as const
}

export function usePostAccountMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.account.mfa['recovery-codes'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountMfaRecoveryCodesKey() {
  return ['account', '/account/mfa/recovery-codes', 'PATCH'] as const
}

export function usePatchAccountMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.account.mfa['recovery-codes'].$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountNameKey() {
  return ['account', '/account/name', 'PATCH'] as const
}

export function usePatchAccountName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.name.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.name.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.name.$patch> }) =>
        parseResponse(client.account.name.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountPasswordKey() {
  return ['account', '/account/password', 'PATCH'] as const
}

export function usePatchAccountPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.password.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.password.$patch> }) =>
        parseResponse(client.account.password.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountPhoneKey() {
  return ['account', '/account/phone', 'PATCH'] as const
}

export function usePatchAccountPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.phone.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.phone.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.phone.$patch> }) =>
        parseResponse(client.account.phone.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPrefsKey() {
  return ['account', '/account/prefs'] as const
}

export function useGetAccountPrefs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountPrefsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.prefs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPrefs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountPrefsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.prefs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountPrefsKey() {
  return ['account', '/account/prefs', 'PATCH'] as const
}

export function usePatchAccountPrefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.prefs.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountPrefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.prefs.$patch> }) =>
        parseResponse(client.account.prefs.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountRecoveryKey() {
  return ['account', '/account/recovery', 'PUT'] as const
}

export function usePutAccountRecovery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.recovery.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountRecoveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.recovery.$put> }) =>
        parseResponse(client.account.recovery.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRecoveryKey() {
  return ['account', '/account/recovery', 'POST'] as const
}

export function usePostAccountRecovery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.recovery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRecoveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.recovery.$post> }) =>
        parseResponse(client.account.recovery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSessionsKey() {
  return ['account', '/account/sessions'] as const
}

export function useGetAccountSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountSessionsKey() {
  return ['account', '/account/sessions', 'DELETE'] as const
}

export function useDeleteAccountSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.sessions.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSessionsAnonymousKey() {
  return ['account', '/account/sessions/anonymous', 'POST'] as const
}

export function usePostAccountSessionsAnonymous<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.anonymous.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSessionsAnonymousKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.sessions.anonymous.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSessionsEmailKey() {
  return ['account', '/account/sessions/email', 'POST'] as const
}

export function usePostAccountSessionsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.sessions.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSessionsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.sessions.email.$post> },
      ) => parseResponse(client.account.sessions.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountSessionsMagicUrlKey() {
  return ['account', '/account/sessions/magic-url', 'PUT'] as const
}

export function usePutAccountSessionsMagicUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.sessions)['magic-url']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.sessions)['magic-url']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSessionsMagicUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.sessions)['magic-url']['$put']> },
      ) => parseResponse(client.account.sessions['magic-url'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountSessionsPhoneKey() {
  return ['account', '/account/sessions/phone', 'PUT'] as const
}

export function usePutAccountSessionsPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.phone.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.sessions.phone.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSessionsPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.sessions.phone.$put> },
      ) => parseResponse(client.account.sessions.phone.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSessionsTokenKey() {
  return ['account', '/account/sessions/token', 'POST'] as const
}

export function usePostAccountSessionsToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.sessions.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSessionsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.sessions.token.$post> },
      ) => parseResponse(client.account.sessions.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSessionsSessionIdKey(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
) {
  return ['account', '/account/sessions/:sessionId', args] as const
}

export function useGetAccountSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
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
        ? getGetAccountSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
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
        ? getGetAccountSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountSessionsSessionIdKey() {
  return ['account', '/account/sessions/:sessionId', 'DELETE'] as const
}

export function useDeleteAccountSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']> },
      ) => parseResponse(client.account.sessions[':sessionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountSessionsSessionIdKey() {
  return ['account', '/account/sessions/:sessionId', 'PATCH'] as const
}

export function usePatchAccountSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']> },
      ) => parseResponse(client.account.sessions[':sessionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountStatusKey() {
  return ['account', '/account/status', 'PATCH'] as const
}

export function usePatchAccountStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$patch>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.status.$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountTokensEmailKey() {
  return ['account', '/account/tokens/email', 'POST'] as const
}

export function usePostAccountTokensEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.tokens.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTokensEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.tokens.email.$post> },
      ) => parseResponse(client.account.tokens.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountTokensMagicUrlKey() {
  return ['account', '/account/tokens/magic-url', 'POST'] as const
}

export function usePostAccountTokensMagicUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.tokens)['magic-url']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.tokens)['magic-url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTokensMagicUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.tokens)['magic-url']['$post']> },
      ) => parseResponse(client.account.tokens['magic-url'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountTokensOauth2ProviderKey(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
) {
  return ['account', '/account/tokens/oauth2/:provider', args] as const
}

export function useGetAccountTokensOauth2Provider<TError = unknown>(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
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
        ? getGetAccountTokensOauth2ProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.tokens.oauth2[':provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTokensOauth2Provider<TError = unknown>(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
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
        ? getGetAccountTokensOauth2ProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.tokens.oauth2[':provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountTokensPhoneKey() {
  return ['account', '/account/tokens/phone', 'POST'] as const
}

export function usePostAccountTokensPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.phone.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.tokens.phone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTokensPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.tokens.phone.$post> },
      ) => parseResponse(client.account.tokens.phone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountVerificationKey() {
  return ['account', '/account/verification', 'PUT'] as const
}

export function usePutAccountVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.verification.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.verification.$put> }) =>
        parseResponse(client.account.verification.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountVerificationKey() {
  return ['account', '/account/verification', 'POST'] as const
}

export function usePostAccountVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.verification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.verification.$post> },
      ) => parseResponse(client.account.verification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountVerificationPhoneKey() {
  return ['account', '/account/verification/phone', 'PUT'] as const
}

export function usePutAccountVerificationPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.phone.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.verification.phone.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountVerificationPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.verification.phone.$put> },
      ) => parseResponse(client.account.verification.phone.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountVerificationPhoneKey() {
  return ['account', '/account/verification/phone', 'POST'] as const
}

export function usePostAccountVerificationPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.phone.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountVerificationPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.verification.phone.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAvatarsBrowsersCodeKey(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
) {
  return ['avatars', '/avatars/browsers/:code', args] as const
}

export function useGetAvatarsBrowsersCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
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
        ? getGetAvatarsBrowsersCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.browsers[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsBrowsersCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
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
        ? getGetAvatarsBrowsersCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.browsers[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsCreditCardsCodeKey(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
) {
  return ['avatars', '/avatars/credit-cards/:code', args] as const
}

export function useGetAvatarsCreditCardsCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
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
        ? getGetAvatarsCreditCardsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars['credit-cards'][':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsCreditCardsCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
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
        ? getGetAvatarsCreditCardsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars['credit-cards'][':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsFaviconKey(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
) {
  return ['avatars', '/avatars/favicon', args] as const
}

export function useGetAvatarsFavicon<TError = unknown>(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsFaviconKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.favicon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsFavicon<TError = unknown>(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsFaviconKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.favicon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsFlagsCodeKey(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
) {
  return ['avatars', '/avatars/flags/:code', args] as const
}

export function useGetAvatarsFlagsCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
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
        ? getGetAvatarsFlagsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.flags[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsFlagsCode<TError = unknown>(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
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
        ? getGetAvatarsFlagsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.flags[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsImageKey(args: InferRequestType<typeof client.avatars.image.$get>) {
  return ['avatars', '/avatars/image', args] as const
}

export function useGetAvatarsImage<TError = unknown>(
  args: InferRequestType<typeof client.avatars.image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsImageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsImage<TError = unknown>(
  args: InferRequestType<typeof client.avatars.image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsImageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsInitialsKey(
  args: InferRequestType<typeof client.avatars.initials.$get>,
) {
  return ['avatars', '/avatars/initials', args] as const
}

export function useGetAvatarsInitials<TError = unknown>(
  args: InferRequestType<typeof client.avatars.initials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
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
        ? getGetAvatarsInitialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.initials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsInitials<TError = unknown>(
  args: InferRequestType<typeof client.avatars.initials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
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
        ? getGetAvatarsInitialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.initials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAvatarsQrKey(args: InferRequestType<typeof client.avatars.qr.$get>) {
  return ['avatars', '/avatars/qr', args] as const
}

export function useGetAvatarsQr<TError = unknown>(
  args: InferRequestType<typeof client.avatars.qr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsQrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAvatarsQr<TError = unknown>(
  args: InferRequestType<typeof client.avatars.qr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvatarsQrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.avatars.qr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasesKey(args: InferRequestType<typeof client.databases.$get>) {
  return ['databases', '/databases', args] as const
}

export function useGetDatabases<TError = unknown>(
  args: InferRequestType<typeof client.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabases<TError = unknown>(
  args: InferRequestType<typeof client.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesKey() {
  return ['databases', '/databases', 'POST'] as const
}

export function usePostDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.databases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.databases.$post> }) =>
        parseResponse(client.databases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdKey(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
) {
  return ['databases', '/databases/:databaseId', args] as const
}

export function useGetDatabasesDatabaseId<TError = unknown>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
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
        ? getGetDatabasesDatabaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases[':databaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseId<TError = unknown>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
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
        ? getGetDatabasesDatabaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.databases[':databaseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesDatabaseIdKey() {
  return ['databases', '/databases/:databaseId', 'PUT'] as const
}

export function usePutDatabasesDatabaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases)[':databaseId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesDatabaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.databases)[':databaseId']['$put']> },
      ) => parseResponse(client.databases[':databaseId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdKey() {
  return ['databases', '/databases/:databaseId', 'DELETE'] as const
}

export function useDeleteDatabasesDatabaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.databases)[':databaseId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesDatabaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.databases)[':databaseId']['$delete']> },
      ) => parseResponse(client.databases[':databaseId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsKey(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
) {
  return ['databases', '/databases/:databaseId/collections', args] as const
}

export function useGetDatabasesDatabaseIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
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
        ? getGetDatabasesDatabaseIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases[':databaseId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
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
        ? getGetDatabasesDatabaseIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.databases[':databaseId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsKey() {
  return ['databases', '/databases/:databaseId/collections', 'POST'] as const
}

export function usePostDatabasesDatabaseIdCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>
        },
      ) => parseResponse(client.databases[':databaseId'].collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId', args] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId', 'PUT'] as const
}

export function usePutDatabasesDatabaseIdCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesDatabaseIdCollectionsCollectionIdKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId', 'DELETE'] as const
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesDatabaseIdCollectionsCollectionIdKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/attributes', args] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdAttributes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].attributes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/boolean',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesBoolean<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.boolean.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/boolean/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.boolean[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/datetime',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.datetime.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/datetime/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.datetime[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/email',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.email.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/email/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.email[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/enum',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnum<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.enum.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/enum/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.enum[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/float',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.float.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/float/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.float[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/integer',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesInteger<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.integer.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/integer/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.integer[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/ip',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesIp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.ip.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/ip/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.ip[':key'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/relationship',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationship<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[
            ':collectionId'
          ].attributes.relationship.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/string',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesString<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.string.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/string/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.string[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/url',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.url.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/url/:key',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.url[
            ':key'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key',
    args,
  ] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key/relationship',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationship<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes[
            ':key'
          ].relationship.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/documents', args] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].documents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId/documents', 'PUT'] as const
}

export function usePutDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'POST',
  ] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    args,
  ] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'PUT',
  ] as const
}

export function usePutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/decrement',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
            ':attribute'
          ].decrement.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/increment',
    'PATCH',
  ] as const
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
            ':attribute'
          ].increment.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/indexes', args] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdIndexes<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].indexes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdIndexes<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].indexes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId/indexes', 'POST'] as const
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdIndexes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].indexes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes/:key',
    args,
  ] as const
}

export function useGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
        ? getGetDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyKey(args)
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
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
          client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes/:key',
    'DELETE',
  ] as const
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyKey()
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
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsKey(args: InferRequestType<typeof client.functions.$get>) {
  return ['functions', '/functions', args] as const
}

export function useGetFunctions<TError = unknown>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctions<TError = unknown>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsKey() {
  return ['functions', '/functions', 'POST'] as const
}

export function usePostFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.functions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.functions.$post> }) =>
        parseResponse(client.functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsRuntimesKey() {
  return ['functions', '/functions/runtimes'] as const
}

export function useGetFunctionsRuntimes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsRuntimesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.runtimes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsRuntimes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsRuntimesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.runtimes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFunctionsSpecificationsKey() {
  return ['functions', '/functions/specifications'] as const
}

export function useGetFunctionsSpecifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
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
        ? getGetFunctionsSpecificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.specifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsSpecifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
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
        ? getGetFunctionsSpecificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.specifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdKey(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
) {
  return ['functions', '/functions/:functionId', args] as const
}

export function useGetFunctionsFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
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
        ? getGetFunctionsFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions[':functionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
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
        ? getGetFunctionsFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions[':functionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFunctionsFunctionIdKey() {
  return ['functions', '/functions/:functionId', 'PUT'] as const
}

export function usePutFunctionsFunctionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFunctionsFunctionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.functions)[':functionId']['$put']> },
      ) => parseResponse(client.functions[':functionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFunctionsFunctionIdKey() {
  return ['functions', '/functions/:functionId', 'DELETE'] as const
}

export function useDeleteFunctionsFunctionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFunctionsFunctionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.functions)[':functionId']['$delete']> },
      ) => parseResponse(client.functions[':functionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFunctionsFunctionIdDeploymentKey() {
  return ['functions', '/functions/:functionId/deployment', 'PATCH'] as const
}

export function usePatchFunctionsFunctionIdDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['deployment']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFunctionsFunctionIdDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>
        },
      ) => parseResponse(client.functions[':functionId'].deployment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdDeploymentsKey(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
) {
  return ['functions', '/functions/:functionId/deployments', args] as const
}

export function useGetFunctionsFunctionIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
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
        ? getGetFunctionsFunctionIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
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
        ? getGetFunctionsFunctionIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdDeploymentsKey() {
  return ['functions', '/functions/:functionId/deployments', 'POST'] as const
}

export function usePostFunctionsFunctionIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>
        },
      ) => parseResponse(client.functions[':functionId'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdDeploymentsDuplicateKey() {
  return ['functions', '/functions/:functionId/deployments/duplicate', 'POST'] as const
}

export function usePostFunctionsFunctionIdDeploymentsDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdDeploymentsDuplicateKey()
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
            (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].deployments.duplicate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdDeploymentsTemplateKey() {
  return ['functions', '/functions/:functionId/deployments/template', 'POST'] as const
}

export function usePostFunctionsFunctionIdDeploymentsTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['deployments']['template']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['template']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdDeploymentsTemplateKey()
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
            (typeof client.functions)[':functionId']['deployments']['template']['$post']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].deployments.template.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdDeploymentsVcsKey() {
  return ['functions', '/functions/:functionId/deployments/vcs', 'POST'] as const
}

export function usePostFunctionsFunctionIdDeploymentsVcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdDeploymentsVcsKey()
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
            (typeof client.functions)[':functionId']['deployments']['vcs']['$post']
          >
        },
      ) => parseResponse(client.functions[':functionId'].deployments.vcs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdDeploymentsDeploymentIdKey(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/deployments/:deploymentId', args] as const
}

export function useGetFunctionsFunctionIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
        ? getGetFunctionsFunctionIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
          client.functions[':functionId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
        ? getGetFunctionsFunctionIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
          client.functions[':functionId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteFunctionsFunctionIdDeploymentsDeploymentIdKey() {
  return ['functions', '/functions/:functionId/deployments/:deploymentId', 'DELETE'] as const
}

export function useDeleteFunctionsFunctionIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFunctionsFunctionIdDeploymentsDeploymentIdKey()
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
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].deployments[':deploymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdDeploymentsDeploymentIdDownloadKey(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/deployments/:deploymentId/download', args] as const
}

export function useGetFunctionsFunctionIdDeploymentsDeploymentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
        ? getGetFunctionsFunctionIdDeploymentsDeploymentIdDownloadKey(args)
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
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
          client.functions[':functionId'].deployments[':deploymentId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdDeploymentsDeploymentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
        ? getGetFunctionsFunctionIdDeploymentsDeploymentIdDownloadKey(args)
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
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
          client.functions[':functionId'].deployments[':deploymentId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusKey() {
  return ['functions', '/functions/:functionId/deployments/:deploymentId/status', 'PATCH'] as const
}

export function usePatchFunctionsFunctionIdDeploymentsDeploymentIdStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusKey()
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
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].deployments[':deploymentId'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdExecutionsKey(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
) {
  return ['functions', '/functions/:functionId/executions', args] as const
}

export function useGetFunctionsFunctionIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
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
        ? getGetFunctionsFunctionIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
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
        ? getGetFunctionsFunctionIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdExecutionsKey() {
  return ['functions', '/functions/:functionId/executions', 'POST'] as const
}

export function usePostFunctionsFunctionIdExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>
        },
      ) => parseResponse(client.functions[':functionId'].executions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/executions/:executionId', args] as const
}

export function useGetFunctionsFunctionIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
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
        ? getGetFunctionsFunctionIdExecutionsExecutionIdKey(args)
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
                (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
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
          client.functions[':functionId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
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
        ? getGetFunctionsFunctionIdExecutionsExecutionIdKey(args)
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
                (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
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
          client.functions[':functionId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteFunctionsFunctionIdExecutionsExecutionIdKey() {
  return ['functions', '/functions/:functionId/executions/:executionId', 'DELETE'] as const
}

export function useDeleteFunctionsFunctionIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFunctionsFunctionIdExecutionsExecutionIdKey()
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
            (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].executions[':executionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdVariablesKey(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
) {
  return ['functions', '/functions/:functionId/variables', args] as const
}

export function useGetFunctionsFunctionIdVariables<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
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
        ? getGetFunctionsFunctionIdVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdVariables<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
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
        ? getGetFunctionsFunctionIdVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.functions[':functionId'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsFunctionIdVariablesKey() {
  return ['functions', '/functions/:functionId/variables', 'POST'] as const
}

export function usePostFunctionsFunctionIdVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsFunctionIdVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>
        },
      ) => parseResponse(client.functions[':functionId'].variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsFunctionIdVariablesVariableIdKey(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/variables/:variableId', args] as const
}

export function useGetFunctionsFunctionIdVariablesVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
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
        ? getGetFunctionsFunctionIdVariablesVariableIdKey(args)
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
                (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
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
          client.functions[':functionId'].variables[':variableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsFunctionIdVariablesVariableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
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
        ? getGetFunctionsFunctionIdVariablesVariableIdKey(args)
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
                (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
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
          client.functions[':functionId'].variables[':variableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFunctionsFunctionIdVariablesVariableIdKey() {
  return ['functions', '/functions/:functionId/variables/:variableId', 'PUT'] as const
}

export function usePutFunctionsFunctionIdVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['variables'][':variableId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':functionId']['variables'][':variableId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFunctionsFunctionIdVariablesVariableIdKey()
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
            (typeof client.functions)[':functionId']['variables'][':variableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].variables[':variableId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteFunctionsFunctionIdVariablesVariableIdKey() {
  return ['functions', '/functions/:functionId/variables/:variableId', 'DELETE'] as const
}

export function useDeleteFunctionsFunctionIdVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFunctionsFunctionIdVariablesVariableIdKey()
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
            (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.functions[':functionId'].variables[':variableId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGraphqlKey() {
  return ['graphql', '/graphql', 'POST'] as const
}

export function usePostGraphql<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphqlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.graphql.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGraphqlMutationKey() {
  return ['graphql', '/graphql/mutation', 'POST'] as const
}

export function usePostGraphqlMutation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.mutation.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGraphqlMutationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.graphql.mutation.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthAntiVirusKey() {
  return ['health', '/health/anti-virus'] as const
}

export function useGetHealthAntiVirus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthAntiVirusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health['anti-virus'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthAntiVirus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthAntiVirusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health['anti-virus'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthCacheKey() {
  return ['health', '/health/cache'] as const
}

export function useGetHealthCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthCacheKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthCacheKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthCertificateKey(
  args: InferRequestType<typeof client.health.certificate.$get>,
) {
  return ['health', '/health/certificate', args] as const
}

export function useGetHealthCertificate<TError = unknown>(
  args: InferRequestType<typeof client.health.certificate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
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
        ? getGetHealthCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.certificate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthCertificate<TError = unknown>(
  args: InferRequestType<typeof client.health.certificate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
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
        ? getGetHealthCertificateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.certificate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthDbKey() {
  return ['health', '/health/db'] as const
}

export function useGetHealthDb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthDbKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.db.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthDb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthDbKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.db.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthPubsubKey() {
  return ['health', '/health/pubsub'] as const
}

export function useGetHealthPubsub<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthPubsubKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.pubsub.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthPubsub<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthPubsubKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.pubsub.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueBuildsKey(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
) {
  return ['health', '/health/queue/builds', args] as const
}

export function useGetHealthQueueBuilds<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
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
        ? getGetHealthQueueBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueBuilds<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
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
        ? getGetHealthQueueBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueCertificatesKey(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
) {
  return ['health', '/health/queue/certificates', args] as const
}

export function useGetHealthQueueCertificates<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
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
        ? getGetHealthQueueCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueCertificates<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
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
        ? getGetHealthQueueCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueDatabasesKey(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
) {
  return ['health', '/health/queue/databases', args] as const
}

export function useGetHealthQueueDatabases<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
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
        ? getGetHealthQueueDatabasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueDatabases<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
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
        ? getGetHealthQueueDatabasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueDeletesKey(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
) {
  return ['health', '/health/queue/deletes', args] as const
}

export function useGetHealthQueueDeletes<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
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
        ? getGetHealthQueueDeletesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.deletes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueDeletes<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
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
        ? getGetHealthQueueDeletesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.deletes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueFailedNameKey(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
) {
  return ['health', '/health/queue/failed/:name', args] as const
}

export function useGetHealthQueueFailedName<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
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
        ? getGetHealthQueueFailedNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.failed[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueFailedName<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
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
        ? getGetHealthQueueFailedNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.failed[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueFunctionsKey(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
) {
  return ['health', '/health/queue/functions', args] as const
}

export function useGetHealthQueueFunctions<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
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
        ? getGetHealthQueueFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueFunctions<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
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
        ? getGetHealthQueueFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueLogsKey(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
) {
  return ['health', '/health/queue/logs', args] as const
}

export function useGetHealthQueueLogs<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
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
        ? getGetHealthQueueLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueLogs<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
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
        ? getGetHealthQueueLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueMailsKey(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
) {
  return ['health', '/health/queue/mails', args] as const
}

export function useGetHealthQueueMails<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
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
        ? getGetHealthQueueMailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.mails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueMails<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
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
        ? getGetHealthQueueMailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.mails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueMessagingKey(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
) {
  return ['health', '/health/queue/messaging', args] as const
}

export function useGetHealthQueueMessaging<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
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
        ? getGetHealthQueueMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueMessaging<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
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
        ? getGetHealthQueueMessagingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.messaging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueMigrationsKey(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
) {
  return ['health', '/health/queue/migrations', args] as const
}

export function useGetHealthQueueMigrations<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
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
        ? getGetHealthQueueMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueMigrations<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
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
        ? getGetHealthQueueMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueStatsResourcesKey(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
) {
  return ['health', '/health/queue/stats-resources', args] as const
}

export function useGetHealthQueueStatsResources<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
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
        ? getGetHealthQueueStatsResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue['stats-resources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueStatsResources<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
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
        ? getGetHealthQueueStatsResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue['stats-resources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueStatsUsageKey(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
) {
  return ['health', '/health/queue/stats-usage', args] as const
}

export function useGetHealthQueueStatsUsage<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
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
        ? getGetHealthQueueStatsUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue['stats-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueStatsUsage<TError = unknown>(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
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
        ? getGetHealthQueueStatsUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue['stats-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthQueueWebhooksKey(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
) {
  return ['health', '/health/queue/webhooks', args] as const
}

export function useGetHealthQueueWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
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
        ? getGetHealthQueueWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthQueueWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
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
        ? getGetHealthQueueWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.queue.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthStorageKey() {
  return ['health', '/health/storage'] as const
}

export function useGetHealthStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthStorageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.storage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthStorageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.storage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthStorageLocalKey() {
  return ['health', '/health/storage/local'] as const
}

export function useGetHealthStorageLocal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthStorageLocalKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.storage.local.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthStorageLocal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthStorageLocalKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.storage.local.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthTimeKey() {
  return ['health', '/health/time'] as const
}

export function useGetHealthTime<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthTimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.time.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthTime<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthTimeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.time.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleKey() {
  return ['locale', '/locale'] as const
}

export function useGetLocale<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocale<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleCodesKey() {
  return ['locale', '/locale/codes'] as const
}

export function useGetLocaleCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.codes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.codes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleContinentsKey() {
  return ['locale', '/locale/continents'] as const
}

export function useGetLocaleContinents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleContinentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.continents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleContinents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleContinentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.continents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleCountriesKey() {
  return ['locale', '/locale/countries'] as const
}

export function useGetLocaleCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleCountriesEuKey() {
  return ['locale', '/locale/countries/eu'] as const
}

export function useGetLocaleCountriesEu<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCountriesEuKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.eu.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleCountriesEu<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCountriesEuKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.eu.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleCountriesPhonesKey() {
  return ['locale', '/locale/countries/phones'] as const
}

export function useGetLocaleCountriesPhones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
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
        ? getGetLocaleCountriesPhonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.phones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleCountriesPhones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
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
        ? getGetLocaleCountriesPhonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.countries.phones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleCurrenciesKey() {
  return ['locale', '/locale/currencies'] as const
}

export function useGetLocaleCurrencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCurrenciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleCurrencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleCurrenciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocaleLanguagesKey() {
  return ['locale', '/locale/languages'] as const
}

export function useGetLocaleLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocaleLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocaleLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locale.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingMessagesKey(
  args: InferRequestType<typeof client.messaging.messages.$get>,
) {
  return ['messaging', '/messaging/messages', args] as const
}

export function useGetMessagingMessages<TError = unknown>(
  args: InferRequestType<typeof client.messaging.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
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
        ? getGetMessagingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingMessages<TError = unknown>(
  args: InferRequestType<typeof client.messaging.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
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
        ? getGetMessagingMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingMessagesEmailKey() {
  return ['messaging', '/messaging/messages/email', 'POST'] as const
}

export function usePostMessagingMessagesEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.messages.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingMessagesEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.messages.email.$post> },
      ) => parseResponse(client.messaging.messages.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingMessagesEmailMessageIdKey() {
  return ['messaging', '/messaging/messages/email/:messageId', 'PATCH'] as const
}

export function usePatchMessagingMessagesEmailMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.email)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingMessagesEmailMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>
        },
      ) => parseResponse(client.messaging.messages.email[':messageId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingMessagesPushKey() {
  return ['messaging', '/messaging/messages/push', 'POST'] as const
}

export function usePostMessagingMessagesPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.push.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.messages.push.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingMessagesPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.messages.push.$post> },
      ) => parseResponse(client.messaging.messages.push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingMessagesPushMessageIdKey() {
  return ['messaging', '/messaging/messages/push/:messageId', 'PATCH'] as const
}

export function usePatchMessagingMessagesPushMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.push)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingMessagesPushMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>
        },
      ) => parseResponse(client.messaging.messages.push[':messageId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingMessagesSmsKey() {
  return ['messaging', '/messaging/messages/sms', 'POST'] as const
}

export function usePostMessagingMessagesSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.sms.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.messages.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingMessagesSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.messages.sms.$post> },
      ) => parseResponse(client.messaging.messages.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingMessagesSmsMessageIdKey() {
  return ['messaging', '/messaging/messages/sms/:messageId', 'PATCH'] as const
}

export function usePatchMessagingMessagesSmsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingMessagesSmsMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>
        },
      ) => parseResponse(client.messaging.messages.sms[':messageId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingMessagesMessageIdKey(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId', args] as const
}

export function useGetMessagingMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
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
        ? getGetMessagingMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.messages[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
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
        ? getGetMessagingMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.messages[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagingMessagesMessageIdKey() {
  return ['messaging', '/messaging/messages/:messageId', 'DELETE'] as const
}

export function useDeleteMessagingMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']> },
      ) => parseResponse(client.messaging.messages[':messageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingMessagesMessageIdLogsKey(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId/logs', args] as const
}

export function useGetMessagingMessagesMessageIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
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
        ? getGetMessagingMessagesMessageIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.messages[':messageId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingMessagesMessageIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
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
        ? getGetMessagingMessagesMessageIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.messages[':messageId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingMessagesMessageIdTargetsKey(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId/targets', args] as const
}

export function useGetMessagingMessagesMessageIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
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
        ? getGetMessagingMessagesMessageIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.messages[':messageId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingMessagesMessageIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
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
        ? getGetMessagingMessagesMessageIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.messages[':messageId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingProvidersKey(
  args: InferRequestType<typeof client.messaging.providers.$get>,
) {
  return ['messaging', '/messaging/providers', args] as const
}

export function useGetMessagingProviders<TError = unknown>(
  args: InferRequestType<typeof client.messaging.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
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
        ? getGetMessagingProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProviders<TError = unknown>(
  args: InferRequestType<typeof client.messaging.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
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
        ? getGetMessagingProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingProvidersApnsKey() {
  return ['messaging', '/messaging/providers/apns', 'POST'] as const
}

export function usePostMessagingProvidersApns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.apns.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.apns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersApnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.apns.$post> },
      ) => parseResponse(client.messaging.providers.apns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersApnsProviderIdKey() {
  return ['messaging', '/messaging/providers/apns/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersApnsProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersApnsProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>
        },
      ) => parseResponse(client.messaging.providers.apns[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersFcmKey() {
  return ['messaging', '/messaging/providers/fcm', 'POST'] as const
}

export function usePostMessagingProvidersFcm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.fcm.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.fcm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersFcmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.fcm.$post> },
      ) => parseResponse(client.messaging.providers.fcm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersFcmProviderIdKey() {
  return ['messaging', '/messaging/providers/fcm/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersFcmProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersFcmProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>
        },
      ) => parseResponse(client.messaging.providers.fcm[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersMailgunKey() {
  return ['messaging', '/messaging/providers/mailgun', 'POST'] as const
}

export function usePostMessagingProvidersMailgun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.mailgun.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.mailgun.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersMailgunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.mailgun.$post> },
      ) => parseResponse(client.messaging.providers.mailgun.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersMailgunProviderIdKey() {
  return ['messaging', '/messaging/providers/mailgun/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersMailgunProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersMailgunProviderIdKey()
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
            (typeof client.messaging.providers.mailgun)[':providerId']['$patch']
          >
        },
      ) =>
        parseResponse(client.messaging.providers.mailgun[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersMsg91Key() {
  return ['messaging', '/messaging/providers/msg91', 'POST'] as const
}

export function usePostMessagingProvidersMsg91<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.msg91.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.msg91.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersMsg91Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.msg91.$post> },
      ) => parseResponse(client.messaging.providers.msg91.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersMsg91ProviderIdKey() {
  return ['messaging', '/messaging/providers/msg91/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersMsg91ProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersMsg91ProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>
        },
      ) =>
        parseResponse(client.messaging.providers.msg91[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersSendgridKey() {
  return ['messaging', '/messaging/providers/sendgrid', 'POST'] as const
}

export function usePostMessagingProvidersSendgrid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.sendgrid.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.sendgrid.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersSendgridKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.sendgrid.$post> },
      ) => parseResponse(client.messaging.providers.sendgrid.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersSendgridProviderIdKey() {
  return ['messaging', '/messaging/providers/sendgrid/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersSendgridProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersSendgridProviderIdKey()
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
            (typeof client.messaging.providers.sendgrid)[':providerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.messaging.providers.sendgrid[':providerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersSmtpKey() {
  return ['messaging', '/messaging/providers/smtp', 'POST'] as const
}

export function usePostMessagingProvidersSmtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.smtp.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.smtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersSmtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.smtp.$post> },
      ) => parseResponse(client.messaging.providers.smtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersSmtpProviderIdKey() {
  return ['messaging', '/messaging/providers/smtp/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersSmtpProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersSmtpProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>
        },
      ) => parseResponse(client.messaging.providers.smtp[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersTelesignKey() {
  return ['messaging', '/messaging/providers/telesign', 'POST'] as const
}

export function usePostMessagingProvidersTelesign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.telesign.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.telesign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersTelesignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.telesign.$post> },
      ) => parseResponse(client.messaging.providers.telesign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersTelesignProviderIdKey() {
  return ['messaging', '/messaging/providers/telesign/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersTelesignProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersTelesignProviderIdKey()
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
            (typeof client.messaging.providers.telesign)[':providerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.messaging.providers.telesign[':providerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersTextmagicKey() {
  return ['messaging', '/messaging/providers/textmagic', 'POST'] as const
}

export function usePostMessagingProvidersTextmagic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.textmagic.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.textmagic.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersTextmagicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.textmagic.$post> },
      ) => parseResponse(client.messaging.providers.textmagic.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersTextmagicProviderIdKey() {
  return ['messaging', '/messaging/providers/textmagic/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersTextmagicProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersTextmagicProviderIdKey()
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
            (typeof client.messaging.providers.textmagic)[':providerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.messaging.providers.textmagic[':providerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersTwilioKey() {
  return ['messaging', '/messaging/providers/twilio', 'POST'] as const
}

export function usePostMessagingProvidersTwilio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.twilio.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.twilio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersTwilioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.twilio.$post> },
      ) => parseResponse(client.messaging.providers.twilio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersTwilioProviderIdKey() {
  return ['messaging', '/messaging/providers/twilio/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersTwilioProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersTwilioProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>
        },
      ) =>
        parseResponse(client.messaging.providers.twilio[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagingProvidersVonageKey() {
  return ['messaging', '/messaging/providers/vonage', 'POST'] as const
}

export function usePostMessagingProvidersVonage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.vonage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.providers.vonage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingProvidersVonageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messaging.providers.vonage.$post> },
      ) => parseResponse(client.messaging.providers.vonage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingProvidersVonageProviderIdKey() {
  return ['messaging', '/messaging/providers/vonage/:providerId', 'PATCH'] as const
}

export function usePatchMessagingProvidersVonageProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingProvidersVonageProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>
        },
      ) =>
        parseResponse(client.messaging.providers.vonage[':providerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingProvidersProviderIdKey(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
) {
  return ['messaging', '/messaging/providers/:providerId', args] as const
}

export function useGetMessagingProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
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
        ? getGetMessagingProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
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
        ? getGetMessagingProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagingProvidersProviderIdKey() {
  return ['messaging', '/messaging/providers/:providerId', 'DELETE'] as const
}

export function useDeleteMessagingProvidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingProvidersProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']> },
      ) => parseResponse(client.messaging.providers[':providerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingProvidersProviderIdLogsKey(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/providers/:providerId/logs', args] as const
}

export function useGetMessagingProvidersProviderIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
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
        ? getGetMessagingProvidersProviderIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.providers[':providerId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingProvidersProviderIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
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
        ? getGetMessagingProvidersProviderIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.providers[':providerId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingSubscribersSubscriberIdLogsKey(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/subscribers/:subscriberId/logs', args] as const
}

export function useGetMessagingSubscribersSubscriberIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
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
        ? getGetMessagingSubscribersSubscriberIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.subscribers[':subscriberId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingSubscribersSubscriberIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
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
        ? getGetMessagingSubscribersSubscriberIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.subscribers[':subscriberId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingTopicsKey(
  args: InferRequestType<typeof client.messaging.topics.$get>,
) {
  return ['messaging', '/messaging/topics', args] as const
}

export function useGetMessagingTopics<TError = unknown>(
  args: InferRequestType<typeof client.messaging.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
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
        ? getGetMessagingTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingTopics<TError = unknown>(
  args: InferRequestType<typeof client.messaging.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
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
        ? getGetMessagingTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingTopicsKey() {
  return ['messaging', '/messaging/topics', 'POST'] as const
}

export function usePostMessagingTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messaging.topics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messaging.topics.$post> }) =>
        parseResponse(client.messaging.topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingTopicsTopicIdKey(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId', args] as const
}

export function useGetMessagingTopicsTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
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
        ? getGetMessagingTopicsTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingTopicsTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
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
        ? getGetMessagingTopicsTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagingTopicsTopicIdKey() {
  return ['messaging', '/messaging/topics/:topicId', 'DELETE'] as const
}

export function useDeleteMessagingTopicsTopicId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingTopicsTopicIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']> },
      ) => parseResponse(client.messaging.topics[':topicId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMessagingTopicsTopicIdKey() {
  return ['messaging', '/messaging/topics/:topicId', 'PATCH'] as const
}

export function usePatchMessagingTopicsTopicId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMessagingTopicsTopicIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']> },
      ) => parseResponse(client.messaging.topics[':topicId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingTopicsTopicIdLogsKey(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId/logs', args] as const
}

export function useGetMessagingTopicsTopicIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
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
        ? getGetMessagingTopicsTopicIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics[':topicId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingTopicsTopicIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
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
        ? getGetMessagingTopicsTopicIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messaging.topics[':topicId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagingTopicsTopicIdSubscribersKey(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId/subscribers', args] as const
}

export function useGetMessagingTopicsTopicIdSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
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
        ? getGetMessagingTopicsTopicIdSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.topics[':topicId'].subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingTopicsTopicIdSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
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
        ? getGetMessagingTopicsTopicIdSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messaging.topics[':topicId'].subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagingTopicsTopicIdSubscribersKey() {
  return ['messaging', '/messaging/topics/:topicId/subscribers', 'POST'] as const
}

export function usePostMessagingTopicsTopicIdSubscribers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagingTopicsTopicIdSubscribersKey()
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
            (typeof client.messaging.topics)[':topicId']['subscribers']['$post']
          >
        },
      ) => parseResponse(client.messaging.topics[':topicId'].subscribers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagingTopicsTopicIdSubscribersSubscriberIdKey(
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
) {
  return ['messaging', '/messaging/topics/:topicId/subscribers/:subscriberId', args] as const
}

export function useGetMessagingTopicsTopicIdSubscribersSubscriberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
        ? getGetMessagingTopicsTopicIdSubscribersSubscriberIdKey(args)
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
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
          client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagingTopicsTopicIdSubscribersSubscriberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
        ? getGetMessagingTopicsTopicIdSubscribersSubscriberIdKey(args)
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
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
          client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdKey() {
  return ['messaging', '/messaging/topics/:topicId/subscribers/:subscriberId', 'DELETE'] as const
}

export function useDeleteMessagingTopicsTopicIdSubscribersSubscriberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdKey()
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
            (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.messaging.topics[':topicId'].subscribers[':subscriberId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSitesKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function usePostSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sites.$post> }) =>
        parseResponse(client.sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesFrameworksKey() {
  return ['sites', '/sites/frameworks'] as const
}

export function useGetSitesFrameworks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesFrameworksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites.frameworks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesFrameworks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesFrameworksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites.frameworks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSpecificationsKey() {
  return ['sites', '/sites/specifications'] as const
}

export function useGetSitesSpecifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
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
        ? getGetSitesSpecificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites.specifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSpecifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
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
        ? getGetSitesSpecificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites.specifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
) {
  return ['sites', '/sites/:siteId', args] as const
}

export function useGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdKey() {
  return ['sites', '/sites/:siteId', 'PUT'] as const
}

export function usePutSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':siteId']['$put']> },
      ) => parseResponse(client.sites[':siteId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdKey() {
  return ['sites', '/sites/:siteId', 'DELETE'] as const
}

export function useDeleteSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':siteId']['$delete']> },
      ) => parseResponse(client.sites[':siteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesSiteIdDeploymentKey() {
  return ['sites', '/sites/:siteId/deployment', 'PATCH'] as const
}

export function usePatchSitesSiteIdDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployment']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']> },
      ) => parseResponse(client.sites[':siteId'].deployment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeploymentsKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
) {
  return ['sites', '/sites/:siteId/deployments', args] as const
}

export function useGetSitesSiteIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
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
        ? getGetSitesSiteIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
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
        ? getGetSitesSiteIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploymentsKey() {
  return ['sites', '/sites/:siteId/deployments', 'POST'] as const
}

export function usePostSitesSiteIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']> },
      ) => parseResponse(client.sites[':siteId'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploymentsDuplicateKey() {
  return ['sites', '/sites/:siteId/deployments/duplicate', 'POST'] as const
}

export function usePostSitesSiteIdDeploymentsDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploymentsDuplicateKey()
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
            (typeof client.sites)[':siteId']['deployments']['duplicate']['$post']
          >
        },
      ) => parseResponse(client.sites[':siteId'].deployments.duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploymentsTemplateKey() {
  return ['sites', '/sites/:siteId/deployments/template', 'POST'] as const
}

export function usePostSitesSiteIdDeploymentsTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploymentsTemplateKey()
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
            (typeof client.sites)[':siteId']['deployments']['template']['$post']
          >
        },
      ) => parseResponse(client.sites[':siteId'].deployments.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploymentsVcsKey() {
  return ['sites', '/sites/:siteId/deployments/vcs', 'POST'] as const
}

export function usePostSitesSiteIdDeploymentsVcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploymentsVcsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>
        },
      ) => parseResponse(client.sites[':siteId'].deployments.vcs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeploymentsDeploymentIdKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId', args] as const
}

export function useGetSitesSiteIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
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
        ? getGetSitesSiteIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
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
        ? getGetSitesSiteIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDeploymentsDeploymentIdKey() {
  return ['sites', '/sites/:siteId/deployments/:deploymentId', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDeploymentsDeploymentIdKey()
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
            (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeploymentsDeploymentIdDownloadKey(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId/download', args] as const
}

export function useGetSitesSiteIdDeploymentsDeploymentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
        ? getGetSitesSiteIdDeploymentsDeploymentIdDownloadKey(args)
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
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
          client.sites[':siteId'].deployments[':deploymentId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeploymentsDeploymentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
        ? getGetSitesSiteIdDeploymentsDeploymentIdDownloadKey(args)
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
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
          client.sites[':siteId'].deployments[':deploymentId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSitesSiteIdDeploymentsDeploymentIdStatusKey() {
  return ['sites', '/sites/:siteId/deployments/:deploymentId/status', 'PATCH'] as const
}

export function usePatchSitesSiteIdDeploymentsDeploymentIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdDeploymentsDeploymentIdStatusKey()
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
            (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdLogsKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
) {
  return ['sites', '/sites/:siteId/logs', args] as const
}

export function useGetSitesSiteIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
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
        ? getGetSitesSiteIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
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
        ? getGetSitesSiteIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdLogsLogIdKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
) {
  return ['sites', '/sites/:siteId/logs/:logId', args] as const
}

export function useGetSitesSiteIdLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
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
        ? getGetSitesSiteIdLogsLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].logs[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
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
        ? getGetSitesSiteIdLogsLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].logs[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdLogsLogIdKey() {
  return ['sites', '/sites/:siteId/logs/:logId', 'DELETE'] as const
}

export function useDeleteSitesSiteIdLogsLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdLogsLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']> },
      ) => parseResponse(client.sites[':siteId'].logs[':logId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdVariablesKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
) {
  return ['sites', '/sites/:siteId/variables', args] as const
}

export function useGetSitesSiteIdVariables<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
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
        ? getGetSitesSiteIdVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdVariables<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
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
        ? getGetSitesSiteIdVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':siteId'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdVariablesKey() {
  return ['sites', '/sites/:siteId/variables', 'POST'] as const
}

export function usePostSitesSiteIdVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']> },
      ) => parseResponse(client.sites[':siteId'].variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdVariablesVariableIdKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
) {
  return ['sites', '/sites/:siteId/variables/:variableId', args] as const
}

export function useGetSitesSiteIdVariablesVariableId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
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
        ? getGetSitesSiteIdVariablesVariableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteId'].variables[':variableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdVariablesVariableId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
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
        ? getGetSitesSiteIdVariablesVariableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':siteId'].variables[':variableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdVariablesVariableIdKey() {
  return ['sites', '/sites/:siteId/variables/:variableId', 'PUT'] as const
}

export function usePutSitesSiteIdVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdVariablesVariableIdKey()
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
            (typeof client.sites)[':siteId']['variables'][':variableId']['$put']
          >
        },
      ) => parseResponse(client.sites[':siteId'].variables[':variableId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdVariablesVariableIdKey() {
  return ['sites', '/sites/:siteId/variables/:variableId', 'DELETE'] as const
}

export function useDeleteSitesSiteIdVariablesVariableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdVariablesVariableIdKey()
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
            (typeof client.sites)[':siteId']['variables'][':variableId']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':siteId'].variables[':variableId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStorageBucketsKey(
  args: InferRequestType<typeof client.storage.buckets.$get>,
) {
  return ['storage', '/storage/buckets', args] as const
}

export function useGetStorageBuckets<TError = unknown>(
  args: InferRequestType<typeof client.storage.buckets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStorageBucketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBuckets<TError = unknown>(
  args: InferRequestType<typeof client.storage.buckets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStorageBucketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStorageBucketsKey() {
  return ['storage', '/storage/buckets', 'POST'] as const
}

export function usePostStorageBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.storage.buckets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorageBucketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.storage.buckets.$post> }) =>
        parseResponse(client.storage.buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdKey(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId', args] as const
}

export function useGetStorageBucketsBucketId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
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
        ? getGetStorageBucketsBucketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.buckets[':bucketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
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
        ? getGetStorageBucketsBucketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.buckets[':bucketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStorageBucketsBucketIdKey() {
  return ['storage', '/storage/buckets/:bucketId', 'PUT'] as const
}

export function usePutStorageBucketsBucketId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStorageBucketsBucketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']> },
      ) => parseResponse(client.storage.buckets[':bucketId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStorageBucketsBucketIdKey() {
  return ['storage', '/storage/buckets/:bucketId', 'DELETE'] as const
}

export function useDeleteStorageBucketsBucketId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStorageBucketsBucketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']> },
      ) => parseResponse(client.storage.buckets[':bucketId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdFilesKey(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId/files', args] as const
}

export function useGetStorageBucketsBucketIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
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
        ? getGetStorageBucketsBucketIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.storage.buckets[':bucketId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
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
        ? getGetStorageBucketsBucketIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.storage.buckets[':bucketId'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStorageBucketsBucketIdFilesKey() {
  return ['storage', '/storage/buckets/:bucketId/files', 'POST'] as const
}

export function usePostStorageBucketsBucketIdFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorageBucketsBucketIdFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>
        },
      ) => parseResponse(client.storage.buckets[':bucketId'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdFilesFileIdKey(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', args] as const
}

export function useGetStorageBucketsBucketIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
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
        ? getGetStorageBucketsBucketIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
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
        ? getGetStorageBucketsBucketIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutStorageBucketsBucketIdFilesFileIdKey() {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', 'PUT'] as const
}

export function usePutStorageBucketsBucketIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStorageBucketsBucketIdFilesFileIdKey()
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
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStorageBucketsBucketIdFilesFileIdKey() {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', 'DELETE'] as const
}

export function useDeleteStorageBucketsBucketIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStorageBucketsBucketIdFilesFileIdKey()
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
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdFilesFileIdDownloadKey(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/download', args] as const
}

export function useGetStorageBucketsBucketIdFilesFileIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdDownloadKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketIdFilesFileIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdDownloadKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdFilesFileIdPreviewKey(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/preview', args] as const
}

export function useGetStorageBucketsBucketIdFilesFileIdPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdPreviewKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketIdFilesFileIdPreview<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdPreviewKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStorageBucketsBucketIdFilesFileIdViewKey(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/view', args] as const
}

export function useGetStorageBucketsBucketIdFilesFileIdView<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdViewKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].view.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageBucketsBucketIdFilesFileIdView<TError = unknown>(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
        ? getGetStorageBucketsBucketIdFilesFileIdViewKey(args)
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
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
          client.storage.buckets[':bucketId'].files[':fileId'].view.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function useGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTeamsKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function usePostTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$post> }) =>
        parseResponse(client.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
) {
  return ['teams', '/teams/:teamId', args] as const
}

export function useGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsTeamIdKey() {
  return ['teams', '/teams/:teamId', 'PUT'] as const
}

export function usePutTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':teamId']['$put']> },
      ) => parseResponse(client.teams[':teamId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsTeamIdKey() {
  return ['teams', '/teams/:teamId', 'DELETE'] as const
}

export function useDeleteTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':teamId']['$delete']> },
      ) => parseResponse(client.teams[':teamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdMembershipsKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
) {
  return ['teams', '/teams/:teamId/memberships', args] as const
}

export function useGetTeamsTeamIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
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
        ? getGetTeamsTeamIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
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
        ? getGetTeamsTeamIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsTeamIdMembershipsKey() {
  return ['teams', '/teams/:teamId/memberships', 'POST'] as const
}

export function usePostTeamsTeamIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamIdMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']> },
      ) => parseResponse(client.teams[':teamId'].memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdMembershipsMembershipIdKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
) {
  return ['teams', '/teams/:teamId/memberships/:membershipId', args] as const
}

export function useGetTeamsTeamIdMembershipsMembershipId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
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
        ? getGetTeamsTeamIdMembershipsMembershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdMembershipsMembershipId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
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
        ? getGetTeamsTeamIdMembershipsMembershipIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteTeamsTeamIdMembershipsMembershipIdKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId', 'DELETE'] as const
}

export function useDeleteTeamsTeamIdMembershipsMembershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsTeamIdMembershipsMembershipIdKey()
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
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTeamsTeamIdMembershipsMembershipIdKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId', 'PATCH'] as const
}

export function usePatchTeamsTeamIdMembershipsMembershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTeamsTeamIdMembershipsMembershipIdKey()
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
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTeamsTeamIdMembershipsMembershipIdStatusKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId/status', 'PATCH'] as const
}

export function usePatchTeamsTeamIdMembershipsMembershipIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTeamsTeamIdMembershipsMembershipIdStatusKey()
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
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdPrefsKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
) {
  return ['teams', '/teams/:teamId/prefs', args] as const
}

export function useGetTeamsTeamIdPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
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
        ? getGetTeamsTeamIdPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].prefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
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
        ? getGetTeamsTeamIdPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].prefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsTeamIdPrefsKey() {
  return ['teams', '/teams/:teamId/prefs', 'PUT'] as const
}

export function usePutTeamsTeamIdPrefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdPrefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']> },
      ) => parseResponse(client.teams[':teamId'].prefs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensBucketsBucketIdFilesFileIdKey(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
) {
  return ['tokens', '/tokens/buckets/:bucketId/files/:fileId', args] as const
}

export function useGetTokensBucketsBucketIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
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
        ? getGetTokensBucketsBucketIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tokens.buckets[':bucketId'].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensBucketsBucketIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
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
        ? getGetTokensBucketsBucketIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tokens.buckets[':bucketId'].files[':fileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTokensBucketsBucketIdFilesFileIdKey() {
  return ['tokens', '/tokens/buckets/:bucketId/files/:fileId', 'POST'] as const
}

export function usePostTokensBucketsBucketIdFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensBucketsBucketIdFilesFileIdKey()
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
            (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tokens.buckets[':bucketId'].files[':fileId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTokensTokenIdKey(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
) {
  return ['tokens', '/tokens/:tokenId', args] as const
}

export function useGetTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTokensTokenIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTokensTokenIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTokensTokenIdKey() {
  return ['tokens', '/tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':tokenId']['$delete']> },
      ) => parseResponse(client.tokens[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTokensTokenIdKey() {
  return ['tokens', '/tokens/:tokenId', 'PATCH'] as const
}

export function usePatchTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':tokenId']['$patch']> },
      ) => parseResponse(client.tokens[':tokenId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersArgon2Key() {
  return ['users', '/users/argon2', 'POST'] as const
}

export function usePostUsersArgon2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.argon2.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.argon2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersArgon2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.argon2.$post> }) =>
        parseResponse(client.users.argon2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersBcryptKey() {
  return ['users', '/users/bcrypt', 'POST'] as const
}

export function usePostUsersBcrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.bcrypt.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.bcrypt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersBcryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.bcrypt.$post> }) =>
        parseResponse(client.users.bcrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdentitiesKey(
  args: InferRequestType<typeof client.users.identities.$get>,
) {
  return ['users', '/users/identities', args] as const
}

export function useGetUsersIdentities<TError = unknown>(
  args: InferRequestType<typeof client.users.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
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
        ? getGetUsersIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdentities<TError = unknown>(
  args: InferRequestType<typeof client.users.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
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
        ? getGetUsersIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersIdentitiesIdentityIdKey() {
  return ['users', '/users/identities/:identityId', 'DELETE'] as const
}

export function useDeleteUsersIdentitiesIdentityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.identities)[':identityId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users.identities)[':identityId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdentitiesIdentityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users.identities)[':identityId']['$delete']> },
      ) => parseResponse(client.users.identities[':identityId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMd5Key() {
  return ['users', '/users/md5', 'POST'] as const
}

export function usePostUsersMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.md5.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.md5.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMd5Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.md5.$post> }) =>
        parseResponse(client.users.md5.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersPhpassKey() {
  return ['users', '/users/phpass', 'POST'] as const
}

export function usePostUsersPhpass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.phpass.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.phpass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersPhpassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.phpass.$post> }) =>
        parseResponse(client.users.phpass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersScryptKey() {
  return ['users', '/users/scrypt', 'POST'] as const
}

export function usePostUsersScrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.scrypt.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.scrypt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersScryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.scrypt.$post> }) =>
        parseResponse(client.users.scrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersScryptModifiedKey() {
  return ['users', '/users/scrypt-modified', 'POST'] as const
}

export function usePostUsersScryptModified<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['scrypt-modified']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['scrypt-modified']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersScryptModifiedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)['scrypt-modified']['$post']> },
      ) => parseResponse(client.users['scrypt-modified'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersShaKey() {
  return ['users', '/users/sha', 'POST'] as const
}

export function usePostUsersSha<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.sha.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.sha.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersShaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.sha.$post> }) =>
        parseResponse(client.users.sha.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$delete']> },
      ) => parseResponse(client.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdEmailKey() {
  return ['users', '/users/:userId/email', 'PATCH'] as const
}

export function usePatchUsersUserIdEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['email']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['email']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['email']['$patch']> },
      ) => parseResponse(client.users[':userId'].email.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdJwtsKey() {
  return ['users', '/users/:userId/jwts', 'POST'] as const
}

export function usePostUsersUserIdJwts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['jwts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['jwts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdJwtsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['jwts']['$post']> },
      ) => parseResponse(client.users[':userId'].jwts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIdLabelsKey() {
  return ['users', '/users/:userId/labels', 'PUT'] as const
}

export function usePutUsersUserIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['labels']['$put']> },
      ) => parseResponse(client.users[':userId'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdLogsKey(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
) {
  return ['users', '/users/:userId/logs', args] as const
}

export function useGetUsersUserIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
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
        ? getGetUsersUserIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
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
        ? getGetUsersUserIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdMembershipsKey(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
) {
  return ['users', '/users/:userId/memberships', args] as const
}

export function useGetUsersUserIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
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
        ? getGetUsersUserIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
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
        ? getGetUsersUserIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdMfaKey() {
  return ['users', '/users/:userId/mfa', 'PATCH'] as const
}

export function usePatchUsersUserIdMfa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdMfaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']> },
      ) => parseResponse(client.users[':userId'].mfa.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdMfaAuthenticatorsTypeKey() {
  return ['users', '/users/:userId/mfa/authenticators/:type', 'DELETE'] as const
}

export function useDeleteUsersUserIdMfaAuthenticatorsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdMfaAuthenticatorsTypeKey()
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
            (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':userId'].mfa.authenticators[':type'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdMfaFactorsKey(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
) {
  return ['users', '/users/:userId/mfa/factors', args] as const
}

export function useGetUsersUserIdMfaFactors<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
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
        ? getGetUsersUserIdMfaFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].mfa.factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMfaFactors<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
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
        ? getGetUsersUserIdMfaFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].mfa.factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdMfaRecoveryCodesKey(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
) {
  return ['users', '/users/:userId/mfa/recovery-codes', args] as const
}

export function useGetUsersUserIdMfaRecoveryCodes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
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
        ? getGetUsersUserIdMfaRecoveryCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].mfa['recovery-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdMfaRecoveryCodes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
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
        ? getGetUsersUserIdMfaRecoveryCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].mfa['recovery-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdMfaRecoveryCodesKey() {
  return ['users', '/users/:userId/mfa/recovery-codes', 'PUT'] as const
}

export function usePutUsersUserIdMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>
        },
      ) => parseResponse(client.users[':userId'].mfa['recovery-codes'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdMfaRecoveryCodesKey() {
  return ['users', '/users/:userId/mfa/recovery-codes', 'PATCH'] as const
}

export function usePatchUsersUserIdMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>
        },
      ) => parseResponse(client.users[':userId'].mfa['recovery-codes'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdNameKey() {
  return ['users', '/users/:userId/name', 'PATCH'] as const
}

export function usePatchUsersUserIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['name']['$patch']> },
      ) => parseResponse(client.users[':userId'].name.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdPasswordKey() {
  return ['users', '/users/:userId/password', 'PATCH'] as const
}

export function usePatchUsersUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['password']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['password']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['password']['$patch']> },
      ) => parseResponse(client.users[':userId'].password.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdPhoneKey() {
  return ['users', '/users/:userId/phone', 'PATCH'] as const
}

export function usePatchUsersUserIdPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['phone']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['phone']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['phone']['$patch']> },
      ) => parseResponse(client.users[':userId'].phone.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdPrefsKey(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
) {
  return ['users', '/users/:userId/prefs', args] as const
}

export function useGetUsersUserIdPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
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
        ? getGetUsersUserIdPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].prefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
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
        ? getGetUsersUserIdPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].prefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserIdPrefsKey() {
  return ['users', '/users/:userId/prefs', 'PATCH'] as const
}

export function usePatchUsersUserIdPrefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdPrefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']> },
      ) => parseResponse(client.users[':userId'].prefs.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdSessionsKey(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
) {
  return ['users', '/users/:userId/sessions', args] as const
}

export function useGetUsersUserIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
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
        ? getGetUsersUserIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
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
        ? getGetUsersUserIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdSessionsKey() {
  return ['users', '/users/:userId/sessions', 'POST'] as const
}

export function usePostUsersUserIdSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['sessions']['$post']> },
      ) => parseResponse(client.users[':userId'].sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdSessionsKey() {
  return ['users', '/users/:userId/sessions', 'DELETE'] as const
}

export function useDeleteUsersUserIdSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']> },
      ) => parseResponse(client.users[':userId'].sessions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdSessionsSessionIdKey() {
  return ['users', '/users/:userId/sessions/:sessionId', 'DELETE'] as const
}

export function useDeleteUsersUserIdSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdSessionsSessionIdKey()
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
            (typeof client.users)[':userId']['sessions'][':sessionId']['$delete']
          >
        },
      ) =>
        parseResponse(client.users[':userId'].sessions[':sessionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdStatusKey() {
  return ['users', '/users/:userId/status', 'PATCH'] as const
}

export function usePatchUsersUserIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['status']['$patch']> },
      ) => parseResponse(client.users[':userId'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTargetsKey(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
) {
  return ['users', '/users/:userId/targets', args] as const
}

export function useGetUsersUserIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
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
        ? getGetUsersUserIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTargets<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
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
        ? getGetUsersUserIdTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].targets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserIdTargetsKey() {
  return ['users', '/users/:userId/targets', 'POST'] as const
}

export function usePostUsersUserIdTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['targets']['$post']> },
      ) => parseResponse(client.users[':userId'].targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdTargetsTargetIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
) {
  return ['users', '/users/:userId/targets/:targetId', args] as const
}

export function useGetUsersUserIdTargetsTargetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
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
        ? getGetUsersUserIdTargetsTargetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].targets[':targetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTargetsTargetId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
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
        ? getGetUsersUserIdTargetsTargetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':userId'].targets[':targetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdTargetsTargetIdKey() {
  return ['users', '/users/:userId/targets/:targetId', 'DELETE'] as const
}

export function useDeleteUsersUserIdTargetsTargetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdTargetsTargetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>
        },
      ) => parseResponse(client.users[':userId'].targets[':targetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdTargetsTargetIdKey() {
  return ['users', '/users/:userId/targets/:targetId', 'PATCH'] as const
}

export function usePatchUsersUserIdTargetsTargetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdTargetsTargetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>
        },
      ) => parseResponse(client.users[':userId'].targets[':targetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdTokensKey() {
  return ['users', '/users/:userId/tokens', 'POST'] as const
}

export function usePostUsersUserIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['tokens']['$post']> },
      ) => parseResponse(client.users[':userId'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdVerificationKey() {
  return ['users', '/users/:userId/verification', 'PATCH'] as const
}

export function usePatchUsersUserIdVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['verification']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['verification']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['verification']['$patch']> },
      ) => parseResponse(client.users[':userId'].verification.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdVerificationPhoneKey() {
  return ['users', '/users/:userId/verification/phone', 'PATCH'] as const
}

export function usePatchUsersUserIdVerificationPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['verification']['phone']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdVerificationPhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>
        },
      ) => parseResponse(client.users[':userId'].verification.phone.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
