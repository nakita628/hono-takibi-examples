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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.auth.customer.emailpass.verification.confirm.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.auth.customer.emailpass.verification.confirm.$post>,
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

export function getAuthCustomerProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthCustomerProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.customer.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
            >
          >,
          ReturnType<typeof getAuthCustomerProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.customer.providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthCustomerProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthCustomerProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.customer.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAuthMfaFactorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthMfaFactorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.mfa.factors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>
            >
          >,
          ReturnType<typeof getAuthMfaFactorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthMfaFactorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.mfa.factors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
          >,
          TError,
          void,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>
            >
          >,
          TError,
          void,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.auth.verification.confirm.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.auth.verification.confirm.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.auth.verification.request.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.auth.verification.request.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.carts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.store.carts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.carts)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/carts/:id', keyArgs] as const
}

export function getStoreCartsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.carts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCartsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.carts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCartsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.carts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStoreCartsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.carts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCartsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCartsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.carts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.store.carts)[':id']['line-items'][':line_id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.collections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/collections', keyArgs] as const
}

export function getStoreCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>
            >
          >,
          ReturnType<typeof getStoreCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.collections)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/collections/:id', keyArgs] as const
}

export function getStoreCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreCollectionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreCurrenciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.currencies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/currencies', keyArgs] as const
}

export function getStoreCurrenciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.currencies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.currencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.currencies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>
            >
          >,
          ReturnType<typeof getStoreCurrenciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.currencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreCurrenciesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.currencies)[':code']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/currencies/:code', keyArgs] as const
}

export function getStoreCurrenciesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.currencies)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCurrenciesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.currencies[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCurrenciesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.currencies)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreCurrenciesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.currencies)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCurrenciesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCurrenciesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.currencies[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.store.customers.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/customers/me', keyArgs] as const
}

export function getStoreCustomersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCustomersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.customers.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCustomersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>
            >
          >,
          ReturnType<typeof getStoreCustomersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCustomersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.customers.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.addresses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/customers/me/addresses', keyArgs] as const
}

export function getStoreCustomersMeAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.addresses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCustomersMeAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.customers.me.addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreCustomersMeAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.customers.me.addresses.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>
              >
            >
          >,
          ReturnType<typeof getStoreCustomersMeAddressesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.store.customers.me.addresses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCustomersMeAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.customers.me.addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/customers/me/addresses/:address_id', keyArgs] as const
}

export function getStoreCustomersMeAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreCustomersMeAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.customers.me.addresses[':address_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStoreCustomersMeAddressesAddressIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store.customers.me.addresses)[':address_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreCustomersMeAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreCustomersMeAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.customers.me.addresses[':address_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/gift-cards/:idOrCode', keyArgs] as const
}

export function getStoreGiftCardsIdOrCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreGiftCardsIdOrCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['gift-cards'][':idOrCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreGiftCardsIdOrCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['gift-cards'][':idOrCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreGiftCardsIdOrCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreGiftCardsIdOrCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['gift-cards'][':idOrCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreLocalesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.locales.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/locales', keyArgs] as const
}

export function getStoreLocalesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.locales.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreLocalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.locales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreLocales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.locales.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
          >,
          ReturnType<typeof getStoreLocalesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.locales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreLocalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreLocalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.locales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/orders', keyArgs] as const
}

export function getStoreOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStoreOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>
          >,
          ReturnType<typeof getStoreOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoreOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.orders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/orders/:id', keyArgs] as const
}

export function getStoreOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStoreOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['payment-providers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/payment-providers', keyArgs] as const
}

export function getStorePaymentProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['payment-providers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorePaymentProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['payment-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorePaymentProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['payment-providers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStorePaymentProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['payment-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorePaymentProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorePaymentProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['payment-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-categories']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-categories', keyArgs] as const
}

export function getStoreProductCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-categories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['product-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-categories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductCategoriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-categories/:id', keyArgs] as const
}

export function getStoreProductCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-categories'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['product-categories'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['product-categories'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-categories'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-options', keyArgs] as const
}

export function getStoreProductOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductOptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-options/:id', keyArgs] as const
}

export function getStoreProductOptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductOptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-options'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-options'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductOptionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['product-options'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductOptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductOptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-options'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-tags', keyArgs] as const
}

export function getStoreProductTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductTagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-tags/:id', keyArgs] as const
}

export function getStoreProductTagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-tags'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-tags'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductTagsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['product-tags'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-tags'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-types', keyArgs] as const
}

export function getStoreProductTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-types/:id', keyArgs] as const
}

export function getStoreProductTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-types'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-types'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['product-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-types'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductVariantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-variants']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/product-variants', keyArgs] as const
}

export function getStoreProductVariantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-variants']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['product-variants'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['product-variants']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductVariantsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['product-variants']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['product-variants'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/products', keyArgs] as const
}

export function getStoreProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
          >,
          ReturnType<typeof getStoreProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.products)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/products/:id', keyArgs] as const
}

export function getStoreProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreProductsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.regions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/regions', keyArgs] as const
}

export function getStoreRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.store.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
          >,
          ReturnType<typeof getStoreRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreRegionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.regions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/regions/:id', keyArgs] as const
}

export function getStoreRegionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.regions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreRegionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.regions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.regions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreRegionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.regions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreRegionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreRegionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.regions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreReturnReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/return-reasons', keyArgs] as const
}

export function getStoreReturnReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreReturnReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['return-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreReturnReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreReturnReasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['return-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreReturnReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreReturnReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['return-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStoreReturnReasonsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/return-reasons/:id', keyArgs] as const
}

export function getStoreReturnReasonsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreReturnReasonsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['return-reasons'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['return-reasons'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreReturnReasonsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['return-reasons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreReturnReasonsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreReturnReasonsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['return-reasons'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.returns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.store.returns.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.store.search.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['shipping-options']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/shipping-options', keyArgs] as const
}

export function getStoreShippingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['shipping-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreShippingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['shipping-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreShippingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['shipping-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreShippingOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store)['shipping-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreShippingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreShippingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['shipping-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/store-credit-accounts', keyArgs] as const
}

export function getStoreStoreCreditAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreStoreCreditAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['store-credit-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store)['store-credit-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreStoreCreditAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreStoreCreditAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreStoreCreditAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['store-credit-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.store)['store-credit-accounts']['claim']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.store)['store-credit-accounts']['claim']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['store', '/store/store-credit-accounts/:id', keyArgs] as const
}

export function getStoreStoreCreditAccountsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreStoreCreditAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store['store-credit-accounts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.store)['store-credit-accounts'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreStoreCreditAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.store)['store-credit-accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreStoreCreditAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreStoreCreditAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store['store-credit-accounts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
