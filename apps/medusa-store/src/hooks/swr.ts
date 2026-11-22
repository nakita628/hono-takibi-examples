import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthKey() {
  return ['auth'] as const
}

export function getStoreKey() {
  return ['store'] as const
}

export function getPostAuthCustomerEmailpassVerificationConfirmKey() {
  return ['auth', '/auth/customer/emailpass/verification/confirm', 'POST'] as const
}

export function usePostAuthCustomerEmailpassVerificationConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.auth.customer.emailpass.verification.confirm.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerEmailpassVerificationConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>
        },
      ) =>
        parseResponse(
          client.auth.customer.emailpass.verification.confirm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthCustomerProvidersKey() {
  return ['auth', '/auth/customer/providers'] as const
}

export function useGetAuthCustomerProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
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
        ? getGetAuthCustomerProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.customer.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthCustomerProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
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
        ? getGetAuthCustomerProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.customer.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthCustomerAuthProviderKey() {
  return ['auth', '/auth/customer/:auth_provider', 'POST'] as const
}

export function usePostAuthCustomerAuthProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerAuthProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']> },
      ) => parseResponse(client.auth.customer[':auth_provider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthCustomerAuthProviderCallbackKey() {
  return ['auth', '/auth/customer/:auth_provider/callback', 'POST'] as const
}

export function usePostAuthCustomerAuthProviderCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerAuthProviderCallbackKey()
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
            (typeof client.auth.customer)[':auth_provider']['callback']['$post']
          >
        },
      ) => parseResponse(client.auth.customer[':auth_provider'].callback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthCustomerAuthProviderRegisterKey() {
  return ['auth', '/auth/customer/:auth_provider/register', 'POST'] as const
}

export function usePostAuthCustomerAuthProviderRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerAuthProviderRegisterKey()
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
            (typeof client.auth.customer)[':auth_provider']['register']['$post']
          >
        },
      ) => parseResponse(client.auth.customer[':auth_provider'].register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthCustomerAuthProviderResetPasswordKey() {
  return ['auth', '/auth/customer/:auth_provider/reset-password', 'POST'] as const
}

export function usePostAuthCustomerAuthProviderResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.auth.customer)[':auth_provider']['reset-password']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerAuthProviderResetPasswordKey()
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
            (typeof client.auth.customer)[':auth_provider']['reset-password']['$post']
          >
        },
      ) =>
        parseResponse(
          client.auth.customer[':auth_provider']['reset-password'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthCustomerAuthProviderUpdateKey() {
  return ['auth', '/auth/customer/:auth_provider/update', 'POST'] as const
}

export function usePostAuthCustomerAuthProviderUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthCustomerAuthProviderUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>
        },
      ) => parseResponse(client.auth.customer[':auth_provider'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthMfaChallengesIdVerifyKey() {
  return ['auth', '/auth/mfa/challenges/:id/verify', 'POST'] as const
}

export function usePostAuthMfaChallengesIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaChallengesIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']> },
      ) => parseResponse(client.auth.mfa.challenges[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthMfaFactorsKey() {
  return ['auth', '/auth/mfa/factors'] as const
}

export function useGetAuthMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthMfaFactorsKey() {
  return ['auth', '/auth/mfa/factors', 'POST'] as const
}

export function usePostAuthMfaFactors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.mfa.factors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaFactorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.mfa.factors.$post> }) =>
        parseResponse(client.auth.mfa.factors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthMfaFactorsIdKey() {
  return ['auth', '/auth/mfa/factors/:id', 'DELETE'] as const
}

export function useDeleteAuthMfaFactorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthMfaFactorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']> },
      ) => parseResponse(client.auth.mfa.factors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthMfaFactorsIdVerifyKey() {
  return ['auth', '/auth/mfa/factors/:id/verify', 'POST'] as const
}

export function usePostAuthMfaFactorsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaFactorsIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']> },
      ) => parseResponse(client.auth.mfa.factors[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthMfaRecoveryCodesKey() {
  return ['auth', '/auth/mfa/recovery-codes', 'POST'] as const
}

export function usePostAuthMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']> },
      ) => parseResponse(client.auth.mfa['recovery-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthSessionKey() {
  return ['auth', '/auth/session', 'POST'] as const
}

export function usePostAuthSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.session.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthSessionKey() {
  return ['auth', '/auth/session', 'DELETE'] as const
}

export function useDeleteAuthSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.session.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthTokenRefreshKey() {
  return ['auth', '/auth/token/refresh', 'POST'] as const
}

export function usePostAuthTokenRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthTokenRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.token.refresh.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthVerificationConfirmKey() {
  return ['auth', '/auth/verification/confirm', 'POST'] as const
}

export function usePostAuthVerificationConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.confirm.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.verification.confirm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthVerificationConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.auth.verification.confirm.$post> },
      ) => parseResponse(client.auth.verification.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthVerificationRequestKey() {
  return ['auth', '/auth/verification/request', 'POST'] as const
}

export function usePostAuthVerificationRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.request.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.verification.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthVerificationRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.auth.verification.request.$post> },
      ) => parseResponse(client.auth.verification.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsKey() {
  return ['store', '/store/carts', 'POST'] as const
}

export function usePostStoreCarts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.carts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.store.carts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.store.carts.$post> }) =>
        parseResponse(client.store.carts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreCartsIdKey(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/carts/:id', keyArgs] as const
}

export function useGetStoreCartsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreCartsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.carts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCartsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreCartsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.carts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreCartsIdKey() {
  return ['store', '/store/carts/:id', 'POST'] as const
}

export function usePostStoreCartsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.store.carts)[':id']['$post']> },
      ) => parseResponse(client.store.carts[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdCompleteKey() {
  return ['store', '/store/carts/:id/complete', 'POST'] as const
}

export function usePostStoreCartsIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']> },
      ) => parseResponse(client.store.carts[':id'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdCustomerKey() {
  return ['store', '/store/carts/:id/customer', 'POST'] as const
}

export function usePostStoreCartsIdCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['customer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']> },
      ) => parseResponse(client.store.carts[':id'].customer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdGiftCardsKey() {
  return ['store', '/store/carts/:id/gift-cards', 'POST'] as const
}

export function usePostStoreCartsIdGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']> },
      ) => parseResponse(client.store.carts[':id']['gift-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoreCartsIdGiftCardsKey() {
  return ['store', '/store/carts/:id/gift-cards', 'DELETE'] as const
}

export function useDeleteStoreCartsIdGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoreCartsIdGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']> },
      ) => parseResponse(client.store.carts[':id']['gift-cards'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdLineItemsKey() {
  return ['store', '/store/carts/:id/line-items', 'POST'] as const
}

export function usePostStoreCartsIdLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['line-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdLineItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']> },
      ) => parseResponse(client.store.carts[':id']['line-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdLineItemsLineIdKey() {
  return ['store', '/store/carts/:id/line-items/:line_id', 'POST'] as const
}

export function usePostStoreCartsIdLineItemsLineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdLineItemsLineIdKey()
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
            (typeof client.store.carts)[':id']['line-items'][':line_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.store.carts[':id']['line-items'][':line_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoreCartsIdLineItemsLineIdKey() {
  return ['store', '/store/carts/:id/line-items/:line_id', 'DELETE'] as const
}

export function useDeleteStoreCartsIdLineItemsLineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoreCartsIdLineItemsLineIdKey()
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
            (typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.store.carts[':id']['line-items'][':line_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdPromotionsKey() {
  return ['store', '/store/carts/:id/promotions', 'POST'] as const
}

export function usePostStoreCartsIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']> },
      ) => parseResponse(client.store.carts[':id'].promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoreCartsIdPromotionsKey() {
  return ['store', '/store/carts/:id/promotions', 'DELETE'] as const
}

export function useDeleteStoreCartsIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoreCartsIdPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']> },
      ) => parseResponse(client.store.carts[':id'].promotions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdShippingMethodsKey() {
  return ['store', '/store/carts/:id/shipping-methods', 'POST'] as const
}

export function usePostStoreCartsIdShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdShippingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>
        },
      ) => parseResponse(client.store.carts[':id']['shipping-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdStoreCreditsKey() {
  return ['store', '/store/carts/:id/store-credits', 'POST'] as const
}

export function usePostStoreCartsIdStoreCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['store-credits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdStoreCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']> },
      ) => parseResponse(client.store.carts[':id']['store-credits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreCartsIdTaxesKey() {
  return ['store', '/store/carts/:id/taxes', 'POST'] as const
}

export function usePostStoreCartsIdTaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['taxes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCartsIdTaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']> },
      ) => parseResponse(client.store.carts[':id'].taxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreCollectionsKey(
  args: InferRequestType<typeof client.store.collections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/collections', keyArgs] as const
}

export function useGetStoreCollections<TError = unknown>(
  args: InferRequestType<typeof client.store.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCollections<TError = unknown>(
  args: InferRequestType<typeof client.store.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreCollectionsIdKey(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/collections/:id', keyArgs] as const
}

export function useGetStoreCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
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
        ? getGetStoreCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
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
        ? getGetStoreCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreCurrenciesKey(
  args: InferRequestType<typeof client.store.currencies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/currencies', keyArgs] as const
}

export function useGetStoreCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.store.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.store.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreCurrenciesCodeKey(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/currencies/:code', keyArgs] as const
}

export function useGetStoreCurrenciesCode<TError = unknown>(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
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
        ? getGetStoreCurrenciesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.currencies[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCurrenciesCode<TError = unknown>(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
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
        ? getGetStoreCurrenciesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.currencies[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreCustomersKey() {
  return ['store', '/store/customers', 'POST'] as const
}

export function usePostStoreCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.store.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.store.customers.$post> }) =>
        parseResponse(client.store.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreCustomersMeKey(
  args: InferRequestType<typeof client.store.customers.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me', keyArgs] as const
}

export function useGetStoreCustomersMe<TError = unknown>(
  args: InferRequestType<typeof client.store.customers.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCustomersMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.customers.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCustomersMe<TError = unknown>(
  args: InferRequestType<typeof client.store.customers.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCustomersMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.customers.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreCustomersMeKey() {
  return ['store', '/store/customers/me', 'POST'] as const
}

export function usePostStoreCustomersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.store.customers.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCustomersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.store.customers.me.$post> }) =>
        parseResponse(client.store.customers.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreCustomersMeAddressesKey(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me/addresses', keyArgs] as const
}

export function useGetStoreCustomersMeAddresses<TError = unknown>(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCustomersMeAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.customers.me.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCustomersMeAddresses<TError = unknown>(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreCustomersMeAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.customers.me.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreCustomersMeAddressesKey() {
  return ['store', '/store/customers/me/addresses', 'POST'] as const
}

export function usePostStoreCustomersMeAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.store.customers.me.addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCustomersMeAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.store.customers.me.addresses.$post> },
      ) => parseResponse(client.store.customers.me.addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreCustomersMeAddressesAddressIdKey(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me/addresses/:address_id', keyArgs] as const
}

export function useGetStoreCustomersMeAddressesAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
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
        ? getGetStoreCustomersMeAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store.customers.me.addresses[':address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreCustomersMeAddressesAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
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
        ? getGetStoreCustomersMeAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store.customers.me.addresses[':address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreCustomersMeAddressesAddressIdKey() {
  return ['store', '/store/customers/me/addresses/:address_id', 'POST'] as const
}

export function usePostStoreCustomersMeAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreCustomersMeAddressesAddressIdKey()
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
            (typeof client.store.customers.me.addresses)[':address_id']['$post']
          >
        },
      ) =>
        parseResponse(client.store.customers.me.addresses[':address_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoreCustomersMeAddressesAddressIdKey() {
  return ['store', '/store/customers/me/addresses/:address_id', 'DELETE'] as const
}

export function useDeleteStoreCustomersMeAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoreCustomersMeAddressesAddressIdKey()
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
            (typeof client.store.customers.me.addresses)[':address_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.store.customers.me.addresses[':address_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStoreGiftCardsIdOrCodeKey(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/gift-cards/:idOrCode', keyArgs] as const
}

export function useGetStoreGiftCardsIdOrCode<TError = unknown>(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
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
        ? getGetStoreGiftCardsIdOrCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['gift-cards'][':idOrCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreGiftCardsIdOrCode<TError = unknown>(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
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
        ? getGetStoreGiftCardsIdOrCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['gift-cards'][':idOrCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreLocalesKey(args: InferRequestType<typeof client.store.locales.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/locales', keyArgs] as const
}

export function useGetStoreLocales<TError = unknown>(
  args: InferRequestType<typeof client.store.locales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreLocalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreLocales<TError = unknown>(
  args: InferRequestType<typeof client.store.locales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreLocalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreOrdersKey(args: InferRequestType<typeof client.store.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/orders', keyArgs] as const
}

export function useGetStoreOrders<TError = unknown>(
  args: InferRequestType<typeof client.store.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreOrders<TError = unknown>(
  args: InferRequestType<typeof client.store.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreOrdersIdKey(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/orders/:id', keyArgs] as const
}

export function useGetStoreOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreOrdersIdTransferAcceptKey() {
  return ['store', '/store/orders/:id/transfer/accept', 'POST'] as const
}

export function usePostStoreOrdersIdTransferAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreOrdersIdTransferAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>
        },
      ) => parseResponse(client.store.orders[':id'].transfer.accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreOrdersIdTransferCancelKey() {
  return ['store', '/store/orders/:id/transfer/cancel', 'POST'] as const
}

export function usePostStoreOrdersIdTransferCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreOrdersIdTransferCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>
        },
      ) => parseResponse(client.store.orders[':id'].transfer.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreOrdersIdTransferDeclineKey() {
  return ['store', '/store/orders/:id/transfer/decline', 'POST'] as const
}

export function usePostStoreOrdersIdTransferDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreOrdersIdTransferDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>
        },
      ) => parseResponse(client.store.orders[':id'].transfer.decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreOrdersIdTransferRequestKey() {
  return ['store', '/store/orders/:id/transfer/request', 'POST'] as const
}

export function usePostStoreOrdersIdTransferRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreOrdersIdTransferRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>
        },
      ) => parseResponse(client.store.orders[':id'].transfer.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStorePaymentCollectionsKey() {
  return ['store', '/store/payment-collections', 'POST'] as const
}

export function usePostStorePaymentCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['payment-collections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store)['payment-collections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorePaymentCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.store)['payment-collections']['$post']> },
      ) => parseResponse(client.store['payment-collections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStorePaymentCollectionsIdPaymentSessionsKey() {
  return ['store', '/store/payment-collections/:id/payment-sessions', 'POST'] as const
}

export function usePostStorePaymentCollectionsIdPaymentSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorePaymentCollectionsIdPaymentSessionsKey()
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
            (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.store['payment-collections'][':id']['payment-sessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStorePaymentCollectionsIdPaymentSessionsSessionIdKey() {
  return ['store', '/store/payment-collections/:id/payment-sessions/:session_id', 'POST'] as const
}

export function usePostStorePaymentCollectionsIdPaymentSessionsSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorePaymentCollectionsIdPaymentSessionsSessionIdKey()
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
            (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.store['payment-collections'][':id']['payment-sessions'][':session_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStorePaymentProvidersKey(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/payment-providers', keyArgs] as const
}

export function useGetStorePaymentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
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
        ? getGetStorePaymentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['payment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorePaymentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
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
        ? getGetStorePaymentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['payment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductCategoriesKey(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-categories', keyArgs] as const
}

export function useGetStoreProductCategories<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
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
        ? getGetStoreProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductCategories<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
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
        ? getGetStoreProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductCategoriesIdKey(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-categories/:id', keyArgs] as const
}

export function useGetStoreProductCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
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
        ? getGetStoreProductCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store['product-categories'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
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
        ? getGetStoreProductCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store['product-categories'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductOptionsKey(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-options', keyArgs] as const
}

export function useGetStoreProductOptions<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
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
        ? getGetStoreProductOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductOptions<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
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
        ? getGetStoreProductOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductOptionsIdKey(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-options/:id', keyArgs] as const
}

export function useGetStoreProductOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
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
        ? getGetStoreProductOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
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
        ? getGetStoreProductOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductTagsKey(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-tags', keyArgs] as const
}

export function useGetStoreProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductTagsIdKey(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-tags/:id', keyArgs] as const
}

export function useGetStoreProductTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
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
        ? getGetStoreProductTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
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
        ? getGetStoreProductTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductTypesKey(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-types', keyArgs] as const
}

export function useGetStoreProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductTypesIdKey(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-types/:id', keyArgs] as const
}

export function useGetStoreProductTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
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
        ? getGetStoreProductTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
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
        ? getGetStoreProductTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductVariantsKey(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-variants', keyArgs] as const
}

export function useGetStoreProductVariants<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
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
        ? getGetStoreProductVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-variants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductVariants<TError = unknown>(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
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
        ? getGetStoreProductVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['product-variants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductsKey(args: InferRequestType<typeof client.store.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/products', keyArgs] as const
}

export function useGetStoreProducts<TError = unknown>(
  args: InferRequestType<typeof client.store.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProducts<TError = unknown>(
  args: InferRequestType<typeof client.store.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreProductsIdKey(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/products/:id', keyArgs] as const
}

export function useGetStoreProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreRegionsKey(args: InferRequestType<typeof client.store.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/regions', keyArgs] as const
}

export function useGetStoreRegions<TError = unknown>(
  args: InferRequestType<typeof client.store.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreRegions<TError = unknown>(
  args: InferRequestType<typeof client.store.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreRegionsIdKey(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/regions/:id', keyArgs] as const
}

export function useGetStoreRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStoreRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreReturnReasonsKey(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/return-reasons', keyArgs] as const
}

export function useGetStoreReturnReasons<TError = unknown>(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreReturnReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['return-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreReturnReasons<TError = unknown>(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStoreReturnReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['return-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoreReturnReasonsIdKey(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/return-reasons/:id', keyArgs] as const
}

export function useGetStoreReturnReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
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
        ? getGetStoreReturnReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['return-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreReturnReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
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
        ? getGetStoreReturnReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['return-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreReturnsKey() {
  return ['store', '/store/returns', 'POST'] as const
}

export function usePostStoreReturns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.returns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.store.returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.store.returns.$post> }) =>
        parseResponse(client.store.returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreSearchKey() {
  return ['store', '/store/search', 'POST'] as const
}

export function usePostStoreSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.store.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.store.search.$post> }) =>
        parseResponse(client.store.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreShippingOptionsKey(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/shipping-options', keyArgs] as const
}

export function useGetStoreShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
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
        ? getGetStoreShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
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
        ? getGetStoreShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreShippingOptionsIdCalculateKey() {
  return ['store', '/store/shipping-options/:id/calculate', 'POST'] as const
}

export function usePostStoreShippingOptionsIdCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreShippingOptionsIdCalculateKey()
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
            (typeof client.store)['shipping-options'][':id']['calculate']['$post']
          >
        },
      ) =>
        parseResponse(client.store['shipping-options'][':id'].calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreStoreCreditAccountsKey(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/store-credit-accounts', keyArgs] as const
}

export function useGetStoreStoreCreditAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
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
        ? getGetStoreStoreCreditAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['store-credit-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreStoreCreditAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
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
        ? getGetStoreStoreCreditAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.store['store-credit-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoreStoreCreditAccountsClaimKey() {
  return ['store', '/store/store-credit-accounts/claim', 'POST'] as const
}

export function usePostStoreStoreCreditAccountsClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreStoreCreditAccountsClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>
        },
      ) => parseResponse(client.store['store-credit-accounts'].claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStoreStoreCreditAccountsIdKey(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/store-credit-accounts/:id', keyArgs] as const
}

export function useGetStoreStoreCreditAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
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
        ? getGetStoreStoreCreditAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store['store-credit-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoreStoreCreditAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
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
        ? getGetStoreStoreCreditAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.store['store-credit-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
