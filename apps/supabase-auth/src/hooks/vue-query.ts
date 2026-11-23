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

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getCallbackKey() {
  return ['callback'] as const
}

export function getFactorsKey() {
  return ['factors'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInviteKey() {
  return ['invite'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getMagiclinkKey() {
  return ['magiclink'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOtpKey() {
  return ['otp'] as const
}

export function getReauthenticateKey() {
  return ['reauthenticate'] as const
}

export function getRecoverKey() {
  return ['recover'] as const
}

export function getResendKey() {
  return ['resend'] as const
}

export function getSamlKey() {
  return ['saml'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSignupKey() {
  return ['signup'] as const
}

export function getSsoKey() {
  return ['sso'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVerifyKey() {
  return ['verify'] as const
}

export function getPostTokenMutationKey() {
  return ['token', '/token', 'POST'] as const
}

export function getPostTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.token.$post>) {
      return parseResponse(client.token.$post(args, options))
    },
  })
}

export function usePostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
          TError,
          InferRequestType<typeof client.token.$post>,
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
  const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogoutMutationKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function getPostLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logout.$post>) {
      return parseResponse(client.logout.$post(args, options))
    },
  })
}

export function usePostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.logout.$post>,
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
  const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVerifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verify.$get>>,
) {
  return ['verify', '/verify', toValue(args)] as const
}

export function getVerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verify.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verify.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVerify<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verify.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
          ReturnType<typeof getVerifyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVerifyMutationKey() {
  return ['verify', '/verify', 'POST'] as const
}

export function getPostVerifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$post>>>>>,
    TError,
    InferRequestType<typeof client.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verify.$post>) {
      return parseResponse(client.verify.$post(args, options))
    },
  })
}

export function usePostVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.verify.$post>,
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
  const mutationDefaults = getPostVerifyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
) {
  return ['authorize', '/authorize', toValue(args)] as const
}

export function getAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorize.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
          >,
          ReturnType<typeof getAuthorizeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSignupMutationKey() {
  return ['signup', '/signup', 'POST'] as const
}

export function getPostSignupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>>,
    TError,
    InferRequestType<typeof client.signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signup.$post>) {
      return parseResponse(client.signup.$post(args, options))
    },
  })
}

export function usePostSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.signup.$post>,
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
  const mutationDefaults = getPostSignupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRecoverMutationKey() {
  return ['recover', '/recover', 'POST'] as const
}

export function getPostRecoverMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recover.$post>>>>>,
    TError,
    InferRequestType<typeof client.recover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recover.$post>) {
      return parseResponse(client.recover.$post(args, options))
    },
  })
}

export function usePostRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recover.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recover.$post>,
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
  const mutationDefaults = getPostRecoverMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostResendMutationKey() {
  return ['resend', '/resend', 'POST'] as const
}

export function getPostResendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resend.$post>>>>>,
    TError,
    InferRequestType<typeof client.resend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resend.$post>) {
      return parseResponse(client.resend.$post(args, options))
    },
  })
}

export function usePostResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resend.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.resend.$post>,
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
  const mutationDefaults = getPostResendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMagiclinkMutationKey() {
  return ['magiclink', '/magiclink', 'POST'] as const
}

export function getPostMagiclinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magiclink.$post>>>>>,
    TError,
    InferRequestType<typeof client.magiclink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMagiclinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.magiclink.$post>) {
      return parseResponse(client.magiclink.$post(args, options))
    },
  })
}

export function usePostMagiclink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magiclink.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.magiclink.$post>,
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
  const mutationDefaults = getPostMagiclinkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOtpMutationKey() {
  return ['otp', '/otp', 'POST'] as const
}

export function getPostOtpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otp.$post>>>>>,
    TError,
    InferRequestType<typeof client.otp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.otp.$post>) {
      return parseResponse(client.otp.$post(args, options))
    },
  })
}

export function usePostOtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otp.$post>>>>>,
          TError,
          InferRequestType<typeof client.otp.$post>,
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
  const mutationDefaults = getPostOtpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function usePutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
          TError,
          InferRequestType<typeof client.user.$put>,
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
  const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserIdentitiesAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.identities.authorize.$get>>,
) {
  return ['user', '/user/identities/authorize', toValue(args)] as const
}

