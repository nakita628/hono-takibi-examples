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

export function getAuthKey() {
  return ['auth'] as const
}

export function getStoreKey() {
  return ['store'] as const
}

export function getPostAuthCustomerEmailpassVerificationConfirmMutationKey() {
  return ['auth', '/auth/customer/emailpass/verification/confirm', 'POST'] as const
}

export function getPostAuthCustomerEmailpassVerificationConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.auth.customer.emailpass.verification.confirm.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerEmailpassVerificationConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>,
    ) {
      return parseResponse(client.auth.customer.emailpass.verification.confirm.$post(args, options))
    },
  })
}

export function usePostAuthCustomerEmailpassVerificationConfirm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.auth.customer.emailpass.verification.confirm.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthCustomerEmailpassVerificationConfirmMutationOptions<
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

export function getAuthCustomerProvidersQueryKey() {
  return ['auth', '/auth/customer/providers'] as const
}

export function getAuthCustomerProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthCustomerProvidersQueryKey>
  >({
    queryKey: getAuthCustomerProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.customer.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthCustomerProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthCustomerProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthCustomerProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthCustomerProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthCustomerProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthCustomerProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthCustomerAuthProviderMutationKey() {
  return ['auth', '/auth/customer/:auth_provider', 'POST'] as const
}

export function getPostAuthCustomerAuthProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerAuthProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']>,
    ) {
      return parseResponse(client.auth.customer[':auth_provider'].$post(args, options))
    },
  })
}

export function usePostAuthCustomerAuthProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.customer)[':auth_provider']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthCustomerAuthProviderMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthCustomerAuthProviderCallbackMutationKey() {
  return ['auth', '/auth/customer/:auth_provider/callback', 'POST'] as const
}

export function getPostAuthCustomerAuthProviderCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerAuthProviderCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>,
    ) {
      return parseResponse(client.auth.customer[':auth_provider'].callback.$post(args, options))
    },
  })
}

export function usePostAuthCustomerAuthProviderCallback<
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
                ReturnType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.customer)[':auth_provider']['callback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthCustomerAuthProviderCallbackMutationOptions<
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

export function getPostAuthCustomerAuthProviderRegisterMutationKey() {
  return ['auth', '/auth/customer/:auth_provider/register', 'POST'] as const
}

export function getPostAuthCustomerAuthProviderRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerAuthProviderRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>,
    ) {
      return parseResponse(client.auth.customer[':auth_provider'].register.$post(args, options))
    },
  })
}

export function usePostAuthCustomerAuthProviderRegister<
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
                ReturnType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.customer)[':auth_provider']['register']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthCustomerAuthProviderRegisterMutationOptions<
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

export function getPostAuthCustomerAuthProviderResetPasswordMutationKey() {
  return ['auth', '/auth/customer/:auth_provider/reset-password', 'POST'] as const
}

export function getPostAuthCustomerAuthProviderResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerAuthProviderResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.auth.customer)[':auth_provider']['reset-password']['$post']
      >,
    ) {
      return parseResponse(
        client.auth.customer[':auth_provider']['reset-password'].$post(args, options),
      )
    },
  })
}

export function usePostAuthCustomerAuthProviderResetPassword<
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
                  (typeof client.auth.customer)[':auth_provider']['reset-password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.auth.customer)[':auth_provider']['reset-password']['$post']
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
  const mutationDefaults = getPostAuthCustomerAuthProviderResetPasswordMutationOptions<
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

export function getPostAuthCustomerAuthProviderUpdateMutationKey() {
  return ['auth', '/auth/customer/:auth_provider/update', 'POST'] as const
}

export function getPostAuthCustomerAuthProviderUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthCustomerAuthProviderUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>,
    ) {
      return parseResponse(client.auth.customer[':auth_provider'].update.$post(args, options))
    },
  })
}

export function usePostAuthCustomerAuthProviderUpdate<
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
                ReturnType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.customer)[':auth_provider']['update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthCustomerAuthProviderUpdateMutationOptions<
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

export function getPostAuthMfaChallengesIdVerifyMutationKey() {
  return ['auth', '/auth/mfa/challenges/:id/verify', 'POST'] as const
}

export function getPostAuthMfaChallengesIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaChallengesIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.auth.mfa.challenges[':id'].verify.$post(args, options))
    },
  })
}

export function usePostAuthMfaChallengesIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthMfaChallengesIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthMfaFactorsQueryKey() {
  return ['auth', '/auth/mfa/factors'] as const
}

export function getAuthMfaFactorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaFactorsQueryKey>
  >({
    queryKey: getAuthMfaFactorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.mfa.factors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthMfaFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthMfaFactorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthMfaFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthMfaFactorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthMfaFactorsMutationKey() {
  return ['auth', '/auth/mfa/factors', 'POST'] as const
}

export function getPostAuthMfaFactorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.mfa.factors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaFactorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.mfa.factors.$post>) {
      return parseResponse(client.auth.mfa.factors.$post(args, options))
    },
  })
}

export function usePostAuthMfaFactors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.mfa.factors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthMfaFactorsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthMfaFactorsIdMutationKey() {
  return ['auth', '/auth/mfa/factors/:id', 'DELETE'] as const
}

export function getDeleteAuthMfaFactorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthMfaFactorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>) {
      return parseResponse(client.auth.mfa.factors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthMfaFactorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthMfaFactorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthMfaFactorsIdVerifyMutationKey() {
  return ['auth', '/auth/mfa/factors/:id/verify', 'POST'] as const
}

export function getPostAuthMfaFactorsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaFactorsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.auth.mfa.factors[':id'].verify.$post(args, options))
    },
  })
}

export function usePostAuthMfaFactorsIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthMfaFactorsIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthMfaRecoveryCodesMutationKey() {
  return ['auth', '/auth/mfa/recovery-codes', 'POST'] as const
}

export function getPostAuthMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaRecoveryCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>) {
      return parseResponse(client.auth.mfa['recovery-codes'].$post(args, options))
    },
  })
}

export function usePostAuthMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthMfaRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionMutationKey() {
  return ['auth', '/auth/session', 'POST'] as const
}

export function getPostAuthSessionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.$post(undefined, options))
    },
  })
}

export function usePostAuthSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthSessionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthSessionMutationKey() {
  return ['auth', '/auth/session', 'DELETE'] as const
}

export function getDeleteAuthSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthSessionMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthTokenRefreshMutationKey() {
  return ['auth', '/auth/token/refresh', 'POST'] as const
}

export function getPostAuthTokenRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.refresh.$post(undefined, options))
    },
  })
}

export function usePostAuthTokenRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthTokenRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthVerificationConfirmMutationKey() {
  return ['auth', '/auth/verification/confirm', 'POST'] as const
}

export function getPostAuthVerificationConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.confirm.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.auth.verification.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthVerificationConfirmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.verification.confirm.$post>) {
      return parseResponse(client.auth.verification.confirm.$post(args, options))
    },
  })
}

export function usePostAuthVerificationConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.confirm.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.verification.confirm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthVerificationConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthVerificationRequestMutationKey() {
  return ['auth', '/auth/verification/request', 'POST'] as const
}

export function getPostAuthVerificationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.auth.verification.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthVerificationRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.verification.request.$post>) {
      return parseResponse(client.auth.verification.request.$post(args, options))
    },
  })
}

export function usePostAuthVerificationRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.verification.request.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.verification.request.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthVerificationRequestMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsMutationKey() {
  return ['store', '/store/carts', 'POST'] as const
}

export function getPostStoreCartsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.carts.$post>>>>>,
    TError,
    InferRequestType<typeof client.store.carts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.carts.$post>) {
      return parseResponse(client.store.carts.$post(args, options))
    },
  })
}

export function usePostStoreCarts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.carts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.store.carts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoreCartsIdQueryKey(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/carts/:id', keyArgs] as const
}

export function getStoreCartsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCartsIdQueryKey>
  >({
    queryKey: getStoreCartsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.carts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreCartsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCartsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCartsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCartsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.carts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCartsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCartsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreCartsIdMutationKey() {
  return ['store', '/store/carts/:id', 'POST'] as const
}

export function getPostStoreCartsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.store.carts)[':id']['$post']>) {
      return parseResponse(client.store.carts[':id'].$post(args, options))
    },
  })
}

export function usePostStoreCartsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdCompleteMutationKey() {
  return ['store', '/store/carts/:id/complete', 'POST'] as const
}

export function getPostStoreCartsIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id'].complete.$post(args, options))
    },
  })
}

