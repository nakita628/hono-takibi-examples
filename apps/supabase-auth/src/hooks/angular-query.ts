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

export function injectPostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
        TError,
        InferRequestType<typeof client.token.$post>,
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
    const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.logout.$post>,
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
    const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVerifyQueryKey(args: InferRequestType<typeof client.verify.$get>) {
  return ['verify', '/verify', args] as const
}

export function getVerifyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.verify.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVerifyQueryKey>
  >({
    queryKey: getVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verify.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVerify<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.verify.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVerifyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$post>>>>>,
        TError,
        InferRequestType<typeof client.verify.$post>,
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
    const mutationDefaults = getPostVerifyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAuthorizeQueryKey(args: InferRequestType<typeof client.authorize.$get>) {
  return ['authorize', '/authorize', args] as const
}

export function getAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthorizeQueryKey>
  >({
    queryKey: getAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>>,
        TError,
        InferRequestType<typeof client.signup.$post>,
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
    const mutationDefaults = getPostSignupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recover.$post>>>>>,
        TError,
        InferRequestType<typeof client.recover.$post>,
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
    const mutationDefaults = getPostRecoverMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resend.$post>>>>>,
        TError,
        InferRequestType<typeof client.resend.$post>,
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
    const mutationDefaults = getPostResendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMagiclink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magiclink.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.magiclink.$post>,
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
    const mutationDefaults = getPostMagiclinkMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otp.$post>>>>>,
        TError,
        InferRequestType<typeof client.otp.$post>,
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
    const mutationDefaults = getPostOtpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
        TError,
        InferRequestType<typeof client.user.$put>,
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
    const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserIdentitiesAuthorizeQueryKey(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
) {
  return ['user', '/user/identities/authorize', args] as const
}

export function getUserIdentitiesAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdentitiesAuthorizeQueryKey>
  >({
    queryKey: getUserIdentitiesAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.identities.authorize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserIdentitiesAuthorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.identities.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdentitiesAuthorizeQueryKey>
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
      ...getUserIdentitiesAuthorizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteUserIdentitiesIdentityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserIdentitiesIdentityIdMutationOptions<
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

export function getUserOauthGrantsQueryKey() {
  return ['user', '/user/oauth/grants'] as const
}

export function getUserOauthGrantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserOauthGrantsQueryKey>
  >({
    queryKey: getUserOauthGrantsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.oauth.grants.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserOauthGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserOauthGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserOauthGrantsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteUserOauthGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserOauthGrantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostReauthenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reauthenticate.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostReauthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFactors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.factors.$post>>>>>,
        TError,
        InferRequestType<typeof client.factors.$post>,
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
    const mutationDefaults = getPostFactorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFactorsFactorIdChallenge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFactorsFactorIdChallengeMutationOptions<
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

export function injectPostFactorsFactorIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFactorsFactorIdVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFactorsFactorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFactorsFactorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFactorsRecoveryCodesQueryKey() {
  return ['factors', '/factors/recovery-codes'] as const
}

export function getFactorsRecoveryCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFactorsRecoveryCodesQueryKey>
  >({
    queryKey: getFactorsRecoveryCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.factors['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFactorsRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
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
              Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactorsRecoveryCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFactorsRecoveryCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFactorsRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFactorsRecoveryCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFactorsRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFactorsRecoveryCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFactorsRecoveryCodesVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFactorsRecoveryCodesVerifyMutationOptions<
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

export function injectPostFactorsRecoveryCodesRegenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFactorsRecoveryCodesRegenerateMutationOptions<
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

export function getCallbackQueryKey() {
  return ['callback', '/callback'] as const
}

export function getCallbackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallbackQueryKey>
  >({
    queryKey: getCallbackQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.callback.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallbackQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCallback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostCallbackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.$post>>>>>,
        TError,
        InferRequestType<typeof client.sso.$post>,
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
    const mutationDefaults = getPostSsoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSamlMetadataQueryKey(args: InferRequestType<typeof client.saml.metadata.$get>) {
  return ['saml', '/saml/metadata', args] as const
}

export function getSamlMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saml.metadata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlMetadataQueryKey>
  >({
    queryKey: getSamlMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saml.metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSamlMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.saml.metadata.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSamlMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSamlMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSamlAcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.saml.acs.$post>,
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
    const mutationDefaults = getPostSamlAcsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite.$post>>>>>,
        TError,
        InferRequestType<typeof client.invite.$post>,
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
    const mutationDefaults = getPostInviteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAdminGenerateLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.generate_link.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.generate_link.$post>,
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
    const mutationDefaults = getPostAdminGenerateLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminAuditQueryKey(args: InferRequestType<typeof client.admin.audit.$get>) {
  return ['admin', '/admin/audit', args] as const
}

export function getAdminAuditQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.audit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminAuditQueryKey>
  >({
    queryKey: getAdminAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.audit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.audit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminAuditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdminUsersQueryKey(args: InferRequestType<typeof client.admin.users.$get>) {
  return ['admin', '/admin/users', args] as const
}

export function getAdminUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >({
    queryKey: getAdminUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdminUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
) {
  return ['admin', '/admin/users/:userId', args] as const
}

export function getAdminUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdQueryKey>
  >({
    queryKey: getAdminUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminUsersUserIdFactorsQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
) {
  return ['admin', '/admin/users/:userId/factors', args] as const
}

export function getAdminUsersUserIdFactorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminUsersUserIdFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':userId'].factors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminUsersUserIdFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminUsersUserIdFactorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminUsersUserIdFactorsFactorId<
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
                ReturnType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>,
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
    const mutationDefaults = getPutAdminUsersUserIdFactorsFactorIdMutationOptions<
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

export function injectDeleteAdminUsersUserIdFactorsFactorId<
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
                  (typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']>,
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
    const mutationDefaults = getDeleteAdminUsersUserIdFactorsFactorIdMutationOptions<
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

export function getAdminSsoProvidersQueryKey() {
  return ['admin', '/admin/sso/providers'] as const
}

export function getAdminSsoProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSsoProvidersQueryKey>
  >({
    queryKey: getAdminSsoProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sso.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminSsoProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSsoProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminSsoProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdminSsoProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.sso.providers.$post>,
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
    const mutationDefaults = getPostAdminSsoProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminSsoProvidersSsoProviderIdQueryKey(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
) {
  return ['admin', '/admin/sso/providers/:ssoProviderId', args] as const
}

export function getAdminSsoProvidersSsoProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminSsoProvidersSsoProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sso.providers[':ssoProviderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminSsoProvidersSsoProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminSsoProvidersSsoProviderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminSsoProvidersSsoProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminSsoProvidersSsoProviderIdMutationOptions<
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

export function injectDeleteAdminSsoProvidersSsoProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminSsoProvidersSsoProviderIdMutationOptions<
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

export function getAdminOauthClientsQueryKey(
  args: InferRequestType<typeof client.admin.oauth.clients.$get>,
) {
  return ['admin', '/admin/oauth/clients', args] as const
}

export function getAdminOauthClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.oauth.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOauthClientsQueryKey>
  >({
    queryKey: getAdminOauthClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminOauthClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.oauth.clients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminOauthClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminOauthClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdminOauthClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.oauth.clients.$post>,
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
    const mutationDefaults = getPostAdminOauthClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminOauthClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
) {
  return ['admin', '/admin/oauth/clients/:client_id', args] as const
}

export function getAdminOauthClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminOauthClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.oauth.clients[':client_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminOauthClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminOauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminOauthClientsClientIdMutationOptions<
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

export function injectDeleteAdminOauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminOauthClientsClientIdMutationOptions<
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

export function injectPostAdminOauthClientsClientIdRegenerateSecret<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminOauthClientsClientIdRegenerateSecretMutationOptions<
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

export function getAdminCustomProvidersQueryKey(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
) {
  return ['admin', '/admin/custom-providers', args] as const
}

export function getAdminCustomProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomProvidersQueryKey>
  >({
    queryKey: getAdminCustomProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin['custom-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminCustomProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminCustomProvidersQueryKey>
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
      ...getAdminCustomProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAdminCustomProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminCustomProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminCustomProvidersIdentifierQueryKey(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
) {
  return ['admin', '/admin/custom-providers/:identifier', args] as const
}

export function getAdminCustomProvidersIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminCustomProvidersIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin['custom-providers'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminCustomProvidersIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminCustomProvidersIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminCustomProvidersIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminCustomProvidersIdentifierMutationOptions<
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

export function injectDeleteAdminCustomProvidersIdentifier<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminCustomProvidersIdentifierMutationOptions<
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

export function injectPostOauthClientsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.clients.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.clients.register.$post>,
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
    const mutationDefaults = getPostOauthClientsRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
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
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function getOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >({
    queryKey: getOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oauth.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOauthAuthorizationsAuthorizationIdQueryKey(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
) {
  return ['oauth', '/oauth/authorizations/:authorization_id', args] as const
}

export function getOauthAuthorizationsAuthorizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOauthAuthorizationsAuthorizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorizations[':authorization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOauthAuthorizationsAuthorizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOauthAuthorizationsAuthorizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOauthAuthorizationsAuthorizationIdConsent<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthAuthorizationsAuthorizationIdConsentMutationOptions<
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