export function getUserIdentitiesAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.identities.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdentitiesAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.identities.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdentitiesAuthorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.identities.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.identities.authorize.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.identities.authorize.$get>>
              >
            >
          >,
          ReturnType<typeof getUserIdentitiesAuthorizeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdentitiesAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdentitiesAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.identities.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUserIdentitiesIdentityIdMutationKey() {
  return ['user', '/user/identities/:identityId', 'DELETE'] as const
}

export function getDeleteUserIdentitiesIdentityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.identities)[':identityId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.identities)[':identityId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdentitiesIdentityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.identities)[':identityId']['$delete']>,
    ) {
      return parseResponse(client.user.identities[':identityId'].$delete(args, options))
    },
  })
}

export function useDeleteUserIdentitiesIdentityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.identities)[':identityId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.identities)[':identityId']['$delete']>,
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
  const mutationDefaults = getDeleteUserIdentitiesIdentityIdMutationOptions<
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

export function getUserOauthGrantsQueryKey() {
  return ['user', '/user/oauth/grants'] as const
}

export function getUserOauthGrantsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserOauthGrantsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.oauth.grants.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserOauthGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>
            >
          >,
          ReturnType<typeof getUserOauthGrantsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserOauthGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserOauthGrantsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.oauth.grants.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUserOauthGrantsMutationKey() {
  return ['user', '/user/oauth/grants', 'DELETE'] as const
}

export function getDeleteUserOauthGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.user.oauth.grants.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserOauthGrantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.oauth.grants.$delete>) {
      return parseResponse(client.user.oauth.grants.$delete(args, options))
    },
  })
}

export function useDeleteUserOauthGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.user.oauth.grants.$delete>,
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
  const mutationDefaults = getDeleteUserOauthGrantsMutationOptions<TError, TOnMutateResult>(
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

export function getPostReauthenticateMutationKey() {
  return ['reauthenticate', '/reauthenticate', 'POST'] as const
}

export function getPostReauthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reauthenticate.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostReauthenticateMutationKey(),
    async mutationFn() {
      return parseResponse(client.reauthenticate.$post(undefined, options))
    },
  })
}

export function usePostReauthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reauthenticate.$post>>>
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
  const mutationDefaults = getPostReauthenticateMutationOptions<TError, TOnMutateResult>(
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

export function getPostFactorsMutationKey() {
  return ['factors', '/factors', 'POST'] as const
}

export function getPostFactorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.factors.$post>>>>>,
    TError,
    InferRequestType<typeof client.factors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.factors.$post>) {
      return parseResponse(client.factors.$post(args, options))
    },
  })
}

export function usePostFactors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.factors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.factors.$post>,
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
  const mutationDefaults = getPostFactorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFactorsFactorIdChallengeMutationKey() {
  return ['factors', '/factors/:factorId/challenge', 'POST'] as const
}

export function getPostFactorsFactorIdChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)[':factorId']['challenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsFactorIdChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']>,
    ) {
      return parseResponse(client.factors[':factorId'].challenge.$post(args, options))
    },
  })
}

export function usePostFactorsFactorIdChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)[':factorId']['challenge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']>,
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
  const mutationDefaults = getPostFactorsFactorIdChallengeMutationOptions<TError, TOnMutateResult>(
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

export function getPostFactorsFactorIdVerifyMutationKey() {
  return ['factors', '/factors/:factorId/verify', 'POST'] as const
}

export function getPostFactorsFactorIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)[':factorId']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsFactorIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']>,
    ) {
      return parseResponse(client.factors[':factorId'].verify.$post(args, options))
    },
  })
}

export function usePostFactorsFactorIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)[':factorId']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']>,
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
  const mutationDefaults = getPostFactorsFactorIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFactorsFactorIdMutationKey() {
  return ['factors', '/factors/:factorId', 'DELETE'] as const
}