export function usePostStoreCartsIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['complete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['complete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdCustomerMutationKey() {
  return ['store', '/store/carts/:id/customer', 'POST'] as const
}

export function getPostStoreCartsIdCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['customer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id'].customer.$post(args, options))
    },
  })
}

export function usePostStoreCartsIdCustomer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['customer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['customer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdCustomerMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdGiftCardsMutationKey() {
  return ['store', '/store/carts/:id/gift-cards', 'POST'] as const
}

export function getPostStoreCartsIdGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdGiftCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id']['gift-cards'].$post(args, options))
    },
  })
}

export function usePostStoreCartsIdGiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdGiftCardsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStoreCartsIdGiftCardsMutationKey() {
  return ['store', '/store/carts/:id/gift-cards', 'DELETE'] as const
}

export function getDeleteStoreCartsIdGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoreCartsIdGiftCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>,
    ) {
      return parseResponse(client.store.carts[':id']['gift-cards'].$delete(args, options))
    },
  })
}

export function useDeleteStoreCartsIdGiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['gift-cards']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStoreCartsIdGiftCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdLineItemsMutationKey() {
  return ['store', '/store/carts/:id/line-items', 'POST'] as const
}

export function getPostStoreCartsIdLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['line-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id']['line-items'].$post(args, options))
    },
  })
}

export function usePostStoreCartsIdLineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['line-items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['line-items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdLineItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdLineItemsLineIdMutationKey() {
  return ['store', '/store/carts/:id/line-items/:line_id', 'POST'] as const
}

export function getPostStoreCartsIdLineItemsLineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdLineItemsLineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id']['line-items'][':line_id'].$post(args, options))
    },
  })
}

export function usePostStoreCartsIdLineItemsLineId<
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
                ReturnType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdLineItemsLineIdMutationOptions<
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

export function getDeleteStoreCartsIdLineItemsLineIdMutationKey() {
  return ['store', '/store/carts/:id/line-items/:line_id', 'DELETE'] as const
}

export function getDeleteStoreCartsIdLineItemsLineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoreCartsIdLineItemsLineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.store.carts[':id']['line-items'][':line_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteStoreCartsIdLineItemsLineId<
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
                ReturnType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStoreCartsIdLineItemsLineIdMutationOptions<
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

export function getPostStoreCartsIdPromotionsMutationKey() {
  return ['store', '/store/carts/:id/promotions', 'POST'] as const
}

export function getPostStoreCartsIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id'].promotions.$post(args, options))
    },
  })
}

export function usePostStoreCartsIdPromotions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['promotions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdPromotionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStoreCartsIdPromotionsMutationKey() {
  return ['store', '/store/carts/:id/promotions', 'DELETE'] as const
}

export function getDeleteStoreCartsIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoreCartsIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']>,
    ) {
      return parseResponse(client.store.carts[':id'].promotions.$delete(args, options))
    },
  })
}

export function useDeleteStoreCartsIdPromotions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['promotions']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['promotions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStoreCartsIdPromotionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdShippingMethodsMutationKey() {
  return ['store', '/store/carts/:id/shipping-methods', 'POST'] as const
}

export function getPostStoreCartsIdShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id']['shipping-methods'].$post(args, options))
    },
  })
}

export function usePostStoreCartsIdShippingMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['shipping-methods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdShippingMethodsMutationOptions<
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

export function getPostStoreCartsIdStoreCreditsMutationKey() {
  return ['store', '/store/carts/:id/store-credits', 'POST'] as const
}

export function getPostStoreCartsIdStoreCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['store-credits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdStoreCreditsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']>,
    ) {
      return parseResponse(client.store.carts[':id']['store-credits'].$post(args, options))
    },
  })
}

export function usePostStoreCartsIdStoreCredits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['store-credits']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['store-credits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdStoreCreditsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreCartsIdTaxesMutationKey() {
  return ['store', '/store/carts/:id/taxes', 'POST'] as const
}

export function getPostStoreCartsIdTaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.carts)[':id']['taxes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCartsIdTaxesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']>) {
      return parseResponse(client.store.carts[':id'].taxes.$post(args, options))
    },
  })
}

export function usePostStoreCartsIdTaxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.carts)[':id']['taxes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.carts)[':id']['taxes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCartsIdTaxesMutationOptions<TError, TOnMutateResult>(
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

export function getStoreCollectionsQueryKey(
  args: InferRequestType<typeof client.store.collections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/collections', keyArgs] as const
}

export function getStoreCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCollectionsQueryKey>
  >({
    queryKey: getStoreCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.collections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.collections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/collections/:id', keyArgs] as const
}

export function getStoreCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCollectionsIdQueryKey>
  >({
    queryKey: getStoreCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCollectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCollectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.collections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCollectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCollectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreCurrenciesQueryKey(
  args: InferRequestType<typeof client.store.currencies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/currencies', keyArgs] as const
}

export function getStoreCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.currencies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCurrenciesQueryKey>
  >({
    queryKey: getStoreCurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.currencies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.currencies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCurrenciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.currencies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCurrenciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreCurrenciesCodeQueryKey(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/currencies/:code', keyArgs] as const
}

export function getStoreCurrenciesCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCurrenciesCodeQueryKey>
  >({
    queryKey: getStoreCurrenciesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.currencies[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreCurrenciesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCurrenciesCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCurrenciesCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCurrenciesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.currencies)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCurrenciesCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCurrenciesCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreCustomersMutationKey() {
  return ['store', '/store/customers', 'POST'] as const
}

export function getPostStoreCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.store.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.customers.$post>) {
      return parseResponse(client.store.customers.$post(args, options))
    },
  })
}

export function usePostStoreCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.store.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCustomersMutationOptions<TError, TOnMutateResult>(
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

export function getStoreCustomersMeQueryKey(
  args: InferRequestType<typeof client.store.customers.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me', keyArgs] as const
}

export function getStoreCustomersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.customers.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeQueryKey>
  >({
    queryKey: getStoreCustomersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.customers.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreCustomersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.customers.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreCustomersMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreCustomersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.customers.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreCustomersMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreCustomersMeMutationKey() {
  return ['store', '/store/customers/me', 'POST'] as const
}

export function getPostStoreCustomersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.store.customers.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCustomersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.customers.me.$post>) {
      return parseResponse(client.store.customers.me.$post(args, options))
    },
  })
}

export function usePostStoreCustomersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.store.customers.me.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCustomersMeMutationOptions<TError, TOnMutateResult>(
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

export function getStoreCustomersMeAddressesQueryKey(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me/addresses', keyArgs] as const
}

export function getStoreCustomersMeAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeAddressesQueryKey>
  >({
    queryKey: getStoreCustomersMeAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.customers.me.addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreCustomersMeAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeAddressesQueryKey>
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
      ...getStoreCustomersMeAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreCustomersMeAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.customers.me.addresses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeAddressesQueryKey>
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
      ...getStoreCustomersMeAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStoreCustomersMeAddressesMutationKey() {
  return ['store', '/store/customers/me/addresses', 'POST'] as const
}

export function getPostStoreCustomersMeAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.store.customers.me.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCustomersMeAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.customers.me.addresses.$post>) {
      return parseResponse(client.store.customers.me.addresses.$post(args, options))
    },
  })
}

export function usePostStoreCustomersMeAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.store.customers.me.addresses.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.store.customers.me.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCustomersMeAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getStoreCustomersMeAddressesAddressIdQueryKey(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/customers/me/addresses/:address_id', keyArgs] as const
}

export function getStoreCustomersMeAddressesAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeAddressesAddressIdQueryKey>
  >({
    queryKey: getStoreCustomersMeAddressesAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.customers.me.addresses[':address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreCustomersMeAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeAddressesAddressIdQueryKey>
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
      ...getStoreCustomersMeAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreCustomersMeAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreCustomersMeAddressesAddressIdQueryKey>
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
      ...getStoreCustomersMeAddressesAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStoreCustomersMeAddressesAddressIdMutationKey() {
  return ['store', '/store/customers/me/addresses/:address_id', 'POST'] as const
}

export function getPostStoreCustomersMeAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreCustomersMeAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>,
    ) {
      return parseResponse(client.store.customers.me.addresses[':address_id'].$post(args, options))
    },
  })
}

export function usePostStoreCustomersMeAddressesAddressId<
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
                ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreCustomersMeAddressesAddressIdMutationOptions<
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

export function getDeleteStoreCustomersMeAddressesAddressIdMutationKey() {
  return ['store', '/store/customers/me/addresses/:address_id', 'DELETE'] as const
}

export function getDeleteStoreCustomersMeAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoreCustomersMeAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.store.customers.me.addresses)[':address_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.store.customers.me.addresses[':address_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteStoreCustomersMeAddressesAddressId<
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
                ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStoreCustomersMeAddressesAddressIdMutationOptions<
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

export function getStoreGiftCardsIdOrCodeQueryKey(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/gift-cards/:idOrCode', keyArgs] as const
}

export function getStoreGiftCardsIdOrCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreGiftCardsIdOrCodeQueryKey>
  >({
    queryKey: getStoreGiftCardsIdOrCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['gift-cards'][':idOrCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreGiftCardsIdOrCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreGiftCardsIdOrCodeQueryKey>
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
      ...getStoreGiftCardsIdOrCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreGiftCardsIdOrCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreGiftCardsIdOrCodeQueryKey>
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
      ...getStoreGiftCardsIdOrCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoreLocalesQueryKey(args: InferRequestType<typeof client.store.locales.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/locales', keyArgs] as const
}

export function getStoreLocalesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.locales.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreLocalesQueryKey>
  >({
    queryKey: getStoreLocalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.locales.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreLocales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.locales.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreLocalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreLocalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreLocales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.locales.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreLocalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreLocalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreOrdersQueryKey(args: InferRequestType<typeof client.store.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/orders', keyArgs] as const
}

export function getStoreOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoreOrdersQueryKey>
  >({
    queryKey: getStoreOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreOrdersIdQueryKey(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/orders/:id', keyArgs] as const
}

export function getStoreOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreOrdersIdQueryKey>
  >({
    queryKey: getStoreOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreOrdersIdTransferAcceptMutationKey() {
  return ['store', '/store/orders/:id/transfer/accept', 'POST'] as const
}

export function getPostStoreOrdersIdTransferAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreOrdersIdTransferAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>,
    ) {
      return parseResponse(client.store.orders[':id'].transfer.accept.$post(args, options))
    },
  })
}

export function usePostStoreOrdersIdTransferAccept<
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
                ReturnType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.orders)[':id']['transfer']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreOrdersIdTransferAcceptMutationOptions<
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

export function getPostStoreOrdersIdTransferCancelMutationKey() {
  return ['store', '/store/orders/:id/transfer/cancel', 'POST'] as const
}

export function getPostStoreOrdersIdTransferCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreOrdersIdTransferCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>,
    ) {
      return parseResponse(client.store.orders[':id'].transfer.cancel.$post(args, options))
    },
  })
}

export function usePostStoreOrdersIdTransferCancel<
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
                ReturnType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.orders)[':id']['transfer']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreOrdersIdTransferCancelMutationOptions<
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

export function getPostStoreOrdersIdTransferDeclineMutationKey() {
  return ['store', '/store/orders/:id/transfer/decline', 'POST'] as const
}

export function getPostStoreOrdersIdTransferDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreOrdersIdTransferDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>,
    ) {
      return parseResponse(client.store.orders[':id'].transfer.decline.$post(args, options))
    },
  })
}

