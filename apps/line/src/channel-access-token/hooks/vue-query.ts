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

export function usePostOauth2V3Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v3.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth2.v3.token.$post>,
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
  const mutationDefaults = getPostOauth2V3TokenMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2V21TokensKidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>,
) {
  return ['oauth2', '/oauth2/v2.1/tokens/kid', toValue(args)] as const
}

export function getOauth2V21TokensKidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth2V21TokensKidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['v2.1'].tokens.kid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2V21TokensKid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth2V21TokensKidQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)['v2.1']['tokens']['kid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V21TokensKidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth2V21TokensKidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['v2.1'].tokens.kid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOauth2V21Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostOauth2V21TokenMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2V21VerifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>>,
) {
  return ['oauth2', '/oauth2/v2.1/verify', toValue(args)] as const
}

export function getOauth2V21VerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth2V21VerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['v2.1'].verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2V21Verify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)['v2.1']['verify']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth2V21VerifyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['v2.1']['verify']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V21VerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth2V21VerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['v2.1'].verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOauth2V21Revoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostOauth2V21RevokeMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.accessToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.accessToken.$post>,
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
  const mutationDefaults = getPostV2OauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OauthVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.verify.$post>,
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
  const mutationDefaults = getPostV2OauthVerifyMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2OauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.revoke.$post>,
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
  const mutationDefaults = getPostV2OauthRevokeMutationOptions<TError, TOnMutateResult>(
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