export function getDeleteFactorsFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)[':factorId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.factors)[':factorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFactorsFactorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.factors)[':factorId']['$delete']>) {
      return parseResponse(client.factors[':factorId'].$delete(args, options))
    },
  })
}

export function useDeleteFactorsFactorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)[':factorId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.factors)[':factorId']['$delete']>,
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
  const mutationDefaults = getDeleteFactorsFactorIdMutationOptions<TError, TOnMutateResult>(
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

export function getFactorsRecoveryCodesQueryKey() {
  return ['factors', '/factors/recovery-codes'] as const
}

export function getFactorsRecoveryCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFactorsRecoveryCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.factors['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFactorsRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
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
                Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFactorsRecoveryCodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFactorsRecoveryCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFactorsRecoveryCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.factors['recovery-codes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFactorsRecoveryCodesMutationKey() {
  return ['factors', '/factors/recovery-codes', 'POST'] as const
}

export function getPostFactorsRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.factors)['recovery-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsRecoveryCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.factors)['recovery-codes']['$post']>) {
      return parseResponse(client.factors['recovery-codes'].$post(args, options))
    },
  })
}

export function usePostFactorsRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.factors)['recovery-codes']['$post']>,
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
  const mutationDefaults = getPostFactorsRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFactorsRecoveryCodesMutationKey() {
  return ['factors', '/factors/recovery-codes', 'DELETE'] as const
}

export function getDeleteFactorsRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteFactorsRecoveryCodesMutationKey(),
    async mutationFn() {
      return parseResponse(client.factors['recovery-codes'].$delete(undefined, options))
    },
  })
}

export function useDeleteFactorsRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$delete']>>
              >
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
  const mutationDefaults = getDeleteFactorsRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPostFactorsRecoveryCodesVerifyMutationKey() {
  return ['factors', '/factors/recovery-codes/verify', 'POST'] as const
}

export function getPostFactorsRecoveryCodesVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsRecoveryCodesVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']>,
    ) {
      return parseResponse(client.factors['recovery-codes'].verify.$post(args, options))
    },
  })
}

export function usePostFactorsRecoveryCodesVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.factors)['recovery-codes']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']>,
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
  const mutationDefaults = getPostFactorsRecoveryCodesVerifyMutationOptions<
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

export function getPostFactorsRecoveryCodesRegenerateMutationKey() {
  return ['factors', '/factors/recovery-codes/regenerate', 'POST'] as const
}

export function getPostFactorsRecoveryCodesRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsRecoveryCodesRegenerateMutationKey(),
    async mutationFn() {
      return parseResponse(client.factors['recovery-codes'].regenerate.$post(undefined, options))
    },
  })
}

export function usePostFactorsRecoveryCodesRegenerate<
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
                  ReturnType<(typeof client.factors)['recovery-codes']['regenerate']['$post']>
                >
              >
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
  const mutationDefaults = getPostFactorsRecoveryCodesRegenerateMutationOptions<
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

export function getCallbackQueryKey() {
  return ['callback', '/callback'] as const
}

export function getCallbackQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCallbackQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.callback.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>
          >,
          ReturnType<typeof getCallbackQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCallbackQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.callback.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallbackMutationKey() {
  return ['callback', '/callback', 'POST'] as const
}

export function getPostCallbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCallbackMutationKey(),
    async mutationFn() {
      return parseResponse(client.callback.$post(undefined, options))
    },
  })
}

export function usePostCallback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>
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
  const mutationDefaults = getPostCallbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSsoMutationKey() {
  return ['sso', '/sso', 'POST'] as const
}

export function getPostSsoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.$post>>>>>,
    TError,
    InferRequestType<typeof client.sso.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.$post>) {
      return parseResponse(client.sso.$post(args, options))
    },
  })
}

export function usePostSso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.$post>>>>>,
          TError,
          InferRequestType<typeof client.sso.$post>,
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
  const mutationDefaults = getPostSsoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSamlMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml.metadata.$get>>,
) {
  return ['saml', '/saml/metadata', toValue(args)] as const
}

