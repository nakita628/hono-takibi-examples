import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getUserinfoKey() {
  return ['userinfo'] as const
}

export function getPostOauth2V2TokeninfoMutationKey() {
  return ['oauth2', '/oauth2/v2/tokeninfo', 'POST'] as const
}

export function getPostOauth2V2TokeninfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.tokeninfo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2V2TokeninfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>) {
      return parseResponse(client.oauth2.v2.tokeninfo.$post(args, options))
    },
  })
}

export function createPostOauth2V2Tokeninfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.tokeninfo.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauth2V2TokeninfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOauth2V2UserinfoQueryKey(
  args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
) {
  return ['oauth2', '/oauth2/v2/userinfo', args] as const
}

export function getOauth2V2UserinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth2.v2.userinfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V2UserinfoQueryKey>
  >({
    queryKey: getOauth2V2UserinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2.v2.userinfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauth2V2Userinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oauth2.v2.userinfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauth2V2UserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauth2V2UserinfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserinfoV2MeQueryKey(args: InferRequestType<typeof client.userinfo.v2.me.$get>) {
  return ['userinfo', '/userinfo/v2/me', args] as const
}

export function getUserinfoV2MeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.userinfo.v2.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserinfoV2MeQueryKey>
  >({
    queryKey: getUserinfoV2MeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.userinfo.v2.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserinfoV2Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.userinfo.v2.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserinfoV2MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserinfoV2MeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