export function usePostStoreOrdersIdTransferDecline<
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
                ReturnType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.orders)[':id']['transfer']['decline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreOrdersIdTransferDeclineMutationOptions<
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

export function getPostStoreOrdersIdTransferRequestMutationKey() {
  return ['store', '/store/orders/:id/transfer/request', 'POST'] as const
}

export function getPostStoreOrdersIdTransferRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreOrdersIdTransferRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>,
    ) {
      return parseResponse(client.store.orders[':id'].transfer.request.$post(args, options))
    },
  })
}

export function usePostStoreOrdersIdTransferRequest<
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
                ReturnType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store.orders)[':id']['transfer']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreOrdersIdTransferRequestMutationOptions<
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

export function getPostStorePaymentCollectionsMutationKey() {
  return ['store', '/store/payment-collections', 'POST'] as const
}

export function getPostStorePaymentCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['payment-collections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store)['payment-collections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStorePaymentCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store)['payment-collections']['$post']>,
    ) {
      return parseResponse(client.store['payment-collections'].$post(args, options))
    },
  })
}

export function usePostStorePaymentCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['payment-collections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store)['payment-collections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStorePaymentCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStorePaymentCollectionsIdPaymentSessionsMutationKey() {
  return ['store', '/store/payment-collections/:id/payment-sessions', 'POST'] as const
}

export function getPostStorePaymentCollectionsIdPaymentSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStorePaymentCollectionsIdPaymentSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
      >,
    ) {
      return parseResponse(
        client.store['payment-collections'][':id']['payment-sessions'].$post(args, options),
      )
    },
  })
}

