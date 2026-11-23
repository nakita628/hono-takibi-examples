import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2AccountsMfaEnrollmentFinalizeMutationKey() {
  return ['v2', '/v2/accounts/mfaEnrollment:finalize', 'POST'] as const
}

export function getPostV2AccountsMfaEnrollmentFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMfaEnrollmentFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['mfaEnrollment:finalize'].$post(args, options))
    },
  })
}

export function usePostV2AccountsMfaEnrollmentFinalize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsMfaEnrollmentFinalizeMutationOptions<
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

export function getPostV2AccountsMfaEnrollmentStartMutationKey() {
  return ['v2', '/v2/accounts/mfaEnrollment:start', 'POST'] as const
}

export function getPostV2AccountsMfaEnrollmentStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMfaEnrollmentStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['mfaEnrollment:start'].$post(args, options))
    },
  })
}

export function usePostV2AccountsMfaEnrollmentStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsMfaEnrollmentStartMutationOptions<
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

export function getPostV2AccountsMfaEnrollmentWithdrawMutationKey() {
  return ['v2', '/v2/accounts/mfaEnrollment:withdraw', 'POST'] as const
}

export function getPostV2AccountsMfaEnrollmentWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMfaEnrollmentWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['mfaEnrollment:withdraw'].$post(args, options))
    },
  })
}

export function usePostV2AccountsMfaEnrollmentWithdraw<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['mfaEnrollment:withdraw']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsMfaEnrollmentWithdrawMutationOptions<
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

export function getPostV2AccountsMfaSignInFinalizeMutationKey() {
  return ['v2', '/v2/accounts/mfaSignIn:finalize', 'POST'] as const
}

export function getPostV2AccountsMfaSignInFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMfaSignInFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['mfaSignIn:finalize'].$post(args, options))
    },
  })
}

export function usePostV2AccountsMfaSignInFinalize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['mfaSignIn:finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsMfaSignInFinalizeMutationOptions<
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

export function getPostV2AccountsMfaSignInStartMutationKey() {
  return ['v2', '/v2/accounts/mfaSignIn:start', 'POST'] as const
}

export function getPostV2AccountsMfaSignInStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsMfaSignInStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['mfaSignIn:start'].$post(args, options))
    },
  })
}

export function usePostV2AccountsMfaSignInStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['mfaSignIn:start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsMfaSignInStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2AccountsPasskeyEnrollmentFinalizeMutationKey() {
  return ['v2', '/v2/accounts/passkeyEnrollment:finalize', 'POST'] as const
}

export function getPostV2AccountsPasskeyEnrollmentFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsPasskeyEnrollmentFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['passkeyEnrollment:finalize'].$post(args, options))
    },
  })
}

export function usePostV2AccountsPasskeyEnrollmentFinalize<
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
                ReturnType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsPasskeyEnrollmentFinalizeMutationOptions<
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

export function getPostV2AccountsPasskeyEnrollmentStartMutationKey() {
  return ['v2', '/v2/accounts/passkeyEnrollment:start', 'POST'] as const
}

export function getPostV2AccountsPasskeyEnrollmentStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsPasskeyEnrollmentStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['passkeyEnrollment:start'].$post(args, options))
    },
  })
}

export function usePostV2AccountsPasskeyEnrollmentStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['passkeyEnrollment:start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsPasskeyEnrollmentStartMutationOptions<
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

export function getPostV2AccountsPasskeySignInFinalizeMutationKey() {
  return ['v2', '/v2/accounts/passkeySignIn:finalize', 'POST'] as const
}

export function getPostV2AccountsPasskeySignInFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsPasskeySignInFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['passkeySignIn:finalize'].$post(args, options))
    },
  })
}

export function usePostV2AccountsPasskeySignInFinalize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['passkeySignIn:finalize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsPasskeySignInFinalizeMutationOptions<
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

export function getPostV2AccountsPasskeySignInStartMutationKey() {
  return ['v2', '/v2/accounts/passkeySignIn:start', 'POST'] as const
}

export function getPostV2AccountsPasskeySignInStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsPasskeySignInStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>,
    ) {
      return parseResponse(client.v2.accounts['passkeySignIn:start'].$post(args, options))
    },
  })
}

export function usePostV2AccountsPasskeySignInStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.accounts)['passkeySignIn:start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsPasskeySignInStartMutationOptions<
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

export function getPostV2AccountsRevokeTokenMutationKey() {
  return ['v2', '/v2/accounts:revokeToken', 'POST'] as const
}

export function getPostV2AccountsRevokeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['accounts:revokeToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['accounts:revokeToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountsRevokeTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['accounts:revokeToken']['$post']>) {
      return parseResponse(client.v2['accounts:revokeToken'].$post(args, options))
    },
  })
}

