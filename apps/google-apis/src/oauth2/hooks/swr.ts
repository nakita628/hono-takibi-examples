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

export function getUserinfoKey() {
  return ['userinfo'] as const
}

export function getPostOauth2V2TokeninfoKey() {
  return ['oauth2', '/oauth2/v2/tokeninfo', 'POST'] as const
}

export function usePostOauth2V2Tokeninfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.tokeninfo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2V2TokeninfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.v2.tokeninfo.$post> }) =>
        parseResponse(client.oauth2.v2.tokeninfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2V2UserinfoKey(
  args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
) {
  return ['oauth2', '/oauth2/v2/userinfo', args] as const
}

export function useGetOauth2V2Userinfo<TError = unknown>(
  args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2V2UserinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.v2.userinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2V2Userinfo<TError = unknown>(
  args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOauth2V2UserinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.v2.userinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserinfoV2MeKey(args: InferRequestType<typeof client.userinfo.v2.me.$get>) {
  return ['userinfo', '/userinfo/v2/me', args] as const
}

export function useGetUserinfoV2Me<TError = unknown>(
  args: InferRequestType<typeof client.userinfo.v2.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserinfoV2MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userinfo.v2.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserinfoV2Me<TError = unknown>(
  args: InferRequestType<typeof client.userinfo.v2.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserinfoV2MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.userinfo.v2.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
