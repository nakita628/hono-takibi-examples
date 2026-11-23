import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPostOauth202609TokenKey() {
  return ['oauth', '/oauth/2026-09/token', 'POST'] as const
}

export function usePostOauth202609Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth202609TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']> },
      ) => parseResponse(client.oauth['2026-09'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth202609TokenIntrospectKey() {
  return ['oauth', '/oauth/2026-09/token/introspect', 'POST'] as const
}

export function usePostOauth202609TokenIntrospect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth202609TokenIntrospectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>
        },
      ) => parseResponse(client.oauth['2026-09'].token.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauth202609TokenRevokeKey() {
  return ['oauth', '/oauth/2026-09/token/revoke', 'POST'] as const
}

export function usePostOauth202609TokenRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth202609TokenRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']> },
      ) => parseResponse(client.oauth['2026-09'].token.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
