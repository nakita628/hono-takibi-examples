import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostTokenKey() {
  return ['token', '/token', 'POST'] as const
}

export function usePostToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.token.$post> }) =>
        parseResponse(client.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogoutKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function usePostLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logout.$post> }) =>
        parseResponse(client.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerifyKey(args: InferRequestType<typeof client.verify.$get>) {
  return ['verify', '/verify', args] as const
}

export function useGetVerify<TError = unknown>(
  args: InferRequestType<typeof client.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerifyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.verify.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVerify<TError = unknown>(
  args: InferRequestType<typeof client.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerifyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.verify.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVerifyKey() {
  return ['verify', '/verify', 'POST'] as const
}

export function usePostVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verify.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verify.$post> }) =>
        parseResponse(client.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizeKey(args: InferRequestType<typeof client.authorize.$get>) {
  return ['authorize', '/authorize', args] as const
}

export function useGetAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignupKey() {
  return ['signup', '/signup', 'POST'] as const
}

export function usePostSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.signup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signup.$post> }) =>
        parseResponse(client.signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecoverKey() {
  return ['recover', '/recover', 'POST'] as const
}

export function usePostRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recover.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.recover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recover.$post> }) =>
        parseResponse(client.recover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResendKey() {
  return ['resend', '/resend', 'POST'] as const
}

export function usePostResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resend.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.resend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resend.$post> }) =>
        parseResponse(client.resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMagiclinkKey() {
  return ['magiclink', '/magiclink', 'POST'] as const
}

export function usePostMagiclink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magiclink.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.magiclink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMagiclinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.magiclink.$post> }) =>
        parseResponse(client.magiclink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOtpKey() {
  return ['otp', '/otp', 'POST'] as const
}

export function usePostOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otp.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.otp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.otp.$post> }) =>
        parseResponse(client.otp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserKey() {
  return ['user', '/user', 'PUT'] as const
}

export function usePutUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$put> }) =>
        parseResponse(client.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdentitiesAuthorizeKey(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
) {
  return ['user', '/user/identities/authorize', args] as const
}

export function useGetUserIdentitiesAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserIdentitiesAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.identities.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdentitiesAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.user.identities.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserIdentitiesAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.identities.authorize.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.identities.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserIdentitiesIdentityIdKey() {
  return ['user', '/user/identities/:identityId', 'DELETE'] as const
}

export function useDeleteUserIdentitiesIdentityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.identities)[':identityId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.identities)[':identityId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdentitiesIdentityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user.identities)[':identityId']['$delete']> },
      ) => parseResponse(client.user.identities[':identityId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserOauthGrantsKey() {
  return ['user', '/user/oauth/grants'] as const
}

export function useGetUserOauthGrants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserOauthGrantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.oauth.grants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserOauthGrants<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserOauthGrantsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.oauth.grants.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserOauthGrantsKey() {
  return ['user', '/user/oauth/grants', 'DELETE'] as const
}

export function useDeleteUserOauthGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.oauth.grants.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user.oauth.grants.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserOauthGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.oauth.grants.$delete> }) =>
        parseResponse(client.user.oauth.grants.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReauthenticateKey() {
  return ['reauthenticate', '/reauthenticate', 'POST'] as const
}

export function usePostReauthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reauthenticate.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReauthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.reauthenticate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsKey() {
  return ['factors', '/factors', 'POST'] as const
}

export function usePostFactors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.factors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.factors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.factors.$post> }) =>
        parseResponse(client.factors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsFactorIdChallengeKey() {
  return ['factors', '/factors/:factorId/challenge', 'POST'] as const
}

export function usePostFactorsFactorIdChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)[':factorId']['challenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsFactorIdChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.factors)[':factorId']['challenge']['$post']> },
      ) => parseResponse(client.factors[':factorId'].challenge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsFactorIdVerifyKey() {
  return ['factors', '/factors/:factorId/verify', 'POST'] as const
}

export function usePostFactorsFactorIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)[':factorId']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsFactorIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.factors)[':factorId']['verify']['$post']> },
      ) => parseResponse(client.factors[':factorId'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFactorsFactorIdKey() {
  return ['factors', '/factors/:factorId', 'DELETE'] as const
}

export function useDeleteFactorsFactorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)[':factorId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.factors)[':factorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFactorsFactorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.factors)[':factorId']['$delete']> },
      ) => parseResponse(client.factors[':factorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFactorsRecoveryCodesKey() {
  return ['factors', '/factors/recovery-codes'] as const
}

export function useGetFactorsRecoveryCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
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
        ? getGetFactorsRecoveryCodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.factors['recovery-codes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFactorsRecoveryCodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>>
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
        ? getGetFactorsRecoveryCodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.factors['recovery-codes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFactorsRecoveryCodesKey() {
  return ['factors', '/factors/recovery-codes', 'POST'] as const
}

export function usePostFactorsRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.factors)['recovery-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.factors)['recovery-codes']['$post']> },
      ) => parseResponse(client.factors['recovery-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFactorsRecoveryCodesKey() {
  return ['factors', '/factors/recovery-codes', 'DELETE'] as const
}

export function useDeleteFactorsRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['$delete']>>
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
  const swrKey = customKey ?? getDeleteFactorsRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.factors['recovery-codes'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsRecoveryCodesVerifyKey() {
  return ['factors', '/factors/recovery-codes/verify', 'POST'] as const
}

export function usePostFactorsRecoveryCodesVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsRecoveryCodesVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.factors)['recovery-codes']['verify']['$post']> },
      ) => parseResponse(client.factors['recovery-codes'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsRecoveryCodesRegenerateKey() {
  return ['factors', '/factors/recovery-codes/regenerate', 'POST'] as const
}

export function usePostFactorsRecoveryCodesRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.factors)['recovery-codes']['regenerate']['$post']>>
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
  const swrKey = customKey ?? getPostFactorsRecoveryCodesRegenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.factors['recovery-codes'].regenerate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallbackKey() {
  return ['callback', '/callback'] as const
}

export function useGetCallback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallbackKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.callback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallback<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallbackKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.callback.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallbackKey() {
  return ['callback', '/callback', 'POST'] as const
}

export function usePostCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.callback.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSsoKey() {
  return ['sso', '/sso', 'POST'] as const
}

export function usePostSso<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sso.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sso.$post> }) =>
        parseResponse(client.sso.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSamlMetadataKey(args: InferRequestType<typeof client.saml.metadata.$get>) {
  return ['saml', '/saml/metadata', args] as const
}

export function useGetSamlMetadata<TError = unknown>(
  args: InferRequestType<typeof client.saml.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamlMetadata<TError = unknown>(
  args: InferRequestType<typeof client.saml.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSamlAcsKey() {
  return ['saml', '/saml/acs', 'POST'] as const
}

export function usePostSamlAcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.saml.acs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamlAcsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saml.acs.$post> }) =>
        parseResponse(client.saml.acs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInviteKey() {
  return ['invite', '/invite', 'POST'] as const
}

export function usePostInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invite.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invite.$post> }) =>
        parseResponse(client.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminGenerateLinkKey() {
  return ['admin', '/admin/generate_link', 'POST'] as const
}

export function usePostAdminGenerateLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.generate_link.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.generate_link.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminGenerateLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.generate_link.$post> }) =>
        parseResponse(client.admin.generate_link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminAuditKey(args: InferRequestType<typeof client.admin.audit.$get>) {
  return ['admin', '/admin/audit', args] as const
}

export function useGetAdminAudit<TError = unknown>(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAudit<TError = unknown>(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminAuditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminUsersKey(args: InferRequestType<typeof client.admin.users.$get>) {
  return ['admin', '/admin/users', args] as const
}

export function useGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminUsersUserIdKey(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
) {
  return ['admin', '/admin/users/:userId', args] as const
}

export function useGetAdminUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminUsersUserIdKey() {
  return ['admin', '/admin/users/:userId', 'PUT'] as const
}

export function usePutAdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':userId']['$put']> },
      ) => parseResponse(client.admin.users[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersUserIdKey() {
  return ['admin', '/admin/users/:userId', 'DELETE'] as const
}

export function useDeleteAdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':userId']['$delete']> },
      ) => parseResponse(client.admin.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersUserIdFactorsKey(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
) {
  return ['admin', '/admin/users/:userId/factors', args] as const
}

export function useGetAdminUsersUserIdFactors<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
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
        ? getGetAdminUsersUserIdFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':userId'].factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersUserIdFactors<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':userId']['factors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
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
        ? getGetAdminUsersUserIdFactorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':userId']['factors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':userId'].factors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminUsersUserIdFactorsFactorIdKey() {
  return ['admin', '/admin/users/:userId/factors/:factorId', 'PUT'] as const
}