export function usePostV2AccountsRevokeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['accounts:revokeToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['accounts:revokeToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AccountsRevokeTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV2DefaultSupportedIdpsQueryKey(
  args: InferRequestType<typeof client.v2.defaultSupportedIdps.$get>,
) {
  return ['v2', '/v2/defaultSupportedIdps', args] as const
}

export function getV2DefaultSupportedIdpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.defaultSupportedIdps.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DefaultSupportedIdpsQueryKey>
  >({
    queryKey: getV2DefaultSupportedIdpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.defaultSupportedIdps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DefaultSupportedIdps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.defaultSupportedIdps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DefaultSupportedIdpsQueryKey>
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
      ...getV2DefaultSupportedIdpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DefaultSupportedIdps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.defaultSupportedIdps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.defaultSupportedIdps.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DefaultSupportedIdpsQueryKey>
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
      ...getV2DefaultSupportedIdpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2RecaptchaConfigQueryKey(
  args: InferRequestType<typeof client.v2.recaptchaConfig.$get>,
) {
  return ['v2', '/v2/recaptchaConfig', args] as const
}

export function getV2RecaptchaConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.recaptchaConfig.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2RecaptchaConfigQueryKey>
  >({
    queryKey: getV2RecaptchaConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.recaptchaConfig.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2RecaptchaConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.recaptchaConfig.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RecaptchaConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2RecaptchaConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2RecaptchaConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.recaptchaConfig.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.recaptchaConfig.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RecaptchaConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2RecaptchaConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2NameQueryKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function getV2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >({
    queryKey: getV2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ParentDefaultSupportedIdpConfigsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>,
) {
  return ['v2', '/v2/:parent/defaultSupportedIdpConfigs', args] as const
}

export function getV2ParentDefaultSupportedIdpConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentDefaultSupportedIdpConfigsQueryKey>
  >({
    queryKey: getV2ParentDefaultSupportedIdpConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].defaultSupportedIdpConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ParentDefaultSupportedIdpConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentDefaultSupportedIdpConfigsQueryKey>
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
      ...getV2ParentDefaultSupportedIdpConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ParentDefaultSupportedIdpConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentDefaultSupportedIdpConfigsQueryKey>
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
      ...getV2ParentDefaultSupportedIdpConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ParentDefaultSupportedIdpConfigsMutationKey() {
  return ['v2', '/v2/:parent/defaultSupportedIdpConfigs', 'POST'] as const
}

export function getPostV2ParentDefaultSupportedIdpConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentDefaultSupportedIdpConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].defaultSupportedIdpConfigs.$post(args, options))
    },
  })
}

export function usePostV2ParentDefaultSupportedIdpConfigs<
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
                ReturnType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['defaultSupportedIdpConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentDefaultSupportedIdpConfigsMutationOptions<
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

export function getV2ParentInboundSamlConfigsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>,
) {
  return ['v2', '/v2/:parent/inboundSamlConfigs', args] as const
}

export function getV2ParentInboundSamlConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentInboundSamlConfigsQueryKey>
  >({
    queryKey: getV2ParentInboundSamlConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].inboundSamlConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ParentInboundSamlConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentInboundSamlConfigsQueryKey>
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
      ...getV2ParentInboundSamlConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ParentInboundSamlConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentInboundSamlConfigsQueryKey>
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
      ...getV2ParentInboundSamlConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ParentInboundSamlConfigsMutationKey() {
  return ['v2', '/v2/:parent/inboundSamlConfigs', 'POST'] as const
}

export function getPostV2ParentInboundSamlConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentInboundSamlConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].inboundSamlConfigs.$post(args, options))
    },
  })
}

export function usePostV2ParentInboundSamlConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['inboundSamlConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentInboundSamlConfigsMutationOptions<
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

export function getV2ParentOauthIdpConfigsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>,
) {
  return ['v2', '/v2/:parent/oauthIdpConfigs', args] as const
}

export function getV2ParentOauthIdpConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentOauthIdpConfigsQueryKey>
  >({
    queryKey: getV2ParentOauthIdpConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].oauthIdpConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ParentOauthIdpConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentOauthIdpConfigsQueryKey>
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
      ...getV2ParentOauthIdpConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ParentOauthIdpConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentOauthIdpConfigsQueryKey>
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
      ...getV2ParentOauthIdpConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ParentOauthIdpConfigsMutationKey() {
  return ['v2', '/v2/:parent/oauthIdpConfigs', 'POST'] as const
}

export function getPostV2ParentOauthIdpConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentOauthIdpConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].oauthIdpConfigs.$post(args, options))
    },
  })
}

export function usePostV2ParentOauthIdpConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['oauthIdpConfigs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentOauthIdpConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentTenantsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$get']>,
) {
  return ['v2', '/v2/:parent/tenants', args] as const
}

export function getV2ParentTenantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentTenantsQueryKey>
  >({
    queryKey: getV2ParentTenantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].tenants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2ParentTenants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentTenantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ParentTenantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ParentTenants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentTenantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ParentTenantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ParentTenantsMutationKey() {
  return ['v2', '/v2/:parent/tenants', 'POST'] as const
}

export function getPostV2ParentTenantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['tenants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentTenantsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['tenants']['$post']>) {
      return parseResponse(client.v2[':parent'].tenants.$post(args, options))
    },
  })
}

export function usePostV2ParentTenants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['tenants']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':parent']['tenants']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ParentTenantsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ProjectIdentityPlatformInitializeAuthMutationKey() {
  return ['v2', '/v2/:project/identityPlatform:initializeAuth', 'POST'] as const
}

export function getPostV2ProjectIdentityPlatformInitializeAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectIdentityPlatformInitializeAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']
      >,
    ) {
      return parseResponse(
        client.v2[':project']['identityPlatform:initializeAuth'].$post(args, options),
      )
    },
  })
}

export function usePostV2ProjectIdentityPlatformInitializeAuth<
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
                  (typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)[':project']['identityPlatform:initializeAuth']['$post']
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
  const mutationDefaults = getPostV2ProjectIdentityPlatformInitializeAuthMutationOptions<
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

export function getPostV2ResourceGetIamPolicyMutationKey() {
  return ['v2', '/v2/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV2ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ResourceSetIamPolicyMutationKey() {
  return ['v2', '/v2/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV2ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ResourceTestIamPermissionsMutationKey() {
  return ['v2', '/v2/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV2ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV2ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ResourceTestIamPermissionsMutationOptions<
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