export function getSamlMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml.metadata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSamlMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saml.metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamlMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saml.metadata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
          >,
          ReturnType<typeof getSamlMetadataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSamlMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saml.metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSamlAcsMutationKey() {
  return ['saml', '/saml/acs', 'POST'] as const
}

export function getPostSamlAcsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>>,
    TError,
    InferRequestType<typeof client.saml.acs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamlAcsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saml.acs.$post>) {
      return parseResponse(client.saml.acs.$post(args, options))
    },
  })
}

export function usePostSamlAcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.saml.acs.$post>,
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
  const mutationDefaults = getPostSamlAcsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInviteMutationKey() {
  return ['invite', '/invite', 'POST'] as const
}

export function getPostInviteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite.$post>>>>>,
    TError,
    InferRequestType<typeof client.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invite.$post>) {
      return parseResponse(client.invite.$post(args, options))
    },
  })
}

export function usePostInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invite.$post>,
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
  const mutationDefaults = getPostInviteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminGenerateLinkMutationKey() {
  return ['admin', '/admin/generate_link', 'POST'] as const
}

export function getPostAdminGenerateLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.generate_link.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.generate_link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminGenerateLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.generate_link.$post>) {
      return parseResponse(client.admin.generate_link.$post(args, options))
    },
  })
}

export function usePostAdminGenerateLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.generate_link.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.generate_link.$post>,
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
  const mutationDefaults = getPostAdminGenerateLinkMutationOptions<TError, TOnMutateResult>(
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

export function getAdminAuditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
) {
  return ['admin', '/admin/audit', toValue(args)] as const
}

export function getAdminAuditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.audit.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
          >,
          ReturnType<typeof getAdminAuditQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.audit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
) {
  return ['admin', '/admin/users', toValue(args)] as const
}

export function getAdminUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          ReturnType<typeof getAdminUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':userId']['$get']>>,
) {
  return ['admin', '/admin/users/:userId', toValue(args)] as const
}

export function getAdminUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminUsersUserIdMutationKey() {
  return ['admin', '/admin/users/:userId', 'PUT'] as const
}

export function getPutAdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':userId']['$put']>) {
      return parseResponse(client.admin.users[':userId'].$put(args, options))
    },
  })
}

export function usePutAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
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
  const mutationDefaults = getPutAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminUsersUserIdMutationKey() {
  return ['admin', '/admin/users/:userId', 'DELETE'] as const
}

export function getDeleteAdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':userId']['$delete']>) {
      return parseResponse(client.admin.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersUserIdFactorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>
  >,
) {
  return ['admin', '/admin/users/:userId/factors', toValue(args)] as const
}

export function getAdminUsersUserIdFactorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersUserIdFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':userId'].factors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersUserIdFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersUserIdFactorsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersUserIdFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':userId'].factors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminUsersUserIdFactorsFactorIdMutationKey() {
  return ['admin', '/admin/users/:userId/factors/:factorId', 'PUT'] as const
}

export function getPutAdminUsersUserIdFactorsFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdFactorsFactorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.users)[':userId']['factors'][':factorId']['$put']
      >,
    ) {
      return parseResponse(client.admin.users[':userId'].factors[':factorId'].$put(args, options))
    },
  })
}

export function usePutAdminUsersUserIdFactorsFactorId<
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
                  ReturnType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>,
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
  const mutationDefaults = getPutAdminUsersUserIdFactorsFactorIdMutationOptions<
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

export function getDeleteAdminUsersUserIdFactorsFactorIdMutationKey() {
  return ['admin', '/admin/users/:userId/factors/:factorId', 'DELETE'] as const
}

export function getDeleteAdminUsersUserIdFactorsFactorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersUserIdFactorsFactorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.users[':userId'].factors[':factorId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminUsersUserIdFactorsFactorId<
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
                    (typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']
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
  const mutationDefaults = getDeleteAdminUsersUserIdFactorsFactorIdMutationOptions<
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

export function getAdminSsoProvidersQueryKey() {
  return ['admin', '/admin/sso/providers'] as const
}

export function getAdminSsoProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminSsoProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.sso.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSsoProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>
            >
          >,
          ReturnType<typeof getAdminSsoProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSsoProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminSsoProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.sso.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminSsoProvidersMutationKey() {
  return ['admin', '/admin/sso/providers', 'POST'] as const
}

export function getPostAdminSsoProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.sso.providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSsoProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.sso.providers.$post>) {
      return parseResponse(client.admin.sso.providers.$post(args, options))
    },
  })
}

