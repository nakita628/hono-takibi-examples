import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOauth2V3TokenMutationKey() {
  return ['oauth2', '/oauth2/v3/token', 'POST'] as const
}

export function getPostOauth2V3TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v3.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.v3.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2V3TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.v3.token.$post>) {
      return parseResponse(client.oauth2.v3.token.$post(args, options))
    },
  })
}

export function createPostOauth2V3Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v3.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth2.v3.token.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauth2V3TokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOauth2V21TokensKidQueryKey(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
) {
  return ['oauth2', '/oauth2/v2.1/tokens/kid', args] as const
}

export function getOauth2V21TokensKidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V21TokensKidQueryKey>
  >({
    queryKey: getOauth2V21TokensKidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2['v2.1'].tokens.kid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOauth2V21TokensKid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOauth2V21TokensKidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauth2V21TokensKidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOauth2V21TokenMutationKey() {
  return ['oauth2', '/oauth2/v2.1/token', 'POST'] as const
}

export function getPostOauth2V21TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2V21TokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']>) {
      return parseResponse(client.oauth2['v2.1'].token.$post(args, options))
    },
  })
}

export function createPostOauth2V21Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['v2.1']['token']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauth2V21TokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOauth2V21VerifyQueryKey(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
) {
  return ['oauth2', '/oauth2/v2.1/verify', args] as const
}

export function getOauth2V21VerifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V21VerifyQueryKey>
  >({
    queryKey: getOauth2V21VerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth2['v2.1'].verify.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauth2V21Verify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOauth2V21VerifyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauth2V21VerifyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOauth2V21RevokeMutationKey() {
  return ['oauth2', '/oauth2/v2.1/revoke', 'POST'] as const
}

export function getPostOauth2V21RevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['revoke']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2V21RevokeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']>) {
      return parseResponse(client.oauth2['v2.1'].revoke.$post(args, options))
    },
  })
}

export function createPostOauth2V21Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)['v2.1']['revoke']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauth2V21RevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2OauthAccessTokenMutationKey() {
  return ['v2', '/v2/oauth/accessToken', 'POST'] as const
}

export function getPostV2OauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.accessToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.oauth.accessToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.oauth.accessToken.$post>) {
      return parseResponse(client.v2.oauth.accessToken.$post(args, options))
    },
  })
}

export function createPostV2OauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.accessToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.accessToken.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthAccessTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2OauthVerifyMutationKey() {
  return ['v2', '/v2/oauth/verify', 'POST'] as const
}

export function getPostV2OauthVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.oauth.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.oauth.verify.$post>) {
      return parseResponse(client.v2.oauth.verify.$post(args, options))
    },
  })
}

export function createPostV2OauthVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.verify.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2OauthRevokeMutationKey() {
  return ['v2', '/v2/oauth/revoke', 'POST'] as const
}

export function getPostV2OauthRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.oauth.revoke.$post>) {
      return parseResponse(client.v2.oauth.revoke.$post(args, options))
    },
  })
}

export function createPostV2OauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.revoke.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
