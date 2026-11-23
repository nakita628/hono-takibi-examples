import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPostOauth202609TokenMutationKey() {
  return ['oauth', '/oauth/2026-09/token', 'POST'] as const
}

export function getPostOauth202609TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth202609TokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']>) {
      return parseResponse(client.oauth['2026-09'].token.$post(args, options))
    },
  })
}

export function usePostOauth202609Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']>,
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
  const mutationDefaults = getPostOauth202609TokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauth202609TokenIntrospectMutationKey() {
  return ['oauth', '/oauth/2026-09/token/introspect', 'POST'] as const
}

export function getPostOauth202609TokenIntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth202609TokenIntrospectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>,
    ) {
      return parseResponse(client.oauth['2026-09'].token.introspect.$post(args, options))
    },
  })
}

export function usePostOauth202609TokenIntrospect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>,
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
  const mutationDefaults = getPostOauth202609TokenIntrospectMutationOptions<
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

export function getPostOauth202609TokenRevokeMutationKey() {
  return ['oauth', '/oauth/2026-09/token/revoke', 'POST'] as const
}

export function getPostOauth202609TokenRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth202609TokenRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>,
    ) {
      return parseResponse(client.oauth['2026-09'].token.revoke.$post(args, options))
    },
  })
}

export function usePostOauth202609TokenRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>,
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
  const mutationDefaults = getPostOauth202609TokenRevokeMutationOptions<TError, TOnMutateResult>(
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