export function usePostAdminSsoProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.sso.providers.$post>,
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
  const mutationDefaults = getPostAdminSsoProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminSsoProvidersSsoProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>
  >,
) {
  return ['admin', '/admin/sso/providers/:ssoProviderId', toValue(args)] as const
}

export function getAdminSsoProvidersSsoProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSsoProvidersSsoProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.sso.providers[':ssoProviderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSsoProvidersSsoProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSsoProvidersSsoProviderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSsoProvidersSsoProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSsoProvidersSsoProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.sso.providers[':ssoProviderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminSsoProvidersSsoProviderIdMutationKey() {
  return ['admin', '/admin/sso/providers/:ssoProviderId', 'PUT'] as const
}

export function getPutAdminSsoProvidersSsoProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminSsoProvidersSsoProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>,
    ) {
      return parseResponse(client.admin.sso.providers[':ssoProviderId'].$put(args, options))
    },
  })
}

export function usePutAdminSsoProvidersSsoProviderId<
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
                Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>,
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
  const mutationDefaults = getPutAdminSsoProvidersSsoProviderIdMutationOptions<
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

export function getDeleteAdminSsoProvidersSsoProviderIdMutationKey() {
  return ['admin', '/admin/sso/providers/:ssoProviderId', 'DELETE'] as const
}

export function getDeleteAdminSsoProvidersSsoProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminSsoProvidersSsoProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>,
    ) {
      return parseResponse(client.admin.sso.providers[':ssoProviderId'].$delete(args, options))
    },
  })
}

export function useDeleteAdminSsoProvidersSsoProviderId<
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
                  ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>,
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
  const mutationDefaults = getDeleteAdminSsoProvidersSsoProviderIdMutationOptions<
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

export function getAdminOauthClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.oauth.clients.$get>>,
) {
  return ['admin', '/admin/oauth/clients', toValue(args)] as const
}

export function getAdminOauthClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.oauth.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOauthClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.oauth.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOauthClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.oauth.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
            >
          >,
          ReturnType<typeof getAdminOauthClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauthClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOauthClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.oauth.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOauthClientsMutationKey() {
  return ['admin', '/admin/oauth/clients', 'POST'] as const
}

export function getPostAdminOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.oauth.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOauthClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.oauth.clients.$post>) {
      return parseResponse(client.admin.oauth.clients.$post(args, options))
    },
  })
}

export function usePostAdminOauthClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.oauth.clients.$post>,
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
  const mutationDefaults = getPostAdminOauthClientsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminOauthClientsClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>
  >,
) {
  return ['admin', '/admin/oauth/clients/:client_id', toValue(args)] as const
}

export function getAdminOauthClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOauthClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.oauth.clients[':client_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminOauthClientsClientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauthClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOauthClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.oauth.clients[':client_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminOauthClientsClientIdMutationKey() {
  return ['admin', '/admin/oauth/clients/:client_id', 'PUT'] as const
}

export function getPutAdminOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']>,
    ) {
      return parseResponse(client.admin.oauth.clients[':client_id'].$put(args, options))
    },
  })
}

export function usePutAdminOauthClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']>,
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
  const mutationDefaults = getPutAdminOauthClientsClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminOauthClientsClientIdMutationKey() {
  return ['admin', '/admin/oauth/clients/:client_id', 'DELETE'] as const
}

export function getDeleteAdminOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>,
    ) {
      return parseResponse(client.admin.oauth.clients[':client_id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminOauthClientsClientId<
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
                  Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminOauthClientsClientIdMutationOptions<
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

export function getPostAdminOauthClientsClientIdRegenerateSecretMutationKey() {
  return ['admin', '/admin/oauth/clients/:client_id/regenerate_secret', 'POST'] as const
}

export function getPostAdminOauthClientsClientIdRegenerateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOauthClientsClientIdRegenerateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.oauth.clients[':client_id'].regenerate_secret.$post(args, options),
      )
    },
  })
}