export function usePutAdminUsersUserIdFactorsFactorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdFactorsFactorIdKey()
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
            (typeof client.admin.users)[':userId']['factors'][':factorId']['$put']
          >
        },
      ) =>
        parseResponse(client.admin.users[':userId'].factors[':factorId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersUserIdFactorsFactorIdKey() {
  return ['admin', '/admin/users/:userId/factors/:factorId', 'DELETE'] as const
}

export function useDeleteAdminUsersUserIdFactorsFactorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersUserIdFactorsFactorIdKey()
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
            (typeof client.admin.users)[':userId']['factors'][':factorId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.users[':userId'].factors[':factorId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSsoProvidersKey() {
  return ['admin', '/admin/sso/providers'] as const
}

export function useGetAdminSsoProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSsoProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.sso.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSsoProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSsoProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.sso.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminSsoProvidersKey() {
  return ['admin', '/admin/sso/providers', 'POST'] as const
}

export function usePostAdminSsoProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.sso.providers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.sso.providers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSsoProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.sso.providers.$post> }) =>
        parseResponse(client.admin.sso.providers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSsoProvidersSsoProviderIdKey(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
) {
  return ['admin', '/admin/sso/providers/:ssoProviderId', args] as const
}

export function useGetAdminSsoProvidersSsoProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
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
        ? getGetAdminSsoProvidersSsoProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.sso.providers[':ssoProviderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSsoProvidersSsoProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
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
        ? getGetAdminSsoProvidersSsoProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.sso.providers[':ssoProviderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminSsoProvidersSsoProviderIdKey() {
  return ['admin', '/admin/sso/providers/:ssoProviderId', 'PUT'] as const
}

export function usePutAdminSsoProvidersSsoProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminSsoProvidersSsoProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$put']> },
      ) => parseResponse(client.admin.sso.providers[':ssoProviderId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminSsoProvidersSsoProviderIdKey() {
  return ['admin', '/admin/sso/providers/:ssoProviderId', 'DELETE'] as const
}

export function useDeleteAdminSsoProvidersSsoProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminSsoProvidersSsoProviderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.sso.providers)[':ssoProviderId']['$delete']>
        },
      ) => parseResponse(client.admin.sso.providers[':ssoProviderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauthClientsKey(
  args: InferRequestType<typeof client.admin.oauth.clients.$get>,
) {
  return ['admin', '/admin/oauth/clients', args] as const
}

export function useGetAdminOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauthClients<TError = unknown>(
  args: InferRequestType<typeof client.admin.oauth.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOauthClientsKey() {
  return ['admin', '/admin/oauth/clients', 'POST'] as const
}

export function usePostAdminOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.oauth.clients.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.oauth.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOauthClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.oauth.clients.$post> }) =>
        parseResponse(client.admin.oauth.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOauthClientsClientIdKey(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
) {
  return ['admin', '/admin/oauth/clients/:client_id', args] as const
}

export function useGetAdminOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
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
        ? getGetAdminOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
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
        ? getGetAdminOauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.oauth.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminOauthClientsClientIdKey() {
  return ['admin', '/admin/oauth/clients/:client_id', 'PUT'] as const
}

export function usePutAdminOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$put']> },
      ) => parseResponse(client.admin.oauth.clients[':client_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOauthClientsClientIdKey() {
  return ['admin', '/admin/oauth/clients/:client_id', 'DELETE'] as const
}

export function useDeleteAdminOauthClientsClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOauthClientsClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.oauth.clients)[':client_id']['$delete']> },
      ) => parseResponse(client.admin.oauth.clients[':client_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOauthClientsClientIdRegenerateSecretKey() {
  return ['admin', '/admin/oauth/clients/:client_id/regenerate_secret', 'POST'] as const
}

export function usePostAdminOauthClientsClientIdRegenerateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOauthClientsClientIdRegenerateSecretKey()
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
            (typeof client.admin.oauth.clients)[':client_id']['regenerate_secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.oauth.clients[':client_id'].regenerate_secret.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomProvidersKey(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
) {
  return ['admin', '/admin/custom-providers', args] as const
}

export function useGetAdminCustomProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
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
        ? getGetAdminCustomProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['custom-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['custom-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
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
        ? getGetAdminCustomProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['custom-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomProvidersKey() {
  return ['admin', '/admin/custom-providers', 'POST'] as const
}

export function usePostAdminCustomProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['custom-providers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['custom-providers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['custom-providers']['$post']> },
      ) => parseResponse(client.admin['custom-providers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomProvidersIdentifierKey(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
) {
  return ['admin', '/admin/custom-providers/:identifier', args] as const
}

export function useGetAdminCustomProvidersIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
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
        ? getGetAdminCustomProvidersIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['custom-providers'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomProvidersIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
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
        ? getGetAdminCustomProvidersIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['custom-providers'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminCustomProvidersIdentifierKey() {
  return ['admin', '/admin/custom-providers/:identifier', 'PUT'] as const
}

export function usePutAdminCustomProvidersIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminCustomProvidersIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$put']>
        },
      ) => parseResponse(client.admin['custom-providers'][':identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCustomProvidersIdentifierKey() {
  return ['admin', '/admin/custom-providers/:identifier', 'DELETE'] as const
}

export function useDeleteAdminCustomProvidersIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCustomProvidersIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['custom-providers'][':identifier']['$delete']>
        },
      ) =>
        parseResponse(client.admin['custom-providers'][':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsRegisterKey() {
  return ['oauth', '/oauth/clients/register', 'POST'] as const
}

export function usePostOauthClientsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.clients.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.clients.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth.clients.register.$post> },
      ) => parseResponse(client.oauth.clients.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthAuthorizeKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function useGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthAuthorizationsAuthorizationIdKey(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
) {
  return ['oauth', '/oauth/authorizations/:authorization_id', args] as const
}

export function useGetOauthAuthorizationsAuthorizationId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
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
        ? getGetOauthAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth.authorizations[':authorization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorizationsAuthorizationId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
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
        ? getGetOauthAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.authorizations)[':authorization_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth.authorizations[':authorization_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthAuthorizationsAuthorizationIdConsentKey() {
  return ['oauth', '/oauth/authorizations/:authorization_id/consent', 'POST'] as const
}

export function usePostOauthAuthorizationsAuthorizationIdConsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthorizationsAuthorizationIdConsentKey()
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
            (typeof client.oauth.authorizations)[':authorization_id']['consent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.oauth.authorizations[':authorization_id'].consent.$post(arg, clientOptions),
        ),
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

export function getGetSettingsKey() {
  return ['settings', '/settings'] as const
}

export function useGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
