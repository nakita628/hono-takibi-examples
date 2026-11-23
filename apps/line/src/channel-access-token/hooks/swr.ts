import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOauth2V3TokenKey() {
  return ['oauth2', '/oauth2/v3/token', 'POST'] as const
}

export function usePostOauth2V3Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v3.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.v3.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2V3TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.v3.token.$post> }) =>
        parseResponse(client.oauth2.v3.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2V21TokensKidKey(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
) {
  return ['oauth2', '/oauth2/v2.1/tokens/kid', args] as const
}

export function useGetOauth2V21TokensKid<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
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
        ? getGetOauth2V21TokensKidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['v2.1'].tokens.kid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2V21TokensKid<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
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
        ? getGetOauth2V21TokensKidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['v2.1'].tokens.kid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2V21TokenKey() {
  return ['oauth2', '/oauth2/v2.1/token', 'POST'] as const
}

export function usePostOauth2V21Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['token']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2V21TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']> },
      ) => parseResponse(client.oauth2['v2.1'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2V21VerifyKey(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
) {
  return ['oauth2', '/oauth2/v2.1/verify', args] as const
}

export function useGetOauth2V21Verify<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
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
        ? getGetOauth2V21VerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['v2.1'].verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2V21Verify<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
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
        ? getGetOauth2V21VerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['v2.1'].verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2V21RevokeKey() {
  return ['oauth2', '/oauth2/v2.1/revoke', 'POST'] as const
}

export function usePostOauth2V21Revoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['revoke']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2V21RevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']> },
      ) => parseResponse(client.oauth2['v2.1'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OauthAccessTokenKey() {
  return ['v2', '/v2/oauth/accessToken', 'POST'] as const
}

export function usePostV2OauthAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.accessToken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.oauth.accessToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.oauth.accessToken.$post> },
      ) => parseResponse(client.v2.oauth.accessToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OauthVerifyKey() {
  return ['v2', '/v2/oauth/verify', 'POST'] as const
}

export function usePostV2OauthVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.oauth.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.oauth.verify.$post> }) =>
        parseResponse(client.v2.oauth.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2OauthRevokeKey() {
  return ['v2', '/v2/oauth/revoke', 'POST'] as const
}

export function usePostV2OauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.oauth.revoke.$post> }) =>
        parseResponse(client.v2.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