export function usePostStorePaymentCollectionsIdPaymentSessions<
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
                  (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.store)['payment-collections'][':id']['payment-sessions']['$post']
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
  const mutationDefaults = getPostStorePaymentCollectionsIdPaymentSessionsMutationOptions<
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

export function getPostStorePaymentCollectionsIdPaymentSessionsSessionIdMutationKey() {
  return ['store', '/store/payment-collections/:id/payment-sessions/:session_id', 'POST'] as const
}

export function getPostStorePaymentCollectionsIdPaymentSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStorePaymentCollectionsIdPaymentSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
      >,
    ) {
      return parseResponse(
        client.store['payment-collections'][':id']['payment-sessions'][':session_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostStorePaymentCollectionsIdPaymentSessionsSessionId<
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
                  (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.store)['payment-collections'][':id']['payment-sessions'][':session_id']['$post']
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
  const mutationDefaults = getPostStorePaymentCollectionsIdPaymentSessionsSessionIdMutationOptions<
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

export function getStorePaymentProvidersQueryKey(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/payment-providers', keyArgs] as const
}

export function getStorePaymentProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorePaymentProvidersQueryKey>
  >({
    queryKey: getStorePaymentProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['payment-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStorePaymentProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStorePaymentProvidersQueryKey>
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
      ...getStorePaymentProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorePaymentProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['payment-providers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStorePaymentProvidersQueryKey>
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
      ...getStorePaymentProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoreProductCategoriesQueryKey(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-categories', keyArgs] as const
}

export function getStoreProductCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductCategoriesQueryKey>
  >({
    queryKey: getStoreProductCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-categories'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductCategoriesQueryKey>
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
      ...getStoreProductCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreProductCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductCategoriesQueryKey>
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
      ...getStoreProductCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoreProductCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-categories/:id', keyArgs] as const
}

export function getStoreProductCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductCategoriesIdQueryKey>
  >({
    queryKey: getStoreProductCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-categories'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductCategoriesIdQueryKey>
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
      ...getStoreProductCategoriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreProductCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductCategoriesIdQueryKey>
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
      ...getStoreProductCategoriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoreProductOptionsQueryKey(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-options', keyArgs] as const
}

export function getStoreProductOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductOptionsQueryKey>
  >({
    queryKey: getStoreProductOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductOptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductOptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductOptionsIdQueryKey(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-options/:id', keyArgs] as const
}

export function getStoreProductOptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductOptionsIdQueryKey>
  >({
    queryKey: getStoreProductOptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-options'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductOptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductOptionsIdQueryKey>
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
      ...getStoreProductOptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreProductOptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-options'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductOptionsIdQueryKey>
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
      ...getStoreProductOptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStoreProductTagsQueryKey(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-tags', keyArgs] as const
}

export function getStoreProductTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTagsQueryKey>
  >({
    queryKey: getStoreProductTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-tags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductTagsIdQueryKey(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-tags/:id', keyArgs] as const
}

export function getStoreProductTagsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTagsIdQueryKey>
  >({
    queryKey: getStoreProductTagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-tags'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductTypesQueryKey(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-types', keyArgs] as const
}

export function getStoreProductTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTypesQueryKey>
  >({
    queryKey: getStoreProductTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductTypesIdQueryKey(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-types/:id', keyArgs] as const
}

export function getStoreProductTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTypesIdQueryKey>
  >({
    queryKey: getStoreProductTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-types'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-types'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductVariantsQueryKey(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/product-variants', keyArgs] as const
}

export function getStoreProductVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductVariantsQueryKey>
  >({
    queryKey: getStoreProductVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['product-variants'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreProductVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductVariantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['product-variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductVariantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductsQueryKey(
  args: InferRequestType<typeof client.store.products.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/products', keyArgs] as const
}

export function getStoreProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductsQueryKey>
  >({
    queryKey: getStoreProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.products.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.products.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreProductsIdQueryKey(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/products/:id', keyArgs] as const
}

export function getStoreProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductsIdQueryKey>
  >({
    queryKey: getStoreProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreRegionsQueryKey(args: InferRequestType<typeof client.store.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/regions', keyArgs] as const
}

export function getStoreRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.store.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreRegionsQueryKey>
  >({
    queryKey: getStoreRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.regions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.store.regions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreRegionsIdQueryKey(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/regions/:id', keyArgs] as const
}

export function getStoreRegionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreRegionsIdQueryKey>
  >({
    queryKey: getStoreRegionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.regions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoreRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreRegionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreRegionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.regions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreRegionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreRegionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreReturnReasonsQueryKey(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/return-reasons', keyArgs] as const
}

export function getStoreReturnReasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreReturnReasonsQueryKey>
  >({
    queryKey: getStoreReturnReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['return-reasons'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreReturnReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreReturnReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreReturnReasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreReturnReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreReturnReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreReturnReasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStoreReturnReasonsIdQueryKey(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/return-reasons/:id', keyArgs] as const
}

export function getStoreReturnReasonsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreReturnReasonsIdQueryKey>
  >({
    queryKey: getStoreReturnReasonsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['return-reasons'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreReturnReasonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreReturnReasonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreReturnReasonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreReturnReasonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreReturnReasonsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreReturnReasonsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreReturnsMutationKey() {
  return ['store', '/store/returns', 'POST'] as const
}

export function getPostStoreReturnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.returns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.store.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.returns.$post>) {
      return parseResponse(client.store.returns.$post(args, options))
    },
  })
}

export function usePostStoreReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.returns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.store.returns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreReturnsMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoreSearchMutationKey() {
  return ['store', '/store/search', 'POST'] as const
}

export function getPostStoreSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.store.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.search.$post>) {
      return parseResponse(client.store.search.$post(args, options))
    },
  })
}

export function usePostStoreSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.store.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoreShippingOptionsQueryKey(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/shipping-options', keyArgs] as const
}

export function getStoreShippingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreShippingOptionsQueryKey>
  >({
    queryKey: getStoreShippingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['shipping-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreShippingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreShippingOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoreShippingOptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoreShippingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['shipping-options']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreShippingOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoreShippingOptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoreShippingOptionsIdCalculateMutationKey() {
  return ['store', '/store/shipping-options/:id/calculate', 'POST'] as const
}

export function getPostStoreShippingOptionsIdCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreShippingOptionsIdCalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.store)['shipping-options'][':id']['calculate']['$post']
      >,
    ) {
      return parseResponse(client.store['shipping-options'][':id'].calculate.$post(args, options))
    },
  })
}

export function usePostStoreShippingOptionsIdCalculate<
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
                ReturnType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store)['shipping-options'][':id']['calculate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreShippingOptionsIdCalculateMutationOptions<
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

export function getStoreStoreCreditAccountsQueryKey(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/store-credit-accounts', keyArgs] as const
}

export function getStoreStoreCreditAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreStoreCreditAccountsQueryKey>
  >({
    queryKey: getStoreStoreCreditAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['store-credit-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreStoreCreditAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreStoreCreditAccountsQueryKey>
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
      ...getStoreStoreCreditAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreStoreCreditAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreStoreCreditAccountsQueryKey>
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
      ...getStoreStoreCreditAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStoreStoreCreditAccountsClaimMutationKey() {
  return ['store', '/store/store-credit-accounts/claim', 'POST'] as const
}

export function getPostStoreStoreCreditAccountsClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['claim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreStoreCreditAccountsClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>,
    ) {
      return parseResponse(client.store['store-credit-accounts'].claim.$post(args, options))
    },
  })
}

export function usePostStoreStoreCreditAccountsClaim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['claim']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreStoreCreditAccountsClaimMutationOptions<
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

export function getStoreStoreCreditAccountsIdQueryKey(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['store', '/store/store-credit-accounts/:id', keyArgs] as const
}

export function getStoreStoreCreditAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreStoreCreditAccountsIdQueryKey>
  >({
    queryKey: getStoreStoreCreditAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store['store-credit-accounts'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoreStoreCreditAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreStoreCreditAccountsIdQueryKey>
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
      ...getStoreStoreCreditAccountsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoreStoreCreditAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreStoreCreditAccountsIdQueryKey>
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
      ...getStoreStoreCreditAccountsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