export function usePostAdminOauthClientsClientIdRegenerateSecret<
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
                    (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
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
  const mutationDefaults = getPostAdminOauthClientsClientIdRegenerateSecretMutationOptions<
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

export function getAdminCustomProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['custom-providers']['$get']>>,
) {
  return ['admin', '/admin/custom-providers', toValue(args)] as const
}

export function getAdminCustomProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['custom-providers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['custom-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['custom-providers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCustomProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['custom-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomProvidersMutationKey() {
  return ['admin', '/admin/custom-providers', 'POST'] as const
}

export function getPostAdminCustomProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['custom-providers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['custom-providers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomProvidersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['custom-providers']['$post']>) {
      return parseResponse(client.admin['custom-providers'].$post(args, options))
    },
  })
}

export function usePostAdminCustomProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['custom-providers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['custom-providers']['$post']>,
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
  const mutationDefaults = getPostAdminCustomProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCustomProvidersIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>
  >,
) {
  return ['admin', '/admin/custom-providers/:identifier', toValue(args)] as const
}

export function getAdminCustomProvidersIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomProvidersIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['custom-providers'][':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomProvidersIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>
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
                  ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminCustomProvidersIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomProvidersIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomProvidersIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['custom-providers'][':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminCustomProvidersIdentifierMutationKey() {
  return ['admin', '/admin/custom-providers/:identifier', 'PUT'] as const
}

export function getPutAdminCustomProvidersIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminCustomProvidersIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>,
    ) {
      return parseResponse(client.admin['custom-providers'][':identifier'].$put(args, options))
    },
  })
}

export function usePutAdminCustomProvidersIdentifier<
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
                  ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>,
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
  const mutationDefaults = getPutAdminCustomProvidersIdentifierMutationOptions<
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

export function getDeleteAdminCustomProvidersIdentifierMutationKey() {
  return ['admin', '/admin/custom-providers/:identifier', 'DELETE'] as const
}

export function getDeleteAdminCustomProvidersIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCustomProvidersIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>,
    ) {
      return parseResponse(client.admin['custom-providers'][':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteAdminCustomProvidersIdentifier<
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
                    ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>,
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
  const mutationDefaults = getDeleteAdminCustomProvidersIdentifierMutationOptions<
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

export function getPostOauthClientsRegisterMutationKey() {
  return ['oauth', '/oauth/clients/register', 'POST'] as const
}

export function getPostOauthClientsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.clients.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.clients.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.clients.register.$post>) {
      return parseResponse(client.oauth.clients.register.$post(args, options))
    },
  })
}

export function usePostOauthClientsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.clients.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.clients.register.$post>,
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
  const mutationDefaults = getPostOauthClientsRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
) {
  return ['oauth', '/oauth/authorize', toValue(args)] as const
}

export function getOauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getOauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthAuthorizationsAuthorizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>
  >,
) {
  return ['oauth', '/oauth/authorizations/:authorization_id', toValue(args)] as const
}

export function getOauthAuthorizationsAuthorizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizationsAuthorizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorizations[':authorization_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorizationsAuthorizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>
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
                  ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOauthAuthorizationsAuthorizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizationsAuthorizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizationsAuthorizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorizations[':authorization_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthAuthorizationsAuthorizationIdConsentMutationKey() {
  return ['oauth', '/oauth/authorizations/:authorization_id/consent', 'POST'] as const
}

export function getPostOauthAuthorizationsAuthorizationIdConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizationsAuthorizationIdConsentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
      >,
    ) {
      return parseResponse(
        client.oauth.authorizations[':authorization_id'].consent.$post(args, options),
      )
    },
  })
}

export function usePostOauthAuthorizationsAuthorizationIdConsent<
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
                    (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
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
  const mutationDefaults = getPostOauthAuthorizationsAuthorizationIdConsentMutationOptions<
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
